var wgxpath = require('wgxpath');
var jsdom = require('jsdom');

var url = 'http://www.merriam-webster.com/word-of-the-day/';
var expressionString = '//*[@id="content"]/div[3]/ul/li[1]/strong';

jsdom.env({
  html: url,
  done: function(errors, window) {
    wgxpath.install(window);
    var expression = window.document.createExpression(expressionString);
    var result = expression.evaluate(window.document,
        wgxpath.XPathResultType.STRING_TYPE);
    console.log('The Word of the Day is "' + result.stringValue + '."');
  }
});
