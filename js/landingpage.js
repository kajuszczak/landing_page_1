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


  // cursor
  const cursor = document.querySelector(".cursor");
  const pointer = document.querySelector(".cursor__pointer");

  const hoverPointer = document.querySelectorAll(".hover");

  window.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
    cursor.setAttribute("data-fromTop", cursor.offsetTop - scrollY);

    pointer.style.left = e.pageX + "px";
    pointer.style.top = e.pageY + "px";
    pointer.setAttribute("data-fromTop", cursor.offsetTop - scrollY);
  });

  window.addEventListener("scroll", () => {
    const fromTop = cursor.getAttribute("data-fromTop");
    cursor.style.top = scrollY + parseInt(fromTop) + "px";
    
    // const fromTop = cursor.getAttribute("data-fromTop");
    pointer.style.top = scrollY + parseInt(fromTop) + "px";
  });

  window.addEventListener("click", () => {
    if (cursor.classList.contains("click")) {
      cursor.classList.remove("click");
      void cursor.offsetWidth;
      cursor.classList.add("click");
    } else {
      cursor.classList.add("click");
    }
  });

  hoverPointer.forEach(link => {
    link.addEventListener("mouseover", () => {
      pointer.classList.add("cursor__pointer--active-hover");
    });
    link.addEventListener("mouseleave", () => {
      pointer.classList.remove("cursor__pointer--active-hover");
    });
  });

  // nested menu

  const nestedMenu = document.querySelector(".heading__navigation");
  const menuTriggerEl = document.querySelector(".heading__trigger-el");

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
    autoplaySpeed: 10000,
    fade: true,
    fadeSpeed: 10000,
    cssEase: "ease-in-out",
    
  });

  // contact form

  // const inputEmail = document.querySelector(".contact__email");
  // const inputMsg = document.querySelector(".contact__msg");
  // const sendBtn = document.querySelector(".contact__btn");

  // const emailInfo = document.querySelector(".contact__email-info");
  // const msgInfo = document.querySelector(".contact__msg-info");

  // const sentInfo = document.querySelector(".contact__sent-info");
  // const infoIcon = document.querySelector(".contact__sent-info__icon");

  

  // function emailValid(e) {
  //   if (validateEmail(inputEmail.value)) {
  //     emailInfo.textContent = "";
  //   } else {
  //     emailInfo.textContent = "pole nie może być puste";
  //   }
  //   e.preventDefault();
  // }

  // function msgValid(e) {
  //   if (inputMsg.value === "") {
  //     msgInfo.textContent = "pole nie może być puste";
  //   }
  //   e.preventDefault();
  // }

  // function validateEmail(email) {
  //   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(email);
  // }

  
  //contact form info icon-exit


  // sendBtn.addEventListener("click", displayInfo);

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
