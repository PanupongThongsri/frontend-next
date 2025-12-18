"use client";

import { useState } from "react";
import { Form, Input, Button, Card, notification } from "antd";
import { useRouter } from "next/navigation";
import "antd/dist/reset.css";

export default function RegisterPage() {
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

  const handleRegister = async (values: any) => {
    setLoading(true);

    console.log('values == ', values)
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      return alert(data.message);
    }

    openNotification("success", "สมัครสมาชิกสำเร็จ");
    router.push("/login");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background:
          "linear-gradient(52deg,rgba(0, 0, 0, 1) 14%, rgba(5, 47, 58, 1) 57%, rgba(13, 68, 87, 1) 87%, rgba(18, 85, 110, 1) 100%)",
      }}
    >
      <Card
        style={{ width: 500, textAlign: "center", borderRadius: 8,background: "#f5f5f552", border: "none" }}
      >
        <b className="text-xl text-white">Register</b>
        <Form name="register" layout="vertical" onFinish={handleRegister}>
          <Form.Item
            label={<span style={{ color: "white" }}>Email</span>}
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              {
                validator: (_, value) => {
                  if (
                    !value ||
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)
                  ) {
                    return Promise.resolve();
                  }
                  return Promise.reject("E-mail must be valid");
                },
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "white" }}>Password</span>}
            name="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 6,
                message: "Password must be at least 6 characters",
              },
            ]}
          >
            <Input placeholder="Password" />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "white" }}>First Name</span>}
            name="firstName"
            rules={[{ required: true, message: "Please input your First Name!" }]}
          >
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "white" }}>Last Name</span>}
            name="lastName"
            rules={[{ required: true, message: "Please input your Last Name!" }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>

          <Form.Item
            label={<span style={{ color: "white" }}>Phone</span>}
            name="phone"
            rules={[
              { required: true, message: "Please input your Phone!" },
              {
                validator: (_, value) => {
                  if (!value || /^[0-9]+$/.test(value)) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Phone must contain only numbers");
                },
              },
              {
                len: 10,
                message: "Phone number must be 10 digits",
              },
            ]}
          >
            <Input placeholder="Phone" showCount maxLength={10} />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%" }}
              loading={loading}
            >
              Register
            </Button>
          </Form.Item>
        </Form>

        <p style={{ marginTop: 10, color: "white" }}>
          มีบัญชีแล้ว? <a onClick={() => router.push("/login")} style={{color: "#e5a41b"}}>เข้าสู่ระบบ</a>
        </p>
      </Card>
    </div>
  );
}
