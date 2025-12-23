"use client";
import React from "react";
import { Card, Tag } from "antd";
import { useRouter } from "next/navigation";
import { NewsItem } from "@/utils/api"; // ต้องแน่ใจว่า path นี้ตรงกับไฟล์ type ของคุณ

interface NewsCardProps {
  news: NewsItem;
}

export default function NewsCard({ news }: NewsCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/news/${news.uuid}`);
  };

  return (
    <Card
      hoverable
      onClick={handleClick}
      // จัด Style ตัวการ์ด: ขอบมน, เงา, และ Animation
      className="h-full shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden border border-gray-100 group"
      // กำหนด Body ของ Card ให้มีความสูงคงที่เพื่อความเท่ากัน
      styles={{
        body: {
          padding: "20px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
      cover={
        <div className="h-48 overflow-hidden relative bg-gray-100">
          {/* รูปภาพข่าว */}
          <img
            alt={news.title}
            src={
              news.image_url ||
              "https://via.placeholder.com/600x400?text=No+Image"
            }
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              // ถ้าโหลดรูปไม่ได้ ให้เปลี่ยนเป็นรูป Default ทันที
              (e.target as HTMLImageElement).src =
                "https://via.placeholder.com/600x400?text=Image+Not+Found";
            }}
          />

          {/* Overlay สีดำจางๆ ตอน Hover (Optional - เพิ่มความสวยงาม) */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        </div>
      }
    >
      <div className="flex flex-col h-full">
        {/* ส่วนหัว: วันที่ และ แหล่งข่าว */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs text-gray-400 font-medium">
            {new Date(news.published_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <Tag
            color="cyan"
            className="mr-0 text-[10px] uppercase font-bold border-none"
          >
            {news.source}
          </Tag>
        </div>

        {/* หัวข้อข่าว: ตัดคำเหลือ 2 บรรทัด */}
        <h3 className="text-lg font-bold mb-2 line-clamp-2 leading-tight text-gray-800 group-hover:text-blue-600 transition-colors">
          {news.title}
        </h3>

        {/* คำอธิบาย: ตัดคำเหลือ 3 บรรทัด */}
        <p className="text-gray-500 text-sm line-clamp-3 mb-0">
          {news.description || news.snippet}
        </p>
      </div>
    </Card>
  );
}
