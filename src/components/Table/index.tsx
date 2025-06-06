import type { ReactNode } from 'react'
import {
  StyledTable,
  StyledTbody,
  StyledTd,
  StyledTdIcon,
  StyledTh,
  StyledThead,
  StyledTr,
} from './styles'

type CellProps = {
  children: ReactNode
  isIcon?: boolean
}

export const Table = {
  Root: ({ children }: { children: ReactNode }) => <StyledTable>{children}</StyledTable>,

  Header: ({ children }: { children: ReactNode }) => <StyledThead>{children}</StyledThead>,

  Body: ({ children }: { children: ReactNode }) => <StyledTbody>{children}</StyledTbody>,

  Row: ({ children }: { children: ReactNode }) => <StyledTr>{children}</StyledTr>,

  HeadCell: ({ children }: { children?: ReactNode }) => <StyledTh>{children}</StyledTh>,

  Cell: ({ children, isIcon = false }: CellProps) => (
    <StyledTd>{isIcon ? <StyledTdIcon>{children}</StyledTdIcon> : children}</StyledTd>
  ),
}
