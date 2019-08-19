/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Appbar from "../components/Appbar";
import QuestionAnswerComponennt from "../components/QuestionAnswerComponennt";

export default class QuestionAnswer extends Component {
    render() {
        return (
            <div>
                <Appbar
                    props={this.props}
                />
                <QuestionAnswerComponennt/>
            </div>
        );
    }
}
