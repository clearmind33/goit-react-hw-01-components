import React from 'react';

import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';

import styles from './FrendList.module.css';

export const FrendList = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(({id, ...props}) => <FriendListItem key={id} {...props} />)}
  </ul>
);
