import styled from 'styled-components'

export const SCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;

  background-color: ${({ theme }) => theme.color['brown-500']};
  border-radius: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 24px;

    span {
      background-color: ${({ theme }) => theme.color['yellow-500']};
      line-height: 0;
      padding: 12px;
      border-radius: 100%;
    }

    h3 {
      font: ${({ theme }) => theme.font['text-l-bold']};
      color: ${({ theme }) => theme.color['white']};
    }
  }

  > span {
    font: ${({ theme }) => theme.font['title-xl']};
    color: ${({ theme }) => theme.color['yellow-500']};
  }
`
