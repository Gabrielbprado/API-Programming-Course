const request = require("supertest");
const app = require("../../app");
const dataSource = require("../../models");

let personId;
describe("E2E - PeopleController GetAll", () => {
  beforeAll(async () => {
    await dataSource.People.destroy({ where: {}, force: true });
    
    const people = await dataSource.People.bulkCreate([
      {
        name: "John Doe",
        cpf: 63058133022,
        ativo: true,
        createdAt: "2024-01-13 01:05:13.028 +00:00",
        updatedAt: "2024-01-13 01:05:13.028 +00:00",
      },
      {
        name: "Maria Clara",
        cpf: 44444444444,
        ativo: true,
        createdAt: "2024-01-13 01:05:13.028 +00:00",
        updatedAt: "2024-01-13 01:05:13.028 +00:00",
      },
    ]);
    
    personId = people[0].id;
  });

  afterAll(async () => {
    await dataSource.People.destroy({ where: {}, force: true });
  });

  it("deve retornar 200 e uma lista de pessoas", async () => {
    const response = await request(app).get("/people");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(2);
    expect(response.body[0]).toMatchObject({
      name: "John Doe",
      cpf: "63058133022",
      ativo: true,
      createdAt: "2024-01-13T01:05:13.028Z",
      updatedAt: "2024-01-13T01:05:13.028Z",
    });
    expect(response.body[1]).toMatchObject({
      name: "Maria Clara",
      cpf: "44444444444",
      ativo: true,
      createdAt: "2024-01-13T01:05:13.028Z",
      updatedAt: "2024-01-13T01:05:13.028Z",
    });
  });

  it("deve retornar 404 quando não houver pessoas", async () => {
    await dataSource.People.destroy({ where: {}, force: true });
    const response = await request(app).get("/people");

    expect(response.status).toBe(404);
  });
});

describe("E2E - PeopleController - Recuperar uma Pessoa por ID (GET)", () => 
{
  beforeAll(async () => {
    await dataSource.People.destroy({ where: {}, force: true });
    
    const people = await dataSource.People.bulkCreate([
      {
        name: "John Doe",
        cpf: 63058133022,
        ativo: true,
        createdAt: "2024-01-13 01:05:13.028 +00:00",
        updatedAt: "2024-01-13 01:05:13.028 +00:00",
      },
      {
        name: "Maria Clara",
        cpf: 44444444444,
        ativo: true,
        createdAt: "2024-01-13 01:05:13.028 +00:00",
        updatedAt: "2024-01-13 01:05:13.028 +00:00",
      },
    ]);
    
    personId = people[0].id;
  });

  afterAll(async () => {
    await dataSource.People.destroy({ where: {}, force: true });
  });

  it("Recovering by ID",async () => 
  {
    const response = await request(app).get(`/people/${personId}`);
    expect(response.body).toMatchObject( {
      name: "John Doe",
      cpf: "63058133022",
      ativo: true,
      createdAt: "2024-01-13T01:05:13.028Z",
      updatedAt: "2024-01-13T01:05:13.028Z",
    },);
  })
})

describe("E2E - PeopleController - Atualizar Pessoa (PUT)", () => {
  let personId;

  beforeEach(async () => {
    await dataSource.People.destroy({ where: {}, force: true }); 

    const person = await dataSource.People.create({
      name: "John Doe",
      cpf: 63058133022,
      ativo: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    personId = person.id; 
  });

  afterEach(async () => {
    await dataSource.People.destroy({ where: {}, force: true });
    await dataSource.sequelize.close();

  });

  it("atualiza uma pessoa no banco de dados PUT", async () => {
    const updatedPersonData = {
      name: "Gabriel Prado",
    };

    const response = await request(app).put(`/people/${personId}`).send(updatedPersonData);
    expect(response.status).toBe(201); 
  });
});