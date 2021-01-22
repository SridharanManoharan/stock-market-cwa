import React from 'react';
import SuccessPage from '../../../../../src/components/pages/success/success.page';
import { shallow, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

test('Render Success page', () => {
  const component = shallow(<SuccessPage />);
  expect(component.find('[data-testid="successPageID"]')).toBeDefined();
  expect(component.find('[data-testid="successPageID"]')).toHaveLength(1);
});
