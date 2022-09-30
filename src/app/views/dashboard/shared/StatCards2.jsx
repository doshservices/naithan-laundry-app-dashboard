import React, { useState } from 'react'
import {
    Card,
    Divider,
    Grid,
    MenuItem,
    Select,
    Icon,
    Fab,
} from '@material-ui/core'

const StatCards2 = ({ information }) => {

    const [week, setWeek] = useState(true)
    const [amount, setAmount] = useState(true)

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        value === "this_year" ? setWeek(true) : setWeek(false)
    }

    const handleChangeAmount = (e) => {
        const value = e.target.value
        const name = e.target.name

        value === "this_week" ? setAmount(true) : setAmount(false)
    }
    
    console.log("week", week, amount)

    return (
        <Grid container spacing={3} className="mb-6">
            <Grid item xs={12} md={6}>
                <Card elevation={3} className="p-4">
                    <div className="flex items-center">
                        <Fab
                            size="medium"
                            className="bg-light-green circle-44 box-shadow-none overflow-hidden"
                        >
                            <Icon className="text-green">money</Icon>
                        </Fab>
                        <h5 className="font-medium text-green m-0 ml-3">
                            Total Amount
                        </h5>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow">
                            ₦{information?.amount}
                        </h2>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card elevation={3} className="p-4">
                    <div className="flex items-center">
                        <Fab
                            size="medium"
                            className="bg-light-error circle-44 box-shadow-none overflow-hidden"
                        >
                            <Icon className="text-error">shopping_cart</Icon>
                        </Fab>
                        <h5 className="font-medium text-error m-0 ml-3">
                            Total Orders
                        </h5>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow">
                            {information?.count}
                        </h2>
                    </div>
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card elevation={3} className="p-4">
                    <div className="flex items-center">
                        <Fab
                            size="medium"
                            className="bg-light-primary circle-44 box-shadow-none"
                        >
                            <Icon className="text-primary">trending_up</Icon>
                        </Fab>
                        <h5 className="font-medium text-primary m-0 ml-3">
                            Orders for today
                        </h5>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow">
                            {information?.perDay}
                        </h2>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card elevation={3} className="p-4">
                    <div className="flex items-center">
                        <Fab
                            size="medium"
                            className="bg-light-secondary circle-44 box-shadow-none"
                        >
                            <Icon className="text-secondary">school</Icon>
                        </Fab>
                        <h5 className="font-medium text-secondary m-0 ml-3">
                            Amount for today
                        </h5>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow">
                            ₦{information?.amountPerDay}
                        </h2>
                    </div>
                </Card>
            </Grid>

            <Grid item xs={12} md={6}>
                <Card elevation={3} className="p-4">
                    <div className="flex justify-between items-center p">
                        <div className="flex items-center">
                            <Fab
                                size="medium"
                                className="bg-light-green circle-44 box-shadow-none"
                            >
                                <Icon className="text-green">house</Icon>
                            </Fab>
                            <h5 className="font-medium text-green m-0 ml-3">
                            Orders
                            </h5>
                        </div>
                        <Select
                            size="small"
                            defaultValue="this_year"
                            disableUnderline
                            // value={agentId}
                            onChange={(e) => handleChange(e)}
                        >
                            <MenuItem value="this_year">Per week</MenuItem>
                            <MenuItem value="last_year">Per month</MenuItem>
                        </Select>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow">
                            {week === true ? information?.perWeek : information?.odrerPerMonth}
                            {/* {information?.odrerPerMonth} */}
                        </h2>
                    </div>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card elevation={3} className="p-4">
                    <div className="flex justify-between items-center p">
                        <div className="flex items-center">
                            <Fab
                                size="medium"
                                className="bg-light-green circle-44 box-shadow-none"
                            >
                                <Icon className="text-green">star_outline</Icon>
                            </Fab>
                            <h5 className="font-medium text-green m-0 ml-3">
                            Amount
                            </h5>
                        </div>
                        <Select
                            size="small"
                            defaultValue="this_week"
                            disableUnderline
                            onChange={(e) => handleChangeAmount(e)}
                        >
                            <MenuItem value="this_week">Per week</MenuItem>
                            <MenuItem value="last_month">Per month</MenuItem>
                        </Select>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow">
                            ₦{amount === true ? information?.amountPerWeek : information?.amountPerAmount }
                            {/* {information?.amountPerAmount} */}
                        </h2>
                    </div>
                </Card>
            </Grid>

            {/* <Grid item xs={12} md={6}>
                <Card elevation={3} className="p-4">
                    <div className="flex items-center">
                        <Fab
                            size="medium"
                            className="bg-light-green circle-44 box-shadow-none"
                        >
                            <Icon className="text-green">book</Icon>
                        </Fab>
                        <h5 className="font-medium text-green m-0 ml-3">
                            Amount per/month
                        </h5>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow">
                            ₦{information?.amountPerAmount}
                        </h2>
                        <div className="flex justify-center items-centerml-3 h-16 w-16 rounded bg-green text-white">
                            <Icon className="text-14">expand_less</Icon>
                        </div>
                        <span className="text-13 text-green ml-1"> (+21%)</span>
                    </div>
                </Card>
            </Grid> */}
            {/* <Grid item xs={12} md={6}>
                <Card elevation={3} className="p-4">
                    <div className="flex items-center">
                        <Fab
                            size="medium"
                            className="bg-light-error circle-44 box-shadow-none overflow-hidden"
                        >
                            <Icon className="text-error">launch</Icon>
                        </Fab>
                        <h5 className="font-medium text-error m-0 ml-3">
                            Orders per/month
                        </h5>
                    </div>
                    <div className="pt-4 flex items-center">
                        <h2 className="m-0 text-muted flex-grow">
                            {information?.odrerPerMonth}
                        </h2>
                        <div className="flex justify-center items-centerml-3 h-16 w-16 rounded bg-error text-white">
                            <Icon className="text-14">expand_less</Icon>
                        </div>
                        <span className="text-13 text-error ml-1">(+21%)</span>
                    </div>
                </Card>
            </Grid> */}
        </Grid>
    )
}

export default StatCards2
