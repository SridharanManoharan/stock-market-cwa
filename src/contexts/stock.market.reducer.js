import { addError, addDividendFormError, addPeRatioFormError, retrieveStock, retrieveTrade } from './stock.market.action';
import stockMarketTypes from './stock.market.types';

const stockMarketReducer = (state, action) => {
    switch (action.type) {
    case stockMarketTypes.ERROR:
        return addError(action.payload, state);
    case stockMarketTypes.DIVIDEND_FORM_ERROR:
        return addDividendFormError(action.payload, state);
    case stockMarketTypes.PERATIO_FORM_ERROR:
        return addPeRatioFormError(action.payload, state);        
    case stockMarketTypes.RETRIEVE_STOCK:
        return retrieveStock(action.payload, state);
    case stockMarketTypes.RETRIEVE_TRADE:
        return retrieveTrade(action.payload, state);
    default:
        return state;
    }
};

export default stockMarketReducer;