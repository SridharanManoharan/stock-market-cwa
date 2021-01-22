import React from 'react';
import SpinnerBlock from '../../../../../src/components/blocks/spinner/spinner.block';
import { shallow, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({adapter: new ReactSixteenAdapter()});

test('Render Spinner block', () => {
    const component = shallow(<SpinnerBlock />);
    expect(component.find('[data-testid="stockMarketSpinnerID"]')).toBeDefined();
    expect(component.find('[data-testid="stockMarketSpinnerID"]')).toHaveLength(1);
    expect(component.find('Spinner')).toHaveLength(1);
});