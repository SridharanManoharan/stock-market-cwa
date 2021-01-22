import React from 'react';
import TradePage from '../../../../../src/components/pages/trade/trade.page';
import { shallow, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

test('Render Trade page', () => {
  const component = shallow(<TradePage />);
  expect(component.find('[data-testid="tradePageID"]')).toBeDefined();
  expect(component.find('[data-testid="tradePageID"]')).toHaveLength(1);
});
