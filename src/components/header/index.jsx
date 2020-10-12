/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Menu, Dropdown } from 'antd';
import Logo from 'assets/images/logo.png';
import { DownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Logout
      </a>
    </Menu.Item>
  </Menu>
);
const Header = () => (
  <>
    <div className="header-user">
      <div className="content">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            Hello, Tatar <DownOutlined />
          </a>
        </Dropdown>
      </div>
    </div>
    <div className="header">
      <h2 className="bold">ONCOGUARD Simulator</h2>
      <div className="text-right">
        <img src={Logo} alt="Logo" width="120" />
      </div>
    </div>
    <style jsx>
      {`
        .header-user{
          background: #000;
          height: 30px;
          color: white;
          text-align: right;

          .content{
            max-width: 1280px;
            width: 100%;
            margin: 0 auto;
            padding-top: 5px;
          }
        }
      .header{
        display: flex;
        justify-content: space-between;

        h2{
          margin-bottom: 0;
          padding-top: 10px;
        }
      }
    `}
    </style>
  </>
);

export default Header;
