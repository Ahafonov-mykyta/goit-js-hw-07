import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");


function createGalleryList (items) {

 return items.map( item  => 
     `<div class="gallery__item">
     <a class="gallery__link" href="large-image.jpg">
       <img
         class="gallery__image"
         src=${item.preview}
         data-source=${item.original}
         alt=${item.description}
       />
     </a>
   </div>`
    ).join("")

}

container.insertAdjacentHTML("afterbegin", createGalleryList(galleryItems) )
container.addEventListener("click", selectImage)


function selectImage (event) {
  event.preventDefault()
  if (event.target.nodeName !== "IMG" ){
    return;
  }

  const keyClose = ( event => { 
    if (event.code === 'Escape') {
      instance.close()
  }})


  const atr = event.target.getAttribute("data-source")
  const instance = basicLightbox.create(`
		<img  src=${atr}>
  	`, {
      onShow: (instance) => { document.addEventListener("keydown", keyClose)},
      onClose: (instance) => {document.removeEventListener("keydown", keyClose)}
    })

    instance.show();
  }



