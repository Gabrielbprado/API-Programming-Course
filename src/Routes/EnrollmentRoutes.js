const EnrollmentController = require('../Controllers/EnrollmentController.js');
const { Router } = require('express');
const enrollmentController = new EnrollmentController();

const router = Router();

router.get('/enrollment',(req,res) => enrollmentController.GetAll(req,res));
router.get('/enrollment/:id',(req,res) => enrollmentController.GetId(req,res));
router.post('/enrollment',(req,res) => enrollmentController.Post(req,res));
router.put('/enrollment/:id',(req,res)=> enrollmentController.Put(req,res));
router.delete('/enrollment/:id',(req,res) => enrollmentController.Delete(req,res));

module.exports = router;