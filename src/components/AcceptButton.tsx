import profileServices from "@/app/endpoints/profile.service";
import { Button, Col, Row } from "antd";
import { useState } from "react";

type Props = {
  getSignupRequests: () => void;
  userId: string;
};

const AcceptButton: React.FC<Props> = (props) => {
  const [isAcceptLoading, setIsAcceptLoading] = useState(false);
  return (
    <Row gutter={10}>
      <Col span={12}>
        <Button
          loading={isAcceptLoading}
          onClick={async () => {
            setIsAcceptLoading(true);
            await profileServices.acceptRequest(props.userId);
            props.getSignupRequests();
            setIsAcceptLoading(false);
          }}
        >
          Accept
        </Button>
      </Col>
    </Row>
  );
};

export default AcceptButton;
