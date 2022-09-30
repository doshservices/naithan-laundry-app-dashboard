import React from 'react'
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
import { deleteAdmin, getAllAdmins, getAllAgents } from 'app/redux/actions/auth'


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

const TopSellingTableUsers = ({ data, title, text, handleClick }) => {
    const classes = useStyles()
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        // console.log('id', id)
        // dispatch(deleteAdmin(id))
        // setTimeout(() => {
        //     dispatch(getAllAdmins())
        //     dispatch(getAllAgents())
        // }, 1000)
    }

    return (
        <Card elevation={3} className="pt-5 mb-6">
            <div className="flex justify-between items-center px-6 mb-3">
                <span className="card-title">Users</span>{' '}
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
                            <TableCell className="px-6" colSpan={1}>
                                Avatar
                            </TableCell>
                            <TableCell className="px-6" colSpan={2}>
                                First Name
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Last Name
                            </TableCell>
                            <TableCell className="px-0" colSpan={2}>
                                Email
                            </TableCell>
                            {/* <TableCell className="px-0" colSpan={1}>
                                IsActive
                            </TableCell> */}
                            <TableCell className="px-0" colSpan={2}>
                                Phone Number
                            </TableCell>
                            {/* <TableCell className="px-0" colSpan={2}>
                                Gender
                            </TableCell> */}
                            {/* <TableCell className="px-0" colSpan={1}>
                                Role
                            </TableCell> */}
                            {/* <TableCell className="px-0" colSpan={1}>
                                Action
                            </TableCell> */}
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
                                                {item.firstName}
                                            </p>
                                        </div>
                                    </TableCell>
                                    <TableCell
                                        className="px-0 capitalize"
                                        align="left"
                                        colSpan={2}
                                    >
                                        {item.lastName}
                                    </TableCell>

                                    <TableCell
                                        className="px-0"
                                        align="left"
                                        colSpan={2}
                                    >
                                        {item.email}
                                    </TableCell>

                                    {/* <TableCell
                                        className="px-0"
                                        align="left"
                                        colSpan={1}
                                    >
                                        {item.isActive == false
                                            ? 'false'
                                            : 'true'}
                                    </TableCell> */}

                                    <TableCell
                                        className="px-0"
                                        align="left"
                                        colSpan={2}
                                    >
                                        {item.phoneNumber}
                                    </TableCell>

                                    {/* <TableCell
                                        className="px-0"
                                        align="left"
                                        colSpan={2}
                                    >
                                        {item.gender}
                                    </TableCell> */}

                                    {/* <TableCell
                                        className="px-0"
                                        align="left"
                                        colSpan={1}
                                    >
                                        {item.role}
                                    </TableCell> */}

                                    {/* <TableCell className="px-0" colSpan={1}>
                                        <IconButton>
                                            <Icon
                                                color="primary"
                                                onClick={() =>
                                                    handleDelete(item._id)
                                                }
                                            >
                                                delete
                                            </Icon>
                                        </IconButton>
                                    </TableCell> */}
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </div>
        </Card>
    )
}

export default TopSellingTableUsers
