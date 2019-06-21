/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */

import { surveyResponse } from './requests/surveyResponse';
import { ERROR_MISSING_PARAMETER, errorObject } from './errors/errors';

export const integrateSensorLogs = async ({ credentials, data }) => {
  // Check parameters are valid before continuing, prematurely
  // exit and throw a detailed error message for the required
  // parameter which is missing.

  const methodName = 'integrateSensorLogs';
  if (!(data && credentials)) {
    const message = (!data && 'data') || (!credentials && credentials);
    throw errorObject({
      errorCode: ERROR_MISSING_PARAMETER,
      method: methodName,
      message,
    });
  }

  const { username, password, baseURL } = credentials;

  if (!(baseURL && username && password)) {
    const message =
      (!baseURL && 'base URL') || (!username && 'username') || (!password && 'password');
    throw errorObject({
      errorCode: ERROR_MISSING_PARAMETER,
      method: methodName,
      message,
    });
  }

  // All required parameters have been passed, try to push the data
  // to Tupaia
  try {
    // Run the requst method which will push the data to Tupaia, returning
    // an object with the shape: {data: [], invalidData: []}, where data is
    // succesfully pushed logs, and invalidData not.
    const returnObject = await surveyResponse({ credentials, data });
    // If there are any logs which have succesfully been pushed, create
    // an array of sensor log IDs to return.
    const { validData } = returnObject;
    if (validData && validData.length !== 0) {
      returnObject.IDs = validData.reduce((prev, current) => {
        const { IDs } = current;
        if (!(IDs && IDs.length !== 0)) return prev;
        return [...prev, ...IDs];
      }, []);
    }
    return returnObject;
  } catch (error) {
    return getErrorObject({ error, method: methodName });
  }
};
