import { CSSProperties, useEffect } from 'react'

import { useBottomSheet } from '@hook/useBottomSheet'

import { BottomSheetAnimation } from '@util/animation'

import { Container, HandleBar } from '@styled/component/layout/BottomSheet'

type BottomSheet = {
  height: CSSProperties['height']
  data?: any
}
/**
 *   
TODO- 레이아웃 작업
    height는 props로 설정 가능 o
    배경은 흰색 o
    border-radius-top만 따로 설정 o
    HandleBar 존재 o
TODO - 애니메이션 작업
    마운트 시 아래에서 위로 0.5초만에 올라온다 o
    overlay 부분을 클릭하면 즉시 사라진다 o
    touchStart이벤트가 작동하면, maxHeight를 벗어나지 않는 선에서 Container의 height의 값이 동적으로 바뀐다 o
    touchEnd이벤트가 작동하면 현재 Container의 height 값을 바탕으로 open, close 상태가 결정된다 o
    드래그로 아래로 끌면 일정 스크롤 범위를 넘으면 0.5초만에 위에서 아래로 사라진다
        
 * @param height : bottomSheet의 높이
 * @returns
 */
export default function BottomSheet({ height = '300px', data }: BottomSheet) {
  const { sheet } = useBottomSheet()

  useEffect(() => {
    // 마운트 될 때 애니메이션 적용
    sheet.current?.animate(
      BottomSheetAnimation.up(height),
      BottomSheetAnimation.options,
    )
  }, [])
  return (
    <Container ref={sheet} height={height}>
      <HandleBar>{data}</HandleBar>
    </Container>
  )
}
