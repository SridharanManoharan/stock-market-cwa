export const addError = (payload, state) => {
    return {
        ...state,
        retrieveError: payload.error,
    };
};

export const retrieveStatus = (payload, state) => {
    return {
        ...state,
        retrieveStatus: payload.status,
        data: payload.data
    };
};