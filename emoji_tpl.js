var EMOJI_RE = new RegExp('(' + Object.keys(EMOJI_MAP).join('|') + ')', 'g');

function unifiedToHTML(text) {
  return text.replace(EMOJI_RE, function (_, m1) {
    var em = EMOJI_MAP[m1];
    return '<span class="emoji emoji' + em[1] + '" title="' + em[0] + '"></span>';
  });
}