const express = require('express');
//body parser which is used  to make http bodies available to req.body
const bodyParser = require('body-parser');
//for definging models for our data
const mongoose = require('mongoose');
//authentication middleware
const passport = require('passport');
//used for handling user name and password local in our app
const LocalStrategy = require('passport-local').Strategy;

const app = express();
const port = 8000;
const cors = require('cors');
//make other apps hosted in other domain to acces the server.
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(passport.initialize());

const jwt = require('jsonwebtoken');

mongoose
  .connect('mongodb+srv://rmashego333:respect@cluster0.qmiee4k.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to MongoDb'))
  .catch(error => console.log('error connecting to monogdb', error)) /
  app.listen(port, () => {
    console.log('Server running on server 8000');
  });

const User = require('./models/user');
const Message = require('./models/messages');
//endpoint for registration of the user

app.post('/register', (req, res) => {
  const {name, email, password} = req.body;

  const newUser = new User({
    name,
    email,
    password,
  });

  newUser
    .save()
    .then(() => {
      res.status(200).json({message: 'user registered successfully'});
      console.log('user registered successfully');
    })
    .catch(error => {
      res.status(400).json({messsage: 'Error registering the user'});
      console.log('error regestering new user', error);
    });
});

//function for creating token for the user
const createToken = userId => {
  //set the token payload
  const payload = {
    userId: userId,
  };
  //generate token with key and expiration
  const token = jwt.sign(payload, '#Taelo13', {
    expiresIn: '1h',
  });
  return token;
};

//enpoint for log in the user
app.post('/login', (req, res) => {
  const {email, password} = req.body;

  //check if user provided email and passsword
  if (!email || !password) {
    return res.status(404).json({message: 'email and password are required'});
  }
  //check if user exists in databse

  User.findOne({
    email,
  })
    .then(user => {
      console.log('user', user);
      if (!user) {
        return res.status(404).json({message: 'user not found'});
      }
      //check  provided password with one in database
      if (user.password !== password) {
        return res.status(404).json({
          message: 'invalid password',
        });
      }
      const token = createToken(user._id);
      res.status(200).json({token});
    })
    .catch(error => {
      console.log('error in finding user', error);
      res.status(500).json({message: 'Internal server error'});
    });
});
