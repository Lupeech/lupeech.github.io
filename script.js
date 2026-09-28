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
    const prevButton = gallery.querySelector(".gallery-btn.prev");
    const nextButton = gallery.querySelector(".gallery-btn.next");

    const slides = track.children;
    const totalSlides = slides.length;

    let currentSlide = 0;


    function updateGallery() {

        track.style.transform =
            `translateX(-${currentSlide * 100}%)`;

    }


    nextButton.addEventListener("click", () => {

        if (currentSlide < totalSlides - 1) {

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

});