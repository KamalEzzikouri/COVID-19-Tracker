import React, {Component} from 'react';

import { BrowserRouter as Router } from "react-router-dom";
import PublicRoute from './Routes/PublicRoutes';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Styles/index.scss';


class App extends Component {

  render() {
    return (
      <Router>
        <PublicRoute/>
      </Router>
    );
  }
}

export default App;
