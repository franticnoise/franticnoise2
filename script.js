var btn_1 = document.querySelector('.dropdown_desktop_icon button');
var btn_2 = document.querySelector('.dropdown_desktop button');
var btn_3 = document.querySelector('.dropdown_mobile button');




btn_1.addEventListener('click', function () {
  this.classList.toggle('active');
});

btn_2.addEventListener('click', function () {
  this.classList.toggle('active');
});

btn_3.addEventListener('click', function () {
  this.classList.toggle('active');
});

window.addEventListener('click', function (event) {
  if (
    !event.target.matches('button') &&
    !event.target.matches('button span') &&
    !event.target.matches('button span .i') &&
    !event.target.matches('.dropdown ul li a') &&
    !event.target.matches('.dropdown ul li a span')
  ) {
    var btns = document.querySelectorAll('.dropdown  button');

    btns.forEach(function (btn) {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
      }
    });
  }
});
