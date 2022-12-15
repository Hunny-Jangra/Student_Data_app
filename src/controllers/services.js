const axios = require('axios');
exports.studentList = async(req, res) => {
    // res.status(200).render("studentList");
        axios.get("http://localhost:3000/api/students")
        .then(function(response) {
            console.log(response.data);
            res.status(200).render("studentList", {student : response.data});
        }).catch((error) => {
            res.status(400).send({
                status: false,
                message: error
            })
        })
    }

exports.addnewStudentData = (req, res) => {
    res.status(200).render("AddnewStudent");
}


exports.updateStudentData = (req, res) => {
    axios.get('http://localhost:3000/api/students',{params: {id : req.query.id}})
    .then(function(student_Data) {
    
        res.status(200).render("updateStudent", {student: student_Data.data});
    }).catch((error) => {
        res.send(error);
    })
}