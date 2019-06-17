import {
  ERROR_UNEXPECTED_RESPONSE,
  ERROR_AUTHENTICATION,
  ERROR_INCORRECT_URL,
  ERROR_NETWORK,
  ERROR_UNKNOWN,
  ERROR_REQUEST,
  ERROR_SERVER,
  ERROR_MAINTENANCE,
  errorObject,
} from './errors';

/**
 * Error lookup tables for finding the correct error object
 * to throw for a given method and status code. New methods
 * should be entered into ERROR_LOOKUP, using the base error
 * lookup table and optionally using differing error objects
 * for different status codes.
 *
 * Axios errors will have a request field and an added response
 * if the request reached the server.
 * If an error is thrown with a response, the request reached
 * the server and an invalid status code (set in the axios config)
 * was returned. If there is no response, just a request, the request
 * did not reach the server at all.
 */

// Base generic errors to be thrown on basic status code responses.
const BASE_ERROR_LOOKUP_TABLE = {
  400: ERROR_REQUEST,
  401: ERROR_AUTHENTICATION,
  404: ERROR_INCORRECT_URL,
  500: ERROR_SERVER,
  502: ERROR_MAINTENANCE,
  UNKNOWN: ERROR_UNKNOWN,
};

// Lookup table for a method and status code. Add new method/endpoints
// here, using the base lookup for generic error objects and optionally
// overwriting status codes if different error objects should be thrown.
const ERROR_LOOKUP = {
  surveyResponse: {
    ...BASE_ERROR_LOOKUP_TABLE,
  },
};

/**
 * Simple getter for error objects. Given a thrown error object
 * and method name, will return the correct error object
 * which should be bubbled up. In the case where an error object
 * has not been pre-defined for the specific error thrown, a generic
 * unknown error object is bubbled.
 *
 * Each error object can be differentiated from a JS error by it having
 * a 'code' field.
 *
 * @param  {Object} error  Axios thrown error.
 * @param  {String} method The method the error was thrown in.
 * @return {Object} A generic error object with code and message details.
 */
export default function getErrorObject(error, method) {
  const { response, request } = error;
  // If the error has a response field, the request reached the server.
  // Use either the pre-defined method, status error object or an unexpected
  // response object for all others.
  if (response) {
    const { status } = response;
    return errorObject(ERROR_LOOKUP[method][status] || ERROR_UNEXPECTED_RESPONSE, method, status);
  }
  // Otherwise, if there is only a request field, the request did not reach the
  // server. A network error has occurred.
  if (request) return errorObject(ERROR_NETWORK, method);
  // In all other cases, for which there shouldn't be, thrown an unkown error
  // as a last resort.
  return errorObject(ERROR_LOOKUP[method].UNKNOWN, method);
}
