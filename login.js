
document.querySelectorAll(".user").forEach((item) => {
    item.addEventListener("click", (event) => {
        if(document.querySelector('.active')){
            document.querySelector('.active').classList.remove('active')
        }
        item.classList.add('active');
    });
});