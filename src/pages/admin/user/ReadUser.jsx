import React, { useState } from 'react';
import { Input, Button, Form, Modal, Select, Row, Col, Card, Descriptions, Divider, Flex } from 'antd';
import { SearchOutlined, CloseCircleFilled, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './ReadUser.css';

const { Meta } = Card;

function ReadUser() {
  const [searchValue, setSearchValue] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);
  const [showClearIcon, setShowClearIcon] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [newFacuty, setNewFacuty] = useState("");
  const [form] = Form.useForm();
  const [cards, setCards] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSearch = (value) => {
    setSearchValue(value);
    setShowClearIcon(!!value);
  };

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const handleClearInput = () => {
    setSearchValue('');
    setShowClearIcon(false);
  };

  const handleModalOpen = () => {
    setModalVisible(true);
  };

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
    setModalVisible(false);
    form.resetFields();
  };

  const handleChangeRole = (value) => {
    setSelectedRole(value);
    setNewRole(value);
    if (value === "Mm") {
      setNewFacuty("");
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    form.setFieldsValue(cards[index]);
    handleModalOpen();
  };

  const handleDelete = (index) => {
    const updatedCards = [...cards];
    updatedCards.splice(index, 1);
    setCards(updatedCards);
  };

  return (
    <>
      <Form className="input-container" onFinish={() => {}}>
        <Input 
          className='custom-input'
          prefix={<SearchOutlined />}
          suffix={
            showClearIcon && (
              <CloseCircleFilled
                style={{ fontSize: '15px', cursor: 'pointer', margin:'10px' }}
                onClick={handleClearInput}
              />
            )
          }
          placeholder="Search"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </Form>

      <Flex className="custom-flex-container" >
        <Flex className='custom-flex'>
          <Button
            className={selectedButton === 'all' ? 'selected' : null}
            onClick={() => handleButtonClick('all')}
          >
            All
          </Button>
          <Button
            className={selectedButton === 'follow' ? 'selected' : null}
            onClick={() => handleButtonClick('follow')}
          >
            Follow
          </Button>
          <Button
            className={selectedButton === 'replies' ? 'selected' : null}
            onClick={() => handleButtonClick('replies')}
          >
            Replies
          </Button>
          <Button
            className={selectedButton === 'mentions' ? 'selected' : null}
            onClick={() => handleButtonClick('mentions')}
          >
            Mentions
          </Button>
          <Button
            className={selectedButton === 'quotes' ? 'selected' : null}
            onClick={() => handleButtonClick('quotes')}
          >
            Quotes
          </Button>
          <Button
            className={selectedButton === 'reposts' ? 'selected' : null}
            onClick={() => handleButtonClick('reposts')}
          >
            Reposts
          </Button>
          <Button
            className={selectedButton === 'verified' ? 'selected' : null}
            onClick={() => handleButtonClick('verified')}
          >
            Verified
          </Button>
        </Flex>
      </Flex>

      <Form form={form} onFinish={handleFormSubmit}>
        <Form.Item
          style={{
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Button className='add-user' onClick={handleModalOpen}>
            Add a user now
          </Button>
        </Form.Item>

        <Modal
          title="Add User"
          open={modalVisible}
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
              <Col span={12}>
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

              <Col span={12}>
                <Form.Item label="Faculty" name="faculty">
                  <Select
                    value={newFacuty}
                    onChange={(selectedValues) => setNewFacuty(selectedValues)}
                    disabled={selectedRole === "Mm"}
                  >
                    {[ 
                      "IT",
                      "Business",
                      "Graphic Design",
                    ].map((option) => (
                      <Select.Option key={option} value={option}>
                        {option}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

        </Modal>
      </Form>

      {cards.map((card, index) => (
        <React.Fragment key={index}>
          <Card
            actions={[
              <EditOutlined key="edit" onClick={() => handleEdit(index)} />,
              <DeleteOutlined key="delete" onClick={() => handleDelete(index)} />,
            ]}
          >
            <Row gutter={16} style={{ borderColor: 'black' }}>
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
  );
}

export default ReadUser;
