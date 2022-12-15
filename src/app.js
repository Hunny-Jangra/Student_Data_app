const express = require('express');
const dotenv = require('dotenv');
const app = express();
const createSignupRouter = require('./router/createSignup');
const loginRouter = require('./router/loginRouter');
const studentRouterData = require('./router/studentRouter');
const mainPageData = require('./router/main_hero_Router');
const signupData = require('./router/signup_route');
const renderStudent = require('./router/render');
const path = require('path');
const axios = require('axios');

dotenv.config({
    path : './src/config.env'
})
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.set('view engine', 'pug');

app.get('/signUp', (req, res) => {
    res.status(200).render("signUp");
})

app.get('/login', (req, res) => {
    res.status(200).render("login");
})

app.use('/js',express.static(path.resolve(__dirname,"assests/js")))

app.use('/', mainPageData);
app.use('/', renderStudent);
app.use('/', signupData);
app.use('/', createSignupRouter);
app.use('/', loginRouter);
app.use('/', studentRouterData);

module.exports = app;