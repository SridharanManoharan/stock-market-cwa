import { addError, addDividendFormError, addPeRatioFormError, addRecordFormError, retrieveStock, retrieveTrade, retrieveGBCE } from './stock.market.action';
import stockMarketTypes from './stock.market.types';

const stockMarketReducer = (state, action) => {
    switch (action.type) {
    case stockMarketTypes.ERROR:
        return addError(action.payload, state);
    case stockMarketTypes.DIVIDEND_FORM_ERROR:
        return addDividendFormError(action.payload, state);
    case stockMarketTypes.PERATIO_FORM_ERROR:
        return addPeRatioFormError(action.payload, state);
    case stockMarketTypes.RECORD_FORM_ERROR:
        return addRecordFormError(action.payload, state); 
    case stockMarketTypes.RETRIEVE_STOCK:
        return retrieveStock(action.payload, state);
    case stockMarketTypes.RETRIEVE_TRADE:
        return retrieveTrade(action.payload, state);
    case stockMarketTypes.RETRIEVE_GBCE:
        return retrieveGBCE(action.payload, state);
    default:
        return state;
    }
};

export default stockMarketReducer;