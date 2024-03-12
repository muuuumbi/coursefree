import styled from '@emotion/styled'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

import { colors } from '@style/colorPalette'

type FooterLinkWithIcon = {
  icon: IconProp
  to: string
}

const FooterNavLink = styled(NavLink)`
  svg {
    width: 1.7rem;
    height: 1.7rem;
    color: lightgray;
  }
  &.active {
    svg {
      color: ${colors.primary};
    }
  }
`

export default function FooterLinkWithIcon({ icon, to }: FooterLinkWithIcon) {
  return (
    <FooterNavLink to={to}>
      <FontAwesomeIcon icon={icon} />
    </FooterNavLink>
  )
}
