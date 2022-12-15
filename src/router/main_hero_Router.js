const homeRoute = require('../controllers/main_hero');
const express = require('express');
const router = express.Router();

router
    .route('/app/v1/student_data')
    .get(homeRoute.homeRouteHero);
    
module.exports = router;
