const ControllerBase = require('./ControllerBase.js');
const EnrollmentService = require('../Services/EnrollmentService.js');
const enrollmentService = new EnrollmentService();

class EnrollmentController extends  ControllerBase
{
  constructor ()
  {
    super(enrollmentService);
  }

}

module.exports = EnrollmentController;