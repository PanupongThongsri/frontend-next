"use client";
import React from "react";
import { Button, Typography, Space } from "antd";
import { 
  GithubOutlined, 
  LinkedinOutlined, 
  MailOutlined, 
  DownloadOutlined, 
  ArrowRightOutlined 
} from "@ant-design/icons";
import Image from "next/image";

const { Title, Text } = Typography;

export default function Home() {
  
  const scrollToProjects = () => {
    const element = document.getElementById("experience"); // หรือ id="projects" ถ้ามี
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "80px 40px",
      }}
    >
      <div className="max-w-6xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* --- ฝั่งซ้าย: ข้อความ --- */}
        <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in-up">
          <div>
            <Text className="text-blue-600 font-bold text-lg tracking-wide uppercase">
              Hello, I'm
            </Text>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#001529] mt-2 mb-4 leading-tight">
              Panupong Thongsri <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Frontend Developer
              </span>
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-lg mx-auto md:mx-0 leading-relaxed">
              A passionate Full Stack Developer specializing in <span className="font-semibold text-gray-800">Vue.js, Nuxt.js, Next.js and Node.js</span>. 
              Building seamless web experiences and scalable applications.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-600">
            {/* <a href="https://github.com/yourusername" target="_blank" className="hover:text-black transition-colors">
                <GithubOutlined />
            </a> */}
            <a href="https://www.linkedin.com/in/panupong-thongsri-a3192022b/" target="_blank" className="hover:text-blue-700 transition-colors"><LinkedinOutlined /></a>
            <a href="mailto:panupongt.best88@gmail.com" className="hover:text-red-500 transition-colors"><MailOutlined /></a>
          </div>

          {/* Buttons Group */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
            <Button 
              type="primary" 
              size="large" 
              shape="round"
              className="h-12 px-8 text-lg font-medium bg-[#001529]"
              icon={<ArrowRightOutlined />}
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            
            <Button 
              size="large" 
              shape="round"
              className="h-12 px-8 text-lg font-medium border-blue-600 text-blue-600 hover:text-blue-700 hover:border-blue-700"
              icon={<DownloadOutlined />}
              onClick={() => window.open('/Resume_Panupong.pdf', '_blank')} // ใส่ไฟล์ resume.pdf ไว้ใน folder public
            >
              Download CV
            </Button>
          </div>
        </div>

        {/* --- ฝั่งขวา: รูปโปรไฟล์ --- */}
        <div className="flex-1 flex justify-center md:justify-end relative">
            {/* วงกลมตกแต่งด้านหลัง */}
            <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-blue-200 rounded-full blur-3xl opacity-30 -z-10 top-10 right-10 animate-pulse"></div>
            
            <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] border-4 border-white shadow-2xl rounded-full overflow-hidden">
                {/* <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80" 
                  alt="Profile"
                  className="w-full h-full object-cover"
                /> */}
            </div>
        </div>

      </div>
    </div>

    // <></>
  );
}