const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signupModel = new mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    email_Address : {
        type: String,
        unique : [true, 'Email address should be Unique'],
        required : true
    },
    password : {
        type : String, 
        required : true
    },
    confirmPassword : {
        type: String
    },
    tokens :[{
        token : {
            type : String,
            required: true
        }
    }]
}, {timestamps : true});

signupModel.methods.generateAuthToken = async function() {
    try{
        const token = jwt.sign({_id: this._id}, process.env.SECRET_KEY, {
            expiresIn : process.env.EXPIRES_IN
        })
        this.tokens = this.tokens.concat({token: token});
        await this.save();
        console.log(token);
        return token;
    }catch(error) {
        console.log(`Error is : `,error);
    }
}

signupModel.pre("save", async function(next) {
    if(this.isModified("password")) {

        this.password = await bcrypt.hash(this.password, 10);
    
        this.confirmPassword = undefined;
    }
    next(); 
})

const SignUp = mongoose.model('SignUp', signupModel);

module.exports = SignUp;
