/* The file is taken as it is from https://github.com/Aluxian/Facebook-Messenger-Desktop/blob/master/src/components/themer.js */

var settings = require('./settings');
var fs = require('fs');

module.exports = {


  /**
   * Load styles in the document..
   */
  apply: function(document) {
    var style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    document.head.appendChild(style);

    var updateTheme = function(theme) {
      fs.readFile('themes/' + theme + '.css', 'utf-8', function(err, css) {
        if (err) {
          console.error(err);
        } else {
          style.innerText = css;
        }
      });
    };

    updateTheme(settings.theme);
    settings.watch('theme', updateTheme);
  }
};