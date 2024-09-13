"use client"
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    iphone: '',
    email: '',
    password: '',
    address: '',
    card: [],
    buy: [],
    blocked:false,
  });

  const generateId = () => Math.random().toString(36).substr(2, 9); // Tạo id ngẫu nhiên

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const newData = { ...formData, id: generateId() };

    try {
      await axios.post('http://localhost:8080/users', newData);
      alert('Đăng ký thành công!');
    } catch (error) {
      console.error('Lỗi đăng ký:', error);
      alert('Có lỗi xảy ra, vui lòng thử lại.');
    }
  };

  return (
    <div className="register-container">
      <h1>Đăng Ký</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Họ và tên:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          iPhone:
          <input
            type="text"
            name="iphone"
            value={formData.iphone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mật khẩu:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Địa chỉ:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default Register;
