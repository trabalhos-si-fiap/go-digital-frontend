import styled from 'styled-components'

export const LayoutHeader = styled.header`
  background-color: ${({ theme }) => theme.color['yellow-500']};

  nav {
    max-width: 75rem;
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 32px;

    padding: 24px 0;
    margin: 0 auto;

    font: ${({ theme }) => theme.font['text-m']};

    a {
      line-height: 0;
      
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

    @media (max-width: 796px) {
      justify-content: space-between;
      padding: 24px 16px;
    }
  }
`

export const LayoutContainer = styled.div`
  width: 75rem;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color['brown-700']};
`
