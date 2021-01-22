import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_PATH, RETRIEVE_API } from '../constants';
import { StockMarketContext } from './stock.market.context';
import stockMarketTypes from './stock.market.types';
import copyProvider from '../resources';

const getCopy = copyProvider.getResource;

const API_BASE_PATH = process.env.MOCK_HOST ? process.env.MOCK_HOST : BASE_PATH;
const URL = API_BASE_PATH + RETRIEVE_API;

export const RetrieveContext = createContext();

const RetrieveContextProvider = ({ children }) => {
    const { state, dispatch } = useContext(StockMarketContext);

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
        async function retrieveStockMarketData() {
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
                    const data = await response.json();
                    dispatch({
                        type: stockMarketTypes.RETRIEVE_STOCK,
                        payload: {
                            status: true,
                            data
                        }
                    });
                }
            } catch (error) {
                handleError(error);
            }
        }
        retrieveStockMarketData();
    }, []);

    return (
        <RetrieveContext.Provider value={{stockData: state.data}}>
            {children}
        </RetrieveContext.Provider>
    );
};

export default RetrieveContextProvider;

RetrieveContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
