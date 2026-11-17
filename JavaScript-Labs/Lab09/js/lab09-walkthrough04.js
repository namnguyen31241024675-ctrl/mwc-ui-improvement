var btn = document.getElementById("testButton");
var content = document.getElementById("content");
var img = document.getElementById("mainImage");
var timer;

btn.addEventListener("click", function () {
  clearTimeout(timer);

  if (btn.textContent.trim() === "Hide") {
    btn.textContent = "Show";
    content.className = "makeItDisappear";

    timer = setTimeout(function () {
      content.style.display = "none";
    }, 1000);
  } else {
    btn.textContent = "Hide";
    content.style.display = "block";

    timer = setTimeout(function () {
      content.className = "makeItNormal";
    }, 50);
  }
});

img.addEventListener("mouseover", function () {
  img.className = "makeItGray";
});

img.addEventListener("mouseout", function () {
  img.className = "makeItNormal";
});