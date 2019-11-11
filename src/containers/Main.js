import React from 'react';
import History from '../components/History/History';
import Form from '../components/Form/Form';
import Response from '../components/Response/Response';
import styles from './Main.css';
// import { callApi } from '../services/callApi';
import { FormProvider } from '../contexts/FormContext';

const Main = () => {
  const initialState = {
    url: '',
    method: 'get',
    body: '',
    headers: { 'Content-Type': 'application/json' },
    results: { headers: {}, response: {} }
  };

  const reducer = (state, action) => {
    switch(action.type) {
      case 'url':
        return { ...state, url: action.payload };
      case 'method':
        return { ...state, method: action.payload };
      case 'body':
        return { ...state, body: action.payload };
      case 'headers':
        return { ...state, headers: action.payload };
      case 'results':
        return { ...state, results: action.payload };
      default:
        return state;
    }
  };

  return (
    <main className={styles.Main}>
      <History />
      <section className={styles.App}>
        <FormProvider reducer={reducer} initialState={initialState}>
          <Form />
          <Response />
        </FormProvider>
      </section>
    </main>
  );
};

export default Main;

// const handleSubmit = event => {
//   event.preventDefault();
//   //loading
//   callApi(url, method, headers, body)
//     .then(results => {
//       setResults({ results });
//     });
// };

// const handleChange = ({ target }) => {
//   switch(target.name) {
//     case 'url':
//       return setUrl(target.value);
//     case 'method':
//       return setMethod(target.value);
//     case 'body':
//       return setBody(target.value);
//     case 'headers':
//       return setHeaders(target.value);
//     default:
//       return null;
//   }
// };

// const formProps = {
//   handleSubmit: handleSubmit,
//   handleChange: handleChange,
//   url: url,
//   method: method,
//   body: body
// };
