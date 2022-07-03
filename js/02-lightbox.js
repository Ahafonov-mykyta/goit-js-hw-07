import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const container = document.querySelector(".gallery");


function createGalleryList (items) {
 return items.map( item  => 
     `<a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`
    ).join("")
}

container.insertAdjacentHTML("afterbegin", createGalleryList(galleryItems) )
let lightbox = new SimpleLightbox(".gallery a", {
    enableKeyboard:	true,
    captionsData: 'alt',
    captionDelay: 250,
  });



