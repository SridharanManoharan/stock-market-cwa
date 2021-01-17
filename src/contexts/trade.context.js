import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_PATH, TRADE_API } from '../constants';
import { StockMarketContext } from './stock.market.context';
import stockMarketTypes from './stock.market.types';
import copyProvider from '../resources';

const getCopy = copyProvider.getResource;

const API_BASE_PATH = process.env.MOCK_HOST ? process.env.MOCK_HOST : BASE_PATH;
const URL = API_BASE_PATH + TRADE_API;

export const TradeContext = createContext();

const TradeContextProvider = ({ children }) => {
    const { dispatch } = useContext(StockMarketContext);
    const history = useHistory();

    const handleError = (error) => {
        dispatch({
            type: stockMarketTypes.ERROR,
            payload: { 
                error
            }
        });
        history.push('/error');
    };

    useEffect(() => {
        async function retrieveTradeData() {
            try {
                const response = await fetch(URL, {
                    method: 'GET',
                    mode: 'cors',
                    credentials: 'same-origin',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (response.status !== 200 && response.status !== 304) {
                    handleError(getCopy('genericError.heading'));
                } else {
                    const trade = await response.json();
                    dispatch({
                        type: stockMarketTypes.RETRIEVE_TRADE,
                        payload: {
                            status: true,
                            trade
                        }
                    });
                }
            } catch (error) {
                handleError(error);
            }
        }
        retrieveTradeData();
    }, []);

    return (
        <TradeContext.Provider value={{}}>
            {children}
        </TradeContext.Provider>
    );
};

export default TradeContextProvider;

TradeContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
