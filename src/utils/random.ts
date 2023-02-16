import crypto from "crypto";

/**
 * Utility to generate random strings;
 * @param length length of the desired random string
 * @returns random string
 */
export const getRandomString = (length = 20): string =>
	crypto.randomBytes(length).toString("hex").slice(0, length);

export const getRandomNumber = (min: number, max: number): number =>
	Math.floor(Math.random() * (max - min + 1) + min);
