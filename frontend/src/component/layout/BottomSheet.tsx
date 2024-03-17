
import { useBottomSheet } from '@hook/useBottomSheet'

import TextBox from '@component/common/TextBox'
import {
  Container,
  HandleBar,
  HandleBarContainer,
} from '@styled/component/layout/BottomSheet'
import { BottomSheet } from '@type/BottomSheet'
import BackDrop from './Backdrop'

/**
 * @param children: bottomSheet 내부에 담길 다양한 컨텐츠의 컴포넌트
 * @param title : bottomSheet에 담길 컨텐츠의 제목
 * @returns 
 */
export default function BottomSheet({
  children,
  title = 'bottomSheet',
  handler
}: BottomSheet) {

  const  { sheet, handle} = useBottomSheet(handler)

  return (
   <BottomSheetPortal> 
    <BackDrop onClick={handler}> 
    </BackDrop> 
      <Container ref={sheet}>
    <HandleBarContainer ref={handle} >
      <HandleBar />
      <TextBox typography="t7" fontWeight="bold">
        {title}
      </TextBox>
    </HandleBarContainer>
    {children}
  </Container>
  </BottomSheetPortal>
  )
}

import ReactDom from 'react-dom'

const BottomSheetPortal = ({ children }) => {
  const el = document.getElementById('bottomSheet')
  return ReactDom.createPortal(children, el)
}

