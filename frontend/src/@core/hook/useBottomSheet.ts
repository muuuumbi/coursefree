import { useEffect, useRef } from 'react'
import { useSetRecoilState } from 'recoil'

import { bottomSheetShowState } from '@recoil/bottomSheetAtom'

/**
 * Handle Container의 터치로 bottomsheet 전체의 높이를 통제한다.
 * touchStart
 *  터치한 순간의 y좌표를 기록한다 = initY
 * touchMove
 *  터치 상태로 움직이면 이벤트 객체에 현재 bottomsheet의 y좌표가 기록된다.
 *  현재 내 손의 y좌표와 initY의 차이를 비교하고 그만큼 bottomsheet의 height를 낯추거나, 높인다.
 *  initY보다 더 높은 위치로는 터치 불가능.
 * touchEnd
 *  터치를 멈출 때의 y좌표를 통해, 원래의 height로 돌아갈지, height를 0으로 만들지 판단.
 */

export function useBottomSheet() {
  const sheet = useRef<HTMLDivElement>(null)
  const handle = useRef<HTMLDivElement>(null)
  const setBottomSheetState = useSetRecoilState(bottomSheetShowState)
  // Touch Event 핸들러들을 등록한다.
  useEffect(() => {
    let initY = null // handleToocuh 이벤트 발생 시 할당 될 값
    const sheetRef = sheet.current
    const handleRef = handle.current
    const initHeight = sheetRef.offsetHeight // DOM엘리먼트의 초기 높이값

    const handleTouchStart = (e: TouchEvent) => {
      e.stopPropagation()
      initY = e.touches[0].clientY
      console.log('touchstart')
    }
    const handleTouchMove = (e: TouchEvent) => {
      e.stopPropagation()
      // sheet 위치 갱신.
      const currentY = e.touches[0].clientY
      const diff = currentY - initY
      if (currentY >= initY) {
        sheetRef.style.setProperty('transform', `translateY(${diff}px)`)
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      e.stopPropagation()
      const endY = e.changedTouches[0].clientY

      // initY = endY
      // 일정 값 이상으로 스크롤이 안내려가면 다시 원점 복귀
      if (endY < 400) sheetRef.style.setProperty('transform', `translateY(0px)`)
      // 순간적으로 툭 눌렀다가 떼는 경우는 사라지지 않도록 예외 처리
      else if (endY >= 400 && Math.abs(initY - endY) < 50) {
        sheetRef.style.setProperty('transform', `translateY(0px)`)
      }
      // 일정 값 이하로 스크롤이 내려가면 아래로 내려가고 언마운트 처리
      else {
        sheetRef.style.setProperty('transform', `translateY(${initHeight}px)`)
        setTimeout(() => {
          setBottomSheetState(false)
        }, 150)
      }
    }

    handleRef.addEventListener('touchstart', handleTouchStart)
    handleRef.addEventListener('touchmove', handleTouchMove)
    handleRef.addEventListener('touchend', handleTouchEnd)

    return () => {
      handleRef.removeEventListener('touchstart', handleTouchStart)
      handleRef.removeEventListener('touchmove', handleTouchMove)
      handleRef.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return { sheet, handle }
}
