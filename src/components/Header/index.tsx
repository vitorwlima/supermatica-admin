import React from 'react'
import { Container, Logo, UserIcon } from './styles'
import logo from '../../assets/logo.png'
import { Button } from '../'
import { useHistory } from 'react-router-dom'

export const Header = () => {
  const history = useHistory()

  const handleRedirectHome = () => {
    history.push('/')
  }

  return (
    <Container>
      <button className='logoButton' onClick={handleRedirectHome}>
        <Logo src={logo} alt='Supermática' />
      </button>
      <Button onClick={() => console.log('oi')}>
        <UserIcon />
      </Button>
    </Container>
  )
}
