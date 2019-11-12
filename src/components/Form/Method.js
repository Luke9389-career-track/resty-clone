import React from 'react';
import { useDispatch, useFormState } from '../../contexts/FormContext';
import MethodButton from './MethodButton';

const Method = () => {
  const state = useFormState();
  const dispatch = useDispatch();

  return (
    <section>
      <input
        type="text"
        value={state.url}
        onChange={({ target }) => dispatch({ type: 'url', payload: target.value })}
        placeholder="URL" />
      <div id="methods">
        <MethodButton method={'get'} />
        <MethodButton method={'post'} />
        <MethodButton method={'put'} />
        <MethodButton method={'delete'} />
        <label>
          <button type="submit">Go!</button>
        </label>
      </div>
    </section>
  );
};

export default Method;
