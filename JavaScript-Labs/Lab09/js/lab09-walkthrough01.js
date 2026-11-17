var msg = document.getElementById("msgArea");
msg.value = "here is some text";

document.getElementById("pageTitle").innerHTML = "Even newer title";

// So sánh nội dung HTML với nội dung chữ.
console.log("innerHTML:", document.getElementById("first").innerHTML);
console.log("innerText:", document.getElementById("first").innerText);
console.log("Class:", msg.getAttribute("class"));

var elem = document.getElementsByTagName("textarea");
elem[0].value = "selected by tag name";

var spans = document.getElementsByTagName("span");
for (var i = 0; i < spans.length; i++) {
  console.log("span:", spans[i].innerText);
}

var counts = document.getElementsByClassName("count-number");
for (var j = 0; j < counts.length; j++) {
  console.log("count:", counts[j].innerText);
}

var firstParagraph = document.querySelector("#first p");
msg.value = firstParagraph.innerHTML;

var paragraphs = document.querySelectorAll("#first p");
for (var k = 0; k < paragraphs.length; k++) {
  console.log("paragraph:", paragraphs[k].innerHTML);
}

// Hai thao tác cuối theo tài liệu.
msg.setAttribute("class", "hidden");
document.getElementById("features").style.backgroundColor = "green";