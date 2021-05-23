const year = document.getElementById('year');
const menuList = document.querySelector('.menu-list ');
const menuBar = document.querySelector('.menu-bar i');
const date = new Date();
year.innerHTML = date.getFullYear();

menuBar.addEventListener('click', () => {
  menuList.classList.toggle('open');
  menuBar.classList.toggle('open');
});

const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
  const btn = question.querySelector('.question-btn');
  // console.log(btn);

  btn.addEventListener('click', () => {
    // console.log(question);

    questions.forEach((item) => {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });

    question.classList.toggle('show-text');
  });
});

$(document).ready(() => {
  $('.dload').owlCarousel({
    margin: 0,
    loop: true,
    autoplayTimeOut: 2000,
    autoHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
