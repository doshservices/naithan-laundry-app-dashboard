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
import { assignOrder, getAllAgents } from 'app/redux/actions/auth'

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

const CustomizedDialogs = ({ data, handleModalClose }) => {
    // state = {
    //     open: false,
    // }
    const classes = useStyles()
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const agent = auth?.allAgents?.data?.admin
    const orderId = data?._id
    const [open, setOpen] = useState(false)
    const [agentId, setAgentId] = useState('')

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setAgentId(value)
    }

    console.log('value', { agentId, orderId })

    const handleAssignOrder = () => {
        dispatch(assignOrder({ agentId, orderId }))
    }

    useEffect(() => {
        dispatch(getAllAgents())
    }, [agentId])

    // handleClickOpen = () => {
    //     this.setState({
    //         open: true,
    //     })
    // }

    // const handleClickOpen = () => {
    //     setOpen({ open: !open })
    // }

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
                            <Box>STATUS</Box>
                            <Box>{data?.orderStatus}</Box>
                        </Grid>
                    </Grid>
                    <div>
                        <Box sx={{ mt: 1 }}>ASSIGN AGENT TO ORDER</Box>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <Box>.</Box>
                            <InputLabel id="demo-simple-select-helper-label">
                                Agents
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                value={agentId}
                                label="Agents"
                                onChange={(e) => handleChange(e)}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {agent?.map((agent) => (
                                    <MenuItem
                                        key={agent?._id}
                                        value={agent?._id}
                                    >
                                        {agent?.firstName}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </div>
                    {/* <Typography gutterBottom>
                        Cras mattis consectetur purus sit amet fermentum. Cras
                        justo odio, dapibus ac facilisis in, egestas eget quam.
                        Morbi leo risus, porta ac consectetur ac, vestibulum at
                        eros.
                    </Typography>
                    <Typography gutterBottom>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur et. Vivamus sagittis lacus vel augue laoreet
                        rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                        Aenean lacinia bibendum nulla sed consectetur. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et. Donec sed odio dui. Donec ullamcorper nulla non
                        metus auctor fringilla.
                    </Typography> */}
                </DialogContent>
                <DialogActions>
                    {/* <Button
                        // onClick={handleClose}
                        color="primary"
                    >
                        Save changes
                    </Button> */}
                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={handleAssignOrder}
                    >
                        assign
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CustomizedDialogs
