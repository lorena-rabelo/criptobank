import React from "react";

import * as S from "./style";

const Input = ({
  id,
  value,
  type,
  disabled,
  label,
  hasError,
  errorMessage,
  onChange,
  ...restAttributes
}) => {
  return (
    <S.Wrapper>
      <S.Input
        id={id}
        type={type}
        disabled={disabled}
        onChange={onChange}
        value={value}
        hasError={hasError}
        {...restAttributes}
      />
    </S.Wrapper>
  );
};

export default Input;
