import { Grid } from '@material-ui/core'
import { getAllOrders } from 'app/redux/actions/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import SimpleTable from '../material-kit/tables/SimpleTable'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TopSellingTableOrders from '../dashboard/shared/TopSellingTableOrders'

const Orders = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const data = auth?.allOrders?.data

    console.log('all orders', auth?.allOrders?.data, data)

    const history = useHistory()

    // const handleClick = () => {
    //     history.push('/service/create')
    // }

    useEffect(() => {
        dispatch(getAllOrders())
    }, [])

    return (
        <div style={{ padding: '30px' }}>
            <ToastContainer autoClose={2000} />
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TopSellingTableOrders
                        data={data}
                        title={'Orders'}
                        text="create service"
                        // handleClick={handleClick}
                    />
                </Grid>
            </Grid>
            {/* <div>
                <SimpleTable />
            </div> */}
        </div>
    )
}

export default Orders
