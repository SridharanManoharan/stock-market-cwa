// Routing Action Constants
export const BASE_PATH = `http://localhost:9000`;
export const RETRIEVE_API = '/customer-api/browser/stock';
export const DIVIDEND_API = '/customer-api/browser/stock/yield';
export const PERATIO_API = '/customer-api/browser/stock/peratio';
export const VOLUME_WEIGHTED_API = '/customer-api/browser/stock/vwprice';
export const GBCE_API = '/customer-api/browser/stock/gbce';
export const TRADE_API = '/customer-api/browser/stock/trade';

export const GENERAL_ERROR_MESSAGE = 'An unknown error has occurred';
export const DEFAULT_ERROR_MESSAGE = 'An error has occurred';

export default {
    BASE_PATH,
    DIVIDEND_API,
    DEFAULT_ERROR_MESSAGE,
    GENERAL_ERROR_MESSAGE,
    GBCE_API,
    PERATIO_API,
    RETRIEVE_API,
    TRADE_API,
    VOLUME_WEIGHTED_API
};