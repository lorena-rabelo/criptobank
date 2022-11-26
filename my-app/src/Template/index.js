import React from "react";
import cripto from "../assets/img/logo.svg";

import * as S from "./style";

const Template = ({ children }) => {
  return (
    <S.Wrapper>
      <a href="/">
        <S.Logo src={cripto} />
      </a>
      {children}
    </S.Wrapper>
  );
};

export default Template;
