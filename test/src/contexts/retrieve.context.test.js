import React, {useContext} from 'react';
import {RetrieveContext} from '../../../src/contexts/retrieve.context';
import {configure, mount} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

describe("Retrieve context", () => {
    it("Should retrieve all stock records", () => {
        const TestComponent = () => {
            const {data} = useContext(RetrieveContext);
            return (
                <>
                    <div data-testid="value">
                        {data}
                    </div>
                </>
            );
        };
        const wrapper = mount(
            <RetrieveContext.Provider value={{
                data: "Stock record"
              }}>
                <TestComponent />
            </RetrieveContext.Provider>
        );

        expect(wrapper.find('[data-testid="value"]').text()).toEqual("Stock record");
    });
});