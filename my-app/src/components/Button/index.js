import React from "react";

import * as S from "./style";

const Button = ({
  id,
  outline,
  children,
  disabled,
  onClick,
  type,
}) => {
  return (
    <>
      <S.BaseButton
        id={id}
        type={type}
        isOutline={outline}
        isDisabled={disabled}
        onClick={onClick}
      >
        {children}
      </S.BaseButton>
    </>
  );
};

export default Button;
