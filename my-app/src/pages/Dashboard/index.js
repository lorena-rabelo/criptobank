import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import trash from "../../assets/img/icon-trash.svg";
import api from "../../service/api";
import Loading from "../../components/Loading";

import * as S from "./style";

const Dashboard = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [accountsList, setAccountsList] = useState([]);
  const [accountInfo, setAccountInfo] = useState([]);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showCreateAccountModal, setCreateAccountModal] = useState(false);

  useEffect(() => {
    api
      .get("/api/customer/user", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setName(response.data.name);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    api
      .get("api/account/accountList", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setAccountsList(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, []);

  useEffect(() => {
    api
      .get(`api/account/transactions/${accountsList[0]?.account_number}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("response: transactions info ", response);
        setAccountInfo(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, [accountsList]);

  // useEffect(() => {
  //   console.log('accounts[0]: ', accounts[0]);
  // }, [accounts]);

  const handleLogout = () => {
    api
      .delete("/api/customer/delete", {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("response: transactions info ", response);
        //!  ver o código de sucesso;
        navigate("/");
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
        sessionStorage.removeItem("token");
        navigate("/");
      });
  };

  const handleTransfer = () => {
    console.log("transferiu");
  };

  return isLoading ? (
    <Loading spinner />
  ) : (
    <S.Wrapper>
      <S.PersonalInfo>
        <S.Avatar />
        <span>{`Olá, ${name}`}</span>
        <S.EditInfo to="/edit">Editar informações</S.EditInfo>

        <S.CustomButton onClick={handleLogout}> Sair </S.CustomButton>
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
              <S.CreateNewAccountButton
                onClick={() => setShowTransferModal(true)}
              >
                +
              </S.CreateNewAccountButton>
              <span>Transferência</span>
            </div>
          </S.NewAccountWrapper>

          <S.AccountsWrapper>
            {accountsList.map((item) => (
              <S.Account key={item.id}>
                <S.DeleteAccountButton
                  onClick={() => setShowTransferModal(false)}
                >
                  <img src={trash} />
                </S.DeleteAccountButton>
                <span>{`nº ${item.account_number}`}</span>
                <S.AccountValue>
                  {item.balance.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </S.AccountValue>
              </S.Account>
            ))}
          </S.AccountsWrapper>

          <S.TransactionsWrapper>
            <span>Transações</span>
            <hr></hr>
            <S.Transaction>
              <span>tipo</span>
              <span>{accountInfo[0]?.transaction_type}</span>
              <span>valor</span>
              <span>{accountInfo[0]?.value}</span>
            </S.Transaction>
          </S.TransactionsWrapper>
        </div>
      </S.Dashboard>

      {showTransferModal && (
        <S.ModalWrapper>
          <S.Content role="dialog" aria-modal={showTransferModal}>
            <S.CloseButton onClick={() => setShowTransferModal(false)}>
              x
            </S.CloseButton>
            <span>Transferência entre contas</span>
            <form onSubmit={handleTransfer}>
              <S.ContentForm>
                <S.CustomSelect name="select">
                  <option value="" selected>
                    Escolha uma conta de saída
                  </option>
                  {accountsList.map((item) => (
                    <option value={item.id}>{item.account_number}</option>
                  ))}
                </S.CustomSelect>
                <Input darkColor type="text" placeholder="conta"></Input>
                <Input
                  darkColor
                  type="text"
                  placeholder="valor a transferir"
                ></Input>
              </S.ContentForm>
              <Button type="submit">Transferir</Button>
            </form>
          </S.Content>
        </S.ModalWrapper>
      )}
    </S.Wrapper>
  );
};

export default Dashboard;
