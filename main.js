let btn = document.getElementById("btn");
let btnText = document.getElementById("btnText");
let btnIcon = document.getElementById("btnIcon");

btn.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    btnIcon.src = "img/sun.svg";
    btnText.innerHTML = "LIGHT";
  } else {
    btnIcon.src = "img/moon.svg";
    btnText.innerHTML = "DARK";
  }
};
