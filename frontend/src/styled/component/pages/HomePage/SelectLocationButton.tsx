import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const LocationMenuButton = styled(MenuButton)`
  color: var(--primary);
  border-radius: 4px;
  background-color: white;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 999;
`
export const LocationMenuList = styled(MenuList)``
export const LocationMenuItem = styled(MenuItem)`
  font-size: 1.2rem;
`
export const LocationMenu = styled(Menu)``
