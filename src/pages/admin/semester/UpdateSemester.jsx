import { DatePicker, Form, Input, Modal, Typography } from 'antd';
import React from 'react';
import dayjs from 'dayjs';
import { useState } from 'react';

const { Item } = Form;
const { Title } = Typography;
const { RangePicker } = DatePicker;

function UpdateSemester({
	isUpdateSemesterModalOpen,
	setIsUpdateSemesterModalOpen,
}) {
	const [formCreate] = Form.useForm();
	const [semesterInfo, setSemesterInfo] = useState({});
	const handleSemesterUpdateOk = () => {
		console.log(semesterInfo);
		setIsUpdateSemesterModalOpen(false);
		formCreate.resetFields();
	};

	const handleSemesterUpdateCancel = () => {
		setIsUpdateSemesterModalOpen(false);
		formCreate.resetFields();
	};
	return (
		<>
			<Modal
				open={isUpdateSemesterModalOpen}
				onOk={handleSemesterUpdateOk}
				onCancel={handleSemesterUpdateCancel}
				closeIcon={false}
			>
				<Form name="updateSemester" layout="vertical" form={formCreate}>
					<Title level={5}>Update Semester</Title>

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

export default UpdateSemester;
