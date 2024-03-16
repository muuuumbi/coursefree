import ReactDom from 'react-dom'

const BottomSheetPortal = ({ children }) => {
  const el = document.getElementById('bottomSheet')
  return ReactDom.createPortal(children, el)
}

export default BottomSheetPortal
