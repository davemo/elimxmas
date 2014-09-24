/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {

    js: {
      vendor: [
        "vendor/js/jquery.min.js",
        "vendor/js/underscore.js",
        "vendor/js/backbone.min.js",
        "vendor/js/bootstrap.js",
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/settings.js",
        "app/js/namespace.js",
        "app/js/models.js",
        "app/js/views.js",
        "app/js/routers.js",
        "app/js/start.js",
        "app/js/**/*.js"
      ]
    },

    css: {
      vendor: [
        "vendor/css/bootstrap.css",
        "vendor/css/**/*.css",
        "vendor/css/bootstrap-responsive.css"
      ]
    }

  };
};
