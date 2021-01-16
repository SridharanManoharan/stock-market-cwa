import { addError, retrieveStatus } from './stock.market.action';
import stockMarketTypes from './stock.market.types';

const telephoneReducer = (state, action) => {
    switch (action.type) {
    case stockMarketTypes.ERROR:
        return addError(action.payload, state);
    case stockMarketTypes.RETRIEVE_STATUS:
        return retrieveStatus(action.payload, state);
    default:
        return state;
    }
};

export default telephoneReducer;