/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import PaymentWorkflow from "./pages/PaymentWorkflow";
import QuestionAnswer from "./pages/QuestionAnswer";
class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route path="/admindashboard" component={Admin} />
                    <Route path="/register" component={Register} />
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/payment" component={PaymentWorkflow} />
                    <Route path="/questionanswer" component={QuestionAnswer} />
                </Router>
            </Provider>
        );
    }
}


export default App;
