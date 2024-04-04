import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Item, InfoContainer, Title, Couplename } from '@styled/component/pages/MyPage/Users';
import { useEffect, useState } from 'react'; // 추가: useState import
import { requestProfile } from '@api/request/member';
import { Link } from 'react-router-dom';

const Users = () => {
  const [memberNickname, setmemberNickname] = useState([]);
  const [partnerNickname, setpartnerNickname] = useState([]);
  const [memberimage, setmemberimage] = useState<string | null>(null);
  const [partnerImage, setpartnerImage] = useState<string | null>(null);
  const [coupleNickname, setcoupleNickname] = useState([]);
  const [isCouple, setisCouple] = useState([]);
  useEffect(() => {
    requestProfile()
      .then((response) => {
        console.log(response.data)
        setmemberNickname(response.data.nickname);
        setpartnerNickname(response.data.partnerNickname);
        if (typeof response.data.image === 'string') {
          setmemberimage(response.data.image);
        }
        if (typeof response.data.partnerImage === 'string') {
          setpartnerImage(response.data.partnerImage);
        }
        setcoupleNickname(response.data.coupleNickname);
        setisCouple(response.data.couple);
      })
      .catch((error) => {
        console.error('API 호출 에러:', error);
      });
  }, []);

  return (
    <Container>
      <Title>
        커플 정보
        <hr />
      </Title>
      <Couplename>
        {coupleNickname}
      </Couplename>
      <InfoContainer>
        <Item>
          {memberimage ? (
            <img src={memberimage} alt="Member Image" />
          ) : (
            <FontAwesomeIcon icon={faUserCircle} size='5x' />
          )}
          <br />
          <p>{memberNickname}</p>
        </Item>
        <Item>
          {isCouple ? (
            <Link to={'#'}>
              <FontAwesomeIcon icon={faHeart} size='3x' />
            </Link>
          ): (
            <Link to={'/generate-link'}>
              <FontAwesomeIcon icon={faHeart} size='3x' />
            </Link>
          )}
        </Item>
        <Item>
          {isCouple ? (
            <>
              {partnerImage ? (
                <img src={partnerImage} alt="Partner Image" />
              ) : (
                <FontAwesomeIcon icon={faUserCircle} size='5x' />
              )} 
              <br />
              <p>{partnerNickname}</p>
            </>
        ) : (
          <>
            <FontAwesomeIcon icon={faUserCircle} size='5x' />
            <br />
            <p>상대방을 추가해주세요</p>
          </>
        )}
        </Item>

      </InfoContainer>
    </Container>
  );
};

export default Users;
