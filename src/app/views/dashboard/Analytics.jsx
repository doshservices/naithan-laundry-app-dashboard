import React, { Fragment, useEffect, useState } from 'react'
import { Grid, Card } from '@material-ui/core'
import DoughnutChart from './shared/Doughnut'
import StatCards from './shared/StatCards'
import TopSellingTable from './shared/TopSellingTable'
import RowCards from './shared/RowCards'
import StatCards2 from './shared/StatCards2'
import StatCards3 from './shared/StatCard3'
import StatCards4 from './shared/StatCard4'
import StatCards5 from './shared/StatCard5'
import UpgradeCard from './shared/UpgradeCard'
import Campaigns from './shared/Campaigns'
import { useTheme } from '@material-ui/styles'
import SimpleTable from '../material-kit/tables/SimpleTable'
import { useDispatch, useSelector } from 'react-redux'
import TopSellingTableUser from './shared/TopSellingTableUser'
import axios from 'axios'
import {
    GET_ADMIN_INFO_FAIL,
    GET_ADMIN_INFO_SUCCESS,
} from 'app/redux/actions/auth'
import InventoryDashboard from './shared/InventoryDashboard'

const Analytics = () => {
    const dispatch = useDispatch()
    const theme = useTheme()
    const auth = useSelector((state) => state.auth)
    const { isAuthenticated } = auth
    const data = isAuthenticated?.adminDetails

    const [amount, setAmount] = useState('')
    const [perDay, setPerDay] = useState('')
    const [perWeek, setPerWeek] = useState('')
    const [count, setCount] = useState('')
    const [amountPerDay, setAmountPerDay] = useState('')
    const [amountPerWeek, setAmountPerWeek] = useState('')
    const [amountPerAmount, setAmountPerAmount] = useState('')
    const [odrerPerMonth, setOrderPerMount] = useState('')

    const info = JSON.parse(localStorage.getItem('data'))
    console.log('info', info?.adminDetails?.role )

    // GET_ALL_SERVICE
    const getAllServices = async () => {
        const url = 'http://apinathansdrycleaners.com/'
        let one = `${url}orders/total/amount`
        let two = `${url}orders/total/per-day`
        let three = `${url}orders/total/per-week`
        let four = `${url}orders/total/per-month`
        let five = `${url}orders/total/count`
        let six = `${url}orders/total/amount/per-day`
        let seven = `${url}orders/total/amount/per-week`
        let eight = `${url}orders/total/amount/per-month`

        const token = localStorage.getItem('access_token')

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        const requestOne = axios.get(one, config)
        const requestTwo = axios.get(two, config)
        const requestThree = axios.get(three, config)
        const requestFour = axios.get(four, config)
        const requestFive = axios.get(five, config)
        const requestSix = axios.get(six, config)
        const requestSeven = axios.get(seven, config)
        const requestEight = axios.get(eight, config)

        const res = await axios
            .all([
                requestOne,
                requestTwo,
                requestThree,
                requestFour,
                requestFive,
                requestSix,
                requestSeven,
                requestEight,
            ])
            .then(
                axios.spread((...responses) => {
                    const responseOne = responses[0]
                    const responseTwo = responses[1]
                    const responesThree = responses[2]
                    const responesFour = responses[3]
                    const responesFive = responses[4]
                    const responesSix = responses[5]
                    const responesSeven = responses[6]
                    const responesEight = responses[5]
                    // use/access the results
                    console.log('all', {
                        responseOne,
                        responseTwo,
                        responesThree,
                        responesFour,
                        responesFive,
                        responesSix,
                        responesSeven,
                        responesSeven,
                    })
                    localStorage.setItem('information', JSON.stringify({
                        responseOne,
                        responseTwo,
                        responesThree,
                        responesFour,
                        responesFive,
                        responesSix,
                        responesSeven,
                        responesSeven,
                    }))
                    setAmount(responseOne?.data?.data)
                    setPerDay(responseTwo?.data?.data)
                    setPerWeek(responesThree?.data?.data)
                    setOrderPerMount(responesFour?.data?.data)
                    setCount(responesFive?.data?.data)
                    setAmountPerDay(responesSix?.data?.data)
                    setAmountPerWeek(responesSeven?.data?.data)
                    setAmountPerAmount(responesSeven?.data?.data)

                    dispatch({
                        type: GET_ADMIN_INFO_SUCCESS,
                        payload: {
                            responseOne,
                            responseTwo,
                            responesThree,
                            responesFour,
                            responesFive,
                            responesSix,
                            responesSeven,
                            responesEight,
                        },
                    })
                })
            )
            .catch((errors) => {
                // react on errors.
                console.log('error', errors)
                dispatch({
                    type: GET_ADMIN_INFO_FAIL,
                })
            })
    }

    const informations = JSON.parse(localStorage.getItem('information'))
    const information = {
        amount: informations?.responseOne?.data?.data,
        perDay: informations?.responseTwo?.data?.data,
        perWeek: informations?.responesThree?.data?.data,
        count: informations?.responesFive?.data?.data,
        amountPerDay: informations?.responesSix?.data?.data,
        amountPerWeek: informations?.responesSeven?.data?.data,
        amountPerAmount: informations?.responesSeven?.data?.data,
        odrerPerMonth: informations?.responesFour?.data?.data
    }

    console.log("information", informations)

    useEffect(() => {
        getAllServices()
    }, [])

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                {/* <SimpleTable data={data} /> */}

                <TopSellingTableUser
                    data={data}
                    info={info}
                    // title={'Assigned Orders'}
                    // text="create service"
                    // handleClick={handleClick}
                />
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        {/* <StatCards /> */}
                        {/* <h4 className="card-title text-muted mb-4">
                            Profile Page
                        </h4> */}
                        {/* Top Selling Products */}
                        {/* <TopSellingTable /> */}

                       {info?.adminDetails?.role === "SUPER_ADMIN" && <StatCards2 information={information} /> }

                        {/* <StatCards2 />
                        <StatCards2 />
                        <StatCards2 /> */}
                        {/* <StatCards3 />
                        <StatCards4 />
                        <StatCards5 /> */}

                        {/* <h4 className="card-title text-muted mb-4">
                            Ongoing Projects
                        </h4> */}
                        {/* <RowCards /> */}
                    </Grid>

                    {/* <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className="px-6 py-4 mb-6">
                            <div className="card-title">Traffic Sources</div>
                            <div className="card-subtitle">Last 30 days</div>
                            <DoughnutChart
                                height="300px"
                                color={[
                                    theme.palette.primary.dark,
                                    theme.palette.primary.main,
                                    theme.palette.primary.light,
                                ]}
                            />
                        </Card>

                        <UpgradeCard />

                        <Campaigns />
                    </Grid> */}
                    {/* <InventoryDashboard /> */}
                </Grid>
            </div>
        </Fragment>
    )
}

export default Analytics
