import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Menu, Button } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

export default class MenuAntd extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 256 }}>
        {/* <Button
          type="primary"
          onClick={this.toggleCollapsed}
          style={{ marginBottom: 16 }}
        >
          {React.createElement(
            this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
          )}
        </Button> */}
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Trang chủ
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Quản lý vé
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Đối soát vé
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Cài đặt">
            <Menu.Item key="5">Gói dịch vụ</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

// ReactDOM.render(<MenuAntd />, mountNode);
