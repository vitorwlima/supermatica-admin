import styled from 'styled-components'
import { FaTrash } from 'react-icons/fa'

export const Container = styled.div`
  .questionSectionWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 60px;
    width: 100%;
    max-width: 70rem;
    margin-bottom: 100px;

    div {
      width: 100%;
    }

    .buttonsWrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;

      div {
        width: max-content;
      }
    }
  }
`

export const DeleteIcon = styled(FaTrash)``
