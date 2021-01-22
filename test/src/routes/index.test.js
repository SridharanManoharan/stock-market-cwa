import React from 'react';
import { shallow, configure } from 'enzyme';
import { Route } from 'react-router-dom';
import Root from '../../../src/routes/root';
import LandingPage from '../../../src/components/pages/landing/landing.page'
import SuccessPage from '../../../src/components/pages/success/success.page'
import ErrorPage from '../../../src/components/pages/error/error.page'
import GBCEPage from '../../../src/components/pages/gbce/gbce.page'
import TradePage from '../../../src/components/pages/trade/trade.page'
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import RecordPage from '../../../src/components/pages/record/record.page';

configure({ adapter: new ReactSixteenAdapter() });

it('renders correct routes', () => {
  const wrapper = shallow(<Root />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component ? routeProps.component : routeProps.children;
    return pathMap;
  }, {});

  expect(pathMap['/landing']).toStrictEqual(<LandingPage />);
  expect(pathMap['/success']).toStrictEqual(<SuccessPage />);
  expect(pathMap['/error']).toStrictEqual(<ErrorPage />);
  expect(pathMap['/gbce']).toStrictEqual(<GBCEPage />);
  expect(pathMap['/trade']).toStrictEqual(<TradePage />);
  expect(pathMap['/tradeForm']).toStrictEqual(<RecordPage />);
});
