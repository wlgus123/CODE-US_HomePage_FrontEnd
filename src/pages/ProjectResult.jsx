import React, { useRef, useState } from "react";
import styled from "styled-components";

const ResultContainer = styled.div``;

const TitleContainer = styled.div`
  margin-top: 5em;
  text-align: center;
`;

const Title = styled.h2`
  letter-spacing: 0.1em;
`;

const ProjectContainer = styled.div`
  display: flex;
  padding: 1em;
  margin: 1.5em 0;
  gap: 1.5em;
`;

const ImageBox = styled.div`
  background-color: gray;
  width: 350px;
  height: 250px;
  flex-shrink: 0;
  border-radius: 12px;
`;

const ButtonContainer = styled.div`
  margin: 3em;
  text-align: center;
`;

const Button = styled.button`
  background-color: rgb(0, 0, 0, 0.3);
  &.arrow {
    box-shadow: 0 0 5px 0 rgb(255, 255, 255);
    width: 3em;
    height: 3em;
    border-radius: 50%;
  }
  &.more {
    box-shadow: 0 0 10px 0 rgb(255, 255, 255);
    width: 14em;
    height: 3em;
    border-radius: 50px;
  }
`;

const P = styled.p`
  margin: 2em;
`;

const ImageMap = ({ id, img, url }) => {
  return (
    <ImageBox>{img}</ImageBox>
  )
};

const ProjectResult = () => {
  const projects = [
    {
      id: 1,
      img: "a",  // a 대신 이미지 주소 넣기
      url: "https://github.com/CODE-U-S",
    },
    {
      id: 2,
      img: "b",
      url: "https://github.com/CODE-U-S",
    },
    {
      id: 3,
      img: "c",
      url: "https://github.com/CODE-U-S",
    },
    {
      id: 4,
      img: "d",
      url: "https://github.com/CODE-U-S",
    },
  ];
  const ref = useRef(null);

  const prevButton = () => {
    if (ref.current) ref.current.scrollLeft -= 200;
  };
  const nextButton = () => {
    if (ref.current) ref.current.scrollLeft += 200;
  };

  return (
    <ResultContainer>
      <TitleContainer>
        <Title>프로젝트 결과물</Title>
      </TitleContainer>
      <ProjectContainer>
        {/* styled-component 사용하기 */}
        <Button onClick={prevButton} className="arrow">&lt;</Button>
        {/* 프로젝트 결과물 이미지들: map으로 사용하기 */}
        <Button onClick={nextButton} className="arrow">&gt;</Button>
      </ProjectContainer>
      <ButtonContainer>
        <P>프로젝트가 더 궁금하시다면?</P>
        <Button className="more">더 보기</Button>
      </ButtonContainer>
    </ResultContainer>
  );
};

export default ProjectResult;
