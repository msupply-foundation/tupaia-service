/**
 * Test data for error objects.
 * Any new error code added should have a new entry
 * added into both CORRECT_ERROR_OBJECTS and
 * ERROR_TEST_DATA, which will then have tests run
 * on it.
 */

import {
  ERROR_RUNTIME,
  ERROR_UNKNOWN,
  ERROR_INCORRECT_URL,
  ERROR_UNEXPECTED_RESPONSE,
  ERROR_NETWORK,
  ERROR_AUTHENTICATION,
} from '../../errors/errors';

export const CORRECT_ERROR_OBJECTS = {
  ERROR_RUNTIME: {
    code: 'ERROR_RUNTIME',
    message: 'Error: Unexpected runtime error occurred. error message',
  },
  ERROR_UNKNOWN: {
    code: 'ERROR_UNKNOWN',
    message: 'Error: During method, an unknown error occured.',
  },
  ERROR_INCORRECT_URL: {
    code: 'ERROR_INCORRECT_URL',
    message: 'Error: During method, incorrect base URL. HTTP CODE: 404',
  },
  ERROR_UNEXPECTED_RESPONSE: {
    code: 'ERROR_UNEXPECTED_RESPONSE',
    message: 'Error: During method, an unexpected response status was received.',
  },
  ERROR_NETWORK: {
    code: 'ERROR_NETWORK',
    message: 'Error: During method, the request did not reach the server.',
  },
  ERROR_AUTHENTICATION: {
    code: 'ERROR_AUTHENTICATION',
    message: 'Error: During method, an authentication error occurred. HTTP CODE: 401',
  },
};

export const ERROR_TEST_DATA = {
  ERROR_RUNTIME: [ERROR_RUNTIME, 'error message'],
  ERROR_UNKNOWN: [ERROR_UNKNOWN, 'method'],
  ERROR_INCORRECT_URL: [ERROR_INCORRECT_URL, 'method'],
  ERROR_UNEXPECTED_RESPONSE: [ERROR_UNEXPECTED_RESPONSE, 'method', 'status'],
  ERROR_NETWORK: [ERROR_NETWORK, 'method'],
  ERROR_AUTHENTICATION: [ERROR_AUTHENTICATION, 'method'],
};
