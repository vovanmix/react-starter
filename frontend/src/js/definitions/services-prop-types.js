import PropTypes from 'prop-types';

export const ApiPropTypes = PropTypes.shape({
  addPet: PropTypes.func,
  deletePet: PropTypes.func,
  findPetById: PropTypes.func,
  findPets: PropTypes.func
});

export const HistoryPropTypes = PropTypes.shape({ push: PropTypes.func.isRequired });
