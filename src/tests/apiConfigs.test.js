/**
 * Tests to ensure each API config is kept consistent and
 * correct. NOTE: Functions held within objects are being
 * worked on with Jest, stringifying the objects gets around
 * this.
 *
 */

import ApiConfig from '../api/ApiConfigs';
import { API_CONFIGS, API_CONFIG_INPUT_OUTPUT } from './testData/apiConfigs';

test('All API Configs should be deeply equal [EXCEPT FOR FUNCTIONS]', () => {
  API_CONFIGS.forEach(config => {
    const { input, output } = API_CONFIG_INPUT_OUTPUT[config];
    expect(JSON.stringify(ApiConfig[config](input))).toEqual(JSON.stringify(output));
  });
});
