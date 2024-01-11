const ControllerBase = require('./ControllerBase.js');
const PeopleService = require('../Services/PeopleService.js');
const peopleService = new PeopleService();

class PeopleController extends  ControllerBase
{
  constructor ()
  {
    super(peopleService);
  }

}

module.exports = PeopleController;