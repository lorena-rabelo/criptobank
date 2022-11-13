import React, { useState, useEffect } from "react";
import trash from "../../assets/img/icon-trash.svg";
import api from "../../service/api";

import * as S from "./style";

const Dashboard = () => {
  const [name, setName] = useState('')
  useEffect(() => {
    console.log(localStorage.getItem("token"));
  }, []);

  useEffect(() => {
    api
      .get("/api/customer/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setName(response.data.name)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);


  useEffect(() => {
    api
      .get("/api/customer/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setName(response.data.name)
        localStorage.removeItem('token');
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  return (
    <S.Wrapper>
      <S.PersonalInfo>
        <S.Avatar />
        <span>{`Olá, ${name}`}</span>
        <S.EditInfo to="/edit">Editar informações</S.EditInfo>

        <S.CustomLink to="/register"> Sair </S.CustomLink>
      </S.PersonalInfo>
      <S.Dashboard>
        <div>
          <S.NewAccountWrapper>
            <div>
              <S.CreateNewAccountButton onClick={() => console.log("ratanaba")}>
                +
              </S.CreateNewAccountButton>
              <span>Criar nova conta</span>
            </div>

            <div>
              <S.CreateNewAccountButton onClick={() => console.log("ratanaba")}>
                +
              </S.CreateNewAccountButton>
              <span>Transferência</span>
            </div>
          </S.NewAccountWrapper>
          <S.AccountsWrapper>
            <S.Account>
              <S.DeleteAccountButton onClick={() => console.log("ratanaba")}>
                <img src={trash} />
              </S.DeleteAccountButton>
              <span>conta 123</span>
              <S.AccountValue>R$ 3434,00</S.AccountValue>
            </S.Account>

            <S.Account>
              <S.DeleteAccountButton onClick={() => console.log("ratanaba")}>
                <img src={trash} />
              </S.DeleteAccountButton>
              <span>conta 123</span>
              <S.AccountValue>R$ 3434,00</S.AccountValue>
            </S.Account>

            <S.Account>
              <S.DeleteAccountButton onClick={() => console.log("ratanaba")}>
                <img src={trash} />
              </S.DeleteAccountButton>
              <span>conta 123</span>
              <S.AccountValue>R$ 3434,00</S.AccountValue>
            </S.Account>
          </S.AccountsWrapper>
          <S.Transactions>
            <span>Transações</span>
            <hr></hr>
          </S.Transactions>
        </div>
      </S.Dashboard>
    </S.Wrapper>
  );
};

export default Dashboard;
