import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "antd/dist/antd.css";
import axios from "axios";

export default function LogForm() {
  const router = useRouter();

  const onFinish = async (values) => {
    let payload = { password: values.password, userName: values.username };
    let res = await axios.post("http://localhost:3000/api/users", payload);
    let data = res.data;
    if (data.succes) {
      console.log("encontrado");
      console.log(data.data[0]);
      router.push("/folders/" + data.data[0].userName);
    } else {
      console.log("no encotrado");
    }
  };
  const onFinishFailed = () => {};

  return (
    <div>
      <h1>please login</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 10,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
