const ControllerBase = require('./ControllerBase.js');
const PeopleService = require('../Services/PeopleService.js');
const peopleService = new PeopleService();

class PeopleController extends  ControllerBase
{
  constructor ()
  {
    super(peopleService);
  }

  async GetEnrollment(req,res)
  {
    const { student_id }  = req.params;
    const enrollment = await peopleService.GetEnrollment(Number(student_id));
    return res.status(200).json(enrollment);
  }

}

module.exports = PeopleController;