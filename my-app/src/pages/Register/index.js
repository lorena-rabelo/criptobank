import React, { useState } from "react";
import cepApi from "../../cepApi";
import Button from "../../components/Button";
import Input from "../../components/Input";

import * as S from "./style";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastNames, setLastNames] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [cpf, setCpf] = useState("");

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  // const [neighborhood, setNeighborhood] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = () => console.log("submit");

  const getAddress = async () => {
    await cepApi
      .get(`/ws/${cep}/json`)
      .then((response) => fillAddress(response.data));
  };

  const fillAddress = ({ localidade, uf, logradouro }) => {
    setAddress(logradouro);
    setCity(localidade);
    setState(uf);
  };

  const validatePassword = () => {
    if (password !== confirmPassword) console.log("wrong");
    return
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Text>Cadastre-se no Criptobank</S.Text>
        <S.InputWrapper>
          <S.Name>
            <Input
              type="text"
              placeholder="nome"
              value={firstName}
              onChange={({ target }) => setFirstName(target.firstName)}
            />
          </S.Name>
          <S.LastNames>
            <Input
              type="text"
              placeholder="sobrenome(s)"
              value={lastNames}
              onChange={({ target }) => setLastNames(target.lastNames)}
            />
          </S.LastNames>
          <S.Cpf>
            <Input
              type="number"
              placeholder="cpf"
              value={cpf}
              onChange={({ target }) => setCpf(target.value)}
            />
          </S.Cpf>

          <S.Birthday>
            <Input
              type="date"
              placeholder="data de nascimento"
              value={birthdayDate}
              onChange={({ target }) => setBirthdayDate(target.BirthdayDate)}
            />
          </S.Birthday>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Cep>
            <Input
              type="text"
              placeholder="cep"
              value={cep}
              onChange={({ target }) => setCep(target.value)}
              onBlur={getAddress}
            />
            <S.CustomLink
              href="https://buscacepinter.correios.com.br/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nao sei meu cep
            </S.CustomLink>
          </S.Cep>
          <S.Address>
            <Input
              type="text"
              placeholder="endereço"
              value={address}
              onChange={({ target }) => setAddress(target.value)}
            />
          </S.Address>
          <S.Number>
            <Input
              type="number"
              placeholder="nº"
              value={number}
              onChange={({ target }) => setNumber(target.value)}
            />
          </S.Number>
          <S.Complement>
            <Input
              type="text"
              placeholder="complemento"
              value={complement}
              onChange={({ target }) => setComplement(target.value)}
            />
          </S.Complement>
          <S.City>
            <Input
              type="text"
              placeholder="cidade"
              value={city}
              onChange={({ target }) => setCity(target.value)}
            />
          </S.City>
          <S.State>
            <Input
              type="text"
              placeholder="estado"
              value={state}
              onChange={({ target }) => setState(target.value)}
            />
          </S.State>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Email>
            <Input
              type="text"
              placeholder="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </S.Email>
          <S.Password>
            <Input
              type="password"
              placeholder="crie sua senha"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </S.Password>
          <S.ConfirmPassword>
            <Input
              type="password"
              placeholder="repita a senha"
              value={confirmPassword}
              onChange={({ target }) => setConfirmPassword(target.value)}
              onBlur={validatePassword}
            />
          </S.ConfirmPassword>
        </S.InputWrapper>
        <Button type="submit" disabled={disabled}>
          Cadastrar
        </Button>
      </S.Form>
      {/* <S.CustomLink to="/"> Ainda não tenho cadastro </S.CustomLink> */}
    </S.Wrapper>
  );
};

export default Register;
