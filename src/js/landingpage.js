//go-up button

const goUpBtn = document.querySelector(".info--up-icon");

goUpBtn.addEventListener("click", function() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
