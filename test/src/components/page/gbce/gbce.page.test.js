import React from 'react';
import GBCEPage from '../../../../../src/components/pages/gbce/gbce.page';
import { shallow, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

test('Render GBCE page', () => {
  const component = shallow(<GBCEPage />);
  expect(component.find('[data-testid="gbcePageID"]')).toBeDefined();
  expect(component.find('[data-testid="gbcePageID"]')).toHaveLength(1);
});
