import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store'
import Register from './pages/Register';
import Login from './pages/Login';
import Admin from './pages/Admin';
import PaginationComponent from './components/PaginationComponent';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/admindashboard" component={Admin} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/demo" component={PaginationComponent} />
        </Router>
      </Provider>
    )
  }
}


export default App;
