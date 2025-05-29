// JS import
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Initialize SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  scrollZoom: false,
  close: true,
  closeText: 'Close',
  closeMarkup:
    '<button class="sl-close" aria-label="Close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.41 6.58L17.83 5l-5.42 5.42L7.99 5l-1.58 1.58L11.42 12l-5.01 5.01L7.99 19l5.42-5.42L18.83 19l1.58-1.58L13.58 12z"/></svg></button>',
});
