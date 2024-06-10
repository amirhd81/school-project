import { theme } from "@/app/theme";
import { LoadingOutlined } from "@ant-design/icons";
import { Row } from "antd";
import styled from "styled-components";

export const StyledRow = styled(Row)`
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 1000;
  position: absolute;
  top: 0;
`;

export const StyledBackdrop = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  background-color: ${theme.colors.black};
`;

export const StyledLoadingIcon = styled(LoadingOutlined)``;
