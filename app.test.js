const request = require("supertest");
const app = require("./app");

test("GET / should return all food items", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
});
