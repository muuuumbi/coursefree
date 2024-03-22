import FlexBox from '@component/layout/FlexBox';
import KakaoMap from '@component/common/KakaoMap';
import { useState } from 'react';
import { positions } from '@mocks/dummy';
import { Container, ImageContainer, ImageWrapper, Image, Button, TagContainer, Tag, CommentContainer, Comment } from '@styled/component/pages/MyPage/Memory/Map';

const Map = () => {
  const [currentSelectPlace, setCurrentSelectPlace] = useState({
    title: '',
    date: '',
    images: [],
    tags: [],
    comments: []
  });

  function onClickMarkerHandler(data: any) {
    setCurrentSelectPlace(data);
  }

  return (
    <Container>
      <FlexBox css={{ position: 'sticky', top: 0 }}>
        <KakaoMap
          width="100vw"
          height="50vh"
          data={positions}
          onClickMarkerHandler={onClickMarkerHandler}
        />
      </FlexBox>
      {currentSelectPlace.title !== '' ? (
        <div>
          <p>장소 : {currentSelectPlace.title}</p>
          <p>날짜 : {currentSelectPlace.date}</p>
          <p>이미지 :</p>
          <ImageContainer>
            {currentSelectPlace.images.map((image, index) => (
              <ImageWrapper key={index}>
                <Image src={image} alt={`image-${index}`} />
              </ImageWrapper>
            ))}
            {currentSelectPlace.images.length > 0 && (
              <ImageWrapper>
                <Button>+</Button>
              </ImageWrapper>
            )}
          </ImageContainer>
          <p>태그 :</p>
          <TagContainer>
            {currentSelectPlace.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
            <Tag>+</Tag>
          </TagContainer>
          <p>코멘트 :</p>
          <CommentContainer>
            {currentSelectPlace.comments.map((comment, index) => (
              <Comment key={index}>{comment}</Comment>
            ))}
            <Comment>+</Comment>
          </CommentContainer>
        </div>
      ) : (
        <p>장소를 선택해 주세요</p>
      )}
    </Container>
  );
};

export default Map;
