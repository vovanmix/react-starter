import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

import { ApiClient, DefaultApi } from '../client/src/index';
// client will be generated with Swagger
import { ApiPropTypes } from '../definitions/services-prop-types';

class ApiProvider extends Component {
  static childContextTypes = { api: ApiPropTypes };
  static propTypes = { children: PropTypes.element.isRequired };

  constructor(props) {
    super(props);

    const dev = process.env.NODE_ENV !== 'production';
    let base = '';
    if (dev) {
      base = process.env.BACKEND_HOST
        ? process.env.BACKEND_HOST
        : 'http://localhost:8080';
    }

    const devClient = new ApiClient();
    devClient.basePath = `${base}/api`;

    this.api = new DefaultApi(devClient);
  }

  getChildContext() {
    console.log('initializing api service!');
    return { api: this.api };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default ApiProvider;

export const api = (ComponentToWrap) => {
  const apiComponent = (_, context) =>
    <ComponentToWrap api={context.api} />;

  apiComponent.contextTypes = { api: ApiPropTypes.isRequired };

  return apiComponent;
};
