import styled from "styled-components";

export const DropDownMenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DropDownMenuContent = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 270px;
  position: absolute;
  z-index: 999;
`;

export const DropDownMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #7362bc;
  border-radius: 15px;
  padding: 5px;
  width: 320px;
  background-color: #fff;
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

export const DropDownMenuDown = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
`;

export const SpanLogout = styled.span`
  color: #008aff;
`;

export const DropDownMenuCenterTitle = styled.div`
  font-weight: 300;
  font-size: 16px;
  text-align: center;
  margin-top: 10px;
`;

export const Hr = styled.hr`
  border: 1px solid #eeeeff;
  margin-top: 10px;
`;
