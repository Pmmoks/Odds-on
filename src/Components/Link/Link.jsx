import React from 'react'
import { Link as RouterLink } from 'react-router'

const Link = ({ children, onClick, href, path, target, className }) => {
  let element = null

  if (href) {
    const anchorTarget = target || '_self'
    element = (
      <a className={className} href={href} target={anchorTarget} onClick={onClick}>
        {children}
      </a>
    )
  } else if (path) {
    element = (
      <RouterLink className={className} to={path} onClick={onClick}>
        {children}
      </RouterLink>
    )
  }

  return element
}

Link.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
    React.PropTypes.array,
  ]),
  classNames: React.PropTypes.string,
  href: React.PropTypes.string,
  path: React.PropTypes.string,
  target: React.PropTypes.string,
}

export default Link
