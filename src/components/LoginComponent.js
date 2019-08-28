/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { loginForm } from "../actions/postActions";

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            password:"",
            button:""
        };
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    handleOnChange(e){
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    async handleSignIn(e){
        e.preventDefault();
        var data = {
            "email": this.state.email,
            "password": this.state.password
        };
        await this.props.loginForm(data);
    }
    render() {
        console.log("render ",this.props.posts);
        return (
            <Container>
                <div className="div-container">
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "1.6rem", padding: "1%", fontWeight: "bolder", fontFamily: "sarif" }}>
                                <span style={{ color: "blue" }}>F</span>
                                <span style={{ color: "#f28b81" }}>u</span>
                                <span style={{ color: "orange" }}>n</span>
                                <span style={{ color: "blue" }}>d</span>
                                <span style={{ color: "green" }}>o</span>
                                <span style={{ color: "#f28b81" }}>o</span>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={{ span: 8, offset: 2 }} style={{ textAlign: "center" }}>
                            <h5 component="div" style={{ padding: "1%" }}>
                                {"Sign in"}
                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} style={{ textAlign: "center" }}>
                            <p variant="body1" component="div" style={{ padding: "1%" }}>
                                Use your Fundoo Account
                            </p >
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} className="form-padding">
                            <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                required
                                value={this.state.email}
                                onChange={this.handleOnChange}
                            />
                        </Col>

                    </Row>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} className="form-padding">
                            <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                required
                                value={this.state.password}
                                onChange={this.handleOnChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 4, offset: 2 }} className="form-padding">
                            <Link to="/register" className="btn btn-link">Create account</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 2 }} className="form-padding">
                            <Button type="button"
                                className="btn btn-primary"
                                onClick={this.handleSignIn}> Sign in</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

LoginComponent.propTypes = {
    loginForm:propTypes.func.isRequired
};

const mapStateToProps = state =>({
    posts : state.posts.failureRes
});
export default connect(mapStateToProps,{loginForm})(LoginComponent);