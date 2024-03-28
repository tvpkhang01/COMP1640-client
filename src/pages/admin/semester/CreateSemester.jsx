import { DatePicker, Form, Input, Modal, Typography } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { usePostSemester } from '../../../hooks/useSemester';

const { Item } = Form;
const { Title } = Typography;
const { RangePicker } = DatePicker;

function CreateSemester({
	isCreateSemesterModalOpen,
	setIsCreateSemesterModalOpen,
}) {
	const [formCreate] = Form.useForm();

	const { mutate: createSemester, isError } = usePostSemester();

	const handleSemesterCreateOk = async () => {
		const formData = await formCreate.validateFields();
		try {
			createSemester({
				semesterName: formData.createSemesterName,
				startDate: formData.createSemesterDate[0],
				endDate: formData.createSemesterDate[1],
			});
			formCreate.resetFields();
			setIsCreateSemesterModalOpen(false);
		} catch (e) {
			isError ? console.log(isError) : console.log(e);
		}
	};

	const handleSemesterCreateCancel = () => {
		setIsCreateSemesterModalOpen(false);
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

					<Item name="createSemesterName" label="Name">
						<Input />
					</Item>
					<Item name="createSemesterDate" label="Date">
						<RangePicker style={{ width: '100%' }} />
					</Item>
				</Form>
			</Modal>
		</>
	);
}

export default CreateSemester;
