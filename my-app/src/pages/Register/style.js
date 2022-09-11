import styled from "styled-components";
// import { Link } from "react-router-dom";
import Input from "../../components/Input";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  width: 60vw;
`;

export const Form = styled.form``;

export const Text = styled.h2`
  font-size: 32px;
  color: #cdfc51;
`;

export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* grid-template-rows: 1fr 1fr; */
  gap: 24px;
  margin-bottom: 40px;
`;

export const Name = styled.div`
  grid-column: 1/6;
`;

export const LastNames = styled.div`
  grid-column: 6/13;
`;

export const Cpf = styled.div`
  grid-column: 1/5;
`;

export const Birthday = styled.div`
  grid-column: 5/8 ;
`;

export const Cep = styled.div`
  grid-column: 1/4;
`;

export const Address = styled.div`
  grid-column: 4/13;
`;

export const Number = styled.div`
  grid-column: 1/3;
`;

export const Complement = styled.div`
  grid-column: 3/7;
`;

export const City = styled.div`
  grid-column: 7/11;
`;

export const State = styled.div`
  grid-column: 11/13;
`;

export const Email = styled.div`
  grid-column: 1 /5 ;
`;

export const Password = styled.div`
  grid-column: 5/9;
`;

export const ConfirmPassword = styled.div`
  grid-column: 9/13;
`;


// export const CustomLink = styled(Link)`
//   text-decoration: none;
//   color: #cdfc51;
//   font-size: 18px;
//   margin-top: 16px;
// `;
