import { DatePicker, Form, Input, Modal, Typography } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';
import { usePostSemester } from '../../../hooks/useSemester';

const { Item } = Form;
const { Title } = Typography;
const { RangePicker } = DatePicker;

function CreateSemester({ isCreateSemesterModalOpen, setIsCreateSemesterModalOpen }) {
	const [semesterInfo, setSemesterInfo] = useState({});

	const { mutate: createSemester, isError } = usePostSemester();

	const handleSemesterCreateOk = async () => {
		console.log(semesterInfo);
		try {
			createSemester({
				...semesterInfo,
			});
			setIsCreateSemesterModalOpen(false);
			setSemesterInfo({});
		} catch (e) {
			isError ? console.log(isError) : console.log(e);
		}
		
	};

	const handleSemesterCreateCancel = () => {
		setIsCreateSemesterModalOpen(false);
		setSemesterInfo({});
	};
	return (
		<>
			<Modal
				open={isCreateSemesterModalOpen}
				onOk={handleSemesterCreateOk}
				onCancel={handleSemesterCreateCancel}
				closeIcon={false}
			>
				<Form name="createSemester" layout="vertical">
					<Title level={5}>Create new Semester</Title>

					<Item name="name" label="Name">
						<Input
							value={semesterInfo.semesterName}
							onChange={(e) =>
								setSemesterInfo({ ...semesterInfo, semesterName: e.target.value })
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
