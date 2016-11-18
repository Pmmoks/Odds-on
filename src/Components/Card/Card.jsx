import React from 'react'

import styles from './Card.scss'

const Card = ({ children }) => (
  <div className={styles.card}>
    {children}
  </div>
)

Card.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  className: React.PropTypes.string,
}

export default Card
