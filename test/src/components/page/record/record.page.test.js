import React from 'react';
import RecordPage from '../../../../../src/components/pages/record/record.page';
import { shallow, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

configure({ adapter: new ReactSixteenAdapter() });

test('Render Record page', () => {
  const component = shallow(<RecordPage />);
  expect(component.find('[data-testid="recordPageID"]')).toBeDefined();
  expect(component.find('[data-testid="recordPageID"]')).toHaveLength(1);
});
