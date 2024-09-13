'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function PhoneManagement() {
  const router = useRouter();

  useEffect(() => {
    const admin = localStorage.getItem('admin');
    if (!admin) {
      alert('Bạn phải đăng nhập để truy cập trang này!');
      router.push('/loginAdmin');
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem('admin', '');
    alert('Bạn đã đăng xuất thành công!');
    router.push('/loginAdmin');
  };

  return (
    <div>
      <div className="admin-page">
        <h1>Quản lý điện thoại</h1>
        <button onClick={handleLogout}>Đăng xuất</button>
        <div className="admin-container">
          {/* Menu quản lý */}
          <div className="admin-menu">
            <ul>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Quản lý điện thoại</a></li>
              <li><a href="admin/user">Quản lý người dùng</a></li>
              <li><a href="#">Thống kê</a></li>
            </ul>
          </div>

          {/* Nội dung quản lý điện thoại */}
          <div className="admin-content">
            <div className="phone-management" style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
              <h2>Quản lý điện thoại</h2>
              <div className="phone-search">
                <input type="text" placeholder="Tìm kiếm điện thoại..." />
                <button>Tìm kiếm</button>
              </div>
              <table className="phone-table">
                <thead>
                  <tr>
                    <th>Hình ảnh</th>
                    <th>Tên điện thoại</th>
                    <th>Hãng sản xuất</th>
                    <th>Giá</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="https://th.bing.com/th/id/OIP.nde81qf6EZQPEM-fQeEpAgHaHa?rs=1&pid=ImgDetMain" alt="iPhone 14" className="phone-img" />
                    </td>
                    <td>iPhone 14</td>
                    <td>Apple</td>
                    <td>25,000,000 VND</td>
                    <td><button>Xóa</button></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="https://th.bing.com/th/id/R.b13b7884a90e0bd6885e11970b844627?rik=qsDhmDy1KMxIYw&pid=ImgRaw&r=0" />
                    </td>
                    <td>iPhone 13</td>
                    <td>Apple</td>
                    <td>21,000,000 VND</td>
                    <td><button>Xóa</button></td>
                  </tr>
                  <tr>
                    <td>
                      <img src="https://d1eh9yux7w8iql.cloudfront.net/product_images/None_32e767de-b206-4f60-a4ca-b22f51f29d8c.jpg" alt="iPhone 14" className="phone-img" />
                    </td>
                    <td>iPhone 12</td>
                    <td>Apple</td>
                    <td>18,000,000 VND</td>
                    <td><button>Xóa</button></td>
                  </tr>
                  {/* More rows can be added here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
