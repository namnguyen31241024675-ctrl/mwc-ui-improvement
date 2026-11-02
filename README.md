# Cải tiến giao diện chi tiết sản phẩm MWC

Bài tập cá nhân môn Phát triển ứng dụng thương mại điện tử, thực hiện bằng HTML5 và CSS3.

## Thông tin sinh viên

- Họ tên: Nguyễn Thanh Nam.
- MSSV: 31241024675.
- Website tham khảo: https://mwc.com.vn/
- Repository: https://github.com/namnguyen31241024675-ctrl/mwc-ui-improvement

## 1. Giới thiệu

Dự án tiếp tục phát triển từ bài tập Buổi 1, sử dụng trang chi tiết Giày Tây Nam MWC 6760 làm khu vực thực hành.

Cải tiến chính ở Buổi 1 là chuyển thông số sản phẩm từ danh sách trong mô tả thành bảng hai cột, tách riêng nội dung về phong cách và cách sử dụng.

Buổi 2 tiếp tục kiểm tra HTML, điều chỉnh cách trình bày và thực hành CSS trên giao diện hiện có.

Phạm vi gồm:

- Một trang chi tiết sản phẩm.
- Ảnh chính và ba ảnh bổ sung.
- Thông tin tên sản phẩm, giá, màu và size.
- Bảng thông số và phần mô tả.
- Bốn sản phẩm gợi ý có tên và giá minh họa.

Nhận diện SHOE / STUDIO là tên minh họa phục vụ bài tập, không phải website chính thức của MWC.

## 2. Trạng thái hiện tại

- Mã HTML/CSS Buổi 2 đã được cập nhật lên GitHub.
- Đã chỉnh tiêu đề, liên kết “Giày nam” và mô tả thay thế cho tám ảnh.
- Đã định dạng nhóm chọn size bằng Box Model.
- Đã thực nghiệm Flexbox và Grid, sau đó trả về bố cục được lựa chọn.
- Đã kiểm tra hover và focus bằng chuột, bàn phím.
- Đã điều chỉnh cách căn menu theo nhận xét của sinh viên.
- Đã kiểm tra giao diện laptop và điện thoại qua ảnh, video.
- Đã soạn báo cáo Word.
- Tài liệu và ảnh minh chứng Buổi 2 đang được bổ sung vào repository.
- Chưa xác nhận kiểm tra riêng ở chiều rộng 768px hoặc triển khai GitHub Pages.

Những kết quả kiểm tra được ghi trong phạm vi thao tác và minh chứng đã thực hiện, không khẳng định toàn bộ website đã được kiểm thử đầy đủ.

## 3. Website tham khảo và khảo sát Buổi 1

### 3.1. Thông tin khảo sát

- Website: MWC.
- URL: https://mwc.com.vn/
- Ngày khảo sát ghi nhận ở Buổi 1: 20/10/2026.
- Phạm vi: giao diện máy tính.
- Nhóm hàng quan sát: giày nam, giày nữ, cao gót, sandal, dép, balo, túi và phụ kiện.
- Các khu vực khảo sát: trang chủ, danh mục, chi tiết sản phẩm, tìm kiếm và giỏ hàng.

Nhóm khách hàng mục tiêu được suy luận từ danh mục và mô tả gồm người mua giày dép để đi học, làm việc và đi chơi. Đây không phải thông tin phân khúc chính thức của MWC.

AI kiểm tra mẫu MWC 6758; sinh viên cung cấp ảnh đối chiếu mẫu MWC 6760. Không sử dụng giá hoặc size của hai mẫu thay thế cho nhau.

### 3.2. Kết quả khảo sát

| Khu vực | Quan sát ghi nhận | Điểm có thể cải thiện | Đề xuất |
| --- | --- | --- | --- |
| Trang chủ | Có menu nhóm hàng, banner, sản phẩm, tìm kiếm và giỏ hàng | Menu xuống hai hàng trong cửa sổ khảo sát; độ rõ có thể phụ thuộc nền banner | Điều chỉnh nền và khoảng cách để menu dễ đọc |
| Danh mục | Có ảnh, tên, giá, màu, phân trang, lọc và sắp xếp | Danh sách màu dài; một số nhãn sắp xếp dùng tiếng Anh | Gom nhóm màu và Việt hóa nhãn |
| Chi tiết sản phẩm | Ảnh mẫu 6760 có giá 395.000đ, màu đen, size 39–43, hướng dẫn size và mô tả | Thông số nằm cùng phần mô tả dạng danh sách | Chuyển thành bảng hai cột và tách mô tả phong cách; đây là cải tiến được chọn |
| Tìm kiếm | Lần thử mã 6758 trả về sản phẩm; lần thử từ khóa không có kết quả vẫn thấy sản phẩm bán chạy bên dưới | Chưa thấy thông báo rõ trong lần thử không có kết quả | Thêm thông báo trạng thái và phân biệt với phần gợi ý |
| Giỏ hàng | Ảnh sinh viên cho thấy màu, size, số lượng và thành tiền; sau xóa thì tổng về 0đ | Giỏ trống vẫn có biểu mẫu vận chuyển và nút đặt hàng | Làm rõ trạng thái trống và lối tiếp tục mua sắm |

Các nhận xét trên là kết quả quan sát trong phạm vi Buổi 1. Chưa thử sai chính tả khi tìm kiếm và không thử gửi đơn hàng rỗng.

### 3.3. Cải tiến được triển khai ở Buổi 1

Thông số sản phẩm được tổ chức bằng:

- `table`: bảng dữ liệu.
- `caption`: tên bảng.
- `th scope="row"`: tên thông số theo từng hàng.
- `td`: giá trị tương ứng.
- `nth-child(odd)`: nền xen kẽ các hàng.

Phần mô tả phối đồ và dịp sử dụng được tách riêng.

Sau khi chạy thử, sinh viên lựa chọn đề xuất tăng cỡ chữ bảng do AI đưa ra và yêu cầu áp dụng:

- Máy tính: từ 14px lên 16px.
- Màn hình tối đa 650px: từ 13px lên 15px.

AI hỗ trợ sửa CSS; sinh viên mở lại trang và cung cấp ảnh kiểm tra. Không ghi thay đổi này là lỗi do sinh viên tự phát hiện hoàn toàn.

## 4. Chức năng của trang bài tập

- Hiển thị ảnh chính của sản phẩm.
- Mở ba ảnh bổ sung trong tab mới khi bấm vào ảnh.
- Chọn một size bằng radio button.
- Đọc bảng thông số và phần mô tả.
- Xem bốn sản phẩm gợi ý.
- Mở ảnh của sản phẩm gợi ý.
- Di chuyển giữa các phần bằng menu và liên kết nội bộ.
- Hiển thị bố cục khác nhau theo chiều rộng màn hình.

### Giới hạn chức năng

- Không có backend hoặc cơ sở dữ liệu.
- Lựa chọn size không được gửi hoặc lưu vào hệ thống.
- Nút thêm giỏ bị vô hiệu hóa có chủ ý và có chú thích minh họa.
- Không có xử lý mua hàng.
- Bấm ảnh bổ sung mở tab mới, không thay ảnh chính ngay trong trang.
- Bốn sản phẩm gợi ý dùng tên và giá minh họa.
- Giá 395.000đ của sản phẩm chính lấy từ ảnh khảo sát Buổi 1, không cam kết là giá hiện hành.

## 5. Công nghệ và cấu trúc thư mục

### 5.1. Công nghệ

- HTML5.
- CSS3.
- Flexbox.
- CSS Grid.
- Media query.
- Google Analytics được đặt trong `<head>`.

Không dùng JavaScript để xử lý chức năng mua hàng. Trang có JavaScript của Google Analytics.

Không sử dụng Bootstrap, Tailwind CSS hoặc công cụ biên dịch giao diện.

### 5.2. Các tệp chính

```text
mwc-ui-improvement/
├── index.html
├── css/
│   └── style.css
├── images/
│   ├── product-main.jpg
│   ├── product-detail-1.jpg
│   ├── product-detail-2.jpg
│   ├── product-detail-3.jpg
│   ├── sample-1.jpg
│   ├── sample-2.jpg
│   ├── sample-3.jpg
│   └── sample-4.jpg
├── README.md
├── AI_USAGE.md
├── KIEM_TRA.md
└── IMAGE_SOURCES.md
```

- `index.html`: nội dung và cấu trúc trang.
- `css/style.css`: định dạng, bố cục và các trạng thái tương tác.
- `images/`: ảnh sản phẩm lưu cục bộ.
- `README.md`: giới thiệu, hướng dẫn chạy và tổng hợp thực hành.
- `AI_USAGE.md`: nhật ký sử dụng AI.
- `KIEM_TRA.md`: nội dung kiểm tra và điều chỉnh.
- `IMAGE_SOURCES.md`: nguồn và ghi chú ảnh.

Báo cáo Word và ảnh minh chứng Buổi 2 được chuẩn bị riêng; việc bổ sung vào repository đang được hoàn thiện.

## 6. Hướng dẫn chạy

### Cách 1: Mở trực tiếp

1. Tải và giải nén repository.
2. Giữ nguyên cấu trúc thư mục.
3. Mở `index.html` bằng trình duyệt.

Không di chuyển riêng `index.html` ra khỏi thư mục chứa `css` và `images`.

### Cách 2: Dùng VS Code và Live Server

1. Mở toàn bộ thư mục dự án trong VS Code.
2. Cài tiện ích Live Server nếu chưa có.
3. Nhấp phải vào `index.html`.
4. Chọn `Open with Live Server`.

Trang và ảnh cục bộ có thể hiển thị khi không có mạng. Liên kết bên ngoài và Google Analytics cần kết nối mạng để truy cập dịch vụ tương ứng.

## 7. Thực hành HTML5 trong Buổi 2

### 7.1. Kiểm tra cấu trúc

Các phần tử đang được sử dụng:

| Phần tử | Vai trò |
| --- | --- |
| `header` | Chứa logo và menu đầu trang |
| `nav` | Chứa menu chính và đường dẫn đầu trang |
| `main` | Chứa nội dung chính |
| `section` | Chia các phần sản phẩm, thông số, mô tả và gợi ý |
| `article` | Chứa từng sản phẩm gợi ý |
| `footer` | Chứa thông tin bài tập và nguồn |
| `fieldset`, `legend` | Gom và đặt tên nhóm chọn size |
| `label`, `input` | Tạo lựa chọn size có nhãn |
| `table`, `caption`, `th`, `td` | Trình bày bảng thông số |

Qua đọc mã, chưa thấy lỗi đóng thẻ rõ ràng. Đây không phải kết quả xác thực toàn bộ HTML bằng công cụ tự động.

### 7.2. Đưa tên sản phẩm vào tiêu đề chính

Trước:

```html
<h1 id="product-title">Một đôi giày.<br>Nhiều cách phối.</h1>
<p class="product-name">Giày Tây Nam MWC 6760</p>
```

Sau:

```html
<h1 id="product-title">Giày Tây Nam MWC 6760</h1>
<p class="product-name">Một đôi giày. Nhiều cách phối.</p>
```

Tên sản phẩm trở thành nội dung chính của `h1`. Giữ nguyên `id="product-title"` để phần sản phẩm vẫn liên kết đúng qua `aria-labelledby`.

### 7.3. Sửa liên kết Giày nam

Trước:

```html
<a href="#goi-y">Giày nam</a>
```

Sau:

```html
<span>Giày nam</span>
```

Đích `#goi-y` là phần Gợi ý phong cách, chưa phải trang danh mục Giày nam. Chuyển thành chữ thường để tránh dẫn tới khu vực chưa khớp tên liên kết.

### 7.4. Cập nhật alt cho tám ảnh

| Tệp | Mô tả thay thế sau cập nhật |
| --- | --- |
| `product-main.jpg` | Giày MWC 6760 màu đen khi mang trên chân, cận cảnh họa tiết caro và khóa kim loại |
| `product-detail-1.jpg` | Giày MWC 6760 màu đen khi mang trên chân, nhìn từ phía trước |
| `product-detail-2.jpg` | Giày MWC 6760 màu đen nhìn nghiêng, thấy thân và đế giày |
| `product-detail-3.jpg` | Đôi giày MWC 6760 màu đen đặt cạnh nhau, nhìn chéo từ trên xuống |
| `sample-1.jpg` | Giày lười màu đen có khóa trang trí màu vàng khi mang trên chân |
| `sample-2.jpg` | Giày buộc dây màu đen với đế có rãnh, nhìn từ bên hông |
| `sample-3.jpg` | Giày lười màu đen có dải trang trí ngang, phối với quần màu be |
| `sample-4.jpg` | Giày lười màu đen có đai ngang, phối với quần xanh đậm |

`alt` được mô tả theo ảnh đã đối chiếu. Thay đổi này thường không làm giao diện khác đi khi ảnh tải bình thường.

## 8. Thực hành CSS trong Buổi 2

### 8.1. Kiểm tra liên kết CSS

HTML liên kết tệp CSS bằng:

```html
<link rel="stylesheet" href="css/style.css">
```

Đã kiểm tra quy tắc `body` trong DevTools và thấy nguồn từ `style.css`.

Thử đổi tạm nền từ `#fff` sang `#eeeeee` làm nền chuyển xám nhạt. Khi tải lại trang, nền trở về trắng theo file gốc.

Thử nghiệm DevTools không được lưu thành màu nền cuối của website.

### 8.2. Box Model trên nhóm chọn size

Trước:

```css
.sizes {
  border: 0;
  padding: 0;
  margin: 10px 0 12px;
  min-width: 0;
}
```

Sau:

```css
.sizes {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 12px 16px 16px;
  margin: 16px 0;
  min-width: 0;
}
```

- `border`: tạo viền nhóm.
- `border-radius`: bo góc.
- `padding`: tạo khoảng trống trong khung.
- `margin`: tạo khoảng cách ngoài khung.
- `min-width: 0`: cho phép khối thu nhỏ trong bố cục.

Quy tắc `box-sizing: border-box` đã có từ trước, giúp kích thước khai báo bao gồm padding và border.

### 8.3. Flexbox trên nhóm size

Đã thử:

- `justify-content: flex-end`: dồn các ô sang phải.
- `justify-content: space-between`: phân bố khoảng trống giữa các ô.
- `align-items: flex-start`: căn lên trên vùng thử.
- `align-items: center`: căn giữa theo chiều dọc của vùng thử.

Để quan sát căn dọc, đã thêm tạm `min-height: 100px`. Giá trị này được xóa sau thử nghiệm.

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

Phần tử cha `.size-options` điều khiển cách xếp các `label` con. `gap` tạo khoảng cách; `flex-wrap` cho phép xuống hàng khi thiếu chỗ.

### 8.4. CSS Grid trên sản phẩm gợi ý

Đã thử thay:

```css
grid-template-columns: repeat(4, minmax(0, 1fr));
```

bằng:

```css
grid-template-columns: repeat(2, minmax(0, 1fr));
```

Kết quả thử trên laptop: mỗi hàng có hai sản phẩm, ảnh lớn hơn và danh sách dài hơn.

Sau khi lưu minh chứng, quy tắc chung được trả về:

```css
.product-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 22px;
}
```

Bố cục cuối:

- Trên 650px: 4 cột.
- Trên 350px đến 650px: 2 cột.
- Tối đa 350px: 1 cột.

Media query tối đa 900px còn điều chỉnh khoảng cách giữa các sản phẩm.

Ảnh gợi ý dùng khung vuông và `object-fit: cover`. Ảnh lấp đầy khung, có thể bị cắt mép để giữ tỷ lệ thay vì kéo méo.

Đề xuất thay cách cắt ảnh bổ sung chưa được triển khai trong mã cuối.

### 8.5. Hover và focus

Liên kết “Xem thông số trước khi chọn” đã có:

- Hover đổi chữ sang màu nhấn.
- Focus-visible tạo viền khi điều hướng bằng bàn phím.

Buổi 2 bổ sung:

```css
.text-link {
  transition: color 0.2s ease;
}
```

Đã kiểm tra ba trạng thái:

1. Bình thường: chữ màu tối.
2. Rê chuột: chữ đổi màu.
3. Dùng Tab: xuất hiện viền focus.

Ảnh tĩnh minh chứng các trạng thái; không chứng minh độ mượt của chuyển động.

### 8.6. Điều chỉnh căn menu

Sinh viên nhận thấy menu chưa nằm ngang chân chữ logo như mong muốn và đề xuất điều chỉnh.

AI hướng dẫn bổ sung:

```css
.site-header {
  align-items: baseline;
}
```

Quy tắc phía cuối file ghi đè giá trị `align-items: center` trước đó.

Sinh viên áp dụng và kiểm tra lại trên laptop, điện thoại. Phần này được ghi nhận là sinh viên tự nêu nhu cầu điều chỉnh, AI hỗ trợ giải pháp CSS.

## 9. Tổng hợp kiểm thử Buổi 2

| Nội dung | Kết quả ghi nhận |
| --- | --- |
| Trang HTML mở được | Đã kiểm tra trên trình duyệt |
| CSS được áp dụng | Đã xem nguồn `style.css` và thử đổi nền trong DevTools |
| Ảnh hiển thị | Hiển thị trong ảnh và video đã cung cấp |
| Ảnh bổ sung mở được | Đã thực hiện thao tác mở ảnh lớn trong tab mới |
| Menu trong trang | Đã có thao tác thử trong video |
| Chọn size | Đã thử và ghi nhận trạng thái được chọn |
| Hover | Có ảnh chữ đổi màu khi rê chuột |
| Focus-visible | Có ảnh viền khi dùng Tab |
| Nhóm size trên điện thoại | Năm lựa chọn nằm trong khung ở ảnh kiểm tra |
| Bố cục laptop và điện thoại | Chưa thấy tràn hoặc chồng lấn rõ ràng trong phạm vi minh chứng |
| Menu sau điều chỉnh | Đã kiểm tra lại trên laptop và điện thoại |
| Chiều rộng 768px | Chưa xác nhận kiểm tra riêng |
| Đặt hàng | Không kiểm thử vì nút bị khóa có chủ ý |
| Thu thập dữ liệu Analytics | Chưa kiểm thử |

Ảnh và video không thay thế kiểm thử mọi trình duyệt, kích thước và thao tác. Chưa kiểm tra bằng trình đọc màn hình hoặc đánh giá đầy đủ độ tương phản.

## 10. Minh chứng và báo cáo

Đã chuẩn bị:

- Ảnh giao diện trước và sau khi sửa HTML.
- Ảnh nhóm size trước và sau khi chỉnh Box Model.
- Ảnh thử các giá trị Flexbox.
- Ảnh thử Grid hai cột và ảnh bố cục bốn cột.
- Ảnh liên kết bình thường, hover và focus.
- Ảnh menu trước và sau điều chỉnh.
- Ảnh kiểm tra CSS bằng DevTools.
- Ảnh cập nhật mã nguồn trên GitHub.
- Báo cáo Word Buổi 2.

Code trong báo cáo được trình bày dưới dạng chữ. Phần sửa `alt` được minh chứng bằng nội dung mã thay đổi, không dùng hai ảnh giao diện giống nhau.

Các tệp minh chứng và báo cáo đang được hoàn thiện để bổ sung vào repository. README chưa đặt liên kết tới tệp chưa được tải lên.

## 11. Sử dụng AI

AI hỗ trợ:

- Phân tích mã hiện có.
- Phân biệt lỗi với đề xuất cải thiện.
- Giải thích HTML và CSS.
- Hướng dẫn thay đổi từng đoạn mã.
- Đối chiếu ảnh và kết quả thực hành.
- Hướng dẫn xử lý xung đột Git.
- Hỗ trợ giải thích kiến thức HTML5 và CSS3.

Sinh viên thực hiện chỉnh sửa trên máy, chạy thử và cung cấp ảnh, video để kiểm tra.

Nhật ký trong `AI_USAGE.md` chọn các prompt thực hành tiêu biểu, kết quả và cách kiểm tra hoặc điều chỉnh. Không sao chép toàn bộ hội thoại hướng dẫn thao tác.

Không mô tả các đoạn mã hoặc giải pháp do AI cung cấp là sản phẩm sinh viên tự nghĩ ra hoàn toàn.

## 12. Cập nhật GitHub

Dự án tiếp tục sử dụng repository Buổi 1, không tạo repository mới.

Đã commit HTML/CSS Buổi 2 với thông điệp:

```text
Hoan thien HTML CSS buoi 2
```

Khi Pull origin, `index.html` xuất hiện hai vùng xung đột:

- Bản cục bộ có các thay đổi Buổi 2.
- Bản GitHub có mã Google Analytics.

Quá trình xử lý giữ các thay đổi Buổi 2, bổ sung lại Analytics vào trong `<head>`, loại bỏ dấu xung đột, hoàn tất merge và đưa mã lên GitHub.

Bản `index.html` trên GitHub đã được mở kiểm tra sau cập nhật.

README, nhật ký AI và ảnh minh chứng Buổi 2 được cập nhật trong lượt tài liệu tiếp theo.

GitHub Pages chưa được xác nhận trong quá trình này.

## 13. Nguồn ảnh và dữ liệu

Xem `IMAGE_SOURCES.md`.

Ảnh tham khảo MWC được sử dụng để minh họa học tập. Dữ liệu tên và giá của bốn sản phẩm gợi ý là dữ liệu minh họa, không được xem là thông tin thương mại chính xác của từng ảnh.

## 14. Ghi nhận kiểm tra Buổi 1

Theo nhật ký Buổi 1 ngày 20/10/2026:

- ZIP giải nén hợp lệ.
- Có mã HTML/CSS, tám ảnh, bốn thẻ sản phẩm gợi ý và bảy hàng thông số.
- Các đường dẫn nội bộ được ghi nhận không thiếu.
- Bảng thông số có cỡ chữ 16px trên máy tính và 15px ở màn hình tối đa 650px.
- Ảnh giao diện hẹp cho thấy sản phẩm gợi ý xếp hai cột.

Đây là ghi nhận của Buổi 1. Kết quả thực hành bổ sung của Buổi 2 được trình bày ở các mục phía trên.