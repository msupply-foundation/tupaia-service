/* eslint-disable import/prefer-default-export */
import Axios from 'axios';

import ApiConfigs from '../api/ApiConfigs';
import getErrorObject from '../errors/errorLookup';

/**
 * Request method for testing that a connection can be established
 * with the Tupaia server, using the surveyResponse endpoint.
 * @param {Object}    RequestData Request data
 * @param {Object}    RequestData.credentials Basic authentication details
 * @param {String}    RequestData.credentials.username
 * @param {String}    RequestData.credentials.password
 * @param {String}    RequestData.credentials.baseURL
 * @returns {Boolean} True if a connection can be established, false otherwise.
 */

export async function testConnection({ credentials = {} }) {
  // Fetch the HTTP config with required settings, timeouts etc.
  const apiConfig = ApiConfigs.surveyResponse({ credentials });
  try {
    // send an empty bodied request to the surveyResponse endpoint,
    // If we receive a response, we can reach the server. Otherwise,
    // axios will throw an error which will be caught and sent back
    // as an unsuccesful call.
    await Axios(apiConfig);
    return true;
  } catch (error) {
    throw getErrorObject(error, 'testConnection');
  }
}
