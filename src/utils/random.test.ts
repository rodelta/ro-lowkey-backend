import { getRandomNumber, getRandomString } from "./random";

describe("Random utils", () => {
	// Don't take the test seriously, they're placeholders

	describe("getRandomString", () => {
		it("Returns a 20-length string as default", () => {
			const res = getRandomString();

			expect(res.length).toEqual(20);
		});

		it("Supports custom random lengts", () => {
			expect(getRandomString(5).length).toEqual(5);
			expect(getRandomString(10).length).toEqual(10);
			expect(getRandomString(90).length).toEqual(90);
		});
	});

	describe("getRandomNumber", () => {
		it("Returns a random numbers between 0 and 1", () => {
			const res = getRandomNumber(0, 1);

			expect(res).toBeGreaterThanOrEqual(0);
			expect(res).toBeLessThanOrEqual(1);
		});

		it("Supports non-0 minimum", () => {
			const res = getRandomNumber(50, 100);

			expect(res).toBeGreaterThanOrEqual(50);
			expect(res).toBeLessThanOrEqual(100);
		});

		it("Supports negative ranges", () => {
			const res = getRandomNumber(-25, -5);

			expect(res).toBeGreaterThanOrEqual(-25);
			expect(res).toBeLessThanOrEqual(-5);
		});
	});
});
