/*!
 * emoji - test/emoji.js
 * Copyright(c) 2012 -2013 fengmk2 <fengmk2@gmail.com>
 * MIT Licensed
 */

"use strict";

/**
 * Module dependencies.
 */

var should = require('should');
var emoji = require('../');

describe('emoji.js', function () {

  var EMOJI_MAP = emoji.EMOJI_MAP;

  describe('unifiedToHTML()', function () {
    it('should convert all unified code to html format', function () {
      for (var key in EMOJI_MAP) {
        var em = EMOJI_MAP[key];
        emoji.unifiedToHTML(key).should.equal('<span class="emoji emoji' + em[2] + '" title="' + em[1] + '"></span>');
      }
    });

    it('should not covert normal string', function () {
      var text = 'I am not unified string...';
      emoji.unifiedToHTML(text).should.equal(text);
    });
  });

  describe('docomoToUnified()', function () {
    it('should convert all DoCoMo code to html format', function () {
      for (var key in EMOJI_MAP) {
        var em = EMOJI_MAP[key];
        if (em[3][0] === '-') {
          continue;
        }
        var unified = emoji.docomoToUnified(em[3][0]);
        should.ok(unified);
        should.ok(EMOJI_MAP[unified]);
      }
    });

    it('should not covert normal string', function () {
      var text = 'I am not DoCoMo string...🌑';
      emoji.docomoToUnified(text).should.equal(text);
    });
  });

  describe('kddiToUnified()', function () {
    it('should convert all KDDI code to html format', function () {
      for (var key in EMOJI_MAP) {
        var em = EMOJI_MAP[key];
        if (em[4][0] === '-') {
          continue;
        }
        var unified = emoji.kddiToUnified(em[4][0]);
        should.ok(unified);
        should.ok(EMOJI_MAP[unified]);
      }
    });

    it('should not covert normal string', function () {
      var text = 'I am not KDDI string...🌑';
      emoji.kddiToUnified(text).should.equal(text);
    });
  });

  describe('softbankToUnified()', function () {
    it('should convert all SoftBank code to html format', function () {
      for (var key in EMOJI_MAP) {
        var em = EMOJI_MAP[key];
        if (em[5][0] === '-') {
          continue;
        }
        var unified = emoji.softbankToUnified(em[5][0]);
        should.ok(unified);
        should.ok(EMOJI_MAP[unified]);
      }
    });

    it('should not covert normal string', function () {
      var text = 'I am not KDDI string...🌑';
      emoji.softbankToUnified(text).should.equal(text);
    });
  });

  describe('googleToUnified()', function () {
    it('should convert all Google code to html format', function () {
      for (var key in EMOJI_MAP) {
        var em = EMOJI_MAP[key];
        if (em[6][0] === '-') {
          continue;
        }
        var unified = emoji.googleToUnified(em[6][0]);
        should.ok(unified);
        should.ok(EMOJI_MAP[unified]);
      }
    });

    it('should not covert normal string', function () {
      var text = 'I am not Google string...';
      emoji.googleToUnified(text).should.equal(text);
    });
  });

});
