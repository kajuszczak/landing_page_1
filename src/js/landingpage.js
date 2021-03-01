//go-up button

const goUpBtn = document.querySelector(".info__up-icon");

goUpBtn.addEventListener("click", function() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

// // contact form
// const inputEmail = document.querySelector(".contact__email");
// const inputMsg = document.querySelector(".contact__msg");
// const formEmailInfo = document.querySelector(".contact__email-info");
// const formMsgInfo = document.querySelector(".contact__msg-info");
// const contactBtn = document.querySelector(".contact__btn");

// contactBtn.addEventListener("click", function(event) {
//     event.preventDefault(); 
//     formEmailInfo.style.display = "block";
    

//     if (validateEmail(input.value)) {
//         formEmailInfo.textContent = "Wysłano wiadomość";
//     } else {
//         formEmailInfo.textContent = "Pole nie może być puste, podaj adres email";
//     }
// });

    

// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(email);
//   }

//   contactBtn.addEventListener("click", function(event) {
//     event.preventDefault(); 
//     formMsgInfo.style.display = "block";

//     if (validateMsg(input.value)) {
//         formMsgInfo.textContent = "Wysłano wiadomość";
//     } else {
//         formMsgInfo.textContent = "Pole nie może być puste, wpisz wiadomość";
//     }
// });


// const $carousel = $('.carousel').flickity({
//     imagesLoaded: true,
//     percentPosition: false,
//   });
  
//   const $imgs = $carousel.find('.carousel-cell img');
//   // get transform property
//   const docStyle = document.documentElement.style;
//   const transformProp = typeof docStyle.transform == 'string' ?
//     'transform' : 'WebkitTransform';
//   // get Flickity instance
//   const flkty = $carousel.data('flickity');
  
//   $carousel.on( 'scroll.flickity', function() {
//     flkty.slides.forEach( function( slide, i ) {
//       const img = $imgs[i];
//       const x = ( slide.target + flkty.x ) * -1/3;
//       img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//     });
//   });
  
