import 'regenerator-runtime/runtime'
import React from 'react';
import { mount, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import TradePattern from '../../../../../src/components/patterns/trade/trade.pattern';
import { StockMarketContext } from '../../../../../src/contexts/stock.market.context';
import copyProvider from '../../../../../src/resources';
import SpinnerBlock from '../../../../../src/components/blocks/spinner/spinner.block';
import HeaderBlock from '../../../../../src/components/blocks/header/header.block';

import TradeTableBlock from '../../../../../src/components/blocks/tradeTable/trade.table.block';

configure({ adapter: new ReactSixteenAdapter() });

describe('test trade pattern with spinner component', () => {
    let STORE = {
        data: {},
        trade: {},
        gbce: 0,
        retrieveStockStatus: false,
        retrieveTradeStatus: false,
        dividentFormIsInValid: false,
        peRatioFormIsInValid: false,
        recordTradeFormIsInValid: false
    };
    let component = mount(<StockMarketContext.Provider value={{state: {...STORE}, dispatch: jest.fn()}}>
        <TradePattern />
    </StockMarketContext.Provider>);

    test('Test trade pattern elements', () => {
        expect(component.find('[data-testid="stockMarketSpinnerID"]')).toBeDefined();
        expect(component.contains(<SpinnerBlock />)).toBe(true);
        expect(component.contains(<HeaderBlock />)).toBe(false);
        expect(component.contains(<TradeTableBlock />)).toBe(false);
    });
});

describe('test trade pattern component', () => {
    let STORE = {
        data: {
        },
        trade: {trade:[{"sharesQuantity":"10","symbol":"POP","tradePrice":"10","tradeType":"buy","createdAt":"2021-01-21T23:59:00.554Z"},
        {"sharesQuantity":"100","symbol":"TEA","tradePrice":"10","tradeType":"buy","createdAt":"2021-01-21T23:59:29.316Z"}]},
        gbce: 0,
        retrieveStockStatus: true,
        retrieveTradeStatus: true,
        dividentFormIsInValid: false,
        peRatioFormIsInValid: false,
        recordTradeFormIsInValid: false
    };
    let component = mount(<StockMarketContext.Provider value={{state: {...STORE}, dispatch: jest.fn()}}>
        <TradePattern />
    </StockMarketContext.Provider>);
    const getCopy = copyProvider.getResource;

    test('Test trade pattern elements', () => {
        expect(component.contains(<SpinnerBlock />)).toBe(false);
        expect(component.contains(<HeaderBlock />)).toBe(true);
    });
});