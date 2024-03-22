const Services = require('./Services.JS');

class PeopleService extends Services {
  constructor() {
    super('People');
  }

  async GetEnrollment(id) {
    const student = await super.GetId(id);
    const ListEnrollment = await student.getClasSsubscribed();
    return ListEnrollment;
  }

  async GetAllScope()
  {
    const listPeople =  await super.GetScopeAll('all');
    return listPeople;
  }
}

module.exports = PeopleService;
