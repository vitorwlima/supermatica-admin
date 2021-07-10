import React from 'react'
import { Container, Logo, UserIcon } from './styles'
import logo from '../../assets/logo.png'
import { Button } from '../'

export const Header = () => {
  return (
    <Container>
      <Logo src={logo} alt='Supermática' />
      <Button onClick={() => console.log('oi')}>
        <UserIcon />
      </Button>
    </Container>
  )
}
