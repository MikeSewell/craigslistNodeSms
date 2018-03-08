const express = require('express');
const craigslist = require('node-craigslist');
const Post = require('../models/posts');
const utils = require('apex-util');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Craigslist Product Tracker' });
});


router.post('/search', async (req, res) => {
  const client = new craigslist.Client({
    city: req.body.city.trim(),
  });
  try {
    const listings = await client.search(req.body.item);
    listings.forEach(async (element) => {
      const {
        title, price, date, url, pid,
      } = element;
      const ndate = date.split(' ');
      Post.find({ pid }, async (errFind, dataFind) => {
        if (errFind) utils.log('err in find post', errFind, 2);

        if (!dataFind) {
          const newPost = await new Post({
            title,
            price,
            ndate,
            url,
            pid,
          });
          await newPost.save((errSave, dataSave) => {
            if (errSave) utils.log('err in find post', errSave, 2);
            utils.log('err in save post', dataSave, 2);
          });
        } else {
          utils.log('Post already stored in DB', dataFind, 2);
        }
      });
    });
    res.render('post', { listings });
  } catch (err) {
    utils.log('catch err  : ', err, 2);
  }
});


module.exports = router;
