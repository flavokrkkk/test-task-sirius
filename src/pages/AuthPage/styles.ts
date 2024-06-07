import styled from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
`;

export const AuthContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FormHeader = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

export const FormTitle = styled.h1`
  font-size: 40px;
  font-weight: 400;
  margin-top: 10px;
`;

export const AuthLangWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const ActiveLang = styled.div`
  color: #decfff;
`;
