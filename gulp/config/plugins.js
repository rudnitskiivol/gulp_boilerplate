import replace from "gulp-replace"; // Find and replace
import browsersync from "browser-sync"; // Local server
import newer from "gulp-newer"; // Checking update
import ifPlugin from "gulp-if"; // Checking update
import delPlugin from "del";
import plumber from "gulp-plumber"; // Errors handler
import notify from "gulp-notify"; // Messages (notifications)

export const plugins = {
    del: delPlugin,
    replace: replace,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin,
    plumber: plumber,
    notify: notify
}