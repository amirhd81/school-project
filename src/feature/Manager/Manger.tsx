import {
  Button,
  Col,
  Dropdown,
  Form,
  Row,
  Select,
  Table,
  Typography,
} from "antd";
import {
  StyledColoredText,
  StyledForm,
  StyledFormContainer,
  StyledInput,
} from "../../components/shared";
import { StyledHeader } from "../Auth/Auth.style";
import React, { useEffect, useState } from "react";
import { theme } from "../../app/theme";
import Image from "next/image";
import profileServices from "@/app/endpoints/profile.service";
import EventTable from "@/components/EventTable/EventTable";

const Manager = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [userRequestLoading, setUserRequestLoading] = useState(false);
  const [signupRequests, setSignupRequests] = useState([]);
  const [users, setUsers] = useState<any>([]);
  const [preview, setPreview] = useState<any>("");

  const handleMultipleImage = (event: any) => {
    const files = [...event.target.files];

    const reader = new FileReader();
    reader.onload = () => {
      reader.result && setPreview(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  useEffect(() => {
    const getSignupRequests = async () => {
      setUserRequestLoading(true);
      const response = await profileServices.getSignupRequests();
      setSignupRequests(response?.data?.requests);
      setUserRequestLoading(false);
    };

    getSignupRequests();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const response = await profileServices.getUsers();
      setUsers(response?.data?.users);
    };

    getUsers();
  }, []);

  const userSignupColoums = [
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (name: string) => <Typography.Text>{name}</Typography.Text>,
    },
    {
      title: "User Email",
      dataIndex: "email",
      key: "email",
      render: (email: string) => <Typography.Text>{email}</Typography.Text>,
    },
    {
      title: "User Phone Number",
      dataIndex: "phone",
      key: "phone",
      render: (phone: string) => <Typography.Text>{phone}</Typography.Text>,
    },
    {
      title: "",
      dataIndex: "",
      key: "action",
      render: () => (
        <Row gutter={10}>
          <Col span={12}>
            <Button>Accept</Button>
          </Col>
          <Col span={12}>
            <Button>Decline</Button>
          </Col>
        </Row>
      ),
    },
  ];

  // const usersColoums = [
  //   {
  //     title: "User Name",
  //     dataIndex: "name",
  //     key: "name",
  //     render: (name: string) => <Typography.Text>{name}</Typography.Text>,
  //   },
  //   {
  //     title: "User Email",
  //     dataIndex: "email",
  //     key: "email",
  //     render: (email: string) => <Typography.Text>{email}</Typography.Text>,
  //   },
  //   {
  //     title: "User Phone Number",
  //     dataIndex: "phone",
  //     key: "phone",
  //     render: (phone: string) => <Typography.Text>{phone}</Typography.Text>,
  //   },
  //   {
  //     title: "User University",
  //     dataIndex: "university",
  //     key: "university",
  //     render: (university: string) => (
  //       <Typography.Text>{university}</Typography.Text>
  //     ),
  //   },
  //   {
  //     title: "User Job",
  //     dataIndex: "job",
  //     key: "job",
  //     render: (job: string) => <Typography.Text>{job}</Typography.Text>,
  //   },
  //   {
  //     title: "Major",
  //     dataIndex: "major",
  //     key: "major",
  //     render: (major: string) => <Typography.Text>{major}</Typography.Text>,
  //   },
  // ];

  return (
    <Row>
      <Col
        span={24}
        style={{
          padding: "36px",
          fontSize: theme.fontSize["2xl"],
          paddingBottom: "0",
        }}
      >
        <StyledColoredText
          style={{
            fontSize: theme.fontSize["2xl"],
            fontWeight: theme.fontWeight.semiBold,
          }}
          $color={theme.colors.indigo[600]}
        >
          User Signup Request
        </StyledColoredText>
      </Col>
      <Col
        span={24}
        style={{
          padding: "36px",
        }}
      >
        <Table
          loading={userRequestLoading}
          rowKey={({ id }) => id}
          columns={userSignupColoums}
          dataSource={signupRequests}
          className="hypaTable rowClickable"
        />
      </Col>
      {/* <Col
        span={24}
        style={{
          padding: "36px",
          fontSize: theme.fontSize["2xl"],
          paddingBottom: "0",
        }}
      >
        <StyledColoredText
          style={{
            fontSize: theme.fontSize["2xl"],
            fontWeight: theme.fontWeight.semiBold,
          }}
          $color={theme.colors.indigo[600]}
        >
          Users List
        </StyledColoredText>
      </Col>
      <Col
        span={24}
        style={{
          padding: "36px",
        }}
      >
        <Table
          rowKey={({ id }) => id}
          columns={usersColoums}
          dataSource={[]}
          className="hypaTable rowClickable"
          onRow={(data) => ({
            onClick: () => {},
          })}
        />
      </Col> */}
      <Col
        span={24}
        style={{
          padding: "36px",
          fontSize: theme.fontSize["2xl"],
          paddingBottom: "0",
        }}
      >
        <StyledColoredText
          style={{
            fontSize: theme.fontSize["2xl"],
            fontWeight: theme.fontWeight.semiBold,
          }}
          $color={theme.colors.indigo[600]}
        >
          Create a Event
        </StyledColoredText>
      </Col>
      <Col span={15}>
        <StyledFormContainer align="middle" justify="center">
          <Col span={24}>
            <StyledHeader justify="center">
              <StyledColoredText $color={theme.colors.indigo[600]}>
                Event
              </StyledColoredText>
            </StyledHeader>
          </Col>
          <StyledForm
            form={form}
            onFinish={async (values: any) => {
              setLoading(true);
              await profileServices.addEvent(values);
              setLoading(false);
            }}
            layout="vertical"
          >
            <Col span={24}>
              <Form.Item name="eventTitle" label="Event Title">
                <StyledInput placeholder="Event Title" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="eventDes" label="Event Description">
                <StyledInput placeholder="Event Description" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="capacity" label="Event Capacity">
                <StyledInput type="number" placeholder="Event Capacity" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="invitedUsers" label="Invited Users">
                <Select
                  mode="tags"
                  options={users.map((user: any) => ({
                    label: user.email,
                    value: user._id,
                  }))}
                  placeholder="Invited Users"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="type" label="Event Type">
                <Select
                  options={[
                    {
                      label: "workshop",
                      value: "workshop",
                    },
                    {
                      label: "seminar",
                      value: "seminar",
                    },
                    {
                      label: "networking",
                      value: "networking",
                    },
                  ]}
                  placeholder="Event Type"
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Row gutter={10}>
                <Col span={14}>
                  <Form.Item name="image" label="Event Image">
                    <StyledInput
                      type="file"
                      placeholder="Event Image"
                      onChange={handleMultipleImage}
                    />
                  </Form.Item>
                </Col>
                {preview && (
                  <Col span={10}>
                    <Image
                      src={preview}
                      loader={() => preview}
                      alt={`Preview`}
                      width={200}
                      height={200}
                    />
                  </Col>
                )}
              </Row>
            </Col>
            <Col span={24}>
              <Row align="middle" justify="center">
                <Button loading={loading} onClick={() => form.submit()}>
                  Create
                </Button>
              </Row>
            </Col>
          </StyledForm>
        </StyledFormContainer>
      </Col>
      <Col
        span={24}
        style={{
          padding: "36px",
          fontSize: theme.fontSize["2xl"],
          paddingBottom: "0",
        }}
      >
        <StyledColoredText
          style={{
            fontSize: theme.fontSize["2xl"],
            fontWeight: theme.fontWeight.semiBold,
          }}
          $color={theme.colors.indigo[600]}
        >
          Events
        </StyledColoredText>
      </Col>
      <Col span={24}>
        <EventTable />
      </Col>
      {/* <Col
        span={24}
        style={{
          padding: "36px",
          fontSize: theme.fontSize["2xl"],
          paddingBottom: "0",
        }}
      >
        <StyledColoredText
          style={{
            fontSize: theme.fontSize["2xl"],
            fontWeight: theme.fontWeight.semiBold,
          }}
          $color={theme.colors.indigo[600]}
        >
          Publish Articles
        </StyledColoredText>
      </Col>
      <Col
        span={24}
        style={{
          padding: "36px",
        }}
      >
        {[0, 1, 2].map((d) => (
          <Row
            style={{
              marginBottom: "20px",
              border: `1px solid ${theme.colors.gray[300]}`,
              borderRadius: "8px",
            }}
            align="middle"
            key={d}
          >
            <Col span={6}>
              <img
                width={"95%"}
                height={303}
                style={{
                  borderTopLeftRadius: "8px",
                }}
                loader={() => "https://picsum.photos/id/1/200/300"}
                src={"https://picsum.photos/id/1/200/300"}
                alt={`Preview`}
              />
            </Col>
            <Col
              span={18}
              style={{
                overflow: "auto",
                height: "270px",
                margin: "10px 0",
              }}
            >
              <Row>
                <Col span={24}>
                  <StyledColoredText
                    style={{
                      fontSize: theme.fontSize["2xl"],
                    }}
                    $color={theme.colors.indigo[600]}
                  >
                    orem ipsum dolor sit amet
                  </StyledColoredText>
                </Col>
                <Col span={24}>
                  <StyledColoredText $color={theme.colors.black}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                    irure dolor in reprehenderit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </StyledColoredText>
                </Col>
              </Row>
            </Col>
            <Col span={6}></Col>
            <Col
              span={18}
              style={{
                marginBottom: "25px",
              }}
            >
              <StyledColoredText
                style={{
                  fontSize: theme.fontSize["2xl"],
                }}
                $color={theme.colors.indigo[600]}
              >
                Sources
              </StyledColoredText>
            </Col>
            <Col span={6}></Col>
            <Col
              span={18}
              style={{
                marginBottom: "25px",
              }}
            >
              <Row gutter={10}>
                {[0, 1, 2].map((data) => (
                  <Col key={data}>
                    <StyledInput value="https://www.google.com" />
                  </Col>
                ))}
              </Row>
            </Col>
            <Col span={6}></Col>
            <Col
              span={18}
              style={{
                marginBottom: "25px",
              }}
            >
              <Button>Share With Everyone</Button>
            </Col>
          </Row>
        ))}
      </Col> */}
    </Row>
  );
};

export default Manager;
