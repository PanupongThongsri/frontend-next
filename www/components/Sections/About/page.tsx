"use client";
import React from "react";
import { Row, Col, Card, Typography, Divider } from "antd";
import { 
  RocketOutlined, 
  TeamOutlined, 
  DesktopOutlined, 
  CheckCircleFilled 
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export default function About() {
  
  // จุดเด่นที่ดึงมาจาก Text ของคุณ
  const highlights = [
    {
      icon: <DesktopOutlined />,
      title: "Responsive & UI/UX",
      desc: "Creating user-friendly interfaces that look great on any device."
    },
    {
      icon: <RocketOutlined />,
      title: "Performance",
      desc: "Optimizing code and assets for fast-loading web applications."
    },
    {
      icon: <TeamOutlined />,
      title: "Team Player",
      desc: "Eager to contribute technical expertise to innovative teams."
    }
  ];

  return (
    <div
      style={{
        minHeight: "80vh", // ไม่ต้องเต็มจอมาก ให้พอดีเนื้อหา
        background: "#ffffff",
        padding: "80px 20px",
        display: "flex",
        alignItems: "center"
      }}
    >
      <div className="max-w-6xl w-full mx-auto">
        <Row gutter={[48, 48]} align="middle">
          
          {/* --- ฝั่งซ้าย: เนื้อหา Story --- */}
          <Col xs={24} md={12}>
            <div className="animate-fade-in-left">
              <Title level={4} className="text-blue-600 uppercase tracking-widest mb-2">
                About Me
              </Title>
              <Title level={2} style={{ marginTop: 0, marginBottom: '24px' }}>
                Professional Frontend Developer <br/>
                <span className="text-gray-400 font-light text-3xl">4 Years of Experience</span>
              </Title>
              
              <Paragraph className="text-lg text-gray-600 leading-8 mb-8 text-justify">
                "I’m a Frontend Developer with 4 years of experience in
                developing web applications using <strong className="text-green-600">Vue.js</strong> and <strong className="text-green-600">Nuxt.js</strong>.
                Proficient in creating responsive, user-friendly interfaces
                and optimizing performance through intuitive UI/UX design.
                Eager to leverage technical expertise and industry
                knowledge to contribute to innovative teams dedicated to
                delivering high-quality digital solutions."
              </Paragraph>

              <Divider />

              {/* ข้อมูลส่วนตัวพื้นฐาน (Mockup) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                   <Text strong className="block text-gray-800">Age:</Text>
                   <Text className="text-gray-500">28 Years</Text> {/* แก้ตัวเลขจริง */}
                </div>
                <div>
                   <Text strong className="block text-gray-800">Residence:</Text>
                   <Text className="text-gray-500">Bangkok, Thailand</Text>
                </div>
                <div>
                   <Text strong className="block text-gray-800">Email:</Text>
                   <Text className="text-blue-500">panupongt.best88@gmail.com</Text>
                </div>
                <div>
                   <Text strong className="block text-gray-800">Freelance:</Text>
                   <Text className="text-green-500"><CheckCircleFilled /> Available</Text>
                </div>
              </div>
            </div>
          </Col>

          {/* --- ฝั่งขวา: Highlight Cards --- */}
          <Col xs={24} md={12}>
            <div className="grid grid-cols-1 gap-6">
              {highlights.map((item, index) => (
                <Card 
                  key={index}
                  bordered={false}
                  className="shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                  style={{ borderRadius: '12px' }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-600 text-2xl">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-500 m-0">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Col>

        </Row>
      </div>
    </div>
  );
}