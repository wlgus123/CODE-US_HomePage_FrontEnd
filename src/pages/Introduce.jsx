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
const Activitys = styled.div`
  margin: 2.5em 2vmin;
  padding: 2.3em 1em;
  height: 14em;
  width: 14em;
  background-color: ${(props) => props.theme.colors.darkGray};
  box-shadow: 0 0 15px 0px rgb(255, 255, 255, 0.5);
  border-radius: 15px;
`;
const PContainer = styled.div`
  margin-top: 1.4em;
`;
const H3 = styled.h3`
  font-weight: lighter;
  font-size: 16pt;
`;
const P = styled.p`
  color: #aaa;
  white-space: pre-line;
`;
const Img = styled.img`
  &.image1 {
    margin-top: 1.6em;
    width: 10em;
  }
  &.image2 {
    margin-top: 2em;
    width: 8.5em;
  }
  &.image3 {
    margin-top: 1.7em;
    width: 11em;
  }
`;

const Activity = ({ id, title, ment, image }) => {
  return (
    <Activitys>
      <H3>{title}</H3>
      <PContainer>
        <P>{ment}</P>
      </PContainer>
      <div>
        <Img src={image} alt={"image" + id} className={"image" + id} />
      </div>
    </Activitys>
  );
};

const Introduce = () => {
  const introduceCodeus = [
    {
      id: 1,
      title: "1일 1코딩테스트",
      ment: "개발자 취업 필수 관문\n누구나 쉽고 빠르게\n미리 연습하고 대비",
      image: "/pages/ProgrammersLogo.png",
    },
    {
      id: 2,
      title: "실무 이론 & 실습",
      ment: "시대의 변화에 대비하고\n새로운 기술들을\n배울 수 있는 기회",
      image: "/pages/GithubLogo.png",
    },
    {
      id: 3,
      title: "프로젝트 & 멘토",
      ment: "포트폴리오를 위한\n여러 프로젝트 진행 및\n피드백 멘토링 활동",
      image: "/pages/LaptopLogo.png",
    },
  ];

  return (
    <IntroduceContainer>
      <TitleContainer>
        <Title>동아리 소개</Title>
        <SubTitle>CODE-US 동아리는 이런 활동을 진행합니다!</SubTitle>
      </TitleContainer>
      <ActivityContainer>
        {/* 동아리 활동 */}
        {introduceCodeus.map((props) => (
          <Activity
            key={props.id}
            id={props.id}
            title={props.title}
            ment={props.ment}
            image={props.image}
          />
        ))}
      </ActivityContainer>
    </IntroduceContainer>
  );
};

export default Introduce;
