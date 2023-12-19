// Format Switch Button
const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");

  var formatValue = formatSwitchBtn.getAttribute("date-format");

  if (formatValue === "12") {
    formatSwitchBtn.setAttribute("date-format", "24");
  }
  else {
    formatSwitchBtn.setAttribute("date-format", "12");
  }
});

// For Toggle
const dotmenuBtn = document.querySelector(".dot-menu-btn");
const dotMenu = document.querySelector(".dot-menu");
dotmenuBtn.addEventListener("click", () => {
  dotMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target.id !== "active-menu") {
    dotMenu.classList.remove("active");
  }
});

// Setting Month, Day and Fetching Elements from Html file
let monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let hour = document.getElementById("hours");
let minute = document.getElementById("minutes");
let second = document.getElementById("sec");
let months = document.getElementById("month")
let days = document.getElementById("day")
let date = document.getElementById("date")

// Setting Time
setInterval(() => {
    let time = new Date()
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let ms = time.getMonth();
    let d = time.getDay();
    let ds = time.getDate();
    console.log(s)

// Setting Date Format
  let formatValue = formatSwitchBtn.getAttribute("date-format");
  if (formatValue === "12") {
    ampm.innerHTML = h < 12 ? "AM" : "PM";
    h = h % 12 || 12;
  } else {
    ampm.innerHTML = "  ";
  }

// Setting Time to Frontend
  hour.innerHTML = h < 10? "0" + h : h;
    minute.innerHTML = m < 10? "0" + m : m;
    second.innerHTML = s < 10? "0" + s : s;
    months.innerHTML = monthNames[ms] + ","
    days.innerHTML = dayNames[d]
    date.innerHTML = ds
}, 1000);


