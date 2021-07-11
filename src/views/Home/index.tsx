import React, { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Header } from '../../components'
import Card from '../../components/Card'
import { ISubject } from '../../interfaces'
import api from '../../services/api'
import { Container } from './styles'

const Home = () => {
  const [subjects, setSubjects] = useState<ISubject[]>([])

  const history = useHistory()

  useEffect(() => {
    const getSubjects = async () => {
      const { data } = await api.get('/subjects')
      setSubjects(data)
    }
    getSubjects()
  }, [])

  const handleOpenQuestions = (id: string) => {}
  const handleEditSubject = (id: string) => {
    history.push(`/subject/${id}`)
  }
  const handleNewSubject = () => {
    history.push('/subject/create')
  }

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
