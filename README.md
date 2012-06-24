emoji
=====

## Usage

see [demo.html](http://fengmk2.github.com/emoji/)

```js
var $text = $('.emojstext');
var html = $text.html().trim().replace(/\n/g, '<br/>');
$text.html(unifiedToHTML(html));
```

## Sync data

Source data come from [php-emoji](https://github.com/iamcal/php-emoji).

Run `[bin/syncdata.sh](https://github.com/fengmk2/emoji/blob/master/bin/syncdata.sh)` script, will keep `[iphone_emoji.png](https://github.com/fengmk2/emoji/blob/master/iphone_emoji.png)`, `[emoji.css](https://github.com/fengmk2/emoji/blob/master/emoji.css)`, `table.html` update.
And it will create `[emoji.js](https://github.com/fengmk2/emoji/blob/master/emoji.js)` from `[table.html](https://github.com/fengmk2/emoji/blob/master/table.htm)`.

```sh
sh ./bin/syncdata.sh
```

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