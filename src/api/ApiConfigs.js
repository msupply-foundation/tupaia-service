/**
 * Statis class for managing Axios configurations
 * for Tupaia API requests
 */

export default class ApiConfigs {
  static BASE_CONFIG = {
    baseURL: 'https://dev-api.tupaia.org/v2/',
    timeout: 10000,
  };

  static getSurveyResponseConfig = ({ username, password }) => ({
    method: 'POST',
    url: '/surveyResponse',
    headers: { 'content-type': 'application/JSON' },
    validateStatus: status => (status >= 200 && status < 300) || status === 400,
    auth: {
      username,
      password,
    },
  });
}