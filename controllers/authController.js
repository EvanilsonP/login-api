const signup = (req, res) => {
    res.send('Signup page');
};

const login = (req, res) => {
    res.send('login page');
};

const signup_post = (req, res) => {
    res.send('Sign post.');
};

const login_post = (req, res) => {
    res.send('Login post.');
};

module.exports = { signup, login, signup_post, login_post };