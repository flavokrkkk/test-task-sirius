import styled from "styled-components";

interface NavBarContentProps {
  isPathName: boolean;
}

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const NavBarContent = styled.div<NavBarContentProps>`
  height: 66px;
  display: flex;
  box-shadow: 24;
  justify-content: ${({ isPathName }) =>
    isPathName ? "space-between" : "end"};
  align-items: center;
  gap: 16px;
  box-shadow: 0 5px 1px #eeeeff;
  border-radius: 20px;
  padding: 30px;
`;

export const NavBarContentProfile = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavBarTitle = styled.h2`
  font-weight: 400;
`;

export const Span = styled.span`
  color: #7362bc;
`;
