"use client";

import { useState } from "react";
import { Form, Input, Button, Card, notification } from "antd";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const openNotification = (type: "success" | "error", message: string) => {
    notification.open({
      type,
      title: type === "success" ? "Success" : "Error",
      description: message,
      placement: "topRight",
      duration: 2,
      showProgress: true,
    });
  };

  const handleLogin = async (values: any) => {
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      Cookies.set("token", data.token);
      openNotification("success", "เข้่าสู่ระบบสำเร็จ");
      router.push("/");
    } else {
      //alert(data.message);
      openNotification("error", "เข้่าสู่ระบบไม่สำเร็จ");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background:
          "linear-gradient(52deg,rgba(0,0,0,1) 14%, rgba(5,47,58,1) 57%, rgba(13,68,87,1) 87%, rgba(18,85,110,1) 100%)",
      }}
    >
      <Card
        style={{
          width: 500,
          textAlign: "center",
          borderRadius: 8,
          background: "#f5f5f552",
          border: "none",
        }}
      >
        <b className="text-xl text-white">Login</b>
        <Form name="login" layout="vertical" onFinish={handleLogin}>
          <Form.Item
            label={<span style={{ color: "white" }}>Email</span>}
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "white" }}>Password</span>}
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
              loading={loading}
            >
              Login
            </Button>
          </Form.Item>
        </Form>

        <p style={{ marginTop: 10, color: "white" }}>
          ยังไม่มีบัญชี?{" "}
          <a onClick={() => router.push("/register")} style={{color: "#e5a41b"}}>สมัครสมาชิก</a>
        </p>
      </Card>
    </div>
  );
}
