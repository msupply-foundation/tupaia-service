import { removeInvalidObjects } from '../utilities/requestUtilities';
import { removeInvalidObjectsTestData } from './testData/utilities';

/**
 * Test cases:
 * 1 - removing all data, as all have errors
 * 2 - removing one object, as only one has an error
 * 3 - removing no data, as none have errors
 * 4 - returning empty arrays as no data has been passed
 */
test('Should pass all tests', () => {
  Object.values(removeInvalidObjectsTestData).forEach(({ INPUT, OUTPUT }) => {
    const result = removeInvalidObjects(INPUT.originalData, INPUT.invalidData);
    expect(result).toEqual(OUTPUT);
  });
});
