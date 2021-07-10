import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from './styles'

const Questions = () => {
  const history = useHistory()

  const handleGoHome = () => {
    history.push('/')
  }

  return (
    <Container>
      <button onClick={handleGoHome}>oi</button>
    </Container>
  )
}

export default Questions
