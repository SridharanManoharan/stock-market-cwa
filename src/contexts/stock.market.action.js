export const addError = (payload, state) => {
    return {
        ...state,
        retrieveError: payload.error,
    };
};

export const addDividendFormError = (payload, state) => {
    return {
        ...state,
        dividentFormIsInValid: payload,
    };
};

export const addPeRatioFormError = (payload, state) => {
    return {
        ...state,
        peRatioFormIsInValid: payload,
    };
};

export const retrieveStock = (payload, state) => {
    return {
        ...state,
        retrieveStockStatus: payload.status,
        data: payload.data
    };
};

export const retrieveTrade = (payload, state) => {
    return {
        ...state,
        retrieveTradeStatus: payload.status,
        trade: payload.trade
    };
};

export const retrieveGBCE = (payload, state) => {
    return {
        ...state,
        gbce: payload.gbce
    };
}