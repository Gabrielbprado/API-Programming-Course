const { faker } = require("@faker-js/faker");


const generatePerson = () => {
    return {
      name: faker.person.fullName(),
      cpf: faker.number.int({ min: 10000000000, max: 99999999999 }),  // Substituindo a função errada
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  };
  
  

module.exports = {
  generatePerson,
};
