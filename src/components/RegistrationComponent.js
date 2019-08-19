/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { registerForm } from "../actions/postActions";

class RegisterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            role: "admin"
        };

        // this.handleSignIn = this.handleSignIn.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleOnChange = this.handleOnChange.bind(this);
    
    }

    handleOnChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
        // console.log("this. state", this.state);
    }

    handleSignUp(e) {
        e.preventDefault();
        var data = {
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "password": this.state.password,
            "role": this.state.role
        };

        //Call Action
        this.props.registerForm(data);
        console.log("this props", this.props.posts);

    }

    render() {
        return (
            <Container>
                <div className="div-container">
                    <Row>
                        <Col md={{ span: 4, offset: 2 }}>
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
                        <Col md={{ span: 5, offset: 2 }}>
                            <div style={{ padding: "1%", fontSize: "20px" }}>
                Create your Fundoo Account
                            </div >
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 4, offset: 2 }} className="form-padding">
                            <input type="text"
                                className="form-control"
                                name="firstName"
                                placeholder="First Name"
                                required
                                onChange={this.handleOnChange}
                            />
                        </Col>
                        <Col md={{ span: 4, offset: 0 }} className="form-padding">
                            <input type="text"
                                className="form-control"
                                name="lastName"
                                placeholder="Last Name"
                                required
                                onChange={this.handleOnChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 8, offset: 2 }} className="form-padding">
                            <input type="email"
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                required
                                onChange={this.handleOnChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 4, offset: 2 }} className="form-padding">
                            <input type="password"
                                className="form-control"
                                name="password"
                                placeholder="Password"
                                required
                                onChange={this.handleOnChange}
                            />
                        </Col>
                        <Col md={{ span: 4, offset: 0 }} className="form-padding">
                            <input type="password"
                                className="form-control"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                required
                                onChange={this.handleOnChange}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 4, offset: 2 }} className="form-padding">
                            <Link to="/login" className="btn btn-link">Sign in instead</Link>
                        </Col>
                        <Col md={{ span: 4, offset: 2 }} className="form-padding">
                            <Button type="button"
                                className="btn btn-primary"
                                onClick={this.handleSignUp}> Sign up</Button>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
}

RegisterComponent.propTypes = {
    registerForm: propTypes.func.isRequired

};

const mapStateToProps = state => ({
    posts: state.posts.item
});
// console.log("state",state)

export default connect(mapStateToProps, { registerForm })(RegisterComponent);