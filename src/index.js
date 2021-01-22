import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes/root';
import 'bootstrap/dist/css/bootstrap.min.css';
import StockMarketContextProvider from './contexts/stock.market.context';

// IE fix for window location origin
if (!window.location.origin) {
    window.location.origin = `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}`;
}

ReactDOM.render(
    <StockMarketContextProvider>
        <Root />
    </StockMarketContextProvider>,
    document.getElementById('stock-market-cwa')
);
