import React from 'react';
import LandingPage from '../../../../../src/components/pages/landing/landing.page';
import { shallow, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

test('Render Landing page', () => {
  const component = shallow(<LandingPage />);
  expect(component.find('[data-testid="landingPageID"]')).toBeDefined();
  expect(component.find('[data-testid="landingPageID"]')).toHaveLength(1);
});
