import React from 'react';
import Method from './Method';
import Payload from './Payload';
import { useFormState, useDispatch } from '../../contexts/FormContext';
import { callApi } from '../../services/callApi';
import store from '../../services/store';
import styles from './Form.css';

const Form = () => {
  const state = useFormState();
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    callApi(state.url, state.method, state.headers, state.body)
      .then(results => {
        dispatch({ type: 'response', payload: results.response });
        dispatch({ type: 'headers', payload: results.headers });
        return results;
      })
      .then(res => {
        const historyItem = {
          url: state.url,
          method: state.method,
          headers: res.headers,
          response: res.response
        };
        dispatch({ type: 'history', payload: historyItem });
        return historyItem;
      })
      .then(historyItem => {
        store.save('history', historyItem);
        dispatch({ type: 'authUsername', payload: '' });
        dispatch({ type: 'authPassword', payload: '' });
        dispatch({ type: 'authToken', payload: '' });
        dispatch({ type: 'headers', payload: { 'Content-Type': 'application/json' } });
      });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <Method />
      <Payload />
    </form>
  );

};

export default Form;
