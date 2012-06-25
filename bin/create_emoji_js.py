#!/usr/bin/python
# -*- coding: utf-8 -*-

# install pyquery first: $ sudo easy_install pyquery

import os
from pyquery import PyQuery as pq

project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# d = pq(url='https://raw.github.com/iamcal/php-emoji/master/table.htm')
d = pq(open(project_dir + '/lib/table.htm', 'rb').read())

tr = d('table tr')

content = open(project_dir + '/tpl/emoji_header.js', 'rb').read().decode('utf-8')

for tre in tr[1:]:
    tds = pq(tre)('td')
    # val, name, Unified  DoCoMo  KDDI  Softbank  Google
    item = ['', '', '', '', '', '', '']

    for index, tde in enumerate(tds):
        td = pq(tde)
        # <td><span class="emoji emoji2320e3"></span></td>
        if index == 0:
            val = td('span').attr('class')[11:].decode('utf-8')
        else:
            val = td.text().decode('utf-8')
            source = val
            if index != 1 and val != '-':
                # convert to str
                val = val[2:]
                val = val.split(' U+')
                val[0] = (r'\U' + '0' * (8 - len(val[0])) + val[0].lower()).decode('unicode-escape')
                if len(val) > 1:
                    val[1] = (r'\U' + '0' * (8 - len(val[1])) + val[1].lower()).decode('unicode-escape')
                    val = val[0] + val[1]
                else:
                    val = val[0]
            if index > 1:
                val = [val, source]
        item[index] = val
    # print item
    # unified: [unified_unicode, name, classname, docomo, kddi, softbank, google]
    content += u'  "' + item[2][0] + '": ["' + item[2][1] + '", "' + item[1] + '", "' + item[0] + '", ["' \
        + item[3][0] + '", "' + item[3][1] + '"], ["' \
        + item[4][0] + '", "' + item[4][1] + '"], ["' \
        + item[5][0] + '", "' + item[5][1] + '"], ["' \
        + item[6][0] + '", "' + item[6][1] + '"]],\n'

content = content[:-2] + u'\n};\n\n'

content += open(project_dir + '/tpl/emoji_footer.js', 'rb').read().decode('utf-8')

f = open(project_dir + '/lib/emoji.js', 'wb')
f.write(content.encode('utf-8'))
f.close()
