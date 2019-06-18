/* eslint-disable import/prefer-default-export */
import Axios from 'axios';

import ApiConfigs from '../api/ApiConfigs';
import { removeInvalidObjects } from '../utilities/requestUtilities';
import getErrorObject from '../errors/errorLookup';

/**
 * Request method for POST requests to the Tupaia surveyResponse
 * endpoint
 * @param {Object} RequestData Request data
 * @param {Object} RequestData.credentials Basic authentication details
 * @param {String} RequestData.credentials.username
 * @param {String} RequestData.credentials.password
 * @param {Array}  RequestData.data Request body, array of objects to be pushed
 * @returns {{data: Array, invalidData: Array}}
 */

export async function surveyResponse({ credentials = {}, data = [] }) {
  // Fetch the HTTP config with required settings, timeouts etc.
  let apiConfig = ApiConfigs.surveyResponse({ ...credentials, data });
  // Function scope return object to handle different block scopes.
  let returnObject;
  // Attempt to push the data to Tupaia, anything other than success is
  // considered an error and one will be thrown.
  try {
    // Valid status code is 200 and 400, as invalidated responses with a
    // response code of 400 contain information which can be used to
    // resend the request. All others will throw an error.
    const { data: response } = await Axios(apiConfig);
    const { errors, error } = response;
    // If there is an errors array in the response, need to remove the
    // invalid objects and try again.
    if (!errors) {
      if (error) throw { response: { status: 500 }, error };
      returnObject = { data: response };
    } else {
      // Remove the invalid objects and store them in a new array.
      const { data: newData, invalidData } = removeInvalidObjects(data, response);
      // Get a new config with the new request body.
      apiConfig = ApiConfigs.surveyResponse({ ...credentials, data: newData });
      // Send the request again
      const { data: secondResponse } = await Axios(apiConfig);
      const { errors: secondResponseErrors } = secondResponse;
      // If this second response also contains errors, something has gone wrong,
      // throw a bad request - 400 error.
      if (secondResponseErrors) throw { response: { status: 400 } };
      // Otherwise the POST is succesful
      returnObject = { data: newData, invalidData };
    }
    return returnObject;
  } catch (error) {
    throw getErrorObject(error, 'surveyResponse');
  }
}
