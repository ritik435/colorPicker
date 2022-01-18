var btn = document.getElementById("submit-btn");
console.log("loaded");
btn.addEventListener("click", function listen() {
    var value1 = parseInt(document.querySelector("#inputId1").value);
    var value2 = parseInt(document.querySelector("#inputId2").value);
    var value3 = parseInt(document.querySelector("#inputId3").value);
    console.log("clicked");
    console.log(value1, typeof (value1));
    document.body.style.backgroundColor = `rgb(${value1},${value2},${value3})`;
})
var pickerBtn = document.getElementById("color-picker-btn");
pickerBtn.addEventListener("click", function () {
    var value = document.querySelector("#head").value;
    console.log(value);
    document.body.style.backgroundColor = `${value}`;
})
var intervalColor = document.getElementById("interval-btn");
var interval;
intervalColor.addEventListener("click", function () {
    console.log("Clicked")
    interval = setInterval(listen, 500)
})
function listen() {
    console.log("Interval")
    var value1 = Math.random() * 255;
    var value2 = Math.random() * 255;
    var value3 = Math.random() * 255;
    document.body.style.backgroundColor = `rgb(${value1},${value2},${value3})`;
}

var stopIntervalColor = document.getElementById("stop-interval-btn");
stopIntervalColor.addEventListener("click", function () {
    clearInterval(interval);
})


