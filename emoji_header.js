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

"use strict";

var jEmoji = {};
if (typeof module === 'undefined') {
  window.jEmoji = jEmoji;
} else {
  module.exports = jEmoji;
}

// Unified: [unified_unicode, title, classname, DoCoMo, KDDI, Softbank, Google]'
var EMOJI_MAP = {
