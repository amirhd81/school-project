import { Col, Row } from "antd";
import {
  StyledHeader,
  StyledHeaderItem,
  StyledHeaderText,
} from "./Dashboard.style";
import { useState } from "react";
import Profile from "../Profile/Profile";
import EventTable from "@/components/EventTable/EventTable";
import Message from "../Message/Message";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <Row>
      <StyledHeader span={24}>
        <Row gutter={12}>
          <StyledHeaderItem
            onClick={() => setActiveTab("profile")}
            $active={activeTab === "profile"}
          >
            <StyledHeaderText>Profile</StyledHeaderText>
          </StyledHeaderItem>
          <StyledHeaderItem
            onClick={() => setActiveTab("message")}
            $active={activeTab === "message"}
          >
            <StyledHeaderText>Message</StyledHeaderText>
          </StyledHeaderItem>
          <StyledHeaderItem
            onClick={() => setActiveTab("events")}
            $active={activeTab === "events"}
          >
            <StyledHeaderText>Events</StyledHeaderText>
          </StyledHeaderItem>
        </Row>
      </StyledHeader>
      {activeTab === "message" ? (
        <Col span={24}>
          <Message />
        </Col>
      ) : activeTab === "profile" ? (
        <Col span={12}>
          <Profile />
        </Col>
      ) : (
        <EventTable />
      )}
    </Row>
  );
};

export default Dashboard;
