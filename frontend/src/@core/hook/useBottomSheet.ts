import { useEffect, useRef } from 'react'
import { useSetRecoilState } from 'recoil'

import { bottomSheetShowState } from '@recoil/bottomSheetAtom'

// const BOTTOM_SHEET_HEIGHT = window.innerHeight - MIN_Y // 바텀시트의 세로 길이

/**
 * touchStart
 *  터치한 순간의 y좌표를 기록한다 = initY
 * touchMove
 *  터치 상태로 움직이면 이벤트 객체에 현재 y좌표가 기록된다.
 *  현재 내 손의 y좌표와 initY의 차이를 비교하고 그만큼 bottomsheet의 height를 낯추거나, 높인다.
 *  initY보다 더 높은 위치로는 터치 불가능.
 * touchEnd
 *  터치를 멈출 때의 y좌표를 통해, 원래의 height로 돌아갈지, height를 0으로 만들지 판단.
 */

export function useBottomSheet() {
  const sheet = useRef<HTMLDivElement>(null)
  const setBottomSheetState = useSetRecoilState(bottomSheetShowState)

  // Touch Event 핸들러들을 등록한다.
  useEffect(() => {
    let initY = null

    const sheetRef = sheet.current

    const initHeight = sheetRef.offsetHeight

    const handleTouchStart = (e: TouchEvent) => {
      initY = e.touches[0].clientY
    }
    const handleTouchMove = (e: TouchEvent) => {
      // sheet 위치 갱신.
      const currentY = e.touches[0].clientY
      const diff = currentY - initY
      if (currentY >= initY) {
        sheetRef.style.setProperty('transform', `translateY(${diff}px)`)
      }
    }

    const handleTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY

      initY = endY
      // 일정 값 이상으로 스크롤이 안내려가면 다시 원점 복귀
      if (endY < 400)
        sheetRef.style.setProperty('transform', `translateY(${endY - initY}px)`)
      // 일정 값 이하로 스크롤이 내려가면 아래로 내려가고 언마운트 처리
      else {
        sheetRef.style.setProperty('transform', `translateY(${initHeight}px)`)
        setTimeout(() => {
          setBottomSheetState(false)
        }, 150)
      }
    }

    sheetRef.addEventListener('touchstart', handleTouchStart)
    sheetRef.addEventListener('touchmove', handleTouchMove)
    sheetRef.addEventListener('touchend', handleTouchEnd)

    return () => {
      sheetRef.removeEventListener('touchstart', handleTouchStart)
      sheetRef.removeEventListener('touchmove', handleTouchMove)
      sheetRef.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return { sheet }
}
