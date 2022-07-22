import {
  BellOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Dropdown, Image, Layout, Menu } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import appLogo from './download.png'

const { Header } = Layout

const HeaderComponent = ({ collapsed, callback }) => {
  return (
    <>
      <Header className="site-layout-background app-header">
        <div className="left">
          <div className="toggle">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => callback(!collapsed),
            })}
          </div>
          <div className="app-header-logo">
            <img src={appLogo} alt="" />
          </div>
        </div>
        <div className="right">
          <div>
            <BellOutlined style={{ fontSize: '18px', marginRight: '10px' }} />
          </div>
          <Dropdown
            className="ms-3 dropdown-box-login"
            overlay={
              <Menu
                style={{
                  marginRight: '40px',
                  width: '240px',
                  height: '120px',
                  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.16)',
                  borderRadius: '8px',
                }}
                className="ul-container"
              >
                <Menu.Item icon={<UserOutlined />} key={2}>
                  <Link to="/userInformation">Thông tin tài khoản</Link>
                </Menu.Item>
                <Menu.Item icon={<LogoutOutlined />} key={3}>
                  <Link to="/login">Đăng nhập</Link>
                </Menu.Item>
                <Menu.Item icon={<LogoutOutlined />} key={3}>
                  <Link to="/logout">Đăng xuất</Link>
                </Menu.Item>
              </Menu>
            }
            placement="bottomCenter"
            key="avatar"
            trigger={['click']}
          >
            <Image
              src="https://scontent.fhan4-3.fna.fbcdn.net/v/t1.6435-9/185807983_3629035960654199_844363685957488110_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=ksuw1SSwGPkAX-DENir&_nc_ht=scontent.fhan4-3.fna&oh=00_AT9o86t4ibciKVSYURtB99nxCqOjcGf3jwNhn1abjg0_Vw&oe=62F32FC0"
              preview={false}
              style={{
                cursor: 'pointer',
                borderRadius: '50%',
              }}
              height={32}
              width={32}
            />
          </Dropdown>
        </div>
      </Header>
    </>
  )
}
export default HeaderComponent
