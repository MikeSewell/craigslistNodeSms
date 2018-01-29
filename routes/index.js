var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/search',(req, res, next)=>{
  let
    craigslist = require('node-craigslist'),
    client = new craigslist.Client({
      city: req.body.city
    });

  client
    .search(req.body.search)
    .then((listings) => {
      res.render('post',{listings})
      // play with listings here...
      listings.forEach((listing) => console.log(listing));
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
