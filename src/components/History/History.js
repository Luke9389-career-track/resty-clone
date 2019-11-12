import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from '../../contexts/FormContext';
import HistoryItem from './HistoryItem';
import styles from './History.css';

const History = ({ historyArr }) => {
  const dispatch = useDispatch();
  const handleClick = ({ target }) => {
    dispatch({ type: 'url', payload: target.url });
    dispatch({ type: 'method', payload: target.method });
    dispatch({ type: 'headers', payload: target.headers });
    dispatch({ type: 'response', payload: target.response });
  };

  let historyElements = historyArr.map((history, index) => {
    return <li key={`${index}-${history.url}-${history.method}`}>
      <HistoryItem handleClick={handleClick} history={history} />
    </li>;
  });

  return (
    <aside className={styles.History}>
      <h2>History</h2>
      <ul>
        {historyElements}
      </ul>
    </aside>
  );
};

History.propTypes = {
  historyArr: PropTypes.array.isRequired
};

export default History;



