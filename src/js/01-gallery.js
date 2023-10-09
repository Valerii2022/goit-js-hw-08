import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector('.gallery');

const imageMarkup = galleryItems
  .map(({ original, preview, description }) => {
    return `
   <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
   `;
  })
  .join('');

galleryRef.insertAdjacentHTML('beforeend', imageMarkup);

let modalLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
