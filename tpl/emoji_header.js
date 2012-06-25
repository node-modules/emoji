/*!
 * emoji
 *
 * This file auto create by `bin/create_emoji_js.py`.
 * Emoji\'s table come from <a href="http://code.iamcal.com/php/emoji/">http://code.iamcal.com/php/emoji/</a>
 * 
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

(function () {

var jEmoji = {};
if (typeof module === 'undefined') {
  window.jEmoji = jEmoji;
} else {
  module.exports = jEmoji;
}

/**
 * Emoji code map.
 *
 * format: 
 *   Unified: [unified_unicode, title, classname, DoCoMo, KDDI, Softbank, Google]'
 * 
 * @type {Object}
 */
var EMOJI_MAP = jEmoji.EMOJI_MAP = {
