import styled from "styled-components";

export const Form = styled.form`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 12px;
`;

export const CheckboxWrapper = styled.div`
  margin-bottom: 15px;
`;

export const FormLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormLinksWrapperDown = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${({ isPathName }) => (isPathName ? "60px" : "30px")};
  gap: 10px;
  align-items: center;
`;
