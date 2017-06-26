import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import { ApiClient, DefaultApi } from '../client/src/index';
import Navbar from './common/navbar';
import Footer from './common/footer';
import Home from './home/home';

const dev = process.env.NODE_ENV !== 'production';
const base = dev ? 'http://localhost:8000' : '';

export default class App extends React.Component {
  getChildContext() {
    const devClient = new ApiClient();
    devClient.basePath = `${base}/api`;
    return { api: new DefaultApi(devClient) };
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
