/* eslint-disable import/prefer-default-export */
/**
 * Utility methods used for API request methods
 */

/**
 * Simple method sorting objects with a row field in
 * descending order.
 */
const sortErrorObjects = ({ row: rowA }, { row: rowB }) => {
  if (rowA < rowB) return 1;
  if (rowA > rowB) return -1;
  return 0;
};

/**
 * In response to a POST request to the Tupaia API, any invalid
 * object within the post request invalidates the entire body.
 * The response to this post is an object which lists the objects
 * which are invalid. If a request is invalid, this method will
 * remove the invalid objects, storing them in a new array. Returns
 * an object which has the new data to push and the new array of
 * invalid objects.
 * @param   {Array}  originalData The original body sent in a POST to Tupaia
 * @param   {Object}  invalidData  A response from Tupaia from a request with
 *                         invalid data.
 * @returns {Object} Contains two arrays for the new data to be sent, and
 *                   all objects removed.
 *                   example: { data, invalidData }
 */
export const removeInvalidObjects = (originalData = [], invalidData = {}) => {
  const { errors } = invalidData;
  // If there are no errors or original data, just return the original
  // data untouched, and an empty array of invalid data.
  const defaultReturn = { data: originalData, invalidData: [] };
  if (!originalData || originalData.length === 0) return defaultReturn;
  if (!errors || originalData.length === 0) return defaultReturn;
  // Otherwise, copy the original body sent to tupaia, and iterate
  // through the array of errors, which indicate each invalid
  // object in the original body.
  const originalDataClone = [...originalData];
  const errorsClone = [...errors];
  errorsClone.sort(sortErrorObjects);
  const invalidObjects = [];
  errorsClone.forEach(errorObject => {
    // Error object: { row, error } - where row is the index and error
    // is an error message.
    const { row } = errorObject;
    // If the row value is valid, remove the index from the original data
    if (!Number.isInteger(Number(row)) || row >= originalDataClone.length) return;
    const [invalidDatum] = originalDataClone.splice(row, 1);
    // If the invalidDatum exists, push it to the invalid objects array.
    if (!invalidDatum) return;
    invalidObjects.push(invalidDatum);
  });
  return { data: originalDataClone, invalidData: invalidObjects };
};
