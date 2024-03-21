import { Outlet } from 'react-router-dom'

import TitleBar from '@component/common/TitleBar'

export default function SelfMakePage() {
  return (
    <>
      <TitleBar hasBackPage hasBottomLine title="직접 만들기" />
      {/* <Spacing size="10px" /> */}
      <Outlet />
    </>
  )
}
