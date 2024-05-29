// JavaScript Document
let largeImage = document.querySelector("#largeImage");
let caption = document.querySelector("#caption");
let thumbnails = document.querySelector("#thumbnails").children;

function hoverImage(galleryImage) {
    caption.innerHTML = galleryImage.alt;
}

function selectImage(galleryImage) {
    largeImage.src = galleryImage.src;
    for (i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove("thumbUp");
    }
    galleryImage.classList.add("thumbUp");
}