import React from 'react'
import { Container, Logo } from './styles'
import logo from '../../assets/logo.png'
import { Button } from '../'
import { useHistory } from 'react-router-dom'
import { useUser } from '../../hooks/UseUser'

export const Header = () => {
  const history = useHistory()
  const user = useUser()

  const handleRedirectHome = () => {
    history.push('/')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <Container>
      <button className='logoButton' onClick={handleRedirectHome}>
        <Logo src={logo} alt='Supermática' />
      </button>
      <div className='accountMenu'>
        <div className='user'>{user && user.name}</div>
        <div className='logoutButton'>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </div>
    </Container>
  )
}
