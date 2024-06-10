import { Button, Col, Form, Row } from "antd";
import { StyledHeader } from "./Auth.style";
import {
  StyledColoredText,
  StyledInput,
  StyledForm,
  StyledFormContainer,
} from "@/components/shared";
import { theme } from "@/app/theme";
import authServices from "@/app/endpoints/auth.service";
import { useState } from "react";

const Signup = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false)

  return (
    <StyledFormContainer align="middle" justify="center">
      <Col span={24}>
        <StyledHeader justify="center">
          <StyledColoredText $color={theme.colors.white}>
            Sign Up
          </StyledColoredText>
        </StyledHeader>
      </Col>
      <StyledForm
        form={form}
        onFinish={async (values: any) => {
          setLoading(true)
          await authServices.signup({ ...values });
          setLoading(false)
        }}
        layout="vertical"
      >
        <Col span={24}>
          <Form.Item name="name" label="Full Name">
            <StyledInput placeholder="Full Name" />
          </Form.Item>
        </Col>
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
            <Button onClick={() => form.submit()} loading={loading}>Sign Up</Button>
          </Row>
        </Col>
      </StyledForm>
    </StyledFormContainer>
  );
};

export default Signup;
