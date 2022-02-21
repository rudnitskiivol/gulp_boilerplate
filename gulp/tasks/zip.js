import zipPlugin from "gulp-zip";

export const zip = () => {
    app.plugins.del(`./${app.path.rootFolder}.zip`)
    return app.gulp.src(`${app.path.buildFolder}/**/*`)
        .pipe(app.gulp.dest(app.path.build.javascript))
        .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest('./'))
}