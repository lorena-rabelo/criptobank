import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
`;

export const Form = styled.form`
`;

export const Text = styled.h2`
  font-size: 32px;
  color: #cdfc51;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: #cdfc51;
  font-size: 18px;
  margin-top: 16px;
`;
