import supertest from "supertest";
import app from "../app";

const request = supertest(app);

describe("Smoke Test", () => {
	test("should respond to GET /api/wilders with a 200 status code", async () => {
		const response = await request.get("/api/wilders");
		expect(response.statusCode).toBe(200);
		expect(response.headers["content-type"]).toMatch(/json/);
	});
});
