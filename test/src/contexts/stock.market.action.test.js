/* eslint-disable no-undef */
import * as ACTIONS from '../../../src/contexts/stock.market.action';

test('Test addErrorAction function', () => {
    const expectedOutput = {
        retrieveError: 'Some error occured'
    }
    const payload = {
        error: 'Some error occured'
    };
    expect(ACTIONS.addError(payload, {})).toEqual(expectedOutput);
});

test('Test addDividendFormErrorAction function', () => {
    const expectedOutput = {
        dividentFormIsInValid: true
    }
    const payload = true;
    expect(ACTIONS.addDividendFormError(payload, {})).toEqual(expectedOutput);
});

test('Test addPeRatioFormErrorAction function', () => {
    const expectedOutput = {
        peRatioFormIsInValid: true
    }
    const payload = true;
    expect(ACTIONS.addPeRatioFormError(payload, {})).toEqual(expectedOutput);
});

test('Test addRecordFormErrorAction function', () => {
    const expectedOutput = {
        recordTradeFormIsInValid: true
    }
    const payload = true;
    expect(ACTIONS.addRecordFormError(payload, {})).toEqual(expectedOutput);
});

test('Test retrieveStockAction function', () => {
    const expectedOutput = {
        data: [],
        retrieveStockStatus: true
    }
    const payload = {
        status: true,
        data: []
    };
    expect(ACTIONS.retrieveStock(payload, {})).toEqual(expectedOutput);
});

test('Test retrieveTradeAction function', () => {
    const expectedOutput = {
        retrieveTradeStatus: true,
        trade: [],

    }
    const payload = {
        status: true,
        trade: []
    };
    expect(ACTIONS.retrieveTrade(payload, {})).toEqual(expectedOutput);
});

test('Test retrieveGBCEAction function', () => {
    const expectedOutput = {
        gbce: 100
    }
    const payload = {
        gbce: 100
    };
    expect(ACTIONS.retrieveGBCE(payload, {})).toEqual(expectedOutput);
});