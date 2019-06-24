/**
 * Tests to ensure error object return objects are correct
 * and consistent.
 *
 * Each test should use the `errorObject` method in errors/errors.js
 * and each error code function should have it's own test.
 */

import { CORRECT_ERROR_OBJECTS, ERROR_TEST_DATA } from './testData/errors';
import { errorObject } from '../errors/errors';

test('All error objects should be deeply equal', () => {
  Object.entries(ERROR_TEST_DATA).forEach(([errorCode, testData]) => {
    const returnValue = errorObject(testData);
    expect(returnValue).toEqual(CORRECT_ERROR_OBJECTS[errorCode]);
  });
});
