import FlexBox from '@component/layout/FlexBox'

import {
  LocationMenu,
  LocationMenuButton,
  LocationMenuItem,
  LocationMenuList,
} from '@styled/component/pages/HomePage/SelectLocationButton'

interface SelectLocationButton {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  location: string
}

export default function SelectLocationButton({
  onClick,
  location,
}: SelectLocationButton) {
  return (
    <FlexBox style={{ position: 'relative', zIndex: 2 }}>
      <LocationMenu>
        <LocationMenuButton>{location}</LocationMenuButton>
        <LocationMenuList>
          <LocationMenuItem onClick={onClick}>서울</LocationMenuItem>
          <LocationMenuItem onClick={onClick}>대전</LocationMenuItem>
          <LocationMenuItem onClick={onClick}>대구</LocationMenuItem>
          <LocationMenuItem onClick={onClick}>부산</LocationMenuItem>
          <LocationMenuItem onClick={onClick}>울산</LocationMenuItem>
        </LocationMenuList>
      </LocationMenu>
    </FlexBox>
  )
}
