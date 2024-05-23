import * as imagesLoaded from 'imagesloaded';

const preloadImages = (selector = 'img') => {
    return new Promise((resolve) => {
        // The imagesLoaded library is used to ensure all images (including backgrounds) are fully loaded.
        imagesLoaded(document.querySelectorAll(selector), {background: true}, resolve);
    });
};

// Exporting utility functions for use in other modules.
export {
    preloadImages
};
