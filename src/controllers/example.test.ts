import { getMockReq, getMockRes } from "@jest-mock/express";
import { getLastJsonCall } from "../utils/testing";
import type { ExampleJSONResponse } from "./example";
import { exampleJSONGet } from "./example";

describe("Example controller", () => {
  // Don't take the test seriously, they're placeholders

  it("Returns a JSON object with boolean, number, and string values", async () => {
    const req = getMockReq<any>(); // TODO align express 5 types with mock
    const { res, next } = getMockRes<any>();

    await exampleJSONGet(req, res, next);

    expect(res.json).toHaveBeenCalledTimes(1);

    const resBody = getLastJsonCall<ExampleJSONResponse>(res);

    // Not ideal number check, but safe within constraints.
    expect(typeof resBody.boolean).toEqual("boolean");
    expect(typeof resBody.string).toEqual("string");
    expect(typeof resBody.number).toEqual("number");
  });
});
