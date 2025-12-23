"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import type { MenuProps } from 'antd';
import { Button, Menu } from "antd";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("home");

  // 1. แก้ไข Key ให้ตรงกับ ID ในหน้า page.tsx (เอา / ออก)
  const items: MenuProps["items"] = [
    {
      key: "home",
      label: "Home",
    },
    {
      key: "about",
      label: "About",
    },
    {
      key: "history",
      label: "History",
    },
    {
      key: "experience",
      label: "Experience & Skills",
    },
    // {
    //   key: "skills",
    //   label: "Skills",
    // },
    {
      key: "news",
      label: "News",
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // ดึง section ทั้งหมดตาม items ที่เราตั้งไว้
      const sections = items.map(item => document.getElementById(item?.key as string));
      
      // หาตำแหน่ง scroll ปัจจุบัน (+ offset นิดหน่อยเพื่อให้ active ก่อนจะถึงหัวข้อเป๊ะๆ)
      const scrollPosition = window.scrollY + 100; 

      let current = "home"; // ค่า default

      sections.forEach((section) => {
        if (section) {
          // ถ้า scroll เกินขอบบนของ section นั้นๆ ให้ถือว่า active section นั้น
          if (section.offsetTop <= scrollPosition) {
            current = section.id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items]); // dependencies

  // Logic คลิกเมนู
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    const targetId = e.key;
    const element = document.getElementById(targetId);

    if (element) {
      // ✅ เพิ่มการปรับ offset เวลายิงไปหา section (ลบความสูง navbar ออก)
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // update state ทันทีเพื่อให้ UI เปลี่ยนไวขึ้น (ไม่ต้องรอ scroll event)
      setActiveSection(targetId);
    } else {
      router.push(`/#${targetId}`);
    }
  };

  if (pathname === "/login" || pathname === "/register") return null;

  const handleLogout = () => {
    document.cookie = "token=; Max-Age=0; path=/;";
    router.push("/login");
  };

  return (
    <nav
      className="px-8 fixed w-full z-50 shadow-md" // ✅ เพิ่ม fixed เพื่อให้เมนูตามลงมาด้วยตอนเลื่อน
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#001529",
        height: "64px",
        top: 0, 
        left: 0
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
        onClick={() => {
            // กดโลโก้ ให้เลื่อนไปบนสุด
            const home = document.getElementById('home');
            if(home) home.scrollIntoView({ behavior: 'smooth' });
            else router.push('/');
        }}
      >
        II
      </div>

      <div style={{ flex: 1 }}>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[activeSection]}
          items={items}
          onClick={handleMenuClick}
          className="custom-nav-menu"
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