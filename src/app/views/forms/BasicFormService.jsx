import React, { Component } from 'react'
import { Breadcrumb } from 'app/components'
import { Card } from '@material-ui/core'
import SimpleFormServices from '../material-kit/forms/SimpleFormServices'
// import UploadForm from './UploadForm'
class BasicFormService extends Component {
    render() {
        return (
            <div className="m-sm-30">
                <div className="mb-sm-30">
                    <Breadcrumb
                        routeSegments={[
                            { name: 'Services', path: '/services' },
                            { name: 'Create Service' },
                        ]}
                    />
                </div>
                <Card className="px-6 pt-5 pb-5">
                    <SimpleFormServices />
                </Card>
                {/* <UploadForm /> */}
            </div>
        )
    }
}

export default BasicFormService
