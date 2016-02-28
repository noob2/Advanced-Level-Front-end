var slideWidth = 1000;
var slideAnimationTime = 1000;
var autoAnimationTime = 5000;
var numberOfSlides = 5;
var totalWidth = numberOfSlides * slideWidth;
var slides = $('#slider .slides');

function animation() {
    moveSlides(-slideWidth);
}
var autoAnimation = setInterval(animation, autoAnimationTime);

function moveSlides(value) {
    clearInterval(autoAnimation);
    autoAnimation = setInterval(animation, autoAnimationTime);

    var marginLeft = slides.css("margin-left").replace("px", "");

    if (marginLeft + value > 0) {
        slides.animate({'margin-left': -totalWidth + slideWidth + 'px'}, slideAnimationTime);
    } else if (marginLeft <= -totalWidth - value) {
        slides.animate({'margin-left': '0px'}, slideAnimationTime);
    } else {
        slides.animate({'margin-left': '+=' + value + 'px'}, slideAnimationTime);
    }
}

var nextButton = $('#next')[0];
nextButton.addEventListener('click', function () {
    moveSlides(-slideWidth);
});

var previousButton = $('#previous')[0];
previousButton.addEventListener('click', function () {
    moveSlides(slideWidth);
});
