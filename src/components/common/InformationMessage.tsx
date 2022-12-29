import React from 'react'
import './InformationMessage.css'
interface Props {
  message: string
  className: string
}

const InformationMessage: React.FC<Props> = ({ message, className }) => {
  return (
    <div className={className}>
      <p>{message}</p>
    </div>
  )
}

export default InformationMessage
