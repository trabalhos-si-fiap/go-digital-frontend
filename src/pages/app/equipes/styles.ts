import styled from 'styled-components'

export const SEquipesHeader = styled.header`
  margin-top: 80px;

  h1 {
    font: ${({ theme }) => theme.font['title-xl']};
    color: ${({ theme }) => theme.color['white']};
  }
`

export const SEquipesContent = styled.section`
  color: ${({ theme }) => theme.color['yellow-500']};
`
