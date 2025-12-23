"use client";
import { useState, useEffect } from "react";
import { Button, Row, Col, Spin } from "antd";
import { useRouter } from "next/navigation";
import NewsCard from "@/components/NewsCard"; // ✅ ตรวจสอบ Path ให้ถูกต้อง
import { fetchNews, NewsItem } from "@/utils/api"; // ✅ ตรวจสอบ Path ให้ถูกต้อง

export default function News() {
  const router = useRouter();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. ดึงข้อมูลเมื่อ Component ถูกโหลด
  useEffect(() => {
    const loadData = async () => {
      // เรียกใช้ฟังก์ชัน fetchNews ที่เราสร้างไว้ใน utils/api.ts
      const data = await fetchNews();
      
      setNews(data);
      setLoading(false);

      // ✅ (Optional) บันทึกลง LocalStorage เพื่อให้หน้า Detail ดึงไปใช้ต่อได้เลย
      // จะได้ไม่ต้องยิง API ซ้ำอีกรอบตอนกดเข้าไปดูรายละเอียด
      if (data.length > 0) {
        localStorage.setItem("latestNews", JSON.stringify(data));
      }
    };

    loadData();
  }, []);

  // 2. ตัดข้อมูลเอาแค่ 6 ข่าวล่าสุดมาแสดงหน้าแรก
  const featuredNews = news.slice(0, 6);

  return (
    <div
      style={{
        minHeight: "80vh", 
        background: "#ffffff", // สีพื้นหลังเดิมที่คุณใช้
        padding: "80px 20px",  // เพิ่ม padding บนล่างให้ดูโปร่ง
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div className="max-w-7xl w-full">
        {/* Header ของ Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">News</h2>
          <p className="text-lg text-gray-600">
            อัปเดตข่าวสารและบทวิเคราะห์ทางการเงินล่าสุดจากทั่วโลก
          </p>
        </div>

        {/* Content: แสดง Loading หรือ แสดงรายการข่าว */}
        {loading ? (
          <div className="flex flex-col justify-center items-center h-64 gap-4">
            <Spin size="large" />
            <span className="text-gray-500 font-medium">Loading news...</span>
          </div>
        ) : (
          <>
            {/* Grid แสดงข่าว: ใช้ Ant Design Row/Col เพื่อความ Responsive */}
            <Row gutter={[24, 24]}>
              {featuredNews.map((item) => (
                // xs=24 (มือถือเต็มจอ), sm=12 (แท็บเล็ต 2 คอลัมน์), lg=8 (จอใหญ่ 3 คอลัมน์)
                <Col xs={24} sm={12} lg={8} key={item.uuid}>
                  <NewsCard news={item} />
                </Col>
              ))}
            </Row>

            {/* ปุ่มดูทั้งหมด */}
            <div className="mt-12 text-center">
              <Button 
                type="primary" 
                size="large" 
                shape="round"
                className="h-12 px-10 text-lg bg-[#001529] hover:bg-blue-700 border-none shadow-md transition-transform hover:scale-105"
                onClick={() => router.push('/news')} // ลิงก์ไปหน้าแสดงข่าวทั้งหมด
              >
                View All News
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}