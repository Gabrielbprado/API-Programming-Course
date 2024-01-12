const ControllerBase = require('./ControllerBase.js');
const CategoryService = require('../Services/CategoryService.js');
const categoryService = new CategoryService();

class CategoryController extends  ControllerBase
{
  constructor ()
  {
    super(categoryService);
  }



}

module.exports = CategoryController;