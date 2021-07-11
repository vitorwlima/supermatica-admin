import React, { ReactNode } from 'react'
import { Button } from '../Button'
import { BongIcon, Container, EditIcon } from './styles'

interface ICardProps {
  children: ReactNode
  onClickEdit?: React.MouseEventHandler<HTMLButtonElement>
  onClickBong?: React.MouseEventHandler<HTMLButtonElement>
}

const Card = ({ children, onClickEdit, onClickBong }: ICardProps) => {
  return (
    <Container>
      {children}
      <div className='buttonsWrapper'>
        {onClickBong && (
          <Button onClick={onClickBong}>
            <BongIcon />
          </Button>
        )}
        {onClickEdit && (
          <Button onClick={onClickEdit}>
            <EditIcon />
          </Button>
        )}
      </div>
    </Container>
  )
}

export default Card
