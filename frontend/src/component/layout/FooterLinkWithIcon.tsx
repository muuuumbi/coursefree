import styled from '@emotion/styled'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

import FlexBox from './FlexBox'
import Spacing from './Spacing'

import TextBox from '@component/common/TextBox'

import { colors } from '@style/colorPalette'

type FooterLinkWithIcon = {
  icon: IconProp
  to?: string
  type?: any
  onClick?: any
  id?: number
  title: string
}

const FooterNavLink = styled(NavLink)`
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: lightgray;
  }
  &.active {
    svg {
      color: ${colors.primary};
    }
    span {
      color: ${colors.primary};
      font-weight: bold;
    }
  }
`
const ArticleFooterNav = styled.button`
  svg {
    width: 1.5rem;
    height: 1.5rem;
    color: lightgray;
  }
`

export default function FooterLinkWithIcon({
  icon,
  to,
  type = 'normal',
  onClick,
  id,
  title,
}: FooterLinkWithIcon) {
  return (
    <>
      {type === 'normal' ? (
        <FooterNavLink to={to}>
          <FlexBox d="column" a="center" j="center">
            <FontAwesomeIcon icon={icon} />
            <Spacing size="2px" />
            <TextBox typography="t8">{title}</TextBox>
          </FlexBox>
        </FooterNavLink>
      ) : (
        <ArticleFooterNav
          onClick={() => {
            onClick(id, type)
          }}
        >
          <FlexBox d="column" a="center" j="center">
            <FontAwesomeIcon icon={icon} />
            <Spacing size="2px" />
            <TextBox typography="t8">{title}</TextBox>
          </FlexBox>
        </ArticleFooterNav>
      )}
    </>
  )
}
