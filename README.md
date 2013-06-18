emoji [![Build Status](https://secure.travis-ci.org/fengmk2/emoji.png)](http://travis-ci.org/fengmk2/emoji)
=====

![logo](https://raw.github.com/fengmk2/emoji/master/logo.png)

This library allows the handling and conversion of Emoji in `Javascript`.

## Usage

### Browser

see [demo.html](http://fengmk2.github.com/emoji/)

```html
<link href="./emoji.css" rel="stylesheet" type="text/css" />
<script src="./jquery.js"></script>
<script src="./emoji.js"></script>
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
    emoji: 'https://raw.github.com/fengmk2/emoji/master/lib/emoji.js'
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
    emoji: 'https://raw.github.com/fengmk2/emoji/master/lib/emoji.js'
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
console.log('😜', emoji.unifiedToHTML('😜'));
```

test on nodejs:

```bash
$ make test
```

jscoverage: [**96%**](http://fengmk2.github.com/coverage/emoji.html)

## Sync data

Source data come from [php-emoji](https://github.com/iamcal/php-emoji).

Run [bin/syncdata.sh](https://github.com/fengmk2/emoji/blob/master/bin/syncdata.sh) script, will keep [emoji.png](https://github.com/fengmk2/emoji/blob/master/lib/emoji.png), [emoji.css](https://github.com/fengmk2/emoji/blob/master/lib/emoji.css), `table.html` update.
And it will create [emoji.js](https://github.com/fengmk2/emoji/blob/master/lib/emoji.js) from [table.html](https://github.com/fengmk2/emoji/blob/master/lib/table.htm).

```sh
sh ./bin/syncdata.sh
```

## Authors

Missing emoji support by: Nariman Haghighi <auspicious@gmail.com>.

## License 

(The MIT License)

Copyright (c) 2012 fengmk2 <fengmk2@gmail.com>.

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