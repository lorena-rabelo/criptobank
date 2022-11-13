import React, { useState, useEffect, useRef } from "react";
import cepApi from "../../cepApi";
import Button from "../../components/Button";
import Input from "../../components/Input";
import api from "../../service/api";

import * as S from "./style";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastNames, setLastNames] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [cpf, setCpf] = useState("");

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");

  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState("");
  const [complement, setComplement] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const nameRef = useRef(null);

  useEffect(() => {
    api
      .get("/api/customer/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setFirstName(response.data.name)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);


  console.log(!!complement, '!!complement');
  const data = {
    name: firstName,
    last_name: lastNames,
    taxvat: cpf,
    street: "Rua Teste 4",
    street_number: "123",
    complement: !!complement || 'N/A',
    post_code: "09570-163",
    city: "São Caetano",
    state: "SP",
    birth_date: "18/01/1991",
    email: email,
    password: "Teste1234",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastNames);
    await api
      .post(`/api/customer/create`, data)
      .then((response) => console.log(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  };




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
    return;
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Text>Edite suas informações pessoais</S.Text>
        <S.InputWrapper>
          <S.Name>
            <Input
              ref={nameRef}
              type="text"
              placeholder="nome"
              value={firstName}
            />
          </S.Name>
          <S.LastNames>
            <Input
              type="text"
              placeholder="sobrenome(s)"
              value={lastNames}
            />
          </S.LastNames>
          <S.Cpf>
            <Input
              type="text"
              placeholder="cpf"
              value={cpf || ''}
            />
          </S.Cpf>

          <S.Birthday>
            <Input
              type="date"
              placeholder="data de nascimento"
              value={birthdayDate}
            />
          </S.Birthday>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Cep>
            <Input
              type="text"
              placeholder="cep"
              value={cep || ''}
              onChange={e => setCep(e.target.value)}
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
              value={address || ''}
              onChange={({ target }) => setAddress(target.value)}
            />
          </S.Address>
          <S.Number>
            <Input
              type="number"
              placeholder="nº"
              value={number || ''}
              onChange={({ target }) => setNumber(target.value)}
            />
          </S.Number>
          <S.Complement>
            <Input
              type="text"
              placeholder="complemento"
              value={complement || ''}
              onChange={({ target }) => setComplement(target.value)}
            />
          </S.Complement>
          <S.City>
            <Input
              type="text"
              placeholder="cidade"
              value={city || ''}
              onChange={({ target }) => setCity(target.value)}
            />
          </S.City>
          <S.State>
            <Input
              type="text"
              placeholder="estado"
              value={state || ''}
              onChange={({ target }) => setState(target.value)}
            />
          </S.State>
        </S.InputWrapper>

        <S.InputWrapper>
          <S.Email>
            <Input
              type="text"
              placeholder="email"
              value={email || ''}
              onChange={({ target }) => setEmail(target.value)}
            />
          </S.Email>
          <S.Password>
            <Input
              type="password"
              placeholder="crie sua senha"
              value={password || ''}
              onChange={({ target }) => setPassword(target.value)}
            />
          </S.Password>
          <S.ConfirmPassword>
            <Input
              type="password"
              placeholder="repita a senha"
              value={confirmPassword || ''}
              onChange={({ target }) => setConfirmPassword(target.value)}
              onBlur={validatePassword}
            />
          </S.ConfirmPassword>
        </S.InputWrapper>
        <Button type="submit"  disabled={disabled || isLoading} isLoading={isLoading}>
          Cadastrar
        </Button>
      </S.Form>
      {/* <S.CustomLink to="/"> Ainda não tenho cadastro </S.CustomLink> */}
    </S.Wrapper>
  );
};

export default Register;


 
// {token: "6|vaFyoOrl5o0saLVZtX1LJwc8EF47e08liQVlIwO2"}