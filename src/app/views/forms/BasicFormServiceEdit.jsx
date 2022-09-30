import React, { useEffect } from 'react'
import { Breadcrumb } from 'app/components'
import { Card } from '@material-ui/core'
import SimpleFormServices from '../material-kit/forms/SimpleFormServices'
import SimpleFormServicesEdit from '../material-kit/forms/SimpleFormServicesEdit'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'
import {
    GET_ALL_SERVICES_FAIL,
    GET_ALL_SERVICES_SUCCESS,
} from 'app/redux/actions/auth'
import { useDispatch } from 'react-redux'

const BasicFormServiceEdit = () => {
    const dispatch = useDispatch()
    // const getServices = async () => {
    //     const token = localStorage.getItem('access_token')
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     }
    //     try {
    //         const res = await axios.get(
    //             `https://lundary.herokuapp.com/api/services`,
    //             config
    //         )
    //         dispatch({
    //             type: GET_ALL_SERVICES_SUCCESS,
    //             payload: res.data,
    //         })
    //         console.log('GET_ALL_SERVICES_SUCCESS', res?.data)
    //     } catch (error) {
    //         dispatch({
    //             type: GET_ALL_SERVICES_FAIL,
    //         })
    //         console.log('GET_ALL_SERVICES_FAIL', error.response)
    //     }
    // }

    // useEffect(() => {
    //     getServices()
    // }, [])

    return (
        <div className="m-sm-30">
            <div className="mb-sm-30">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Services', path: '/services' },
                        { name: 'Edit Service' },
                    ]}
                />
            </div>
            <Card className="px-6 pt-5 pb-5">
                <SimpleFormServicesEdit />
            </Card>
        </div>
    )
}

export default BasicFormServiceEdit
