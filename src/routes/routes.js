import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LangingPage from '../components/pages/landing/landing.page';
import Successpage from '../components/pages/success/success.page';
import ErrorPage from '../components/pages/error/error.page';
import GBCEPage from '../components/pages/gbce/gbce.page';
import TradePage from '../components/pages/trade/trade.page';
import RecordPage from '../components/pages/record/record.page';

const routes = (
  <Switch>
    <Route exact path="/" component={() =>
        <Redirect to="/landing" />} />
    <Route path="/landing">
        <LangingPage />
    </Route>
    <Route path="/trade">
        <TradePage />
    </Route>
    <Route path="/tradeForm">
        <RecordPage />
    </Route>                
    <Route path="/gbce">
        <GBCEPage />
    </Route>                
    <Route path="/error">
        <ErrorPage />
    </Route>
    <Route path="/success">
        <Successpage />
    </Route>  
  </Switch>
);

export default routes;
