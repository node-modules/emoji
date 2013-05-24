/*global exports */
/*!
 * emoji
 *
 * This file auto create by `bin/create_emoji_js.py`.
 * Emoji\'s table come from <a href="http://code.iamcal.com/php/emoji/">http://code.iamcal.com/php/emoji/</a>
 * 
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
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
