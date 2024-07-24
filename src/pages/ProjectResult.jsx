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
  margin: 1.5em 0 1.5em 7em;
  gap: 1.5em;
`;

const ImageBox = styled.div`
  flex-shrink: 0;
`;

const ButtonContainer = styled.div`
  margin: 3em;
  text-align: center;
`;

const Button = styled.button`
  background-color: rgb(0, 0, 0, 0.3);
  cursor: pointer;
  &.arrow {
    position: absolute;
    margin: 7em 0;
    box-shadow: 0 0 5px 0 rgb(255, 255, 255);
    width: 3em;
    height: 3em;
    border-radius: 50%;
  }
  &.prev {
    left: 3em;
  }
  &.next {
    right: 3em;
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

const Img = styled.img`
  width: 20em;
  border-radius: 12px;
`;

const ImageMap = ({ id, img, url }) => {
  return (
    <ImageBox>
      <a href={url} target="_blank">
        <Img src={img} alt={id} />
      </a>
    </ImageBox>
  )
};

const ProjectResult = () => {
  const projects = [
    {
      id: 1,
      img: "/pages/dummyImg1.png",  // a 대신 이미지 주소 넣기
      url: "https://github.com/CODE-U-S",
    },
    {
      id: 2,
      img: "/pages/dummyImg2.png",
      url: "https://github.com/CODE-U-S",
    },
    {
      id: 3,
      img: "/pages/dummyImg3.png",
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
        <Button onClick={prevButton} className="arrow prev">&lt;</Button>
        {projects.map((props) => (
          <ImageMap key={props.id} id={props.id} img={props.img} url={props.url} />
        ))}
        <Button onClick={nextButton} className="arrow next">&gt;</Button>
      </ProjectContainer>
      <ButtonContainer>
        <P>프로젝트가 더 궁금하시다면?</P>
        <Button className="more">더 보기</Button>
      </ButtonContainer>
    </ResultContainer>
  );
};

export default ProjectResult;
