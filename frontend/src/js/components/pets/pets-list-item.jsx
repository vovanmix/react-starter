import React from 'react';

import { pet as petPropType } from '../../definitions/data-prop-types';

const PetsListItem = ({ pet }) => (
  <div className="well col-md-3">
    <h4>{pet.name}</h4>
    <span className="label label-primary">{pet.tag}</span>
  </div>
  );

PetsListItem.propTypes = { pet: petPropType.isRequired };

export default PetsListItem;
