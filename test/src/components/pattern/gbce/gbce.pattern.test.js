import React from 'react';
import {  mount, configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import GBCEPattern from '../../../../../src/components/patterns/gbce/gbce.pattern';
import {GBCEContext} from '../../../../../src/contexts/gbce.context';

import copyProvider from '../../../../../src/resources';

configure({ adapter: new ReactSixteenAdapter() });

describe('test gbce pattern component', () => {
    let component = mount(
        <GBCEContext.Provider value={{gbce: 100}}>
            <GBCEPattern />
        </GBCEContext.Provider>
    );
    const getCopy = copyProvider.getResource;

    test('Test gbce pattern elements copy', () => {
        expect(component.find('h1').text()).toEqual(getCopy('gbcePage.heading'));
        expect(component.find('p').text()).toEqual(`${getCopy('gbcePage.description')}  "100"`);
    });
});