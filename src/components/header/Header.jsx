import './Header.css';
import { Col, Dropdown, Row, Tooltip } from 'antd';
import {
	SearchOutlined,
	HomeOutlined,
	PlusSquareOutlined,
	UserOutlined,
	UnorderedListOutlined,
  SpotifyOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const items = [
	{
		label: 'Giao diện',
		key: '1',
	},
	{
		label: 'Cài đặt',
		key: '2',
	},
	{
		label: 'Đã lưu',
		key: '3',
	},
  {
		label: 'Lượt thích của bạn',
		key: '4',
	},
  {
		label: 'Báo cáo sự cố',
		key: '5',
	},
  {
		label: 'Đăng xuất',
		key: '6',
	},
];

function Header() {
  	const navigate = useNavigate();
	
	return (
		<Row className="Container">
			<Col  className="Left">
				<SpotifyOutlined className="Logo"/>
				<Dropdown
					menu={{
						items,
					}}
					trigger={'click'}
					className='reponsiveDD'
				>
					<UnorderedListOutlined />
				</Dropdown>
			</Col>		

			<Col className="Center">
				<Tooltip title="Home">
					<HomeOutlined className="Home" onClick={() => {
              	navigate('1');
            }} />
				</Tooltip>
				<Tooltip title="Search">
					<SearchOutlined className="Search" onClick={() => {
              	navigate('2');
            }}/>
				</Tooltip>
				<Tooltip title="Create">
            		<PlusSquareOutlined className="More" onClick={() => {
              	navigate('3');
            }}/>
				</Tooltip>
				<Tooltip title="Profile">
            		<UserOutlined className="Person" onClick={() => {
              	navigate('4');
            }}/>
				</Tooltip>
			</Col>

			<Col  className="Right">
				<Dropdown
					menu={{
						items,
					}}
					trigger={'click'}
					className='noneReponsiveDD'
				>
					<UnorderedListOutlined />
				</Dropdown>
			</Col>
		</Row>
	);
}

export default Header;
