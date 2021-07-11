import React, { useState } from 'react'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, ButtonsWrapperModal, Header, Input, Select } from '../../components'
import Modal from 'react-modal'
import { IQuestion } from '../../interfaces'
import api from '../../services/api'
import { Container, DeleteIcon } from './styles'

interface IParams {
  id: string
}

const QuestionEdit = () => {
  const { id }: IParams = useParams()
  const history = useHistory()

  const [isOpen, setIsOpen] = useState(false)
  const [question, setQuestion] = useState<IQuestion>()
  const [questionText, setQuestionText] = useState('')

  const [alternative0, setAlternative0] = useState('')
  const [alternative1, setAlternative1] = useState('')
  const [alternative2, setAlternative2] = useState('')
  const [alternative3, setAlternative3] = useState('')
  const [alternative4, setAlternative4] = useState('')

  const [correctAlternative, setCorrectAlternative] = useState('0')
  const [resolution, setResolution] = useState('')

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '32px',
    },
  }

  useEffect(() => {
    const getQuestion = async () => {
      try {
        const { data } = await api.get<IQuestion>(`/question/${id}`)
        setQuestion(data)

        setQuestionText(data.questionText)

        setAlternative0(data.alternatives[0].alternativeText)
        setAlternative1(data.alternatives[1].alternativeText)
        setAlternative2(data.alternatives[2].alternativeText)
        setAlternative3(data.alternatives[3].alternativeText)
        setAlternative4(data.alternatives[4].alternativeText)

        const correctAnswer = data.alternatives.filter(a => a.isCorrect)[0]

        setCorrectAlternative(data.alternatives.indexOf(correctAnswer).toString())
        setResolution(data.resolution)
      } catch (err) {
        console.log(err)
      }
    }
    getQuestion()
  }, [id])

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

  const handleEditQuestion = async () => {
    try {
      await api.put(`/question/${id}`, { questionText, resolution })

      if (question) {
        const deleteAnswers = question.alternatives.map(
          async alternative => await api.delete(`/alternative/${alternative._id}`)
        )
        await Promise.all(deleteAnswers)

        await api.post('/alternative', {
          alternativeText: alternative0,
          isCorrect: correctAlternative === '0',
          questionId: question._id,
        })
        await api.post('/alternative', {
          alternativeText: alternative1,
          isCorrect: correctAlternative === '1',
          questionId: question._id,
        })
        await api.post('/alternative', {
          alternativeText: alternative2,
          isCorrect: correctAlternative === '2',
          questionId: question._id,
        })
        await api.post('/alternative', {
          alternativeText: alternative3,
          isCorrect: correctAlternative === '3',
          questionId: question._id,
        })
        await api.post('/alternative', {
          alternativeText: alternative4,
          isCorrect: correctAlternative === '4',
          questionId: question._id,
        })

        history.push(`/questions/${question.subjectId}`)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleDeleteQuestion = async () => {
    try {
      await api.delete(`/question/${id}`)
      history.push(`/questions/${question?.subjectId}`)
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
          value={questionText || ''}
          onChangeTextArea={e => setQuestionText(e.currentTarget.value)}
          nameId='questionText'
          label='Insira a questão'
          rows={5}
        />
        <Input
          value={alternative0 || ''}
          onChange={e => setAlternative0(e.currentTarget.value)}
          nameId='alternative0'
          label='Alternativa 1'
        />
        <Input
          value={alternative1 || ''}
          onChange={e => setAlternative1(e.currentTarget.value)}
          nameId='alternative1'
          label='Alternativa 2'
        />
        <Input
          value={alternative2 || ''}
          onChange={e => setAlternative2(e.currentTarget.value)}
          nameId='alternative2'
          label='Alternativa 3'
        />
        <Input
          value={alternative3 || ''}
          onChange={e => setAlternative3(e.currentTarget.value)}
          nameId='alternative3'
          label='Alternativa 4'
        />
        <Input
          value={alternative4 || ''}
          onChange={e => setAlternative4(e.currentTarget.value)}
          nameId='alternative4'
          label='Alternativa 5'
        />
        <Select
          nameId='correctAlternative'
          value={correctAlternative || ''}
          onChange={e => setCorrectAlternative(e.currentTarget.value)}
          options={correctAlternativeOptions}
          label='Alternativa correta'
        />
        <Input
          textArea
          value={resolution || ''}
          onChangeTextArea={e => setResolution(e.currentTarget.value)}
          nameId='resolution'
          label='Insira a resolução'
          rows={5}
        />
        <div className='buttonsWrapper'>
          <Button onClick={handleEditQuestion}>Atualizar exercício</Button>
          <Button onClick={() => setIsOpen(true)}>
            <DeleteIcon />
          </Button>
        </div>
      </div>

      <Modal style={customStyles} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        Tem certeza que deseja deletar esse exercício?
        <ButtonsWrapperModal>
          <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
          <Button onClick={handleDeleteQuestion}>Deletar</Button>
        </ButtonsWrapperModal>
      </Modal>
    </Container>
  )
}

export default QuestionEdit
