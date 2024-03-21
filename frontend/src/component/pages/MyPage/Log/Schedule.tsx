import styled from '@emotion/styled';
import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { selectedDateState, specialDaysState } from '@recoil/logSpecialDaysAtom';
import { format } from 'date-fns';

// 스타일드 컴포넌트 정의
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border: 1px solid #ccc; /* 테두리 추가 */
`;

const DataSet = styled.div`
    border: 1px solid #ccc; /* 테두리 추가 */
    display: flex;
`;

const Photo = styled.img`
    margin-right: 20px;
`;

const Content = styled.div`
    display: flex;
`;

const ContentLeft = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
    text-align: center;
    justify-content: center;
`;

const ContentRight = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 30px;
`;

const DateText = styled.p`
    font-weight: bold;
`;

const Place = styled.p`
    margin-bottom: 2px;
`;

const Button = styled.button`
    margin-bottom: 10px; /* 버튼과 일정 정보 사이의 간격 조절 */
`;

const ExpandedContent = styled.div`
    
border: 1px solid #ccc; /* 테두리 추가 */
`

const ExpandedPlace = styled.p`
    margin-bottom: 2px;
    
border: 1px solid #ccc; /* 테두리 추가 */
    cursor: pointer; /* 커서를 포인터로 변경하여 클릭 가능하도록 설정 */
`;

const Schedule = () => {
    const selectedDate = useRecoilValue(selectedDateState); // Recoil 상태 사용
    const specialDays = useRecoilValue(specialDaysState); // specialDays 상태 사용

    const noSchedule = '일정이 없습니다';

    // 현재 선택된 날짜를 문자열 형식으로 변환
    const formattedSelectedDate = format(selectedDate, 'yyyy-MM-dd');

    const station = '역삼역';
    // 일정이 있는 경우에 사용할 더미 장소들
    const places = [
        { name: '밸런스포케', type: '포케', hours: '09:00 - 22:00', phone: '010-1234-5678', link: 'https://example.com/place1' },
        { name: '강남 파이낸스 센터 빌딩', type: '쇼핑몰', hours: '09:00 - 18:00', phone: '010-5678-1234', link: 'https://example.com/place2' },
        { name: '카페 413 프로젝트', type: '카페', hours: '10:00 - 20:00', phone: '010-9876-5432', link: 'https://example.com/place3' }
    ];

    // 펼치기/접기 상태 관리
    const [isExpanded, setIsExpanded] = useState(false);

    // 펼치기/접기 버튼 클릭 핸들러
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    // 현재 선택된 날짜에 대한 스케줄 표시
    const scheduleInfo = specialDays[formattedSelectedDate];
    let scheduleContent;

    if (scheduleInfo) {
        // 일정이 있는 경우: 더미 데이터로 사진을 설정
        const photoUrl = '더미 사진 URL';

        scheduleContent = (
            <Container>
                <DateText>{formattedSelectedDate}</DateText>
                <DataSet>
                    <Photo src={photoUrl} alt="일정 사진" />
                    <Content>
                        <ContentLeft>
                            {station} {'데이트'}
                        </ContentLeft>
                        <ContentRight>
                            {places.map((place, index) => (
                                <div key={index}>
                                    <Place>
                                        {place.name}
                                    </Place>
                                </div>
                            ))}
                        </ContentRight>
                    </Content>
                </DataSet>
                <Button onClick={toggleExpand}>
                    {isExpanded ? '접기' : '펼치기'}
                </Button>
                {isExpanded && (
                    <ExpandedContent>
                        {places.map((place, index) => (
                            <div key={index}>
                                <ExpandedPlace onClick={() => window.open(place.link, '_blank')}>
                                    {place.name}
                                    <p>종류: {place.type}</p>
                                    <p>영업시간: {place.hours}</p>
                                    <p>전화번호: {place.phone}</p>
                                </ExpandedPlace>
                            </div>
                        ))}
                    </ExpandedContent>
                )}
            </Container>
        );
    } else {
        // 일정이 없는 경우
        scheduleContent = (
            <p>{noSchedule}</p>
        );
    }

    return (
        <div>
            {scheduleContent}
        </div>
    );
};

export default Schedule;
