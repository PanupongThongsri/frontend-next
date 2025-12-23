// utils/api.ts

export interface NewsItem {
  uuid: string;
  title: string;
  description: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
}

export interface ApiResponse {
  meta: {
    found: number;
    returned: number;
    limit: number;
    page: number;
  };
  data: NewsItem[];
}

// ฟังก์ชันดึงข่าว
export const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    const res = await fetch(
      "https://api.marketaux.com/v1/news/all?countries=global&filter_entities=true&limit=999&published_after=2025-12-18T07:21&api_token=VvkVpGSPNsRdmfJzfVFWqWXhK6lrnSrD6bC8XR5a"
    );

    if (!res.ok) {
      throw new Error("Failed to fetch news");
    }

    const json: ApiResponse = await res.json();
    return json.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
