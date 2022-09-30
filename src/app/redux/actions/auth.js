import axios from 'axios'
import { toast } from 'react-toastify'
import { mutate } from 'swr'
// export const LOADING = "LOADING";

export const GET_ADMIN_INFO_SUCCESS = "GET_ADMIN_INFO_SUCCESS";
export const GET_ADMIN_INFO_FAIL = "GET_ADMIN_INFO_FAIL";

export const GET_ALL_USERS_SUCCESS = 'GET_ALL_USERS_SUCCESS'
export const GET_ALL_USERS_FAIL = 'GET_ALL_USERS_FAIL'

export const GET_ALL_ADMIN_SUCCESS = 'GET_ALL_ADMIN_SUCCESS'
export const GET_ALL_ADMIN_FAIL = 'GET_ALL_ADMIN_FAIL'

export const CREATE_ADMIN_SUCCESS = 'CREATE_ADMIN_SUCCESS'
export const CREATE_ADMIN_FAIL = 'CREATE_ADMIN_FAIL'

export const CREATE_SERVICES_SUCCESS = 'CREATE_SERVICES_SUCCESS'
export const CREATE_SERVICES_FAIL = 'CREATE_SERVICES_FAIL'

export const ASSIGN_ORDER_SUCCESS = 'ASSIGN_ORDER_SUCCESS'
export const ASSIGN_ORDER_FAIL = 'ASSIGN_ORDER_FAIL'

export const UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS'
export const UPDATE_ORDER_FAIL = 'UPDATE_ORDER_FAIL'

export const GET_ASSIGNED_ORDERS_SUCCESS = 'GET_ASSIGNED_ORDERS_SUCCESS'
export const GET_ASSIGNED_ORDERS_FAIL = 'GET_ASSIGNED_ORDERS_FAIL'

export const GET_ALL_AGENT_SUCCESS = 'GET_ALL_AGENT_SUCCESS'
export const GET_ALL_AGENT_FAIL = 'GET_ALL_AGENT_FAIL'

export const GET_ALL_ORDERS_SUCCESS = 'GET_ALL_ORDERS_SUCCESS'
export const GET_ALL_ORDERS_FAIL = 'GET_ALL_ORDERS_FAIL'

export const GET_ALL_SERVICES_SUCCESS = 'GET_ALL_SERVICES_SUCCESS'
export const GET_ALL_SERVICES_FAIL = 'GET_ALL_SERVICES_FAIL'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export const DELETE_ADMIN_SUCCESS = 'DELETE_ADMIN_SUCCESS'
export const DELETE_ADMIN_FAIL = 'DELETE_ADMIN_FAIL'

export const DELETE_SERVICES_SUCCESS = 'DELETE_SERVICES_SUCCESS'
export const DELETE_SERVICES_FAIL = 'DELETE_SERVICES_FAIL'

export const LOGOUT = 'LOGOUT'
export const LOGIN_LOADING = 'LOGIN_LOADING'
export const RESET_TO_FALSE = 'RESET_TO_FALSE'

// resetAllToFalse
export const resetAllToFalse = () => (dispatch) => {
    dispatch({
        type: RESET_TO_FALSE,
    })
}

const baseURL = "http://apinathansdrycleaners.com/"

// assignOrder
export const updateSpecialOrder = (body) => async (dispatch) => {
    dispatch({
        type: LOGIN_LOADING,
    })
    const token = localStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    // const body = { agentId, orderId }
    try {
        const res = await axios.put(
            `${baseURL}api/orders/update/special-order`,
            body,
            config
        )
        dispatch({
            type: UPDATE_ORDER_SUCCESS,
            payload: res?.data,
        })
        console.log('UPDATE_ORDER_SUCCESS', res?.data)
        toast.success('Order has been updated succefully')
    } catch (error) {
        console.log('UPDATE_ORDER_FAIL', error.response.data.message.message)
        dispatch({
            type: UPDATE_ORDER_FAIL,
        })
        toast.error('ERROR')
        return error
    }
}

// assignOrder
export const assignOrder =
    ({ agentId, orderId }) =>
    async (dispatch) => {
        dispatch({
            type: LOGIN_LOADING,
        })
        const token = localStorage.getItem('access_token')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const body = { agentId, orderId }
        try {
            const res = await axios.put(
                `${baseURL}api/orders/assign-to-agent`,
                body,
                config
            )
            dispatch({
                type: ASSIGN_ORDER_SUCCESS,
                payload: res?.data,
            })
            console.log('ASSIGN_ORDER_SUCCESS', res?.data)
            toast.success('Order has been assigned succefully')
        } catch (error) {
            console.log(
                'ASSIGN_ORDER_FAIL',
                error.response.data.message.message
            )
            dispatch({
                type: ASSIGN_ORDER_FAIL,
            })
            toast.error('ERROR')
            return error
        }
    }

// getAssignedOrders
export const getAssignedOrders = () => async (dispatch) => {
    const token = localStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const res = await axios.get(
            `${baseURL}api/orders/assigned/agent`,
            config
        )
        dispatch({
            type: GET_ASSIGNED_ORDERS_SUCCESS,
            payload: res.data,
        })
        console.log('GET_ASSIGNED_ORDERS_SUCCESS', res?.data)
    } catch (error) {
        dispatch({
            type: GET_ASSIGNED_ORDERS_FAIL,
        })
        console.log('GET_ASSIGNED_ORDERS_FAIL', error.response)
    }
}

// getAllServices
export const getAllServices = (category) => async (dispatch) => {
    const token = localStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const res = await axios.get(
            `${baseURL}api/services?state=${category}`,
            config
        )
        dispatch({
            type: GET_ALL_SERVICES_SUCCESS,
            payload: res.data,
        })
        console.log('GET_ALL_SERVICES_SUCCESS', res?.data)
    } catch (error) {
        dispatch({
            type: GET_ALL_SERVICES_FAIL,
        })
        console.log('GET_ALL_SERVICES_FAIL', error.response)
    }
}

// Login User
export const login = (userInfo) => async (dispatch) => {
    dispatch({
        type: LOGIN_LOADING,
    })
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const body = JSON.stringify(userInfo)
    try {
        const res = await axios.post(
            `${baseURL}api/admins/login`,
            body,
            config
        )
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res?.data,
        })
        console.log('LOGIN_SUCCESS', res?.data)
    } catch (error) {
        console.log('LOGIN_FAIL', error.response)
        dispatch({
            type: LOGIN_FAIL,
        })
        toast.error("Login failed")
        return error
    }
}

// LOGOUT
export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT,
    })
}

// getAllAdmins
export const getAllAdmins = () => async (dispatch) => {
    const token = localStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const res = await axios.get(
            `${baseURL}api/admin/all`,
            config
        )
        dispatch({
            type: GET_ALL_ADMIN_SUCCESS,
            payload: res.data,
        })
        console.log('GET_ALL_ADMIN_SUCCESS', res?.data)
    } catch (error) {
        dispatch({
            type: GET_ALL_ADMIN_FAIL,
        })
        console.log('GET_ALL_ADMIN_FAIL', error.response)
    }
}

// getAllUsers
export const getAllUsers = () => async (dispatch) => {
    const token = localStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const res = await axios.get(
            `${baseURL}api/admin/all-user`,
            config
        )
        dispatch({
            type: GET_ALL_USERS_SUCCESS,
            payload: res.data,
        })
        console.log('GET_ALL_USERS_SUCCESS', res?.data)
    } catch (error) {
        dispatch({
            type: GET_ALL_USERS_FAIL,
        })
        console.log('GET_ALL_USERS_FAIL', error.response)
    }
}

// getAllAgents
export const getAllAgents = () => async (dispatch) => {
    const token = localStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const res = await axios.get(
            `${baseURL}api/admin/agent`,
            config
        )
        dispatch({
            type: GET_ALL_AGENT_SUCCESS,
            payload: res.data,
        })
        console.log('GET_ALL_AGENT_SUCCESS', res?.data)
    } catch (error) {
        dispatch({
            type: GET_ALL_AGENT_FAIL,
        })
        console.log('GET_ALL_AGENT_FAIL', error.response)
    }
}

// getAllOrders
export const getAllOrders = () => async (dispatch) => {
    const token = localStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const res = await axios.get(
            `${baseURL}api/orders`,
            config
        )
        dispatch({
            type: GET_ALL_ORDERS_SUCCESS,
            payload: res.data,
        })
        console.log('GET_ALL_ORDERS_SUCCESS', res?.data)
    } catch (error) {
        dispatch({
            type: GET_ALL_ORDERS_FAIL,
        })
        console.log('GET_ALL_ORDERS_FAIL', error.response)
    }
}

// CREATE_ADMIN_SUCCESS
export const createAdmin =
    ({
        firstName,
        lastName,
        phoneNumber,
        password,
        confirmPassword,
        gender,
        role,
        email,
    }) =>
    async (dispatch) => {
        dispatch({
            type: LOGIN_LOADING,
        })
        const token = localStorage.getItem('access_token')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        const body = {
            firstName,
            lastName,
            phoneNumber,
            password,
            confirmPassword,
            gender,
            role,
            email,
        }
        try {
            const res = await axios.post(
                `${baseURL}api/admins`,
                body,
                config
            )
            dispatch({
                type: CREATE_ADMIN_SUCCESS,
                payload: res?.data,
            })
            console.log('CREATE_ADMIN_SUCCESS', res?.data)
            toast.success('Admin created succefully')
        } catch (error) {
            console.log(
                'CREATE_ADMIN_FAIL',
                error.response.data.message.message
            )
            dispatch({
                type: CREATE_ADMIN_FAIL,
            })
            toast.error('ERROR')
            return error
        }
    }

// deleteAdmin
export const deleteAdmin = (id) => async (dispatch) => {
    dispatch({
        type: LOGIN_LOADING,
    })
    const token = localStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const res = await axios.delete(
            `${baseURL}api/admin/${id}`,
            config
        )
        dispatch({
            type: DELETE_ADMIN_SUCCESS,
            payload: res?.data,
        })
        getAllAgents()
        console.log('DELETE_ADMIN_SUCCESS', res?.data)
        toast.success('Admin deleted successfully')
    } catch (error) {
        console.log('DELETE_ADMIN_FAIL', error.response)
        dispatch({
            type: DELETE_ADMIN_FAIL,
        })
        toast.error(error.response.data.message)
        return error
    }
}

// deleteAdmin
export const deleteService = (id) => async (dispatch) => {
    dispatch({
        type: LOGIN_LOADING,
    })
    const token = localStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const res = await axios.delete(
            `${baseURL}api/services/${id}`,
            config
        )
        dispatch({
            type: DELETE_SERVICES_SUCCESS,
            payload: res?.data,
        })
        console.log('DELETE_SERVICES_SUCCESS', res?.data)
        toast.success('Service deleted successfully')
        if (res.data.error) {
            console.log('error', res.data.error)
        } else {
            mutate(['http://apinathansdrycleaners.com/api/services', config])
            // showToast('success', 'Successfully added image');
            // setImageInfo(res.data.image);
        }
    } catch (error) {
        console.log('DELETE_SERVICES_FAIL', error.response)
        dispatch({
            type: DELETE_SERVICES_FAIL,
        })
        toast.error(error.response.data.message)
        return error
    }
}

// CREATE_ADMIN_SUCCESS
export const createServices = (data) => async (dispatch) => {
    dispatch({
        type: LOGIN_LOADING,
    })
    const token = localStorage.getItem('access_token')
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }
    try {
        const res = await axios.post(
            `${baseURL}api/services`,
            data,
            config
        )
        dispatch({
            type: CREATE_SERVICES_SUCCESS,
            payload: res?.data,
        })
        console.log('CREATE_SERVICES_SUCCESS', res?.data)
        toast.success('Service created succefully')
    } catch (error) {
        console.log('CREATE_SERVICES_FAIL', error.response.data.message.message)
        dispatch({
            type: CREATE_SERVICES_FAIL,
        })
        toast.error('something went wrong')
        return error
    }
}
