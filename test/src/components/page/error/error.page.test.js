import React from 'react';
import ErrorPage from '../../../../../src/components/pages/error/error.page';
import { shallow, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

test('Render Error page', () => {
  const component = shallow(<ErrorPage />);
  expect(component.find('[data-testid="errorPageID"]')).toBeDefined();
  expect(component.find('[data-testid="errorPageID"]')).toHaveLength(1);
});
