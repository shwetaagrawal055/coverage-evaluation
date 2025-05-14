// /test/index.test.js

const { newFunction, addItem, getItem, formatDate } = require("../src/index");

describe("newFunction", () => {
  it("should return the correct sum of two numbers", () => {
    const result = newFunction();
    expect(result).toBe(30);
  });
});

describe("addItem", () => {
  it("should add an item correctly", () => {
    const item = addItem("Test Item");
    expect(item.name).toBe("Test Item");
  });
});

describe("getItem", () => {
  it("should retrieve an item correctly", () => {
    const item = getItem(1);
    expect(item.id).toBe(1);
  });
});

describe("formatDate", () => {
  it("should format the date correctly", () => {
    const date = new Date("2022-01-01");
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("2022-01-01");
  });
});
