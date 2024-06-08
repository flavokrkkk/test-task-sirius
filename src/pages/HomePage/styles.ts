import styled from "styled-components";

export const HomeContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const HomeContentUp = styled.div`
  display: flex;
  height: 248px;
  gap: 30px;
  margin-bottom: 30px;
`;

export const HomeWrapperBunner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 35px;
  gap: 20px;
  background-color: #7362bc;
  color: white;
  width: 566px;
  border-radius: 30px;
`;

export const BunnerWrapper = styled.div`
  width: 340px;
`;

export const BunnerTitle = styled.h2`
  font-weight: 400;
  font-size: 32px;
`;

export const BodyWrapper = styled.div`
  width: 300px;
`;

export const HomeWrapperTimer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 20px;
  padding: 30px;
  width: 430px;
  background-color: #fff1cb;
  border-radius: 30px;
`;

export const HomeTimerTitle = styled.div`
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const TimerTitle = styled.h1`
  text-align: center;
  font-weight: 400;
`;

export const HomeWrapperLesson = styled.div`
  display: flex;
`;

export const ContentLesson = styled.div`
  border: 1px solid #7362bc;
  width: 350px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 30px;
`;

export const LessonTitle = styled.h2`
  font-weight: 400;
  text-align: start;
`;

export const LessonList = styled.div`
  height: 200px;
  overflow: auto;
`;
