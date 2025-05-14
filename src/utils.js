/**
 * Formats a given date into a string format: YYYY-MM-DD in UTC.
 *
 * @param {Date} date - The date to be formatted.
 * @returns {string} The formatted date string in the format "YYYY-MM-DD".
 */
function formatDate(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`; // This will return in "YYYY-MM-DD" format, UTC time
}

module.exports = { formatDate };
