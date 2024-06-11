import React, { useEffect, useState } from "react";
import { Table, Input, Button, Space, Row, Col } from "antd";
import { ColumnsType, ColumnType } from "antd/es/table";
import styled from "styled-components";
import profileServices from "@/app/endpoints/profile.service";
import { StyledInput } from "../shared";

interface Event {
  key: string;
  image: string;
  eventTitle: string;
  eventDes: string;
  capacity: number;
  invitedEmails: string;
  type: string;
  _id: string;
  subscribedUsers: string;
}

const getColumnSearchProps = (dataIndex: keyof Event): ColumnType<Event> => ({
  filterDropdown: ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => (
    <div style={{ padding: 8 }}>
      <SearchInput
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) =>
          setSelectedKeys(e.target.value ? [e.target.value] : [])
        }
        onPressEnter={() => confirm()}
      />
      <ButtonGroup>
        <SearchButton type="primary" onClick={() => confirm()}>
          Search
        </SearchButton>
        <ResetButton
          onClick={() => {
            clearFilters && clearFilters();
            setSelectedKeys([]);
            confirm();
          }}
        >
          Reset
        </ResetButton>
      </ButtonGroup>
    </div>
  ),
  onFilter: (value, record) =>
    record[dataIndex]
      .toString()
      .toLowerCase()
      .includes((value as string).toLowerCase()),
});

type Props = {
  noAction?: boolean;
};

const EventTable: React.FC<Props> = (props) => {
  const [isEventLoading, setIsEventLoading] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [email, setEmail] = useState("");

  const getEvents = async () => {
    setIsEventLoading(true);
    const response = await profileServices.getEvents();
    setEvents(
      response?.data?.events.map((event: any) => ({
        ...event,
        invitedEmails: event.invitedUsers
          .map((user: any) => user.email)
          .join(", "),
        subscribedUsers: event.subscribedUsers
          .map((email: string) => email)
          .join(", "),
      }))
    );
    setIsEventLoading(false);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const columns: ColumnsType<Event> = [
    {
      title: "Event",
      dataIndex: "eventTitle",
      key: "eventTitle",
      render: (text, record) => (
        <Space>
          <span>{text}</span>
        </Space>
      ),
      ...getColumnSearchProps("eventTitle"),
    },
    {
      title: "Description",
      dataIndex: "eventDes",
      key: "eventDes",
      render: (text) => (typeof text === "string" ? text : text?.toString()),
      ...getColumnSearchProps("eventDes"),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
      render: (text) => (typeof text === "string" ? text : text?.toString()),
      ...getColumnSearchProps("type"),
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
      sorter: (a, b) => a.capacity - b.capacity,
      render: (text) => (typeof text === "string" ? text : text?.toString()),
      ...getColumnSearchProps("capacity"),
    },
    {
      title: "Invited Emails",
      dataIndex: "invitedEmails",
      key: "invitedEmails",
      render: (text) => (typeof text === "string" ? text : text?.toString()),
      ...getColumnSearchProps("invitedEmails"),
    },
    {
      title: "Subscribed Emails",
      dataIndex: "subscribedUsers",
      key: "subscribedUsers",
      render: (text) => (typeof text === "string" ? text : text?.toString()),
      ...getColumnSearchProps("subscribedUsers"),
    },
    !props.noAction
      ? {
          title: "Action",
          key: "action",
          render: (text, record) => (
            <Row>
              <Col span={18}>
                <StyledInput
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Email"
                />
              </Col>
              <Col span={8}>
                <JoinButton
                  onClick={async () => {
                    if (!email) return;

                    await profileServices.joinEvent(record._id, {
                      email: email,
                    });
                    getEvents();
                  }}
                  type="primary"
                >
                  Join
                </JoinButton>
              </Col>
            </Row>
          ),
        }
      : {},
  ];

  return (
    <Container>
      <Table
        scroll={{ x: 1420 }}
        loading={isEventLoading}
        pagination={{
          pageSize: 10,
        }}
        columns={columns}
        dataSource={events || []}
      />
    </Container>
  );
};

export default EventTable;

const Container = styled.div`
  padding: 24px;
`;

const EventImage = styled.img`
  width: 50px;
  height: 50px;
`;

const SearchInput = styled(Input)`
  margin-bottom: 8px;
  display: block;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;

const SearchButton = styled(Button)`
  width: 90px;
`;

const ResetButton = styled(Button)`
  width: 90px;
`;

const JoinButton = styled(Button)`
  background-color: #1890ff;
  color: white;
  &:hover {
    background-color: #40a9ff;
  }
`;
