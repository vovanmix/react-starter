import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from './components/common/scroll-to-top';
import App from './components/app';
import ApiService from './services/api-service';

import { ApiPropTypes } from './definitions/services-prop-types';

class Bootstrap extends Component {
  constructor(props) {
    super(props);

    this.api = new ApiService();
  }

  getChildContext() {
    return { api: this.api };
  }

  componentDidMount() {
    // Place on app load script or global fetch here
  }

  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

Bootstrap.childContextTypes = { api: ApiPropTypes };

ReactDOM.render(<Bootstrap />, document.getElementById('container'));
