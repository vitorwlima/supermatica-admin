import React, { useState } from 'react'
import { Button, Header, Input } from '../../components'
import api from '../../services/api'
import { Container } from './styles'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const { data } = await api.post('/authenticateAdmin', { email, password })
      window.localStorage.setItem('token', data)
      window.location.reload()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Header />
      <div className='loginSection'>
        <h1>ADMIN - Supermática</h1>
        <form onSubmit={handleLogin}>
          <Input
            type='text'
            nameId='email'
            value={email}
            onChange={e => setEmail(e.currentTarget.value)}
            label='Email'
          />
          <Input
            type='password'
            nameId='password'
            value={password}
            onChange={e => setPassword(e.currentTarget.value)}
            label='Senha'
          />
          <Button type='submit'>Entrar</Button>
        </form>
      </div>
    </Container>
  )
}

export default Login
