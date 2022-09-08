import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

import * as S from "./style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => console.log("submit");

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Text>Faça seu login</S.Text>
        <Input type="text" placeholder="e-mail" value={email} onChange={({ target }) => setEmail(target.value)}/>
        <Input type="password" placeholder="senha" value={password} onChange={({ target }) => setPassword(target.value)}/>
        <Button type="submit">Entrar</Button>
      </S.Form>
      <S.CustomLink to="/"> Ainda não tenho cadastro </S.CustomLink>
    </S.Wrapper>
  );
};

export default Login;
