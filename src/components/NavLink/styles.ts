import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const SNavLink = styled(NavLink)`
  &[data-current='true'] {
    font-weight: 700;
  }
`
