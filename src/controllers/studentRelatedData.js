const StudentModel = require('../models/studentModel');

exports.create = async(req, res) => {
    try{

        if(!req.body) {
            return res.status(400).send({
                status: false,
                message: "content cannot be empty"
            })
        }
    
        const student = new StudentModel({
            name : req.body.student_name,
            subject : req.body.student_subject,
            marks : req.body.student_marks
        })
    
        const student_data = await student.save();
        if(student_data) {
    
            res.status(200).redirect("/student/student-List/AddnewStudent")
        }else{
            res.staus(400).send({
                status: false,
                message: "Data is not present"
            })
        }
    }catch(error) {
        res.status(500).send({
            status: 'error',
            message: error
        })
    }
}

exports.findAllStuData = async(req, res) => {
    try{
        if(req.query.id) {
            
            const getallStudentsdata = await StudentModel.findById({_id: req.query.id});
            if(getallStudentsdata) {
                res.status(200).send({
                    getallStudentsdata
                })
            }else{
                res.status(400).send({
                    status: false,
                    message: "Data can't be found ! Please try again"
                })    
            }
        }else{

            const getallStudentsdata = await StudentModel.find();
            if(getallStudentsdata) {
                res.status(200).send({
                    getallStudentsdata
                })
            }else{
                res.status(400).send({
                    status: false,
                    message: "Data can't be found ! Please try again"
                })
            }
        }
    }catch(error) {
        res.status(500).send({
            status: 'error',
            message: error
        })
    }
}

exports.updateStuData = async(req, res) => {
    try{
        const data = req.params.id;
        const name = req.body.student_name;
        const subject = req.body.student_subject;
        const marks = req.body.student_marks;
       const upadteStudata = await StudentModel.findByIdAndUpdate({_id: data}, {name, subject, marks}, {new: true});
       if(upadteStudata) {
            res.status(200).send({
                status:'success',
                data: upadteStudata
            })
       }else{
            res.status(400).send({
                status: 'success',
                message: "Data is not update"
            })
       }      
    }catch(error) {
        res.status(500).send({
            status: false,
            message: error
        })
    }
}

exports.deleteStudata = async(req, res) => {
    try{
        const data = req.params.id;
        
       const deleteStudata = await StudentModel.findByIdAndDelete({_id: data});
       if(deleteStudata) {
            res.status(200).send({
                status:'success',
                data: "Deleted data successfully"
            })
       }else{
            res.status(400).send({
                status: 'success',
                message: "Data is not delete"
            })
       }      
    }catch(error) {
        res.status(500).send({
            status: false,
            message: error
        })
    }
}

