const User = require('../models/User');
const jwt = require('jsonwebtoken');

// handling errors
const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { email: '', password: '' };

    // incorrect email
    if(err.message === 'incorrect email') {
        errors.email = 'that email is already registered'
    }

  // incorrect password
  if (err.message === 'incorrect password') {
    errors.password = 'That password is incorrect';
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const createToken = (id) => {
    return jwt.sign({id}, 'net ninja secret');
};

const signup = (req, res) => {
    res.render('signup');
};

const login = (req, res) => {
    res.render('login');
};

const signup_post = async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.create({ email, password });
      const token = createToken(user._id);
      res.cookie('jwt', token, { httpOnly: true });
      res.status(201).json({user});
    }
    catch(err) {
      const error = handleErrors(err);
      res.status(400).json({error});
    }
};

const login_post = (req, res) => {
    const { email, password } = req.body;

    try {
        
    } 
    
    catch (err) {
        const error = handleErrors(err);
        res.status(400).json({error});
    }
};

module.exports = { signup, login, signup_post, login_post };