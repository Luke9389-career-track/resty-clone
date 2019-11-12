import React from 'react';
import PropTypes from 'prop-types';
import styles from './HistoryItem.css';

const HistoryItem = ({ handleClick, history }) => {
  return (
    <div
      className={styles.HistoryItem} 
      onClick={() => handleClick(history.url, history.method, history.headers, history.response)}>
      <h2>{`${history.method.toUpperCase()}`}</h2>
      <p>{`${history.url}`}</p>
    </div>
  );
};

HistoryItem.propTypes = {
  handleClick: PropTypes.func.isRequired,
  history: PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    headers: PropTypes.object.isRequired,
    response: PropTypes.object.isRequired,
  })
};


export default HistoryItem;
