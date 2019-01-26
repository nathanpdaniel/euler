const chai = require("chai");
const expect = chai.expect;
const multiples = require("./index");

describe("sum of multiples of 3 and 5", () => {
  it("expect sum for numbers below 10 to be 23", () => {
    expect(multiples(10)).to.equal(23);
  });
  it("expects sum for numbers below 1000 to be 233168", () => {
    expect(multiples(1000)).to.equal(233168);
  });
});