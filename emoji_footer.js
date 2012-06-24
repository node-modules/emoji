var EMOJI_RE = new RegExp('(' + Object.keys(EMOJI_MAP).join('|') + ')', 'g');

function unifiedToHTML(text) {
  return text.replace(EMOJI_RE, function (_, m) {
    var em = EMOJI_MAP[m];
    return '<span class="emoji emoji' + em[2] + '" title="' + em[1] + '"></span>';
  });
}
jEmoji.unifiedToHTML = unifiedToHTML;

var EMOJI_DOCOMO_MAP = {};
var EMOJI_KDDI_MAP = {};
var EMOJI_SOFTBANK_MAP = {};
var EMOJI_GOOGLE_MAP = {};
var _maps = [EMOJI_DOCOMO_MAP, EMOJI_KDDI_MAP, EMOJI_SOFTBANK_MAP, EMOJI_GOOGLE_MAP];
for (var k in EMOJI_MAP) {
  var em = EMOJI_MAP[k];
  for (var i = 0; i < _maps.length; i++) {
    var index = i + 3;
    if (em[index][0] === '-') {
      continue;
    }
    _maps[i][em[index][0]] = k;
  }
}

var EMOJI_DOCOMO_RE = new RegExp('(' + Object.keys(EMOJI_DOCOMO_MAP).join('|') + ')', 'g');
var EMOJI_KDDI_RE = new RegExp('(' + Object.keys(EMOJI_KDDI_MAP).join('|') + ')', 'g');
var EMOJI_SOFTBANK_RE = new RegExp('(' + Object.keys(EMOJI_SOFTBANK_MAP).join('|') + ')', 'g');
var EMOJI_GOOGLE_RE = new RegExp('(' + Object.keys(EMOJI_GOOGLE_MAP).join('|') + ')', 'g');

function docomoToUnified(text) {
  return text.replace(EMOJI_DOCOMO_RE, function (_, m) {
    return EMOJI_DOCOMO_MAP[m];
  });
}
jEmoji.docomoToUnified = docomoToUnified;

function kddiToUnified(text) {
  return text.replace(EMOJI_KDDI_RE, function (_, m) {
    return EMOJI_KDDI_MAP[m];
  });
}
jEmoji.kddiToUnified = kddiToUnified;

function softbankToUnified(text) {
  return text.replace(EMOJI_SOFTBANK_RE, function (_, m) {
    return EMOJI_SOFTBANK_MAP[m];
  });
}
jEmoji.softbankToUnified = softbankToUnified;

function googleToUnified(text) {
  return text.replace(EMOJI_GOOGLE_RE, function (_, m) {
    return EMOJI_GOOGLE_MAP[m];
  });
}
jEmoji.googleToUnified = googleToUnified;

})();