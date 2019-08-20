/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getOrderDetailsList } from "../actions/postActions";
import { Button } from "react-bootstrap";
import AdminService from "../services/AdminService";
const AdminServices = new AdminService();
class PaymentComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPage: 1,
            listPerPage: 10,
            startIndex: 0,
            endIndex: 5
        };
        this.handleClick = this.handleClick.bind(this);
        this.pageNumber = this.pageNumber.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.handleApprove = this.handleApprove.bind(this);
        this.handleReject = this.handleReject.bind(this);
    }

    async componentDidMount() {
        await this.props.getOrderDetailsList();
    }

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    
    pageNumber(event){
        this.setState({
            currentPage: Number(event.target.id),
        });
    }

    prevPage(){
        if (this.state.currentPage <= 5) {
            this.setState({
                startIndex: 0,
                endIndex: 5,
                currentPage: this.state.currentPage - 1,
            });
        }
        else {
            this.setState({
                startIndex: this.state.startIndex - 1,
                endIndex: this.state.endIndex - 1,
                currentPage: this.state.currentPage - 1,
            });
        }
    }

    nextPage(length){
        if(length >= this.state.endIndex){
            this.setState({
                startIndex: 0,
                endIndex: 5,
                currentPage: this.state.currentPage + 1,
            });
        }
    }

    handleApprove(cartId){
        var data ={
            "cartId":cartId
        };

        AdminServices.approveOrder(data)
            .then(res => {
                console.log("rearaesad",res);
                this.props.getOrderDetailsList();
            })
            .catch(err => {
                console.log("error approving");
            
            });
    }

    handleReject(cartId){
        var data ={
            "cartId":cartId
        };
        AdminServices.rejectOrder(data)
            .then(res => {
                console.log("rearaesad",res);
            
                this.props.getOrderDetailsList();
            })
            .catch(err => {
                console.log("error rejecting");
            });
    }


    render() {
        console.log("this.propsadsada", this.props.orderList);
        const { currentPage, listPerPage } = this.state;
        const { startIndex, endIndex } = this.state;

        const indexOfLastElement = currentPage * listPerPage;
        const indexOfFirstElement = indexOfLastElement - listPerPage;
        if(this.props.orderList!== undefined){
            const orderList = this.props.orderList.slice(indexOfFirstElement, indexOfLastElement);

            // Logic for displaying page numbers
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(this.props.orderList.length / listPerPage); i++) {
                pageNumbers.push(i);
            }

            const renderPageNumbers = pageNumbers.slice(startIndex, endIndex).map(item => (
                <li className={currentPage === item ? "page-item active" : "page-item"} key={item}>
                    <button className="page-link" style={{ width: "42px" }} onClick={(e) => this.pageNumber(e, item)}
                        id={item}>
                        {item}
                    </button>
                </li>
            ));

            const renderOrderList = orderList.map(key => {
                return (
                    key.status === "pending" &&
                <tr key={key.id}>
                    <td>{key.user.email}</td>
                    <td>{key.status}</td>
                    <td><Button variant="outline-success" onClick={() => this.handleApprove(key.id)} >{"Approve"}</Button></td>
                    <td><Button variant="outline-danger" onClick={() => this.handleReject(key.id)}>{"Reject"}</Button></td>
                </tr>
                );
            });
            return (
                <center>
    
                    <div className="table-responsive"
                        style={{ width: "90%", paddingTop:"2%", marginTop:"10vh" }}>
                        <h4 >
                            <strong>{"Payment History"}</strong>
                        </h4>
                        <table className="table table-stripped table-bordered ">
                            <thead>
                                <tr>
                                    <th>{"User"}</th>
                                    <th>{"Status"}</th>
                                    <th>{"Approve"}</th>
                                    <th>{"Reject"}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {renderOrderList}
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
                                                <button onClick={currentPage === pageNumbers.length ? null : () => this.nextPage(orderList.length)}
                                                    className="page-link"  >NextPage</button>
                                            </li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </center>
    
            );
        } else {
            return(
                <div className="not-available">
                    <h1>List not available</h1>
                </div>
            );
        }
        
        
    }
}


PaymentComponent.propTypes = {
    getOrderDetailsList: propTypes.func.isRequired
};

const mapStateToProps = state => ({
    orderList: state.orderList.orderList
});

export default connect(mapStateToProps, { getOrderDetailsList })(PaymentComponent);


