import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import { Card } from '@material-ui/core'
import SimpleFormAgent from '../material-kit/forms/SimpleFormAgent'

class BasicFormAgent extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Agent', path: '/agents' },
                            { name: 'Create Agent' },
                        ]}
                    />
                </div>
                <Card className="px-6 pt-5 pb-5">
                    <SimpleFormAgent />
                </Card>
            </div>
        )
    }
}

export default BasicFormAgent
