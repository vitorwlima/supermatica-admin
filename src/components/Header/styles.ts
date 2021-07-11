import styled from 'styled-components'

export const Container = styled.header`
  background-color: #209ff3;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logoButton {
    background-color: transparent;
    cursor: pointer;
  }

  .accountMenu {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #eee;
    position: relative;

    .user {
      padding: 20px 0;
    }

    &:hover {
      .logoutButton {
        display: block;
      }
    }
  }

  .logoutButton {
    display: none;
    position: absolute;
    top: 50px;
  }
`

export const Logo = styled.img`
  max-height: 60px;
`
