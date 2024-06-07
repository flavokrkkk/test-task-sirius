import styled from "styled-components";

export const SideBarContainer = styled.div`
  background-color: #eeeeff;
  width: 276px;
  border-radius: 20px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 24px;
`;

export const SideBarUpContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: "center";
  margin: 0px 0px 40px 10px;
`;

export const SideBarCenterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const SideBarDownContent = styled.div`
  background: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 15px;
  margin-top: 60px;
`;

export const SideBarDownContentTitle = styled.h4`
  font-weight: 300;
`;

export const SideBarDownContentBody = styled.p`
  font-size: 12px;
`;

export const SideBarDownContentFooter = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const SideBarDownContentImage = styled.div`
  margin: -6px 137px;
  position: absolute;
`;
