// utils.js
/**
 * Formats a date into a readable string
 * @param {Date} date - The date object to format
 * @returns {string} - The formatted date string
 */
function formatDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

module.exports = { formatDate };
