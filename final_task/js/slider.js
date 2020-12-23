
var prevBtn = document.getElementById('prev');
var nextBtn = document.getElementById('next');
// console.log(prevBtn);
// console.log(nextBtn);
var index = 1;
showSlide(index);
// Why don't work????????
// prevBtn.onclick = navigateSlides(-1);
// nextBtn.onclick = navigateSlides(1);


function navigateSlides(n) {
    showSlide(index += n);	// 0 - 1 = -1;		
}
// Will make!!!!
function showCurrentSlide(n) {
    showSlide(index = n);
}


function showSlide(n) {		
    // getting collection of the elements
    var slides = document.getElementsByClassName('feedback__item');
    // console.log(slides);
    	
    if (n > slides.length) {
        index = 1;
    }
    
    if (n < 1) {
        index = slides.length;
    }
    
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[index - 1].style.display = "block";
}