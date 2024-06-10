import { Form, Input, Row, Typography } from "antd";
import styled from "styled-components";

export const StyledColoredText = styled(Typography.Text)<{
  $color: string;
}>`
  color: ${({ $color }) => $color};
`;

export const StyledForm = styled(Form)`
  padding: 20px 0;
`;

export const StyledFormContainer = styled(Row)`
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray[300]};
  box-shadow: ${({ theme }) => theme.boxShadow.default};
  margin: 36px;
`;

export const StyledInput = styled(Input)`
  // min-width: 260px;
`;
