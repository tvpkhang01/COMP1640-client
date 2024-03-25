import React, { useState } from 'react';
import { Typography, Card, Avatar, Space, Pagination, Button, Image, Row, Col } from 'antd';
import { FileTextOutlined, DownloadOutlined } from '@ant-design/icons';
import './MaketingHome.css';

const { Title, Text } = Typography;

function MaketingHome() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts = 30; 
  const postsPerPage = 10;

  // Tạo danh sách bài đăng cho trang hiện tại
  const currentPosts = Array.from({ length: postsPerPage }, (_, index) => ({
    id: (currentPage - 1) * postsPerPage + index + 1,
    content: `Post ${(currentPage - 1) * postsPerPage + index + 1}`,
    docxUrl: `url/to/docx/file/${index + 1}`,
    imageUrls: [`url/to/image/file/${index + 1}`],
  }));

  

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
      <Col xs={24} sm={20} md={16} lg={12} xl={10} xxl={8}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Space size="large" className="post-actions">
            <Button type="primary">Select All</Button>
            <Button type="primary" icon={<DownloadOutlined />}>Download</Button>
          </Space>

          <Space direction="vertical" style={{ width: '50%' }} className="post-list">
            {currentPosts.map(post => (
              <Card key={post.id} className="post-card" style={{ width: '200%' }}>
                <Card.Meta
                  avatar={<Avatar src="https://via.placeholder.com/50" />}
                  title={
                    <Space className="post-card-content" >
                      <Title level={5} className="post-title">John Doe</Title>
                      <Text className="post-description-text">Posted 5 hours ago</Text>
                    </Space>
                  }
                />
                <Row className="post-content">
                  <Space direction="vertical" className="post-content">
                    <Text>{post.content}</Text>
                    <FileTextOutlined />
                    <Button href={post.docxUrl} target="_blank" rel="noopener noreferrer" type="link">Document</Button>

                    {post.imageUrls.map((imageUrl, index) => (
                      <Image key={index} src={imageUrl} width={100} />
                    ))}
                  </Space>
                </Row>
                <Space className="post-actions">
                  <Button type="primary">Select</Button>
                  <Button type="primary" icon={<DownloadOutlined />}>Download</Button>
                </Space>
              </Card>
            ))}
          </Space>

          
        </Space>
      </Col>
    </Row>
  );
}

export default MaketingHome;
