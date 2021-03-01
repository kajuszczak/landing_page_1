//go-up button

const goUpBtn = document.querySelector(".info__up-icon");

goUpBtn.addEventListener("click", function() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
