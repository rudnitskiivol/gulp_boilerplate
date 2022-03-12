import dartSaas from 'sass';
import gulpSaas from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css'; // Compression CSS file
import autoprefixer from 'gulp-autoprefixer'; // Adding vendor prefixes
import groupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSaas(dartSaas);

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "SCSS",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(app.plugins.if(
            app.settings.html.pathAutocompleteVSCode,
            app.plugins.replace(/@img\//g, 'img/')
        ))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(app.plugins.if(
            app.isBuild,
            groupCssMediaQueries()
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            autoprefixer({
                grid: true,
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        ))
        .pipe(app.plugins.if(
            app.isBuild,
            cleanCss()
        ))
        .pipe(rename({
            extname: ".min.css"
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browsersync.stream());
}