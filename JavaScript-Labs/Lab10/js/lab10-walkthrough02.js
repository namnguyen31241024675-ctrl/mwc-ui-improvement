$(function () {
  var msg = $("#msgArea");
  msg.val("here is some new text");

  // Đổi tiêu đề, giữ các phần tử khác để tiếp tục thực hành.
  $("#pageTitle").html("new Title");

  $("#msgArea").val(
    "My class is " + $("#msgArea").attr("class")
  );

  $("button").css("background-color", "red");
  $("body").css("background-color", "ivory");
  $(".center-icons").addClass("selected");
});