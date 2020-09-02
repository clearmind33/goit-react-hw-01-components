import React from 'react';
import PropTypes from 'prop-types';
import './FriendListItem.css';

export const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className="list-item">
    <span className={"status" + (isOnline ? " online" : " offline")}>{isOnline}</span>
    <img className="avatar" src={avatar} alt="" width="70" />
    <p className="name">{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool
};