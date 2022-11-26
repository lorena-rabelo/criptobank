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

  const [selectedInitialAccount, setSelectedInitialAccount] = useState();
  const [selectedFinalAccount, setSelectedFinalAccount] = useState();
  const [transferValue, setTransferValue] = useState();

  const [newAccountValue, setNewAccountValue] = useState(0.0);

  const [selectedAccount, setSelectedAccount] = useState();

  //? user data
  useEffect(() => {
    api
      .get("/api/customer/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
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

  const getAccounts = () =>
    api
      .get("api/account/accountList", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setAccountsList(response.data);
        setSelectedAccount(response.data[0]?.account_number);
        console.log(
          "response.data[0]?.account_number: ",
          response.data[0]?.account_number
        );
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });

  //? account list
  useEffect(() => {
    getAccounts();
  }, []);

  //! transactions list
  useEffect(() => {
    api
      .get(`api/account/transactions/${accountsList[0]?.account_number}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setAccountInfo(response.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  }, [selectedAccount]);

  const handleLogout = () => {
    api
      .delete("/api/customer/delete", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log("response: transactions info ", response);
        navigate("/");
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
        localStorage.removeItem("token");
      });
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();

    api
      .post(
        `/api/account/create`,
        { balance: newAccountValue },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        setCreateAccountModal(false);
        setNewAccountValue(0);
        alert("Sua conta foi criada com sucesso");
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      });
  };

  const handleTransfer = (e) => {
    e.preventDefault();

    api
      .post(
        `/api/account/transfer`,
        {
          balance: transferValue,
          originAccount: selectedInitialAccount.toString(),
          destinationAccount: selectedFinalAccount.toString(),
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(() => {
        alert("Sua transferência foi realizada com sucesso");
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro : " + err);
      })
      .finally(() => {
        setShowTransferModal(false);
      });
  };

  const handleInitialAccount = (e) => {
    console.log("SelectedInitialAccount: ", selectedInitialAccount);
    setSelectedInitialAccount(e.target.value);
  };

  const formatToCurrency = (value) => {
    return Number(value).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return isLoading ? (
    <Loading spinner />
  ) : (
    <S.Wrapper>
      <S.PersonalInfo>
        <S.Avatar />
        <span>{`Olá, ${name}`}</span>
        <S.EditInfo to="/edit">Editar informações</S.EditInfo>
        <S.EditInfo to="/edit">Excluir conta</S.EditInfo>

        <S.CustomButton onClick={handleLogout}> Sair </S.CustomButton>
      </S.PersonalInfo>
      <S.Dashboard>
        <div>
          <S.NewAccountWrapper>
            <div>
              <S.CreateNewAccountButton
                onClick={() => setCreateAccountModal(true)}
              >
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
                <S.AccountValue>{formatToCurrency(item?.balance)}</S.AccountValue>
              </S.Account>
            ))}
          </S.AccountsWrapper>

          <S.TransactionsWrapper>
            <span>Transações</span>
            <hr></hr>
            {accountInfo?.map((item) => {
              return (
                <S.Transaction>
                  <S.ItemWrapper>
                    <S.Type>tipo</S.Type>
                    <S.Data>{item?.transaction_type}</S.Data>
                  </S.ItemWrapper>
                  <S.ItemWrapper>
                    <S.Type>valor</S.Type>
                    <S.Data>{formatToCurrency(item?.value)}</S.Data>
                  </S.ItemWrapper>
                </S.Transaction>
              );
            })}
          </S.TransactionsWrapper>
        </div>
      </S.Dashboard>

      {showCreateAccountModal && (
        <S.ModalWrapper>
          <S.Content role="dialog" aria-modal={showCreateAccountModal}>
            <S.CloseButton onClick={() => setCreateAccountModal(false)}>
              x
            </S.CloseButton>
            <span>Criar conta</span>
            <form onSubmit={handleCreateAccount}>
              <S.ContentForm>
                <span>valor inicial</span>
                <S.CustomInput
                  mask="999,99"
                  type="text"
                  placeholder="valor inicial"
                  value={newAccountValue}
                  onChange={(e) => setNewAccountValue(e.target.value)}
                />
              </S.ContentForm>
              <Button type="submit">Criar conta</Button>
            </form>
          </S.Content>
        </S.ModalWrapper>
      )}

      {showTransferModal && (
        <S.ModalWrapper>
          <S.Content role="dialog" aria-modal={showTransferModal}>
            <S.CloseButton onClick={() => setShowTransferModal(false)}>
              x
            </S.CloseButton>
            <span>Transferência entre contas</span>
            <form onSubmit={handleTransfer}>
              <S.ContentForm>
                <S.CustomSelect name="select" onChange={handleInitialAccount}>
                  <option value="" selected>
                    Escolha uma conta de saída
                  </option>
                  {accountsList.map((item) => (
                    <option value={item.account_number}>
                      {item.account_number}
                    </option>
                  ))}
                </S.CustomSelect>
                <Input
                  darkColor
                  type="text"
                  placeholder="conta"
                  onChange={(e) => setSelectedFinalAccount(e.target.value)}
                ></Input>
                <Input
                  darkColor
                  type="text"
                  placeholder="valor a transferir"
                  onChange={(e) => setTransferValue(e.target.value)}
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
