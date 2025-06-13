import styled from 'styled-components'

export const ClienteHeader = styled.header`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;

  h1 {
    font: ${({ theme }) => theme.font['title-xl']};
    color: ${({ theme }) => theme.color['white']};
  }

  button {
    font: ${({ theme }) => theme.font['button-l']};
    background-color: ${({ theme }) => theme.color['yellow-500']};

    padding: 0 18px;
    border-radius: 8px;
    cursor: pointer;

    &:hover{
      background-color: ${({ theme }) => theme.color['yellow-300']};
      transition: .2s;
    }
  }
`

export const ClienteSection = styled.section`
  margin-top: 24px;

  > div:first-of-type {
    display: flex;
    align-items: center;
    gap: 12px;

    span {
      font: ${({ theme }) => theme.font['text-m-bold']};
      color: ${({ theme }) => theme.color['white']};
    }

    input {
      font: ${({ theme }) => theme.font['text-m']};
      color: ${({ theme }) => theme.color['white']};
      background-color: #2B2B23;
      width: 100%;
      max-width: 350px;
      padding: 10px;
      border: 0;
      border-radius: 6px;
    }
  }
`

export const BaseButton = styled.button`
  cursor: pointer;
  color: inherit;
`

export const SolidButton = styled(BaseButton)`
  background-color: #25251D;
  padding: 10px;
  border-radius: 8px;

  &:hover{
      background-color: #3A3A30;
    transition: .2s;
  }
`

export const GhostButton = styled(BaseButton)`
  background-color: transparent;
  padding: 10px;

  &:hover{
    border-radius: 8px;
    background-color: #3A3A30;
    transition: .2s;
  }
`
