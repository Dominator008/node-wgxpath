(function(){function h(a){return function(){return this[a]}}function l(a){return function(){return a}}var m=this;
function ba(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function n(a){return"string"==typeof a}function ca(a,b,c){return a.call.apply(a.bind,arguments)}function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function ea(a,b,c){ea=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ca:da;return ea.apply(null,arguments)}function fa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}}
function q(a){var b=r;function c(){}c.prototype=b.prototype;a.G=b.prototype;a.prototype=new c;a.F=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};/*

 The MIT License

 Copyright (c) 2007 Cybozu Labs, Inc.
 Copyright (c) 2012 Google Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to
 deal in the Software without restriction, including without limitation the
 rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 IN THE SOFTWARE.
*/
function t(a,b,c){this.a=a;this.b=b||1;this.f=c||1};var ga=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function u(a,b){return-1!=a.indexOf(b)}function ha(a,b){return a<b?-1:a>b?1:0};var v=Array.prototype,ia=v.indexOf?function(a,b,c){return v.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},w=v.forEach?function(a,b,c){v.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ja=v.filter?function(a,b,c){return v.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,g=n(a)?
a.split(""):a,k=0;k<d;k++)if(k in g){var p=g[k];b.call(c,p,k,a)&&(e[f++]=p)}return e},x=v.reduce?function(a,b,c,d){d&&(b=ea(b,d));return v.reduce.call(a,b,c)}:function(a,b,c,d){var e=c;w(a,function(c,g){e=b.call(d,e,c,g,a)});return e},ka=v.some?function(a,b,c){return v.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};
function la(a,b){var c;a:{c=a.length;for(var d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:n(a)?a.charAt(c):a[c]}function ma(a){return v.concat.apply(v,arguments)}function na(a,b,c){return 2>=arguments.length?v.slice.call(a,b):v.slice.call(a,b,c)};var y;a:{var oa=m.navigator;if(oa){var pa=oa.userAgent;if(pa){y=pa;break a}}y=""};var qa=u(y,"Opera")||u(y,"OPR"),A=u(y,"Trident")||u(y,"MSIE"),ra=u(y,"Edge"),sa=u(y,"Gecko")&&!(u(y.toLowerCase(),"webkit")&&!u(y,"Edge"))&&!(u(y,"Trident")||u(y,"MSIE"))&&!u(y,"Edge"),ta=u(y.toLowerCase(),"webkit")&&!u(y,"Edge");function ua(){var a=y;if(sa)return/rv\:([^\);]+)(\)|;)/.exec(a);if(ra)return/Edge\/([\d\.]+)/.exec(a);if(A)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ta)return/WebKit\/(\S+)/.exec(a)}function va(){var a=m.document;return a?a.documentMode:void 0}
var wa=function(){if(qa&&m.opera){var a=m.opera.version;return"function"==ba(a)?a():a}var a="",b=ua();b&&(a=b?b[1]:"");return A&&(b=va(),b>parseFloat(a))?String(b):a}(),xa={};
function ya(a){if(!xa[a]){for(var b=0,c=ga(String(wa)).split("."),d=ga(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",p=RegExp("(\\d*)(\\D*)","g"),z=RegExp("(\\d*)(\\D*)","g");do{var E=p.exec(g)||["","",""],aa=z.exec(k)||["","",""];if(0==E[0].length&&0==aa[0].length)break;b=ha(0==E[1].length?0:parseInt(E[1],10),0==aa[1].length?0:parseInt(aa[1],10))||ha(0==E[2].length,0==aa[2].length)||ha(E[2],aa[2])}while(0==b)}xa[a]=0<=b}}
var za=m.document,Aa=za&&A?va()||("CSS1Compat"==za.compatMode?parseInt(wa,10):5):void 0;var B=A&&!(9<=Aa),Ba=A&&!(8<=Aa);function C(a,b,c,d){this.a=a;this.nodeName=c;this.nodeValue=d;this.nodeType=2;this.parentNode=this.ownerElement=b}function Ca(a,b){var c=Ba&&"href"==b.nodeName?a.getAttribute(b.nodeName,2):b.nodeValue;return new C(b,a,b.nodeName,c)};function Da(a){this.b=a;this.a=0}function Ea(a){a=a.match(Fa);for(var b=0;b<a.length;b++)Ga.test(a[b])&&a.splice(b,1);return new Da(a)}var Fa=RegExp("\\$?(?:(?![0-9-])[\\w-]+:)?(?![0-9-])[\\w-]+|\\/\\/|\\.\\.|::|\\d+(?:\\.\\d*)?|\\.\\d+|\"[^\"]*\"|'[^']*'|[!<>]=|\\s+|.","g"),Ga=/^\s/;function D(a,b){return a.b[a.a+(b||0)]}function F(a){return a.b[a.a++]}function Ha(a){return a.b.length<=a.a};!sa&&!A||A&&9<=Aa||sa&&ya("1.9.1");A&&ya("9");function Ia(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Ja(a,b){if(a==b)return 0;if(a.compareDocumentPosition)return a.compareDocumentPosition(b)&2?1:-1;if(A&&!(9<=Aa)){if(9==a.nodeType)return-1;if(9==b.nodeType)return 1}if("sourceIndex"in a||a.parentNode&&"sourceIndex"in a.parentNode){var c=1==a.nodeType,d=1==b.nodeType;if(c&&d)return a.sourceIndex-b.sourceIndex;var e=a.parentNode,f=b.parentNode;return e==f?Ka(a,b):!c&&Ia(e,b)?-1*La(a,b):!d&&Ia(f,a)?La(b,a):(c?a.sourceIndex:e.sourceIndex)-(d?b.sourceIndex:f.sourceIndex)}d=9==a.nodeType?a:a.ownerDocument||
a.document;c=d.createRange();c.selectNode(a);c.collapse(!0);d=d.createRange();d.selectNode(b);d.collapse(!0);return c.compareBoundaryPoints(m.Range.START_TO_END,d)}function La(a,b){var c=a.parentNode;if(c==b)return-1;for(var d=b;d.parentNode!=c;)d=d.parentNode;return Ka(d,a)}function Ka(a,b){for(var c=b;c=c.previousSibling;)if(c==a)return-1;return 1};function G(a){var b=null,c=a.nodeType;1==c&&(b=a.textContent,b=void 0==b||null==b?a.innerText:b,b=void 0==b||null==b?"":b);if("string"!=typeof b)if(B&&"title"==a.nodeName.toLowerCase()&&1==c)b=a.text;else if(9==c||1==c){a=9==c?a.documentElement:a.firstChild;for(var c=0,d=[],b="";a;){do 1!=a.nodeType&&(b+=a.nodeValue),B&&"title"==a.nodeName.toLowerCase()&&(b+=a.text),d[c++]=a;while(a=a.firstChild);for(;c&&!(a=d[--c].nextSibling););}}else b=a.nodeValue;return""+b}
function H(a,b,c){if(null===b)return!0;try{if(!a.getAttribute)return!1}catch(d){return!1}Ba&&"class"==b&&(b="className");return null==c?!!a.getAttribute(b):a.getAttribute(b,2)==c}function Ma(a,b,c,d,e){return(B?Na:Oa).call(null,a,b,n(c)?c:null,n(d)?d:null,e||new I)}
function Na(a,b,c,d,e){if(a instanceof J||8==a.b||c&&null===a.b){var f=b.all;if(!f)return e;a=Pa(a);if("*"!=a&&(f=b.getElementsByTagName(a),!f))return e;if(c){for(var g=[],k=0;b=f[k++];)H(b,c,d)&&g.push(b);f=g}for(k=0;b=f[k++];)"*"==a&&"!"==b.tagName||K(e,b);return e}Qa(a,b,c,d,e);return e}
function Oa(a,b,c,d,e){b.getElementsByName&&d&&"name"==c&&!A?(b=b.getElementsByName(d),w(b,function(b){a.a(b)&&K(e,b)})):b.getElementsByClassName&&d&&"class"==c?(b=b.getElementsByClassName(d),w(b,function(b){b.className==d&&a.a(b)&&K(e,b)})):a instanceof L?Qa(a,b,c,d,e):b.getElementsByTagName&&(b=b.getElementsByTagName(a.f()),w(b,function(a){H(a,c,d)&&K(e,a)}));return e}
function Ra(a,b,c,d,e){var f;if((a instanceof J||8==a.b||c&&null===a.b)&&(f=b.childNodes)){var g=Pa(a);if("*"!=g&&(f=ja(f,function(a){return a.tagName&&a.tagName.toLowerCase()==g}),!f))return e;c&&(f=ja(f,function(a){return H(a,c,d)}));w(f,function(a){"*"==g&&("!"==a.tagName||"*"==g&&1!=a.nodeType)||K(e,a)});return e}return Sa(a,b,c,d,e)}function Sa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)H(b,c,d)&&a.a(b)&&K(e,b);return e}
function Qa(a,b,c,d,e){for(b=b.firstChild;b;b=b.nextSibling)H(b,c,d)&&a.a(b)&&K(e,b),Qa(a,b,c,d,e)}function Pa(a){if(a instanceof L){if(8==a.b)return"!";if(null===a.b)return"*"}return a.f()};function I(){this.b=this.a=null;this.l=0}function Ta(a){this.node=a;this.a=this.b=null}function Ua(a,b){if(!a.a)return b;if(!b.a)return a;for(var c=a.a,d=b.a,e=null,f=null,g=0;c&&d;){var f=c.node,k=d.node;f==k||f instanceof C&&k instanceof C&&f.a==k.a?(f=c,c=c.a,d=d.a):0<Ja(c.node,d.node)?(f=d,d=d.a):(f=c,c=c.a);(f.b=e)?e.a=f:a.a=f;e=f;g++}for(f=c||d;f;)f.b=e,e=e.a=f,g++,f=f.a;a.b=e;a.l=g;return a}function Va(a,b){var c=new Ta(b);c.a=a.a;a.b?a.a.b=c:a.a=a.b=c;a.a=c;a.l++}
function K(a,b){var c=new Ta(b);c.b=a.b;a.a?a.b.a=c:a.a=a.b=c;a.b=c;a.l++}function Wa(a){return(a=a.a)?a.node:null}function Xa(a){return(a=Wa(a))?G(a):""}function M(a,b){return new Ya(a,!!b)}function Ya(a,b){this.f=a;this.b=(this.c=b)?a.b:a.a;this.a=null}function N(a){var b=a.b;if(null==b)return null;var c=a.a=b;a.b=a.c?b.b:b.a;return c.node};function Za(a){switch(a.nodeType){case 1:return fa($a,a);case 9:return Za(a.documentElement);case 11:case 10:case 6:case 12:return ab;default:return a.parentNode?Za(a.parentNode):ab}}function ab(){return null}function $a(a,b){if(a.prefix==b)return a.namespaceURI||"http://www.w3.org/1999/xhtml";var c=a.getAttributeNode("xmlns:"+b);return c&&c.specified?c.value||null:a.parentNode&&9!=a.parentNode.nodeType?$a(a.parentNode,b):null};function r(a){this.i=a;this.b=this.g=!1;this.f=null}function O(a){return"\n  "+a.toString().split("\n").join("\n  ")}function bb(a,b){a.g=b}function cb(a,b){a.b=b}function P(a,b){var c=a.a(b);return c instanceof I?+Xa(c):+c}function Q(a,b){var c=a.a(b);return c instanceof I?Xa(c):""+c}function R(a,b){var c=a.a(b);return c instanceof I?!!c.l:!!c};function db(a,b,c){r.call(this,a.i);this.c=a;this.h=b;this.o=c;this.g=b.g||c.g;this.b=b.b||c.b;this.c==eb&&(c.b||c.g||4==c.i||0==c.i||!b.f?b.b||b.g||4==b.i||0==b.i||!c.f||(this.f={name:c.f.name,s:b}):this.f={name:b.f.name,s:c})}q(db);
function S(a,b,c,d,e){b=b.a(d);c=c.a(d);var f;if(b instanceof I&&c instanceof I){e=M(b);for(d=N(e);d;d=N(e))for(b=M(c),f=N(b);f;f=N(b))if(a(G(d),G(f)))return!0;return!1}if(b instanceof I||c instanceof I){b instanceof I?e=b:(e=c,c=b);e=M(e);b=typeof c;for(d=N(e);d;d=N(e)){switch(b){case "number":d=+G(d);break;case "boolean":d=!!G(d);break;case "string":d=G(d);break;default:throw Error("Illegal primitive type for comparison.");}if(a(d,c))return!0}return!1}return e?"boolean"==typeof b||"boolean"==typeof c?
a(!!b,!!c):"number"==typeof b||"number"==typeof c?a(+b,+c):a(b,c):a(+b,+c)}db.prototype.a=function(a){return this.c.m(this.h,this.o,a)};db.prototype.toString=function(){var a="Binary Expression: "+this.c,a=a+O(this.h);return a+=O(this.o)};function fb(a,b,c,d){this.a=a;this.w=b;this.i=c;this.m=d}fb.prototype.toString=h("a");var gb={};function T(a,b,c,d){if(gb.hasOwnProperty(a))throw Error("Binary operator already created: "+a);a=new fb(a,b,c,d);return gb[a.toString()]=a}
T("div",6,1,function(a,b,c){return P(a,c)/P(b,c)});T("mod",6,1,function(a,b,c){return P(a,c)%P(b,c)});T("*",6,1,function(a,b,c){return P(a,c)*P(b,c)});T("+",5,1,function(a,b,c){return P(a,c)+P(b,c)});T("-",5,1,function(a,b,c){return P(a,c)-P(b,c)});T("<",4,2,function(a,b,c){return S(function(a,b){return a<b},a,b,c)});T(">",4,2,function(a,b,c){return S(function(a,b){return a>b},a,b,c)});T("<=",4,2,function(a,b,c){return S(function(a,b){return a<=b},a,b,c)});
T(">=",4,2,function(a,b,c){return S(function(a,b){return a>=b},a,b,c)});var eb=T("=",3,2,function(a,b,c){return S(function(a,b){return a==b},a,b,c,!0)});T("!=",3,2,function(a,b,c){return S(function(a,b){return a!=b},a,b,c,!0)});T("and",2,2,function(a,b,c){return R(a,c)&&R(b,c)});T("or",1,2,function(a,b,c){return R(a,c)||R(b,c)});function hb(a,b){if(b.a.length&&4!=a.i)throw Error("Primary expression must evaluate to nodeset if filter has predicate(s).");r.call(this,a.i);this.c=a;this.h=b;this.g=a.g;this.b=a.b}q(hb);hb.prototype.a=function(a){a=this.c.a(a);return ib(this.h,a)};hb.prototype.toString=function(){var a;a="Filter:"+O(this.c);return a+=O(this.h)};function jb(a,b){if(b.length<a.A)throw Error("Function "+a.j+" expects at least"+a.A+" arguments, "+b.length+" given");if(null!==a.v&&b.length>a.v)throw Error("Function "+a.j+" expects at most "+a.v+" arguments, "+b.length+" given");a.B&&w(b,function(b,d){if(4!=b.i)throw Error("Argument "+d+" to function "+a.j+" is not of type Nodeset: "+b);});r.call(this,a.i);this.h=a;this.c=b;bb(this,a.g||ka(b,function(a){return a.g}));cb(this,a.D&&!b.length||a.C&&!!b.length||ka(b,function(a){return a.b}))}q(jb);
jb.prototype.a=function(a){return this.h.m.apply(null,ma(a,this.c))};jb.prototype.toString=function(){var a="Function: "+this.h;if(this.c.length)var b=x(this.c,function(a,b){return a+O(b)},"Arguments:"),a=a+O(b);return a};function kb(a,b,c,d,e,f,g,k,p){this.j=a;this.i=b;this.g=c;this.D=d;this.C=e;this.m=f;this.A=g;this.v=void 0!==k?k:g;this.B=!!p}kb.prototype.toString=h("j");var lb={};
function U(a,b,c,d,e,f,g,k){if(lb.hasOwnProperty(a))throw Error("Function already created: "+a+".");lb[a]=new kb(a,b,c,d,!1,e,f,g,k)}U("boolean",2,!1,!1,function(a,b){return R(b,a)},1);U("ceiling",1,!1,!1,function(a,b){return Math.ceil(P(b,a))},1);U("concat",3,!1,!1,function(a,b){var c=na(arguments,1);return x(c,function(b,c){return b+Q(c,a)},"")},2,null);U("contains",2,!1,!1,function(a,b,c){return u(Q(b,a),Q(c,a))},2);U("count",1,!1,!1,function(a,b){return b.a(a).l},1,1,!0);
U("false",2,!1,!1,l(!1),0);U("floor",1,!1,!1,function(a,b){return Math.floor(P(b,a))},1);U("id",4,!1,!1,function(a,b){function c(a){if(B){var b=e.all[a];if(b){if(b.nodeType&&a==b.id)return b;if(b.length)return la(b,function(b){return a==b.id})}return null}return e.getElementById(a)}var d=a.a,e=9==d.nodeType?d:d.ownerDocument,d=Q(b,a).split(/\s+/),f=[];w(d,function(a){a=c(a);!a||0<=ia(f,a)||f.push(a)});f.sort(Ja);var g=new I;w(f,function(a){K(g,a)});return g},1);U("lang",2,!1,!1,l(!1),1);
U("last",1,!0,!1,function(a){if(1!=arguments.length)throw Error("Function last expects ()");return a.f},0);U("local-name",3,!1,!0,function(a,b){var c=b?Wa(b.a(a)):a.a;return c?c.localName||c.nodeName.toLowerCase():""},0,1,!0);U("name",3,!1,!0,function(a,b){var c=b?Wa(b.a(a)):a.a;return c?c.nodeName.toLowerCase():""},0,1,!0);U("namespace-uri",3,!0,!1,l(""),0,1,!0);U("normalize-space",3,!1,!0,function(a,b){return(b?Q(b,a):G(a.a)).replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"")},0,1);
U("not",2,!1,!1,function(a,b){return!R(b,a)},1);U("number",1,!1,!0,function(a,b){return b?P(b,a):+G(a.a)},0,1);U("position",1,!0,!1,function(a){return a.b},0);U("round",1,!1,!1,function(a,b){return Math.round(P(b,a))},1);U("starts-with",2,!1,!1,function(a,b,c){b=Q(b,a);a=Q(c,a);return 0==b.lastIndexOf(a,0)},2);U("string",3,!1,!0,function(a,b){return b?Q(b,a):G(a.a)},0,1);U("string-length",1,!1,!0,function(a,b){return(b?Q(b,a):G(a.a)).length},0,1);
U("substring",3,!1,!1,function(a,b,c,d){c=P(c,a);if(isNaN(c)||Infinity==c||-Infinity==c)return"";d=d?P(d,a):Infinity;if(isNaN(d)||-Infinity===d)return"";c=Math.round(c)-1;var e=Math.max(c,0);a=Q(b,a);if(Infinity==d)return a.substring(e);b=Math.round(d);return a.substring(e,c+b)},2,3);U("substring-after",3,!1,!1,function(a,b,c){b=Q(b,a);a=Q(c,a);c=b.indexOf(a);return-1==c?"":b.substring(c+a.length)},2);
U("substring-before",3,!1,!1,function(a,b,c){b=Q(b,a);a=Q(c,a);a=b.indexOf(a);return-1==a?"":b.substring(0,a)},2);U("sum",1,!1,!1,function(a,b){for(var c=M(b.a(a)),d=0,e=N(c);e;e=N(c))d+=+G(e);return d},1,1,!0);U("translate",3,!1,!1,function(a,b,c,d){b=Q(b,a);c=Q(c,a);var e=Q(d,a);a=[];for(d=0;d<c.length;d++){var f=c.charAt(d);f in a||(a[f]=e.charAt(d))}c="";for(d=0;d<b.length;d++)f=b.charAt(d),c+=f in a?a[f]:f;return c},3);U("true",2,!1,!1,l(!0),0);function L(a,b){this.h=a;this.c=void 0!==b?b:null;this.b=null;switch(a){case "comment":this.b=8;break;case "text":this.b=3;break;case "processing-instruction":this.b=7;break;case "node":break;default:throw Error("Unexpected argument");}}function mb(a){return"comment"==a||"text"==a||"processing-instruction"==a||"node"==a}L.prototype.a=function(a){return null===this.b||this.b==a.nodeType};L.prototype.f=h("h");L.prototype.toString=function(){var a="Kind Test: "+this.h;null===this.c||(a+=O(this.c));return a};function nb(a){r.call(this,3);this.c=a.substring(1,a.length-1)}q(nb);nb.prototype.a=h("c");nb.prototype.toString=function(){return"Literal: "+this.c};function J(a,b){this.j=a.toLowerCase();this.c=b?b.toLowerCase():"http://www.w3.org/1999/xhtml"}J.prototype.a=function(a){var b=a.nodeType;return 1!=b&&2!=b?!1:"*"!=this.j&&this.j!=a.nodeName.toLowerCase()?!1:this.c==(a.namespaceURI?a.namespaceURI.toLowerCase():"http://www.w3.org/1999/xhtml")};J.prototype.f=h("j");J.prototype.toString=function(){return"Name Test: "+("http://www.w3.org/1999/xhtml"==this.c?"":this.c+":")+this.j};function ob(a){r.call(this,1);this.c=a}q(ob);ob.prototype.a=h("c");ob.prototype.toString=function(){return"Number: "+this.c};function pb(a,b){r.call(this,a.i);this.h=a;this.c=b;this.g=a.g;this.b=a.b;if(1==this.c.length){var c=this.c[0];c.u||c.c!=qb||(c=c.o,"*"!=c.f()&&(this.f={name:c.f(),s:null}))}}q(pb);function rb(){r.call(this,4)}q(rb);rb.prototype.a=function(a){var b=new I;a=a.a;9==a.nodeType?K(b,a):K(b,a.ownerDocument);return b};rb.prototype.toString=l("Root Helper Expression");function sb(){r.call(this,4)}q(sb);sb.prototype.a=function(a){var b=new I;K(b,a.a);return b};sb.prototype.toString=l("Context Helper Expression");
function tb(a){return"/"==a||"//"==a}pb.prototype.a=function(a){var b=this.h.a(a);if(!(b instanceof I))throw Error("Filter expression must evaluate to nodeset.");a=this.c;for(var c=0,d=a.length;c<d&&b.l;c++){var e=a[c],f=M(b,e.c.a),g;if(e.g||e.c!=ub)if(e.g||e.c!=vb)for(g=N(f),b=e.a(new t(g));null!=(g=N(f));)g=e.a(new t(g)),b=Ua(b,g);else g=N(f),b=e.a(new t(g));else{for(g=N(f);(b=N(f))&&(!g.contains||g.contains(b))&&b.compareDocumentPosition(g)&8;g=b);b=e.a(new t(g))}}return b};
pb.prototype.toString=function(){var a;a="Path Expression:"+O(this.h);if(this.c.length){var b=x(this.c,function(a,b){return a+O(b)},"Steps:");a+=O(b)}return a};function wb(a,b){this.a=a;this.b=!!b}
function ib(a,b,c){for(c=c||0;c<a.a.length;c++)for(var d=a.a[c],e=M(b),f=b.l,g,k=0;g=N(e);k++){var p=a.b?f-k:k+1;g=d.a(new t(g,p,f));if("number"==typeof g)p=p==g;else if("string"==typeof g||"boolean"==typeof g)p=!!g;else if(g instanceof I)p=0<g.l;else throw Error("Predicate.evaluate returned an unexpected type.");if(!p){p=e;g=p.f;var z=p.a;if(!z)throw Error("Next must be called at least once before remove.");var E=z.b,z=z.a;E?E.a=z:g.a=z;z?z.b=E:g.b=E;g.l--;p.a=null}}return b}
wb.prototype.toString=function(){return x(this.a,function(a,b){return a+O(b)},"Predicates:")};function V(a,b,c,d){r.call(this,4);this.c=a;this.o=b;this.h=c||new wb([]);this.u=!!d;b=this.h;b=0<b.a.length?b.a[0].f:null;a.b&&b&&(a=b.name,a=B?a.toLowerCase():a,this.f={name:a,s:b.s});a:{a=this.h;for(b=0;b<a.a.length;b++)if(c=a.a[b],c.g||1==c.i||0==c.i){a=!0;break a}a=!1}this.g=a}q(V);
V.prototype.a=function(a){var b=a.a,c=null,c=this.f,d=null,e=null,f=0;c&&(d=c.name,e=c.s?Q(c.s,a):null,f=1);if(this.u)if(this.g||this.c!=xb)if(a=M((new V(yb,new L("node"))).a(a)),b=N(a))for(c=this.m(b,d,e,f);null!=(b=N(a));)c=Ua(c,this.m(b,d,e,f));else c=new I;else c=Ma(this.o,b,d,e),c=ib(this.h,c,f);else c=this.m(a.a,d,e,f);return c};V.prototype.m=function(a,b,c,d){a=this.c.f(this.o,a,b,c);return a=ib(this.h,a,d)};
V.prototype.toString=function(){var a;a="Step:"+O("Operator: "+(this.u?"//":"/"));this.c.j&&(a+=O("Axis: "+this.c));a+=O(this.o);if(this.h.a.length){var b=x(this.h.a,function(a,b){return a+O(b)},"Predicates:");a+=O(b)}return a};function zb(a,b,c,d){this.j=a;this.f=b;this.a=c;this.b=d}zb.prototype.toString=h("j");var Ab={};function W(a,b,c,d){if(Ab.hasOwnProperty(a))throw Error("Axis already created: "+a);b=new zb(a,b,c,!!d);return Ab[a]=b}
W("ancestor",function(a,b){for(var c=new I,d=b;d=d.parentNode;)a.a(d)&&Va(c,d);return c},!0);W("ancestor-or-self",function(a,b){var c=new I,d=b;do a.a(d)&&Va(c,d);while(d=d.parentNode);return c},!0);
var qb=W("attribute",function(a,b){var c=new I,d=a.f();if("style"==d&&b.style&&B)return K(c,new C(b.style,b,"style",b.style.cssText)),c;var e=b.attributes;if(e)if(a instanceof L&&null===a.b||"*"==d)for(var d=0,f;f=e[d];d++)B?f.nodeValue&&K(c,Ca(b,f)):K(c,f);else(f=e.getNamedItem(d))&&(B?f.nodeValue&&K(c,Ca(b,f)):K(c,f));return c},!1),xb=W("child",function(a,b,c,d,e){return(B?Ra:Sa).call(null,a,b,n(c)?c:null,n(d)?d:null,e||new I)},!1,!0);W("descendant",Ma,!1,!0);
var yb=W("descendant-or-self",function(a,b,c,d){var e=new I;H(b,c,d)&&a.a(b)&&K(e,b);return Ma(a,b,c,d,e)},!1,!0),ub=W("following",function(a,b,c,d){var e=new I;do for(var f=b;f=f.nextSibling;)H(f,c,d)&&a.a(f)&&K(e,f),e=Ma(a,f,c,d,e);while(b=b.parentNode);return e},!1,!0);W("following-sibling",function(a,b){for(var c=new I,d=b;d=d.nextSibling;)a.a(d)&&K(c,d);return c},!1);W("namespace",function(){return new I},!1);
var Bb=W("parent",function(a,b){var c=new I;if(9==b.nodeType)return c;if(2==b.nodeType)return K(c,b.ownerElement),c;var d=b.parentNode;a.a(d)&&K(c,d);return c},!1),vb=W("preceding",function(a,b,c,d){var e=new I,f=[];do f.unshift(b);while(b=b.parentNode);for(var g=1,k=f.length;g<k;g++){var p=[];for(b=f[g];b=b.previousSibling;)p.unshift(b);for(var z=0,E=p.length;z<E;z++)b=p[z],H(b,c,d)&&a.a(b)&&K(e,b),e=Ma(a,b,c,d,e)}return e},!0,!0);
W("preceding-sibling",function(a,b){for(var c=new I,d=b;d=d.previousSibling;)a.a(d)&&Va(c,d);return c},!0);var Cb=W("self",function(a,b){var c=new I;a.a(b)&&K(c,b);return c},!1);function Db(a){r.call(this,1);this.c=a;this.g=a.g;this.b=a.b}q(Db);Db.prototype.a=function(a){return-P(this.c,a)};Db.prototype.toString=function(){return"Unary Expression: -"+O(this.c)};function Eb(a){r.call(this,4);this.c=a;bb(this,ka(this.c,function(a){return a.g}));cb(this,ka(this.c,function(a){return a.b}))}q(Eb);Eb.prototype.a=function(a){var b=new I;w(this.c,function(c){c=c.a(a);if(!(c instanceof I))throw Error("Path expression must evaluate to NodeSet.");b=Ua(b,c)});return b};Eb.prototype.toString=function(){return x(this.c,function(a,b){return a+O(b)},"Union Expression:")};function Fb(a,b){this.a=a;this.b=b}function Gb(a){for(var b,c=[];;){X(a,"Missing right hand side of binary expression.");b=Hb(a);var d=F(a.a);if(!d)break;var e=(d=gb[d]||null)&&d.w;if(!e){a.a.a--;break}for(;c.length&&e<=c[c.length-1].w;)b=new db(c.pop(),c.pop(),b);c.push(b,d)}for(;c.length;)b=new db(c.pop(),c.pop(),b);return b}function X(a,b){if(Ha(a.a))throw Error(b);}function Ib(a,b){var c=F(a.a);if(c!=b)throw Error("Bad token, expected: "+b+" got: "+c);}
function Jb(a){a=F(a.a);if(")"!=a)throw Error("Bad token: "+a);}function Kb(a){a=F(a.a);if(2>a.length)throw Error("Unclosed literal string");return new nb(a)}function Lb(a){var b=F(a.a),c=b.indexOf(":");if(-1==c)return new J(b);var d=b.substring(0,c);a=a.b(d);if(!a)throw Error("Namespace prefix not declared: "+d);b=b.substr(c+1);return new J(b,a)}
function Mb(a){var b,c=[],d;if(tb(D(a.a))){b=F(a.a);d=D(a.a);if("/"==b&&(Ha(a.a)||"."!=d&&".."!=d&&"@"!=d&&"*"!=d&&!/(?![0-9])[\w]/.test(d)))return new rb;d=new rb;X(a,"Missing next location step.");b=Nb(a,b);c.push(b)}else{a:{b=D(a.a);d=b.charAt(0);switch(d){case "$":throw Error("Variable reference not allowed in HTML XPath");case "(":F(a.a);b=Gb(a);X(a,'unclosed "("');Ib(a,")");break;case '"':case "'":b=Kb(a);break;default:if(isNaN(+b))if(!mb(b)&&/(?![0-9])[\w]/.test(d)&&"("==D(a.a,1)){b=F(a.a);
b=lb[b]||null;F(a.a);for(d=[];")"!=D(a.a);){X(a,"Missing function argument list.");d.push(Gb(a));if(","!=D(a.a))break;F(a.a)}X(a,"Unclosed function argument list.");Jb(a);b=new jb(b,d)}else{b=null;break a}else b=new ob(+F(a.a))}"["==D(a.a)&&(d=new wb(Ob(a)),b=new hb(b,d))}if(b)if(tb(D(a.a)))d=b;else return b;else b=Nb(a,"/"),d=new sb,c.push(b)}for(;tb(D(a.a));)b=F(a.a),X(a,"Missing next location step."),b=Nb(a,b),c.push(b);return new pb(d,c)}
function Nb(a,b){var c,d,e;if("/"!=b&&"//"!=b)throw Error('Step op should be "/" or "//"');if("."==D(a.a))return d=new V(Cb,new L("node")),F(a.a),d;if(".."==D(a.a))return d=new V(Bb,new L("node")),F(a.a),d;var f;if("@"==D(a.a))f=qb,F(a.a),X(a,"Missing attribute name");else if("::"==D(a.a,1)){if(!/(?![0-9])[\w]/.test(D(a.a).charAt(0)))throw Error("Bad token: "+F(a.a));c=F(a.a);f=Ab[c]||null;if(!f)throw Error("No axis with name: "+c);F(a.a);X(a,"Missing node name")}else f=xb;c=D(a.a);if(/(?![0-9])[\w]/.test(c.charAt(0)))if("("==
D(a.a,1)){if(!mb(c))throw Error("Invalid node type: "+c);c=F(a.a);if(!mb(c))throw Error("Invalid type name: "+c);Ib(a,"(");X(a,"Bad nodetype");e=D(a.a).charAt(0);var g=null;if('"'==e||"'"==e)g=Kb(a);X(a,"Bad nodetype");Jb(a);c=new L(c,g)}else c=Lb(a);else if("*"==c)c=Lb(a);else throw Error("Bad token: "+F(a.a));e=new wb(Ob(a),f.a);return d||new V(f,c,e,"//"==b)}
function Ob(a){for(var b=[];"["==D(a.a);){F(a.a);X(a,"Missing predicate expression.");var c=Gb(a);b.push(c);X(a,"Unclosed predicate expression.");Ib(a,"]")}return b}function Hb(a){if("-"==D(a.a))return F(a.a),new Db(Hb(a));var b=Mb(a);if("|"!=D(a.a))a=b;else{for(b=[b];"|"==F(a.a);)X(a,"Missing next union location path."),b.push(Mb(a));a.a.a--;a=new Eb(b)}return a};function Pb(a,b){if(!a.length)throw Error("Empty XPath expression.");var c=Ea(a);if(Ha(c))throw Error("Invalid XPath expression.");b?"function"==ba(b)||(b=ea(b.lookupNamespaceURI,b)):b=l(null);var d=Gb(new Fb(c,b));if(!Ha(c))throw Error("Bad token: "+F(c));this.evaluate=function(a,b){var c=d.a(new t(a));return new Y(c,b)}}
function Y(a,b){if(0==b)if(a instanceof I)b=4;else if("string"==typeof a)b=2;else if("number"==typeof a)b=1;else if("boolean"==typeof a)b=3;else throw Error("Unexpected evaluation result.");if(2!=b&&1!=b&&3!=b&&!(a instanceof I))throw Error("value could not be converted to the specified type");this.resultType=b;var c;switch(b){case 2:this.stringValue=a instanceof I?Xa(a):""+a;break;case 1:this.numberValue=a instanceof I?+Xa(a):+a;break;case 3:this.booleanValue=a instanceof I?0<a.l:!!a;break;case 4:case 5:case 6:case 7:var d=
M(a);c=[];for(var e=N(d);e;e=N(d))c.push(e instanceof C?e.a:e);this.snapshotLength=a.l;this.invalidIteratorState=!1;break;case 8:case 9:d=Wa(a);this.singleNodeValue=d instanceof C?d.a:d;break;default:throw Error("Unknown XPathResult type.");}var f=0;this.iterateNext=function(){if(4!=b&&5!=b)throw Error("iterateNext called with wrong result type");return f>=c.length?null:c[f++]};this.snapshotItem=function(a){if(6!=b&&7!=b)throw Error("snapshotItem called with wrong result type");return a>=c.length||
0>a?null:c[a]}}Y.ANY_TYPE=0;Y.NUMBER_TYPE=1;Y.STRING_TYPE=2;Y.BOOLEAN_TYPE=3;Y.UNORDERED_NODE_ITERATOR_TYPE=4;Y.ORDERED_NODE_ITERATOR_TYPE=5;Y.UNORDERED_NODE_SNAPSHOT_TYPE=6;Y.ORDERED_NODE_SNAPSHOT_TYPE=7;Y.ANY_UNORDERED_NODE_TYPE=8;Y.FIRST_ORDERED_NODE_TYPE=9;function Qb(a){this.lookupNamespaceURI=Za(a)}
function Rb(a){a=a||m;var b=a.document;b.evaluate||(a.XPathResult=Y,b.evaluate=function(a,b,e,f){return(new Pb(a,e)).evaluate(b,f)},b.createExpression=function(a,b){return new Pb(a,b)},b.createNSResolver=function(a){return new Qb(a)})}var Sb=["wgxpath","install"],Z=m;Sb[0]in Z||!Z.execScript||Z.execScript("var "+Sb[0]);for(var Tb;Sb.length&&(Tb=Sb.shift());)Sb.length||void 0===Rb?Z[Tb]?Z=Z[Tb]:Z=Z[Tb]={}:Z[Tb]=Rb;})()

// Export for Node.js.
module.exports.install = wgxpath.install;
module.exports.XPathResultType = {
  ANY_TYPE: 0,
  NUMBER_TYPE: 1,
  STRING_TYPE: 2,
  BOOLEAN_TYPE: 3,
  UNORDERED_NODE_ITERATOR_TYPE: 4,
  ORDERED_NODE_ITERATOR_TYPE: 5,
  UNORDERED_NODE_SNAPSHOT_TYPE: 6,
  ORDERED_NODE_SNAPSHOT_TYPE: 7,
  ANY_UNORDERED_NODE_TYPE: 8,
  FIRST_ORDERED_NODE_TYPE: 9
};

