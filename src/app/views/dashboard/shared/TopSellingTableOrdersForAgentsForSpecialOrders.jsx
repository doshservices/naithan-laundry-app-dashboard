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
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import {
    deleteAdmin,
    deleteService,
    getAllOrders,
    getAllServices,
    getAssignedOrders,
} from 'app/redux/actions/auth'
import CustomizedDialogAgents from 'app/views/material-kit/dialog/CustomizedDialogAgents'
import CustomizedDialogAgentsSpecialOffer from 'app/views/material-kit/dialog/CustomizedDialogAgentSpecialOffer'

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

const TopSellingTableOrdersForAgentsForSpecialOrders = ({ data, title, text, handleClick }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const [orderInfo, setOrderInfo] = useState('')
    const [showModal, setShowModal] = useState(false)

    console.log('orderData', orderInfo)

    const handleModalOpen = (item) => {
        console.log('item', item)
        setOrderInfo(item)
        setShowModal(true)
    }

    const handleModalClose = () => {
        // console.log('item', item)
        // setOrderInfo(item)
        setShowModal(false)
        window.location.reload(false)
    }

    useEffect(() => {
        dispatch(getAssignedOrders())
    }, [])

    return (
        <Card elevation={3} className="pt-5 mb-6">
            <div className="flex justify-between items-center px-6 mb-3">
                <span className="card-title">{title}</span>{' '}
                {/* <Button
                    className="m-2 rounded hover-bg-primary px-6"
                    variant="contained"
                    color="primary"
                    onClick={handleClick}
                >
                    {text}
                </Button> */}
            </div>
            <div className="overflow-auto">
                <Table
                    className={clsx(
                        'whitespace-pre min-w-400',
                        classes.productTable
                    )}
                >
                    <TableHead>
                        <TableRow style={{background: "#EBECEE", color: "black"}}>
                            {/* <TableCell className="px-6" colSpan={1}>
                                Avatar
                            </TableCell> */}
                            <TableCell className="px-12" colSpan={1}>
                                S/N
                            </TableCell>
                            <TableCell className="px-0" colSpan={1}>
                                Name
                            </TableCell>
                            <TableCell className="px-0" colSpan={1}>
                                Pick Up Date
                            </TableCell>
                            <TableCell className="px-0" colSpan={1}>
                                Delievery Address
                            </TableCell>
                            <TableCell className="px-0" colSpan={1}>
                                Assigned To
                            </TableCell>
                            <TableCell className="px-0" colSpan={1}>
                                Special Order
                            </TableCell>
                            <TableCell className="px-0" colSpan={1}>
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data &&
                            data.map((item, index) => (
                                <TableRow key={index} hover>
                                    {/* <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={1}
                                    >
                                        <Avatar src={item.confirmationUrl} />
                                    </TableCell> */}
                                    <TableCell
                                        className="px-0 capitalize"
                                        colSpan={1}
                                        align="left"
                                    >
                                        <div className="flex items-center">
                                            <p className="m-0 ml-8">
                                                {item.orderNumber}
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={1}
                                    >
                                        {item.userId.firstName +
                                            ' ' +
                                            item.userId.lastName}
                                    </TableCell>

                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={1}
                                    >
                                        {item.pickupDate}
                                    </TableCell>

                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={1}
                                    >
                                        {item.addressId.address}
                                    </TableCell>

                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={1}
                                    >
                                        {item?.assignedTo?.firstName +
                                            ' ' +
                                            item?.assignedTo?.lastName}
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={1}
                                    >
                                        {item?.isSpecialOrder == 'YES' ? <Button type='primary' style={{background: 'green', color: 'white'}}>{item?.isSpecialOrder}</Button> : item?.isSpecialOrder}
                                        
                                    </TableCell>

                                    <TableCell className="px-0" colSpan={1}>
                                        <IconButton>
                                            <Icon
                                                color="primary"
                                                onClick={() =>
                                                    handleModalOpen(item)
                                                }
                                            >
                                                add
                                            </Icon>
                                        </IconButton>
                                    </TableCell>

                                    {/* <TableCell className="px-0" colSpan={1}>
                                        <IconButton>
                                            <Icon
                                                color="primary"
                                                onClick={() =>
                                                    handleDelete(item._id)
                                                }
                                            >
                                                edit
                                            </Icon>
                                        </IconButton>
                                    </TableCell> */}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
                {showModal && (
                    <CustomizedDialogAgentsSpecialOffer
                        data={orderInfo}
                        handleModalClose={handleModalClose}
                    />
                )}
            </div>
        </Card>
    )
}

export default TopSellingTableOrdersForAgentsForSpecialOrders
