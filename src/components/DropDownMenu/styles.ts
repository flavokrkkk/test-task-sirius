import styled from "styled-components";

interface DropDownMenuCenterUserProps {
  isUserActive: boolean;
}

export const DropDownMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DropDownMenuContent = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 250px;
  position: absolute;
`;

export const DropDownMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #7362bc;
  border-radius: 15px;
  padding: 5px;
  width: 320px;
`;

export const DropDownMenuCross = styled.div`
  display: flex;
  justify-content: end;
`;

export const DropDownMenuCenter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const DropDownMenuCenterUser = styled.div<DropDownMenuCenterUserProps>`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: ${({ isUserActive }) => isUserActive && "#eeeeff"};
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 15px;
`;

export const DropDownMenuDown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const Span = styled.span`
  font-size: 12px;
  cursor: pointer;
`;

export const SpanLogout = styled.span`
  color: #008aff;
`;

export const DropDownMenuCenterTitle = styled.div`
  margin-bottom: 25px;
  font-weight: 300;
  font-size: 14px;
`;

export const Hr = styled.hr`
  border: 1px solid #eeeeff;
  margin-top: 10px;
`;
