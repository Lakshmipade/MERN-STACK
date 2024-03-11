import React from 'react'

const Avatar = ({children ,backgroundColor, color, padding, fontSize, borderRadius, cursor}) => {
const style = {
  backgroundColor,
  color: color,
  padding, 
  fontSize,
  borderRadius,
  textAlign: "center",
  cursor: cursor || null
}

  return (
    <div style = {style}>
      {children}
    </div>
  )
}

export default Avatar
