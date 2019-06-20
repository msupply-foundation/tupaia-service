/* eslint-disable import/prefer-default-export */

export const removeInvalidObjectsTestData = {
  TEST_ONE: {
    INPUT: {
      originalData: [{ 1: 1 }, { 2: 2 }, { 3: 3 }],
      invalidData: { errors: [{ row: 0 }, { row: 1 }, { row: 2 }] },
    },
    OUTPUT: { validData: [], invalidData: [{ 3: 3, row: 2 }, { 2: 2, row: 1 }, { 1: 1, row: 0 }] },
  },
  TEST_TWO: {
    INPUT: { originalData: [{ 1: 1 }, { 2: 2 }, { 3: 3 }], invalidData: { errors: [{ row: 2 }] } },
    OUTPUT: { validData: [{ 1: 1 }, { 2: 2 }], invalidData: [{ 3: 3, row: 2 }] },
  },
  TEST_THREE: {
    INPUT: { originalData: [{ 1: 1 }, { 2: 2 }, { 3: 3 }], invalidData: {} },
    OUTPUT: { validData: [{ 1: 1 }, { 2: 2 }, { 3: 3 }], invalidData: [] },
  },
  TEST_FOUR: {
    INPUT: {},
    OUTPUT: { validData: [], invalidData: [] },
  },
  TEST_FIVE: {
    INPUT: { originalData: [], invalidData: { errors: [{ row: 0 }, { row: 2 }] } },
    OUTPUT: { validData: [], invalidData: [] },
  },
  TEST_SIX: {
    INPUT: {
      originalData: [{ 1: 1 }, { 2: 2 }, { 3: 3 }],
      invalidData: { errors: [{ row: 0 }, { row: 2 }] },
    },
    OUTPUT: {
      validData: [{ 2: 2 }],
      invalidData: [{ 3: 3, row: 2 }, { 1: 1, row: 0 }],
    },
  },
  TEST_SEVEN: {
    INPUT: { originalData: [{ 1: 1 }, { 2: 2 }, { 3: 3 }], invalidData: { errors: [] } },
    OUTPUT: { validData: [{ 1: 1 }, { 2: 2 }, { 3: 3 }], invalidData: [] },
  },
  TEST_EIGHT: {
    INPUT: { originalData: [{ 1: 1 }, { 2: 2 }, { 3: 3 }], invalidData: { errors: [{ row: 4 }] } },
    OUTPUT: { validData: [{ 1: 1 }, { 2: 2 }, { 3: 3 }], invalidData: [] },
  },
};
