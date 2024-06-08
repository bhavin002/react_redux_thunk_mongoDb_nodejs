import { FETCH_CUSTOMERS_REQUEST, FETCH_CUSTOMERS_SUCCESS, FETCH_CUSTOMERS_FAILURE, ADD_CUSTOMER_REQUEST, ADD_CUSTOMER_SUCCESS, FETCH_CUSTOMER_REQUEST, FETCH_CUSTOMER_SUCCESS, FETCH_CUSTOMER_FAILURE, UPDATE_CUSTOMER_REQUEST, UPDATE_CUSTOMER_SUCCESS, UPDATE_CUSTOMER_FAILURE, DELETE_CUSTOMER_REQUEST, DELETE_CUSTOMER_SUCCESS, DELETE_CUSTOMER_FAILURE } from "./actionTypes";
import axios from "axios"

const fetchCustomersRequest = () => {
    return {
        type: FETCH_CUSTOMERS_REQUEST
    }
}

const fetchCustomersSuccess = (customers) => {
    return {
        type: FETCH_CUSTOMERS_SUCCESS,
        payload: customers
    }
};

const fetchCustomersFailure = (error) => {
    return {
        type: FETCH_CUSTOMERS_FAILURE,
        payload: error
    }
};

const addCustomerRequest = () => {
    return {
        type: ADD_CUSTOMER_REQUEST
    }
}

const addCustomerSuccess = (customer) => {
    return {
        type: ADD_CUSTOMER_SUCCESS,
        payload: customer
    }
}

const addCustomerFailure = (error) => {
    return {
        type: FETCH_CUSTOMERS_FAILURE,
        payload: error
    }
}

const fetchCustomerRequest = () => {
    return {
        type: FETCH_CUSTOMER_REQUEST
    }
}

const fetchCustomerSuccess = (customer) => {
    return {
        type: FETCH_CUSTOMER_SUCCESS,
        payload: customer
    }
};

const fetchCustomerFailure = (error) => {
    return {
        type: FETCH_CUSTOMER_FAILURE,
        payload: error
    }
};


const updateCustomerRequest = () => {
    return {
        type: UPDATE_CUSTOMER_REQUEST
    }
}

const updateCustomerSuccess = (customer) => {
    return {
        type: UPDATE_CUSTOMER_SUCCESS,
        payload: customer
    }
}

const updateCustomerFailure = (error) => {
    return {
        type: UPDATE_CUSTOMER_FAILURE,
        payload: error
    }
}


const deleteCustomerRequest = () => {
    return {
        type: DELETE_CUSTOMER_REQUEST
    }
}

const deleteCustomerSuccess = (customer) => {
    return {
        type: DELETE_CUSTOMER_SUCCESS,
        payload: customer
    }
}

const deleteCustomerFailure = (error) => {
    return {
        type: DELETE_CUSTOMER_FAILURE,
        payload: error
    }
}

// thunk functions

const fetchCustomers = () => {
    return async (dispatch) => {
        dispatch(fetchCustomersRequest());
        try {
            const { data } = await axios.get("http://localhost:5000/api/customer/getAllCustomer");
            dispatch(fetchCustomersSuccess(data))
        } catch (error) {
            dispatch(fetchCustomersFailure(error.message))
        }
    };
};

const addCustomer = (customer) => {
    return async (dispatch) => {
        dispatch(addCustomerRequest());
        try {
            const { data } = await axios.post("http://localhost:5000/api/customer/addCustomer", customer);
            dispatch(addCustomerSuccess(data))
        } catch (error) {
            dispatch(addCustomerFailure(error.message))
        }
    };
}

const fetchCustomer = (id) => {
    return async (dispatch) => {
        dispatch(fetchCustomerRequest());
        try {
            const { data } = await axios.get(`http://localhost:5000/api/customer/getOneCustomer/${id}`);
            dispatch(fetchCustomerSuccess(data))
        } catch (error) {
            dispatch(fetchCustomerFailure(error.message))
        }
    };
};

const updateCustomer = (id, customer) => {
    return async (dispatch) => {
        dispatch(updateCustomerRequest());
        try {
            const { data } = await axios.post(`http://localhost:5000/api/customer/updateCustomer/${id}`, customer);
            dispatch(updateCustomerSuccess(data))
        } catch (error) {
            dispatch(updateCustomerFailure(error.message))
        }
    };
}

const deleteCustomer = (id) => {
    return async (dispatch) => {
        dispatch(deleteCustomerRequest());
        try {
            const { data } = await axios.get(`http://localhost:5000/api/customer/deleteCustomer/${id}`);
            dispatch(deleteCustomerSuccess(data))
        } catch (error) {
            dispatch(deleteCustomerFailure(error.message))
        }
    };
}

export { fetchCustomers, addCustomer, fetchCustomer, updateCustomer, deleteCustomer }