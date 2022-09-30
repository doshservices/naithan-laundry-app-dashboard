import { Grid } from '@material-ui/core'
import { getAllOrders, getAssignedOrders } from 'app/redux/actions/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import SimpleTable from '../material-kit/tables/SimpleTable'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TopSellingTableOrders from '../dashboard/shared/TopSellingTableOrders'
import TopSellingTableOrdersForAgents from '../dashboard/shared/TopSellingTableOrdersForAgents'

const OrdersForAgents = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const data = auth?.agentsOrders?.data

    const history = useHistory()
    console.log('agents orders', auth?.agentsOrders?.data)

    useEffect(() => {
        dispatch(getAssignedOrders())
    }, [])

    return (
        <div>
            <ToastContainer autoClose={2000} />
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TopSellingTableOrdersForAgents
                        data={data}
                        title={'Assigned Orders'}
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

export default OrdersForAgents
