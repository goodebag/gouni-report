import _const from "./types";

// RETURN ERRORS
export const returnErrors = (msg, status, id = null) => {
    return {
        type: _const.GET_ERRORS,
        payload: { msg, status, id }
    };
};

// CLEAR_ERRORS
export const clearErrors = () => {
    return {
        type: _const.CLEAR_ERRORS
    };
};