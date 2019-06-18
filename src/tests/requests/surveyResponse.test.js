import '@babel/polyfill';

import { surveyResponseTestData } from '../testData/requests/surveyResponse';

/**
 * Test cases for the surveyResponse endpoint. Majority of invalid input tests
 * are handled by the helper method tests, utilities/requestUtilities which
 * ensures valid input after the first request. Error throwing is handled
 * in the genericRequests test cases. Majority of test cases for this method
 * should involve simply handling valid input correctly.
 *
 * Test cases:
 * 1 : Valid input, correct and valid output. Mocks a 200 response.
 */

beforeEach(() => {
  jest.resetModules();
});

test('should return a succesful response from valid data', async () => {
  const { TEST_ONE } = surveyResponseTestData;
  const { INPUT, OUTPUT, MOCK } = TEST_ONE;
  jest.doMock('axios', () =>
    jest.fn(() => {
      return MOCK;
    })
  );
  const { surveyResponse } = require('../../requests/surveyResponse');
  const result = await surveyResponse({ credentials: {}, data: INPUT });
  expect(result).toEqual(OUTPUT);
});
