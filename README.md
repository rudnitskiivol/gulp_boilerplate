# Gulp 2022 Boilerplate

**Features**

- Compiling, transforming and minifying scss
- Webpack for JavaScript (ES6 modules)
- Compressing and converting images to webp
- Creating icon font from SVG images
- HTML templating, support Path Autocomplete plugin for VSCode
- Converting to woff2 and automatic creation of style for fonts
- Dev, build, watch and live server modes
- Build and archive command

**Gulp 2022 Boilerplate makes it easy to turn features on and off**, there are settings file where you can set necessary tools.

## Getting Started

### Dependencies

*__Note:__ if you've previously installed Gulp globally, run `npm rm --global gulp` to remove it. [Details here.](https://medium.com/gulpjs/gulp-sips-command-line-interface-e53411d4467)*

Make sure these are installed first.

- [Node.js](http://nodejs.org)
- [Gulp Command Line Utility](http://gulpjs.com) `npm install --global gulp-cli`

### Quick Start

1. In bash/terminal/command line, `cd` into your project directory.
2. Run `npm install` to install required files and dependencies.
3. When it's done installing, run one of the task runners to get going:
	- `npm run build` build production ready files.
	- `npm run dev` build dev files.
	- `npm run watch` run watch mode without any live server tools.
	- `npm run serve` automatically compiles files and applies changes using [BrowserSync](https://browsersync.io/) when you make changes to your source files.
	- `npm run zip` make production ready build and zip it in the root folder.

`gulp` folder contains tasks and configurations;

`gulp/config/path.js` - contains path to src and dist folders
`gulp/config/plugins.js` - list of common plugins
`gulp/config/settings.js` - some usefull settings

## Documentation

Add your source files to the appropriate `src` subdirectories. Gulp will process and and compile them into `dist`.

- JavaScript files in the `src/js` directory will be compiled to `dist/js`. ES6 support is enabled so modules can be connected
- Files in the `src/sass` directory will be compiled to `dist/css` with `.min` prefix.
- SVG files placed in the `src/icons` will be turned into a font. The `_icons.scss` font style file will be created in the `src/scss` folder.
- Images from `src/img` will be minified, webp copies will be created, and moved to the dist folder.
- Font files placed in the `src/fonts` will be converted into woff2 format. The `_fonts.scss` font style file will be created in the `src/scss` folder.
- Enabled support for HTML blocks from different files
- Enabled replacing `@img` tag for VSCode `Path Autocomplete` plugin with `dist/img` path

### JavaScript

Put your JavaScript files in the `src/js` directory.

Files placed directly in the `js` folder will compile directly to `dist/js` as both minified files with `min` postfix. ES6 is supported

### Sass

Put your [Sass](https://sass-lang.com/) files in the `src/sass` directory.

Gulp generates minifies CSS files. It also includes `gulp-clean-css`, `gulp-autoprefixer`, `gulp-group-css-media-queries` modules;

### SVG Icons

Place SVG files in the `src/icons` directory.

SVG files will be converted into font and font will be copied into `dist/fonts/icons` folder. Also `_icons.scss` file will be created into `src/scss` folder. 

### Fonts

Place fonts into `src/fonts` folder.

Fonts will be converted into woff format in `dist/fonts` folder. Also `_fonts.scss` file will be created into `src/scss` folder. 

### HTML Templates 

Support for connecting third-party HTML files is enabled by default. An example is located in the `src/html` folder.


### Path Autocomplete VSCode

If you are not working in VS code and have no idea what this plugin is, you can disable the pathAutocompleteVSCode option in the `gulp/config/settings.js` file.

For this work correctly of this plugin (replace tag to real path), press F1 find `JSON Options` and specify this placeholder for images in the file.

```json
"path-autocomplete.pathMappings": {
   "@img": "${folder}/src/img", //alias for images
},
```
## Options & Settings

Gulp Boilerplate makes it easy to customize for projects without having to delete or modify tasks.

Options and settings are located at the `gulp/config/gulpfile.js`.

### Settings `gulp/config/settings.js`

Set features under the `settings` variable to `true` to turn them on (default), and `false` to turn them off.

```js
export const settings = {
    images: {
        compressImages: true, // Use Imagemin plugin for images on build
        createWebp: true, // Create WebP Images
    },
    html: {
        pathAutocompleteVSCode: true, // Complience with Path Autocomplete VSCode plugin (replace @img syntax)
        useHtmlIncludes: true // Use HTML templates @@include
    },
    fonts: {
        formatFonts: true, // Format fonts to woff2
        createFontsStyle: true, // Atomatically create _fonts.scss by fonts folder
        rewiriteFontsStyle: false, // If createFontsStyle active, rewirite existing _fonts.scss file
        createSVGIconfont: true, // Create icon font from icons folder
    }
}
```
 
### Paths `gulp/config/path.js`


Adjust the `build` and `dev` and watch paths for all of the Gulp tasks under the `paths` variable. Paths are relative to the root project folder.

```js
export const path = {
    build: {
        javascript: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`
    },
    src: {
        javascript: `${srcFolder}/js/*.js`,
        scss: `${srcFolder}/scss/*.scss`,
        html: `${srcFolder}/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        icons: `${srcFolder}/icons/*.svg`
    },
    watch: {
        javascript: `${srcFolder}/scss/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
        icons: `${srcFolder}/icons/*.svg`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder
}
```
