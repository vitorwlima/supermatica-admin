import React, { ReactNode } from 'react'
import { Redirect } from 'react-router-dom'
import { useUser } from '../../hooks/UseUser'

interface IGuestGuardProps {
  children: ReactNode
}

export const GuestGuard = ({ children }: IGuestGuardProps) => {
  const user = useUser()

  if (user) {
    return <Redirect to='/' />
  }

  return <>{children}</>
}
