import { Col } from "antd";
import Login from "./Login";
import Signup from "./Signup";
import { StyledAuth } from "./Auth.style";

const Auth = () => {
  return (
    <StyledAuth gutter={20}>
      <Col span={12}>
        <Signup />
      </Col>
      <Col span={12}>
        <Login />
      </Col>
    </StyledAuth>
  );
};

export default Auth;
