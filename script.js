console.log("its working");

let theme = localStorage.getItem("theme");

if (theme == null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("clicked", mode);
    setTheme(mode);
  });
}

function setTheme(mode) {
  if (mode == "light") {
    document.getElementById("theme-style").href = "default.css";
  }

  if (mode == "blue") {
    document.getElementById("theme-style").href = "blue.css";
  }

  if (mode == "green") {
    document.getElementById("theme-style").href = "green.css";
  }

  if (mode == "purple") {
    document.getElementById("theme-style").href = "purple.css";
  }

  localStorage.setItem("theme", mode);
}


function toggle() {
  let trailer = document.querySelector(".trailer");
  let myVideo = document.getElementById("video1");
  trailer.classList.toggle("active");
  myVideo.pause();
  myVideo.currentTime = 0;
}

function toggle2() {
  let trailer = document.querySelector(".trailer2");
  let myVideo = document.getElementById("video2");
  trailer.classList.toggle("active");
  myVideo.pause();
  myVideo.currentTime = 0;
}

function toggleMobile() {
  let trailer = document.querySelector(".trailerMobile");
  let myVideo = document.getElementById("video3");
  trailer.classList.toggle("active");
  myVideo.pause();
  myVideo.currentTime = 0;
}

function toggleMobile2() {
  let trailer = document.querySelector(".trailerMobile2");
  let myVideo = document.getElementById("video4");
  trailer.classList.toggle("active");
  myVideo.pause();
  myVideo.currentTime = 0;
}