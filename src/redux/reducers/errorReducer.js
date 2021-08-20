import _const from "../actions/types";

const initialState = {
    msg: {},
    status: null,
    id: null
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case _const.GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status,
                id: action.payload.id
            };
        case _const.CLEAR_ERRORS:
            return {
                msg: {},
                status: null,
                id: null
            };
        default:
            return state;
    }
};

export default errorReducer;