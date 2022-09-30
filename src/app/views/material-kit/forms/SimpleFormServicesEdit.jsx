import React, { useState, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import {
    Button,
    Icon,
    Grid,
    Radio,
    RadioGroup,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { useDispatch, useSelector } from 'react-redux'
import {
    createAdmin,
    createServices,
    CREATE_SERVICES_SUCCESS,
    CREATE_SERVICES_FAIL,
    LOGIN_LOADING,
    getAllServices,
    GET_ALL_SERVICES_SUCCESS,
    GET_ALL_SERVICES_FAIL,
} from 'app/redux/actions/auth'
import axios from 'axios'
import { useHistory, useParams } from 'react-router'

const SimpleFormServicesEdit = ({ data, handleModalClose }) => {
    let history = useHistory()
    const dispatch = useDispatch()
    // const { id } = useParams()
    const auth = useSelector((state) => state.auth)
    const datas = auth?.allServices?.data?.services
    const [name, setName] = useState(data.name)
    const [price, setPrice] = useState(data.price)
    const [category, setCategory] = useState(data.category)
    const [state, setState] = useState(data.state)
    const [image, setImage] = useState(null)
    const id = data?._id
    // const INITIAL_STATE = {
    //     name: '',
    //     price: '',
    //     category: '',
    //     state: '',
    //     image: null
    // }
    // const [states, setStates] = useState(INITIAL_STATE)

    console.log('gsgggs', data)

    const getServices = async () => {
        const token = localStorage.getItem('access_token')
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
        try {
            const res = await axios.get(
                `http://apinathansdrycleaners.com/api/services`,
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

    useEffect(() => {
        getServices()
    }, [])

    // const handleChange = (e) => {
    //     // e.persist()
    //     setStates({
    //         ...states,
    //         [e.target.name]: e.target.value,
    //     })
    // }

    // const { name, price, category, state } = states

    const fileSlectedHandler = (e) => {
        console.log('hhhh', e.target.files[0])
        setImage(e.target.files[0])
    }

    const handleSubmit = async () => {
        console.log('states', {
            name,
            price,
            category,
            state,
            image,
            id,
        })
        // const data = new FormData()
        // data.append('name', name)
        // data.append('price', price)
        // data.append('state', state.toUpperCase())
        // data.append('category', category)
        // data.append('image', image)

        // console.log('submitted', { name, price, image, category, state })
        // dispatch(createServices(data))

        const body = {
            name,
            price,
            category,
            state,
            id,
        }

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
            const res = await axios.put(
                `http://apinathansdrycleaners.com/api/services/${id}`,
                body,
                config
            )
            dispatch({
                type: CREATE_SERVICES_SUCCESS,
                payload: res?.data,
            })
            console.log('CREATE_SERVICES_SUCCESS', res?.data)
            toast.success('Service updated successfully')
            handleModalClose()
            history.push('/services')
        } catch (error) {
            console.log(
                'CREATE_SERVICES_FAIL',
                // error.response.data.message.message
                error
            )
            dispatch({
                type: CREATE_SERVICES_FAIL,
            })
            toast.error('something went wrong')
            return error
        }
    }

    return (
        <div style={{padding: "0 30px"}}>
            <ToastContainer autoClose={2000} />
            <>
                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                    <Grid container spacing={6}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <TextValidator
                                className="my-4 w-full"
                                label="Name"
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                name="name"
                                value={name}
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <TextValidator
                                className="my-4 w-full"
                                label="Price"
                                onChange={(e) => setPrice(e.target.value)}
                                type="text"
                                name="price"
                                value={price}
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                            <TextValidator
                                className="my-4 w-full"
                                label="State"
                                onChange={(e) => setState(e.target.value)}
                                type="text"
                                name="state"
                                value={state}
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <label
                                className="my-5"
                                style={{ fontSize: 20, color: '#91909E' }}
                            >
                                Categories
                            </label>
                            <RadioGroup
                                className="my-4 w-full"
                                label="Image"
                                value={category}
                                name="category"
                                onChange={(e) => setCategory(e.target.value)}
                                row
                            >
                                <FormControlLabel
                                    value="MEN"
                                    control={<Radio color="secondary" />}
                                    label="Men"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="WOMEN"
                                    control={<Radio color="secondary" />}
                                    label="Women"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="HOUSEHOLD"
                                    control={<Radio color="secondary" />}
                                    label="Household"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        className="my-5 w-full"
                    >
                        <Icon>send</Icon>
                        <span className="pl-2 capitalize">Update</span>
                    </Button>
                </ValidatorForm>
            </>
        </div>
    )
}

export default SimpleFormServicesEdit
