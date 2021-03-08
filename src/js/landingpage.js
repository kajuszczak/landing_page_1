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

const menuOnScroll = debounce(function() {
    nestedMenu.classList.remove("heading__navigation--open");
}, 30);
  
window.addEventListener('scroll', menuOnScroll);

menuTriggerEl.addEventListener("click", function() {
    nestedMenu.classList.toggle("heading__navigation--open");
    
});
  


// gallery - text slider

const galleryBtn1 = document.querySelector(".gallery__btn1");
const galleryBtn2 = document.querySelector(".gallery__btn2");
const galleryBtn3 = document.querySelector(".gallery__btn3");
const galleryText = document.querySelector(".gallery__element");
const galleryTextVisible = document.querySelector(".gallery__element--visible");

// gallery - photo slider

// contact form

//go-up button

const goUpBtn = document.querySelector(".info__up-icon");

goUpBtn.addEventListener("click", function() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
