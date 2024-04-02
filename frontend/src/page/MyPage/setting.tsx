import { useState, useEffect } from 'react';

import BackDrop from '@component/layout/Backdrop';
import BottomSheet from '@component/layout/BottomSheet';
import Footer from '@component/layout/Footer';
import Section from '@component/layout/Section';
import TitleBar from '@component/common/TitleBar';
import Setting from '@component/pages/MyPage/setting/Setting';
import { requestGenerateLink } from '@api/request/member';

function MyPage() {
  const [state, setState] = useState(false);

  useEffect(()=>{
    // axios instance를 활용해서 api 호출
    requestGenerateLink().then((response)=>{
      // 요청 성공 시 해야할 일 하기
      console.log(response.data);
    }).catch((e)=>{
      console.error('API 호출 에러:', e);
    })
    
  },[])
  function onClickBottomSheetHandler() {
    setState(!state);
  }

  return (
    <>
      <Section>
        <TitleBar title="설정" hasBackPage />
        <Setting />
      </Section>
      <Footer />
      {state && (
        <BackDrop onClick={onClickBottomSheetHandler}>
          <BottomSheet height="500px" />
        </BackDrop>
      )}
    </>
  );
}

export default MyPage;
