/**
Generated PropTypes for http://127.0.0.1:1337/swagger.yml
**/

import PropTypes from "prop-types";

export const pet = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string
});

export const newPet = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string
});

export const errorModel = PropTypes.shape({
  code: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired
});
