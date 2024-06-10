import {
  StyledColoredText,
  StyledForm,
  StyledFormContainer,
  StyledInput,
} from "@/components/shared";
import { Button, Col, Form, Row } from "antd";
import { StyledHeader } from "../Auth/Auth.style";
import { theme } from "@/app/theme";
import { useEffect, useState } from "react";
import profileServices from "@/app/endpoints/profile.service";
import Loading from "@/components/Loading/Loading";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [profile, setPrfile] = useState<any>({});
  const [form] = Form.useForm();

  useEffect(() => {
    const getProfile = async () => {
      setIsLoadingProfile(true);
      const response = await profileServices.getProfile();
      setPrfile(response?.data?.profile);
      setIsLoadingProfile(false)
    };

    getProfile();
  }, []);

  if (isLoadingProfile) return <Loading />

  return (
    <Row
      style={{
        height: "100vh",
        width: "100%",
      }}
      align="middle"
      justify="center"
    >
      <Col span={24}>
        <StyledFormContainer align="middle" justify="center">
          <Col span={24}>
            <StyledHeader justify="center">
              <StyledColoredText $color={theme.colors.white}>
                Profile
              </StyledColoredText>
            </StyledHeader>
          </Col>
          <StyledForm
            form={form}
            initialValues={{ ...profile }}
            onFinish={async (values: any) => {
              setLoading(true);
              await profileServices.updateProfile(profile._id, values);
              setLoading(false);
            }}
            layout="vertical"
          >
            <Col span={24}>
              <Form.Item name="name" label="Full Name">
                <StyledInput placeholder="Full Name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="email" label="Email">
                <StyledInput placeholder="Email" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="university" label="University">
                <StyledInput placeholder="University" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="major" label="Major">
                <StyledInput placeholder="Major" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="job" label="Job">
                <StyledInput placeholder="Job" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item name="phone" label="Phone Number">
                <StyledInput disabled placeholder="Phone Number" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Row align="middle" justify="center">
                <Button onClick={() => form.submit()} loading={loading}>Save</Button>
              </Row>
            </Col>
          </StyledForm>
        </StyledFormContainer>
      </Col>
    </Row>
  );
};

export default Profile;
