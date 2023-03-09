const User = require('../models/User');

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
      res.status(201).json({user});
    }
    catch(err) {
      res.status(400).json({err});
    }
};

const login_post = (req, res) => {
    res.send('Login post.');
};

module.exports = { signup, login, signup_post, login_post };