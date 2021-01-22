/* eslint-disable no-undef */
import stockMarketTypes from '../../../src/contexts/stock.market.types';

describe('stockMarketTypes defined', () => {
  test('expect stockMarketTypes to be correct and defined', () => {
    expect(stockMarketTypes.ERROR).toBeDefined();
    expect(stockMarketTypes.DIVIDEND_FORM_ERROR).toBeDefined();
    expect(stockMarketTypes.PERATIO_FORM_ERROR).toBeDefined();
    expect(stockMarketTypes.RETRIEVE_STOCK).toBeDefined();
    expect(stockMarketTypes.RETRIEVE_TRADE).toBeDefined();
    expect(stockMarketTypes.RETRIEVE_GBCE).toBeDefined();
    expect(stockMarketTypes.RECORD_FORM_ERROR).toBeDefined();
  });
});