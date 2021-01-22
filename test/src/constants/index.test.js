/* eslint-disable no-undef */
import * as constants from '../../../src/constants/index';

describe('Constants defined', () => {
  test('expect constants to be correct and defined', () => {
    expect(constants.BASE_PATH).toBeDefined();
    expect(constants.RETRIEVE_API).toBeDefined();
    expect(constants.DIVIDEND_API).toBeDefined();
    expect(constants.PERATIO_API).toBeDefined();
    expect(constants.VOLUME_WEIGHTED_API).toBeDefined();
    expect(constants.GBCE_API).toBeDefined();
    expect(constants.TRADE_API).toBeDefined();
    expect(constants.GENERAL_ERROR_MESSAGE).toBeDefined();
    expect(constants.DEFAULT_ERROR_MESSAGE).toBeDefined();
  });
});
