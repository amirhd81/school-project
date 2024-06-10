import { Button, Col, Form, Input, notification, Row, Typography } from "antd";
import { StyledHeader } from "./Auth.style";
import {
  StyledColoredText,
  StyledInput,
  StyledForm,
  StyledFormContainer,
} from "@/components/shared";
import { theme } from "@/app/theme";
import { useState } from "react";
import authServices from "@/app/endpoints/auth.service";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  return (
    <StyledFormContainer align="middle" justify="center">
      <Col span={24}>
        <StyledHeader justify="center">
          <StyledColoredText $color={theme.colors.white}>
            Login
          </StyledColoredText>
        </StyledHeader>
      </Col>
      <StyledForm
        form={form}
        onFinish={async (values: any) => {
          setLoading(true);
          const response = await authServices.login({ ...values });

          if (response?.error?.message) {
            notification.error({
              message: response?.error?.message,
              type: "error",
              placement: "top",
            });
            setLoading(false);
          } else {
            localStorage.setItem("token", response?.data?.auth_token);
            router.push("/dashboard");
            setLoading(false);
          }
        }}
        layout="vertical"
      >
        <Col span={24}>
          <Form.Item name="phone" label="Phone Number">
            <StyledInput placeholder="Phone Number" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item name="password" label="Password">
            <StyledInput.Password placeholder="Password" />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Row align="middle" justify="center">
            <Button onClick={() => form.submit()} loading={loading}>
              Login
            </Button>
          </Row>
        </Col>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Login;
