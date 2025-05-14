// services.js
let items = []; // This will store items in memory

/**
 * Adds a new item to the array and returns it
 * @param {string} name - The name of the item to add
 * @returns {Object} - The item object added
 */
function addItem(name) {
  const newItem = {
    id: Date.now(), // Generate a unique ID based on current timestamp
    name,
    createdAt: new Date(),
  };
  items.push(newItem);
  return newItem;
}

/**
 * Fetches an item by its ID
 * @param {number} id - The ID of the item to fetch
 * @returns {Object|undefined} - The item object if found, otherwise undefined
 */
function getItem(id) {
  return items.find((item) => item.id === id);
}

module.exports = { addItem, getItem };
