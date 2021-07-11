import React, { ReactNode } from 'react'
import { Container } from './styles'

interface IButtonsWrapperModalProps {
  children: ReactNode
}

export const ButtonsWrapperModal = ({ children }: IButtonsWrapperModalProps) => {
  return <Container>{children}</Container>
}
