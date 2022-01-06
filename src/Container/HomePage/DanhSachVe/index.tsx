import { Table, Tag, Space } from "antd";

import React from "react";

export default function index() {
  const columns = [
    {
      title: "STT",
      dataIndex: "STT",
      key: "STT",
    },
    {
      title: "Booking code",
      dataIndex: "Booking code",
      key: "Booking code",
    },
    {
      title: "Số vé",
      dataIndex: "Số vé",
      key: "Số vé",
    },
    {
      title: "Tình trạng sử dụng",
      key: "Tình trạng sử dụng",
      dataIndex: "Tình trạng sử dụng",
    },
    {
      title: "Ngày sử dụng",
      key: "Ngày sử dụng",
    },
    {
      title: "Ngày xuất vé",
      key: "Ngày xuất vé",
    },
    {
      title: "Cổng checkin",
      key: "Cổng checkin",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];
  return (
    <div>
      <div>
        <h1 style={{ marginLeft: "-1200px" }}>Danh sách vé</h1>
      </div>
      <Table dataSource={data} columns={columns} />;
    </div>
  );
}
