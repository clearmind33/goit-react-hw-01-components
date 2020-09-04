import React from 'react';
import PropTypes from 'prop-types';

import styles from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline}) => {
  const statusClassName = isOnline ? styles.online : styles.offline
  return (
    <li className={styles.list_item}>
      <span className={styles.status + ' ' + statusClassName}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt='' width='70' />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
};