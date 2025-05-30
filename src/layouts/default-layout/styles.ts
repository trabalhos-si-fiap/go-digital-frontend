import styled from 'styled-components'

export const LayoutHeader = styled.header`
  background-color: ${({ theme }) => theme.color['yellow-500']};

  nav {
    width: 75rem;
    display: flex;
    align-items: center;
    padding: 24px 0;
    margin: 0 auto;
    gap: 32px;

    a {
      img {
      display: flex;
      align-items: center;
      border-radius: 0;

      height: 56px;
      }

      &:last-of-type {
        margin-left: auto;
      }
    }

  }
`

export const LayoutContainer = styled.div`
  width: 75rem;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color['brown-700']};
`
