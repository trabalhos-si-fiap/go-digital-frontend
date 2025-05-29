import styled from 'styled-components'

export const LayoutHeader = styled.header`
  background-color: #D1E00B;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    max-width: 90rem;
    margin: 0 auto;

    a img{
      display: flex;
      align-items: center;
      border-radius: 0;

      height: 36px;
    }
  }
`

export const LayoutContainer = styled.div`
  width: 90rem;
  height: 100vh;
  margin: 0 auto;
  background-color: lightblue;
`
