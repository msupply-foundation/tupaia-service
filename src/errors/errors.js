/* eslint-disable max-len */

/**
 * Contains simple functions which correspond to an error code.
 * Each error code function accepts parameters which are
 * interpolated into the associated error message for specific
 * error codes in order to provide more specific detail. Also a
 * generic helper method to return an errorObject.
 */

/**
 * Error code functions which relate an error code and
 * message
 */

/**
 * Generic error codes
 */
export const ERROR_RUNTIME = errorMessage =>
  `Error: Unexpected runtime error occurred. ${errorMessage}`;
export const ERROR_UNKNOWN = method => `Error: During ${method}, an unknown error occured.`;

/**
 * Generic network error codes
 */
export const ERROR_INCORRECT_URL = method =>
  `Error: During ${method}, incorrect base URL. HTTP CODE: 404`;
export const ERROR_UNEXPECTED_RESPONSE = (method, status) =>
  `Error: During ${method}, an unexpected response ${status} was received.`;
export const ERROR_NETWORK = method =>
  `Error: During ${method}, the request did not reach the server.`;
export const ERROR_AUTHENTICATION = method =>
  `Error: During ${method}, an authentication error occurred. HTTP CODE: 401`;
export const ERROR_REQUEST = method =>
  `Error: During ${method}, the request sent was malformed and could not be validated. HTTP CODE: 400`;
export const ERROR_SERVER = method =>
  `Error: During ${method}, Unknown Server Error - HTTP CODE: 500`;

/**
 * Simple method to return a formatted error object.
 * @param {Function}   ERROR_CODE An error code function
 * @param {String}     optionalParameters parameters for the ERROR_CODE function
 */
export function errorObject(ERROR_CODE, ...optionalParameters) {
  const { name: code } = ERROR_CODE;
  return {
    code,
    message: ERROR_CODE(...optionalParameters),
  };
}
