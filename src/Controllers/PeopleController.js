const database = require('../models');

class PeopleController
{
  static async GetAll(req,res)
  {
    try
    {
      const people = await database.People.findAll();
      return res.status(200).json(people);
    }catch (error)
    {
      ///
    }
  }

}

module.exports = PeopleController;