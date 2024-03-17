// DOM노드를 입력 받아 해당 DOM 노드의 너비와 높이를 구하는 훅
import { RefObject, useLayoutEffect, useRef } from 'react'

export default function useMeasure(ref: RefObject<HTMLElement>) {
  const widthRef = useRef(0)
  const heightRef = useRef(0)

  useLayoutEffect(() => {
    const { width, height } = ref.current.getBoundingClientRect()
    widthRef.current = width
    heightRef.current = height
  }, [])

  return { widthRef, heightRef }
}
