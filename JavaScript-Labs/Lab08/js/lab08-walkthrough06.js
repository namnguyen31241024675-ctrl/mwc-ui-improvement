var stringOne = new String("Test");
var stringTwo = "Test";
var stringThree = "Test";
var stringFour = new String("Test");

document.write("typeof stringOne = " + typeof stringOne);
document.write("<br>typeof stringThree = " + typeof stringThree);

document.write("<h2>So sánh chuỗi</h2>");
document.write("stringOne == stringTwo: " + (stringOne == stringTwo));
document.write("<br>stringOne == stringFour: " + (stringOne == stringFour));
document.write("<br>stringOne === stringTwo: " + (stringOne === stringTwo));
document.write("<br>stringTwo === stringThree: " + (stringTwo === stringThree));
document.write("<br>stringTwo === stringFour: " + (stringTwo === stringFour));

var dateOne = new Date();
document.write("<h2>Date</h2>");
document.write("<p>" + dateOne + "</p>");

document.write("<h2>Math</h2>");
document.write("Math.PI = " + Math.PI);
document.write("<br>Math.sqrt(4) = " + Math.sqrt(4));
document.write("<br>Math.random() = " + Math.random());