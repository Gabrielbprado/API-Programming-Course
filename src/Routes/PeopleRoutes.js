const PeopleController = require('../Controllers/PeopleController.js');
const { Router } = require('express');
const peopleController = new PeopleController();

const router = Router();

router.get('/people',(req,res) => peopleController.GetAll(req,res));
router.post('/people',(req,res) => peopleController.Post(req,res));
router.put('/people/:id',(req,res)=> peopleController.Put(req,res));
router.delete('/people/:id',(req,res) => peopleController.Delete(req,res));

module.exports = router;