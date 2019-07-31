import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Demo from './components/Demo';


class App extends React.Component  {
  render() {
    return (
     <Router>
      <Route path="/demo" component = {Demo}/>
     </Router>
    )
  }
}


export default App;
