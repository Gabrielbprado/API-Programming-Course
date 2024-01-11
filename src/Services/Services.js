const dataSource = require('../models');
class Services
{
  constructor(NameModel)
  {
    this.model = NameModel;
  }

  async GetAll()
  {
    return dataSource[this.model].findAll();
  }

  async Post(req)
  {
    return dataSource[this.model].create(req.body);
  }

  async Put(req)
  {
    return dataSource[this.model].update(req.body, {
      where : 
      {
        id : req.params.id
      }
    });
  }

  async Delete(req)
  {
    return dataSource[this.model].destroy(
      {
        where : 
            {
              id : req.params.id
            }
      }
    );
  }
}

module.exports = Services;