import React, {useContext} from 'react';
import {StockMarketContext} from '../../../src/contexts/stock.market.context';
import {configure, mount} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

describe("StockMarketContext context", () => {
    it("Should retrieve StockMarketContext records", () => {
        const INITIAL_STATE = {
            data: 'initial data',
            trade: 'trade record',
            gbce: '110',
            retrieveStockStatus: "false",
            retrieveTradeStatus: "false",
            dividentFormIsInValid: "false",
            peRatioFormIsInValid: "false",
            recordTradeFormIsInValid: "false"
        };
        const TestComponent = () => {
            const {state} = useContext(StockMarketContext);
            return (
                <>
                    <div data-testid="data">
                        {state.data}
                    </div>
                    <div data-testid="trade">
                        {state.trade}
                    </div>
                    <div data-testid="gbce">
                        {state.gbce}
                    </div>
                    <div data-testid="retrieveStockStatus">
                        {state.retrieveStockStatus}
                    </div>
                    <div data-testid="retrieveTradeStatus">
                        {state.retrieveTradeStatus}
                    </div>
                    <div data-testid="dividentFormIsInValid">
                        {state.retrieveTradeStatus}
                    </div>
                    <div data-testid="peRatioFormIsInValid">
                        {state.retrieveTradeStatus}
                    </div>
                    <div data-testid="recordTradeFormIsInValid">
                        {state.retrieveTradeStatus}
                    </div>
                </>
            );
        };
        const wrapper = mount(
            <StockMarketContext.Provider value={{
                dispatch: jest.fn(),
                state: INITIAL_STATE
              }}>
                <TestComponent />
            </StockMarketContext.Provider>
        );

        expect(wrapper.find('[data-testid="data"]').text()).toEqual("initial data");
        expect(wrapper.find('[data-testid="trade"]').text()).toEqual("trade record");
        expect(wrapper.find('[data-testid="gbce"]').text()).toEqual("110");
        expect(wrapper.find('[data-testid="retrieveStockStatus"]').text()).toEqual("false");;
        expect(wrapper.find('[data-testid="retrieveTradeStatus"]').text()).toEqual("false");
        expect(wrapper.find('[data-testid="dividentFormIsInValid"]').text()).toEqual("false");
        expect(wrapper.find('[data-testid="peRatioFormIsInValid"]').text()).toEqual("false");
        expect(wrapper.find('[data-testid="recordTradeFormIsInValid"]').text()).toEqual("false");
    });
});