import { Grid } from '@material-ui/core'
import { getAllAgents } from 'app/redux/actions/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import TopSellingTable from '../dashboard/shared/TopSellingTable'
import SimpleTable from '../material-kit/tables/SimpleTable'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Agents = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const data = auth?.allAgents?.data?.admin

    const history = useHistory()

    const handleClick = () => {
        history.push('/agent/create')
    }

    useEffect(() => {
        dispatch(getAllAgents())
    }, [])

    return (
        <div style={{padding: "30px"}}>
            <ToastContainer autoClose={2000} />
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TopSellingTable
                        data={data}
                        title={'Agents'}
                        text="create agent"
                        handleClick={handleClick}
                    />
                </Grid>
            </Grid>
            {/* <div>
                <SimpleTable />
            </div> */}
        </div>
    )
}

export default Agents
