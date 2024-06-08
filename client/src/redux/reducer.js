import { FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE, ADD_CUSTOMER_REQUEST, ADD_CUSTOMER_SUCCESS, ADD_CUSTOMER_FAILURE, FETCH_CUSTOMER_REQUEST, FETCH_CUSTOMER_SUCCESS, FETCH_CUSTOMER_FAILURE, UPDATE_CUSTOMER_REQUEST, UPDATE_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_FAILURE, DELETE_CUSTOMER_REQUEST, DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_FAILURE } from "./actionTypes";

const initialState = {
    customers: [],
    customer: null,
    error: null,
};

const custReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CUSTOMERS_REQUEST:
            return {
                ...state,
                error: null,
            };
        case FETCH_CUSTOMERS_SUCCESS:
            return {
                ...state,
                customers: action.payload,
            };
        case FETCH_CUSTOMERS_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case ADD_CUSTOMER_REQUEST:
            return {
                ...state,
                error: null,
            };
        case ADD_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: action.payload,
            };
        case ADD_CUSTOMER_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case FETCH_CUSTOMER_REQUEST:
            return {
                ...state,
                error: null,
            };
        case FETCH_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: action.payload,
            };
        case FETCH_CUSTOMER_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case UPDATE_CUSTOMER_REQUEST:
            return {
                ...state,
                error: null,
            };
        case UPDATE_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: action.payload,
            };
        case UPDATE_CUSTOMER_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        case DELETE_CUSTOMER_REQUEST:
            return {
                ...state,
                error: null,
            };
        case DELETE_CUSTOMER_SUCCESS:
            return {
                ...state,
                customer: action.payload,
            };
        case DELETE_CUSTOMER_FAILURE:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}

export { custReducer };