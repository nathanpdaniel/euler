const chai = require("chai");
const expect = chai.expect;
const sum = require("./index");

describe("sum of even fib sequence numbers below a given value", () => {
  it("expect sum for numbers below 100 to be 44", () => {
    expect(sum(100)).to.equal(44);
  });
  it("expects sum for numbers below 1000 to be 233168", () => {
    expect(sum(4000000)).to.equal(4613732);
  });
});