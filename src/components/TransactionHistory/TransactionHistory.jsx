import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items = [] }) => (
  <table className={styles.Transaction_history}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({id, type, amount, currency  }) => (<tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array
};