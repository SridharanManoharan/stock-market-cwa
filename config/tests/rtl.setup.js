// See https://github.com/kentcdodds/react-testing-library#global-config
import 'regenerator-runtime/runtime';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';

Enzyme.configure({
  adapter: new EnzymeAdapter()
})