import iconfont from "gulp-iconfont";
import iconfontCss from "gulp-iconfont-css";

const fontName = 'icons';

export const createIcons = () => {
    return app.gulp.src(app.path.src.icons)
        .pipe(iconfontCss({
            fontName: fontName,
            path: `scss`,
            targetPath: `../../../src/scss/_${fontName}.scss`,
            fontPath: `../../fonts/${fontName}/`
        }))
        .pipe(iconfont({
            fontName: fontName,
            fontHeight: 1024,
            normalize: true
        }))
        .pipe(app.gulp.dest(`${app.path.srcFolder}/fonts/${fontName}/`))
}

export const copyIcons = () => {
    return app.gulp.src(`${app.path.srcFolder}/fonts/${fontName}/*`)
        .pipe(app.gulp.dest(`${app.path.build.fonts}/${fontName}/`))
}
