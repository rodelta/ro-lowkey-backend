import crypto from "crypto";

/**
 * Generates random strings
 * @param length desired string length
 * @returns random string
 */
export const getRandomString = (length = 20): string =>
	crypto.randomBytes(length).toString("hex").slice(0, length);

/**
 * Generate random numbers
 * @param min lower bound (inclusive)
 * @param max upper bound (inclusive)
 * @returns random int number in range
 */
export const getRandomNumber = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1) + min);
