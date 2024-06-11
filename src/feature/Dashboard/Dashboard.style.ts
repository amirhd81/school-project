import { Col, Form, Row, Typography } from "antd";
import { styled } from "styled-components";

export const StyledHeader = styled(Col)`
  background: ${({ theme }) => theme.colors.black};
  padding-left: 20px;
`;

export const StyledHeaderItem = styled(Col)<{ $active?: boolean }>`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 10px 10px;
  background: ${({ theme, $active }) =>
    $active ? theme.colors.blue[400] : theme.colors.black};

  cursor: pointer;
`;

export const StyledHeaderText = styled(Typography.Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.sm};
`;
