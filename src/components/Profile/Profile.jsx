import React from 'react';
import PropTypes from 'prop-types';

import styles from './Profile.module.css';

export const Profile = ({ avatar, name, tag, location, stats }) => {
  const {followers, views, likes } = stats
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt='user avatar'
          className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    color: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};