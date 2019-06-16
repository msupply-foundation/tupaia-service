/* eslint-disable import/prefer-default-export */

export const removeInvalidObjectsTestData = {
  TEST_ONE: {
    INPUT: {
      originalData: [1, 2, 3],
      invalidData: { errors: [{ row: 0 }, { row: 1 }, { row: 2 }] },
    },
    OUTPUT: { data: [], invalidData: [3, 2, 1] },
  },
  TEST_TWO: {
    INPUT: { originalData: [1, 2, 3], invalidData: { errors: [{ row: 2 }] } },
    OUTPUT: { data: [1, 2], invalidData: [3] },
  },
  TEST_THREE: {
    INPUT: { originalData: [1, 2, 3], invalidData: {} },
    OUTPUT: { data: [1, 2, 3], invalidData: [] },
  },
  TEST_FOUR: {
    INPUT: {},
    OUTPUT: { data: [], invalidData: [] },
  },
};
