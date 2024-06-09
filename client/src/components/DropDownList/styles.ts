import styled from "styled-components";

interface DropDownMenuCenterUserProps {
  isUserActive: boolean;
}

export const DropDownMenuCenterUser = styled.div<DropDownMenuCenterUserProps>`
  display: flex;
  align-items: center;
  gap: 25px;
  background-color: ${({ isUserActive }) =>
    isUserActive ? "#eeeeff" : "#fff"};
  margin-bottom: 15px;
  padding: 5px;
  border-radius: 15px;
`;

export const Span = styled.span`
  font-size: 12px;
  cursor: pointer;
`;
