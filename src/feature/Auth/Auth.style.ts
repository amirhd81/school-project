import { Form, Row } from "antd";
import { styled } from "styled-components";

export const StyledAuth = styled(Row)`
  height: 100vh;
`;

export const StyledHeader = styled(Row)`
  background-color: ${({ theme }) => theme.colors.indigo[600]};
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  border-color: ${({ theme }) => theme.colors.indigo[600]};
  padding: 16px 0;
`;
