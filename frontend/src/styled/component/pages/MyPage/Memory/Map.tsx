import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
  flex-direction: column;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ImageWrapper = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const Button = styled.button`
  width: 100px;
  height: 100px;
  margin-top: 5px;
`;

export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  background-color: pink;
  margin-left: auto; 
  margin-right: auto;
  width: 80vw;
`;

export const Comment = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 10px;
  margin-top: 5px;
  border-bottom: 2px solid yellow;
  width: 80vw;
  margin-left: auto; 
  margin-right: auto;
`;