import React from 'react';
import { useDispatch, useFormState } from '../../contexts/FormContext';
import PropTypes from 'prop-types';

const MethodButton = ({ method }) => {
  const state = useFormState();
  const dispatch = useDispatch();

  return (
    <label>
      <input
        type="radio"
        name="method"
        value={method}
        checked={state.method === method}
        onChange={({ target }) => dispatch({ type: 'method', payload: target.value })} />
      <span>{method.toUpperCase()}</span>
    </label>
  );
};

MethodButton.propTypes = {
  method: PropTypes.string.isRequired
};

export default MethodButton;
