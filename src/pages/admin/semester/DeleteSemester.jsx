import { Modal, Typography } from 'antd';
import React from 'react';
import { useDeleteSemester } from '../../../hooks/useSemester';

const { Title, Text } = Typography;

function DeleteSemester({
	semesterId,
	isDeleteSemesterModalOpen,
	setIsDeleteSemesterModalOpen,
}) {
	const { mutate: deleteSemester, isError } = useDeleteSemester(semesterId);

	const handleDeleteSemesterOk = () => {
		try {
			deleteSemester();
			setIsDeleteSemesterModalOpen(false);
		} catch (e) {
			isError ? console.log(isError) : console.log(e);
		}
	};

	return (
		<>
			<Modal
				open={isDeleteSemesterModalOpen}
				title="Delete Semester"
				onOk={handleDeleteSemesterOk}
				onCancel={() => setIsDeleteSemesterModalOpen(false)}
			>
				<Title level={4}>Delete the Semester</Title>
				<Text>Do you really want to delete the semester ?</Text>
			</Modal>
		</>
	);
}

export default DeleteSemester;
