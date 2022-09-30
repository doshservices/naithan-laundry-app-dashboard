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
import SimpleFormServicesEdit from '../forms/SimpleFormServicesEdit'

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

const CustomizedDialogsEdit = ({ data, handleModalClose }) => {
    // state = {
    //     open: false,
    // }
    const classes = useStyles()
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    // const agent = auth?.allAgents?.data?.admin
    // const orderId = data?._id
    const [open, setOpen] = useState(false)
    // const [agentId, setAgentId] = useState('')

    // const handleChange = (e) => {
    //     const value = e.target.value
    //     const name = e.target.name
    //     setAgentId(value)
    // }

    console.log('value', data)

    // const handleAssignOrder = () => {
    //     dispatch(assignOrder({ agentId, orderId }))
    // }

    // useEffect(() => {
    //     dispatch(getAllAgents())
    // }, [agentId])

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
                    Edit Information
                </DialogTitle>

                <DialogContent dividers>
                    <Grid container spacing={2}>
                        <SimpleFormServicesEdit data={data} handleModalClose={handleModalClose} />
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
                        onClick={handleAssignOrder}
                    >
                        assign
                    </Button> */}
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default CustomizedDialogsEdit
