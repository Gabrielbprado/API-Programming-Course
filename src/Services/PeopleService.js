const Services = require('./Services.js');

class PeopleService extends Services {
  constructor() {
    super('People');
  }

  async GetEnrollment(id) {
    const student = await super.GetId(id);
    const ListEnrollment = await student.getClasSsubscribed();
    return ListEnrollment;
  }
}

module.exports = PeopleService;
