// nested menu
const nestedMenu = document.querySelector(".heading__navigation");
const menuTriggerEl = document.querySelector(".heading__trigger-el");
const headingTitle = document.querySelector(".heading__title");
  
menuTriggerEl.addEventListener("mouseover", function() {
    nestedMenu.style.display = "flex";
    // headingTitle.style.display = "none";
});
  
nestedMenu.addEventListener("mouseout", function() {
    this.style.display = "none";
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
