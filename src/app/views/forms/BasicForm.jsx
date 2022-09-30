import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import SimpleForm from '../material-kit/forms/SimpleForm'
import { Card } from '@material-ui/core'

class BasicForm extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Admin', path: '/admins' },
                            { name: 'Create Admin' },
                        ]}
                    />
                </div>
                <Card className="px-6 pt-5 pb-5">
                    <SimpleForm />
                </Card>
            </div>
        )
    }
}

export default BasicForm
