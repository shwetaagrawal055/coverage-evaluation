// test.js
const { addItem, getItem } = require("../src/services");
const { formatDate } = require("../src/utils");

test("addItem adds an item", () => {
  const item = addItem("Test Item");
  expect(item.name).toBe("Test Item");
});

test("getItem fetches the correct item", () => {
  const item = addItem("Another Item");
  const fetchedItem = getItem(item.id);
  expect(fetchedItem).toEqual(item);
});

test("formatDate returns a valid date format", () => {
  const date = new Date(2025, 4, 14); // May 14, 2025
  const formattedDate = formatDate(date);
  expect(formattedDate).toBe("14/5/2025");
});
