import React, {useContext} from 'react';
import {TradeContext} from '../../../src/contexts/trade.context';
import {configure, mount} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

describe("Trade context", () => {
    it("Should retrieve all trade records", () => {
        const TestComponent = () => {
            const {tradeRecord} = useContext(TradeContext);
            return (
                <>
                    <div data-testid="value">
                        {tradeRecord}
                    </div>
                </>
            );
        };
        const wrapper = mount(
            <TradeContext.Provider value={{
                tradeRecord: "Trade record"
              }}>
                <TestComponent />
            </TradeContext.Provider>
        );

        expect(wrapper.find('[data-testid="value"]').text()).toEqual("Trade record");
    });
});