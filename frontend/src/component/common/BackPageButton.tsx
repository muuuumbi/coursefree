import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

import { BackPageButtonContainer } from '@styled/component/common/BackPageButton'

interface BackPageButton {}

export default function BackPageButton() {
  const navigate = useNavigate()

  const onClickBackPageHandler = () => {
    navigate(-1)
  }
  return (
    <BackPageButtonContainer onClick={onClickBackPageHandler}>
      <FontAwesomeIcon icon={faChevronLeft} size="xl" />
    </BackPageButtonContainer>
  )
}
