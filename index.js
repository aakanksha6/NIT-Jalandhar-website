// for displaying time
let time = setInterval(myTimer, 1000);

function myTimer() {
  let d = new Date();
  // let t = d.toUTCString()
  d = d.toString();
  let t = d.replace("GMT+0530 (India Standard Time)", "");
  document.getElementById("date").innerHTML = t;
}

// for side menu
const body = document.querySelector("body");
const navbar = document.querySelector(".nav-content");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const topnav = document.querySelector(".topnav");
const gotobottom = document.getElementById("ipe");
gotobottom.addEventListener("click", () => {
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
});
menuBtn.onclick = () => {
  navbar.classList.add("show");
  menuBtn.classList.add("hide");
};

cancelBtn.onclick = () => {
  navbar.classList.remove("show");
  menuBtn.classList.remove("hide");
};
window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

// for making dropdowns clickable
let dropdowns = document.getElementsByClassName("dropdown");
window.addEventListener("resize", () => {
  for (let drop of dropdowns) {
    if (window.innerWidth <= 1000) {
      drop.childNodes[3].classList.remove("hover");
    } else {
      drop.childNodes[3].classList.add("hover");
    }
  }
});
for (let drop of dropdowns) {
  if (window.innerWidth <= 1000) {
    drop.childNodes[3].classList.remove("hover");
    console.log(drop.childNodes[3]);
  }
}

console.log(dropdowns);
for (let drop of dropdowns) {
  drop.addEventListener("click", (e) => {
    drop.childNodes[3].classList.toggle("clicked");
  });
}
