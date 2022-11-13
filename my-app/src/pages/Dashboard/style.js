import styled from "styled-components";
import { Link } from "react-router-dom";

export const Dashboard = styled.section`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: center;
  width: 1024px;
  height: 90vh;
  border-radius: 50px;
  background-color: #f3f3f3;
  padding: 40px;
`;

export const Transactions = styled.div`
text-align: start;
font-size: 24px;
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
  padding: 16px 32px;
`;

export const Account = styled.div`
  width: 160px;
  height: 100px;
  display: flex;
  border-radius: 16px;
  margin-right: 16px;
  padding: 16px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;

  :first-child {
    text-align: left;
    margin-bottom: 24px;
  }
`;

export const AccountValue = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 8px;
`;

export const EditInfo = styled(Link)`
  text-decoration: none;
  color: #cdfc51;
  font-size: 18px;
  /* margin-top: 16px; */
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

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: #cdfc51;
  font-size: 18px;
  margin-top: 16px;
`;
