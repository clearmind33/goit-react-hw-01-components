import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css';

export const TransactionHistory = ({ items = [] }) => (
  <table className="transaction-history">
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(i => (<tr key={i.id}>
        <td>{i.type}</td>
        <td>{i.amount}</td>
        <td>{i.currency}</td>
      </tr>))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.array
};