"use client";
import { useState, useEffect } from "react";
import { Row, Col, Button, Spin } from "antd";
import { useRouter } from "next/navigation";
import { ArrowLeftOutlined } from '@ant-design/icons';
import NewsCard from "@/components/NewsCard";
import { fetchNews, NewsItem } from "@/utils/api";

export default function AllNewsPage() {
  const router = useRouter();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchNews();
      setNews(data);
      setLoading(false);
      localStorage.setItem("latestNews", JSON.stringify(data));
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
            <Button 
                icon={<ArrowLeftOutlined />} 
                onClick={() => router.push('/')}
                className="mr-4"
            />
            <h1 className="text-3xl font-bold">All News</h1>
        </div>
        
        {loading ? (
          <div className="flex justify-center mt-20"><Spin size="large" /></div>
        ) : (
          <Row gutter={[24, 24]}>
            {news.map((item) => (
              <Col xs={24} sm={12} lg={8} key={item.uuid}>
                <NewsCard news={item} />
              </Col>
            ))}
          </Row>
        )}
      </div>
    </div>
  );
}