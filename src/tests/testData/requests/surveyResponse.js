/* eslint-disable import/prefer-default-export */

/**
 * Test data for the surveyResponse test cases.
 */

export const surveyResponseTestData = {
  TEST_ONE: {
    INPUT: [
      {
        entity_code: 'VU_2230',
        timestamp: 1559185864383,
        survey_id: '5cedd572f013d66671d50d0a',
        answers: {
          FRIDGE_MAX_TEMP: '',
        },
      },
      {
        entity_code: 'VU_2230',
        timestamp: 1559185864383,
        survey_id: '5cedd572f013d66671d50d0a',
        answers: {
          FRIDGE_MAX_TEMP: '1',
        },
      },
    ],
    MOCK: {
      status: 200,
      data: {
        count: 2,
        results: [
          {
            surveyResponseId: '5d06d6ccb227b5062e12046e',
            answerIds: ['5d06d6ccb227b5062e125b9a'],
          },
          {
            surveyResponseId: '5d06d6ccb227b5062e122995',
            answerIds: ['5d06d6ccb227b5062e12747e'],
          },
        ],
      },
    },
    OUTPUT: {
      data: {
        count: 2,
        results: [
          {
            surveyResponseId: '5d06d6ccb227b5062e12046e',
            answerIds: ['5d06d6ccb227b5062e125b9a'],
          },
          {
            surveyResponseId: '5d06d6ccb227b5062e122995',
            answerIds: ['5d06d6ccb227b5062e12747e'],
          },
        ],
      },
    },
  },
};
