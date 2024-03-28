import { DatePicker, Form, Input, Modal, Typography } from 'antd';
import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useState } from 'react';
import {
	useGetSemesterDetail,
	usePatchSemester,
} from '../../../hooks/useSemester';

const { Item } = Form;
const { Title } = Typography;
const { RangePicker } = DatePicker;

function UpdateSemester({
	semesterId,
	isUpdateSemesterModalOpen,
	setIsUpdateSemesterModalOpen,
}) {
	const [formUpdate] = Form.useForm();
	const { data: semester } = useGetSemesterDetail(semesterId);
	const { mutate: updateSemester, isError } = usePatchSemester(semesterId);

	const semesterData = {
		updateSemesterName: semester?.semesterName,
		updateSemesterDate: [dayjs(semester?.startDate), dayjs(semester?.endDate)],
	};

	const handleSemesterUpdateOk = async () => {
		try {
			const formData = await formUpdate.validateFields();
			updateSemester({
				semesterName: formData.updateSemesterName,
				startDate: formData.updateSemesterDate[0],
				endDate: formData.updateSemesterDate[1],
			});
			formUpdate.resetFields();
		} catch (e) {
			isError ? console.log(isError) : console.log(e);
		}
		setIsUpdateSemesterModalOpen(false);
	};

	const handleSemesterUpdateCancel = () => {
		formUpdate.resetFields();
		setIsUpdateSemesterModalOpen(false);
	};
	return (
		<>
			<Modal
				open={isUpdateSemesterModalOpen}
				onOk={handleSemesterUpdateOk}
				onCancel={handleSemesterUpdateCancel}
				closeIcon={false}
			>
				<Form
					name="updateSemester"
					layout="vertical"
					initialValues={semesterData}
					form={formUpdate}
				>
					<Title level={5}>Update Semester</Title>

					<Item name="updateSemesterName" label="Name">
						<Input />
					</Item>
					<Item name="updateSemesterDate" label="Date">
						<RangePicker style={{ width: '100%' }} />
					</Item>
				</Form>
			</Modal>
		</>
	);
}

export default UpdateSemester;
