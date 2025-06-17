import styled from 'styled-components'

export const SDashboardHeader = styled.header`
  margin-top: 80px;

  h1 {
    font: ${({ theme }) => theme.font['title-xl']};
    color: ${({ theme }) => theme.color['white']};

    span {
      color: ${({ theme }) => theme.color['yellow-500']};
    }
  }
`

export const SDashboardContent = styled.section``

export const SCardContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  > div {
    flex: 1;
  }

  @media (max-width: 1023px) {
    flex-direction: column;
  }

  @media (max-width: 639px) {
    gap: 16px;
  }
`

export const SLogContainer = styled.div`
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

  @media (max-width: 639px) {
    h2 {
      font: ${({ theme }) => theme.font['title-m']};
    }

    li {
      font: ${({ theme }) => theme.font['text-m']};
    }
  }
`
