import styled from 'styled-components'

export const SLayoutHeader = styled.header`
  background-color: ${({ theme }) => theme.color['yellow-500']};
`

export const SNav = styled.nav<{ $isOpen: boolean }>`
  max-width: 75rem;
  width: 100%;


  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 32px;

  padding: 24px 16px;
  margin: 0 auto;

  font: ${({ theme }) => theme.font['text-m']};

  a {
    line-height: 0;
  }

  @media (max-width: 1023px) {
    justify-content: space-between;
    padding: 24px 16px;

    a:first-of-type {
      display: none;
    }
  }

  @media (max-width: 639px) {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    ${({ $isOpen }) => !$isOpen && 'display: none;'}
  }
`

export const SProfileButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  line-height: 0;

  margin-left: auto;

  @media (max-width: 1023px) {
    margin-left: 0;
  }

  @media (max-width: 639px) {
  }
`

export const SHamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;


  @media (max-width: 639px) {
    display: block;
    padding: 24px 16px;
  }
`

export const SLayoutContainer = styled.main`
  width: 75rem;
  padding: 0 16px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color['brown-700']};

  @media (max-width: 1200px) {
    width: auto;
  }

  @media (max-width: 1023px) {
  }

  @media (max-width: 639px) {
  }
`
