// index.js
const { addItem, getItem } = require("./services");
const { formatDate } = require("./utils");

/**
 * New untested function added to decrease coverage
 */
function newFunction() {
  const x = 10;
  const y = 20;
  return x + y;
}

/**
 * Main function to test the app functionality
 */
function main() {
  const item = addItem("Test Item");
  console.log("Item Added:", item);

  const fetchedItem = getItem(item.id);
  console.log("Fetched Item:", fetchedItem);

  console.log("Formatted Date:", formatDate(new Date()));

  //   const result = newFunction();
  //console.log("Result from newFunction:", result);
}

module.exports = { main, addItem, getItem, formatDate, newFunction }; // Export main function

main();
