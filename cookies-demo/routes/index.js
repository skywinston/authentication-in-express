var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.cookie("fraggle", req.query.foo);  // this will add the key 'fraggle' and the value req.query.foo to the Set-Cookie Header in the response object
  res.render('index', { title: req.query.foo });
});

router.get('/show', function(req, res, next) {
  res.render('index', { title: req.cookies.fraggle });
});

router.get('/delete', function(req, res, next) {
  res.render('index', { title: res.clearCookie("fraggle") }); // Setting it as the title value so that its value renders on the index page
});

module.exports = router;
