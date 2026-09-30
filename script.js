function filterSelection(category){

let items = document.getElementsByClassName("item");

if(category == "all") category = "";

for(let i=0;i<items.length;i++){

items[i].style.display = "none";

if(items[i].className.indexOf(category) > -1){

items[i].style.display = "block";

}

}

}

const galleries = document.querySelectorAll(".gallery");

galleries.forEach(gallery => {

    const track = gallery.querySelector(".gallery-track");
    const slides = track.children;

    const prevButton = gallery.querySelector(".gallery-btn.prev");
    const nextButton = gallery.querySelector(".gallery-btn.next");

    let currentSlide = 0;

    function updateGallery() {

        const slideWidth = gallery.clientWidth;

        track.style.transform =
            `translateX(-${currentSlide * slideWidth}px)`;
    }

    nextButton.addEventListener("click", () => {

        if (currentSlide < slides.length - 1) {
            currentSlide++;
            updateGallery();
        }

    });

    prevButton.addEventListener("click", () => {

        if (currentSlide > 0) {
            currentSlide--;
            updateGallery();
        }

    });

    window.addEventListener("resize", updateGallery);

});