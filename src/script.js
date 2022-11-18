
/////////// NAVIGATION MENU

var btn_1 = document.querySelector(".dropdown_desktop_icon button");
var btn_2 = document.querySelector(".dropdown_desktop button");
var btn_3 = document.querySelector(".dropdown_mobile button");

btn_1.addEventListener("click", function () {
  this.classList.toggle("active");
});

btn_2.addEventListener("click", function () {
  this.classList.toggle("active");
});

btn_3.addEventListener("click", function () {
  this.classList.toggle("active");
});

window.addEventListener("click", function (event) {
  if (
    !event.target.matches("button") &&
    !event.target.matches("button span") &&
    !event.target.matches("button span .i") &&
    !event.target.matches(".dropdown ul li a") &&
    !event.target.matches(".dropdown ul li a span")
  ) {
    var btns = document.querySelectorAll(".dropdown  button");

    btns.forEach(function (btn) {
      if (btn.classList.contains("active")) {
        btn.classList.remove("active");
      }
    });
  }
});


/////// CREATE HEADER

document.getElementById("header").innerHTML = '<img class="franticlogo" src="img/FRANTIC-NOISE-LOGO.png"/>';
//  '<div class="headerparent">' +
//  '        <div class="headerchild">' +
//  '          <img class="franticlogo" src="img/FRANTIC-NOISE-LOGO.png" width="300"/>' 
//  '        <h3 class="animate__animated animate__backInDown animate__delay-2s ">Frantic Noise </h3>' +
//  '        <h3 class="animate__animated animate__rubberBand animate__delay-4s" style="font-size: 17px">Acoustic Levitation Engineer</h3>' +
//  "      </div>" +
//  "    </div>";

/////// CREATE FOOTER

document.getElementById("footer").innerHTML =
  "<div id='footer'><br>" +
  " All rights reserved www.franticnoise.com 2022  " +
  "</div>";

  export function createIframe(url) {

    let offsetHeight = 340;
    if(window.innerWidth < 768) {    
      offsetHeight = 260;
    }

    const offsetFinal = window.innerHeight - offsetHeight;

    const auto_height =
      `javascript:(function(o){o.style.height=${offsetFinal} +'px';}(this));`;
    const iframe_code = `<iframe src="templates/${url}" onload="${auto_height}" class="iframemain"></iframe>`;
    return (document.getElementById("ifram1e").innerHTML = iframe_code);
  }
