const craigslist = require('node-craigslist');
const Post = require('../models/posts');
const utils = require('apex-util');
const twilioClient = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
const moment = require('moment');


const sms = async (citySearch, itemSearch) => {
  const city = citySearch;
  const item = itemSearch;
  setInterval(async () => { // every 5 seconds run function
    const client = await new craigslist.Client({
      city,
    });
    try {
      const listings = await client.search(item); // search craigslist
      listings.forEach(async (element) => {
        const {
          title, price, date, url, pid,
        } = element;
        const ndate = date.split(' ');
        Post.find({ pid }, async (errFind, dataFind) => { // find item id
          if (errFind) utils.log('err in find post', errFind, 2);
          if (!dataFind[0]) {
            const newPost = await new Post({
              title,
              price,
              date: ndate[0],
              url,
              pid,
            });
            await newPost.save((errSave, dataSave) => {
              if (errSave) utils.log('err in save post', errSave, 2);
              utils.log('dataSave post', dataSave, 2);
              // add sms new saved post here
              if (moment(dataSave).isSame(Date.now(), 'day')) { // must be aleast a day old to send text
                twilioClient.messages
                  .create({
                    to: process.env.TO_SMS,
                    from: process.env.FROM_SMS,
                    body: url,
                  });
              }
            });
          } else {
            utils.log('Post already stored in DB', dataFind, 3);
          }
        });
      });
    } catch (err) {
      utils.log('catch err  : ', err, 2);
    }
    utils.log('Running Search', null, 0);
    utils.log('City : ', city, 0);
    utils.log('Item : ', item, 0);
  }, 5000);
};
module.exports = sms;
