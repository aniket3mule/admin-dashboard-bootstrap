import React, { Component } from 'react'
import Appbar from './Appbar';
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
            startIndex : 0, 
            endIndex : 5
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }


    componentWillMount() {
        this.props.fetchData();
        this.props.getAdminUserList();
    }

    pageNumber = (event, item) =>{
        this.setState({
            currentPage: Number(event.target.id),
            // startIndex:this.state.startIndex,
            // endIndex: this.state.endIndex+5
            
        })

        if (item%5 === 0) {
            this.setState({
                startIndex:this.state.startIndex+5,
                endIndex: this.state.endIndex+5
            })
        }
    }

    prevPage = () => {
        this.setState({
            startIndex :this.state.startIndex - 5,
            endIndex :this.state.endIndex - 5
        })
    }
    nextPage = () => {
    this.setState({
        startIndex : this.state.startIndex + 5,
        endIndex : this.state.endIndex + 5,
        // startIndex:this.state.startIndex+5,
        // endIndex: this.state.endIndex+5
    })
}
    render() {
        const { currentPage, listPerPage } = this.state;
        const {startIndex , endIndex } = this.state;
        console.log("this.props", this.props.adminUserList);

        // Logic for displaying todos
        const indexOfLastTodo = currentPage * listPerPage;
        const indexOfFirstTodo = indexOfLastTodo - listPerPage;
        const currentTodos = this.props.adminUserList.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((key, index) => {
            return (
                <div key={index}>
                    {key.firstName}
                </div>
            )
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.adminUserList.length / listPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers  = pageNumbers.slice(startIndex, endIndex).map(item => (
            <li
            
            //  className={meta.pagination.current_page === item ? 'page-item active' : 'page-item'}
             >
                <button className="page-link" onClick={(e) => this.pageNumber(e, item)}
                key={item}
                id={item}
                >
                    {item}
                </button>
            </li>
        ));


        const statics = this.props.userStatics.map(key => {
            return (
                <Row key={key.service} style={{ textAlign: "center", display: "flex", width: "205px" }}>
                    <Col md={{ span: 10, offset: 0 }}>
                        <div
                            className="statics-box" >
                            <span style={{ marginTop: "4%" }}>{(key.service).toString().toUpperCase()}</span>
                            <span>{(key.count).toString().toUpperCase()}</span>
                        </div>
                    </Col>
                </Row>
            )
        })
        return (
            <div>
                <Appbar />
                <Container style={{ marginTop: "12vh", display: "flex", justifyContent: "center" }}>
                    {statics}
                </Container>

                {renderTodos}
                <ul className="pagination" id="page-numbers">
                    <li><button onClick={this.prevPage} className="page-link">PrevPage</button></li>
                    {renderPageNumbers}
                    <li><button onClick={this.nextPage} className="page-link">NextPage</button></li>
                </ul>
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