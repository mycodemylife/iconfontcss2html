var fs = require('fs')
var file = fs.readFileSync('./iconfont.css').toString();
var os = require('os')
 
var icons = file.split("\n");
var fontFamily;
for (var i = 0; i < icons.length; i++) {
	var icon = icons[i];
	if (icon.includes('font-family')) {
		fontFamily = icon.split(":")[1].split('"')[1];
		break;
	}
}
var html = '<!DOCTYPE html>\n' +
    '<html lang="zh_CN">\n' +
    '<head>\n' +
    '	<meta charset="UTF-8">\n' +
    '	<title>iconfont</title>\n' +
    '	<link rel="stylesheet" href="./iconfont.css">\n' +
    '	<style>.'+fontFamily+'{font-size: 44px;height: 44px;width: 44px;margin: 4px;}</style>\n' +
    '</head>\n' +
    '<body>\n';
for (var i = 0; i < icons.length; i++) {
    var icon = icons[i];
    if (icon.includes('.icon-')) {
        var className = icon.split('.')[1].split(':')[0];
        html += '	<i class="'+fontFamily+ ' '+ className + '"></i>\n';
        //if (i % 32 === 1) {
        //    console.log(i);
        //    html += '<br />'
        //    console.log(className);
        //}
        // console.log(className);
    }
}
html += '<script>\n' +
    '    var getColor = function () {\n' +
    '        return \'#\' + Math.random().toString(16).substr(-6);\n' +
    '    }\n' +
    '    var icons = document.getElementsByTagName(\'i\')\n' +
    '    for (var i = 0; i < icons.length; i++) {\n' +
    '        var icon = icons[i];\n' +
    '        icon.style.color = getColor()\n' +
    '    }\n' +
    '</script>\n'+
	'</body>\n' +
    '</html>'
 
fs.writeFileSync('./geticonfont.html', html)