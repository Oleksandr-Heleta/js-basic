function checkDistance() {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        goTopBtn.style.display = 'block';
    } else {
        goTopBtn.style.display = 'none';
    }
}

function scrollToTop() {
    //document.documentElement.scrollTop = 0;
    window.scrollTo({top: 0, behavior: 'smooth'});
}

window.onscroll = checkDistance;
var goTopBtn = document.getElementById("goTopBtn");
// console.log(goTopBtn);
goTopBtn.onclick = scrollToTop;