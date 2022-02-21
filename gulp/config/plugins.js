import replace from "gulp-replace"; // Find and replace
import browsersync from "browser-sync"; // Local server
import newer from "gulp-newer"; // Checking update
import ifPlugin from "gulp-if"; // Checking update
import del from "del";

export const plugins = {
    del: del,
    replace: replace,
    browsersync: browsersync,
    newer: newer,
    if: ifPlugin
}