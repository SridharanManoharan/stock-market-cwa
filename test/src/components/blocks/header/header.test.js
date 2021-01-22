import React from 'react';
import HeaderBlock from '../../../../../src/components/blocks/header/header.block';
import { shallow, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({adapter: new ReactSixteenAdapter()});

test('Render Header block', () => {
    const component = shallow(<HeaderBlock />);
    expect(component.find('[data-testid="stockMarketHeaderID"]')).toBeDefined();
    expect(component.find('[data-testid="stockMarketHeaderID"]')).toHaveLength(1);
    expect(component.find('[data-testid="linkHomeID"]')).toHaveLength(1);
    expect(component.find('[data-testid="linkTradeID"]')).toHaveLength(1);
    expect(component.find('[data-testid="linkTradeFormID"]')).toHaveLength(1);
    expect(component.find('[data-testid="linkGbceID"]')).toHaveLength(1);
});