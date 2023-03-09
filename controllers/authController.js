const signup = (req, res) => {
    res.render('signup');
};

const login = (req, res) => {
    res.render('login');
};

const signup_post = (req, res) => {
    res.send('Sign post.');
};

const login_post = (req, res) => {
    res.send('Login post.');
};

module.exports = { signup, login, signup_post, login_post };