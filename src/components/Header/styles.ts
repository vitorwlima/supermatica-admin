import styled from 'styled-components'
import { FaUser } from 'react-icons/fa'

export const Container = styled.header`
  background-color: #209ff3;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  max-height: 60px;
`

export const UserIcon = styled(FaUser)`
  font-size: 24px;
  fill: #28292a;
`
