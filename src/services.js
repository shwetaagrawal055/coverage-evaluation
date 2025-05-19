let items = []; // Example to hold items

/**
 * Adds an item to the list.
 *
 * @param {string} name - The name of the item to be added.
 * @returns {Object} The newly created item with id, name, and createdAt properties.
 */
function addItem(name) {
  const item = { id: Date.now(), name, createdAt: new Date() };
  items.push(item);
  return item;
}
function uncoveredFunction() {
  console.log('This is uncovered');
}
/**
 * Retrieves an item by its id.
 *
 * @param {number} id - The id of the item to be retrieved.
 * @returns {Object|undefined} The item with the specified id, or undefined if not found.
 */
function getItem(id) {
  return items.find((item) => item.id === id);
}

module.exports = { addItem, getItem };
