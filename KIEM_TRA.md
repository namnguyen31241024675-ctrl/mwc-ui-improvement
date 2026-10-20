# Nhật ký kiểm tra giao diện

## 1. Cách chạy

Mở index.html trong thư mục dự án, giữ nguyên css/ và images/.

## 2. Công việc có bằng chứng trong cuộc trò chuyện

| Việc thực hiện | Bằng chứng / kết quả |
| --- | --- |
| Sinh viên mở trang trên Chrome máy tính | Ảnh đã gửi cho thấy ảnh sản phẩm, CSS và bảng thông số hiển thị. |
| Sinh viên mở giao diện điện thoại và gửi 6 ảnh | Bảng nằm trong chiều ngang, nội dung xuống dòng trong ô; không thấy chồng lấn; bốn sản phẩm chia hai cột trong ảnh. Không xác nhận chính xác chiều rộng từ ảnh. |
| Sinh viên tải ZIP từ GitHub để kiểm tra | Đủ mã nguồn, tài liệu và ảnh trong bản tải. Không tự suy ra repository Public từ việc tải ZIP. |
| AI kiểm tra cấu trúc ZIP | ZIP hợp lệ, 8 ảnh, 4 thẻ mẫu, 7 hàng thông số, đường dẫn nội bộ đầy đủ. |

## 3. Điều chỉnh ngày 20/10/2026

- Yêu cầu điều chỉnh: sinh viên yêu cầu AI tăng cỡ chữ bảng sau khi chạy thử và nghe gợi ý.
- Nguồn ý tưởng ban đầu: AI; người lựa chọn và yêu cầu áp dụng: sinh viên.
- Mục đích: tăng độ dễ đọc của thông số; chưa có đo lường hoặc đánh giá người dùng chứng minh hiệu quả.
- File sửa: css/style.css.
- Máy tính: `.spec-table` từ `font-size:14px` thành `font-size:16px`.
- Điện thoại: trong `@media(max-width:650px)`, từ `font-size:13px` thành `font-size:15px`.
- AI hỗ trợ sửa CSS theo yêu cầu; sinh viên mở lại trang và gửi ảnh kiểm tra sau sửa.
- Giải thích: `font-size` điều khiển cỡ chữ. Media query ghi đè cỡ chữ khi chiều rộng cửa sổ tối đa 650px.
- Vai trò được ghi đồng nhất với README và AI_USAGE: sinh viên yêu cầu thay đổi, AI hỗ trợ thực hiện; ý tưởng ban đầu từ AI, không ghi là lỗi sinh viên tự phát hiện.

## 4. Giới hạn kiểm tra

Chưa có xác nhận thử toàn bộ các liên kết, chọn size, bàn phím, màn hình 320px hoặc kiểm tra tràn ngang bằng công cụ. Ảnh giao diện cho phép nhận xét bố cục trong phạm vi ảnh, không chứng minh mọi chức năng hoạt động.

Nút thêm giỏ bị vô hiệu hóa có chủ ý vì bài tập chỉ minh họa giao diện.

## 5. Trước khi nộp

- Đọc bảng khảo sát và nhật ký AI, bảo đảm nhận xét cá nhân đúng thực tế.
- Hiểu cách sửa font-size, bảng HTML, nền xen kẽ và media query.
- Ba file tài liệu được cập nhật trực tiếp trên GitHub; dùng Fetch origin / Pull origin để đồng bộ về máy trước khi chỉnh sửa tiếp.
- Repo đã được xác nhận Public, có đầy đủ file và README trên GitHub.
- Nộp URL repo theo kênh giảng viên yêu cầu; GitHub Pages là phần có thể làm thêm.
