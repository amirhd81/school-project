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
      setUsers(response?.data?.users);
    };

    getUsers();
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      setIsSendingLoading(true);
      const response = await profileServices.getMessages();
      setMessages(response?.data?.messages);
      setIsSendingLoading(false);
    };

    getMessages();
  }, []);

  const messagesColumns = [
    {
      title: "Date",
      dataIndex: "created_at",
      key: "created_at",
      render: (created_at: string) => (
        <Typography.Text>{created_at}</Typography.Text>
      ),
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      render: (subject: string) => <Typography.Text>{subject}</Typography.Text>,
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
      render: (message: string) => <Typography.Text>{message}</Typography.Text>,
    },
    {
      title: "Sender",
      dataIndex: "sender",
      key: "sender",
      render: (sender: any) => (
        <Typography.Text>{sender?.email || sender?.phone}</Typography.Text>
      ),
    },
    {
      title: "Reciver",
      dataIndex: "reciever",
      key: "reciever",
      render: (reciever: any) => (
        <Typography.Text>{reciever?.email || reciever?.phone}</Typography.Text>
      ),
    },
  ];

  return (
    <Row>
      <Col span={12}>
        <StyledFormContainer align="middle" justify="center">
          <Col span={24}>
            <StyledHeader justify="center">
              <StyledColoredText $color={theme.colors.white}>
                Send A Message
              </StyledColoredText>
            </StyledHeader>
          </Col>
          <Col span={20}>
            <StyledForm
              form={form}
              onFinish={async (values: any) => {
                setIsLoading(true);
                await profileServices.sendMessage({ ...values });
                setIsLoading(false);
              }}
              layout="vertical"
            >
              <Col span={24}>
                <Form.Item name="reciever" label="Select Reciever">
                  <Select
                    options={
                      users?.map((user: any) => ({
                        label: user.email || user.phone,
                        value: user._id,
                      })) || []
                    }
                    placeholder="Select Reciever"
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
                  <StyledInput.TextArea
                    style={{ height: "150px" }}
                    placeholder="Message"
                  />
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
          </Col>
        </StyledFormContainer>
      </Col>
      <Col
        span={12}
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
