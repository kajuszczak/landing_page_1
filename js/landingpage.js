$(document).ready(function () {
  const debounce = (func, wait) => {
    let timeout;

    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // nested menu

  const nestedMenu = document.querySelector(".heading__navigation");
  const menuTriggerEl = document.querySelector(".heading__trigger-el");
  const headingTitle = document.querySelector(".heading__title");

  const menuOnScroll = debounce(function () {
    nestedMenu.classList.remove("heading__navigation--open");
  }, 30);

  window.addEventListener("scroll", menuOnScroll);

  menuTriggerEl.addEventListener("click", function () {
    nestedMenu.classList.toggle("heading__navigation--open");
  });

  // gallery - text slider

  $(".gallery__photo").slick({
    slideToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    fadeSpeed: 1000,
    cssEase: "linear",
  });

  // contact form

  const inputEmail = document.querySelector(".contact__email");
  const inputMsg = document.querySelector(".contact__msg");
  const sendBtn = document.querySelector(".contact__btn");

  const emailInfo = document.querySelector(".contact__email-info");
  const msgInfo = document.querySelector(".contact__msg-info");

  const sentInfo = document.querySelector(".contact__sent-info");

  function emailValid(e) {
    if (validateEmail(inputEmail.value)) {
      emailInfo.textContent = "";
    } else {
      emailInfo.textContent = "pole nie może być puste";
    }
    e.preventDefault();
  }

  function msgValid(e) {
    if (inputMsg.value === "") {
      msgInfo.textContent = "pole nie może być puste";
    }
    e.preventDefault();
  }

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  sendBtn.addEventListener("click", emailValid);
  sendBtn.addEventListener("click", msgValid);

  //contact form info icon-exit

  const exitIcon = document.querySelector(".contact__sent-info__icon");

  function exitInfo() {
    sentInfo.classList.add("contact__sent-info--disabled");
  }

  exitIcon.addEventListener("click", exitInfo);

  //go-up button

  const goUpBtn = document.querySelector(".info__up-icon");

  goUpBtn.addEventListener("click", function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
});
