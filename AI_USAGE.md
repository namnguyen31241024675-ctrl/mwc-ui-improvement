# AI Usage Log — Nhiệm vụ 2

## 1. Công cụ AI

ChatGPT trong cuộc trò chuyện này. Người học cũng cung cấp một bảng phân tích từ AI khác; không suy đoán tên công cụ nếu chưa xác nhận.

## 2. Mục đích sử dụng

Phân tích năm khu vực MWC; đối chiếu nhận xét; chọn một cải tiến nhỏ; giải thích phương án; tạo HTML/CSS; hướng dẫn chạy và ghi tài liệu.

## 3. Prompt và yêu cầu chính

### Phân tích (prompt theo mẫu đề, có thể sử dụng để tái hiện)

> Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng cho website thương mại điện tử. Tôi đang khảo sát website MWC: https://mwc.com.vn/. Hãy lập bảng phân tích trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng. Với mỗi khu vực, nêu mục đích chức năng, thành phần giao diện cần có, điểm thuận tiện, một vấn đề có thể phát sinh và một đề xuất cải tiến. Không khẳng định tính năng chưa kiểm chứng. Phân biệt rõ quan sát thực tế và đề xuất AI.

### Các yêu cầu thực tế trong cuộc trò chuyện

- “làm cho t cái này dc ko”: khảo sát MWC và năm khu vực.
- “ok hoàn thành nhiệm vụ 2 cho t đi”: tổng hợp phân tích và đối chiếu.
- “có chọn size rồi”: người học gửi bốn ảnh sản phẩm và giỏ hàng.
- “ok, chốt”: đồng ý chuyển thông số từ danh sách chữ sang bảng.
- “tiếp”: yêu cầu trình bày bố cục trước khi viết mã.
- “um làm đi”: đồng ý tạo bộ file HTML/CSS, ảnh và tài liệu.

### Yêu cầu tạo mã đã thống nhất (tóm tắt, không phải nguyên văn)

Tạo một trang HTML5/CSS3 minh họa chi tiết giày MWC 6760. Chuyển thông số thành bảng dễ đọc và tách mô tả phối đồ. Có bốn sản phẩm mẫu đủ ảnh/tên/giá/nút thao tác. CSS tách riêng, hiển thị máy tính và điện thoại, không backend hoặc cơ sở dữ liệu. Giải thích cách chạy và phần cần kiểm tra.

## 4. Kết quả AI phân tích

Các tiêu chí “cần có” là gợi ý thiết kế, không phải tuyên bố website đang thiếu.

| Khu vực | Mục đích | Thành phần cần có theo AI | Điểm thuận tiện theo AI | Vấn đề có thể phát sinh | Đề xuất AI |
| --- | --- | --- | --- | --- | --- |
| Trang chủ | Giới thiệu và dẫn vào mua sắm. | Logo, menu, banner, tìm kiếm, nhóm hàng, giỏ và hỗ trợ. | Phân nhóm giúp định hướng. | Menu nhiều mục có thể khó đọc tùy kích thước/nền. | Điều hướng có nền rõ và bố cục phù hợp. |
| Danh mục | Duyệt, so sánh, thu hẹp lựa chọn. | Thẻ sản phẩm, bộ lọc, sắp xếp, phân trang. | Lọc giá hỗ trợ ngân sách. | Nhiều sắc độ màu có thể làm tăng thời gian tìm. | Gom nhóm màu và Việt hóa nhãn. |
| Chi tiết | Đánh giá, chọn phiên bản. | Ảnh, tên, giá, màu, size, hướng dẫn, thông số, nút mua. | Có hướng dẫn size và các lựa chọn. | Thông số cùng mô tả dài có thể khó quét. | Bảng hai cột, mô tả tách riêng. |
| Tìm kiếm | Tìm theo nhu cầu/mã. | Ô nhập, kết quả, trạng thái rỗng. | Tìm mã 6758 trả đúng mẫu trong lần AI thử. | Chưa thấy thông báo rõ ở lần không có kết quả. | Thông báo và hướng dẫn đổi từ khóa. |
| Giỏ | Rà soát và điều chỉnh trước đặt hàng. | Phiên bản, giá, lượng, thành tiền, xóa, tổng tiền. | Có màu và size; cập nhật tiền bằng nút cộng. | Giỏ trống vẫn hiện khu vực đặt hàng. | Trạng thái trống rõ và lối quay về mua sắm. |

## 5. Kiểm tra và điều chỉnh

### AI trực tiếp kiểm tra trên trình duyệt ngày 20/10/2026

- Trang chủ và danh mục Giày nam; mở bộ lọc màu/giá.
- Sắp xếp giá tăng dần: sản phẩm 79.000đ lên đầu; lọc 100.000–200.000đ: các sản phẩm đầu hiển thị 125.000đ. Không tuyên bố đã kiểm tra toàn bộ danh sách.
- Mẫu 6758, giá 295.000đ: chọn size 40, thêm giỏ; nút cộng cho tổng 3 đôi là 885.000đ; xóa về giỏ trống.
- Tìm “6758” ra sản phẩm; tìm “zzzz6758khongco” không có sản phẩm trong vùng kết quả. Chưa thử sai chính tả.

### Sinh viên cung cấp bằng chứng ảnh

- Mẫu 6760: giá 395.000đ, màu đen, size 39–43; có liên kết hướng dẫn size.
- Thông số: chiều cao 2cm, da caro tổng hợp, đế PVC, xuất xứ Việt Nam.
- Giỏ: màu đen, size 39, số lượng 2, tổng 790.000đ.
- Sau xóa: giỏ trống, tổng 0đ; biểu mẫu vận chuyển và nút đặt hàng vẫn xuất hiện. Không thử gửi đơn.

### Giữ, sửa hoặc bỏ

| Ý AI ban đầu | Đối chiếu | Quyết định |
| --- | --- | --- |
| Bổ sung hướng dẫn size gần vùng chọn | Đã có liên kết. | Bỏ đề xuất bổ sung như chức năng mới. |
| Bổ sung màu và size trong giỏ | Ảnh giỏ đã hiển thị. | Bỏ đề xuất bổ sung. |
| Tìm kiếm gần đúng | Chưa thử sai chính tả. | Không kết luận chức năng đang thiếu. |
| Gom nhóm màu | Danh sách màu dài. | Giữ làm ý tưởng; không chọn để code. |
| Trạng thái giỏ trống | Có ảnh chứng minh biểu mẫu còn hiện. | Giữ ý tưởng; không chọn để code. |
| Bảng thông số | Ảnh mô tả dạng danh sách. | Được người học chọn làm cải tiến chính. |

### Nhận xét cá nhân cần đọc, xác nhận hoặc sửa trước khi nộp

Thông tin size và phiên bản đã có nên không cần bổ sung trùng. Tôi chọn trình bày thông số bằng bảng để dễ tìm chất liệu và chiều cao đế hơn. Đây là đề xuất về cách trình bày, không khẳng định MWC bị lỗi.

Đoạn trên là bản gợi ý do AI soạn; người học cần bảo đảm nó đúng với nhận xét của mình.

## 6. Phần mã cần hiểu và giải thích

- `header`, `nav`, `main`, `section`, `article`: tổ chức các khu vực nội dung.
- `table` và `caption`: bảng và tên bảng; `th scope="row"` là nhãn thông số; `td` là giá trị.
- `nth-child(odd)`: nền xen kẽ từng hàng.
- CSS Grid: ảnh/thông tin hai cột và lưới bốn sản phẩm.
- Media query: thay đổi bố cục theo chiều rộng màn hình.
- Radio input và `:checked`: chọn một size; không xử lý mua hàng.
- `:focus-visible`: chỉ báo khi dùng bàn phím.

Đây là nội dung AI giải thích; không đồng nghĩa người học đã chứng minh hiểu. Tự chạy, đọc mã và bổ sung phần có thể giải thích.

## 7. Kiểm tra và chỉnh sửa mã của sinh viên

Sinh viên đã mở trang trên Chrome và gửi ảnh chạy thử. AI gợi ý tăng chữ bảng; sinh viên đồng ý “ok làm theo ý m đi”. AI chỉnh `css/style.css`: `.spec-table` từ 14px thành 16px; trong media query `max-width:650px`, từ 13px thành 15px. Mục tiêu: tăng khả năng đọc. Đây là đề xuất AI được sinh viên lựa chọn, không phải lỗi do sinh viên tự phát hiện. Sau điều chỉnh, sinh viên gửi 6 ảnh giao diện điện thoại. AI xem ảnh: bảng nằm gọn, nội dung xuống dòng trong ô; ảnh/size không chồng lấn, đủ bốn thẻ chia hai cột. Chưa xác nhận cảm nhận đọc dễ hơn, chiều rộng chính xác hoặc các thao tác bàn phím/liên kết.

## 8. Kiểm tra kỹ thuật của AI khi tạo gói

Đã kiểm tra các đường dẫn file cục bộ, xác nhận đọc được 8 ảnh và có 4 thẻ mẫu cùng 7 hàng thông số. Chưa hoàn thành kiểm tra hiển thị bằng trình duyệt tự động do môi trường chạy chưa có trình duyệt và quá trình tải không thành công. Sau đó đã đối chiếu ảnh chạy thực tế do sinh viên gửi trên máy tính và giao diện điện thoại. Chưa kiểm tra tự động mọi chiều rộng hoặc thao tác.

## 9. Đối chiếu yêu cầu tự điều chỉnh

Đề yêu cầu sinh viên chỉnh ít nhất một điểm do bản thân phát hiện và giải thích được HTML/CSS đã sửa. Thay đổi cỡ chữ ở bài này là gợi ý của AI được sinh viên chấp nhận, nên không khẳng định đã chứng minh đầy đủ phần tự phát hiện. Không gán nhận xét của AI thành quan sát độc lập của sinh viên.
