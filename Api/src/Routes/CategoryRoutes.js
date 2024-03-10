const CategoryController = require('../Controllers/CategoryController.js');
const { Router } = require('express');
const categoryController = new CategoryController();

const router = Router();

router.get('/category',(req,res) => categoryController.GetAll(req,res));
router.get('/category/:id',(req,res) => categoryController.GetId(req,res));
router.post('/category',(req,res) => categoryController.Post(req,res));
router.put('/category/:id',(req,res)=> categoryController.Put(req,res));
router.delete('/category/:id',(req,res) => categoryController.Delete(req,res));

module.exports = router;