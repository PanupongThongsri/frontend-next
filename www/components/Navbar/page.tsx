"use client";

import { usePathname, useRouter } from "next/navigation";
import type { MenuProps } from 'antd';
import { Button, Menu } from "antd";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // กำหนดรายการเมนูตามที่ต้องการ และ map กับ URL ที่จะไป
  const items: MenuProps["items"] = [
    {
      key: "/about",
      label: "เกี่ยวกับ",
    },
    {
      key: "/history",
      label: "ประวัติ",
    },
    {
      key: "/experience",
      label: "ประสบการณ์",
    },
    {
      key: "/skills",
      label: "เทคโนโลยีที่ใช้",
    },
    {
      key: "/news",
      label: "ข่าวสาร",
    }
  ];

  // Logic เมื่อคลิกเมนู ให้ redirect ไปตาม key ที่ตั้งไว้
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    router.push(e.key);
  };

  // ถ้าอยู่หน้า login หรือ register → ไม่แสดง Navbar
  if (pathname === "/login" || pathname === "/register") return null;

  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0; path=/;";
    router.push("/login");
  };

  return (
    <nav
      className="px-8"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#001529",
        height: "64px",
      }}
    >
      <div 
        style={{ 
          color: "#fff", 
          fontWeight: "bold", 
          fontSize: "1.2rem", 
          marginRight: "30px",
          cursor: "pointer" 
        }}
        onClick={() => router.push("/")}
      >
        {/* MY PORTFOLIO */}
        II
      </div>

      <div style={{ flex: 1 }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[pathname]}
          items={items}
          onClick={handleMenuClick}
          style={{ 
            background: "transparent", 
            borderBottom: "none",
            fontSize: "16px",
            justifyContent: "center"
          }}
        />  
      </div>

      <div>
        <Button type="primary" danger onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </nav>
  );
}