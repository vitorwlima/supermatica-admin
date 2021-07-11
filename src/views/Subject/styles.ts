import styled from 'styled-components'
import { FaTrash } from 'react-icons/fa'

export const Container = styled.div`
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 100px;
    width: 100%;
    max-width: 70rem;

    div {
      width: 100%;
    }

    .buttonsWrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      div {
        width: max-content;
      }
    }
  }

  .buttonsWrapperModal {
    display: flex;
  }
`

export const ButtonsWrapperModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
`

export const DeleteIcon = styled(FaTrash)``
