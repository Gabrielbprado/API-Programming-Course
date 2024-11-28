/* eslint-disable quotes */
/* eslint-disable no-undef */
const ControllerBase = require("../ControllerBase.js");
const PeopleService = require('../../Services/PeopleService.js');
jest.mock("../../Services/PeopleService.js");

describe("PeopleController", () => {
  let peopleServiceMock;
  let peopleController;

  beforeEach(() => {
    peopleServiceMock = new PeopleService();
    peopleServiceMock.GetAll = jest.fn(); 
    peopleController = new ControllerBase(peopleServiceMock);
  });

  it("should return 200 and the list of people", async () => {
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const mockPeopleList = [{ id: 1, name: "John Doe" }, { id: 2, name: "Jane Doe" }];

    peopleServiceMock.GetAll.mockResolvedValue(mockPeopleList);

    await peopleController.GetAll(req, res);

    expect(res.status).toBeCalledWith(200);
    expect(res.json).toBeCalledWith(mockPeopleList);
  });

  it("should return 500 when an error occurs", async () => {
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

    peopleServiceMock.GetAll.mockRejectedValue(new Error("Service error"));

    await peopleController.GetAll(req, res);

    expect(res.status).toBeCalledWith(500);
    expect(res.json).toBeCalledWith({ message: "Ocorreu um Erro do Lado Do Servidor", Erro: new Error("Service error") });
  });

  it("should return 201 and Create an User", async () => {
    const req = {};
    const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
    const mockPeople = { id: 1, name: "John Doe" };

    peopleServiceMock.Post.mockResolvedValue(mockPeople);

    await peopleController.Post(req, res);

    expect(res.status).toBeCalledWith(201);
    expect(res.json).toBeCalledWith(mockPeople);
  });
});
