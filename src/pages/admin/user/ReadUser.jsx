import React, { useState } from 'react';
import { Input, Button, Flex, Form, Space, Modal, Select, Row, Col, Avatar, Card, Descriptions } from 'antd';
import { SearchOutlined, CloseCircleFilled, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import './ReadUser.css'; // Import CSS file for custom styles

function ReadUser() {
  const [searchValue, setSearchValue] = useState('');
  const [showClearIcon, setShowClearIcon] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [newRole, setNewRole] = useState("");
  const [newFacuty, setNewFacuty] = useState("");
  const [form] = Form.useForm();
  const { Meta } = Card;
  const [cards, setCards] = useState([]); // State to store card data
  const [editIndex, setEditIndex] = useState(null);


  const handleSearch = (value) => {
    setSearchValue(value);
    setShowClearIcon(!!value); // Hiển thị biểu tượng khi có nội dung trong ô input
  };

  const handleClearInput = () => {
    setSearchValue('');
    setShowClearIcon(false); // Ẩn biểu tượng khi xóa nội dung của ô input
  };

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const handleModalOpen = () => {
    setModalVisible(true);
    setNewRole("");
    setNewFacuty("");
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleFormSubmit = (values) => {
    const newCard = { ...values };
    setCards([...cards, newCard]); // Add new card data to the existing cards
    console.log('Form submitted:', newCard);
    // Đóng Modal sau khi form được gửi đi
    handleModalClose();
  };

  const handleEdit = (index) => {
    setEditIndex(index); // Cập nhật chỉ số của card đang được chỉnh sửa
    form.setFieldsValue(cards[index]); // Cập nhật dữ liệu trong form với dữ liệu của card được chọn
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
            suffix=
              {
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
          visible={modalVisible}
          onCancel={handleModalClose}
          footer={null}
          centered
        >
          <Form
            className="modal-form"
            onFinish={handleFormSubmit}
            layout="vertical"
          >
            <Form.Item label="Full name" name="fullname" >
              <Input />
            </Form.Item>

            <Form.Item label="Gmail" name="gmail" >
              <Input />
            </Form.Item>

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Role" name="role">
                  <Select
                    value={newRole}
                    onChange={(selectedValues) => setNewRole(selectedValues)}
                  >
                    {[
                      "Admin",
                      "Student",
                      "Mm",
                      "Mc"
                    ].map((option) => (
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

            {/* <Form.Item label="Birthdate" name="birthdate">
              <DatePicker />
            </Form.Item> */}

            <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>

        </Modal>
      </Form>

      {cards.map((card, index) => (
        <Card
          className='data-user'
          key={index}
          style={{
            width: 600,
            marginTop: 16,
            margin: 'auto',
          }}
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
      ))}

    </>
  );
}

export default ReadUser;
