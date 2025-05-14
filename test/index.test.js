const {
  main,
  newFunction,
  addItem,
  getItem,
  formatDate,
} = require("../src/index"); // Correct import

describe("Main function", () => {
  it("should run without errors", () => {
    expect(() => main()).not.toThrow();
  });
});

// describe("newFunction", () => {
//   it("should return the correct sum of two numbers", () => {
//     const result = newFunction();
//     expect(result).toBe(30); // Test newFunction
//   });
// });

describe("addItem", () => {
  it("should add an item correctly", () => {
    const item = addItem("Test Item");
    expect(item.name).toBe("Test Item");
  });
});

describe("getItem", () => {
  it("should retrieve an item correctly", () => {
    const item = addItem("Test Item");
    const fetchedItem = getItem(item.id);
    expect(fetchedItem.id).toBe(item.id); // Ensure the retrieved item matches
  });
});

describe("formatDate", () => {
  it("should format the date correctly", () => {
    const date = new Date("2022-01-01T00:00:00Z"); // Ensure this is in UTC
    const formattedDate = formatDate(date);
    expect(formattedDate).toBe("2022-01-01"); // Expect the formatted date in UTC
  });
});
