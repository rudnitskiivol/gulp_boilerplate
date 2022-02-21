import webpack from "webpack-stream";

export const javascript = () => {
    return app.gulp.src(app.path.src.javascript, { sourcemaps: app.isDev })
        .pipe(webpack({
            mode: app.isBuild ? 'production' : 'development',
            output: {
                filename: 'app.min.js'
            }
        }))
        .pipe(app.gulp.dest(app.path.build.javascript))
        .pipe(app.plugins.browsersync.stream());
}