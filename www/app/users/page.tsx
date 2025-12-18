"use client";

import { useEffect, useState } from "react";
import { api, setToken } from "../../lib/api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setToken(token);

    api.get("/users").then(res => setUsers(res.data));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map((u: any) => (
        <div key={u.id}>{u.username}</div>
      ))}
    </div>
  );
}
