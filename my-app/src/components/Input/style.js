import styled from "styled-components";

export const Input = styled.input(
  ({ hasError, darkColor }) => `
  background-color: transparent;
  width: 100%;
  height: 48px;
  border: 2px solid #cdfc51;
  border-radius: 24px;
  color: #cdfc51;
  padding: 8px 16px;
  font-size: 16px;

  &::placeholder {
    color: #cdfc51;
  }

  &:disabled {
    border-color: #828282;
    color: #828282;
    cursor: not-allowed;
  }

  ${darkColor && `border-color: #201f22; color: #201f22;  &::placeholder {
    color: #201f22;
  }`};
  ${hasError && `border-color: red; color: red;`};
`
);

export const Wrapper = styled.div`
    position: relative;
`;
