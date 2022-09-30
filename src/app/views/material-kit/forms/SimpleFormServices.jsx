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
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { useDispatch } from 'react-redux'
import {
    createAdmin,
    createServices,
    CREATE_SERVICES_SUCCESS,
    CREATE_SERVICES_FAIL,
    LOGIN_LOADING,
} from 'app/redux/actions/auth'
import axios from 'axios'
import { useHistory } from 'react-router'

const SimpleFormServices = () => {
    let history = useHistory()
    const dispatch = useDispatch()
    const [states, setStates] = useState({
        // date: new Date(),
    })
    const [image, setImage] = useState(null)

    // useEffect(() => {
    //     ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
    //         console.log(value)

    //         if (value !== state.password) {
    //             return false
    //         }
    //         return true
    //     })
    //     return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    // }, [state.password])

    const handleChange = (event) => {
        // event.persist()
        setStates({
            ...states,
            [event.target.name]: event.target.value,
        })
    }

    // const handleDateChange = (date) => {
    //     setState({ ...state, date })
    // }

    const { name, price, category, state, type } = states

    const fileSlectedHandler = (e) => {
        console.log('hhhh', e.target.files[0])
        setImage(e.target.files[0])
    }

    const handleSubmit = async (event) => {
        const data = new FormData()
        data.append('name', name)
        data.append('price', price)
        data.append('state', state.toUpperCase())
        data.append('category', category)
        data.append('type', type)
        data.append('image', image)

        console.log('submitted', { name, price, image, category, state, type })
        // dispatch(createServices(data))

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
                `http://apinathansdrycleaners.com/api/services`,
                data,
                config
            )
            dispatch({
                type: CREATE_SERVICES_SUCCESS,
                payload: res?.data,
            })
            console.log('CREATE_SERVICES_SUCCESS', res?.data)
            toast.success('Service created succefully')
            history.push('/services')
        } catch (error) {
            console.log(
                'CREATE_SERVICES_FAIL',
                error.response.data.message.message
            )
            dispatch({
                type: CREATE_SERVICES_FAIL,
            })
            toast.error('something went wrong')
            return error
        }
    }

    return (
        <div>
            <ToastContainer autoClose={2000} />
            <>
                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextValidator
                                className="my-4 w-full"
                                label="Name"
                                onChange={handleChange}
                                type="text"
                                name="name"
                                value={name || ''}
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <TextValidator
                                className="my-4 w-full"
                                label="Price"
                                onChange={handleChange}
                                type="text"
                                name="price"
                                value={price || ''}
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                            <input
                                className="my-4 w-full"
                                type="file"
                                onChange={fileSlectedHandler}
                                required
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextValidator
                                className="my-4 w-full"
                                label="State"
                                onChange={handleChange}
                                type="text"
                                name="state"
                                value={state}
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <label
                                className="my-1 w-full"
                                style={{ fontSize: 18, color: '#91909E' }}
                            >
                                Categories
                            </label>
                            <RadioGroup
                                className="my-1"
                                label="Image"
                                value={category || ''}
                                name="category"
                                onChange={handleChange}
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
                            <label
                                className="my-1 w-full"
                                style={{ fontSize: 18, color: '#91909E' }}
                            >
                                Type
                            </label>
                            <RadioGroup
                                className="my-1"
                                label="Image"
                                value={type || ''}
                                name="type"
                                onChange={handleChange}
                                row
                            >
                                <FormControlLabel
                                    value="LAUNDRY"
                                    control={<Radio color="secondary" />}
                                    label="Laundry"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="DRY-CLEANING"
                                    control={<Radio color="secondary" />}
                                    label="Dry Cleaning"
                                    labelPlacement="end"
                                />
                            </RadioGroup>
                        </Grid>
                    </Grid>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        className="my-5"
                    >
                        <Icon>send</Icon>
                        <span className="pl-2 capitalize">Submit</span>
                    </Button>
                </ValidatorForm>
            </>
        </div>
    )
}

export default SimpleFormServices
