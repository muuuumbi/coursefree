// DOM노드를 가리키는 ref객체를 입력 받아 해당 DOM 노드의 너비와 높이를 구하는 훅
import { useLayoutEffect, useRef, useState } from 'react'

export default function useMeasure() {
  const ref = useRef(null)
  const [widthState, setWidthState] = useState(0)
  const [heightState, setHeightState] = useState(0)

  useLayoutEffect(() => {
    const { width, height } = ref.current.getBoundingClientRect()
    setWidthState(width)
    setHeightState(height)
  }, [])

  return { widthState, heightState, ref }
}
