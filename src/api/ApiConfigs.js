/**
 * Static class for managing Axios configurations
 * for Tupaia API requests
 */

export default class ApiConfigs {
  static BASE_CONFIG = {
    baseURL: 'https://dev-api.tupaia.org/v2',
    timeout: 10000,
  };

  /**
   * Returns the Axios config used to send requests to the
   * Tupaia server. If there are invalid objects in the request
   * body, a response is returned indicating which objects were
   * rejected, with a 400 response.
   */
  static surveyResponse = ({ credentials = {}, data = [] }) => {
    const { baseURL, username, password } = credentials;
    return {
      ...this.BASE_CONFIG,
      baseURL,
      method: 'POST',
      url: '/surveyResponse',
      headers: { 'content-type': 'application/json' },
      validateStatus: status => status === 200 || status === 400,
      data: [...data],
      auth: {
        username,
        password,
      },
    };
  };
}
