import { Breadcrumb, Button, DatePicker, Form, Input, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Item } = Form;
const { Text, Title } = Typography;
const { RangePicker } = DatePicker;

function CreateSemester() {
  const [form] = Form.useForm();
  const [semesterInfo, setSemesterInfo] = useState({
    name: "Khang",
    startDate: "2000/12/23",
    endDate: "2024/12/23",
  });
  const navigate = useNavigate();
  const createSem = () => {
    console.log(semesterInfo);
  };
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
      <Form name="createSemester" layout="vertical" form={form}>
        <Title level={5}>Create new Semester</Title>

        <Item label="Name">
          <Input
            value={semesterInfo.name}
            onChange={(e) =>
              setSemesterInfo({ ...semesterInfo, name: e.target.value })
            }
          />
        </Item>
        <Item label="Date">
          <RangePicker
          // value={[semesterInfo.startDate, semesterInfo.endDate]}
          // onChange={(e) =>
          //   setSemesterInfo({ ...semesterInfo, startDate: e.target.value[0], endDate: e.target.value[1] })}
          />
        </Item>
        <Button type="primary" onClick={createSem}>
          Create
        </Button>
      </Form>
    </>
  );
}

export default CreateSemester;
