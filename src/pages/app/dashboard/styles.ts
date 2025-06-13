import styled from 'styled-components'

export const DashboardHeader = styled.div`
  margin-top: 80px;

  h1 {
    font: ${({ theme }) => theme.font['title-xl']};
    color: ${({ theme }) => theme.color['white']};

    span {
      color: ${({ theme }) => theme.color['yellow-500']};
    }
  }
`

export const CardContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  > div {
    flex: 1;
  }
`

export const LogContainer = styled.div`
  margin-top: 24px;
  padding: 24px;
  background-color: ${({ theme }) => theme.color['brown-500']};
  border-radius: 20px;

  h2 {
    color: ${({ theme }) => theme.color['yellow-500']};
    font: ${({ theme }) => theme.font['title-l']};
    margin-bottom: 26px;
  }

  li {
    font: ${({ theme }) => theme.font['text-l']};
    line-height: 1.5;
    color: ${({ theme }) => theme.color['white']};

  }
`
