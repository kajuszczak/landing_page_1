import './base'
import './landingpage'

//go-up button

const goUpBtn = document.querySelector(".info__go_up__icon");

goUpBtn.addEventListener("click", function() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

