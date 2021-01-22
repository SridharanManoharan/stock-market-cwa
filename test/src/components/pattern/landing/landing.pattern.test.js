import 'regenerator-runtime/runtime'
import React from 'react';
import { mount, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import LandingPattern from '../../../../../src/components/patterns/landing/landing.pattern';
import { StockMarketContext } from '../../../../../src/contexts/stock.market.context';
import copyProvider from '../../../../../src/resources';
import SpinnerBlock from '../../../../../src/components/blocks/spinner/spinner.block';

import HeaderBlock from '../../../../../src/components/blocks/header/header.block';
import StockTableBlock from '../../../../../src/components/blocks/stockTable/stock.table.block';
import DividendBlock from '../../../../../src/components/blocks/dividend/dividend.block';
import PERatioBlock from '../../../../../src/components/blocks/peratio/peratio.block';
import VWPriceBlock from '../../../../../src/components/blocks/vwprice/vwprice.block';

configure({ adapter: new ReactSixteenAdapter() });

describe('test landing pattern with spinner component', () => {
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
        <LandingPattern />
    </StockMarketContext.Provider>);
    const getCopy = copyProvider.getResource;

    test('Test landing elements', () => {
        expect(component.find('[data-testid="stockMarketSpinnerID"]')).toBeDefined();
        expect(component.contains(<SpinnerBlock />)).toBe(true);
    });
});

describe('test landing pattern component', () => {
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
        <LandingPattern />
    </StockMarketContext.Provider>);
    const getCopy = copyProvider.getResource;

    test('Test landing pattern elements', () => {
        expect(component.find('[data-testid="landingPatternID"]')).toBeDefined();
        expect(component.find('[data-testid="stockMarketSpinnerID"]')).toBeDefined();
        expect(component.contains(<SpinnerBlock />)).toBe(false);
        expect(component.contains(<HeaderBlock />)).toBe(true);
        expect(component.contains(<StockTableBlock />)).toBe(true);
        expect(component.contains(<DividendBlock />)).toBe(true);
        expect(component.contains(<PERatioBlock />)).toBe(true);
        expect(component.contains(<VWPriceBlock />)).toBe(true);
    });
});