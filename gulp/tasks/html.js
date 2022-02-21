import fileinclude from "gulp-file-include";
import versionNumber from "gulp-version-number";

export const html = () => {
    return app.gulp.src(app.path.src.html)
        .pipe(app.plugins.if(
            app.settings.html.useHtmlIncludes,
            fileinclude({ indent: true })
        ))
        .pipe(app.plugins.if(
            app.settings.html.pathAutocompleteVSCode,
            app.plugins.replace(/@img\//g, 'img/')
        ))
        .pipe(
            app.plugins.if(
                app.isBuild,
                versionNumber({
                    'value': '%DT%',
                    'append': {
                        'key': '_v',
                        'cover': 0,
                        'to': [
                            'css',
                            'js'
                        ]
                    },
                    'output': {
                        'file': 'gulp/version.json'
                    }
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browsersync.stream());
}