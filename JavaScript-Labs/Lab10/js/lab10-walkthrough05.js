$(function () {
  var img = $("<img>", {
    src: "images/art/thumbs/13030.jpg",
    alt: "Ảnh được chèn bằng jQuery"
  });

  var panel = $(".panel");
  img.insertBefore(panel);
});