import styled from 'styled-components'

export const StyledTable = styled.table`
  margin-top: 12px;
  border-collapse: collapse;
  background-color: #2B2B23;
  width: 100%;
  text-align: left;
  color: ${({ theme }) => theme.color['white']};

  th:nth-child(1),
  td:nth-child(1) {
    width: 80px;
  }

  th:nth-child(2),
  td:nth-child(2) {
    width: 344px;
  }

  th:nth-child(3),
  td:nth-child(3) {
    width: auto;
  }

  th:nth-child(4),
  td:nth-child(4) {
    width: 90px;
    white-space: nowrap;
  }

  border-radius: 8px;
`

export const StyledThead = styled.thead`
  font: ${({ theme }) => theme.font['text-m-bold']};
`

export const StyledTbody = styled.tbody`
  font: ${({ theme }) => theme.font['text-m']};

  tr:last-child {
    border-radius: 8px;
  }
`

export const StyledTr = styled.tr`
  box-shadow: 0 1px 0 0 #525252;
`

export const StyledTh = styled.th`
  padding: 10px 0;
`

export const StyledTd = styled.td`
  padding: 10px 0;
`

export const StyledTdIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-right: 20px;
`
