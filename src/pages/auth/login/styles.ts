import styled from 'styled-components'
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 127px;

  > img {
    width: 180px;
    margin-top: 125px;
  }
`

export const LoginForm = styled.form`
  background-color: ${({ theme }) => theme.color['brown-500']};
  padding: 24px;
  border-radius: 8px;

  width: 100%;
  max-width: 384px;

  display: flex;
  flex-direction: column;
  gap: 24px;

  > div {
    display: flex;
    flex-direction: column;

    font: ${({ theme }) => theme.font['text-l']};

    label {
      color: ${({ theme }) => theme.color['yellow-500']}
    }

    input {
      border-radius: 8px;
      border: 0;
      outline: 0;
      width: 100%;
      padding: 6px 16px;

      font: ${({ theme }) => theme.font['text-m']};

    }
  }

  > button:first-of-type {
    font: ${({ theme }) => theme.font['text-m']};
    color: ${({ theme }) => theme.color['white']};
    text-align: left;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      opacity: 0.75;
    }
  }

  > button:last-of-type {
    font: ${({ theme }) => theme.font['button-l']};
    color: ${({ theme }) => theme.color['white']};
    background-color: #2c2c2c;
    padding: 12px 0;
    border-radius: 8px;
    cursor: pointer;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color['yellow-500']};

    &:hover {
      opacity: 0.75;
    }
  }
`
