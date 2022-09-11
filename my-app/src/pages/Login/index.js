import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

import * as S from "./style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = () => console.log("submit");

  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.Text>Faça seu login</S.Text>
        <S.InputWrapper>
          <Input
            type="text"
            placeholder="e-mail"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            hasError={""}
          />
          <Input
            type="password"
            placeholder="senha"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
            hasError={""}
          />
          {error && <S.ErrorText>Login ou senha inválido</S.ErrorText>}
        </S.InputWrapper>
        <Button type="submit">Entrar</Button>
      </form>
      <S.CustomLink to="/register"> Ainda não tenho cadastro </S.CustomLink>
    </S.Wrapper>
  );
};

export default Login;
