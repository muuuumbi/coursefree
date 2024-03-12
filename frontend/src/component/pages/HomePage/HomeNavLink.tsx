import { NavLink } from 'react-router-dom'

import TextBox from '@component/common/TextBox'
import Spacing from '@component/layout/Spacing'

import { Container } from '@styled/component/pages/HomePage/HomeNavLink'

export default function HomeNavLink() {
  return (
    <Container>
      <Spacing d="horizontal" />
      <NavLink to="/">
        <TextBox typography="t2" color="grey" fontWeight="bold">
          HOT
        </TextBox>
      </NavLink>
      <Spacing d="horizontal" />
      <NavLink to="discover">
        <TextBox typography="t2" color="grey">
          DISCOVER
        </TextBox>
      </NavLink>
    </Container>
  )
}
