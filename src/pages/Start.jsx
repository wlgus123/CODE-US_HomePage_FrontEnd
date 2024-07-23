import React from "react";
import styled from "styled-components";

const ApplicantContainer = styled.div`
  text-align: center;
  height: 400px;
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  background-image: url("/pages/ApplicationPageBackground.png");
  background-size: cover;
  width: 50em;
  height: 100%;
  border-radius: 50%;
  box-shadow: inset 0px 0px 2em 2em #0e0e0e;
`;

const TextContainer = styled.div`
  padding: 5em 0 4em 0;
  color: white;
`;

const ButtonContainer = styled.div``;

const P = styled.p`
  margin-top: 2rem;
  font-weight: lighter;
  font-size: 14pt;
  letter-spacing: 0.1em;
`;

const H1 = styled.h1`
  padding: 1rem;
  font-weight: 900;
  font-size: 35pt;
`;

const Span = styled.span`
  color: ${(props) => props.theme.colors.yellow};
`;

const Button = styled.button`
  background-color: black;
  padding: 0.7rem;
  width: 12em;
  border-radius: 100px;
  font-size: 12pt;
  color: white;
  box-shadow: 0 0 10px 0 rgb(255, 255, 255);
  cursor: pointer;
`;

const Start = () => {
  return (
    <ApplicantContainer>
      <ImageContainer>
        <TextContainer>
          <P>실무의 길로, 함께 나아가는 IT 동아리</P>
          <H1>
            <Span>4</Span>기 멤버를 찾습니다
          </H1>
        </TextContainer>
        <ButtonContainer>
          <Button>지원하기</Button>
        </ButtonContainer>
      </ImageContainer>
    </ApplicantContainer>
  );
};

export default Start;
