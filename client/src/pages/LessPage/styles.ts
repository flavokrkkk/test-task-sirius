import styled from "styled-components";
import { Select } from "antd";

export const LessContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const LessUpContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const LessSelect = styled(Select)`
  width: 253px;
`;

export const ButtonWrapper = styled.div`
  width: 344px;
`;

export const LessFilter = styled.div`
  border: 2px solid #decfff;
  width: 255px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
