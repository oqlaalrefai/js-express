"use strict";
// try to use the same names
const server = require("../server");
const supertest = require("supertest");
const request = supertest(server.app);

// create test
describe("express server", () => {
  //first arg is for description
  it("should check hello world works successfully ", async () => {
    // arrange
    let param = "/";
    let status = 200;
    let text = "hello world!";
    //act
    const response = await request.get(param);
    //assert
    expect(response.status).toBe(status);
    expect(response.text).toBe(text);
  });
  it("should check the data works successfully ", async () => {
    // arrange
    let param = "/data";
    let status = 200;
    //act
    const response = await request.get(param);
    //assert
    expect(response.status).toBe(status);
    expect(typeof response.body).toEqual('object')
  });
  it("should check 500 error ", async () => {
        // arrange
        let param = "/bad";
        let status = 500;
        //act
        const response = await request.get(param);
        //assert
        expect(response.status).toBe(status);
        expect(response.body.route).toBe(param);
  });
  it("should check 404 error ", async () => {
        // arrange
        let param = "/notfound";
        let status = 404;
        //act
        const response = await request.get(param);
        //assert
        expect(response.status).toBe(status);
  });
});

// you can write the test using this syntax test(){}
