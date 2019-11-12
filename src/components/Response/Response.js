/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ResponseDisplay.css';

function Response({ headers, results }) {
  return (
    <div className={styles.Response}>
      <pre>"Headers" : {JSON.stringify(headers, null, 2)}</pre>
      <pre>"Response" : {JSON.stringify(results, null, 2)}</pre>
    </div>
  );
}

Response.propTypes = {
  headers: PropTypes.object.isRequired,
  results: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default Response;
