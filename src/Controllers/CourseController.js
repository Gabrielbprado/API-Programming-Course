const ControllerBase = require('./ControllerBase.js');
const CourseService = require('../Services/CourseService.js');
const courseService = new CourseService();

class CourseController extends  ControllerBase
{
  constructor ()
  {
    super(courseService);
  }

}

module.exports = CourseController;