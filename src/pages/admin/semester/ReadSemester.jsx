import {
	Breadcrumb,
	Button,
	Card,
	Col,
	Input,
	Row,
	Space,
	Typography,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import CreateSemester from './CreateSemester';
import UpdateSemester from './UpdateSemester';

const { Title, Text } = Typography;

function ReadSemester() {
	const [isCreateSemesterModalOpen, setIsCreateSemesterModalOpen] = useState(false);
  const [isUpdateSemesterModalOpen, setIsUpdateSemesterModalOpen] = useState(false);

	const handleCloseCreateSemesterModal = () => {
		setIsSemesterModalOpen(false);
	};

  const handleCloseUpdateSemesterModal = () => {
    setIsUpdateSemesterModalOpen(false);
  }

	const handleSearchSemester = () => {};

  const handleDeleteSemester = () => {};

	const navigate = useNavigate();
	const goHome = () => {
		navigate('/admin');
	};
	const goSemester = () => {
		navigate('/admin/semester');
	};
	return (
		<>
			<Breadcrumb
				items={[
					{
						title: (
							<Text style={{ cursor: 'pointer' }} onClick={goHome}>
								Home
							</Text>
						),
					},
					{
						title: (
							<Text style={{ cursor: 'pointer' }} onClick={goSemester}>
								Semester
							</Text>
						),
					},
				]}
        style={{ marginLeft: '20px'}}
			/>
			<Title level={2}>Semester</Title>

			<Row gutter={16} style={{ margin: 'auto', width: '50%' }}>
				<Col
					span={24}
					style={{ margin: '10px' }}
				>
					<Input onClick={handleSearchSemester}></Input>
				</Col>
				<Col
					span={24}
					style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}
				>
					<Button
            style={{ width: '100%'}}
						onClick={() => {
							setIsCreateSemesterModalOpen(true);
						}}
					>
						Add a semester now
					</Button>
					<CreateSemester
						isCreateSemesterModalOpen={isCreateSemesterModalOpen}
						setIsCreateSemesterModalOpen={setIsCreateSemesterModalOpen}
						onCancel={handleCloseCreateSemesterModal}
					/>
				</Col>
				<Col
					span={24}
					style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px', height: '100%' }}
				>
					<Card style={{ width: '100%'}}>
						<Space direction="horizontal">
							<Title level={4}>Spring 2024</Title>
						</Space>
						<Row gutter={16}>
							<Col span={6} offset={12}>
								<Title level={5}>Start Date</Title>
							</Col>
							<Col span={6}>
								<Title level={5}>End Date</Title>
							</Col>
						</Row>
					</Card>
          <Row gutter={16} style={{ width: '100%'}}>
            <Col span={6}><Button
            style={{ width: '100%', margin: '10px 10px 10px 0' }}
            onClick={() => {setIsUpdateSemesterModalOpen(true)}}>Edit</Button></Col>
            <Col span={6}><Button
            style={{ width: '100%', margin: '10px 10px 10px 0' }}
            onClick={handleDeleteSemester}>Delete</Button>
            <UpdateSemester
						isUpdateSemesterModalOpen={isUpdateSemesterModalOpen}
						setIsUpdateSemesterModalOpen={setIsUpdateSemesterModalOpen}
						onCancel={handleCloseUpdateSemesterModal}
					/>
          </Col>
          </Row>
					
				</Col>
			</Row>
		</>
	);
}

export default ReadSemester;
