# Nhật ký sử dụng AI

## 1. Thông tin chung

- Sinh viên: Nguyễn Thanh Nam.
- MSSV: 31241024675.
- Dự án: Cải tiến giao diện chi tiết sản phẩm MWC 6760.
- Công cụ: ChatGPT.
- Repository: https://github.com/namnguyen31241024675-ctrl/mwc-ui-improvement

Nhật ký ghi các yêu cầu thực hành tiêu biểu, kết quả AI hỗ trợ và cách kiểm tra, lựa chọn hoặc điều chỉnh.

Các prompt được ghi nguyên văn khi có thể; đoạn tóm tắt được đánh dấu rõ. Mã nguồn và ảnh được cung cấp kèm prompt không được chép lại toàn bộ trong nhật ký.

# Phần A — Buổi 1

## A1. Mục đích sử dụng

- Phân tích năm khu vực của website MWC.
- Đối chiếu đề xuất với ảnh và thông tin thực tế.
- Chọn một cải tiến để triển khai.
- Đề xuất bố cục và tạo HTML/CSS.
- Giải thích mã và hướng dẫn chạy thử.

Sinh viên cũng cung cấp một bảng phân tích từ AI khác. Tên công cụ đó chưa được xác nhận.

## A2. Prompt phân tích theo mẫu đề

Prompt dưới đây là mẫu có thể sử dụng để tái hiện yêu cầu phân tích, không được xem là bản ghi nguyên văn toàn bộ trao đổi Buổi 1:

> Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng cho website thương mại điện tử. Tôi đang khảo sát website MWC: https://mwc.com.vn/. Hãy lập bảng phân tích trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng. Với mỗi khu vực, nêu mục đích chức năng, thành phần giao diện cần có, điểm thuận tiện, một vấn đề có thể phát sinh và một đề xuất cải tiến. Không khẳng định tính năng chưa kiểm chứng. Phân biệt rõ quan sát thực tế và đề xuất AI.

## A3. Yêu cầu tạo mã đã thống nhất

Tóm tắt yêu cầu, không phải nguyên văn:

> Tạo một trang HTML5/CSS3 minh họa chi tiết giày MWC 6760. Chuyển thông số thành bảng dễ đọc và tách mô tả phối đồ. Có bốn sản phẩm mẫu đủ ảnh, tên, giá và liên kết thao tác. CSS tách riêng, hiển thị trên máy tính và điện thoại, không có backend hoặc cơ sở dữ liệu. Giải thích cách chạy và phần cần kiểm tra.

## A4. Kết quả phân tích

| Khu vực | Kết quả và đề xuất của AI |
| --- | --- |
| Trang chủ | Kiểm tra cách tổ chức menu, banner và lối vào danh mục; đề xuất tăng độ rõ của điều hướng |
| Danh mục | Phân tích bộ lọc và sắp xếp; đề xuất gom nhóm màu và Việt hóa nhãn |
| Chi tiết | Đề xuất bảng thông số hai cột và tách phần mô tả phong cách |
| Tìm kiếm | Đề xuất thông báo rõ khi không có kết quả và phân biệt phần gợi ý |
| Giỏ hàng | Đề xuất thể hiện trạng thái giỏ trống rõ hơn và có lối quay lại mua sắm |

Các đề xuất thiết kế không tự động được xem là tính năng website đang thiếu.

## A5. Đối chiếu và quyết định

| Đề xuất | Kết quả đối chiếu | Quyết định |
| --- | --- | --- |
| Thêm hướng dẫn size | Ảnh cho thấy đã có liên kết hướng dẫn | Không bổ sung như một chức năng mới |
| Thêm màu và size trong giỏ | Ảnh giỏ đã hiển thị | Bỏ đề xuất bổ sung trùng |
| Tìm kiếm gần đúng | Chưa thử sai chính tả | Không kết luận đang thiếu |
| Gom nhóm màu | Danh sách màu dài trong lần quan sát | Giữ làm ý tưởng, không chọn triển khai |
| Cải thiện giỏ trống | Ảnh cho thấy biểu mẫu vận chuyển vẫn hiện | Giữ làm ý tưởng, không chọn triển khai |
| Chuyển thông số thành bảng | Ảnh mô tả sản phẩm có thông số dạng danh sách | Chọn làm cải tiến chính |

## A6. Kiểm tra đã được ghi nhận ở Buổi 1

### AI kiểm tra trên trình duyệt theo nhật ký ngày 20/10/2026

- Quan sát trang chủ và danh mục Giày nam.
- Mở bộ lọc màu và giá.
- Thử sắp xếp giá tăng dần: sản phẩm 79.000đ xuất hiện ở đầu trong lần thử.
- Thử lọc khoảng 100.000–200.000đ: các sản phẩm đầu hiển thị giá 125.000đ.
- Thử mẫu MWC 6758 giá 295.000đ: chọn size, thêm giỏ, tăng số lượng và xóa.
- Tìm mã 6758 trả về sản phẩm.
- Tìm từ khóa không có kết quả không thấy sản phẩm trong vùng kết quả; vẫn có sản phẩm bán chạy phía dưới.

Không khẳng định đã kiểm tra toàn bộ danh sách hoặc tìm kiếm sai chính tả.

### Ảnh sinh viên cung cấp

- Mẫu MWC 6760: giá 395.000đ, màu đen, size 39–43.
- Có liên kết hướng dẫn size.
- Thông số gồm chiều cao 2cm, da caro tổng hợp, đế PVC và xuất xứ Việt Nam.
- Giỏ có hai đôi, tổng 790.000đ.
- Sau xóa, giỏ trống và tổng 0đ; biểu mẫu vận chuyển vẫn hiển thị.
- Không thử gửi đơn hàng.

Thông tin mẫu 6758 và 6760 được phân biệt, không sử dụng thay thế cho nhau.

## A7. Điều chỉnh sau khi chạy thử

Sinh viên lựa chọn đề xuất tăng cỡ chữ bảng thông số do AI đưa ra và yêu cầu áp dụng.

| Vị trí | Trước | Sau |
| --- | --- | --- |
| `.spec-table` | `font-size: 14px` | `font-size: 16px` |
| Trong media query tối đa 650px | `font-size: 13px` | `font-size: 15px` |

AI hỗ trợ sửa CSS. Sinh viên mở lại trang và gửi ảnh kiểm tra.

Ảnh cho thấy bảng nằm gọn, nội dung xuống dòng trong ô và bốn sản phẩm gợi ý xếp hai cột trên giao diện hẹp.

Không ghi ý tưởng tăng cỡ chữ là vấn đề do sinh viên tự phát hiện hoàn toàn.

## A8. Giới hạn kiểm tra Buổi 1

- Đã kiểm tra cấu trúc gói, đường dẫn cục bộ, tám ảnh, bốn thẻ mẫu và bảy hàng thông số.
- Theo nhật ký Buổi 1, chưa hoàn thành kiểm tra hiển thị bằng trình duyệt tự động.
- Đã đối chiếu ảnh chạy thực tế do sinh viên cung cấp.
- Chưa kiểm tra mọi chiều rộng và thao tác.

# Phần B — Buổi 2

## B1. Phạm vi sử dụng AI

Tiếp tục mã nguồn Buổi 1, không tạo website mới.

AI hỗ trợ:

- Phân tích HTML/CSS hiện tại.
- Phân biệt lỗi thực tế với lựa chọn thiết kế.
- Giải thích thuộc tính và hướng dẫn sửa từng đoạn.
- Đề xuất cách kiểm tra trên trình duyệt.
- Đối chiếu kết quả qua ảnh và video.
- Hướng dẫn xử lý xung đột Git.

Sinh viên chỉnh sửa trên máy, chạy thử, lựa chọn phương án và cung cấp minh chứng.

## B2. Phân tích mã nguồn hiện tại

### Prompt tiêu biểu

Yêu cầu được gửi kèm toàn bộ HTML và CSS hiện tại:

> Tôi đang làm bài tập cá nhân môn Phát triển ứng dụng thương mại điện tử. Trong Buổi 1, tôi đã khảo sát một website TMĐT và tạo một giao diện cải tiến bằng HTML/CSS.

> Hãy giúp tôi:
> 1. Xác định những thành phần HTML đã có.
> 2. Chỉ ra các thành phần HTML còn thiếu hoặc chưa hợp lý.
> 3. Nêu ba vấn đề về cấu trúc HTML hoặc trình bày.
> 4. Đề xuất cách cải thiện bằng kiến thức HTML5 và CSS3 cơ bản.
> 5. Giải thích thứ tự nên thực hiện các cải tiến.
>
> Chưa viết lại toàn bộ mã nguồn.
> Không tạo website mới.
> Hãy giúp tôi hiểu mã hiện tại trước khi sửa.

### Kết quả AI hỗ trợ

- Xác định các phần HTML và kỹ thuật CSS đã có.
- Nêu việc tên sản phẩm chưa nằm trong tiêu đề chính.
- Chỉ ra “Giày nam” dẫn tới phần gợi ý, chưa khớp tên liên kết.
- Nêu khả năng ảnh bổ sung bị cắt do tỷ lệ khung và `object-fit: cover`.
- Phân biệt đề xuất trình bày với lỗi cú pháp.

### Lựa chọn và xử lý

- Đưa tên sản phẩm vào `h1`.
- Bỏ liên kết chưa phù hợp ở “Giày nam”.
- Tiếp tục kiểm tra `alt` ở bước HTML.
- Không triển khai thay đổi cách cắt ảnh bổ sung trong mã cuối.

## B3. Kiểm tra cấu trúc HTML5

### Prompt

> Tôi muốn tiếp tục Bước 2 trên mã HTML vừa gửi. Hãy kiểm tra cách dùng header, nav, main, section, article, footer; thứ bậc h1, h2, h3; ảnh và alt; liên kết; thẻ đóng và cách lồng thẻ. Phân biệt lỗi cần sửa với đề xuất cải thiện, giải thích lý do từng thay đổi. Chưa viết lại toàn bộ website.

### Kết quả AI hỗ trợ

- Cấu trúc các khu vực nhìn chung phù hợp.
- Thứ bậc tiêu đề không có vấn đề rõ ràng trong lần đọc mã.
- Liên kết “Giày nam” cần điều chỉnh.
- Nội dung `h1` và một số `alt` nên cụ thể hơn.
- Không thêm thẻ chỉ để làm dài mã nguồn.

### Thay đổi đã áp dụng

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

Trước:

```html
<a href="#goi-y">Giày nam</a>
```

Sau:

```html
<span>Giày nam</span>
```

Sinh viên cung cấp ảnh trước và sau thay đổi. Bản mã cuối xác nhận tên sản phẩm nằm trong `h1` và “Giày nam” nằm trong `span`.

### Cập nhật alt

Sinh viên cung cấp tám ảnh để đối chiếu. AI đề xuất mô tả theo nội dung thực tế, sau đó sinh viên cập nhật vào HTML.

Ví dụ:

```html
<!-- Trước -->
alt="Mở ảnh góc chụp bổ sung thứ nhất"

<!-- Sau -->
alt="Giày MWC 6760 màu đen khi mang trên chân, nhìn từ phía trước"
```

Bản HTML cuối có mô tả cập nhật cho cả tám ảnh.

Không dùng ảnh giao diện trước–sau để chứng minh thay đổi `alt`, vì giao diện thường không đổi khi ảnh tải bình thường.

## B4. Kiểm tra liên kết CSS

### Prompt

> Tôi đã có file `css/style.css` và mã HTML/CSS như đã gửi trong chat. Hãy kiểm tra đường dẫn liên kết CSS, giải thích các quy tắc đang chỉnh font chữ, màu chữ, màu nền, margin của body và kích thước hình ảnh. Phần nào đã đúng thì giữ, chỉ đề xuất sửa phần cần thiết. Hướng dẫn tôi kiểm tra bằng trình duyệt, chưa viết lại toàn bộ CSS.

### Kết quả AI hỗ trợ

- Đường dẫn `css/style.css` phù hợp với cấu trúc thư mục.
- Giải thích `margin`, màu chữ, nền, font, cỡ chữ và chiều cao dòng.
- Phân biệt quy tắc ảnh chung với quy tắc `aspect-ratio` và `object-fit` riêng.
- Hướng dẫn xem nguồn CSS trong DevTools.

### Kiểm tra thực tế

- Sinh viên chọn `body` trong Elements.
- Quan sát quy tắc được lấy từ `style.css`.
- Thử đổi nền từ `#fff` thành `#eeeeee`.
- Nền chuyển xám nhạt trong ảnh kiểm tra.
- Tải lại trang để trở về nền trắng.

Thay đổi DevTools là thử nghiệm tạm, không được lưu vào CSS cuối.

## B5. Thực hành selector và Box Model

### Prompt

> Tôi muốn thực hành CSS selector và Box Model trên nhóm chọn size trong trang chi tiết sản phẩm MWC 6760, dùng mã HTML/CSS đã gửi. Hãy giải thích element selector, class selector, descendant selector, margin, padding, border và box-sizing: border-box trong mã hiện tại. Chỉ đề xuất CSS cần sửa, không viết lại HTML. Trước khi hướng dẫn sửa, hãy nói rõ tôi cần chụp khu vực nào để so sánh trước–sau.

### Kết quả AI hỗ trợ

- Giải thích selector bằng ví dụ từ code.
- Đề xuất thêm khung nhẹ quanh nhóm size.
- Hướng dẫn chụp cùng khu vực trước và sau thay đổi.

### Thay đổi đã áp dụng

```css
.sizes {
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 12px 16px 16px;
  margin: 16px 0;
  min-width: 0;
}
```

### Kiểm tra

- Có ảnh nhóm size trước và sau khi thêm khung.
- Có ảnh kiểm tra trên điện thoại.
- Trong ảnh điện thoại, năm lựa chọn nằm trong khung.
- Có thao tác thử chọn size và ảnh thể hiện trạng thái được chọn.

Đây là cải thiện trình bày theo hướng dẫn AI, không phải khắc phục lỗi mất chức năng.

## B6. Thử Flexbox

### Prompt

> Dựa trên mã nhóm chọn size đã gửi, hãy giải thích phần tử cha đang dùng display: flex, tác dụng của gap và flex-wrap. Hướng dẫn tôi thử justify-content và align-items, mỗi lần chỉ đổi một thuộc tính để dễ so sánh. Nói rõ cần chụp ảnh nào và cách trả về bố cục phù hợp sau khi thử. Không viết lại HTML.

### Kết quả và thử nghiệm

| Thuộc tính | Kết quả quan sát |
| --- | --- |
| `justify-content: flex-end` | Các ô size dồn sang phải |
| `justify-content: space-between` | Các ô phân bố theo chiều ngang |
| `align-items: flex-start` | Các ô nằm phía trên vùng thử |
| `align-items: center` | Các ô nằm giữa theo chiều dọc vùng thử |

Đã thêm tạm `min-height: 100px` để thấy rõ sự khác biệt khi căn dọc. Sau khi chụp minh chứng, giá trị này được xóa.

### Mã giữ lại

```css
.size-options {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
```

Có ảnh minh chứng cho các trạng thái thử nghiệm. Không giữ chiều cao thừa chỉ để giao diện giống ảnh thử.

## B7. Thử CSS Grid

### Prompt

> Tôi đã có danh sách 4 sản phẩm gợi ý trong mã HTML/CSS đã gửi. Hãy hướng dẫn tôi thử đổi bố cục từ 4 cột thành 2 cột, giải thích display: grid, grid-template-columns, repeat, gap và object-fit: cover. Chỉ rõ code cũ và code mới cần thay, hướng dẫn từng bước và nói rõ lúc nào cần chụp ảnh. Không viết lại HTML.

### Thử nghiệm

Đổi:

```css
grid-template-columns: repeat(4, minmax(0, 1fr));
```

thành:

```css
grid-template-columns: repeat(2, minmax(0, 1fr));
```

### Kết quả kiểm tra và quyết định

- Trên laptop, mỗi hàng còn hai sản phẩm.
- Ảnh lớn hơn và danh sách dài hơn.
- Đã chụp toàn trang để lấy đủ hai hàng.
- Sau thử nghiệm, trả quy tắc chung về bốn cột.
- Giữ quy tắc hai cột cho điện thoại và một cột ở màn hình tối đa 350px.

Không thay nhầm quy tắc hai cột trong media query điện thoại khi trả bố cục laptop.

## B8. Kiểm tra hover và focus

### Prompt

> Tôi muốn kiểm tra và bổ sung hover, transition và focus-visible cho liên kết “Xem thông số trước khi chọn” trong trang chi tiết sản phẩm. Dựa trên code đã gửi, chỉ rõ phần đã có và phần cần thêm. Hướng dẫn từng bước, đưa chính xác code cũ–mới và nói rõ lúc nào cần chụp ảnh. Không viết lại toàn bộ CSS.

### Kết quả AI hỗ trợ

- Xác định hover đổi màu đã có.
- Xác định focus-visible tạo viền đã có.
- Đề xuất thêm transition cho màu chữ.

### Phần bổ sung

```css
.text-link {
  transition: color 0.2s ease;
}
```

### Kiểm tra thực tế

- Chụp trạng thái bình thường.
- Rê chuột và chụp chữ đổi màu.
- Chọn size rồi dùng Tab để chuyển tới liên kết.
- Chụp viền focus quanh liên kết.

Ảnh tĩnh thể hiện trạng thái màu và viền; không chứng minh thời gian chuyển động 0,2 giây.

## B9. Điều chỉnh menu theo nhận xét của sinh viên

### Yêu cầu thực tế được tóm tắt

Sinh viên muốn các mục “Sản phẩm”, “Thông số”, “Gợi ý” vẫn nằm cạnh logo nhưng được căn thấp xuống, ngang chân dòng chữ logo.

### AI hỗ trợ

Đề xuất thêm:

```css
.site-header {
  align-items: baseline;
}
```

### Sinh viên thực hiện và kiểm tra

- Thêm quy tắc vào cuối CSS.
- Lưu file và xem lại giao diện điện thoại.
- Cung cấp ảnh trước và sau.
- Kiểm tra thêm trên laptop và xác nhận kết quả phù hợp.

### Phân biệt vai trò

Sinh viên tự nêu điểm chưa vừa ý và hướng thay đổi mong muốn. AI đưa giải pháp CSS và hướng dẫn thực hiện. Không ghi đây là đoạn mã do sinh viên tự nghĩ ra hoàn toàn.

## B10. Hỗ trợ cập nhật GitHub

### Yêu cầu thực tế được tóm tắt

Sinh viên cung cấp ảnh GitHub Desktop khi xuất hiện Pull origin và thông báo xung đột, yêu cầu hướng dẫn thao tác tiếp theo.

### AI hỗ trợ

- Hướng dẫn commit hai file HTML/CSS trước khi Pull origin.
- Đọc nội dung hai vùng xung đột trong `index.html`.
- Đối chiếu bản cục bộ với bản GitHub.
- Hướng dẫn giữ các thay đổi Buổi 2.
- Bổ sung lại Google Analytics vào trong `<head>`.
- Hướng dẫn hoàn tất merge và push.

### Kết quả

- Commit thay đổi HTML/CSS có thông điệp `Hoan thien HTML CSS buoi 2`.
- File không còn dấu xung đột.
- GitHub Desktop báo ghép thành công.
- Bản `index.html` trên GitHub đã được mở kiểm tra.
- Ảnh cho thấy Analytics nằm trong `<head>`.

Chưa kiểm tra việc Analytics thu thập dữ liệu thực tế.

## B11. Tổng hợp giữ lại và không triển khai

| Nội dung | Quyết định cuối |
| --- | --- |
| Tên sản phẩm trong `h1` | Giữ |
| Bỏ liên kết chưa khớp ở “Giày nam” | Giữ |
| Alt cụ thể cho tám ảnh | Giữ |
| Khung và khoảng cách nhóm size | Giữ |
| Flexbox dồn phải hoặc giãn khoảng trống | Chỉ thử nghiệm |
| Chiều cao 100px của vùng size | Xóa sau thử nghiệm |
| Grid hai cột trên laptop | Chỉ thử nghiệm; trả về bốn cột |
| Grid hai cột trên điện thoại | Giữ |
| Transition màu liên kết | Giữ |
| Căn menu bằng baseline | Giữ |
| Đổi màu nền trong DevTools | Chỉ thử tạm |
| Đổi cách cắt ảnh bổ sung | Chưa triển khai |

## B12. Giới hạn kiểm chứng

- Có ảnh và video giao diện laptop, điện thoại trong quá trình thực hành.
- Chưa có minh chứng kiểm tra riêng ở chiều rộng 768px.
- Chưa kiểm thử trên mọi trình duyệt và kích thước màn hình.
- Chưa kiểm tra bằng trình đọc màn hình.
- Không kiểm thử đặt hàng vì nút mua bị vô hiệu hóa có chủ ý.
- Không suy ra hiệu quả trải nghiệm người dùng từ việc giao diện nhìn gọn hơn.
- Các nội dung kiểm tra được ghi theo minh chứng đã thực hiện, không đánh dấu đạt cho phần chưa thử.