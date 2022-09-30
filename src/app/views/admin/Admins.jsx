import { Grid } from '@material-ui/core'
import { getAllAdmins } from 'app/redux/actions/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import TopSellingTable from '../dashboard/shared/TopSellingTable'
import SimpleTable from '../material-kit/tables/SimpleTable'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Admins = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const data = auth?.allAdmins?.data?.admin

    const history = useHistory()

    const handleClick = () => {
        history.push('/admin/create')
    }

    useEffect(() => {
        dispatch(getAllAdmins())
    }, [])

    return (
        <div style={{padding: "30px"}}>
            <ToastContainer autoClose={2000} />
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TopSellingTable
                        data={data}
                        title={'Admins'}
                        text="create admin"
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

export default Admins
