var first = document.getElementById("first");

console.log("first:", first);
console.log("firstChild:", first.firstChild);
console.log("nextSibling:", first.firstChild.nextSibling);
console.log("parentNode:", first.parentNode);

var stories = document.getElementById("stories");

for (var i = 0; i < stories.childNodes.length; i++) {
  var node = stories.childNodes[i];

  console.log(
    "child " + i + " = " + node + " nodeType=" + node.nodeType
  );

  // Chỉ đổi nền node phần tử, bỏ qua node chữ/khoảng trắng.
  if (node.nodeType === 1) {
    node.style.backgroundColor = "lightblue";
  }
}