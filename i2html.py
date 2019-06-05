#!/usr/bin/env python
# -*- coding: utf-8 -*-

html = '<!DOCTYPE html>\n' \
       + '<html lang="zh_CN">\n' \
       + '<head>\n' \
       + '	<meta charset="UTF-8">\n' \
       + '	<title>iconfont</title>\n' \
       + '	<link rel="stylesheet" href="./iconfont.css">\n' \
       + '	<style>.'
html_end = '<script>\n' + \
           '    var getColor = function () {\n' + \
           '        return \'#\' + Math.random().toString(16).substr(-6);\n' + \
           '    }\n' + \
           '    var icons = document.getElementsByTagName(\'i\')\n' + \
           '    for (var i = 0; i < icons.length; i++) {\n' + \
           '        var icon = icons[i];\n' + \
           '        icon.style.color = getColor()\n' + \
           '    }\n' + \
           '</script>\n' + \
           '</body>\n' + \
           '</html>'


def get_html():
    global html, font_family
    file = open("./iconfont.css")
    i = 1
    for line in file:
        if 'font-family' in line:
            if i == 1:
                font_family = line.split(":")[1].split('"')[1]
                html += font_family + '{font-size: 44px;height: 44px;width: 44px;margin: 4px;}</style>\n' \
                        + '</head>\n' + '<body>\n'
                i += 1
        elif '.icon-' in line:
            class_name = line.split('.')[1].split(':')[0]
            html += '	<i class="' + font_family + ' ' + class_name + '"></i>\n'
    html = html + html_end
    return html


def write_file(str):
    with open('./gethtml.html.', 'w') as f:
        f.write(str)


if __name__ == '__main__':
    write_file(get_html())
