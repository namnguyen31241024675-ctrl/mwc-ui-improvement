var daysOfWeek = new Array("Mon", "Tues", "Wed", "Thur", "Fri");

// Thêm thứ Bảy vào cuối và Chủ nhật vào đầu.
daysOfWeek.push("Sat");
daysOfWeek.unshift("Sun");

document.write("<table border='1' cellpadding='10'>");
document.write("<tr>");

for (var i = 0; i < daysOfWeek.length; i++) {
  var day;

  if (daysOfWeek[i].length < 4) {
    day = daysOfWeek[i];
  } else {
    day = "<em>" + daysOfWeek[i] + "</em>";
  }

  document.write("<th>" + day + "</th>");
}

document.write("</tr>");

// Tháng có 30 ngày, bắt đầu vào Chủ nhật.
var date = 1;

for (var row = 0; row < 5; row++) {
  document.write("<tr>");

  for (var column = 0; column < 7; column++) {
    if (date <= 30) {
      document.write("<td>" + date + "</td>");
      date++;
    } else {
      document.write("<td></td>");
    }
  }

  document.write("</tr>");
}

document.write("</table>");