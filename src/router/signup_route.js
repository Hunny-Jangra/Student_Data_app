const signUpRoute = require('../controllers/signupController');
const express = require('express');
const { sign } = require('jsonwebtoken');
const router = express.Router();

// router
//     .route('/signup')
//     .post(signUpRoute.signUpControler);
    
module.exports = router;
