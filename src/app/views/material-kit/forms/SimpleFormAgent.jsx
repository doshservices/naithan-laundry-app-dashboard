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
    CREATE_ADMIN_SUCCESS,
    LOGIN_LOADING,
    CREATE_ADMIN_FAIL,
} from 'app/redux/actions/auth'
import axios from 'axios'
import { useHistory } from 'react-router'

const SimpleFormAgent = () => {
    let history = useHistory();
    const dispatch = useDispatch()
    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = async (event) => {
        // console.log("submitted");
        console.log('state', {
            firstName,
            lastName,
            phoneNumber,
            password,
            confirmPassword,
            gender,
            role: 'AGENT',
            email,
            role,
        })

        // dispatch(
        //     createAdmin({
        //         firstName,
        //         lastName,
        //         phoneNumber,
        //         password,
        //         confirmPassword,
        //         gender,
        //         role: 'AGENT',
        //         email,
        //         role,
        //     })
        // )

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
                `http://apinathansdrycleaners.com/api/admins`,
                body,
                config
            )
            dispatch({
                type: CREATE_ADMIN_SUCCESS,
                payload: res?.data,
            })
            console.log('CREATE_ADMIN_SUCCESS', res?.data)
            toast.success('Admin created succefully')
            history.push("/admins")
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

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }

    // const role = 'SUPER_ADMIN'

    const {
        // username,
        firstName,
        lastName,
        // creditCard,
        phoneNumber,
        password,
        confirmPassword,
        gender,
        role = 'AGENT',
        email,
    } = state

    return (
        <div>
            <ToastContainer autoClose={2000} />
            <>
                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            {/* <TextValidator
                            className="my-4 w-full"
                            label="Username (Min length 4, Max length 9)"
                            onChange={handleChange}
                            type="text"
                            name="username"
                            value={username || ''}
                            inputProps={{ style: { fontSize: 20 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 15',
                            ]}
                            errorMessages={['this field is required']}
                        /> */}
                            <TextValidator
                                className="my-4 w-full"
                                label="First Name"
                                onChange={handleChange}
                                type="text"
                                name="firstName"
                                value={firstName || ''}
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <TextValidator
                                className="my-4 w-full"
                                label="Last Name"
                                onChange={handleChange}
                                type="text"
                                name="lastName"
                                value={lastName || ''}
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <TextValidator
                                className="my-4 w-full"
                                label="Email"
                                onChange={handleChange}
                                type="email"
                                name="email"
                                value={email || ''}
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                validators={['required', 'isEmail']}
                                errorMessages={[
                                    'this field is required',
                                    'email is not valid',
                                ]}
                            />

                            <TextValidator
                                className="my-4 w-full"
                                label="Mobile Nubmer"
                                onChange={handleChange}
                                type="text"
                                name="phoneNumber"
                                value={phoneNumber || ''}
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <TextValidator
                                className="my-4 w-full"
                                label="Role"
                                // onChange={handleChange}
                                type="text"
                                name="role"
                                value={role || 'AGENT'}
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                className="my-4 w-full"
                                margin="none"
                                id="mui-pickers-date"
                                label="Date picker"
                                inputVariant="standard"
                                type="text"
                                autoOk={true}
                                value={date}
                                inputProps={{ style: { fontSize: 20 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider> */}
                            {/* <TextValidator
                            className="my-8 w-full"
                            label="Credit Card"
                            onChange={handleChange}
                            type="number"
                            name="creditCard"
                            value={creditCard || ''}
                            inputProps={{ style: { fontSize: 20 } }}
                            InputLabelProps={{ style: { fontSize: 20 } }}
                            validators={[
                                'required',
                                'minStringLength:16',
                                'maxStringLength: 16',
                            ]}
                            errorMessages={['this field is required']}
                        /> */}
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <TextValidator
                                className="my-4 w-full"
                                label="Password"
                                onChange={handleChange}
                                name="password"
                                type="password"
                                value={password || ''}
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                validators={[
                                    'required',
                                    'minStringLength:7',
                                    'maxStringLength: 16',
                                ]}
                                // validators={['required']}
                                // validators={['required', 'minNumber:7', 'maxNumber:255']}
                                errorMessages={['this field is required', 'password cannot be less than 7' ]}
                                minlength={7}
                            />
                            <TextValidator
                                className="my-4 w-full"
                                label="Confirm Password"
                                onChange={handleChange}
                                name="confirmPassword"
                                type="password"
                                value={confirmPassword || ''}
                                inputProps={{ style: { fontSize: 20 } }}
                                InputLabelProps={{ style: { fontSize: 20 } }}
                                validators={['required', 'isPasswordMatch']}
                                errorMessages={[
                                    'this field is required',
                                    "password didn't match",
                                ]}
                                minlength={7}
                            />
                            <RadioGroup
                                className="my-4"
                                value={gender || ''}
                                name="gender"
                                onChange={handleChange}
                                row
                            >
                                <FormControlLabel
                                    value="MALE"
                                    control={<Radio color="secondary" />}
                                    label="Male"
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="FEMALE"
                                    control={<Radio color="secondary" />}
                                    label="Female"
                                    labelPlacement="end"
                                />
                                {/* <FormControlLabel
                                value="Others"
                                control={<Radio color="secondary" />}
                                label="Others"
                                labelPlacement="end"
                            /> */}
                            </RadioGroup>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="I have read and agree to the terms of service."
                            />
                        </Grid>
                    </Grid>
                    <Button color="primary" variant="contained" type="submit">
                        <Icon>send</Icon>
                        <span className="pl-2 capitalize">Submit</span>
                    </Button>
                </ValidatorForm>
            </>
        </div>
    )
}

export default SimpleFormAgent
