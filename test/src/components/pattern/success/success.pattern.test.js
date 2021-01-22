import React from 'react';
import { mount, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import SuccessPattern from '../../../../../src/components/patterns/success/success.pattern';
import HeaderBlock from '../../../../../src/components/blocks/header/header.block';

configure({ adapter: new ReactSixteenAdapter() });

describe('test success pattern component', () => {
    let component = mount(<SuccessPattern />);

    test('Test success pattern elements', () => {
        expect(component.find('h1').text()).toEqual('Updated Successfully');
        expect(component.find('p').text()).toEqual('Trade record has been updated successfully. Please check in the Trade record log for the latest report.')
        expect(component.contains(<HeaderBlock />)).toBe(true);
    });
});