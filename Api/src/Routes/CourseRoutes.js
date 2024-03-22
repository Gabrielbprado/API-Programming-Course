const CourseController = require('../Controllers/CourseController.js');
const { Router } = require('express');
const courseController = new CourseController();

const router = Router();

router.get('/course',(req,res) => courseController.GetAll(req,res));
router.get('/course/:id',(req,res) => courseController.GetId(req,res));
router.post('/course',(req,res) => courseController.Post(req,res));
router.put('/course/:id',(req,res)=> courseController.Put(req,res));
router.delete('/course/:id',(req,res) => courseController.Delete(req,res));

module.exports = router;