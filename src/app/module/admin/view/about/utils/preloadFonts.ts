import WebFont from 'webfontloader';


const preloadFonts = (id: string): Promise<void> => {
    return new Promise((resolve) => {
        WebFont.load({
            typekit: {
                id: id
            },
            active: resolve
        });
    });
};

export { preloadFonts };
