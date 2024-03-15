import { useState } from 'react'
import { useRecoilState } from 'recoil'

import { bottomSheetShowState } from '@recoil/bottomSheetAtom'

export default function useBottomSheetState(initId: number) {
  const [bottomSheetState, setBottomSheetState] =
    useRecoilState(bottomSheetShowState)

  const [requestId, setRequestId] = useState(initId)

  function onClickBottomSheetHandler(id: number) {
    setBottomSheetState(!bottomSheetState)
    setRequestId(id)
  }
  return {
    bottomSheetState,
    onClickBottomSheetHandler,
    requestId,
    setBottomSheetState,
  }
}
