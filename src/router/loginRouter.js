const Login = require('../controllers/createLoginUser');
const express = require('express');
const router = express.Router();

router
    .route('/login')
    .post(Login.LoginUSer);

module.exports = router;
