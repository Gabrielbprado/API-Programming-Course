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

  async GetAllScope(req,res)
  {
    try
    {
      const listPeople = await peopleService.GetAllScope();
      return res.status(200).json(listPeople);
    } catch(error)
    {
      res.status(500).json({message : 'Ocorreu um Erro do Lado Do Servidor', Erro : error});
    }
  }

}

module.exports = PeopleController;