import styled from "@emotion/styled";
import React, { FC } from "react";

const StyledButton = styled.button`
  padding: 12px 24px;
  background-color: red;
  font-size: 16px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`;

const Button: FC = ({ children, ...rest }) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
