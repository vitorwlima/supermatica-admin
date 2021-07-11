import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, Header } from '../../components'
import Card from '../../components/Card'
import { IQuestion } from '../../interfaces'
import api from '../../services/api'
import { Container } from './styles'

interface IParams {
  id: string
}

const Questions = () => {
  const { id }: IParams = useParams()
  const history = useHistory()

  const [questions, setQuestions] = useState<IQuestion[]>([])

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const { data } = await api.get(`/questions/${id}`)
        setQuestions(data)
      } catch (err) {
        console.log(err)
      }
    }
    getQuestions()
  }, [id])

  const handleEditQuestion = () => {}

  const handleCreateQuestion = () => {
    history.push(`/question/create/${id}`)
  }

  return (
    <Container>
      <Header />
      <div className='questionsWrapper'>
        {questions.map(question => (
          <Card onClickEdit={handleEditQuestion}>{question.questionText}</Card>
        ))}
        <Button onClick={handleCreateQuestion}>Criar novo exercício</Button>
      </div>
    </Container>
  )
}

export default Questions
