// index.js
const { addItem, getItem } = require("./services");
const { formatDate } = require("./utils");

/**
 * Main function to test the app functionality
 */
function main() {
  const item = addItem("Test Item");
  console.log("Item Added:", item);

  const fetchedItem = getItem(item.id);
  console.log("Fetched Item:", fetchedItem);

  console.log("Formatted Date:", formatDate(new Date()));
}

main();
