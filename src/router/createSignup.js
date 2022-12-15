const createAccount = require('../controllers/createAccount');
const express = require('express');
const router = express.Router();

router
    .route('/signUp')
    .post(createAccount.signingUp);

module.exports = router;
