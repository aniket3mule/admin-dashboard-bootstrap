import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import propTypes from "prop-types";
import { connect } from "react-redux";
import { fetchData, getAdminUserList } from "../actions/postActions";

class AdminDashboardComponent extends Component {

    constructor() {
        super();
        this.state = {
            currentPage: 1,
            listPerPage: 10,
            startIndex: 0,
            endIndex: 5
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }


    async componentDidMount() {
        await this.props.fetchData();
        await this.props.getAdminUserList();
    }

    pageNumber = (event) => {
        this.setState({
            currentPage: Number(event.target.id),
        })

        // if (item%5 === 0) {
        //     this.setState({
        //         startIndex:this.state.startIndex+5,
        //         endIndex: this.state.endIndex+5
        //     })
        // }
    }

    prevPage = () => {
        if (this.state.currentPage <= 5) {
            this.setState({
                startIndex: 0,
                endIndex: 5,
                currentPage: this.state.currentPage - 1,
            })
        }
        else {
            this.setState({
                startIndex: this.state.startIndex - 1,
                endIndex: this.state.endIndex - 1,
                currentPage: this.state.currentPage - 1,
            })
        }
    }

    nextPage = () => {
        this.setState({
            startIndex: this.state.startIndex + 1,
            endIndex: this.state.endIndex + 1,
            currentPage: this.state.currentPage + 1,
        })
    }
    render() {
        const { currentPage, listPerPage } = this.state;
        const { startIndex, endIndex } = this.state;
        console.log("this.props", this.props.adminUserList);

        // Logic for displaying userlist
        const indexOfLastElement = currentPage * listPerPage;
        const indexOfFirstElement = indexOfLastElement - listPerPage;
        const userLists = this.props.adminUserList.slice(indexOfFirstElement, indexOfLastElement);

        //rendering list of users
        const renderUserLists = userLists.map((key, index) => {
            return (
                <tr key={index} style={{ backgroundColor: ((key.service).toString().toUpperCase() === "BASIC") ? "#fffbef" : "#f3f3f3" }}>
                    <td>
                        {key.firstName}
                    </td>
                    <td>
                        {key.lastName}
                    </td>
                    <td>
                        {key.email}
                    </td>
                    <td>
                        {(key.service).toString().toUpperCase()}
                    </td>
                </tr>
            )
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.adminUserList.length / listPerPage); i++) {
            pageNumbers.push(i);
        }

        //rendering page numbers
        const renderPageNumbers = pageNumbers.slice(startIndex, endIndex).map(item => (
            <li className={currentPage === item ? 'page-item active' : 'page-item'} key={item}>
                <button className="page-link" style={{ width: "42px" }} onClick={(e) => this.pageNumber(e, item)}
                    id={item}>
                    {item}
                </button>
            </li>
        ));


        // rendering user statistics basic or advance users
        const statics = this.props.userStatics.map(key => {
            return (
                <Row key={key.service} style={{
                    textAlign: "center", display: "flex", width: "205px"
                }}>
                    <Col md={{ span: 10, offset: 0 }} >
                        <div
                            className="statics-box" style={{ backgroundColor: (key.service).toString().toUpperCase() === "BASIC" ? "#fffbef" : "#f3f3f3" }}>
                            <span style={{ marginTop: "4%" }}>{(key.service).toString().toUpperCase()}</span>
                            <span>{(key.count).toString().toUpperCase()}</span>
                        </div>
                    </Col>
                </Row>
            )
        })

        return (
            <div>
                <Container style={{ marginTop: "12vh", display: "flex", justifyContent: "center" }}>
                    {statics}
                </Container>
                <center>
                    <div className="table-responsive"
                        style={{ width: "80%", padding: "2%" }}>
                        <table className="table table-stripped table-bordered ">
                            <thead  >
                                <tr>
                                    <th>{"First Name"}</th>
                                    <th>{"Last Name"}</th>
                                    <th>{"Email"}</th>
                                    <th>{"Service"}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderUserLists}
                                <tr>
                                    <td colSpan="4">
                                        <ul className="pagination" id="page-numbers" style={{ width: "35vh" }}>
                                            <li>
                                            <button onClick={currentPage === 1 ? null : this.prevPage}
                                                className="page-link"
                                            >PrevPage</button>    
                                            </li>
                                            {renderPageNumbers}
                                            <li>
                                            
                                            <button onClick={currentPage === pageNumbers.length ? null : this.nextPage}
                                                className="page-link"  >NextPage</button>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </center>
            </div>
        )
    }
}

AdminDashboardComponent.propTypes = {
    fetchData: propTypes.func.isRequired,
    getAdminUserList: propTypes.func.isRequired
}
const mapStateToProps = state => ({
    userStatics: state.posts.userStatics,
    adminUserList: state.adminData.adminUserList
})

export default connect(mapStateToProps, { fetchData, getAdminUserList })(AdminDashboardComponent)