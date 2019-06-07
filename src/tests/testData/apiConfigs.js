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
    input: { username: 'Sussol', password: 'Sussol' },
    output: {
      method: 'POST',
      url: '/surveyResponse',
      headers: { 'content-type': 'application/JSON' },
      validateStatus: status => (status >= 200 && status < 300) || status === 400,
      auth: {
        username: 'Sussol',
        password: 'Sussol',
      },
    },
  },
};
