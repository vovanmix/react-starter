import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import ApiService from '../services/api-service';
import Navbar from './common/navbar';
import Footer from './common/footer';
import Home from './home/home';

export default class App extends React.Component {
  getChildContext() {
    return { api: new ApiService() };
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Footer />
      </div>
    );
  }
}

App.childContextTypes = { api: PropTypes.object };
