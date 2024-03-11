import "./Header.css"
import { Dropdown, Menu, Tooltip } from 'antd';
import {
  SearchOutlined,
  HomeOutlined,
  PlusSquareOutlined,
  UserOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';

const menuItems = [
  'Giao diện',
  'Cài đặt',
  'Đã lưu',
  'Lượt thích của bạn',
  'Báo cáo sự cố',
  'Đăng xuất',
];

const dropdownMenu = (
  <Menu>
    {menuItems.map((item, index) => (
      <Menu.Item key={index}>
        <a href="#">{item}</a>
      </Menu.Item>
    ))}
  </Menu>
);

function Header() {
  return (
    <div className='Container'>
      <div className="Left">
        <span className="Logo">
          <img src="https://res.cloudinary.com/detqcm2nt/image/upload/v1709907116/samples/threads.jpg" alt="" />
        </span>
      </div>

      <div className="Center">
        <Tooltip title="Home">
          <a href="1">
            <div className="Home">
              <HomeOutlined />
            </div>
          </a>
        </Tooltip>
        <Tooltip title="Search">
          <a href="2">
            <div className="Search">
              <SearchOutlined />
            </div>
          </a>
        </Tooltip>
        <Tooltip title="Create">
          <a href="3">
            <div className="More">
              <PlusSquareOutlined />
            </div>
          </a>
        </Tooltip>
        <Tooltip title="Profile">
          <a href="4">
            <div className="Person">
              <UserOutlined />
            </div>
          </a>
        </Tooltip>
      </div>

      <div className="Right">
        <Dropdown overlay={dropdownMenu} trigger={['click']}>
          <span>
            <UnorderedListOutlined />
          </span>
        </Dropdown>
      </div>
    </div>
  )
}

export default Header