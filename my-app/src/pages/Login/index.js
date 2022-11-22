import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";
import api from "../../service/api";
import Loading from "../../components/Loading";

import * as S from "./style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    setIsLoading(true)
    e.preventDefault();
    setError(false);
    api
      .post(`/api/customer/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        sessionStorage.setItem("token", res.data.data.token);
        navigate("/dashboard");
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
        setError(true);
      }).finally(() => {
        setIsLoading(false)
      })
  };

  return isLoading ? (
    <Loading spinner />
  ) : (
    <>
      <S.Wrapper>
        <form onSubmit={handleSubmit} autoComplete="off">
          <S.Text>Faça seu login</S.Text>
          <S.InputWrapper>
            <Input
              type="text"
              placeholder="e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              hasError={error}
              onFocus={() => setError(false)}
            />
            <Input
              type="password"
              placeholder="senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              hasError={error}
              onFocus={() => setError(false)}
            />
            {error && <S.ErrorText>Login ou senha inválido</S.ErrorText>}
          </S.InputWrapper>
          <Button type="submit">Entrar</Button>
        </form>
        <S.CustomLink to="/register"> Ainda não tenho cadastro </S.CustomLink>
      </S.Wrapper>
    </>
  );
};

export default Login;
