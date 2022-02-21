export const settings = {
    images: {
        compressImages: false, // Use Imagemin plugin for images on build
        createWebp: false, // Create WebP Images
    },
    html: {
        pathAutocompleteVSCode: false, // Complience with Path Autocomplete VSCode plugin (replace @img syntax)
        useHtmlIncludes: true // Use HTML templates @@include
    },
    fonts: {
        formatFonts: true, // Format fonts to woff2
        createFontsStyle: true, // Atomatically create _fonts.scss by fonts folder
        rewiriteFontsStyle: false, // If createFontsStyle active, rewirite existing _fonts.scss file
        createSVGIconfont: false, // Create icon font from icons folder
    }
}