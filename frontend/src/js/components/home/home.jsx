import React from 'react';

import { ApiPropTypes } from '../../definitions/services-prop-types';
import PetsList from '../pets/pets-list';
import { withApi } from '../../providers/api-provider';

class Home extends React.Component {
  static propTypes = { api: ApiPropTypes.isRequired };

  constructor(props) {
    super(props);
    this.state = { pets: [] };
  }

  componentDidMount() {
    this.props.api.findPets().then((data) => {
      this.setState({ pets: data });
    });
  }

  render() {
    const { pets } = this.state;

    return (
      <div>
        <h1>Welcome to the pets store!</h1>
        <h2>Currently available pets:</h2>
        <PetsList pets={pets} />
      </div>
    );
  }
}

export default withApi(Home);
