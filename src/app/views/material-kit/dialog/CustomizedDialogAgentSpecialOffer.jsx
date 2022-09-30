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

    const [field1, setField1] = useState("")
    const [field2, setField2] = useState("")
    const [field3, setField3] = useState("")
    const [field4, setField4] = useState("")
    const [field5, setField5] = useState("")
    const [field6, setField6] = useState("")
    const [field7, setField7] = useState("")
    const [field8, setField8] = useState("")
    const [field9, setField9] = useState("")
    const [field10, setField10] = useState("")

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
        console.log('formData', formData)
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
                    Order Information
                </DialogTitle>

                <DialogContent dividers>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box>ORDER NUM</Box>
                            <Box>{data?.orderNumber}</Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>NAME</Box>
                            <Box>
                                {data?.userId.firstName +
                                    ' ' +
                                    data?.userId.lastName}
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>ADDRESS</Box>
                            <Box>{data?.addressId.address}</Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>CONTACT</Box>
                            <Box>{data?.addressId.contact}</Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>DELIVERY DATE</Box>
                            <Box>{data?.deliveryDate}</Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>EMAIL</Box>
                            <Box>{data?.userId.email}</Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>PICKUP DATE</Box>
                            <Box>{data?.pickupDate}</Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>PRICE</Box>
                            <Box>{data?.totalPrice}</Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>STATUS</Box>
                            <Box>{data?.orderStatus}</Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>PAYMENT METHOD</Box>
                            <Box>{data?.paymentMethod}</Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>ASSIGNED</Box>
                            <Box>
                                {data?.assignedTo?.firstName +
                                    ' ' +
                                    data?.assignedTo?.lastName}
                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box>SPECIAL ORDER</Box>
                            <Box>{data?.isSpecialOrder}</Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box>STATUS</Box>
                            <Box>{data?.orderStatus}</Box>
                        </Grid>
                    </Grid>
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
                {/* <div className="servicesData">
                    <h3>Services</h3>
                    <DialogContent dividers>
                        <Grid container spacing={2}>
                            {servicesData?.map((data) => (
                                <>
                                    <Grid item xs={4}>
                                        <label>{data?.name}: {data?.price}</label>
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
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>

                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <input
                                        type="text"
                                        // value={data?.name}
                                        // name={`data?.name`}
                                        onChange={handleChangeData}
                                        placeholder="fill in the information"
                                    />
                                </Grid>

                                {more && (
                                    <>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <input
                                                type="text"
                                                // value={data?.name}
                                                // name={`data?.name`}
                                                onChange={handleChangeData}
                                                placeholder="fill in the information"
                                            />
                                        </Grid>
                                    </>
                                )}
                                <p onClick={() => setMore(!more)}>View more</p>
                                <button type="submit">Update</button>
                            </Grid>
                        </DialogContent>
                    </form>
                </div> */}
            </Dialog>
        </div>
    )
}

export default CustomizedDialogAgentsSpecialOffer
