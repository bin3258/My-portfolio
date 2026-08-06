# Portfolio của tôi

Website portfolio hiện đại, tương thích mọi thiết bị, được xây dựng với **React 19 + Vite**, hỗ trợ chuyển đổi chế độ tối/sáng, hiệu ứng chuyển trang mượt mà và giao diện tối tối giản (dark-first).

**Trang trực tuyến:** [https://bin3258.github.io/My-portfolio/](https://bin3258.github.io/My-portfolio/)

## Tính năng

- ⚡ Xây dựng bằng React 19 + Vite, build nhanh và hot reload
- 🎨 Nút chuyển đổi chế độ tối / sáng (lưu trong `localStorage`, không bị "flash" khi tải trang)
- 🧭 SPA đa trang với React Router (`HashRouter` để tương thích GitHub Pages)
- 🎞 Hiệu ứng chuyển trang mượt với Framer Motion
- 💼 Các trang: Trang chủ, Resume, Kỹ năng, Dự án, Liên hệ
- 🧩 Component tái sử dụng và CSS được tổ chức gọn gàng (CSS theo từng trang + biến CSS)
- 📱 Responsive hoàn toàn (menu trượt trên mobile, grid thích ứng)

## Công nghệ sử dụng

- **React 19**
- **Vite 7**
- **React Router DOM**
- **Framer Motion**
- **React Icons**
- **ESLint** (eslint-plugin-react, react-hooks, react-refresh)

## Bắt đầu nhanh

### Yêu cầu

- Node.js 18+ và npm

### Cài đặt

```bash
npm install
```

### Chạy môi trường phát triển

```bash
npm run dev
```

Mở địa chỉ hiển thị trong terminal (ví dụ: `http://localhost:5173/My-portfolio/`).

### Build bản production

```bash
npm run build
```

Bản build được xuất ra thư mục `dist/`.

### Xem trước bản build

```bash
npm run preview
```

### Kiểm tra lint

```bash
npm run lint
```

## Deploy lên GitHub Pages

Project này được host trên GitHub Pages và deploy từ branch `gh-pages`.

```bash
npm run deploy
```

Lệnh này sẽ build và push thư mục `dist/` lên branch `gh-pages` bằng `gh-pages`.

> **Lưu ý:** Sau khi deploy, CDN GitHub Pages có thể mất ~10 phút để cập nhật. Dùng hard refresh (`Ctrl + F5`) để xem bản mới nhất.

## Cấu trúc thư mục

```
├── index.html
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css          # Style toàn cục + biến theme (tối/sáng)
│   ├── components/        # Navbar, Footer, PageWrapper, ScrollToTop
│   ├── hooks/             # useTheme
│   ├── pages/             # Home, Resume, Skills, Projects, Contact, NotFound
│   ├── styles/            # File CSS theo từng trang
│   ├── data/              # skills.js, projects.js
│   └── assets/
```

## Tùy chỉnh

- **Nội dung dự án / kỹ năng:** chỉnh sửa trong `src/data/projects.js` và `src/data/skills.js`
- **Thông tin cá nhân / resume:** chỉnh sửa trong `src/pages/Resume.jsx`
- **Màu sắc & theme:** chỉnh sửa các biến CSS trong `src/index.css`

## Giấy phép

Đây là project cá nhân; bạn có thể tham khảo nó như một mẫu để xây dựng portfolio của riêng mình.
