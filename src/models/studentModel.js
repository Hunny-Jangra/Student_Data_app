const mongoose = require('mongoose');

const studentDB = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    subject : {
        type: String,
        required: true
    },
    marks: {
        type: String,
        required: true
    }
}, {timestamps: true});

const StudentModel = mongoose.model('StudentModel', studentDB);

module.exports = StudentModel;