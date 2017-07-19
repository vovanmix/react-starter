import React from 'react';
import PropTypes from 'prop-types';

import { pet as petPropType } from '../../definitions/data-prop-types';
import PetsListItem from '../pets/pets-list-item';

const PetsList = ({ pets }) => {
  const records = pets.map(
    pet => <PetsListItem pet={pet} key={pet.id} />
  );

  return (
    <div className="row">
      {records}
    </div>
  );
};

PetsList.propTypes = { pets: PropTypes.arrayOf(petPropType).isRequired };

export default PetsList;
