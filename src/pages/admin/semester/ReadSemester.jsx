import { Breadcrumb, Button, Card, Col, Row, Space, Typography } from "antd";
import { MoreOutlined } from "@ant-design/icons"
import { useNavigate } from "react-router-dom";
const { Title } = Typography;

function ReadSemester() {
  const navigate = useNavigate();
  return (
    <>
      <Breadcrumb
        items={[
          {
            title: "Home",
          },
          {
            title: "Semester",
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
