import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

export const Statistics = ({ title = 'Title', stats = [] }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
    <ul>
      {stats.map(({id, label, percentage }) => (
        <li key={id} className={styles.item}>
          <span className={styles.label}>{label}</span>
          <span className={styles.percentage}>{percentage + '%'}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
};