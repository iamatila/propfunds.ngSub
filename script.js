console.log("its working");

function toggle() {
  let trailer = document.querySelector(".trailer");
  let myVideo = document.getElementById("video1");
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
