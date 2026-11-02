# Nhật ký kiểm tra giao diện

## 1. Thông tin và cách chạy

- Sinh viên: Nguyễn Thanh Nam.
- MSSV: 31241024675.
- Sản phẩm: Trang chi tiết giày MWC 6760.
- Repository: https://github.com/namnguyen31241024675-ctrl/mwc-ui-improvement

Mở `index.html` trong thư mục dự án, giữ nguyên thư mục `css/` và `images/`.

Có thể mở trực tiếp bằng trình duyệt hoặc dùng Live Server trong VS Code.

# Phần A — Kiểm tra Buổi 1

## A1. Các kiểm tra đã ghi nhận

| Việc thực hiện | Bằng chứng và kết quả |
| --- | --- |
| Mở trang trên Chrome máy tính | Ảnh cho thấy ảnh sản phẩm, CSS và bảng thông số hiển thị |
| Kiểm tra giao diện điện thoại qua sáu ảnh | Bảng nằm trong chiều ngang, nội dung xuống dòng trong ô; chưa thấy chồng lấn rõ ràng; bốn sản phẩm gợi ý chia hai cột |
| Tải ZIP từ GitHub | Có mã nguồn, tài liệu và ảnh trong bản tải |
| Kiểm tra cấu trúc ZIP | ZIP hợp lệ, tám ảnh, bốn thẻ sản phẩm gợi ý, bảy hàng thông số và các đường dẫn nội bộ đầy đủ |

Các ảnh Buổi 1 chưa xác nhận chính xác chiều rộng màn hình hoặc toàn bộ thao tác tương tác.

## A2. Điều chỉnh ngày 20/10/2026

Sinh viên lựa chọn đề xuất tăng cỡ chữ bảng thông số do AI đưa ra và yêu cầu áp dụng.

| Vị trí | Trước | Sau |
| --- | --- | --- |
| `.spec-table` | `font-size: 14px` | `font-size: 16px` |
| Trong `@media(max-width:650px)` | `font-size: 13px` | `font-size: 15px` |

- Tệp sửa: `css/style.css`.
- Mục đích: tăng cỡ chữ để thông số dễ quan sát hơn.
- AI hỗ trợ sửa CSS.
- Sinh viên mở lại trang và cung cấp ảnh sau sửa.
- Ảnh cho thấy bảng nằm gọn và nội dung xuống dòng trong ô.
- Chưa có đo lường trải nghiệm người dùng để kết luận mức cải thiện.

## A3. Giới hạn của lượt kiểm tra Buổi 1

Tại thời điểm Buổi 1, chưa xác nhận thử toàn bộ liên kết, chọn size, bàn phím, màn hình 320px hoặc kiểm tra tràn ngang bằng công cụ.

Các kết quả kiểm tra bổ sung trong Buổi 2 được ghi riêng phía dưới.

# Phần B — Kiểm tra Buổi 2

## B1. Phạm vi kiểm tra

Tiếp tục trang chi tiết sản phẩm từ Buổi 1.

Nội dung kiểm tra:

- Tiêu đề, liên kết và mô tả ảnh.
- Việc áp dụng CSS.
- Nhóm chọn size.
- Các thử nghiệm Flexbox và Grid.
- Hover và focus-visible.
- Cách căn menu.
- Giao diện laptop và điện thoại.
- Kết quả cập nhật mã nguồn lên GitHub.

Minh chứng gồm mã nguồn, ảnh chụp và video thao tác do sinh viên cung cấp.

## B2. Kiểm tra HTML

| Nội dung | Cách kiểm tra | Kết quả |
| --- | --- | --- |
| Tiêu đề chính | Đọc HTML và đối chiếu giao diện | Tên “Giày Tây Nam MWC 6760” nằm trong `h1` |
| Câu quảng bá | Đọc HTML và xem ảnh sau sửa | Nằm trong đoạn `p` bên dưới tiêu đề |
| Mục “Giày nam” | Đọc HTML cuối | Đã chuyển từ liên kết `#goi-y` thành `span` |
| Mô tả thay thế | Đọc tám thẻ `img` và đối chiếu ảnh | Cả tám ảnh có `alt` cập nhật |
| Cấu trúc nội dung | Đọc mã | Có `header`, `nav`, `main`, `section`, `article`, `footer` |
| Nhãn nhóm size | Đọc mã | Có `fieldset`, `legend` và `label` |
| Bảng thông số | Đọc mã | Có `caption`, `th scope="row"` và `td` |

Qua đọc mã chưa thấy lỗi đóng thẻ rõ ràng. Chưa xác thực toàn bộ tài liệu bằng công cụ kiểm tra HTML tự động.

## B3. Kiểm tra CSS bằng DevTools

### Thao tác

1. Mở trang trên trình duyệt.
2. Mở DevTools và chọn `body` trong Elements.
3. Quan sát quy tắc có nguồn từ `style.css`.
4. Đổi tạm `background: #fff` thành `background: #eeeeee`.
5. Quan sát nền quanh nội dung chuyển xám nhạt.
6. Tải lại trang để khôi phục màu nền từ file gốc.

### Kết quả

- CSS được áp dụng lên trang.
- Thay đổi tạm trong DevTools có tác động tới nền.
- Sau khi tải lại, nền trở về trắng.
- Không lưu nền xám vào mã CSS cuối.

## B4. Kiểm tra ảnh và liên kết

| Nội dung | Thao tác | Kết quả ghi nhận |
| --- | --- | --- |
| Ảnh trên trang | Quan sát giao diện | Các ảnh xuất hiện trong ảnh và video kiểm tra |
| Ba ảnh bổ sung | Bấm vào các ô ảnh dưới ảnh chính | Có thao tác mở ảnh lớn trong tab mới; các ảnh được mở trong video tải được |
| Menu trong trang | Bấm các mục điều hướng | Có thao tác thử trong video |
| Liên kết thông số | Đối chiếu `href="#thong-so"` với phần đích | Mã có phần tử đích tương ứng |
| Mục “Giày nam” | Đọc HTML sau sửa | Không còn dẫn sai tới phần gợi ý |

Không suy ra mọi liên kết đều hoạt động từ ảnh tĩnh. Các liên kết bên ngoài và mọi nút “Xem ảnh mẫu” chưa được ghi nhận kiểm thử đầy đủ từng trường hợp.

## B5. Kiểm tra Box Model của nhóm size

### Thay đổi

```css
.sizes {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 12px 16px 16px;
  margin: 16px 0;
  min-width: 0;
}
```

### Kết quả

- Có khung viền và bo góc.
- Các ô size có khoảng trống với viền.
- Nhóm có khoảng cách với nội dung bên dưới.
- Có ảnh trước và sau thay đổi.
- Ảnh điện thoại cho thấy năm lựa chọn nằm trong khung.
- Có thao tác thử chọn size; ảnh thể hiện trạng thái được chọn.

Dòng “Chọn kích thước” nằm trên mép khung là cách hiển thị của `legend` trong `fieldset`.

## B6. Kiểm tra Flexbox

| Giá trị thử | Kết quả quan sát | Cách xử lý sau thử |
| --- | --- | --- |
| `justify-content: flex-end` | Các ô size dồn sang phải | Lưu ảnh rồi đổi sang giá trị tiếp theo |
| `justify-content: space-between` | Các ô phân bố theo chiều ngang | Lưu ảnh rồi trả về `flex-start` |
| `align-items: flex-start` với vùng cao 100px | Các ô nằm phía trên | Lưu ảnh để so sánh |
| `align-items: center` với vùng cao 100px | Các ô nằm giữa theo chiều dọc | Lưu ảnh rồi xóa chiều cao thử |

Mã cuối:

```css
.size-options {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
```

Đã xóa `min-height: 100px` sau thử nghiệm.

## B7. Kiểm tra CSS Grid

### Thử nghiệm

Đổi danh sách gợi ý từ bốn cột thành hai cột.

### Kết quả quan sát

- Hai sản phẩm trên mỗi hàng.
- Ảnh lớn hơn so với bố cục bốn cột.
- Danh sách dài hơn và cần cuộn để xem đủ.
- Đã chụp toàn trang làm minh chứng.

### Bố cục cuối

Sau thử nghiệm, quy tắc chung đã trả về bốn cột.

| Chiều rộng theo CSS | Bố cục |
| --- | --- |
| Trên 650px | Bốn cột |
| Trên 350px đến 650px | Hai cột |
| Tối đa 350px | Một cột |

Đây là mô tả quy tắc trong mã, không có nghĩa mọi chiều rộng trên đã được thử trực tiếp.

## B8. Kiểm tra hover và focus-visible

Đối tượng: liên kết “Xem thông số trước khi chọn”.

Phần bổ sung:

```css
.text-link {
  transition: color 0.2s ease;
}
```

| Trạng thái | Cách kiểm tra | Kết quả |
| --- | --- | --- |
| Bình thường | Đưa chuột ra khỏi liên kết | Chữ màu tối |
| Hover | Rê chuột lên liên kết | Chữ đổi sang màu nhấn |
| Focus-visible | Chọn size rồi nhấn Tab tới liên kết | Có viền bao quanh liên kết |

Có ảnh minh chứng cả ba trạng thái.

Ảnh tĩnh chỉ chứng minh màu và viền tại thời điểm chụp, không chứng minh độ mượt hoặc thời gian chuyển động.

## B9. Điều chỉnh menu theo nhận xét của sinh viên

### Vấn đề được nhận thấy

Sinh viên muốn các mục “Sản phẩm”, “Thông số”, “Gợi ý” vẫn nằm cạnh logo nhưng căn ngang chân dòng chữ logo.

Đây là yêu cầu điều chỉnh cách trình bày, không phải lỗi làm menu mất chức năng.

### Cách xử lý

AI hướng dẫn thêm quy tắc:

```css
.site-header {
  align-items: baseline;
}
```

Quy tắc cuối file ghi đè giá trị `align-items: center` trước đó.

### Kết quả

- Menu được hạ xuống theo chân dòng chữ.
- Có ảnh trước và sau trên điện thoại.
- Đã kiểm tra thêm trên laptop.
- Sinh viên xác nhận cách căn phù hợp với mong muốn.

### Vai trò thực hiện

Sinh viên tự nhận thấy điểm muốn chỉnh và đưa ra yêu cầu. AI đề xuất giải pháp CSS; sinh viên sửa file và kiểm tra kết quả.

Không ghi đây là đoạn mã sinh viên tự nghĩ ra hoàn toàn không có hỗ trợ.

## B10. Kiểm tra bố cục theo màn hình

| Phạm vi | Kết quả |
| --- | --- |
| Laptop | Ảnh và thông tin sản phẩm xếp cạnh nhau; sản phẩm gợi ý trở về bốn cột |
| Điện thoại | Nội dung chính xếp dọc; nhóm size nằm trong khung; sản phẩm gợi ý có hai cột trong ảnh kiểm tra |
| Menu sau điều chỉnh | Có ảnh xác nhận trên laptop và điện thoại |
| Chiều rộng 768px | Chưa có minh chứng kiểm tra riêng |
| Màn hình 320px | Chưa xác nhận kiểm tra riêng |

Chưa thấy tràn hoặc chồng lấn rõ ràng trong các ảnh và video đã quan sát. Chưa đo toàn bộ trang bằng công cụ kiểm tra tràn ngang.

## B11. Kiểm tra cập nhật GitHub

### Quá trình

1. Lưu thay đổi HTML và CSS.
2. Commit với thông điệp `Hoan thien HTML CSS buoi 2`.
3. Pull bản cập nhật từ GitHub.
4. Xử lý hai vùng xung đột trong `index.html`.
5. Giữ các thay đổi Buổi 2.
6. Bổ sung lại Google Analytics trong `<head>`.
7. Hoàn tất merge và push.
8. Mở `index.html` trên GitHub để kiểm tra.

### Kết quả

- File không còn dấu xung đột.
- GitHub Desktop báo ghép thành công.
- Bản `index.html` trên GitHub có Google Analytics trong `<head>`.
- Có ảnh minh chứng kết quả cập nhật.

Chưa kiểm tra hoạt động thu thập dữ liệu Analytics.

## B12. Bảng kiểm tổng hợp

| Nội dung | Kết quả |
| --- | --- |
| Trang HTML mở được | Đạt trong lượt kiểm tra |
| CSS được áp dụng | Đạt |
| Ảnh hiển thị | Đạt trong phạm vi quan sát |
| Liên kết ảnh và menu | Đã thử các thao tác ghi trong video |
| Nhóm chọn size | Có thao tác thử và trạng thái chọn |
| Box Model | Có ảnh trước và sau |
| Flexbox | Có ảnh các giá trị thử |
| Grid | Có ảnh thử hai cột; đã trả laptop về bốn cột |
| Hover/focus | Có ảnh minh chứng |
| Điều chỉnh menu | Đã kiểm tra trên laptop và điện thoại |
| Thay đổi do sinh viên tự nhận xét | Có; giải pháp CSS được AI hỗ trợ |
| Cập nhật code lên GitHub | Có minh chứng |
| Kiểm tra riêng ở 768px | Chưa xác nhận |
| README và nhật ký Buổi 2 trên GitHub | Chờ commit và push tài liệu |

## B13. Giới hạn kiểm tra

- Không có kiểm thử đầy đủ trên mọi trình duyệt và thiết bị.
- Chưa kiểm tra bằng trình đọc màn hình.
- Chưa đánh giá đầy đủ độ tương phản.
- Chưa có đo lường trải nghiệm người dùng.
- Không kiểm thử đặt hàng vì nút mua bị vô hiệu hóa có chủ ý.
- Chưa kiểm thử việc Analytics thu thập dữ liệu.
- Không dùng ảnh tĩnh để kết luận mọi thao tác đều hoạt động.
- Những mục chưa thử không được đánh dấu đạt.

## B14. Công việc còn lại trước khi nộp

- Lưu README, nhật ký AI và nhật ký kiểm tra đã cập nhật.
- Bổ sung ảnh minh chứng và bản báo cáo đã chốt vào repository.
- Commit và push tài liệu.
- Mở GitHub kiểm tra các tệp đã xuất hiện và hiển thị đúng.
- Đọc lại các phần giải thích HTML/CSS theo mã nguồn.
- Nộp đường dẫn repository và tài liệu theo yêu cầu của giảng viên.

Chưa xác nhận triển khai GitHub Pages.