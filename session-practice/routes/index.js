var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');
var session = require('cookie-session');
var User = require('../models/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.userId){
    res.render('index', { userId : req.session.userId, email : req.session.email });
  } else if (!req.session.userId){
    res.render('login', {errors : 'You have been logged out.  Please log in again.'});
  }
});

router.route('/register')
  .get(function(req, res){
    res.render('register', {
      inputs : '',
      errors : []
    });
  })
  .post(function(req, res){
    // run form validations
    var errors = [];
    User.findOne({email : req.body.email}, function(err, user){
      console.log(user);
      if(user){
        errors.push("User already exists!");
        res.render('register', { errors: errors });
      } else if (!user) {
        if(!req.body.email || !req.body.password || !req.body.passwordConfirm){
          errors.push("All fields are required.");
          res.render('register', { errors : errors, email : req.body.email });
        } else if (req.body.password !== req.body.passwordConfirm){
          errors.push("The passwords you have provided do not match.");
          res.render('register', {errors : errors, email : req.body.email });
        } else if (req.body.password.length < 8){
          errors.push("Password must be at least 8 characters in length.");
          res.render('register', { errors : errors, email : req.body.email });
        } else {
          var hash = bcrypt.hashSync(req.body.password, 8);
          User.create({ email : req.body.email, passwordDigest : hash }, function(err, user){
            req.session.userId = user._id;
            res.redirect('/');
          });
        }
      }
    });
  });

router.route('/login')
.get(function(req, res){
  res.render('login', {
    inputs : '',
    errors : []
  });
})
.post(function(req, res){
  var errors = [];
  User.findOne({email : req.body.email}, function(err, user){
    if(!user){
      errors.push('No user found with email address ' + req.body.email);
      res.render('login', { errors : errors });
    } else if (user) {
      if(bcrypt.compareSync(req.body.password, user.passwordDigest)){
        req.session.userId = user._id;
        req.session.email = user.email;
        res.redirect('/');
      } else {
        errors.push('The password provided is incorrect.');
        res.render('login', {errors : errors});
      }
    }
  });
});

router.route('/logout')
.get(function(req,res){
  req.session = null;
  res.redirect('/login');
});

router.route('/members-only')
.get(function(req,res){
  if(!req.session.userId){
    res.render('login', {errors : "You are not logged in. Please log in below."});
  } else if (req.session.userId) {
    res.render('members-only', {userId : req.session.userId, email : req.session.email});
  }
});

module.exports = router;
