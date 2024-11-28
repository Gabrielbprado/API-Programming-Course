const request = require("supertest");
const app = require("../../app");
const dataSource = require("../../models");
const { generatePerson } = require("../factories/personFactory");

let personId;

describe("E2E - PeopleController GetAll", () => {
  beforeAll(async () => {
    await dataSource.People.destroy({ where: {}, force: true });

    const people = await dataSource.People.bulkCreate([
      generatePerson(),
      generatePerson(),
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
      name: expect.any(String),
      cpf: expect.any(String),
      ativo: true,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });

  it("deve retornar 404 quando não houver pessoas", async () => {
    await dataSource.People.destroy({ where: {}, force: true });
    const response = await request(app).get("/people");

    expect(response.status).toBe(404);
  });
});

describe("E2E - PeopleController - Recuperar uma Pessoa por ID (GET)", () => {
  beforeAll(async () => {
    await dataSource.People.destroy({ where: {}, force: true });

    const people = await dataSource.People.bulkCreate([generatePerson()]);
    personId = people[0].id;
  });

  afterAll(async () => {
    await dataSource.People.destroy({ where: {}, force: true });
  });

  it("deve recuperar uma pessoa por ID", async () => {
    const response = await request(app).get(`/people/${personId}`);

    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({
      name: expect.any(String),
      cpf: expect.any(String),
      ativo: true,
      createdAt: expect.any(String),
      updatedAt: expect.any(String),
    });
  });
});

describe("E2E - PeopleController - Cadastrando Uma pessoa (POST)", () => {
  beforeAll(async () => {
    await dataSource.People.destroy({ where: {}, force: true });
  });

  afterAll(async () => {
    await dataSource.People.destroy({ where: {}, force: true });
  });

  it("deve cadastrar uma nova pessoa", async () => {
    const person = generatePerson(); 
    const response = await request(app).post("/people").send(person);

    expect(response.status).toBe(201);
    expect(response.body).toMatchObject({
      name: person.name,
      cpf: person.cpf,
      ativo: person.ativo,
    });
  });
});

describe("E2E - PeopleController - Atualizar Pessoa (PUT)", () => {
  let personId;

  beforeEach(async () => {
    await dataSource.People.destroy({ where: {}, force: true });

    const person = await dataSource.People.create(generatePerson());
    personId = person.id;
  });

  afterEach(async () => {
    await dataSource.People.destroy({ where: {}, force: true });
  });

  it("deve atualizar uma pessoa no banco de dados", async () => {
    const updatedPersonData = {
      name: "Gabriel Prado",
    };

    const response = await request(app).put(`/people/${personId}`).send(updatedPersonData);
    expect(response.status).toBe(200); 
    expect(response.body.message).toBe("Up-to-date person");
  });
});
