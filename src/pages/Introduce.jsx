import React from "react";
import styled from "styled-components";

const IntroduceContainer = styled.div`
  text-align: center;
`;
const TitleContainer = styled.div``;
const Title = styled.h2`
  margin: 1.5em 0 0.6em 0;
  letter-spacing: 0.1em;
`;
const SubTitle = styled.p`
  color: #aaa;
  font-weight: lighter;
`;
const ActivityContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Activity = styled.div`
  margin: 2.5em 2vmin;
  padding: 2em 1em;
  height: 17em;
  width: 14em;
  background-color: ${(props) => props.theme.colors.darkGray};
  box-shadow: 0 0 15px 0px rgb(255, 255, 255, 0.5);
  border-radius: 15px;
`;
const PContainer = styled.div`
  margin-top: 1.5em;
`;
const H3 = styled.h3`
  font-weight: lighter;
`;
const P = styled.p`
  color: #aaa;
`;
const Img = styled.img`
  &.programmers-logo {
    margin-top: 0.6em;
    width: 10em;
  }
  &.github-logo {
    margin-top: 1em;
    width: 8.5em;
  }
  &.laptop-logo {
    margin-top: 1em;
    width: 10em;
  }
`;

const Introduce = () => {
  return (
    <IntroduceContainer>
      <TitleContainer>
        <Title>동아리 소개</Title>
        <SubTitle>CODE-US 동아리는 이런 활동을 진행합니다!</SubTitle>
      </TitleContainer>
      <ActivityContainer>
        <Activity>
          <H3>1일 1코딩테스트</H3>
          <PContainer>
            <P>개발자 취업 필수 관문 </P>
            <P>누구나 쉽고 빠르게 </P>
            <P>미리 연습하고 대비</P>
          </PContainer>
          <div>
            <Img src="/pages/ProgrammersLogo.png" alt="image1" className="programmers-logo" />
          </div>
        </Activity>
        <Activity>
          <H3>실무 이론 & 실습</H3>
          <PContainer>
            <P>시대의 변화에 대비하고</P>
            <P>새로운 기술들을</P>
            <P>배울 수 있는 기회</P>
          </PContainer>
          <div>
            <Img src="/pages/GithubLogo.png" alt="image2" className="github-logo" />
          </div>
        </Activity>
        <Activity>
          <H3>프로젝트 & 멘토</H3>
          <PContainer>
            <P>포트폴리오를 위한</P>
            <P>여러 프로젝트 진행 및</P>
            <P>피드백 멘토링 활동</P>
          </PContainer>
          <Img src="/pages/LaptopLogo.png" alt="image3" className="laptop-logo" />
        </Activity>
      </ActivityContainer>
    </IntroduceContainer>
  );
};

export default Introduce;
