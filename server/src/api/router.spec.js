const request = require("supertest");
const app = require("../app.js");

describe("API", () => {
    test('will return list of short codes', async () => {
        const response = await request(app).get("/api/v1/codes");
        expect(response.statusCode).toBe(200);
        expect(response.headers["content-type"]).toBe('application/json; charset=utf-8');
        expect(response.body).toContainEqual({shortCode: 'asdS23', longCode: 'https://google.com'});
        expect(response.body).toContainEqual({shortCode: 'hfrdf3', longCode: 'https://bing.com'});
        expect(response.body).toContainEqual({shortCode: '3hbtcr', longCode: 'https://gousto.com'});
        expect(response.body).toContainEqual({shortCode: '9gjhnf', longCode: 'https://giffgaff.com'});
        expect(response.body).toContainEqual({shortCode: 'pbnbd2', longCode: 'https://tesco.com'});
        expect(response.body.length).toEqual(5);
    });

    test('will return specific short code', async () => {
        const shortCode = 'gd3533';
        const response = await request(app).get(`/api/v1/codes/short/${shortCode}`);
        expect(response.statusCode).toBe(200);
        expect(response.headers["content-type"]).toBe('application/json; charset=utf-8');
        expect(response.body).toEqual({shortCode, longCode: 'https://tesco.com'});
    });
});