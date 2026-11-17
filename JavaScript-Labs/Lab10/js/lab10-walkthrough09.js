$(function () {
  $("#consume").on("click", function () {
    var url = $("#source").val();
    $("#results").text("Đang tải...");

    $.get(url, function (data, status) {
      if (status === "success") {
        var list = $("<ul>");

        $.each(data, function (index, city) {
          list.append($("<li>").text(city.name));
        });

        $("#results").empty().append(list);
      }
    }, "json")
      .fail(function () {
        $("#results").text(
          "Không tải được dữ liệu từ nguồn đã chọn."
        );
      });
  });
});