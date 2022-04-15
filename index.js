let button = document.querySelector(".button");
button.addEventListener("mouseover", function () {
  this.innerHTML = "Party Time";
});
button.addEventListener("mouseout", function () {
  this.innerHTML = "Set Alarm";
});


// time setting-

let displayTime=() =>{
const date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let ampm = document.getElementById("ampm");

// set AM & PM
let newHour = hour;
newHour >= 12 ? (ampm.innerHTML = "PM") : (ampm.innerHTML = "AM");

// 12 hour format
newHour > 12 ? (newHour -= 12) : (newHour = 0 ? (newHour = 12) : (newHour));

// adding time to html
    document.getElementById("hour").innerHTML = newHour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("second").innerHTML = second;
  }
  setInterval(displayTime, 1000);

  // setting time 

const date = new Date();
let hour = date.getHours();
let wakeUp = document.getElementById("wakeUp");
let lunch = document.getElementById("lunch");
let nap = document.getElementById("nap");
let night = document.getElementById("night");
function setTime() {
  if (parseInt(wakeUp.value) === hour) {
    document.getElementById("timeMessage").innerHTML = "grab some healthy breakfast!!";
    document.getElementById("clock-image").src = "./morningimage.svg";
  }
  if (parseInt(lunch.value) === hour) {
    document.getElementById("timeMessage").innerHTML = "it's time to have some lunch!!";
    document.getElementById("clock-image").src = "./lunchimage1.svg";
  }
  if (parseInt(nap.value) === hour) {
    document.getElementById("timeMessage").innerHTML = "it's nap time!!";
    document.getElementById("clock-image").src = "./napimage.png";
  }
  if (parseInt(night.value) === hour) {
    document.getElementById("timeMessage").innerHTML = "Good night! Have a nice sleep";
    document.getElementById("clock-image").src = "./nightimage.svg";
  }
  let timing = document.getElementsByClassName("timing");
  timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
  timing[1].innerText = lunch.options[lunch.selectedIndex].text;
  timing[2].innerText = nap.options[nap.selectedIndex].text;
  timing[3].innerText = night.options[night.selectedIndex].text;
}
document.getElementById("submit").addEventListener("click", setTime, false);
(function setMessage() {
  if (hour <= 12) {
    document.getElementById("card2").innerHTML = "Good Morning !";
  }
  if (hour >= 12 && hour < 16) {
    document.getElementById("card2").innerHTML = "Good Afternoon !";
  }
  if (hour >= 16 && hour < 19) {
    document.getElementById("card2").innerHTML = "Good Evening!";
  }
  if (hour >= 19 && hour <= 23) {
    document.getElementById("card2").innerHTML = "Good Night!";
  }
})();
