import React, { Component } from 'react'
import PaymentComponent from '../components/PaymentComponent';
import Appbar from '../components/Appbar';

export default class PymentWorkflow extends Component {
    render() {
        return (
            <div>
                <Appbar props={this.props}
                
                />
                <PaymentComponent/>
            </div>
        )
    }
}
