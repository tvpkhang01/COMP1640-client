import { DatePicker, Form, Input, Modal, Typography } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

const { Item } = Form;
const { Title } = Typography;
const { RangePicker } = DatePicker;

function CreateSemester({ isCreateSemesterModalOpen, setIsCreateSemesterModalOpen }) {
	const [formCreate] = Form.useForm();
	const [semesterInfo, setSemesterInfo] = useState({});
	const handleSemesterCreateOk = () => {
		console.log(semesterInfo);
		setIsCreateSemesterModalOpen(false);
		formCreate.resetFields();
	};

	const handleSemesterCreateCancel = () => {
		setIsCreateSemesterModalOpen(false);
		formCreate.resetFields();
	};
	return (
		<>
			<Modal
				open={isCreateSemesterModalOpen}
				onOk={handleSemesterCreateOk}
				onCancel={handleSemesterCreateCancel}
				closeIcon={false}
			>
				<Form name="createSemester" layout="vertical" form={formCreate}>
					<Title level={5}>Create new Semester</Title>

					<Item name="name" label="Name">
						<Input
							value={semesterInfo.name}
							onChange={(e) =>
								setSemesterInfo({ ...semesterInfo, name: e.target.value })
							}
						/>
					</Item>
					<Item name="date" label="Date">
						<RangePicker
							value={[semesterInfo.startDate, semesterInfo.endDate]}
							onChange={(e) =>
								setSemesterInfo({
									...semesterInfo,
									startDate: dayjs(e[0]),
									endDate: dayjs(e[1]),
								})
							}
							style={{ width: '100%' }}
						/>
					</Item>
				</Form>
			</Modal>
		</>
	);
}

export default CreateSemester;
