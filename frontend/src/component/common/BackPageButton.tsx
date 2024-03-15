import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CSSProperties } from 'react'
import { useNavigate } from 'react-router-dom'

import { BackPageButtonContainer } from '@styled/component/common/BackPageButton'

interface BackPageButton {
  top: CSSProperties['top']
  left: CSSProperties['left']
}
/**
 * BackPageButton은 기본적으로 position:absolute이며, top,left로 부모 요소의 위치를 기준으로 절대 위치를 조절합니다
 * @param top
 * @param left
 */
export default function BackPageButton({ top, left }: BackPageButton) {
  const navigate = useNavigate()
  const onClickBackPageHandler = () => {
    navigate(-1)
  }
  return (
    <BackPageButtonContainer
      onClick={onClickBackPageHandler}
      top={top}
      left={left}
    >
      <FontAwesomeIcon icon={faChevronLeft} size="xl" />
    </BackPageButtonContainer>
  )
}
