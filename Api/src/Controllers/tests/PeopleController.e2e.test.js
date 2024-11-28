const request = require('supertest');
const app = require('../../app');
const dataSource = require('../../models'); 

describe('E2E - PeopleController GetAll', () => {
  beforeAll(async () => {
    await dataSource.People.destroy({ where: {} });
    await dataSource.People.bulkCreate([
      { name: 'John Doe', cpf: 63058133022, ativo: true, createdAt: '2024-01-13 01:05:13.028 +00:00', updatedAt: '2024-01-13 01:05:13.028 +00:00' },
      { name: 'Maria Clara', cpf: 44444444444, ativo: true, createdAt: '2024-01-13 01:05:13.028 +00:00', updatedAt: '2024-01-13 01:05:13.028 +00:00' }
    ]);
  });

  afterAll(async () => {
    await dataSource.People.destroy({ where: {} });
    await dataSource.sequelize.close(); 
  });

  it('deve retornar 200 e uma lista de pessoas', async () => {
    const response = await request(app).get('/people'); 

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toMatchObject( {name: 'John Doe', cpf: '63058133022', ativo: true, createdAt: '2024-01-13T01:05:13.028Z', updatedAt: '2024-01-13T01:05:13.028Z' });
    expect(response.body[1]).toMatchObject({ name: 'Maria Clara', cpf: '44444444444', ativo: true, createdAt: '2024-01-13T01:05:13.028Z', updatedAt: '2024-01-13T01:05:13.028Z' });
  });
});
