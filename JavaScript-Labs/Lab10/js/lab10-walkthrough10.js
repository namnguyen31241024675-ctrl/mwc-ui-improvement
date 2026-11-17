$(function () {
  $(".animLoading").hide();

  $("#consume").on("click", function () {
    var url = $("#source").val();
    var button = $(this);

    button.prop("disabled", true);
    $(".animLoading").show();
    $("#results").text("Đang tải dữ liệu...");

    $.get(url, null, null, "json")
      .done(function (data) {
        var list = $("<ul>");

        $.each(data, function (index, city) {
          list.append($("<li>").text(city.name));
        });

        $("#results")
          .empty()
          .append($("<p>").text("Tải dữ liệu thành công."))
          .append(list);
      })
      .fail(function (xhr, status) {
        $("#results").text(
          "Tải dữ liệu thất bại. HTTP: " +
          xhr.status + " — trạng thái: " + status
        );
      })
      .always(function () {
        $(".animLoading").fadeOut("slow");
        button.prop("disabled", false);
      });
  });
});