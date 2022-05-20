import PropTypes from 'prop-types';
import React from 'react';

function LabeledInput({
  type, name, value, handle, label,
}) {
  return (
    <label htmlFor="userName">
      {label}
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(event) => handle(event)}
      />
    </label>
  );
}

LabeledInput.propTypes = {
  label: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default LabeledInput;
