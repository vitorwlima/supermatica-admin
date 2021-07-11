import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, Header, Input } from '../../components'
import api from '../../services/api'
import { Container } from './styles'

interface IParams {
  id: string
}

const Subject = () => {
  const { id }: IParams = useParams()
  const history = useHistory()

  const [subjectValue, setSubjectValue] = useState('')

  useEffect(() => {
    if (id) {
      const getSubject = async () => {
        try {
          const { data } = await api.get(`/subjects/${id}`)
          setSubjectValue(data.subjectText)
        } catch (err) {
          console.log(err)
        }
      }
      getSubject()
    }
  }, [id])

  const handleSaveSubject = async () => {
    try {
      await api.put(`/subject/${id}`, { subjectText: subjectValue })
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
        <Button onClick={handleSaveSubject}>Salvar</Button>
      </div>
    </Container>
  )
}

export default Subject
