/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import AdminDashboardComponent from "../components/AdminDashboardComponent";
import Appbar from "../components/Appbar";

export default class Admin extends Component {
    render() {
        return (
            <div>
                <Appbar
                    props={this.props}/>
                <AdminDashboardComponent
                />
            </div>
        );
    }
}
