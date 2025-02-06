import React from 'react'

const Button = ({ onClick, href, className, icon, label }) => {
  const Component = href ? 'a' : 'button'
  const props = href ? { href } : { onClick }

  return (
    <Component 
      {...props}
      className={className}
    >
      <span className="text-xl">{icon}</span> {label}
    </Component>
  )
}

export default Button
