import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button, Header } from '../../components'
import Card from '../../components/Card'
import api from '../../services/api'
import { Container } from './styles'

interface ISubject {
  _id: string
  subjectText: string
}

const Home = () => {
  const [subjects, setSubjects] = useState<ISubject[]>([])

  useEffect(() => {
    const getSubjects = async () => {
      const { data } = await api.get('/subjects')
      setSubjects(data)
    }
    getSubjects()
  }, [])

  const handleOpenQuestions = (id: string) => {}
  const handleEditSubject = (id: string) => {}
  const handleNewSubject = () => {}

  return (
    <Container>
      <Header />
      <div className='subjectsWrapper'>
        {subjects &&
          subjects.map(subject => (
            <Card
              onClickBong={() => handleOpenQuestions(subject._id)}
              onClickEdit={() => handleEditSubject(subject._id)}
            >
              {subject.subjectText}
            </Card>
          ))}
        <Button onClick={handleNewSubject}>Adicionar nova matéria</Button>
      </div>
    </Container>
  )
}

export default Home
