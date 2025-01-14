import supertest from "supertest";
import app from "../app";

const request = supertest(app);

describe("test /api/wilders", () => {
	test("should return an array", async () => {
		const response = await request.get("/api/wilders");
		expect(Array.isArray(response.body)).toBe(true);
	});
	test("should return the correct names", async () => {
		const goodArray = ["Romain", "Christine", "Mathilde", "Victor"];
		const response = await request.get("/api/wilders");
		expect(response.body).toEqual(goodArray);
	});
});
