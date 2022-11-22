import React, { useState, useEffect, useRef } from "react";
import cepApi from "../../cepApi";
import Button from "../../components/Button";
import Input from "../../components/Input";
import api from "../../service/api";
import Loading from "../../components/Loading";

import * as S from "./style";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastNames, setLastNames] = useState("");
  const [birthdayDate, setBirthdayDate] = useState("");
  const [cpf, setCpf] = useState("");

  const [cep, setCep] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [complement, setComplement] = useState("");


  const [email, setEmail] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const nameRef = useRef(null);

  useEffect(() => {
    api
      .get("/api/customer/user", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setFirstName(response.data.name)
        setLastNames(response.data.last_name)
        setBirthdayDate(response.data.birth_date)
        setCpf(response.data.taxvat)
        setCep(response.data.post_code)
        setAddress(response.data.street)
        setNumber(response.data.street_number)
        setComplement(response.data.complement)
        setCity(response.data.city)
        setState(response.data.state)
        setEmail(response.data.email)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      }).finally(() => {
        setIsLoading(false)
      });
  }, []);

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

  return isLoading ? (
    <Loading spinner />
  ) : (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit}>
        <S.Text>Edite suas informações pessoais</S.Text>
        <S.InputWrapper>
          <S.Name>
            <Input
              disabled
              ref={nameRef}
              type="text"
              placeholder="nome"
              value={firstName}
            />
          </S.Name>
          <S.LastNames>
            <Input
             disabled
              type="text"
              placeholder="sobrenome(s)"
              value={lastNames}
            />
          </S.LastNames>
          <S.Cpf>
            <Input
             disabled
              type="text"
              placeholder="cpf"
              value={cpf || ''}
            />
          </S.Cpf>

          <S.Birthday>
            <Input
             disabled
              type="text"
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
        </S.InputWrapper>
        <Button type="submit"  disabled={isLoading} isLoading={isLoading}>
          Atualizar
        </Button>
      </S.Form>
    </S.Wrapper>
  );
};

export default Register;