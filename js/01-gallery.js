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

// document.addEventListener("keydown", (event) => { if (
//   event.code === 'Escape') {console.log (event.code)}})

container.insertAdjacentHTML("afterbegin", createGalleryList(galleryItems) )
const link= document.querySelectorAll(".gallery__link");

link.forEach(link => addEventListener("click", (event) => {
event.preventDefault();}))
  
const keyClose = ( event => { 
  if (event.code === 'Escape') {
    console.log (event.code);
    instance.close();
}})

container.addEventListener("click", selectImage)


function selectImage (event) {
  
  if (event.target.nodeName !== "IMG" ){
    return;
  }

  const atr = event.target.getAttribute("data-source")
  const instance = basicLightbox.create(`
		<img  src=${atr}>
  	`)

    instance.show()

    const keyClose = ( event => { 
      if (event.code === 'Escape') {
        instance.close()
        document.removeEventListener("keydown", keyClose);;
    }})
    document.addEventListener("keydown", keyClose);
}


