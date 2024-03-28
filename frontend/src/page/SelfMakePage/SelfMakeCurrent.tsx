import { MakingCourseContext } from '@context/index'
import { css } from '@emotion/react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import Button from '@component/common/Button'
import Input from '@component/common/Input'
import TextBox from '@component/common/TextBox'
import KakaoMap from '@component/kakaoMap/KakaoMap'
import FlexBox from '@component/layout/FlexBox'
import Spacing from '@component/layout/Spacing'
import SelectedPlaceList from '@component/pages/SelfMakePage/SelectedPlaceList'

import useMeasure from '@hook/useMeasure'

const StickyMap = css`
  position: sticky;
  top: 0px;
  /* border-radius: 10px;
  overflow: hidden; */
`

/** @jsxImportSource @emotion/react */
export default function SelfMakeCurrent() {
  const { dateCourse, station } = useContext(MakingCourseContext)
  const { widthState, ref: measureRef } = useMeasure()
  // 현재 진행중인 코스 저장
  // const [courseInfo, setCourseInfo] = useState(0)
  return (
    <>
      <FlexBox j="center" d="column" p="10px" w="100%" ref={measureRef}>
        <TextBox typography="t2">역삼</TextBox>
        <FlexBox a="center" j="space-between">
          <TextBox fontWeight="bold">
            코스 이름 :
            <Input
              placeholder="생성할 코스 이름을 입력해주세요"
              width={'220px'}
            />
          </TextBox>

          <Button bgColor="pink400">코스 완성</Button>
        </FlexBox>
        <Button
          css={css`
            position: fixed;
            bottom: 5rem;
            width: ${widthState - 20}px;
          `}
        >
          <Link to="../search">장소 추가하러 가기</Link>
        </Button>
      </FlexBox>
      <FlexBox css={StickyMap}>
        <KakaoMap width="100%" height="200px" dateCourse={dateCourse} />
      </FlexBox>
      <Spacing size="7px" />
      {/* 현재까지 저장된 dateCourse를 넘겨주기 */}
      <SelectedPlaceList dateCourse={dateCourse} />
    </>
  )
}
