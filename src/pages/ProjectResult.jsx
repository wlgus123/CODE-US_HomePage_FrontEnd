import React from "react";
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

const ProjectResult = () => {
  return (
    <ResultContainer>
      <TitleContainer>
        <Title>프로젝트 결과물</Title>
      </TitleContainer>
      <ProjectContainer>
        {/* 프로젝트 결과물 이미지들 */}
        <ImageBox>a</ImageBox>
        <ImageBox>b</ImageBox>
        <ImageBox>c</ImageBox>
        <ImageBox>d</ImageBox>
      </ProjectContainer>
      <div>
        <p>프로젝트가 더 궁금하시다면?</p>
        <button>더 보기</button>
      </div>
    </ResultContainer>
  );
};

export default ProjectResult;
