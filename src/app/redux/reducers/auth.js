import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    RESET_TO_FALSE,
    LOGIN_LOADING,
    GET_ALL_ADMIN_SUCCESS,
    GET_ALL_ADMIN_FAIL,
    GET_ALL_USERS_SUCCESS,
    GET_ALL_USERS_FAIL,
    GET_ALL_AGENT_SUCCESS,
    GET_ALL_AGENT_FAIL,
    GET_ALL_ORDERS_SUCCESS,
    GET_ALL_ORDERS_FAIL,
    CREATE_ADMIN_SUCCESS,
    CREATE_ADMIN_FAIL,
    DELETE_ADMIN_SUCCESS,
    DELETE_ADMIN_FAIL,
    GET_ALL_SERVICES_SUCCESS,
    GET_ALL_SERVICES_FAIL,
    DELETE_SERVICES_SUCCESS,
    DELETE_SERVICES_FAIL,
    ASSIGN_ORDER_SUCCESS,
    ASSIGN_ORDER_FAIL,
    GET_ASSIGNED_ORDERS_SUCCESS,
    GET_ASSIGNED_ORDERS_FAIL,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAIL,
} from '../actions/auth'

const initialState = {
    access_token: localStorage.getItem('access_token'),
    isAuthenticated: JSON.parse(localStorage.getItem('data')),
    loading: false,
    data: null,
    allAdmins: [],
    allUsers: [],
    allAgents: [],
    allServices: [],
    newAdmin: [],
    allOrders: [],
    agentsOrders: [],
    // updateAccount: [],
    // isUpdateAccount: false,
    // isUpdatePassword: false,
    // isError: false,
    // UpdateAccountPassword: [],
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case LOGIN_LOADING:
            return {
                ...state,
                loading: true,
            }
        case RESET_TO_FALSE:
            return {
                ...state,
                // updateAccount: payload,
                // isAuthenticated: true,
                loading: false,
                // isUpdateAccount: false,
                // isUpdatePassword: false,
                // isError: false,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('access_token', payload.data?.token)
            localStorage.setItem('data', JSON.stringify(payload.data))
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
                data: payload,
            }
        case UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case ASSIGN_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case DELETE_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case DELETE_SERVICES_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case GET_ALL_ADMIN_SUCCESS:
            return {
                ...state,
                allAdmins: payload,
                loading: false,
            }
        case GET_ASSIGNED_ORDERS_SUCCESS:
            return {
                ...state,
                agentsOrders: payload,
                loading: false,
            }
        case GET_ALL_SERVICES_SUCCESS:
            return {
                ...state,
                allServices: payload,
                loading: false,
            }
        case GET_ALL_USERS_SUCCESS:
            return {
                ...state,
                allUsers: payload,
                loading: false,
            }
        case GET_ALL_AGENT_SUCCESS:
            return {
                ...state,
                allAgents: payload,
                loading: false,
            }
        case GET_ALL_ORDERS_SUCCESS:
            return {
                ...state,
                allOrders: payload,
                loading: false,
            }
        case CREATE_ADMIN_SUCCESS:
            return {
                ...state,
                newAdmin: payload,
                loading: false,
            }
        // case LOADING:
        //   return {
        //     ...state,
        //     loading: true,
        //   };
        // case UPDATE_ACCOUNT_PASSWORD_SUCCESS:
        //   return {
        //     ...state,
        //     loading: false,
        //     isUpdatePassword: true,
        //     UpdateAccountPassword: payload,
        //   };
        // case UPDATE_ACCOUNT_PASSWORD_FAIL:
        //   return {
        //     ...state,
        //     loading: false,
        //     isError: true,
        //     UpdateAccountPassword: payload,
        //   };
        // case UPDATE_ACCOUNT_SUCCESS:
        //   return {
        //     ...state,
        //     updateAccount: payload,
        //     isAuthenticated: true,
        //     loading: false,
        //     isUpdateAccount: true,
        //   };
        // case USER_LOADED:
        //   localStorage.setItem("user", JSON.stringify(payload.data));
        //   return {
        //     ...state,
        //     // ...payload,
        //     data: payload.data,
        //     loading: false,
        //   };
        // case FORGOT_PASSWORD_SUCCESS:
        //   return { ...state, payload };
        // case FORGOT_PASSWORD_FAIL:
        //   return { ...state };
        // case UPDATE_PASSWORD_SUCCESS:
        //   return { ...state, payload };
        // case UPDATE_PASSWORD_FAIL:
        //   return { ...state };
        case GET_ASSIGNED_ORDERS_FAIL:
            return { ...state }
        case ASSIGN_ORDER_FAIL:
            return { ...state }
        case UPDATE_ORDER_FAIL:
            return { ...state }
        case GET_ALL_ORDERS_FAIL:
            return { ...state }
        case GET_ALL_SERVICES_FAIL:
            return { ...state }
        case DELETE_ADMIN_FAIL:
            return { ...state }
        case DELETE_SERVICES_FAIL:
            return { ...state }
        case CREATE_ADMIN_FAIL:
            return { ...state }
        case GET_ALL_USERS_FAIL:
            return { ...state }
        case GET_ALL_ADMIN_FAIL:
            return { ...state }
        case GET_ALL_AGENT_FAIL:
            return { ...state }
        case LOGOUT:
        case LOGIN_FAIL:
            localStorage.removeItem('access_token')
            localStorage.removeItem('data')
            return {
                ...state,
                access_token: null,
                isAuthenticated: false,
                loading: false,
            }
        default:
            return state
    }
}
