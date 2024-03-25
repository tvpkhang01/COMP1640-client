import React, { useState } from 'react';
import { Input, Button, Form, Modal, Select, Row, Col, Card, Descriptions, Divider, Flex, Pagination  } from 'antd';
import { SearchOutlined, CloseCircleFilled, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import CreateUser from "./CreateUser";
import './ReadUser.css';

const { Meta } = Card;

function ReadUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [selectedButton, setSelectedButton] = useState(null);
  const [showClearIcon, setShowClearIcon] = useState(false);
  const [form] = Form.useForm();
  const [cards, setCards] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts = 30; // Example total number of posts
  const postsPerPage = 1;

  const currentPosts = Array.from({ length: postsPerPage }, (_, index) => ({
    id: (currentPage - 1) * postsPerPage + index + 1,
    content: `Post ${(currentPage - 1) * postsPerPage + index + 1}`,
  }));

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
    setIsModalOpen(true);
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
    setIsModalOpen(false);
    form.resetFields();
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
        
        <CreateUser
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </Form>

      <Pagination
        className="pagination-container"
        simple
        current={currentPage}
        total={totalPosts}
        pageSize={postsPerPage}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </>
  );
}

export default ReadUser;
