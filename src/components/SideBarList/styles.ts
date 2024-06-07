import styled from "styled-components";

interface SideBarMenuContentProps {
  isActive: boolean;
}

export const SideBarMenuContent = styled.div<SideBarMenuContentProps>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: 15px;
  background-color: ${({ isActive }) => (isActive ? "#8D7FC7" : "")};
  color: ${({ isActive }) => (isActive ? "#fff" : "")};
`;
