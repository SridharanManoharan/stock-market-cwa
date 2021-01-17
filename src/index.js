import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Error from './components/pages/error/error.page';
import Landing from './components/pages/landing/landing.page';
import TradePage from './components/pages/trade/trade.page';
import GBCEPage from './components/pages/gbce/gbce.page';
import StockMarketContextProvider from './contexts/stock.market.context';
import RecordPage from './components/pages/record/record.page';
import SuccessPage from './components/pages/success/success.page';

// IE fix for window location origin
if (!window.location.origin) {
    window.location.origin = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;
}

ReactDOM.render(
    <StockMarketContextProvider>
        <Router onUpdate={() => window.scrollTo(0, 0)} >
            <Switch>
                <Route exact path="/" component={() =>
                    <Redirect to="/landing" />} />
                <Route path="/landing">
                    <Landing />
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
                    <Error />
                </Route>
                <Route path="/success">
                    <SuccessPage />
                </Route>  
            </Switch>
        </Router>
    </StockMarketContextProvider>,
    document.getElementById('stock-market-cwa')
);
