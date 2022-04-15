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
  

  
    const setAlarm=()=>{
      let timing=document.getElementsByClassName("timing");
      let wakeup=document.getElementById("wakeup");
      let lunch=document.getElementById("lunch");
      let nap=document.getElementById("nap");
      let night=document.getElementById("night");
      let time=new Date();
      let hours=time.getHours();
  
      timing[0].innerText=wakeup.options[wakeup.selectedIndex].text;
      timing[1].innerText=lunch.options[lunch.selectedIndex].text;
      timing[2].innerText=nap.options[nap.selectedIndex].text;
      timing[3].innerText=night.options[night.selectedIndex].text;
  
      if((hours===parseInt(wakeup.value))){
      let greeting=document.getElementsByClassName("card2");
      let message=document.getElementById("timeMessage");
      let image=document.getElementsByClassName("lastimg");
      image.src="./component 30-1.svg";
      message.innerText="GRAB SOME HEALTHY BREAKFAST!!!"
      greeting.innerText="GOOD MORNING!! WAKEUP!!";
  }
  
      if((hours===parseInt(lunch.value))){
        let greeting=document.getElementsByClassName("card2");
        let message=document.getElementById("timeMessage");
        let image=document.getElementsByClassName("lastimg");
      image.src="./lunch.svg";
      message.innerText="LET'S HAVE SOME LUNCH !!"
      greeting.innerText="GOOD AFTERNOON !! TAKE SOME SLEEP";
  }
  
      if((hours===parseInt(nap.value))){
        let greeting=document.getElementsByClassName("card2");
      let message=document.getElementById("timeMessage");
      let image=document.getElementsByClassName("lastimg");
      image.src="./evening.png";
      message.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!"
      greeting.innerText="GOOD EVENING!!";
  }
  
      if((hours===parseInt(night.value))){
        let greeting=document.getElementsByClassName("card2");
        let message=document.getElementById("timeMessage");
        let image=document.getElementsByClassName("lastimg");
          image.src="./night.png";
          message.innerText="CLOSE YOUR EYES AND GO TO SLEEP"
          greeting.innerText="GOOD NIGHT!!";
      }
  }

  setInterval(displayTime, 1000);