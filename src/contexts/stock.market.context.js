import PropTypes from 'prop-types';
import React, { createContext, useReducer } from 'react';
import stockMarketReducer from "./stock.market.reducer";

const INITIAL_STATE = {
    data: {},
    retrieveStatus: false,
    retrieveFailure: false
};

export const StockMarketContext = createContext();

const StockMarketContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(stockMarketReducer, INITIAL_STATE);

    return (
        <StockMarketContext.Provider value={{ state, dispatch }}>
            {children}
        </StockMarketContext.Provider>
    );
};

export default StockMarketContextProvider;

StockMarketContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};