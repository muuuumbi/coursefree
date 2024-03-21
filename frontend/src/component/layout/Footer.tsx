import {
  faHeart,
  faHouse,
  faPen,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

import FlexBox from '@component/layout/FlexBox'

import { Container } from '@styled/component/layout/Footer'

import FooterLinkWithIcon from './FooterLinkWithIcon'

export default function Footer() {
  return (
    <Container>
      <FlexBox j="space-around" a="center" w="100%" h="100%">
        <FooterLinkWithIcon icon={faHouse} to="/" />
        <FooterLinkWithIcon icon={faSearch} to="/home" />
        <FooterLinkWithIcon icon={faHeart} to="/home" />
        <FooterLinkWithIcon icon={faPen} to="/home" />
        <FooterLinkWithIcon icon={faUser} to="/MyPage" />
      </FlexBox>
    </Container>
  )
}
