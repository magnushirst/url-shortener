const request = require("supertest");
const app = require("./app.js");

describe("Root API", () => {
    test('Will have correct content-type', async () => {
        const response = await request(app).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.headers["content-type"]).toBe('application/json; charset=utf-8');
        expect(response.body).toEqual({status: 'OK'});
    });
});