// JavaScript Document
let largeImage = document.querySelector("#largeImage");
let caption = document.querySelector("#caption");
let thumbnails = document.querySelector("#thumbnails").children;

function hoverImage(galleryImage) {
    caption.innerHTML = galleryImage.alt;
}