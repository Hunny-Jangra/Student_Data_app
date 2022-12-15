const express = require('express');
const services = require('../controllers/services');
const studentRouter = require('../controllers/studentRelatedData');
const router = express.Router();

router
    .route('/student/student-List/data')
    .get(services.studentList);

router
    .route('/student/student-List/AddnewStudent')
    .get(services.addnewStudentData);

router
    .route('/student/student-List/updateStudent')
    .get(services.updateStudentData);



// API
router
    .route('/api/students')
    .post(studentRouter.create);
router
    .route('/api/students')
    .get(studentRouter.findAllStuData);
router
    .route('/api/students/:id')
    .put(studentRouter.updateStuData);
router
    .route('/api/students/:id')
    .delete(studentRouter.deleteStudata);


module.exports = router;


// app.get('/student/student-List/AddnewStudent', )


    