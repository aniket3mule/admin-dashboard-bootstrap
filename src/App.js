import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Demo from './components/Demo';
import { Provider } from 'react-redux';

import store from './store'
import RegistrationComponent from './components/RegistrationComponent';

class App extends React.Component  {
  render() {
    return (
      <Provider store = { store }>
     <Router>
      <Route path="/demo" component = {Demo}/>
      <Route path="/login" component = {RegistrationComponent}/>
     </Router>
     </Provider>
    )
  }
}


export default App;
