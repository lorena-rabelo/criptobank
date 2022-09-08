import styled from "styled-components";

export const Input = styled.input`
  background-color: transparent;
  width: 300px;
  height: 48px;
  border: 2px solid #cdfc51;
  border-radius: 24px;
  color: #cdfc51;
  padding: 8px 16px;
  font-size: 16px;

  &::placeholder {
    color: #cdfc51;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;
