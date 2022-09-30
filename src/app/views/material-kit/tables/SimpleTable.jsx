import React from 'react'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow,
    Card,
} from '@material-ui/core'
import SimpleForm from '../forms/SimpleForm'

const subscribarList = [
    {
        name: 'john doe',
        date: '18 january, 2019',
        amount: 1000,
        status: 'close',
        company: 'ABC Fintech LTD.',
    },
    // {
    //     name: 'kessy bryan',
    //     date: '10 january, 2019',
    //     amount: 9000,
    //     status: 'open',
    //     company: 'My Fintech LTD.',
    // },
    // {
    //     name: 'james cassegne',
    //     date: '8 january, 2019',
    //     amount: 5000,
    //     status: 'close',
    //     company: 'Collboy Tech LTD.',
    // },
    // {
    //     name: 'lucy brown',
    //     date: '1 january, 2019',
    //     amount: 89000,
    //     status: 'open',
    //     company: 'ABC Fintech LTD.',
    // },
    // {
    //     name: 'lucy brown',
    //     date: '1 january, 2019',
    //     amount: 89000,
    //     status: 'open',
    //     company: 'ABC Fintech LTD.',
    // },
    // {
    //     name: 'lucy brown',
    //     date: '1 january, 2019',
    //     amount: 89000,
    //     status: 'open',
    //     company: 'ABC Fintech LTD.',
    // },
]

const SimpleTable = ({ data }) => {

    console.log('data', data)

    return (
        <div className="w-full overflow-auto">
            <h4 className="card-title text-muted mb-4">Profile Information</h4>
            <Table className="whitespace-pre">
                <TableHead>
                    <TableRow>
                        <TableCell className="px-0">First Name</TableCell>
                        <TableCell className="px-0">Last Name</TableCell>
                        <TableCell className="px-0">Email</TableCell>
                        <TableCell className="px-0">Phone Number</TableCell>
                        <TableCell className="px-0">Role</TableCell>
                        <TableCell className="px-0">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/* {subscribarList.map((subscriber, index) => ( */}
                        <TableRow >
                            <TableCell className="px-0 capitalize" align="left">
                                {data?.firstName}
                            </TableCell>
                            <TableCell className="px-0 capitalize" align="left">
                                {data?.lastName}
                            </TableCell>
                            <TableCell className="px-0 capitalize" align="left">
                                {data?.email}
                            </TableCell>
                            <TableCell className="px-0 capitalize" align="left">
                                {data?.phoneNumber}
                            </TableCell>
                            <TableCell className="px-0 capitalize">
                                {data?.role}
                            </TableCell>
                            
                            <TableCell className="px-0">
                                <IconButton>
                                    <Icon color="error">edit</Icon>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    {/* ))} */}
                </TableBody>
            </Table>
            {/* <h4 className="card-title text-muted mb-4">
                            Profile Page
                        </h4>
            <Card className="px-6 pt-5 pb-5">
                <SimpleForm />
            </Card> */}
        </div>
    )
}

export default SimpleTable
