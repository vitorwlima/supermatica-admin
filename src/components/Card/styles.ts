import styled from 'styled-components'
import { FaEdit, FaBong } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #efefef;
  padding: 1.2em;
  width: 100%;
  max-width: 75rem;
  margin-bottom: 16px;
  border-radius: 0.4em;

  .buttonsWrapper {
    display: flex;
    button:first-of-type {
      margin-right: 12px;
    }
  }
`

export const EditIcon = styled(FaEdit)`
  font-size: 16px;
`

export const BongIcon = styled(FaBong)`
  font-size: 16px;
`
