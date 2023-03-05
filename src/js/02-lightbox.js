import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const divEl = document.querySelector('.gallery');

function createGallaryMarkup(items) {
    return items.map((item) =>
        `<div class="gallery__item">
            <a class="gallery__item"
            href="${item.original}"">
  <img class="gallery__image"
  src="${item.preview}" alt="${item.description}" />
</a>
        </div>`

    ).join("");
}

const addGallaryMurkup = createGallaryMarkup(galleryItems);

divEl.innerHTML = addGallaryMurkup;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});