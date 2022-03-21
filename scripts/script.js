//----------------------------  SLIDER ----------------------------//

const slideContent = [
  {
    title: "Zaufaj profesionalistom ! ",
    content:
      "Od ponad 15 lat świadczymy usługi w branży gastronomicznej na terenie województwa małopolskiego i śląskiego Dzięki bogatemu doświadczeniu zgromadzonemu  na przestrzeni lat świadczymy usługi na najwyższym poziomie, które zadowolą nawet najbardziej wymagających klientów. Z naszą pomocą zorganizujesz zarówno małe, kameralne przyjęcia domowe jak i duże uroczystości. ",
    price: "",
  },
  {
    title: "Zorganizuj 18 urodziny razem z nami !",
    content:
      "Osiemnaste urodziny to ważny moment w życiu każdego człowieka. Dzięki naszym potrawą, napoją i wypieką ten dzień może stać się niesamowity. W naszej ofercie znajdują się dwa ciepłe posiłki, przekąski - zimna płyta, napoje i ciasta.",
    price: "Już od 150 PLN od osoby",
  },
  {
    title: "Najlepszy wybór na przyjęcie weselne !",
    content:
      "Naszą specjalnością jest organizacja przyjęć weselnych. Zrobimy wszystko aby ten szególny dzień stał się najlepszy dniem waszego życia. Wspaniałe potrawy wprawią w zachwyt wszystkich gości, a dekoracje i wystrój stworzą magiczną atmosferę.",
    price: "Już od 250 PLN od osoby ",
  },
  {
    title: "Sylwester 2022/2023",
    content:
      "Nie masz pomysłu na Sylwestra ? Nic prostszego spędź go razem z nami ! Organizujemy sylwestra w naszym lokalu w Oświęcimiu. Cena obejmuje 3 ciepłe posiłki, zimną płytę, pół litra wódki na osobę, ciasta, owoce oraz pokaz fajerwerków. Oprawę muzyczną zapewni zespół Sunday. ",
    price: "Już od 200 PLN od osoby ",
  },
];

const slides = document.getElementsByClassName("home__background");

const btnLeft = document.querySelector(".carousel__button--previous");
const btnRight = document.querySelector(".carousel__button--next");
const dots = document.getElementsByClassName("carousel__dot");
const dotsContainer = document.querySelector(".carousel__dots");

const heroTitle = document.querySelector(".home__header");
const heroContent = document.querySelector(".home__paragraph");
const heroPrice = document.querySelector(".home__price");

let currentSlide = 0;
const totalSlides = slides.length;

const fillDot = (slide) => {
  for (const dot of dots) {
    dot.classList.remove("carousel__dot--fill");
  }
  dots[slide].classList.add("carousel__dot--fill");
};

const goToSlide = (slide) => {
  for (const slide of slides) {
    slide.classList.remove("home__background--active");
  }

  slides[slide].classList.add("home__background--active");
};

const setContent = (slide) => {
  heroTitle.textContent = slideContent[slide].title;
  heroContent.textContent = slideContent[slide].content;
  heroPrice.textContent = slideContent[slide].price;
};

const nextSlide = () => {
  if (currentSlide === totalSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  fillDot(currentSlide);
  goToSlide(currentSlide);
  setContent(currentSlide);
};

const previousSlide = () => {
  if (currentSlide === 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide--;
  }

  fillDot(currentSlide);
  goToSlide(currentSlide);
  setContent(currentSlide);
};

const initSlide = () => {
  fillDot(0);
  goToSlide(0);
  setContent(0);
};

document.getElement;

btnLeft.addEventListener("click", previousSlide);
btnRight.addEventListener("click", nextSlide);

dotsContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("carousel__dot")) {
    const slide = event.target.dataset.slide;
    fillDot(slide);
    goToSlide(slide);
    setContent(slide);
  }
});

initSlide();

//----------------------------  MAP ----------------------------//

const officeCords = [50.0120409, 19.2149347];

const myIcon = L.icon({
  iconUrl: "img/svg/location2.svg",
  iconSize: [44, 44],
  iconAnchor: [26, 84],
  popupAnchor: [-3, -76],
});

const map = L.map("map").setView(officeCords, 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker(officeCords, { icon: myIcon })
  .addTo(map)
  .bindPopup(
    L.popup({
      maxWidth: 300,
      minWidth: 150,
      className: "popup",
    }).setContent("Superb Catering <br> Oświęcim 32-600 <br> ul.Nigdzie 121")
  )
  .openPopup();

//----------------------------  MOBILE NAVIGATION ----------------------------//

const navButton = document.querySelector(".mobile-navigation__button");
const headerContainer = document.querySelector(".header");
const navigationList = document.querySelector(".navigation");

let navIsOpen = false;

navButton.addEventListener("click", function (event) {
  navIsOpen = !navIsOpen;
  if (navIsOpen) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "scroll";
  }
  headerContainer.classList.toggle("header--open");
});

navigationList.addEventListener("click", function (event) {
  if (event.target.classList.contains("navigation__link")) {
    headerContainer.classList.remove("header--open");
    document.querySelector("body").style.overflow = "scroll";
    navIsOpen = false;
  }
});

//-------------------------  STICKY NAVIGATION -------------------------//

const featuresSection = document.querySelector(".home");
const headerHeight = headerContainer.getBoundingClientRect().height;
const optionsNav = {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
};

const stickyNavigation = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    headerContainer.classList.add("sticky");
  } else {
    headerContainer.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNavigation, optionsNav);

headerObserver.observe(featuresSection);

//----------------------------  Footer - year  ----------------------------//

const yearElement = document.querySelector(".year");

const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

//------------------ Offer item for mobile devices  -----------------------//

const offerItems = document.getElementsByClassName(
  "offer-item__button-visible"
);

console.log(offerItems);

Array.from(offerItems).forEach((element) => {
  element.addEventListener("click", function (event) {
    event.target.parentNode.classList.add("card__side--front-active");
    event.target.parentNode.nextElementSibling.classList.add(
      "card__side--back-active"
    );
    console.log("clicked");
  });
});
