emoji [![Build Status](https://secure.travis-ci.org/fengmk2/emoji.png)](http://travis-ci.org/fengmk2/emoji) [![Coverage Status](https://coveralls.io/repos/fengmk2/emoji/badge.png)](https://coveralls.io/r/fengmk2/emoji)
=====

[![NPM](https://nodei.co/npm/emoji.png?downloads=true&stars=true)](https://nodei.co/npm/emoji/)

![logo](https://raw.github.com/fengmk2/emoji/master/logo.png)

This library allows the handling and conversion of Emoji in `Javascript`.

## Usage

### Browser

see [demo.html](http://fengmk2.github.com/emoji/)

Use [staticfile.org](http://www.staticfile.org/index_en.html) CDN:

```html
<link href="http://cdn.staticfile.org/emoji/0.2.2/emoji.css" rel="stylesheet" type="text/css" />
<script src="http://cdn.staticfile.org/jquery/2.1.0/jquery.min.js"></script>
<script src="http://cdn.staticfile.org/emoji/0.2.2/emoji.js"></script>
```

```js
var $text = $('.emojstext');
var html = $text.html().trim().replace(/\n/g, '<br/>');
$text.html(jEmoji.unifiedToHTML(html));
```

#### Seajs

```js
seajs.config({
  alias: {
    emoji: 'http://cdn.staticfile.org/emoji/0.2.2/emoji.js'
  }
});

seajs.use(['emoji'], function (emoji) {
  // TODO
});
// or
define('test', function (require, exports, modules) {
  var emoji = require('emoji');
});
```

#### RequireJS (AMD)

```js
require.config({
  paths: {
    emoji: 'http://cdn.staticfile.org/emoji/0.2.2/emoji.js'
  }
});

require(['emoji'], function (emoji) {
  // TODO
});
```

### Nodejs

```sh
$ npm install emoji
```

```js
var emoji = require('emoji');
console.log('😎', emoji.unifiedToHTML('😎'));
```

test on nodejs:

```bash
$ make test
```

## Sync data

Source data come from [php-emoji](https://github.com/iamcal/php-emoji).

Run [bin/syncdata.sh](https://github.com/fengmk2/emoji/blob/master/bin/syncdata.sh) script, will keep [emoji.png](https://github.com/fengmk2/emoji/blob/master/lib/emoji.png), [emoji.css](https://github.com/fengmk2/emoji/blob/master/lib/emoji.css), `table.html` update.
And it will create [emoji.js](https://github.com/fengmk2/emoji/blob/master/lib/emoji.js) from [table.html](https://github.com/fengmk2/emoji/blob/master/lib/table.htm).

```sh
sh ./bin/syncdata.sh
```

## Authors

Missing emojis support by: Nariman Haghighi <auspicious@gmail.com> and Jonathan Ong <jonathanrichardong@gmail.com>.

```bash
$ git summary

 project  : emoji
 repo age : 1 year, 8 months
 active   : 18 days
 commits  : 61
 files    : 24
 authors  :
    48  fengmk2                 78.7%
     6  pachtymichuk            9.8%
     4  Jonathan Ong            6.6%
     2  Julian Bäume           3.3%
     1  Craig Condon            1.6%
```

## License

(The MIT License)

Copyright (c) 2012 - 2014 fengmk2 <fengmk2@gmail.com>.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
