export function createHead() {
  return (document.getElementById("head").innerHTML =
    "<title>Frantic Noise</title>" +
    '<meta charset="UTF-8" />' +
    '<meta name="viewport" content="width=device-width" />' +
    '<script src="https://gumroad.com/js/gumroad.js"></script>' +
    '<link rel="stylesheet" href="css/styles.css" />' +
    '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>' +
    '<link rel="stylesheet" href="css/style-iframe.css" />');
}
export function createIframe(url) {
  const styles =
    'style="width:800px;border:none;overflow:hidden;padding-top:10px"';
  const auto_height =
    "javascript:(function(o){o.style.height=(window.innerHeight - 350) +'px';}(this));";
  const iframe_code = `<iframe src="${url}" onload="${auto_height}" ${styles}></iframe>`;
  return (document.getElementById("ifram1e").innerHTML = iframe_code);
}



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

document.getElementById("header").innerHTML =
  '<div class="headerparent">' +
  '        <div class="headerchild">' +
  '          <img class="franticlogo" src="img/FRANTIC-NOISE-LOGO.png" width="300"/>' +
  //'        <h3 class="animate__animated animate__backInDown animate__delay-2s ">Frantic Noise </h3>' +
  //'        <h3 class="animate__animated animate__rubberBand animate__delay-4s" style="font-size: 17px">Acoustic Levitation Engineer</h3>' +
  "      </div>" +
  "    </div>";

document.getElementById("footer").innerHTML =
  "<div id='footer'><br>" +
  " All rights reserved www.franticnoise.com 2022  " +
  "</div>";

