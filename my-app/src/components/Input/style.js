import styled from "styled-components";

export const Input = styled.input(
  ({ hasError }) => `
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

  ${hasError && `border-color: red; color: red;`}
`
);

export const Wrapper = styled.div`
    position: relative;
`;
