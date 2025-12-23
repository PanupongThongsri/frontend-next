"use client";
import React from "react";
import { Timeline, Card, Tag, Row, Col, Typography } from "antd";
import {
  CodeOutlined,
  LaptopOutlined,
  DatabaseOutlined,
  ClockCircleOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function Experience() {
  // 1. ข้อมูล Skills
  const skills = [
    {
      name: "Vue.js",
      type: "Frontend",
      color: "green",
      icon: <CodeOutlined />,
    },
    {
      name: "Nuxt.js",
      type: "Frontend",
      color: "green",
      icon: <CodeOutlined />,
    },
    { name: "React", type: "Frontend", color: "blue", icon: <CodeOutlined /> },
    {
      name: "Next.js",
      type: "Frontend",
      color: "blue",
      icon: <CodeOutlined />,
    },
    {
      name: "Node.js",
      type: "Backend",
      color: "green",
      icon: <DatabaseOutlined />,
    },
    { name: "HTML5", type: "Basic", color: "orange", icon: <LaptopOutlined /> },
    {
      name: "CSS3 / Tailwind",
      type: "Basic",
      color: "black",
      icon: <LaptopOutlined />,
    },
    {
      name: "Ant Design",
      type: "UI Lib",
      color: "red",
      icon: <LaptopOutlined />,
    },
  ];

  // 2. ข้อมูล Experience (Timeline)
  const experiences = [
    {
      role: "Frontend Developer",
      company: "WORKMOTION CO., LTD.",
      date: "2023 - Present",
      description:
        "Developed modern web applications using Next.js and Ant Design. Improved site performance by 40%.",
      tags: ["Vue.js", "Nuxt.js", "Next.js", "Node.js", "MongoDB"],
      label: "",
      children: "",
    },
    {
      role: "Frontend Developer",
      company: "HEPTAPOD CO., LTD.",
      date: "2021 - 2023",
      description:
        "Built scalable e-commerce platforms using Nuxt.js and Node.js backend. Managed database schema design.",
      tags: ["Vue.js", "Nuxt.js"],
      label: "",
      children: "",
    },
    {
      role: "Junior Web Developer",
      company: "Startup C",
      date: "2020 - 2021",
      description:
        "Responsible for maintaining legacy code and implementing new UI features using HTML, CSS, and jQuery.",
      tags: ["HTML", "CSS", "JavaScript"],
      label: "",
      children: "",
    },
  ];

  // ✅ แปลงข้อมูล Experience ให้เป็น Format ของ Timeline Items (Antd v5 Standard)
  const timelineItems = experiences.map((exp) => ({
    color: "blue",
    // label คือส่วนที่อยู่ฝั่งตรงข้าม (ในที่นี้คือวันที่)
    label: (
      <span className="text-gray-500 font-medium hidden md:block">
        {exp.date}
      </span>
    ),
    // children คือเนื้อหาหลัก (Card)
    children: (
      <Card
        size="small"
        // ✅ แก้ Warning 1: ใช้ variant="outlined" หรือ "borderless" แทน bordered
        variant="outlined"
        className="shadow-sm border-l-4 border-l-blue-500 mb-6 hover:shadow-md transition-shadow"
      >
        {/* แสดงวันที่ใน Card ด้วยสำหรับมือถือ (เพราะ label จะถูกซ่อน) */}
        <span className="text-xs text-gray-400 md:hidden mb-1 block">
          {exp.date}
        </span>

        <h4 className="text-lg font-bold text-gray-800">{exp.role}</h4>
        <p className="text-blue-600 font-medium mb-2">@ {exp.company}</p>
        <p className="text-gray-600 mb-3 text-sm">{exp.description}</p>

        <div className="flex flex-wrap gap-1">
          {exp.tags.map((tag) => (
            // ✅ แก้ Warning 4: ใช้ variant="filled" แทน bordered={false}
            <Tag key={tag} color="blue" variant="filled">
              {tag}
            </Tag>
          ))}
        </div>
      </Card>
    ),
  }));

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: "80px 20px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Title level={2} style={{ marginBottom: 0 }}>
            Experience & Skills
          </Title>
          <Text type="secondary" style={{ fontSize: "16px" }}>
            My technical journey and professional milestones.
          </Text>
        </div>

        <Row gutter={[48, 48]}>
          {/* Skills Section */}
          <Col xs={24} md={10}>
            <h2
              className="text-xl font-bold mb-8 flex items-center text-black"
              style={{ justifyContent: "center" }}
            >
              <ApartmentOutlined className="mr-3 text-blue-600" />
              Tech Stack
            </h2>

            {/* <p className="text-gray-500 mb-6 text-center">
              Technologies and tools I use to build high-quality software.
            </p> */}

            <div
              //title={<span className="text-xl font-bold">Tech Stack</span>}
              // ✅ แก้ Warning 1: ใช้ variant="borderless" แทน bordered={false}
              //variant="borderless"
              className="shadow-lg"
              //h-full
            >
              {/* <p className="text-gray-500 mb-6">
                Technologies and tools I use to build high-quality software.
              </p> */}

              <div
                className="flex flex-wrap gap-3"
                style={{ justifyContent: "center" }}
              >
                {skills.map((skill, index) => (
                  <Card.Grid
                    key={index}
                    style={{
                      width: "45%",
                      textAlign: "center",
                      padding: "15px",
                      cursor: "default",
                    }}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className="text-2xl mb-2"
                      style={{
                        color: skill.color === "black" ? "#000" : skill.color,
                      }}
                    >
                      {skill.icon}
                    </div>
                    <div className="font-semibold text-black">{skill.name}</div>
                    <div className="text-xs text-gray-400">{skill.type}</div>
                  </Card.Grid>
                ))}
              </div>
            </div>
          </Col>

          {/* Timeline Section */}
          <Col xs={24} md={14}>
            <h2
              className="text-xl font-bold mb-8 flex items-center text-black"
              style={{ justifyContent: "center" }}
            >
              <ClockCircleOutlined className="mr-3 text-blue-600" />
              Work History
            </h2>

            {/* ✅ แก้ Warning 2 & 3: ใช้ prop items และเปลี่ยน mode */}
            <Timeline items={timelineItems} />
          </Col>
        </Row>
      </div>
    </div>
  );
}
