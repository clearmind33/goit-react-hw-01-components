import React from 'react'
import friends from '../../friends.json';
import { FriendListItem } from '../FriendListItem/FriendListItem.jsx'
import './FrendList.css'

export const FrendList = () => (
  <ul className="friend-list">
    {friends.map(item => <FriendListItem key={item.id} avatar={item.avatar} name={item.name} isOnline={item.isOnline} />)}
  </ul>
)
