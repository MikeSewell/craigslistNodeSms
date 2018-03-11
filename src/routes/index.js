const express = require('express');
const findAndsms = require('../controllers/sms');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Craigslist Product Tracker' });
});


router.post('/search', async (req, res) => {
  findAndsms(req.body.city.trim(), req.body.item.trim());
  res.render('index', { title: 'Bot running' });
});


module.exports = router;

