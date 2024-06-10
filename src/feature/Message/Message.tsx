import {
  StyledColoredText,
  StyledForm,
  StyledFormContainer,
  StyledInput,
} from "@/components/shared";
import { Button, Col, Form, Row, Select, Table, Typography } from "antd";
import { StyledHeader } from "../Auth/Auth.style";
import { theme } from "@/app/theme";
import { useEffect, useState } from "react";
import profileServices from "@/app/endpoints/profile.service";

const Message = () => {
  const [form] = Form.useForm();
  const [users, setUsers] = useState<any>([]);
  const [messages, setMessages] = useState<any>([]);
  const [isSendingLoading, setIsSendingLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUsers = async () => {
      const response = await profileServices.getUsers();
      setUsers(response.data);
    };

    getUsers();
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      setIsSendingLoading(true);
      const response = await profileServices.getMessages();
      setMessages(response.data);
      setIsSendingLoading(false);
    };

    getMessages();
  }, []);

  const messagesColumns = [
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (createdAt: string) => (
        <Typography.Text>{createdAt}</Typography.Text>
      ),
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      render: (subject: string) => <Typography.Text>{subject}</Typography.Text>,
    },
    {
      title: "Sender",
      dataIndex: "sender",
      key: "sender",
      render: (sender: string) => <Typography.Text>{sender}</Typography.Text>,
    },
    {
      title: "Reciver",
      dataIndex: "reciver",
      key: "reciver",
      render: (reciver: string) => <Typography.Text>{reciver}</Typography.Text>,
    },
  ];

  return (
    <Row>
      <Col span={8}>
        <StyledFormContainer align="middle" justify="center">
          <Col span={24}>
            <StyledHeader justify="center">
              <StyledColoredText $color={theme.colors.white}>
                Send A Message
              </StyledColoredText>
            </StyledHeader>
          </Col>
          <StyledForm
            form={form}
            onFinish={async (values: any) => {
              setIsLoading(true);
              await profileServices.sendMessage(values);
              setIsLoading(false);
            }}
            layout="vertical"
          >
            <Col span={24}>
              <Form.Item name="users" label="Select User">
                <Select
                  options={users.map((user: any) => ({
                    label: user.email,
                    value: user.id,
                  }))}
                  placeholder="Select User"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="subject" label="Subject">
                <StyledInput placeholder="Subject" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="message" label="Message">
                <StyledInput placeholder="Message" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Row align="middle" justify="center">
                <Button loading={isLoading} onClick={() => form.submit()}>
                  Send
                </Button>
              </Row>
            </Col>
          </StyledForm>
        </StyledFormContainer>
      </Col>
      <Col
        span={16}
        style={{
          marginTop: "36px",
        }}
      >
        <Table
          loading={isSendingLoading}
          rowKey={({ id }) => id}
          columns={messagesColumns}
          dataSource={messages}
          className="hypaTable rowClickable"
        />
      </Col>
    </Row>
  );
};

export default Message;
