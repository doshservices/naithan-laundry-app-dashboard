import React, { useEffect, useState } from 'react'
import {
    Card,
    Icon,
    IconButton,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    Avatar,
    MenuItem,
    Select,
    Button,
    RadioGroup,
    FormControlLabel,
    Radio,
    Grid,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import {
    deleteAdmin,
    deleteService,
    getAllServices,
} from 'app/redux/actions/auth'
import { Link } from 'react-router-dom'
import CustomizedDialogsEdit from 'app/views/material-kit/dialog/CustomizedDialogEdit'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    productTable: {
        '& small': {
            height: 15,
            width: 50,
            borderRadius: 500,
            boxShadow:
                '0 0 2px 0 rgba(0, 0, 0, 0.12), 0 2px 2px 0 rgba(0, 0, 0, 0.24)',
        },
        '& td': {
            borderBottom: 'none',
        },
        '& td:first-child': {
            paddingLeft: '16px !important',
        },
    },
}))

const TopSellingTableServices = ({ data, title, text, handleClick }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [states, setStates] = useState({})

    const { category } = states
    const [showModal, setShowModal] = useState(false)
    const [editInfo, setEditInfo] = useState('')

    const [issue, setIssue] = useState('')

    const handleChange = (event) => {
        // event.persist()
        setStates({
            ...states,
            [event.target.name]: event.target.value,
        })
        setIssue(event.target.value);
        dispatch(getAllServices(event.target.value))
    }

    // console.log('serviceData', data, JSON.stringify(states?.category))

    const handleDelete = (id) => {
        dispatch(deleteService(id))
        const query1 = 'LAGOS' || 'ABUJA'
        const query2 = 'ABUJA'
        // dispatch(getAllServices(states.category))
        // if (states?.category ==  ) {
        //     dispatch(getAllServices(query1))
        // } else {
        //     dispatch(getAllServices(query2))
        // }
        setTimeout(() => {
            dispatch(getAllServices(query1))
            // dispatch(getAllServices(query2))
        }, 1000)
        console.log('New Data', issue)
    }

    const handleModalOpen = (item) => {
        console.log('item', item)
        setEditInfo(item)
        setShowModal(true)
    }

    const handleModalClose = () => {
        // console.log('item', item)
        // setOrderInfo(item)
        setShowModal(false)
        window.location.reload(false)
    }

    useEffect(() => {
        const query = 'LAGOS'
        dispatch(getAllServices(query))
    }, [])

    return (
        <Card elevation={3} className="pt-5 mb-6">
            <div className="flex justify-between items-center px-6 mb-3">
                <span className="card-title">{title}</span>{' '}
                <Grid item lg={6} md={6} sm={12} xs={12} px={5}>
                    <RadioGroup
                        className="my-4"
                        label="Image"
                        value={category || ''}
                        name="category"
                        onChange={handleChange}
                        row
                    >
                        <FormControlLabel
                            value="LAGOS"
                            control={<Radio color="secondary" />}
                            label="Lagos"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="ABUJA"
                            control={<Radio color="secondary" />}
                            label="Abuja"
                            labelPlacement="end"
                        />
                        {/* <FormControlLabel
                            value=""
                            control={<Radio color="secondary" />}
                            label="All"
                            labelPlacement="end"
                        /> */}
                    </RadioGroup>
                </Grid>
                <Button
                    className="m-2 rounded hover-bg-primary px-6"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                    {text}
                </Button>
            </div>

            <div className="overflow-auto">
                <Table
                    className={clsx(
                        'whitespace-pre min-w-400',
                        classes.productTable
                    )}
                >
                    <TableHead>
                        <TableRow
                            style={{ background: '#EBECEE', color: 'black' }}
                        >
                            <TableCell className="px-6" colSpan={1}>
                                Avatar
                            </TableCell>
                            <TableCell className="px-6" colSpan={2}>
                                Category
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Name
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Price
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Type
                            </TableCell>
                            <TableCell className="px-0" colSpan={1}>
                                Update
                            </TableCell>
                            <TableCell className="px-0" colSpan={1}>
                                Delete
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data &&
                            data.map((item, index) => (
                                <TableRow key={index} hover>
                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={1}
                                    >
                                        <Avatar src={item.profilePictureUrl} />
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        colSpan={2}
                                        align="left"
                                    >
                                        <div className="flex items-center">
                                            <p className="m-0 ml-8">
                                                {item.category}
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={2}
                                    >
                                        {item.name}
                                    </TableCell>

                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={2}
                                    >
                                        ₦{item.price}
                                    </TableCell>

                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={2}
                                    >
                                        {!item.type ? "Not available" : item?.type }
                                    </TableCell>

                                    <TableCell className="px-0" colSpan={1}>
                                        <IconButton>
                                            {/* <Link
                                                to={`/service/edit/${item._id}`}
                                            > */}
                                            <Icon
                                                color="primary"
                                                onClick={() =>
                                                    handleModalOpen(item)
                                                }
                                            >
                                                edit
                                            </Icon>
                                            {/* </Link> */}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell className="px-0" colSpan={1}>
                                        <IconButton>
                                            <Icon
                                                color="error"
                                                onClick={() =>
                                                    handleDelete(item._id)
                                                }
                                            >
                                                delete
                                            </Icon>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                {showModal && (
                    <CustomizedDialogsEdit
                        data={editInfo}
                        handleModalClose={handleModalClose}
                    />
                )}
            </div>
        </Card>
    )
}

export default TopSellingTableServices
