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

Run `syncdata.sh` script, will keep `iphone_emoji.png`, `emoji.css`, `table.html` update.
And it will create `emoji_map.js` from `table.html` for using by `Javascript`.

```sh
sh ./bin/syncdata.sh
```


