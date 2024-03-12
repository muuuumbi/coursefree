import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

export default function BackPageButton() {
  const navigate = useNavigate()
  const onClickBackPageHandler = () => {
    navigate(-1)
  }
  return (
    <button onClick={onClickBackPageHandler}>
      <FontAwesomeIcon icon={faChevronLeft} size="1x" />
    </button>
  )
}
