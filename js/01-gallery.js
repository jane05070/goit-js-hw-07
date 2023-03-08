import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const divEl = document.querySelector('.gallery');

function createGallaryMarkup(items) {
    return items.map((item) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
                <img
                    class="gallery__image"
                    src="${item.preview}"
                    data-source="${item.original}"
                    alt="${item.description}"
                />
            </a>
        </div>`

    ).join("");
}

const addGallaryMurkup = createGallaryMarkup(galleryItems);

divEl.innerHTML = addGallaryMurkup;

divEl.addEventListener("click", handleImageClick);

function handleImageClick(event) {
    blockStandartAction(event);

    if (event.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img src = "${event.target.dataset.source}" width = "800" height = "600">`);
    instance.show();
    
}

const escapePushHandler = (event) => {
    if (event.code === "Escape") {
        instance.close();
        document.removeEventListener('keydovn', escapePushHandler);
        
        
    }
}

function blockStandartAction(event) {
    event.preventDefault();
}