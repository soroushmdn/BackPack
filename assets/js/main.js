// @@@@@@@@@@@@@@@@@ PRELOADER @@@@@@@@@@@@@@@@@
onload = () => {
  const preloader = document.getElementById('preloader');

  setTimeout(() => {
    preloader.style.display = 'none';
  }, 3000);
};

// @@@@@@@@@@@@@@@@@ SHOW MENU @@@@@@@@@@@@@@@@@

const navToggle = document.getElementById('nav-toggle'),
  navMenu = document.getElementById('nav-list'),
  main = document.getElementById('main'),
  footer = document.getElementById('footer');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
  main.classList.toggle('blur-background');
  footer.classList.toggle('blur-background');
});

// @@@@@@@@@@@@@@@@@ REMOVE MENU @@@@@@@@@@@@@@@@@

const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach((n) => {
  n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
    main.classList.remove('blur-background');
    footer.classList.remove('blur-background');
  });
});

// @@@@@@@@@@@@@@@@@ CHANGE HEADER BACKGROUND @@@@@@@@@@@@@@@@@

window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
  const header = document.getElementById('header');

  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

// @@@@@@@@@@@@@@@@@ SHOW SCROLLUP @@@@@@@@@@@@@@@@@

window.addEventListener('scroll', scrollUp);

function scrollUp() {
  const scrollUp = document.getElementById('scrollup');

  if (this.scrollY >= 200) {
    scrollUp.classList.add('show-scrollup');
  } else {
    scrollUp.classList.remove('show-scrollup');
  }
}
//  @@@@@@@@@@@@@@@@@@ swiperjs.com @@@@@@@@@@@@@@@@@@

const newSwiper = new Swiper('.new__swiper', {
  spaceBetween: 15,
  loop: 'true',
  slidesPerView: 'auto',
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    992: {
      spaceBetween: 25,
    },
  },
});

//  @@@@@@@@@@@@@@@@@@ kunkalabs.com/mixitup/ @@@@@@@@@@@@@@@@@@

let mixerProducts = mixitup('.products__container', {
  selectors: {
    target: '.products__card',
  },
  animation: {
    duration: 0,
  },
});

/* Default filter products */
mixerProducts.filter('.hiking');

/* Link active products */
const productsFilter = document.querySelectorAll('.products__filter');

productsFilter.forEach((p) => {
  p.addEventListener('click', activeProduct);
});

function activeProduct() {
  productsFilter.forEach((p) => {
    p.classList.remove('active-product');
    this.classList.add('active-product');
  });
}

//  @@@@@@@@@@@@@@@@@@ scrollrevealjs.org @@@@@@@@@@@@@@@@@@

const sr = ScrollReveal({
  origin: 'top',
  distance: '50px',
  duration: 2500,
  delay: 300,
});

sr.reveal(`.home__data, .new__swiper`);
sr.reveal(`.home__btn, .products__card`, {
  interval: 150,
});
sr.reveal(`.brands__img,.footer__content`, {
  interval: 120,
});

sr.reveal(`.collection__img , .newsletter__data`, { origin: 'left' });
sr.reveal(`.collection__data`, { origin: 'right' });
