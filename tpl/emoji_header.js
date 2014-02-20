/*global exports */
/*!
 * emoji
 *
 * This file auto create by `bin/create_emoji_js.py`.
 * Emoji\'s table come from <a href="http://code.iamcal.com/php/emoji/">http://code.iamcal.com/php/emoji/</a>
 *
 * Copyright(c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

;(function (name, definition) {
  // Come from eventproxy: https://github.com/JacksonTian/eventproxy/blob/master/lib/eventproxy.js#L7

  // this is considered "safe":
  var hasDefine = typeof define === 'function';
  var hasExports = typeof module !== 'undefined' && module.exports;

  if (hasDefine) {
    // AMD Module or CMD Module
    define(definition);
  } else if (hasExports) {
    // Node.js Module
    module.exports = definition();
  } else {
    // Assign to common namespaces or simply the global object (window)
    this[name] = definition();
  }
})('jEmoji', function () {

var jEmoji = {};

/**
 * Emoji code map.
 *
 * format:
 *   Unified: [unified_unicode, title, classname, DoCoMo, KDDI, Softbank, Google]'
 *
 * @type {Object}
 */
var EMOJI_MAP = jEmoji.EMOJI_MAP = {
  // missing
  "👬": ["U+1F46C", "man and man holding hands", "1f46c", ["-", "-"], ["-", "-"], ["", "U+E428"], ["󾆠", "U+FE1A0"]],
  "👭": ["U+1F46D", "woman and woman holding hands", "1f46d", ["-", "-"], ["-", "-"], ["", "U+E428"], ["󾆠", "U+FE1A0"]],
  "🌲": ["U+1F332", "evergreen tree", "1f332", ["-", "-"], ["", "U+EB49"], ["", "U+E305"], ["󾁍", "U+FE04D"]],
  "🌳": ["U+1F333", "deciduous tree", "1f333", ["-", "-"], ["", "U+EB49"], ["", "U+E305"], ["󾁍", "U+FE04D"]],
  "🍋":  ["U+1F34B", "lemon", "1f34b", ["-", "-"], ["", "U+EABA"], ["", "U+E346"], ["󾁒", "U+FE052"]],
  "😎": ["U+1F60E", "smiling face with sunglasses", "1f60e", ["", "U+E726"], ["", "U+E5C4"], ["", "U+E106"], ["󾌧", "U+FE327"]],
  "😀":  ["U+1F600", "grinning face", "1f600", ["", "U+E753"], ["", "U+EB80"], ["", "U+E404"], ["󾌳", "U+FE333"]],
  // table.html
