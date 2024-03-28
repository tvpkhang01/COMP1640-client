import { Breadcrumb, Button, Card, Col, Input, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import CreateSemester from './CreateSemester';
import UpdateSemester from './UpdateSemester';
import { useGetSemesters } from '../../../hooks/useSemester';
import dayjs from 'dayjs';
import DeleteSemester from './DeleteSemester';

const { Title, Text } = Typography;

function ReadSemester() {
	const [isCreateSemesterModalOpen, setIsCreateSemesterModalOpen] =
		useState(false);
	const [isUpdateSemesterModalOpen, setIsUpdateSemesterModalOpen] = useState(
		{}
	);

	const [isDeleteSemesterModalOpen, setIsDeleteSemesterModalOpen] = useState(
		{}
	);

	const { data: semesters, isError } = useGetSemesters();

	const handleSearchSemester = () => {};
	return (
		<>
			<Row gutter={16} style={{ margin: 'auto', width: '50%' }}>
				<Title level={2}>Semester</Title>
				<Col span={24} style={{ margin: '10px' }}>
					<Input onClick={handleSearchSemester}></Input>
				</Col>
				<Col
					span={24}
					style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}
				>
					<Button
						style={{ width: '100%' }}
						onClick={() => {
							setIsCreateSemesterModalOpen(true);
						}}
					>
						Add a semester now
					</Button>
					<CreateSemester
						isCreateSemesterModalOpen={isCreateSemesterModalOpen}
						setIsCreateSemesterModalOpen={setIsCreateSemesterModalOpen}
					/>
				</Col>
				{isError ? (
					<Col>
						<Title level={5}> Data Error</Title>
					</Col>
				) : semesters?.data.length > 0 ? (
					semesters.data.map((semester) => (
						<Col
							span={24}
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								margin: '10px',
								height: '100%',
							}}
							key={semester.id}
						>
							<Card style={{ width: '100%' }}>
								<Row gutter={16}>
									<Col span={8}>
										<Title level={4}>{semester.semesterName}</Title>
									</Col>
									<Col span={8} offset={8}>
										<Title level={5}>
											Updated At:{' '}
											{dayjs(semester.updatedAt).format('DD-MM-YYYY')}
										</Title>
									</Col>

									<Col span={8} offset={8}>
										<Title level={5}>
											Start Date:{' '}
											{dayjs(semester.startDate).format('DD-MM-YYYY')}
										</Title>
									</Col>
									<Col span={8}>
										<Title level={5}>
											End Date: {dayjs(semester.endDate).format('DD-MM-YYYY')}
										</Title>
									</Col>
								</Row>
							</Card>
							<Row gutter={16} style={{ width: '100%' }}>
								<Col span={6}>
									<Button
										style={{ width: '100%', margin: '10px 10px 10px 0' }}
										onClick={() => {
											setIsUpdateSemesterModalOpen((prev) => ({
												...prev,
												[semester.id]: true,
											}));
										}}
									>
										Edit
									</Button>
									<UpdateSemester
										semesterId={semester.id}
										isUpdateSemesterModalOpen={
											isUpdateSemesterModalOpen[semester.id]
										}
										setIsUpdateSemesterModalOpen={(value) =>
											setIsUpdateSemesterModalOpen((prev) => ({
												...prev,
												[semester.id]: value,
											}))
										}
									/>
								</Col>
								<Col span={6}>
									<Button
										style={{ width: '100%', margin: '10px 10px 10px 0' }}
										onClick={() => {
											setIsDeleteSemesterModalOpen((prev) => ({
												...prev,
												[semester.id]: true,
											}));
										}}
									>
										Delete
									</Button>
									<DeleteSemester
										semesterId={semester.id}
										isDeleteSemesterModalOpen={
											isDeleteSemesterModalOpen[semester.id]
										}
										setIsDeleteSemesterModalOpen={(value) =>
											setIsDeleteSemesterModalOpen((prev) => ({
												...prev,
												[semester.id]: value,
											}))
										}
									/>
								</Col>
							</Row>
						</Col>
					))
				) : (
					<Col>
						<Title level={5}>No Semester</Title>
					</Col>
				)}
			</Row>
		</>
	);
}

export default ReadSemester;
