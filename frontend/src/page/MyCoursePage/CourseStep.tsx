/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'

import FlexBox from '@component/layout/FlexBox'
import Path from '@component/pages/MyCoursePage/Path'
import Step from '@component/pages/MyCoursePage/Step'

const Container = css``
/**
 * 1. 장소의 개수에 맞춰 Node 생성
 * 2. path는 장소의 개수 -1
 * 3. 최초 노드와 path는 회색
 * 4.
 */
const DUMMY = [1, 2, 3, 4, 5]

export default function CourseStep() {
  const [currStep, setCurrStep] = useState(0)
  return (
    <>
      <FlexBox a="center" css={{ Container }}>
        {DUMMY.map((_, i) => {
          if (i == 0) return <Step />
          return (
            <>
              <Path />
              <Step />
            </>
          )
        })}
      </FlexBox>
    </>
  )
}
