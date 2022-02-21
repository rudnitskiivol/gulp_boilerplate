import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";
import { settings } from "./gulp/config/settings.js";

// Values in a glodal variable
global.app = {
    isDev: process.argv.includes('--dev'),
    isBuild: !process.argv.includes('--dev'),
    path: path,
    gulp: gulp,
    plugins: plugins,
    settings: settings
}

import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { scss } from "./gulp/tasks/scss.js";
import { javascript } from "./gulp/tasks/javascript.js";
import { images } from "./gulp/tasks/images.js";
import { createIcons, copyIcons } from "./gulp/tasks/icons.js";
import { server } from "./gulp/tasks/server.js";
import { fontsStyle, otfToTtf, ttfToWoff, copyFonts } from "./gulp/tasks/fonts.js";
import { zip } from "./gulp/tasks/zip.js"

let fonts = copyFonts;
if (app.settings.fonts.formatFonts) fonts = app.settings.fonts.createFontsStyle ? gulp.series(otfToTtf, ttfToWoff, fontsStyle) : gulp.series(otfToTtf, ttfToWoff)

const icons = gulp.series(createIcons, copyIcons);

function watcher() {
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.javascript, javascript);
    gulp.watch(path.watch.images, images);
    if (app.settings.fonts.createSVGIconfont) gulp.watch(path.watch.icons, icons);
}

let mainTasks = gulp.series(fonts, icons, gulp.parallel(html, scss, javascript, images));
if (app.settings.fonts.createSVGIconfont) mainTasks = gulp.series(fonts, gulp.parallel(html, scss, javascript, images));

const serve = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const watch = gulp.series(reset, mainTasks, watcher);
const build = gulp.series(reset, mainTasks);
const createZip = gulp.series(reset, mainTasks, zip);

export { serve }
export { watch }
export { build }
export { createZip }

gulp.task('default', serve); //Default scenary