import PropTypes from 'prop-types';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BASE_PATH, GBCE_API } from '../constants';
import { StockMarketContext } from './stock.market.context';
import stockMarketTypes from './stock.market.types';
import copyProvider from '../resources';

const getCopy = copyProvider.getResource;

const API_BASE_PATH = process.env.MOCK_HOST ? process.env.MOCK_HOST : BASE_PATH;
const URL = API_BASE_PATH + GBCE_API;

export const GBCEContext = createContext();

const GBCEContextProvider = ({ children }) => {
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
        async function retrieveGBCE() {
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
                    const gbceObj = await response.json();
                    dispatch({
                        type: stockMarketTypes.RETRIEVE_GBCE,
                        payload: {
                            status: true,
                            gbce: gbceObj.gbce
                        }
                    });
                }
            } catch (error) {
                handleError(error);
            }
        }
        retrieveGBCE();
    }, []);

    return (
        <GBCEContext.Provider value={{gbce: state.gbce}}>
            {children}
        </GBCEContext.Provider>
    );
};

export default GBCEContextProvider;

GBCEContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};
