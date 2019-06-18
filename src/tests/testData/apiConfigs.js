/**
 * Test data for all API Configs
 *
 * Any new API Config should be added to the array
 * API_CONFIGS and test input and output added
 * to API_CONFIG_INPUT_OUTPUT
 */

export const API_CONFIGS = ['surveyResponse'];

export const API_CONFIG_INPUT_OUTPUT = {
  surveyResponse: {
    input: { credentials: { username: 'Sussol', password: 'Sussol', baseURL: 'url' } },
    output: {
      baseURL: 'url',
      timeout: 10000,
      method: 'POST',
      url: '/surveyResponse',
      headers: { 'content-type': 'application/json' },
      validateStatus: status => status === 200,
      data: [],
      auth: {
        username: 'Sussol',
        password: 'Sussol',
      },
    },
  },
};
