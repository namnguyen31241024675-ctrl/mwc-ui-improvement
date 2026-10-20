# Mở trang, kiểm tra và hoàn thành phần tự làm

## 1. Chạy trên máy

Giải nén ZIP → mở thư mục mwc-ui-improvement → nhấp đúp index.html.

## 2. Kiểm tra

- [ ] Ảnh chính, ba ảnh bổ sung và bốn sản phẩm mẫu hiển thị.
- [ ] Đối chiếu bảng với ảnh MWC 6760: 2cm, da caro tổng hợp, đế PVC, màu đen, size 39–43, Việt Nam.
- [ ] Chọn các size; chỉ một lựa chọn được đánh dấu.
- [ ] Bấm liên kết Thông số/Gợi ý đi đúng khu vực.
- [ ] Bấm Xem ảnh mẫu mở đúng ảnh trong thẻ mới.
- [ ] Thử Tab để di chuyển qua liên kết và phím mũi tên trong nhóm size.
- [ ] Mở DevTools (F12), bật chế độ thiết bị (Ctrl+Shift+M), thử rộng 390px và 320px: không tràn ngang.
- [ ] Thử máy tính khoảng 1366px: ảnh và thông tin nằm hai cột, bốn thẻ nằm cùng hàng.

Nút thêm giỏ bị vô hiệu hóa có chủ ý vì phạm vi chỉ là giao diện.

## 3. Bắt buộc tự phát hiện và điều chỉnh ít nhất một điểm

Không cần tạo lỗi giả. Khi chạy thật, xem điểm nào chưa phù hợp theo đánh giá của mình: chữ khó đọc, khoảng cách chưa hợp lý, bảng chưa dễ nhìn… rồi điều chỉnh có lý do.

- Ngày kiểm tra: [điền]
- Kích thước màn hình: [điền]
- Điểm tôi phát hiện: [điền theo thực tế]
- Vì sao cần sửa: [điền]
- File và phần mã đã đổi: [điền]
- Trước sửa / sau sửa: [điền]
- Kết quả kiểm tra lại: [điền]
- Tôi giải thích được vai trò đoạn mã này như sau: [điền]
- AI hỗ trợ phần nào khi sửa (nếu có): [điền]

Có thể gửi ảnh trang và mô tả điểm phát hiện cho AI hỗ trợ sửa; cần đọc và hiểu phần thay đổi.

## 4. Trước khi nộp

- [ ] Đọc lại bảng khảo sát, sửa các ý chưa phản ánh đúng nhận xét cá nhân.
- [ ] Đọc AI_USAGE.md, xác nhận/sửa phần nhận xét cá nhân.
- [ ] Hoàn thành mục tự sửa ở trên và cập nhật trạng thái README.
- [ ] Đưa toàn bộ mã nguồn đã giải nén lên GitHub Public.
- [ ] Mở repo trên GitHub, kiểm tra README, HTML, CSS và ảnh.
- [ ] Lấy URL repo nộp theo kênh giảng viên quy định.

## 5. Nhật ký điều chỉnh đã thực hiện ngày 20/10/2026

- Sinh viên mở trang trên Chrome và gửi ảnh chạy thử trên máy tính.
- Nguồn đề xuất: AI gợi ý tăng chữ bảng; sinh viên đồng ý áp dụng.
- File sửa: `css/style.css`.
- Quy tắc chung `.spec-table`: `font-size:14px` → `font-size:16px`.
- Quy tắc trong `@media(max-width:650px)`: `font-size:13px` → `font-size:15px`.
- Mục đích: giúp thông số dễ đọc hơn.
- Giải thích: `font-size` điều khiển cỡ chữ; media query áp dụng cỡ riêng khi cửa sổ rộng tối đa 650px.
- Trạng thái: AI đã sửa mã; sinh viên cần mở lại bản mới, kiểm tra chữ và việc xuống dòng trên máy tính/điện thoại. Chưa đánh dấu kết quả kiểm tra là đạt.
- Không ghi thay đổi này thành lỗi do sinh viên tự phát hiện.
