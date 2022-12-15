const studentRouter = require('../controllers/studentRelatedData');
const express = require('express');
const router = express();

router
    .route('/')
    .post(studentRouter.create);
router
    .route('/')
    .get(studentRouter.findAllStuData);
router
    .route('/updateStudent/:id')
    .put(studentRouter.updateStuData);
router
    .route('/')
    .delete(studentRouter.deleteStudata);

module.exports = router;