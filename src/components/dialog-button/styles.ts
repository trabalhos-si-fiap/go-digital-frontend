import * as Dialog from '@radix-ui/react-dialog'
import styled, { keyframes } from 'styled-components'

const overlayShow = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const contentShow = keyframes`
  from { opacity: 0; transform: translate(-50%, -48%) scale(0.96); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`

export const DialogOverlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  animation: ${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const DialogContent = styled(Dialog.Content)`
  background-color: ${({ theme }) => theme.color['brown-500']};
  border-radius: 6px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 500px;
  max-height: 85vh;
  padding: 24px;
  animation: ${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1);

  &:focus {
    outline: none;
  }
`

export const DialogTitle = styled(Dialog.Title)`
  color: ${({ theme }) => theme.color['white']};
  font: ${({ theme }) => theme.font['text-l']};
`

export const DialogClose = styled(Dialog.Close)``

export const SButton = styled.button<{ variant?: 'close' | 'save' }>`
  position: absolute;
  line-height: 0;

  top: 22px;
  right: 24px;
  padding: 2px;
  border-radius: 100%;

  background-color: transparent;
  color: ${({ theme }) => theme.color['white']};

  &:hover {
    background-color: ${({ theme }) => theme.color['brown-700']};
  }
`

export const SNewClientForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 24px;

  div {
    margin-left: auto;
    button {
      font: ${({ theme }) => theme.font['button-l']};
      background-color: ${({ theme }) => theme.color['yellow-500']};

      padding: 6px 18px;
      border-radius: 8px;
      cursor: pointer;

      &:hover{
        background-color: ${({ theme }) => theme.color['yellow-300']};
        transition: .2s;
      }
  }
  }
`

export const SFieldset = styled.fieldset`
  color: ${({ theme }) => theme.color['white']};
  border: 0;
  display: flex;
  flex-direction: column;
`
