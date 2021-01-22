import React, {useContext} from 'react';
import {GBCEContext} from '../../../src/contexts/gbce.context';
import {configure, mount} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

describe("GBCE context", () => {
    it("Should retrieve gbce records", () => {
        const TestComponent = () => {
            const {gbce} = useContext(GBCEContext);
            return (
                <>
                    <div data-testid="value">
                        {gbce}
                    </div>
                </>
            );
        };
        const wrapper = mount(
            <GBCEContext.Provider value={{
                gbce: "100"
              }}>
                <TestComponent />
            </GBCEContext.Provider>
        );

        expect(wrapper.find('[data-testid="value"]').text()).toEqual("100");
    });
});