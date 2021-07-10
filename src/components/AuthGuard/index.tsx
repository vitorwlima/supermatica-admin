import React, { ReactNode } from 'react'
import { Redirect } from 'react-router-dom'
import { useUser } from '../../hooks/UseUser'

interface IAuthGuardProps {
  children: ReactNode
}

export const AuthGuard = ({ children }: IAuthGuardProps) => {
  const user = useUser()

  if (!user) {
    return <Redirect to='/login' />
  }

  return <>{children}</>
}
