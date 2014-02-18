#!/bin/sh

# https://github.com/fengmk2/emoji/pull/6: sprite sheet is optimized
# curl -o lib/emoji.png https://raw.github.com/iamcal/php-emoji/master/emoji.png

curl -o lib/emoji.css https://raw.github.com/iamcal/php-emoji/master/emoji.css
cat tpl/emoji_missing.css >> lib/emoji.css
curl -o lib/table.htm https://raw.github.com/iamcal/php-emoji/master/table.htm

python bin/create_emoji_js.py
