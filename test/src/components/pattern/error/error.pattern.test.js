import React from 'react';
import { mount, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import ErrorPattern from '../../../../../src/components/patterns/error/error.pattern';
import copyProvider from '../../../../../src/resources';

configure({ adapter: new ReactSixteenAdapter() });

describe('test error pattern component', () => {
    
    let component = mount(<ErrorPattern />);
    const getCopy = copyProvider.getResource;

    test('Test error pattern elements', () => {
        expect(component.find('h1').text()).toEqual(getCopy('errorPage.heading'));
        expect(component.find('p').text()).toEqual(getCopy('errorPage.description'));
        expect(component.find('button').at(1).text()).toEqual(getCopy('back.linkTitle'));
    });
});