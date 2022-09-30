import { Grid } from '@material-ui/core'
import { getAllAdmins, getAllServices } from 'app/redux/actions/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import SimpleTable from '../material-kit/tables/SimpleTable'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import TopSellingTableServices from '../dashboard/shared/TopSellingTableServices'

const Services = () => {
    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth)
    const data = auth?.allServices?.data?.services

    const history = useHistory()

    const handleClick = () => {
        history.push('/service/create')
    }

    useEffect(() => {
        dispatch(getAllServices())
    }, [])

    return (
        <div style={{padding: "30px"}}>
            <ToastContainer autoClose={2000} />
            <Grid container spacing={3}>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                    <TopSellingTableServices
                        data={data}
                        title={'Services'}
                        text="create service"
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

export default Services
