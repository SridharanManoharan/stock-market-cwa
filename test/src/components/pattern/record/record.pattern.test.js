import 'regenerator-runtime/runtime'
import React from 'react';
import { mount, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import RecordPattern from '../../../../../src/components/patterns/record/record.pattern';
import { StockMarketContext } from '../../../../../src/contexts/stock.market.context';
import copyProvider from '../../../../../src/resources';
import SpinnerBlock from '../../../../../src/components/blocks/spinner/spinner.block';

import RecordTradeBlock from '../../../../../src/components/blocks/recordTrade/record.trade.block';

configure({ adapter: new ReactSixteenAdapter() });

describe('test record pattern with spinner component', () => {
    let data = {
        data: {},
        trade: {},
        gbce: 0,
        retrieveStockStatus: false,
        retrieveTradeStatus: false,
        dividentFormIsInValid: false,
        peRatioFormIsInValid: false,
        recordTradeFormIsInValid: false
    };
    let component = mount(<StockMarketContext.Provider value={{state: {...data}, dispatch: jest.fn()}}>
        <RecordPattern />
    </StockMarketContext.Provider>);
    const getCopy = copyProvider.getResource;

    test('Test landing elements', () => {
        expect(component.find('[data-testid="stockMarketSpinnerID"]')).toBeDefined();
        expect(component.contains(<SpinnerBlock />)).toBe(true);
        expect(component.contains(<RecordTradeBlock />)).toBe(false);
    });
});

describe('test record pattern component', () => {
    let data = {
        data: {
            "stockMarketData": [   
                {
                    "stockSymbol": "TEA",
                    "type": "Common",
                    "lastDividend": 0,
                    "fixedDividend": 0,
                    "parValue": 100
                },
                {
                    "stockSymbol": "POP",
                    "type": "Common",
                    "lastDividend": 8,
                    "fixedDividend": 0,
                    "parValue": 100 
                }
            ]
        },
        trade: {},
        gbce: 0,
        retrieveStockStatus: true,
        retrieveTradeStatus: false,
        dividentFormIsInValid: false,
        peRatioFormIsInValid: false,
        recordTradeFormIsInValid: false
    };
    let component = mount(<StockMarketContext.Provider value={{state: {...data}, dispatch: jest.fn()}}>
        <RecordPattern />
    </StockMarketContext.Provider>);
    const getCopy = copyProvider.getResource;

    test('Test record pattern elements', () => {
        expect(component.contains(<SpinnerBlock />)).toBe(false);
        expect(component.contains(<RecordTradeBlock />)).toBe(true);
    });
});