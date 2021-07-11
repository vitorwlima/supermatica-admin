import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { Button, Header, Input } from '../../components'
import api from '../../services/api'
import { ButtonsWrapperModal, Container, DeleteIcon } from './styles'
import Modal from 'react-modal'

interface IParams {
  id: string
}

const Subject = () => {
  const { id }: IParams = useParams()
  const history = useHistory()

  const [subjectValue, setSubjectValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)

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
  const handleOpenConfirmationModal = () => {
    setIsOpen(true)
  }

  const handleDeleteSubject = async () => {
    try {
      await api.delete(`/subject/${id}`)
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
        <div className='buttonsWrapper'>
          <Button onClick={handleSaveSubject}>Salvar</Button>
          <Button onClick={handleOpenConfirmationModal}>
            <DeleteIcon />
          </Button>
        </div>
      </div>

      <Modal style={customStyles} isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        Tem certeza que deseja deletar essa matéria?
        <ButtonsWrapperModal>
          <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
          <Button onClick={handleDeleteSubject}>Deletar</Button>
        </ButtonsWrapperModal>
      </Modal>
    </Container>
  )
}

export default Subject
