const SignUp = require('../models/signup_model');

exports.signingUp = async(req, res) =>{
    try{
        const password = req.body.your_password;
        const cpassword = req.body.confirm_password;
        if(password === cpassword) {
            const registerStudent = new SignUp({
                name : req.body.your_name,
                email_Address : req.body.your_email,
                password,
                confirmPassword : cpassword
            })
            const token = await registerStudent.generateAuthToken();
            
            res.cookie("jwt", token, {
                httpOnly: true
            })
            registerStudent.save();
            res.status(201).render("hero");
            
        }else{
            res.status(400).send(`Password are not matching`);
        }
    }catch(error) {
        console.log(`Error`, error);
    }
}