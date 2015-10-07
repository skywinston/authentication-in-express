var express = require('express');
var router = express.Router();
var User = require('../models/users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    user : req.cookies.user
  });
});

router.route('/signup')
  .get(function(req, res){
    res.render('signup',{
      errors : '',
      inputs : ''
    });
  })
  .post(function(req, res){
    var errors = [];
    User.findOne( { email : req.body.email }, function(err, user){
      // Validations
      if(!req.body.email || req.body.email.indexOf('@') === -1) {
        errors.push("Email cannot be blank");
      } else if (!req.body.password || !req.body.password_confirm){
        errors.push("Password cannot be blank")
      } else if (req.body.password !== req.body.password_confirm){
        errors.push("Passwords entered do not match")
      } else if (req.body.password.length < 8){
        errors.push("Password must be at least 8 characters long")
      } else if (user){
        console.log("User already exists");
        errors.push("User already exists");
      }

      // If errors, rerender with errors partial
      if(errors.length > 0){
        res.render('signup', {
          errors : errors,
          inputs : req.body
        });
      }

      // If user does not exist, create user and redirect to home page
      if(!user){
        User.create(req.body, function(err, user){
          res.cookie('foo','bar');
          res.render('index');
        });
      }
    });
  });

router.route('/signin')
  .get(function(req, res){
    res.render('signin');
  })
  .post(function(req, res){
    var errors = [];
    User.findOne({ email : req.body.email }, function(err, user){
      // Authenticate email and password match:
      console.log("Error in user lookup:", err);
      if(!user){
        errors.push("Account with email " + req.body.email + " not found")
      } else if (user){
        if(req.body.password !== user.password){
          errors.push("Incorrect password");
        } else {
          // Found user and password matches
          res.cookie('user', user.email);
          res.redirect('/');
        }
      }

      if(errors.length){
        res.render('signin', {
          errors : errors,
          inputs : req.body
        })
      }
    })
  });

router.route('/signout')
.get(function(req, res){
  res.clearCookie('user');
  res.redirect('/');
});

module.exports = router;
