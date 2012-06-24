#!/bin/sh

curl -O https://github.com/iamcal/php-emoji/raw/master/iphone_emoji.png
curl -O https://raw.github.com/iamcal/php-emoji/master/emoji.css
curl -O https://raw.github.com/iamcal/php-emoji/master/table.htm

python bin/create_emoji_js.py