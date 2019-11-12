import React from 'react';
import History from '../components/History/History';
import Form from '../components/Form/Form';
import Response from '../components/Response/Response';
import styles from './Main.css';
import { useFormState } from '../contexts/FormContext';

const Main = () => {
  const state = useFormState();

  return (
    <main className={styles.Main}>
      <History historyArr={state.history}/>
      <section className={styles.App}>
        <Form />
        <Response
          headers={state.headers}
          results={state.response}
        />
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
