const User = require('../models/User')

module.exports.signup_get = (req, res) => {
    res.render('signup');
}

module.exports.login_get = (req, res) => {
    res.render('login');
}

module.exports.signup_post = async (req, res) => {
    const { email, password } = req.body;

    console.log(email, password);
    res.send('user login');
  
}

module.exports.login_post = async (req, res) => {
    res.render('user login');
}