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

  window.addEventListener("mousemove", (event) => {
    setCursorStyle(cursor, event);
    setCursorStyle(pointer, event);
  });

  function setCursorStyle(mousePointer, event) {
    mousePointer.style.left = event.pageX + "px";
    mousePointer.style.top = event.pageY + "px";
    mousePointer.setAttribute("data-fromTop", mousePointer.offsetTop - scrollY);
  }

  window.addEventListener("scroll", () => {
    const fromTop = cursor.getAttribute("data-fromTop");
    cursor.style.top = scrollY + parseInt(fromTop) + "px";
    
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
