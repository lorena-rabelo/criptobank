import React, { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

import * as S from "./style";

const Register = () => {
  const [name, setName] = useState("");
  const [lastNames, setLastNames] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = () => console.log("submit");

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Text>Cadastre-se no Criptobank</S.Text>
        <div>
          <Input
            type="text"
            placeholder="nome"
            value={name}
            onChange={({ target }) => setEmail(target.name)}
          />
          <Input
            type="text"
            placeholder="sobrenome(s)"
            value={lastNames}
            onChange={({ target }) => setEmail(target.lastNames)}
          />
          <Input
            type="text"
            placeholder="cpf"
            value={cpf}
            onChange={({ target }) => setCpf(target.value)}
          />
          <Input
            type="date"
            placeholder="data de nascimento"
            value={birthdayDate}
            onChange={({ target }) => setCpf(target.BirthdayDate)}
          />
        </div>

        <div>
          <Input
            type="text"
            placeholder="cep"
            value={cep}
            onChange={({ target }) => setCep(target.value)}
          />
          <Input
            type="text"
            placeholder="endereço"
            value={address}
            onChange={({ target }) => setAddress(target.value)}
          />
          <Input
            type="number"
            placeholder="nº"
            value={number}
            onChange={({ target }) => setNumber(target.value)}
          />
          <Input
            type="text"
            placeholder="complemento"
            value={address}
            onChange={({ target }) => setAddress(target.value)}
          />
          <Input
            type="text"
            placeholder="cidade"
            value={city}
            onChange={({ target }) => setCity(target.value)}
          />
          <Input
            type="text"
            placeholder="estado"
            value={state}
            onChange={({ target }) => setState(target.value)}
          />
        </div>
        <div>
          <Input
            type="text"
            placeholder="endereço"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <Input
          type="text"
          placeholder="e-mail"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          type="text"
          placeholder="e-mail"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          type="password"
          placeholder="senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Input
          type="password"
          placeholder="senha"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <Button type="submit">Entrar</Button>
      </S.Form>
      {/* <S.CustomLink to="/"> Ainda não tenho cadastro </S.CustomLink> */}
    </S.Wrapper>
  );
};

export default Register;
