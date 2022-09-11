import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;

  & input{
    margin-bottom: 16px;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 48px;
  height: 163px;
`;

export const Text = styled.h2`
  font-size: 32px;
  color: #cdfc51;
`;

export const ErrorText = styled.span`
  color: #ff675d;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: #cdfc51;
  font-size: 18px;
  margin-top: 16px;
`;
