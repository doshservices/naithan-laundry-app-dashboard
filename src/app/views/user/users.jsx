import { Grid } from '@material-ui/core'
import { getAllUsers } from 'app/redux/actions/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TopSellingTableUsers from '../dashboard/shared/TopSellingTableUsers'
import SimpleTable from '../material-kit/tables/SimpleTable'

const Users = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const data = auth?.allUsers?.data?.users
    console.log('hhh', data)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div style={{padding: "30px"}}>
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TopSellingTableUsers data={data}  title={'Users'} />
                </Grid>
            </Grid>
            {/* <div>
                <SimpleTable />
            </div> */}
        </div>
    )
}

export default Users
