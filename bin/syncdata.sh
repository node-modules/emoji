#!/bin/sh

curl -o lib/iphone_emoji.png https://github.com/iamcal/php-emoji/raw/master/iphone_emoji.png
curl -o lib/emoji.css https://raw.github.com/iamcal/php-emoji/master/emoji.css
curl -o lib/table.htm https://raw.github.com/iamcal/php-emoji/master/table.htm

python bin/create_emoji_js.py