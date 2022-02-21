import webp from "gulp-webp";
import imagemin from "gulp-imagemin";

export const images = () => {
    return app.gulp.src(app.path.src.images)
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(app.plugins.if(
            app.settings.images.createWebp,
            webp()
        ))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src([app.path.src.images, app.path.src.svg]))
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(app.plugins.if(
            app.settings.images.compressImages && app.isBuild,
            imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3 // 0 to 7
            })
        ))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browsersync.stream());
}