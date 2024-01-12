const PeopleController = require('../Controllers/PeopleController.js');
const { Router } = require('express');
const peopleController = new PeopleController();
const EnrollmentController = require('../Controllers/EnrollmentController.js');
const enrollmentController = new EnrollmentController();

const router = Router();

router.get('/people',(req,res) => peopleController.GetAll(req,res));
router.get('/people/:id',(req,res) => peopleController.GetId(req,res));
router.post('/people',(req,res) => peopleController.Post(req,res));
router.put('/people/:id',(req,res)=> peopleController.Put(req,res));
router.delete('/people/:id',(req,res) => peopleController.Delete(req,res));
router.get('/people/:student_id/get',(req,res) => peopleController.GetEnrollment(req,res));
router.post('/people/:student_id/post',(req,res) => enrollmentController.Post(req,res));

module.exports = router;