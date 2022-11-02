
// add analogic switch option

let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    hourElement = document.getElementsByClassName("hour")[0],
    minElement = document.getElementsByClassName("min")[0],
    secElement = document.getElementsByClassName("sec")[0],
    digit = document.getElementsByClassName("digit")[0];

moveTime();

function moveTime() {
  moveSec();
  moveMin();
  moveHour();  
}

function moveSec() {
  let turnSec = sec*6;
  secElement.style.transform = "rotate(" + turnSec + "deg)";
  secElement.style.webkitTransform = "rotate(" + turnSec + "deg)";
  // for each sec after first
  let eachSec = setInterval(function () {
    turnSec += 6;
    secElement.style.transform = "rotate(" + turnSec + "deg)";
    secElement.style.webkitTransform = "rotate(" + turnSec + "deg)";
  }, 1000);
}

function moveMin() {
  let turnMin = min*6;
  minElement.style.transform = "rotate(" + turnMin + "deg)";
  minElement.style.webkitTransform = "rotate(" + turnMin + "deg)";
  // display digit; short condition to keep 00:00 format
  digit.innerHTML = (new Date().getHours()<10?'0':'') + date.getHours() + ":" + (new Date().getMinutes()<10?'0':'') + date.getMinutes();
  // after first min leftovers
  setTimeout(function () {
    turnMin += 6;
    minElement.style.transform = "rotate(" + turnMin + "deg)";
    minElement.style.webkitTransform = "rotate(" + turnMin + "deg)";
    // display digit on hover; short condition to keep 00:00 format
    digit.innerHTML = (new Date().getHours()<10?'0':'') + new Date().getHours() + ":" + (new Date().getMinutes()<10?'0':'') + new Date().getMinutes();
    // for each min after first
    let eachMin = setInterval(function () {
      turnMin += 6;
      minElement.style.transform = "rotate(" + turnMin + "deg)";
      minElement.style.webkitTransform = "rotate(" + turnMin + "deg)";
      // display digit on hover; short condition to keep 00:00 format
      digit.innerHTML = (new Date().getHours()<10?'0':'') + new Date().getHours() + ":" + (new Date().getMinutes()<10?'0':'') + new Date().getMinutes();
    }, 60000);
  }, (60 - sec) * 1000);
}

function moveHour() {
  if(hour > 11) {hour -= 12;}
  let turnHour = hour*30;
  hourElement.style.transform = "rotate(" + turnHour + "deg)";
  hourElement.style.webkitTransform = "rotate(" + turnHour + "deg)";
  // after first hour leftovers
  setTimeout(function () {
    turnHour += 30;
    hourElement.style.transform = "rotate(" + turnHour + "deg)";
    hourElement.style.webkitTransform = "rotate(" + turnHour + "deg)";
    // for each hour after first
    let eachHour = setInterval(function () {
      turnHour += 30;
      hourElement.style.transform = "rotate(" + turnHour + "deg)";
      hourElement.style.webkitTransform = "rotate(" + turnHour + "deg)";
    }, 3600000);
  }, (60 - min) * 60000);
}
 