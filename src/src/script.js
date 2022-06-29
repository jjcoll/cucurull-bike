// const heroImgEl = document.querySelector(".hero-img");

// let heroImgCounter = 1;
// const changeHero = () => {
//   if (heroImgCounter === 3) {
//     heroImgCounter = 0;
//   }
//   heroImgCounter++;
//   let prev = heroImgCounter - 1;
//   if (heroImgCounter === 1) {
//     prev = 3;
//   }
//   heroImgEl.classList.remove(`hero-img--${prev}`);
//   heroImgEl.classList.add(`hero-img--${heroImgCounter}`);
// };

// // setInterval(changeHero, 3000);

// let imagenes = document.getElementsByClassName("hero-img");
// let imagenes2 = document.querySelectorAll(".hero-img");
// console.log(imagenes2);
// console.log(imagenes);

// imagenes.forEach((element) => {
//   element.classList.remove("hero-img");
//   element.classList.add("hero-img--active");
// });

////////////////////////////////////////
// Mobile nav
const burger = document.querySelector(".icon__menu")
const nav = document.querySelector(".nav")
const openBtn = document.querySelector(".icon__menu-open")
const closeBtn = document.querySelector(".icon__menu-close")
const navLinks = document.querySelector(".nav__links")
burger.addEventListener('click', () => {
  console.log(burger.children)
  nav.classList.toggle("__show")
  navLinks.classList.toggle("nav__links-active")
  openBtn.classList.toggle("__display-none")
  closeBtn.classList.toggle("__display-none")
});

const navLinksList = document.querySelectorAll(".nav__link")
navLinksList.forEach(el => {
  el.addEventListener('click', () => {

    nav.classList.toggle("__show")
    navLinks.classList.toggle("nav__links-active")
    openBtn.classList.toggle("__display-none")
    closeBtn.classList.toggle("__display-none")
  })
})






// all animations

const options = {
  root: null,
  rootMargin: "0px",
  // show when 50% of content visible
  threshold: 0.5,
};

// observer Description
const observerDesc = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".desc__i__box").classList.add("fadeInLeft");
      document.querySelector(".desc__t__box").classList.add("fadeInRight");
    }
  });
}, options);
observerDesc.observe(document.querySelector(".desc__container"));

////////////////////////////////////////////////////////
// observer Gallery
const observerGall_1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".gall__h").classList.add("fadeInRight");
      document.querySelector(".gall__t__box--1").classList.add("fadeInLeft");
      document.querySelector(".g--1").classList.add("fadeInRight");
      document.querySelector(".g--2").classList.add("fadeInRight");
    }
  });
}, options);
observerGall_1.observe(document.querySelector(".g--2"));

const observerGall_2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".gall__t__box--2").classList.add("fadeInRight");
      document.querySelector(".g--3").classList.add("fadeInLeft");
      document.querySelector(".g--4").classList.add("fadeInLeft");
    }
  });
}, options);
observerGall_2.observe(document.querySelector(".g--4"));

const observerGall_3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".gall__t__box--3").classList.add("fadeInLeft");
      document.querySelector(".g--5").classList.add("fadeInRight");
      document.querySelector(".g--6").classList.add("fadeInRight");
    }
  });
}, options);
observerGall_3.observe(document.querySelector(".g--6"));

////////////////////////////////////////////////////////
// Animation testimonials

// test 1
const observerTest1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".test__h").classList.add("fadeInRight");
      document.querySelector(".test__card-1").classList.add("fadeInLeft");
    }
  });
}, options);
observerTest1.observe(document.querySelector(".test__card-1"));

// test 2
const observerTest2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".test__card-2").classList.add("fadeInRight");
    }
  });
}, options);
observerTest2.observe(document.querySelector(".test__card-2"));

////////////////////////////////////////////////////////
// Animation CTA

const observerCTA = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".cta-text").classList.add("fadeInTop");
      document.querySelector(".cta-button").classList.add("fadeInBottom");
    }
  });
}, options);
observerCTA.observe(document.querySelector(".cta"));

// Remove observer when smooth scrolling
// const navLinks = document.querySelectorAll(".nav__link");
// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     document.querySelector(".desc__i__box").classList.add("show");
//     document.querySelector(".desc__t__box").classList.add("show");

//     document.querySelector(".gall__h").classList.add("show");
//     document.querySelector(".gall__t__box--1").classList.add("show");
//     document.querySelector(".g--1").classList.add("show");
//     document.querySelector(".g--2").classList.add("show");
//     document.querySelector(".gall__t__box--2").classList.add("show");
//     document.querySelector(".g--3").classList.add("show");
//     document.querySelector(".g--4").classList.add("show");
//     document.querySelector(".gall__t__box--3").classList.add("show");
//     document.querySelector(".g--5").classList.add("show");
//     document.querySelector(".g--6").classList.add("show");

//     document.querySelector(".test__h").classList.add("show");
//     document.querySelector(".test__card-1").classList.add("show");

//     document.querySelector(".test__card-2").classList.add("show");

//     document.querySelector(".cta-text").classList.add("show");
//     document.querySelector(".cta-button").classList.add("show");

//     console.log("navigating");
//     observerDesc.disconnect();
//     observerGall_1.disconnect();
//     observerGall_2.disconnect();
//     observerGall_3.disconnect();
//     observerTest1.disconnect();
//     observerTest2.disconnect();
//     observerCTA.disconnect();
//   });
// });

// Show form
const ctaBtnEl = document.querySelector(".cta-button");
ctaBtnEl.addEventListener("click", () => {
  document.querySelector(".form").classList.add("form__active");
  document.querySelector(".footer").classList.add("blur");
  document.querySelector(".header").classList.add("blur");
  document.querySelector(".main").classList.add("blur");
});

const closeFormEl = document.querySelector(".form__icon--close");
closeFormEl.addEventListener("click", () => {
  document.querySelector(".form").classList.remove("form__active");
  document.querySelector(".footer").classList.remove("blur");
  document.querySelector(".header").classList.remove("blur");
  document.querySelector(".main").classList.remove("blur");
});





window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Smooth scroll

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // document.body.style.position = "static";

    // Scroll back to the top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      // getting the element with id equal to href
      const section = document.querySelector(href);
      // scroll element into view
      section.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       document.querySelector(".desc__i__box").classList.add("fadeInLeft");
//       document.querySelector(".desc__t__box").classList.add("fadeInRight");
//     }
//   });
// });

// observer.observe(document.querySelector(".desc__container"));
