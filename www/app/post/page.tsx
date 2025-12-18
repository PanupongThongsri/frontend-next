"use client";

import { useEffect, useState } from "react";
import { api, setToken } from "../../lib/api";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setToken(token);

    api.get("/posts").then(res => setPosts(res.data));
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      {posts.map((p: any) => (
        <div key={p.id}>{p.title}</div>
      ))}
    </div>
  );
}
