import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const ListWrapperItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ListWrapperTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

export const ListItem = styled.h3`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  background-color: #eeeeff;
  color: #323854;
  text-align: center;
  align-content: center;
`;
