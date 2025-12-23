"use client";
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Button, Tag, Spin } from 'antd';
import { ArrowLeftOutlined, GlobalOutlined } from '@ant-design/icons';
import { NewsItem, fetchNews } from '@/utils/api';

export default function NewsDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findNews = async () => {
      // 1. ลองหาใน LocalStorage ก่อน (เร็วสุด)
      const storedNews = localStorage.getItem("latestNews");
      if (storedNews) {
        const parsedNews: NewsItem[] = JSON.parse(storedNews);
        const found = parsedNews.find((item) => item.uuid === id);
        if (found) {
          setNews(found);
          setLoading(false);
          return;
        }
      }

      // 2. ถ้าไม่มีใน Storage (เช่น User เข้าผ่านลิงก์โดยตรง) ให้ลอง Fetch ใหม่
      const fetchedData = await fetchNews();
      const found = fetchedData.find((item) => item.uuid === id);
      setNews(found || null);
      setLoading(false);
    };

    findNews();
  }, [id]);

  if (loading) return <div className="h-screen flex justify-center items-center"><Spin size="large" /></div>;

  if (!news) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-800">News not found</h1>
        <Button onClick={() => router.push('/')} className="mt-4">Back to Home</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 md:px-0">
      <div className="max-w-4xl mx-auto">
        <Button 
          type="text" 
          icon={<ArrowLeftOutlined />} 
          onClick={() => router.back()} 
          className="mb-6 text-gray-600 hover:text-blue-600"
        >
          Back
        </Button>

        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {news.title}
        </h1>

        <div className="flex items-center space-x-4 mb-8 text-gray-500">
           <span>{new Date(news.published_at).toLocaleDateString()}</span>
           <span>•</span>
           <Tag icon={<GlobalOutlined />} color="blue">{news.source}</Tag>
        </div>

        <div className="w-full h-[400px] md:h-[500px] mb-10 rounded-xl overflow-hidden shadow-lg bg-gray-200">
            {/* ใส่ Fallback กรณีไม่มีรูป */}
            <img 
                src={news.image_url || "https://via.placeholder.com/800x500?text=No+Image"} 
                alt={news.title} 
                className="w-full h-full object-cover"
                onError={(e) => {
                    // ถ้าโหลดรูปไม่ได้ ให้เปลี่ยนเป็นรูป Default
                    (e.target as HTMLImageElement).src = "https://via.placeholder.com/800x500?text=Image+Error";
                }}
            />
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
            <p className="text-xl font-semibold mb-6">{news.description}</p>
            <p className="mb-6 leading-relaxed">{news.snippet}</p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-8 text-center">
                <p className="font-bold text-gray-800 mb-4">Read full article at source:</p>
                <a 
                  href={news.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                >
                    Visit Website
                </a>
            </div>
        </div>
      </div>
    </div>
  );
}