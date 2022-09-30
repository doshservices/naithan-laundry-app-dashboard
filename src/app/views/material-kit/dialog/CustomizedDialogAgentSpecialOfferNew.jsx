import React, { useEffect, useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import MuiDialogContent from '@material-ui/core/DialogContent'
import MuiDialogActions from '@material-ui/core/DialogActions'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import {
    Box,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Select,
} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import {
    assignOrder,
    getAllAgents,
    getAllServices,
    updateSpecialOrder,
} from 'app/redux/actions/auth'

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
})

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose } = props
    return (
        <MuiDialogTitle disableTypography className={classes.root}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="Close"
                    className={classes.closeButton}
                    onClick={onClose}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    )
})

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent)

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions)

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}))

const CustomizedDialogAgentsSpecialOffer = ({ data, handleModalClose }) => {
    // state = {
    //     open: false,
    // }
    const classes = useStyles()
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const agent = auth?.allAgents?.data?.admin
    const servicesData = auth?.allServices?.data?.services

    const orderId = data?._id
    const [open, setOpen] = useState(false)
    const [agentId, setAgentId] = useState('')
    const [formData, setFormData] = useState([])
    const [more, setMore] = useState(false)

    const [formDatas, setFormDatas] = useState({
        field1: '',
        field2: '',
        field3: '',
        field4: '',
        field5: '',
        field6: '',
        field7: '',
        field8: '',
        field9: '',
        field10: '',
        amount: '',
    })

    const {
        field1,
        field2,
        field3,
        field4,
        field5,
        field6,
        field7,
        field8,
        field9,
        field10,
        amount,
    } = formData

    const handleInputData = (e) =>
        setFormDatas({
            ...formDatas,
            [e.target.name]: e.target.value,
        })

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setAgentId(value)
    }

    console.log('value', { agentId, orderId, servicesData })

    const handleAssignOrder = () => {
        dispatch(assignOrder({ agentId, orderId }))
    }

    const handleChangeData = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(() => {
        dispatch(getAllAgents())
    }, [agentId])

    useEffect(() => {
        dispatch(getAllServices())
    }, [])

    // handleClickOpen = () => {
    //     this.setState({
    //         open: true,
    //     })
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        const info = Object.values(formDatas)
        const body = {
            items: info,
            totalPrice: formDatas.amount,
            orderId: data?._id,
        }
        console.log('formData', { info, body, data })
        dispatch(updateSpecialOrder(body))
    }

    // const handleClose = () => {
    //     setOpen({ open: !open })
    //     console.log('www')
    //     console.log(open)
    // }

    // handleClose = () => {
    //     this.setState({ open: false })
    // }

    return (
        <div>
            {/* <Button
                variant="outlined"
                color="secondary"
                onClick={handleClickOpen}
            >
                Open dialog
            </Button> */}
            <Dialog
                onClose={handleModalClose}
                aria-labelledby="customized-dialog-title"
                open={!open}
            >
                <DialogTitle
                    id="customized-dialog-title"
                    onClose={handleModalClose}
                >
                    Services
                    {/* <div> */}
                    {/* <FormControl lg={{ m: 5, width: 240 }}> */}
                    {/* <Select
                        // labelId="demo-simple-select-helper-label"
                        // id="demo-simple-select-helper"
                        // value={agentId}
                        label="Services"
                        // onChange={(e) => handleChange(e)}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem
                        // value={agent?._id}
                        >
                            LAGOS
                        </MenuItem>
                        <MenuItem
                        // value={agent?._id}
                        >
                            ABUJA
                        </MenuItem>
                    </Select> */}
                    {/* </FormControl> */}
                    {/* </div> */}
                </DialogTitle>

                <DialogContent dividers>
                    <div className="servicesData">
                        {/* <h3>Services</h3> */}
                        <DialogContent>
                            <Grid container spacing={2}>
                                {servicesData?.map((data) => (
                                    <>
                                        <Grid item xs={4}>
                                            <label>
                                                {data?.name}: {data?.price}
                                            </label>
                                        </Grid>
                                    </>
                                ))}
                            </Grid>
                        </DialogContent>
                        <form onSubmit={handleSubmit}>
                            <DialogContent dividers>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value={field1}
                                            name="field1"
                                            onChange={handleInputData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value={field2}
                                            name="field2"
                                            onChange={handleInputData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value={field3}
                                            name="field3"
                                            onChange={handleInputData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value={field4}
                                            name="field4"
                                            onChange={handleInputData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value={field5}
                                            name="field5"
                                            onChange={handleInputData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value={field6}
                                            name="field6"
                                            onChange={handleInputData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value={field7}
                                            name="field7"
                                            onChange={handleInputData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <input
                                            type="text"
                                            value=""
                                            name=""
                                            onChange={handleChangeData}
                                            placeholder="fill in the information"
                                        />
                                    </Grid>

                                    {more && (
                                        <>
                                            <Grid item xs={4}>
                                                <input
                                                    type="text"
                                                    value={field8}
                                                    name="field8"
                                                    onChange={handleInputData}
                                                    placeholder="fill in the information"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <input
                                                    type="text"
                                                    value=""
                                                    name=""
                                                    onChange={handleChangeData}
                                                    placeholder="fill in the information"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <input
                                                    type="text"
                                                    value=""
                                                    name=""
                                                    onChange={handleChangeData}
                                                    placeholder="fill in the information"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <input
                                                    type="text"
                                                    value={field9}
                                                    name="field9"
                                                    onChange={handleInputData}
                                                    placeholder="fill in the information"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <input
                                                    type="text"
                                                    value=""
                                                    name=""
                                                    onChange={handleChangeData}
                                                    placeholder="fill in the information"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <input
                                                    type="text"
                                                    value=""
                                                    name=""
                                                    onChange={handleChangeData}
                                                    placeholder="fill in the information"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <input
                                                    type="text"
                                                    value={field10}
                                                    name="field10"
                                                    onChange={handleInputData}
                                                    placeholder="fill in the information"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <input
                                                    type="text"
                                                    value=""
                                                    name=""
                                                    onChange={handleChangeData}
                                                    placeholder="fill in the information"
                                                />
                                            </Grid>
                                            <Grid item xs={4}>
                                                <input
                                                    type="text"
                                                    value=""
                                                    name=""
                                                    onChange={handleChangeData}
                                                    placeholder="fill in the information"
                                                />
                                            </Grid>
                                        </>
                                    )}
                                    <Grid item xs={4}>
                                        <input
                                            type="number"
                                            value={amount}
                                            name="amount"
                                            onChange={handleInputData}
                                            placeholder="Total Amount"
                                        />
                                    </Grid>
                                </Grid>
                                <div>
                                    <Button
                                        style={{
                                            background: 'green',
                                            color: 'white',
                                            marginTop: '20px',
                                            width: '33%'
                                        }}
                                        type="submit"
                                    >
                                        Update
                                    </Button>
                                </div>
                                <div>
                                    <p
                                        // type="primary"
                                        style={{ color: 'blue', fontWeight: 'bold', cursor: 'pointer' }}
                                        onClick={() => setMore(!more)}
                                    >
                                        View more
                                    </p>
                                </div>
                            </DialogContent>
                        </form>
                    </div>
                </DialogContent>
                <DialogActions>
                    {/* <Button
                        // onClick={handleClose}
                        color="primary"
                    >
                        Save changes
                    </Button> */}
                    {/* <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        // onClick={handleAssignOrder}
                    >
                        update
                    </Button> */}
                </DialogActions>
                {/*  */}
            </Dialog>
        </div>
    )
}

export default CustomizedDialogAgentsSpecialOffer
