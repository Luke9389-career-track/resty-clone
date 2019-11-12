import React from 'react';
import { useDispatch, useFormState } from '../../contexts/FormContext';


const Payload = () => {
  const state = useFormState();
  const dispatch = useDispatch();

  return (
    <section className="payload">
      <div id="body">
        <textarea
          placeholder="Raw JSON Body"
          value={state.body}
          onChange={({ target }) => dispatch({ type: 'body', payload: target.value })}></textarea>
      </div>
      <div id="headers">
        <button>Headers</button>
        <div>
          <h2>Basic Authorization</h2>
          <input
            value={state.authUsername}
            onChange={({ target }) => ({ type: 'authUsername', payload: target.value })}
            placeholder="Username" />
          <input
            value={state.authPassword} 
            onChange={({ target }) => ({ type: 'authPassword', payload: target.value })}placeholder="Password" />
        </div>
        <div>
          <h2>Bearer Token</h2>
          <input
            value={state.authToken}
            onChange={({ target }) => ({ type: 'authToken', payload: target.value })}
            placeholder="Bearer Token" />
        </div>
      </div>
    </section>
  );
};

export default Payload;
