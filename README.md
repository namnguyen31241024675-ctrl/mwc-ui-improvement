# E-commerce UI Improvement — MWC

Bài tập cá nhân: khảo sát website thương mại điện tử và xây dựng một cải tiến giao diện bằng HTML5/CSS3.

**Trạng thái:** đã có mã nguồn, đã tải bản từ GitHub để kiểm tra. Sinh viên đã mở trang trên máy tính và gửi ảnh giao diện điện thoại. Qua các ảnh, bảng nằm gọn và bốn thẻ sản phẩm xếp hai cột; chưa xác nhận toàn bộ thao tác tương tác hoặc chiều rộng chính xác. Repository đã được xác nhận ở chế độ Public. Chưa xác nhận triển khai GitHub Pages.

## 1. Giới thiệu

Trang mẫu trình bày lại thông số Giày Tây Nam MWC 6760 bằng bảng hai cột, thay cho danh sách chữ. Mục tiêu là giúp người đọc tra cứu chất liệu, đế, chiều cao, màu và size nhanh hơn. Đây là mục tiêu thiết kế, chưa phải kết quả đo lường trải nghiệm người dùng.

Phạm vi gồm một trang chi tiết sản phẩm và bốn thẻ sản phẩm mẫu. Không có backend, cơ sở dữ liệu hoặc xử lý mua hàng. Nhận diện SHOE / STUDIO là tên minh họa, không phải website chính thức MWC.

## 2. Website tham khảo và khảo sát — Nhiệm vụ 1

- Tên: MWC.
- URL: https://mwc.com.vn/
- Sản phẩm: giày nam/nữ, cao gót, sandal, dép, giày cặp, balo/túi và phụ kiện.
- Khách hàng mục tiêu (suy luận từ danh mục và mô tả, không phải phân khúc chính thức): nam/nữ mua giày dép đi học, làm việc, đi chơi; bao gồm học sinh, sinh viên, người đi làm.
- Khu vực khảo sát: trang chủ, danh mục, chi tiết sản phẩm, tìm kiếm, giỏ hàng.
- Ngày khảo sát: 20/10/2026. Phạm vi: máy tính.
- AI kiểm tra mẫu MWC 6758; sinh viên gửi ảnh đối chiếu mẫu **MWC 6760**. Không đồng nhất giá và size của hai mẫu.

| Khu vực | Chức năng quan sát | Điểm hợp lý — nhận xét | Điểm có thể cải thiện — nhận xét | Đề xuất và lý do |
| --- | --- | --- | --- | --- |
| Trang chủ | Menu nhóm hàng, banner, sản phẩm bán chạy, nhóm sản phẩm và liên kết xem tất cả; ô tìm kiếm, giỏ hàng. | Có nhiều lối vào danh mục. | Menu xuống hai hàng tại cửa sổ khảo sát; độ rõ có thể phụ thuộc nền banner. | Tạo nền điều hướng rõ, bố trí khoảng cách phù hợp để dễ đọc. Chưa kiểm tra chuyển banner. |
| Danh mục | Giày nam có ảnh, tên, giá, màu, phân trang, bộ lọc màu/giá và sắp xếp. AI thử giá tăng dần và lọc 100.000–200.000đ. | Có thể thu hẹp theo ngân sách. | Danh sách màu dài; một số lựa chọn tên dùng “alphabetically”. | Gom nhóm màu, Việt hóa sắp xếp để dễ quét thông tin. |
| Chi tiết | Mẫu 6760 trong ảnh sinh viên: giá 395.000đ, màu đen, size 39–43, hướng dẫn size, mô tả và nút mua. | Có thông tin chọn phiên bản và thông số. | Thông số nằm cùng phần mô tả dạng danh sách. Đây là nhận xét thiết kế, không phải lỗi chức năng. | Chuyển thông số thành bảng hai cột, tách mô tả phong cách để dễ tra cứu. **Cải tiến được chọn.** |
| Tìm kiếm | AI thử mã 6758: ra đúng sản phẩm. Từ khóa zzzz6758khongco: không có sản phẩm trong vùng kết quả, vẫn có sản phẩm bán chạy bên dưới. | Tìm được theo mã trong lần thử. | Chưa thấy thông báo rõ khi không có kết quả. | Thông báo trạng thái và tách sản phẩm gợi ý. Chưa thử sai chính tả. |
| Giỏ hàng | Ảnh sinh viên: mẫu 6760 màu đen/size 39, số lượng 2, đơn giá 395.000đ, tổng 790.000đ; ảnh sau xóa: giỏ trống, tổng 0đ. | Có màu, size, số lượng và thành tiền. | Giỏ trống vẫn có biểu mẫu vận chuyển và nút đặt hàng. | Ưu tiên thông báo và nút tiếp tục mua sắm trong trạng thái trống. Không kết luận nút có thể tạo đơn rỗng vì chưa thử. |

Bốn ảnh người học cung cấp đã được xem để đối chiếu. Gói mã nguồn không chứa ảnh chụp màn hình trình duyệt cá nhân; người học có thể tự thêm ảnh minh chứng đã kiểm tra trước khi nộp.

## 3. Chức năng của trang bài tập

- Xem ảnh chính và mở ba ảnh bổ sung trong thẻ mới.
- Chọn size minh họa bằng radio button; không lưu hoặc gửi dữ liệu.
- Đọc bảng thông số có nhãn hàng và nền xen kẽ.
- Xem bốn thẻ sản phẩm mẫu, mỗi thẻ có ảnh, tên, giá và liên kết mở ảnh.
- Di chuyển trong trang qua các liên kết điều hướng.
- Bố cục phù hợp nhiều kích thước màn hình.

Nút thêm giỏ bị vô hiệu hóa và được ghi rõ là minh họa. Bốn thẻ gợi ý dùng **tên và giá minh họa**, không khẳng định là thông tin chính xác của ảnh tương ứng. Giá sản phẩm chính 395.000đ được lấy từ ảnh khảo sát ngày 20/10/2026, không cam kết giá hiện hành.

## 4. Công nghệ và cấu trúc

- HTML5; CSS3, Grid, media query.
- Không dùng JavaScript, thư viện giao diện hoặc trình biên dịch.

Các file chính:
- `index.html`: cấu trúc nội dung.
- `css/style.css`: định dạng và responsive.
- `images/`: ảnh sản phẩm lưu cục bộ.
- `AI_USAGE.md`: nhiệm vụ 2 và nhật ký hỗ trợ AI.
- `IMAGE_SOURCES.md`: nguồn và ghi chú ảnh.
- `KIEM_TRA.md`: hướng dẫn chạy, kiểm tra và ghi phần tự chỉnh sửa.

## 5. Cách chạy

1. Giải nén toàn bộ ZIP.
2. Mở `index.html` bằng Chrome hoặc trình duyệt tương đương.
3. Không di chuyển riêng file HTML ra khỏi thư mục; giữ nguyên `css/` và `images/`.
4. Không cần cài đặt phần mềm hoặc kết nối mạng để hiển thị trang và ảnh cục bộ. Liên kết nguồn MWC cần mạng.

## 6. Cải tiến đã thực hiện — Nhiệm vụ 3

**Vấn đề chọn:** Thông số sản phẩm được thể hiện dưới dạng danh sách trong mô tả. Người xem cần đọc từng dòng để tìm thông tin.

**Phương án đã thống nhất:** dùng bảng thông số với tên trường in đậm, hai cột, nền xen kẽ; tách nội dung phối đồ/dịp sử dụng. Trên máy tính ảnh và thông tin mua ở hai cột; điện thoại xếp dọc. Bốn sản phẩm mẫu đáp ứng yêu cầu tối thiểu của đề.

**Ý nghĩa mã:** `table`, `caption`, `th scope="row"`, `td` thể hiện quan hệ thông số–giá trị; CSS `nth-child(odd)` làm nền xen kẽ; Grid bố trí trang và media query điều chỉnh ở màn hình nhỏ.

**Điều chỉnh sau khi chạy:** Sau khi chạy thử, sinh viên yêu cầu AI tăng cỡ chữ bảng thông số lên 16px trên máy tính và 15px trên điện thoại. AI hỗ trợ sửa CSS; sinh viên mở lại trang và gửi ảnh kiểm tra giao diện. Ý tưởng tăng cỡ chữ ban đầu do AI gợi ý, sau đó được sinh viên lựa chọn và yêu cầu áp dụng. Xem KIEM_TRA.md.

## 7. Hỗ trợ từ AI

AI hỗ trợ phân tích, đối chiếu nhận xét với ảnh, đề xuất bố cục, tạo HTML/CSS và soạn tài liệu. Sinh viên đã gửi ảnh sản phẩm/giỏ hàng để đối chiếu. Chi tiết nằm trong AI_USAGE.md; sinh viên đã mở trang và gửi ảnh kiểm tra trên máy tính/điện thoại; phần giải thích mã cần sinh viên đọc và nắm được.

## 8. Đưa lên GitHub — Nhiệm vụ 4

Dùng GitHub Desktop: tạo repository cho thư mục chứa `index.html`, xem các file thay đổi, commit với thông điệp mô tả và Publish repository. Bỏ chọn “Keep this code private” để Public. Kiểm tra file và README hiển thị đầy đủ trên GitHub. Không tải nguyên ZIP lên thay cho mã nguồn đã giải nén.

GitHub Pages có thể bật để xem trang trực tiếp, không phải yêu cầu bắt buộc trong đề. Thực hiện theo giao diện hiện tại/tài liệu chính thức: https://docs.github.com/en/pages

## 9. Nguồn ảnh

Xem IMAGE_SOURCES.md. Ảnh tham khảo MWC chỉ phục vụ minh họa học tập; không sao chép toàn bộ website hoặc dùng gói này để kinh doanh.

## 10. Kết quả kiểm tra bản tải từ GitHub

Ngày 20/10/2026: ZIP giải nén hợp lệ; đủ HTML/CSS, 8 ảnh, 4 thẻ mẫu và 7 dòng thông số; đường dẫn nội bộ không thiếu. CSS bảng là 16px trên máy tính và 15px trên màn hình rộng tối đa 650px. Ảnh sinh viên gửi cho thấy bảng không chồng lấn, bốn thẻ xếp hai cột trên giao diện hẹp. Đây là kiểm tra qua ảnh và cấu trúc file, không thay thế kiểm thử mọi thao tác.
