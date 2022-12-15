const SignUp = require('../models/signup_model');
const bcrypt = require('bcryptjs');

exports.LoginUSer = async(req, res) => {
    try{
        const email = req.body.your_email;
        const password = req.body.your_password;
        const checkEmailinDB = await SignUp.findOne({email_Address : email});
        const isMatch = await bcrypt.compare(password, checkEmailinDB.password);
        // const token = await generateAuthToken();
        // console.log('Token part', token);
        if(checkEmailinDB) {
            if(isMatch) {
                res.status(200).redirect('/student/student-List/data');
            }else{
                res.status(400).send('Invalid Login Details');
            }
        }else{
            res.status(400).send('Please Signup Yourself, First');
        }
    }catch(error) {
        console.log('Error', error);
    }
}