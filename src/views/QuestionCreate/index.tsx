import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, Header, Input, Select } from '../../components'
import api from '../../services/api'
import { Container } from './styles'

interface IParams {
  id: string
}

const QuestionCreate = () => {
  const { id }: IParams = useParams()
  const history = useHistory()

  const [questionText, setQuestionText] = useState('')

  const [alternative0, setAlternative0] = useState('')
  const [alternative1, setAlternative1] = useState('')
  const [alternative2, setAlternative2] = useState('')
  const [alternative3, setAlternative3] = useState('')
  const [alternative4, setAlternative4] = useState('')

  const [correctAlternative, setCorrectAlternative] = useState('0')
  const [resolution, setResolution] = useState('')

  const correctAlternativeOptions = [
    {
      text: 'Alternativa 1',
      value: '0',
    },
    {
      text: 'Alternativa 2',
      value: '1',
    },
    {
      text: 'Alternativa 3',
      value: '2',
    },
    {
      text: 'Alternativa 4',
      value: '3',
    },
    {
      text: 'Alternativa 5',
      value: '4',
    },
  ]

  const handleCreateQuestion = async () => {
    try {
      const { data } = await api.post('/question', { questionText, resolution, subjectId: id })

      await api.post('/alternative', {
        alternativeText: alternative0,
        isCorrect: correctAlternative === '0',
        questionId: data._id,
      })
      await api.post('/alternative', {
        alternativeText: alternative1,
        isCorrect: correctAlternative === '1',
        questionId: data._id,
      })
      await api.post('/alternative', {
        alternativeText: alternative2,
        isCorrect: correctAlternative === '2',
        questionId: data._id,
      })
      await api.post('/alternative', {
        alternativeText: alternative3,
        isCorrect: correctAlternative === '3',
        questionId: data._id,
      })
      await api.post('/alternative', {
        alternativeText: alternative4,
        isCorrect: correctAlternative === '4',
        questionId: data._id,
      })

      history.push(`/questions/${id}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Header />
      <div className='questionSectionWrapper'>
        <Input
          textArea
          value={questionText}
          onChangeTextArea={e => setQuestionText(e.currentTarget.value)}
          nameId='questionText'
          label='Insira a questão'
          rows={5}
        />
        <Input
          value={alternative0}
          onChange={e => setAlternative0(e.currentTarget.value)}
          nameId='alternative0'
          label='Alternativa 1'
        />
        <Input
          value={alternative1}
          onChange={e => setAlternative1(e.currentTarget.value)}
          nameId='alternative1'
          label='Alternativa 2'
        />
        <Input
          value={alternative2}
          onChange={e => setAlternative2(e.currentTarget.value)}
          nameId='alternative2'
          label='Alternativa 3'
        />
        <Input
          value={alternative3}
          onChange={e => setAlternative3(e.currentTarget.value)}
          nameId='alternative3'
          label='Alternativa 4'
        />
        <Input
          value={alternative4}
          onChange={e => setAlternative4(e.currentTarget.value)}
          nameId='alternative4'
          label='Alternativa 5'
        />
        <Select
          nameId='correctAlternative'
          value={correctAlternative}
          onChange={e => setCorrectAlternative(e.currentTarget.value)}
          options={correctAlternativeOptions}
          label='Alternativa correta'
        />
        <Input
          textArea
          value={resolution}
          onChangeTextArea={e => setResolution(e.currentTarget.value)}
          nameId='resolution'
          label='Insira a resolução'
          rows={5}
        />
        <Button onClick={handleCreateQuestion}>Criar exercício</Button>
      </div>
    </Container>
  )
}

export default QuestionCreate
