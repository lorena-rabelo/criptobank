import styled from "styled-components";
import { Link } from "react-router-dom";
import InputMask from "react-input-mask";

export const Dashboard = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  min-width: 1024px;
  max-width: 1024px;
  height: 90vh;
  border-radius: 50px;
  background-color: #f3f3f3;
  padding: 40px;
`;

export const TransactionsWrapper = styled.div`
  text-align: start;
  font-size: 24px;
`;

export const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 16px;

  > span {
    padding: 8px 0;
    background-color: red;
  }
`;

export const PersonalInfo = styled.aside`
  width: 300px;
  padding-top: 200px;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;

  > span {
    font-size: 24px;
    color: lightgray;
    margin: 20px 0;
  }
`;

export const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: green;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const NewAccountWrapper = styled.div`
  text-align: left;
  display: flex;

  & span {
    font-size: 20px;
    margin-right: 24px;
  }
`;

export const AccountsWrapper = styled.div`
  margin: 36px 0;
  display: flex;
  padding: 16px 0;
`;

export const Account = styled.div`
  width: 180px;
  /* height: 100px; */
  display: flex;
  border-radius: 16px;
  margin-right: 16px;
  padding: 16px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  text-align: initial;
`;

export const AccountValue = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 8px;
  text-align: initial;
`;

export const EditInfo = styled(Link)`
  text-decoration: none;
  color: #cdfc51;
  font-size: 18px;
`;

export const CreateNewAccountButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const DeleteAccountButton = styled.div`
  text-align: end;
  cursor: pointer;
  margin-bottom: -10px;

  > img {
    width: 16px;
    cursor: pointer;
  }
`;

export const CustomButton = styled.button`
  color: #cdfc51;
  font-size: 18px;
  margin-top: 36px;
  background-color: transparent;
  border: none;
  text-align: left;
  padding: 0;
`;

export const ModalWrapper = styled.section`
  display: flex;
  position: fixed;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0000004d;
  z-index: 2147483601;
`;

export const Content = styled.div`
  background-color: white;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  box-shadow: 0px 2px 4px #00000029;
  border-radius: 8px;
  max-height: 80%;
  overflow: auto;
  ${(props) => props.customCss ?? ""}

  > span {
    font-size: 20px;
  }
`;

export const CustomSelect = styled.select`
  background-color: transparent;
  width: 100%;
  height: 48px;
  border: 2px solid #201f22;
  border-radius: 24px;
  color: #201f22;
  padding: 8px 16px;
  font-size: 16px;
  &::placeholder {
    color: #201f22;
  }

  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

export const CustomInput = styled(InputMask)`
  background-color: transparent;
  width: 100%;
  height: 48px;
  border: 2px solid #201f22;
  border-radius: 24px;
  color: #201f22;
  padding: 8px 16px;
  font-size: 16px;

  &::placeholder {
    color: #201f22;
  }
`;

export const CloseButton = styled.span`
  position: absolute;
  right: 20px;
  top: 20px;
`;

export const Type = styled.span`
  font-size: 16px;
  color: black;
  font-weight: 500;
`;

export const Data = styled.span`
  font-size: 16px;
  color: #201f22;
  font-weight: 700;
`;

export const ItemWrapper = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  padding: 8px 0;
  ${props => (props.isChecked ? `color: #1f8e53;` : `color: #f54337;`)}
`;

export const ContentForm = styled.form`
  margin-top: 24px;
  > * {
    margin: 16px 0;
  }
  > select {
    margin: 0;
  }
`;
