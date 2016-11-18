import React from 'react'

const Button = ({ onClick, disabled, children, className }) => (
  <button className={className} onClick={onClick} disabled={disabled} role="button">
    {children}
  </button>
)

Button.propTypes = {
  onClick: React.PropTypes.func,
  disabled: React.PropTypes.bool,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  className: React.PropTypes.string,
}

export default Button
