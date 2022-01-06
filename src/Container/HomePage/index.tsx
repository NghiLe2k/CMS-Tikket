import React, { FC } from "react";
import { Layout, Menu, Table } from "antd";
import { Input, Space } from "antd";
import NavBar from "../../Components/Navbar";
import "./../../App.css";
import MenuAntd from "../../Components/Menu";
import DanhSachVe from "./DanhSachVe";
import { MailOutlined, BellOutlined } from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const { Search } = Input;
const HomePage: FC = () => (
  <div>
    <Layout style={{ background: "#E5E5E5" }}>
      <Header
        style={{
          background: "#E5E5E5",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "95%",
        }}
      >
        <div style={{ width: "133px", height: "58px" }}>
          <img style={{ width: "100%" }} src="../logocms.png" alt="" />
        </div>
        <Search
          placeholder="search"
          allowClear
          style={{ width: 437, height: 48, marginLeft: "200px" }}
        />
        <div>
          <MailOutlined style={{ width: "20px", height: "7px" }} />
          <BellOutlined style={{ width: 20, height: 7 }} />
        </div>
      </Header>
      <Layout>
        <Sider style={{ background: "#E5E5E5" }}>
          <MenuAntd></MenuAntd>
        </Sider>
        <Layout>
          <Content style={{ background: "#FFFFFF" }}>
            <DanhSachVe></DanhSachVe>
          </Content>

          <Footer style={{ background: "#E5E5E5" }}>Footer</Footer>
        </Layout>
      </Layout>
    </Layout>
  </div>
);

export default HomePage;
