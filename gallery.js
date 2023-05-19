console.log(window.location.pathname)
    
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    fileName=slides[slideIndex - 1].querySelector('.img-view').src.split("/").pop().split(".")[0]
    document.querySelector('.file-name h4')
    let activeWindow=parent.document.getElementById('pastModal');
    let windowHeader=activeWindow.querySelector('.file-name');
    windowHeader.querySelector('h4').innerHTML=fileName
} 

windowHeader.querySelector('h4').innerHTML=filename
