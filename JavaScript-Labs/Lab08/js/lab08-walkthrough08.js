// Biến toàn cục.
var boxClass = "movingDiv";

// Hàm nhận số thứ tự và trả về một khối HTML.
function outputBox(num) {
  var box = "<div class='" + boxClass + "' id='div" + num + "'>";
  box += "This is div " + num;
  box += "</div>";
  return box;
}