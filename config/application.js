/* Exports a function which returns an object that overrides the default &
 *   plugin grunt configuration object.
 *
 * You can familiarize yourself with Lineman's defaults by checking out:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/application.coffee
 *   - https://github.com/linemanjs/lineman/blob/master/config/plugins
 *
 * You can also ask Lineman's about config from the command line:
 *
 *   $ lineman config #=> to print the entire config
 *   $ lineman config concat_sourcemap.js #=> to see the JS config for the concat task.
 */
module.exports = function(lineman) {
  //Override application configuration here. Common examples follow in the comments.
  return {

    loadNpmTasks: lineman.config.application.loadNpmTasks.concat("grunt-contrib-imagemin"),

    appendTasks: {
      dist: ["imagemin"]
    },

    imagemin: {
      images: {
        files: [{
          expand: true,
          src: ["app/img/**/*.{png,jpg,gif}"],
          dest: "."
        }]
      }
    }
  };
};
