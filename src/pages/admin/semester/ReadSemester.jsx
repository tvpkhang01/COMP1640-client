import { Breadcrumb, Button, Card, Col, Row, Space, Typography } from "antd";
import { MoreOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
import React from "react";

const { Title, Text } = Typography;

function ReadSemester() {
  const navigate = useNavigate();
  const goHome = () => {
    navigate("/admin");
  };
  const goSemester = () => {
    navigate("/admin/semester");
  };
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: (
              <Text style={{ cursor: "pointer" }} onClick={goHome}>
                Home
              </Text>
            ),
          },
          {
            title: (
              <Text style={{ cursor: "pointer" }} onClick={goSemester}>
                Semester
              </Text>
            ),
          },
        ]}
      />
      <Title level={2}>Semester</Title>
      <Button onClick={() => {
        navigate("create");
      }}>Create new Semester</Button>
      <Row gutter={10}>
        <Col span={24}>
          <Card >
            <Space direction="horizontal">
              <Title level={5}>Spring 2024</Title>
            </Space>
            <Row>
              <Col span={8}>
                <Title level={4}>Start Date</Title>
              </Col>
              <Col span={8}>
                <Title level={4}>End Date</Title>
              </Col>
              <Col span={8}>
                <MoreOutlined onClick={() => {
                  navigate("semesterId");
                }} />
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ReadSemester;
