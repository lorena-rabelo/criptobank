import styled from "styled-components";

export const BaseButton = styled.button`
  width: 300px;
  height: 48px;
  background-color: ${(props) => (props.isDisabled ? "#828282;" : "#cdfc51")};
  border-radius: 24px;
  color: ${(props) => (props.isDisabled ? "white" : "#201f22")};
  padding: 8px 16px;
  font-size: 16px;
  border: none;
`;
