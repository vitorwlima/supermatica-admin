import React, { ReactNode } from 'react'
import { Container } from './styles'

interface ButtonProps {
  children: ReactNode
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset' | undefined
}

export const Button = ({ onClick, children, disabled, type }: ButtonProps) => {
  return (
    <Container>
      <button onClick={onClick} disabled={disabled} type={type}>
        {children}
      </button>
    </Container>
  )
}
