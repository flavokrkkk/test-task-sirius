import styled from "styled-components";

interface LessContentProps {
  isLastDate: boolean;
}

export const LessContent = styled.div<LessContentProps>`
  display: flex;
  border: 1px solid #ececec;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({ isLastDate }) => (isLastDate ? "#bbe7b9" : "#fff")};
  justify-content: space-between;
`;
export const LessIconBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const LessIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
`;

export const LessIconTitle = styled.div`
  font-size: 12px;
`;
