const { faker } = require("@faker-js/faker");


const generatePerson = () => {
    return {
      name: faker.person.fullName(),
      cpf: faker.number.int({ min: 10000000000, max: 99999999999 }), 
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  };
  
  

module.exports = {
  generatePerson,
};
