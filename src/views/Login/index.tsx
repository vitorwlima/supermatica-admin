import React, { useState } from 'react'
import { Button, Header, Input } from '../../components'
import { Container } from './styles'

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Container>
      <Header></Header>
      <div className='loginSection'>
        <h1>ADMIN - Supermática</h1>
        <form>
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
