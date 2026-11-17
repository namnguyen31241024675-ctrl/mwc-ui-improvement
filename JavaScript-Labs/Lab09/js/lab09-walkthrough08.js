window.addEventListener("load", function () {
  var form = document.getElementById("sampleForm");
  var errorArea = document.getElementById("errors");

  errorArea.className = "hidden";
  form.addEventListener("submit", checkForEmptyFields);
});

function checkForEmptyFields(e) {
  // Bài minh họa, không gửi dữ liệu hoặc mật khẩu đi.
  e.preventDefault();

  var form = e.currentTarget;
  var errorArea = document.getElementById("errors");
  var fields = form.querySelectorAll(
    "input[type=text], input[type=password]"
  );
  var fieldList = [];

  errorArea.className = "hidden";
  errorArea.textContent = "";

  for (var i = 0; i < fields.length; i++) {
    if (fields[i].value.trim() === "") {
      fieldList.push(fields[i].id);
    }
  }

  if (fieldList.length > 0) {
    errorArea.textContent =
      "The following fields can't be empty: " + fieldList.join(", ");
    errorArea.className = "visible";
  } else {
    errorArea.textContent =
      "Dữ liệu đã đủ. Đây là form thực hành, chưa gửi đăng ký.";
    errorArea.className = "visible";
  }
}