import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import ScrollToTop from './components/common/scroll-to-top';
import ApiProvider from './providers/api-provider';
import App from './components/app';

class Bootstrap extends Component {
  componentDidMount() {
    // Place on app load script or global fetch here
  }

  render() {
    return (
      <ApiProvider>
        <BrowserRouter>
          <ScrollToTop>
            <App />
          </ScrollToTop>
        </BrowserRouter>
      </ApiProvider>
    );
  }
}

ReactDOM.render(<Bootstrap />, document.getElementById('container'));
