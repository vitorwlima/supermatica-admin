import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Header, Input } from '../../components'
import api from '../../services/api'
import { Container } from './styles'

const Subject = () => {
  const history = useHistory()

  const [subjectValue, setSubjectValue] = useState('')

  const handleCreateSubject = async () => {
    try {
      await api.post('/subject', { subjectText: subjectValue })
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Header />
      <div className='wrapper'>
        <Input
          type='text'
          nameId='subject'
          label='Matéria'
          value={subjectValue}
          onChange={e => setSubjectValue(e.currentTarget.value)}
        />
        <Button onClick={handleCreateSubject}>Criar</Button>
      </div>
    </Container>
  )
}

export default Subject
