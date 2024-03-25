import React, { useState } from 'react';
import { Input, Button, Form, Modal, Select, Row, Col, Card, Descriptions, Divider, Flex, Pagination  } from 'antd';
import {DeleteOutlined, EditOutlined } from '@ant-design/icons';

const CreateUser = ({ isModalOpen, setIsModalOpen }) => {
  const [newRole, setNewRole] = useState("");
  const [newFacuty, setNewFacuty] = useState("");
  const [form] = Form.useForm();
  const [cards, setCards] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");

  const handleFormSubmit = () => {
    form.validateFields().then((values) => {
      const { fullname, gmail } = values;
      const isDuplicate = cards.some((card, index) => {
        if (editIndex !== null && editIndex !== undefined && index === editIndex) {
          return false;
        }
        return card.fullname === fullname || card.gmail === gmail;
      });
  
      if (isDuplicate) {
        Modal.error({
          title: 'Error',
          content: 'Fullname or Gmail already exists!',
        });
      } else {
        if (editIndex !== null && editIndex !== undefined) {
          const updatedCards = [...cards];
          updatedCards[editIndex] = { ...values };
          setCards(updatedCards);
          setEditIndex(null); // Đặt lại giá trị editIndex thành null
        } else {
          const isEditMode = editIndex !== null && editIndex !== undefined;
          if (isEditMode) {
            Modal.error({
              title: 'Error',
              content: 'Cannot create new card while editing an existing one!',
            });
          } else {
            const newCard = { ...values };
            setCards([...cards, newCard]);
          }
        }
        console.log('Form submitted:', values);
        handleModalClose();
      }
    });
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleChangeRole = (value) => {
    setSelectedRole(value);
    setNewRole(value);
    if (value === "Student") {
      setNewFacuty(""); // Đặt giá trị mặc định là "IT" khi chọn role là "Student"
    } else {
      setNewFacuty(null); // Đặt giá trị là null khi chọn role là "Mm" hoặc "Mc"
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    form.setFieldsValue(cards[index]);
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  const handleModalOpen = () => {
    setModalVisible(true);
  };

  return (
    <>
        <Modal
            title="Add User"
            open={isModalOpen}
            onCancel={handleModalClose}
            footer={null}
            centered
        >
            <Form
            className="modal-form"
            onFinish={handleFormSubmit}
            layout="vertical"
            form={form}
            >
            <Form.Item label="Full name" name="fullname" rules={[{ required: true, message: 'Please input your full name!' }]}>
                <Input />
            </Form.Item>

            <Form.Item
                label="Gmail"
                name="gmail"
                rules={[
                { required: true, message: 'Please input your Gmail!' },
                {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Please enter a valid email address!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Row gutter={16}>
                <Col span={24}>
                <Form.Item label="Role" name="role">
                    <Select
                    value={newRole}
                    onChange={handleChangeRole}
                    >
                    {["Student", "Mm", "Mc"].map((option) => (
                        <Select.Option key={option} value={option}>
                        {option}
                        </Select.Option>
                    ))}
                    </Select>
                </Form.Item>
                </Col>

                <Col span={24}>
                {newRole === "Student" && (
                    <Form.Item label="Faculty" name="faculty">
                    <Select
                        value={newFacuty}
                        onChange={(selectedValues) => setNewFacuty(selectedValues)}
                    >
                        {["IT", "Business", "Graphic Design"].map((option) => (
                        <Select.Option key={option} value={option}>
                            {option}
                        </Select.Option>
                        ))}
                    </Select>
                    </Form.Item>
                )}
                </Col>
            </Row>

            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
            </Form>

        </Modal>

        {cards.map((card, index) => (
        <React.Fragment key={index}>
          <Card
            actions={[
              <EditOutlined key="edit" onClick={() => handleEdit(index)} />,
              <DeleteOutlined key="delete" onClick={() => handleDelete(index)} />,
            ]}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Descriptions column={1}>
                  <Descriptions.Item label="Full name">{card.fullname}</Descriptions.Item>
                  <Descriptions.Item label="Gmail">{card.gmail}</Descriptions.Item>
                </Descriptions>
              </Col>
              <Col span={12}>
                <Descriptions column={1}>
                  <Descriptions.Item label="Role">{card.role}</Descriptions.Item>
                  <Descriptions.Item label="Faculty">{card.faculty}</Descriptions.Item>
                </Descriptions>
              </Col>
            </Row>
          </Card>
          <Divider orientation="center" plain />
        </React.Fragment>
      ))}
    </>
  )
}

export default CreateUser;
