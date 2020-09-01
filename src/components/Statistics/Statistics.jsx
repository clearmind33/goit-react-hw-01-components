import React from 'react'
import PropTypes from 'prop-types'

import './Statistics.css'

export const Statistics = ({ title = 'Title', stats = [] }) => (
  <section className="statistics">
    <h2 className="title">{title}</h2>
    <ul className="stat-list">
      {stats.map(item => (
        <li key={item.id} className="item">
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage + '%'}</span>
        </li>
      ))}
    </ul>
  </section>
)

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array
}