import React from 'react'
import jwt_decode from 'jwt-decode'
import { Route, Redirect } from 'react-router-dom'
import NotAuthorized from '../components/views/NotAuthorized/NotAuthorized'

interface Props {
  path: string
  component: React.FC
  exact?: boolean
}

const PrivateRouteAdmin: React.FC<Props> = (props) => {
  const token = localStorage.getItem('auth')
  const { role } = jwt_decode(token || '') as any
  if (token) {
    if (role === 1) {
      return <Route {...props} />
    }
  }
  return <NotAuthorized />
}

export default PrivateRouteAdmin
