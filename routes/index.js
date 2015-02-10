var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home/home',{underline:'home'});
});

router.get('/home', function(req, res) {
  res.render('home/home',{underline:'home'});
});

router.get('/ipad', function(req, res) {
  res.render('home/ipad',{underline:'ipad'});
});

router.get('/case', function(req, res) {
  res.render('home/case',{underline:'case'});
});

router.get('/contact', function(req, res) {
  res.render('home/contact',{underline:'contact'});
});


module.exports = router;
