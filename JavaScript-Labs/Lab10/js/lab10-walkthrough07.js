$(function () {
  function movePreview(e) {
    $("#preview")
      .css("top", (e.pageY - 10) + "px")
      .css("left", (e.pageX + 30) + "px");
  }

  $("figure img")
    .on("mouseover", function (e) {
      $("#preview").remove();

      var src = $(this).attr("src");
      var caption = $(this).attr("alt");
      var newSrc = src.replace("small", "medium");

      var preview = $("<div>", { id: "preview" });

      preview.append($("<img>", {
        src: newSrc,
        alt: caption
      }));

      preview.append($("<p>").text(caption));
      preview.css("pointer-events", "none");
      $("body").append(preview);

      $(this).addClass("gray");
      movePreview(e);
      preview.fadeIn(1000);
    })
    .on("mousemove", movePreview)
    .on("mouseleave", function () {
      $(this).removeClass("gray");
      $("#preview").remove();
    });
});