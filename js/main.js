const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const imageContainer = document.getElementById('image-container');
const div = document.createElement("div");
div.classList.add("position-relative");
imageContainer.append(div);
const buttonNext = document.createElement("button");
div.append(buttonNext);
buttonNext.classList.add("btn");
buttonNext.classList.add("btn-outline-secondary");
buttonNext.classList.add("btn-position-next");
buttonNext.classList.add("slider-btn");
buttonNext.classList.add("slider-btn-next");

const slider = document.createElement("div");
div.append(slider);
slider.classList.add("slider");
slider.classList.add("slider-container");
slider.classList.add("text-center");
slider.classList.add("d-flex");


images.forEach(function (element) {

    const img = document.createElement("img");
    img.setAttribute("src", element.image);
    slider.append(img);
    console.log(element.image);
    return element;
});


const buttonPrev = document.createElement("button");
div.append(buttonPrev);
buttonPrev.classList.add("btn");
buttonPrev.classList.add("btn-outline-secondary");
buttonPrev.classList.add("btn-position-prev");
buttonPrev.classList.add("slider-btn");
buttonPrev.classList.add("slider-btn-prev");


const btnNext = document.querySelector(".slider-btn-next");
const btnPrev = document.querySelector(".slider-btn-prev");
let currentImgIndex = 0;
