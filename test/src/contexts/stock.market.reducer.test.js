import stockMarketReducer from '../../../src/contexts/stock.market.reducer';

describe('Test stockMarketReducer reducer', () => {

    it('Should test default state of reducer ', () => {
      const expected = {};
      const action = {
        type: 'NOT_REDUCER_ACTION',
        payload: {}
      };
      expect(stockMarketReducer({}, action)).toEqual(expected);
    });

    it('Should test general error reducer ', () => {
        const expected = {
            retrieveError: "Some error has occurred"
        };
        const action = {
          type: 'ERROR',
          payload: {error: 'Some error has occurred'}
        };
        expect(stockMarketReducer({}, action)).toEqual(expected);
    });

    it('Should test divident form error reducer ', () => {
        const expected = {
            dividentFormIsInValid: true
        };
        const action = {
          type: 'DIVIDEND_FORM_ERROR',
          payload: true
        };
        expect(stockMarketReducer({}, action)).toEqual(expected);
    });

    it('Should test peRatio form error reducer ', () => {
        const expected = {
            peRatioFormIsInValid: true
        };
        const action = {
          type: 'PERATIO_FORM_ERROR',
          payload: true
        };
        expect(stockMarketReducer({}, action)).toEqual(expected);
    });

    it('Should test record trade form error reducer ', () => {
        const expected = {
            recordTradeFormIsInValid: true
        };
        const action = {
          type: 'RECORD_FORM_ERROR',
          payload: true
        };
        expect(stockMarketReducer({}, action)).toEqual(expected);
    });

    it('Should test retrieve stock reducer ', () => {
        const expected = {
            retrieveStockStatus: true,
            data: {
                stockMarketData: []
            }
        };
        const action = {
          type: 'RETRIEVE_STOCK',
          payload: {
            status: true,
            data: {
                stockMarketData: []
            } 
            }
        };
        expect(stockMarketReducer({}, action)).toEqual(expected);
    });

    it('Should test update trade record reducer ', () => {
        const expected = {
            retrieveTradeStatus: true,
            trade: {symbol: 'trade data'}
        };
        const action = {
          type: 'RETRIEVE_TRADE',
          payload: {
            status: true,
            trade: {symbol: 'trade data'}
          }
        };
        expect(stockMarketReducer({}, action)).toEqual(expected);
    });

    it('Should test retrieve GBCE record reducer ', () => {
        const expected = {
            gbce: 100
        };
        const action = {
          type: 'RETRIEVE_GBCE',
          payload: {
            status: true,
            gbce: 100
          }
        };
        expect(stockMarketReducer({}, action)).toEqual(expected);
    });

});