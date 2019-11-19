/*!
 * Chart.js v2.9.1
 * https://www.chartjs.org
 * (c) 2019 Chart.js Contributors
 * Released under the MIT License
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(function(){try{return require("moment")}catch(t){}}()):"function"==typeof define&&define.amd?define(["require"],function(t){return e(function(){try{return t("moment")}catch(t){}}())}):(t=t||self).Chart=e(t.moment)}(this,function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;var e={rgb2hsl:i,rgb2hsv:n,rgb2hwb:a,rgb2cmyk:o,rgb2keyword:s,rgb2xyz:l,rgb2lab:u,rgb2lch:function(t){return x(u(t))},hsl2rgb:d,hsl2hsv:function(t){var e=t[0],i=t[1]/100,n=t[2]/100;if(0===n)return[0,0,0];return[e,100*(2*(i*=(n*=2)<=1?n:2-n)/(n+i)),100*((n+i)/2)]},hsl2hwb:function(t){return a(d(t))},hsl2cmyk:function(t){return o(d(t))},hsl2keyword:function(t){return s(d(t))},hsv2rgb:h,hsv2hsl:function(t){var e,i,n=t[0],a=t[1]/100,r=t[2]/100;return e=a*r,[n,100*(e=(e/=(i=(2-a)*r)<=1?i:2-i)||0),100*(i/=2)]},hsv2hwb:function(t){return a(h(t))},hsv2cmyk:function(t){return o(h(t))},hsv2keyword:function(t){return s(h(t))},hwb2rgb:c,hwb2hsl:function(t){return i(c(t))},hwb2hsv:function(t){return n(c(t))},hwb2cmyk:function(t){return o(c(t))},hwb2keyword:function(t){return s(c(t))},cmyk2rgb:f,cmyk2hsl:function(t){return i(f(t))},cmyk2hsv:function(t){return n(f(t))},cmyk2hwb:function(t){return a(f(t))},cmyk2keyword:function(t){return s(f(t))},keyword2rgb:k,keyword2hsl:function(t){return i(k(t))},keyword2hsv:function(t){return n(k(t))},keyword2hwb:function(t){return a(k(t))},keyword2cmyk:function(t){return o(k(t))},keyword2lab:function(t){return u(k(t))},keyword2xyz:function(t){return l(k(t))},xyz2rgb:p,xyz2lab:m,xyz2lch:function(t){return x(m(t))},lab2xyz:v,lab2rgb:y,lab2lch:x,lch2lab:_,lch2xyz:function(t){return v(_(t))},lch2rgb:function(t){return y(_(t))}};function i(t){var e,i,n=t[0]/255,a=t[1]/255,r=t[2]/255,o=Math.min(n,a,r),s=Math.max(n,a,r),l=s-o;return s==o?e=0:n==s?e=(a-r)/l:a==s?e=2+(r-n)/l:r==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),i=(o+s)/2,[e,100*(s==o?0:i<=.5?l/(s+o):l/(2-s-o)),100*i]}function n(t){var e,i,n=t[0],a=t[1],r=t[2],o=Math.min(n,a,r),s=Math.max(n,a,r),l=s-o;return i=0==s?0:l/s*1e3/10,s==o?e=0:n==s?e=(a-r)/l:a==s?e=2+(r-n)/l:r==s&&(e=4+(n-a)/l),(e=Math.min(60*e,360))<0&&(e+=360),[e,i,s/255*1e3/10]}function a(t){var e=t[0],n=t[1],a=t[2];return[i(t)[0],100*(1/255*Math.min(e,Math.min(n,a))),100*(a=1-1/255*Math.max(e,Math.max(n,a)))]}function o(t){var e,i=t[0]/255,n=t[1]/255,a=t[2]/255;return[100*((1-i-(e=Math.min(1-i,1-n,1-a)))/(1-e)||0),100*((1-n-e)/(1-e)||0),100*((1-a-e)/(1-e)||0),100*e]}function s(t){return M[JSON.stringify(t)]}function l(t){var e=t[0]/255,i=t[1]/255,n=t[2]/255;return[100*(.4124*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.3576*(i=i>.04045?Math.pow((i+.055)/1.055,2.4):i/12.92)+.1805*(n=n>.04045?Math.pow((n+.055)/1.055,2.4):n/12.92)),100*(.2126*e+.7152*i+.0722*n),100*(.0193*e+.1192*i+.9505*n)]}function u(t){var e=l(t),i=e[0],n=e[1],a=e[2];return n/=100,a/=108.883,i=(i/=95.047)>.008856?Math.pow(i,1/3):7.787*i+16/116,[116*(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116)-16,500*(i-n),200*(n-(a=a>.008856?Math.pow(a,1/3):7.787*a+16/116))]}function d(t){var e,i,n,a,r,o=t[0]/360,s=t[1]/100,l=t[2]/100;if(0==s)return[r=255*l,r,r];e=2*l-(i=l<.5?l*(1+s):l+s-l*s),a=[0,0,0];for(var u=0;u<3;u++)(n=o+1/3*-(u-1))<0&&n++,n>1&&n--,r=6*n<1?e+6*(i-e)*n:2*n<1?i:3*n<2?e+(i-e)*(2/3-n)*6:e,a[u]=255*r;return a}function h(t){var e=t[0]/60,i=t[1]/100,n=t[2]/100,a=Math.floor(e)%6,r=e-Math.floor(e),o=255*n*(1-i),s=255*n*(1-i*r),l=255*n*(1-i*(1-r));n*=255;switch(a){case 0:return[n,l,o];case 1:return[s,n,o];case 2:return[o,n,l];case 3:return[o,s,n];case 4:return[l,o,n];case 5:return[n,o,s]}}function c(t){var e,i,n,a,o=t[0]/360,s=t[1]/100,l=t[2]/100,u=s+l;switch(u>1&&(s/=u,l/=u),n=6*o-(e=Math.floor(6*o)),0!=(1&e)&&(n=1-n),a=s+n*((i=1-l)-s),e){default:case 6:case 0:r=i,g=a,b=s;break;case 1:r=a,g=i,b=s;break;case 2:r=s,g=i,b=a;break;case 3:r=s,g=a,b=i;break;case 4:r=a,g=s,b=i;break;case 5:r=i,g=s,b=a}return[255*r,255*g,255*b]}function f(t){var e=t[0]/100,i=t[1]/100,n=t[2]/100,a=t[3]/100;return[255*(1-Math.min(1,e*(1-a)+a)),255*(1-Math.min(1,i*(1-a)+a)),255*(1-Math.min(1,n*(1-a)+a))]}function p(t){var e,i,n,a=t[0]/100,r=t[1]/100,o=t[2]/100;return i=-.9689*a+1.8758*r+.0415*o,n=.0557*a+-.204*r+1.057*o,e=(e=3.2406*a+-1.5372*r+-.4986*o)>.0031308?1.055*Math.pow(e,1/2.4)-.055:e*=12.92,i=i>.0031308?1.055*Math.pow(i,1/2.4)-.055:i*=12.92,n=n>.0031308?1.055*Math.pow(n,1/2.4)-.055:n*=12.92,[255*(e=Math.min(Math.max(0,e),1)),255*(i=Math.min(Math.max(0,i),1)),255*(n=Math.min(Math.max(0,n),1))]}function m(t){var e=t[0],i=t[1],n=t[2];return i/=100,n/=108.883,e=(e/=95.047)>.008856?Math.pow(e,1/3):7.787*e+16/116,[116*(i=i>.008856?Math.pow(i,1/3):7.787*i+16/116)-16,500*(e-i),200*(i-(n=n>.008856?Math.pow(n,1/3):7.787*n+16/116))]}function v(t){var e,i,n,a,r=t[0],o=t[1],s=t[2];return r<=8?a=(i=100*r/903.3)/100*7.787+16/116:(i=100*Math.pow((r+16)/116,3),a=Math.pow(i/100,1/3)),[e=e/95.047<=.008856?e=95.047*(o/500+a-16/116)/7.787:95.047*Math.pow(o/500+a,3),i,n=n/108.883<=.008859?n=108.883*(a-s/200-16/116)/7.787:108.883*Math.pow(a-s/200,3)]}function x(t){var e,i=t[0],n=t[1],a=t[2];return(e=360*Math.atan2(a,n)/2/Math.PI)<0&&(e+=360),[i,Math.sqrt(n*n+a*a),e]}function y(t){return p(v(t))}function _(t){var e,i=t[0],n=t[1];return e=t[2]/360*2*Math.PI,[i,n*Math.cos(e),n*Math.sin(e)]}function k(t){return w[t]}var w={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},M={};for(var S in w)M[JSON.stringify(w[S])]=S;var C=function(){return new I};for(var P in e){C[P+"Raw"]=function(t){return function(i){return"number"==typeof i&&(i=Array.prototype.slice.call(arguments)),e[t](i)}}(P);var A=/(\w+)2(\w+)/.exec(P),D=A[1],T=A[2];(C[D]=C[D]||{})[T]=C[P]=function(t){return function(i){"number"==typeof i&&(i=Array.prototype.slice.call(arguments));var n=e[t](i);if("string"==typeof n||void 0===n)return n;for(var a=0;a<n.length;a++)n[a]=Math.round(n[a]);return n}}(P)}var I=function(){this.convs={}};I.prototype.routeSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i))},I.prototype.setValues=function(t,e){return this.space=t,this.convs={},this.convs[t]=e,this},I.prototype.getValues=function(t){var e=this.convs[t];if(!e){var i=this.space,n=this.convs[i];e=C[i][t](n),this.convs[t]=e}return e},["rgb","hsl","hsv","cmyk","keyword"].forEach(function(t){I.prototype[t]=function(e){return this.routeSpace(t,arguments)}});var F=C,L={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]},O={getRgba:R,getHsla:z,getRgb:function(t){var e=R(t);return e&&e.slice(0,3)},getHsl:function(t){var e=z(t);return e&&e.slice(0,3)},getHwb:N,getAlpha:function(t){var e=R(t);if(e)return e[3];if(e=z(t))return e[3];if(e=N(t))return e[3]},hexString:function(t,e){e=void 0!==e&&3===t.length?e:t[3];return"#"+H(t[0])+H(t[1])+H(t[2])+(e>=0&&e<1?H(Math.round(255*e)):"")},rgbString:function(t,e){if(e<1||t[3]&&t[3]<1)return B(t,e);return"rgb("+t[0]+", "+t[1]+", "+t[2]+")"},rgbaString:B,percentString:function(t,e){if(e<1||t[3]&&t[3]<1)return E(t,e);var i=Math.round(t[0]/255*100),n=Math.round(t[1]/255*100),a=Math.round(t[2]/255*100);return"rgb("+i+"%, "+n+"%, "+a+"%)"},percentaString:E,hslString:function(t,e){if(e<1||t[3]&&t[3]<1)return V(t,e);return"hsl("+t[0]+", "+t[1]+"%, "+t[2]+"%)"},hslaString:V,hwbString:function(t,e){void 0===e&&(e=void 0!==t[3]?t[3]:1);return"hwb("+t[0]+", "+t[1]+"%, "+t[2]+"%"+(void 0!==e&&1!==e?", "+e:"")+")"},keyword:function(t){return j[t.slice(0,3)]}};function R(t){if(t){var e=[0,0,0],i=1,n=t.match(/^#([a-fA-F0-9]{3,4})$/i),a="";if(n){a=(n=n[1])[3];for(var r=0;r<e.length;r++)e[r]=parseInt(n[r]+n[r],16);a&&(i=Math.round(parseInt(a+a,16)/255*100)/100)}else if(n=t.match(/^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i)){a=n[2],n=n[1];for(r=0;r<e.length;r++)e[r]=parseInt(n.slice(2*r,2*r+2),16);a&&(i=Math.round(parseInt(a,16)/255*100)/100)}else if(n=t.match(/^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=parseInt(n[r+1]);i=parseFloat(n[4])}else if(n=t.match(/^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i)){for(r=0;r<e.length;r++)e[r]=Math.round(2.55*parseFloat(n[r+1]));i=parseFloat(n[4])}else if(n=t.match(/(\w+)/)){if("transparent"==n[1])return[0,0,0,0];if(!(e=L[n[1]]))return}for(r=0;r<e.length;r++)e[r]=W(e[r],0,255);return i=i||0==i?W(i,0,1):1,e[3]=i,e}}function z(t){if(t){var e=t.match(/^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[W(parseInt(e[1]),0,360),W(parseFloat(e[2]),0,100),W(parseFloat(e[3]),0,100),W(isNaN(i)?1:i,0,1)]}}}function N(t){if(t){var e=t.match(/^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/);if(e){var i=parseFloat(e[4]);return[W(parseInt(e[1]),0,360),W(parseFloat(e[2]),0,100),W(parseFloat(e[3]),0,100),W(isNaN(i)?1:i,0,1)]}}}function B(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"rgba("+t[0]+", "+t[1]+", "+t[2]+", "+e+")"}function E(t,e){return"rgba("+Math.round(t[0]/255*100)+"%, "+Math.round(t[1]/255*100)+"%, "+Math.round(t[2]/255*100)+"%, "+(e||t[3]||1)+")"}function V(t,e){return void 0===e&&(e=void 0!==t[3]?t[3]:1),"hsla("+t[0]+", "+t[1]+"%, "+t[2]+"%, "+e+")"}function W(t,e,i){return Math.min(Math.max(e,t),i)}function H(t){var e=t.toString(16).toUpperCase();return e.length<2?"0"+e:e}var j={};for(var q in L)j[L[q]]=q;var U=function(t){return t instanceof U?t:this instanceof U?(this.valid=!1,this.values={rgb:[0,0,0],hsl:[0,0,0],hsv:[0,0,0],hwb:[0,0,0],cmyk:[0,0,0,0],alpha:1},void("string"==typeof t?(e=O.getRgba(t))?this.setValues("rgb",e):(e=O.getHsla(t))?this.setValues("hsl",e):(e=O.getHwb(t))&&this.setValues("hwb",e):"object"==typeof t&&(void 0!==(e=t).r||void 0!==e.red?this.setValues("rgb",e):void 0!==e.l||void 0!==e.lightness?this.setValues("hsl",e):void 0!==e.v||void 0!==e.value?this.setValues("hsv",e):void 0!==e.w||void 0!==e.whiteness?this.setValues("hwb",e):void 0===e.c&&void 0===e.cyan||this.setValues("cmyk",e)))):new U(t);var e};U.prototype={isValid:function(){return this.valid},rgb:function(){return this.setSpace("rgb",arguments)},hsl:function(){return this.setSpace("hsl",arguments)},hsv:function(){return this.setSpace("hsv",arguments)},hwb:function(){return this.setSpace("hwb",arguments)},cmyk:function(){return this.setSpace("cmyk",arguments)},rgbArray:function(){return this.values.rgb},hslArray:function(){return this.values.hsl},hsvArray:function(){return this.values.hsv},hwbArray:function(){var t=this.values;return 1!==t.alpha?t.hwb.concat([t.alpha]):t.hwb},cmykArray:function(){return this.values.cmyk},rgbaArray:function(){var t=this.values;return t.rgb.concat([t.alpha])},hslaArray:function(){var t=this.values;return t.hsl.concat([t.alpha])},alpha:function(t){return void 0===t?this.values.alpha:(this.setValues("alpha",t),this)},red:function(t){return this.setChannel("rgb",0,t)},green:function(t){return this.setChannel("rgb",1,t)},blue:function(t){return this.setChannel("rgb",2,t)},hue:function(t){return t&&(t=(t%=360)<0?360+t:t),this.setChannel("hsl",0,t)},saturation:function(t){return this.setChannel("hsl",1,t)},lightness:function(t){return this.setChannel("hsl",2,t)},saturationv:function(t){return this.setChannel("hsv",1,t)},whiteness:function(t){return this.setChannel("hwb",1,t)},blackness:function(t){return this.setChannel("hwb",2,t)},value:function(t){return this.setChannel("hsv",2,t)},cyan:function(t){return this.setChannel("cmyk",0,t)},magenta:function(t){return this.setChannel("cmyk",1,t)},yellow:function(t){return this.setChannel("cmyk",2,t)},black:function(t){return this.setChannel("cmyk",3,t)},hexString:function(){return O.hexString(this.values.rgb)},rgbString:function(){return O.rgbString(this.values.rgb,this.values.alpha)},rgbaString:function(){return O.rgbaString(this.values.rgb,this.values.alpha)},percentString:function(){return O.percentString(this.values.rgb,this.values.alpha)},hslString:function(){return O.hslString(this.values.hsl,this.values.alpha)},hslaString:function(){return O.hslaString(this.values.hsl,this.values.alpha)},hwbString:function(){return O.hwbString(this.values.hwb,this.values.alpha)},keyword:function(){return O.keyword(this.values.rgb,this.values.alpha)},rgbNumber:function(){var t=this.values.rgb;return t[0]<<16|t[1]<<8|t[2]},luminosity:function(){for(var t=this.values.rgb,e=[],i=0;i<t.length;i++){var n=t[i]/255;e[i]=n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4)}return.2126*e[0]+.7152*e[1]+.0722*e[2]},contrast:function(t){var e=this.luminosity(),i=t.luminosity();return e>i?(e+.05)/(i+.05):(i+.05)/(e+.05)},level:function(t){var e=this.contrast(t);return e>=7.1?"AAA":e>=4.5?"AA":""},dark:function(){var t=this.values.rgb;return(299*t[0]+587*t[1]+114*t[2])/1e3<128},light:function(){return!this.dark()},negate:function(){for(var t=[],e=0;e<3;e++)t[e]=255-this.values.rgb[e];return this.setValues("rgb",t),this},lighten:function(t){var e=this.values.hsl;return e[2]+=e[2]*t,this.setValues("hsl",e),this},darken:function(t){var e=this.values.hsl;return e[2]-=e[2]*t,this.setValues("hsl",e),this},saturate:function(t){var e=this.values.hsl;return e[1]+=e[1]*t,this.setValues("hsl",e),this},desaturate:function(t){var e=this.values.hsl;return e[1]-=e[1]*t,this.setValues("hsl",e),this},whiten:function(t){var e=this.values.hwb;return e[1]+=e[1]*t,this.setValues("hwb",e),this},blacken:function(t){var e=this.values.hwb;return e[2]+=e[2]*t,this.setValues("hwb",e),this},greyscale:function(){var t=this.values.rgb,e=.3*t[0]+.59*t[1]+.11*t[2];return this.setValues("rgb",[e,e,e]),this},clearer:function(t){var e=this.values.alpha;return this.setValues("alpha",e-e*t),this},opaquer:function(t){var e=this.values.alpha;return this.setValues("alpha",e+e*t),this},rotate:function(t){var e=this.values.hsl,i=(e[0]+t)%360;return e[0]=i<0?360+i:i,this.setValues("hsl",e),this},mix:function(t,e){var i=t,n=void 0===e?.5:e,a=2*n-1,r=this.alpha()-i.alpha(),o=((a*r==-1?a:(a+r)/(1+a*r))+1)/2,s=1-o;return this.rgb(o*this.red()+s*i.red(),o*this.green()+s*i.green(),o*this.blue()+s*i.blue()).alpha(this.alpha()*n+i.alpha()*(1-n))},toJSON:function(){return this.rgb()},clone:function(){var t,e,i=new U,n=this.values,a=i.values;for(var r in n)n.hasOwnProperty(r)&&(t=n[r],"[object Array]"===(e={}.toString.call(t))?a[r]=t.slice(0):"[object Number]"===e?a[r]=t:console.error("unexpected color value:",t));return i}},U.prototype.spaces={rgb:["red","green","blue"],hsl:["hue","saturation","lightness"],hsv:["hue","saturation","value"],hwb:["hue","whiteness","blackness"],cmyk:["cyan","magenta","yellow","black"]},U.prototype.maxes={rgb:[255,255,255],hsl:[360,100,100],hsv:[360,100,100],hwb:[360,100,100],cmyk:[100,100,100,100]},U.prototype.getValues=function(t){for(var e=this.values,i={},n=0;n<t.length;n++)i[t.charAt(n)]=e[t][n];return 1!==e.alpha&&(i.a=e.alpha),i},U.prototype.setValues=function(t,e){var i,n,a=this.values,r=this.spaces,o=this.maxes,s=1;if(this.valid=!0,"alpha"===t)s=e;else if(e.length)a[t]=e.slice(0,t.length),s=e[t.length];else if(void 0!==e[t.charAt(0)]){for(i=0;i<t.length;i++)a[t][i]=e[t.charAt(i)];s=e.a}else if(void 0!==e[r[t][0]]){var l=r[t];for(i=0;i<t.length;i++)a[t][i]=e[l[i]];s=e.alpha}if(a.alpha=Math.max(0,Math.min(1,void 0===s?a.alpha:s)),"alpha"===t)return!1;for(i=0;i<t.length;i++)n=Math.max(0,Math.min(o[t][i],a[t][i])),a[t][i]=Math.round(n);for(var u in r)u!==t&&(a[u]=F[t][u](a[t]));return!0},U.prototype.setSpace=function(t,e){var i=e[0];return void 0===i?this.getValues(t):("number"==typeof i&&(i=Array.prototype.slice.call(e)),this.setValues(t,i),this)},U.prototype.setChannel=function(t,e,i){var n=this.values[t];return void 0===i?n[e]:i===n[e]?this:(n[e]=i,this.setValues(t,n),this)},"undefined"!=typeof window&&(window.Color=U);var Y,G=U,X={noop:function(){},uid:(Y=0,function(){return Y++}),isNullOrUndef:function(t){return null==t},isArray:function(t){if(Array.isArray&&Array.isArray(t))return!0;var e=Object.prototype.toString.call(t);return"[object"===e.substr(0,7)&&"Array]"===e.substr(-6)},isObject:function(t){return null!==t&&"[object Object]"===Object.prototype.toString.call(t)},isFinite:function(t){return("number"==typeof t||t instanceof Number)&&isFinite(t)},valueOrDefault:function(t,e){return void 0===t?e:t},valueAtIndexOrDefault:function(t,e,i){return X.valueOrDefault(X.isArray(t)?t[e]:t,i)},callback:function(t,e,i){if(t&&"function"==typeof t.call)return t.apply(i,e)},each:function(t,e,i,n){var a,r,o;if(X.isArray(t))if(r=t.length,n)for(a=r-1;a>=0;a--)e.call(i,t[a],a);else for(a=0;a<r;a++)e.call(i,t[a],a);else if(X.isObject(t))for(r=(o=Object.keys(t)).length,a=0;a<r;a++)e.call(i,t[o[a]],o[a])},arrayEquals:function(t,e){var i,n,a,r;if(!t||!e||t.length!==e.length)return!1;for(i=0,n=t.length;i<n;++i)if(a=t[i],r=e[i],a instanceof Array&&r instanceof Array){if(!X.arrayEquals(a,r))return!1}else if(a!==r)return!1;return!0},clone:function(t){if(X.isArray(t))return t.map(X.clone);if(X.isObject(t)){for(var e={},i=Object.keys(t),n=i.length,a=0;a<n;++a)e[i[a]]=X.clone(t[i[a]]);return e}return t},_merger:function(t,e,i,n){var a=e[t],r=i[t];X.isObject(a)&&X.isObject(r)?X.merge(a,r,n):e[t]=X.clone(r)},_mergerIf:function(t,e,i){var n=e[t],a=i[t];X.isObject(n)&&X.isObject(a)?X.mergeIf(n,a):e.hasOwnProperty(t)||(e[t]=X.clone(a))},merge:function(t,e,i){var n,a,r,o,s,l=X.isArray(e)?e:[e],u=l.length;if(!X.isObject(t))return t;for(n=(i=i||{}).merger||X._merger,a=0;a<u;++a)if(e=l[a],X.isObject(e))for(s=0,o=(r=Object.keys(e)).length;s<o;++s)n(r[s],t,e,i);return t},mergeIf:function(t,e){return X.merge(t,e,{merger:X._mergerIf})},extend:Object.assign||function(t){return X.merge(t,[].slice.call(arguments,1),{merger:function(t,e,i){e[t]=i[t]}})},inherits:function(t){var e=this,i=t&&t.hasOwnProperty("constructor")?t.constructor:function(){return e.apply(this,arguments)},n=function(){this.constructor=i};return n.prototype=e.prototype,i.prototype=new n,i.extend=X.inherits,t&&X.extend(i.prototype,t),i.__super__=e.prototype,i},_deprecated:function(t,e,i,n){void 0!==e&&console.warn(t+': "'+i+'" is deprecated. Please use "'+n+'" instead')}},K=X;X.callCallback=X.callback,X.indexOf=function(t,e,i){return Array.prototype.indexOf.call(t,e,i)},X.getValueOrDefault=X.valueOrDefault,X.getValueAtIndexOrDefault=X.valueAtIndexOrDefault;var Z={linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return-t*(t-2)},easeInOutQuad:function(t){return(t/=.5)<1?.5*t*t:-.5*(--t*(t-2)-1)},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return(t-=1)*t*t+1},easeInOutCubic:function(t){return(t/=.5)<1?.5*t*t*t:.5*((t-=2)*t*t+2)},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return-((t-=1)*t*t*t-1)},easeInOutQuart:function(t){return(t/=.5)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return(t-=1)*t*t*t*t+1},easeInOutQuint:function(t){return(t/=.5)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)},easeInSine:function(t){return 1-Math.cos(t*(Math.PI/2))},easeOutSine:function(t){return Math.sin(t*(Math.PI/2))},easeInOutSine:function(t){return-.5*(Math.cos(Math.PI*t)-1)},easeInExpo:function(t){return 0===t?0:Math.pow(2,10*(t-1))},easeOutExpo:function(t){return 1===t?1:1-Math.pow(2,-10*t)},easeInOutExpo:function(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))},easeInCirc:function(t){return t>=1?t:-(Math.sqrt(1-t*t)-1)},easeOutCirc:function(t){return Math.sqrt(1-(t-=1)*t)},easeInOutCirc:function(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)},easeInElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),-n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i))},easeOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:1===t?1:(i||(i=.3),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),n*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/i)+1)},easeInOutElastic:function(t){var e=1.70158,i=0,n=1;return 0===t?0:2==(t/=.5)?1:(i||(i=.45),n<1?(n=1,e=i/4):e=i/(2*Math.PI)*Math.asin(1/n),t<1?n*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*-.5:n*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/i)*.5+1)},easeInBack:function(t){var e=1.70158;return t*t*((e+1)*t-e)},easeOutBack:function(t){var e=1.70158;return(t-=1)*t*((e+1)*t+e)+1},easeInOutBack:function(t){var e=1.70158;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)},easeInBounce:function(t){return 1-Z.easeOutBounce(1-t)},easeOutBounce:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},easeInOutBounce:function(t){return t<.5?.5*Z.easeInBounce(2*t):.5*Z.easeOutBounce(2*t-1)+.5}},$={effects:Z};K.easingEffects=Z;var J=Math.PI,Q=J/180,tt=2*J,et=J/2,it=J/4,nt=2*J/3,at={clear:function(t){t.ctx.clearRect(0,0,t.width,t.height)},roundedRect:function(t,e,i,n,a,r){if(r){var o=Math.min(r,a/2,n/2),s=e+o,l=i+o,u=e+n-o,d=i+a-o;t.moveTo(e,l),s<u&&l<d?(t.arc(s,l,o,-J,-et),t.arc(u,l,o,-et,0),t.arc(u,d,o,0,et),t.arc(s,d,o,et,J)):s<u?(t.moveTo(s,i),t.arc(u,l,o,-et,et),t.arc(s,l,o,et,J+et)):l<d?(t.arc(s,l,o,-J,0),t.arc(s,d,o,0,J)):t.arc(s,l,o,-J,J),t.closePath(),t.moveTo(e,i)}else t.rect(e,i,n,a)},drawPoint:function(t,e,i,n,a,r){var o,s,l,u,d,h=(r||0)*Q;if(e&&"object"==typeof e&&("[object HTMLImageElement]"===(o=e.toString())||"[object HTMLCanvasElement]"===o))return t.save(),t.translate(n,a),t.rotate(h),t.drawImage(e,-e.width/2,-e.height/2,e.width,e.height),void t.restore();if(!(isNaN(i)||i<=0)){switch(t.beginPath(),e){default:t.arc(n,a,i,0,tt),t.closePath();break;case"triangle":t.moveTo(n+Math.sin(h)*i,a-Math.cos(h)*i),h+=nt,t.lineTo(n+Math.sin(h)*i,a-Math.cos(h)*i),h+=nt,t.lineTo(n+Math.sin(h)*i,a-Math.cos(h)*i),t.closePath();break;case"rectRounded":u=i-(d=.516*i),s=Math.cos(h+it)*u,l=Math.sin(h+it)*u,t.arc(n-s,a-l,d,h-J,h-et),t.arc(n+l,a-s,d,h-et,h),t.arc(n+s,a+l,d,h,h+et),t.arc(n-l,a+s,d,h+et,h+J),t.closePath();break;case"rect":if(!r){u=Math.SQRT1_2*i,t.rect(n-u,a-u,2*u,2*u);break}h+=it;case"rectRot":s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+l,a-s),t.lineTo(n+s,a+l),t.lineTo(n-l,a+s),t.closePath();break;case"crossRot":h+=it;case"cross":s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n+l,a-s),t.lineTo(n-l,a+s);break;case"star":s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n+l,a-s),t.lineTo(n-l,a+s),h+=it,s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l),t.moveTo(n+l,a-s),t.lineTo(n-l,a+s);break;case"line":s=Math.cos(h)*i,l=Math.sin(h)*i,t.moveTo(n-s,a-l),t.lineTo(n+s,a+l);break;case"dash":t.moveTo(n,a),t.lineTo(n+Math.cos(h)*i,a+Math.sin(h)*i)}t.fill(),t.stroke()}},_isPointInArea:function(t,e){return t.x>e.left-1e-6&&t.x<e.right+1e-6&&t.y>e.top-1e-6&&t.y<e.bottom+1e-6},clipArea:function(t,e){t.save(),t.beginPath(),t.rect(e.left,e.top,e.right-e.left,e.bottom-e.top),t.clip()},unclipArea:function(t){t.restore()},lineTo:function(t,e,i,n){var a=i.steppedLine;if(a){if("middle"===a){var r=(e.x+i.x)/2;t.lineTo(r,n?i.y:e.y),t.lineTo(r,n?e.y:i.y)}else"after"===a&&!n||"after"!==a&&n?t.lineTo(e.x,i.y):t.lineTo(i.x,e.y);t.lineTo(i.x,i.y)}else i.tension?t.bezierCurveTo(n?e.controlPointPreviousX:e.controlPointNextX,n?e.controlPointPreviousY:e.controlPointNextY,n?i.controlPointNextX:i.controlPointPreviousX,n?i.controlPointNextY:i.controlPointPreviousY,i.x,i.y):t.lineTo(i.x,i.y)}},rt=at;K.clear=at.clear,K.drawRoundedRectangle=function(t){t.beginPath(),at.roundedRect.apply(at,arguments)};var ot={_set:function(t,e){return K.merge(this[t]||(this[t]={}),e)}};ot._set("global",{defaultColor:"rgba(0,0,0,0.1)",defaultFontColor:"#666",defaultFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",defaultFontSize:12,defaultFontStyle:"normal",defaultLineHeight:1.2,showLines:!0});var st=ot,lt=K.valueOrDefault;var ut={toLineHeight:function(t,e){var i=(""+t).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);if(!i||"normal"===i[1])return 1.2*e;switch(t=+i[2],i[3]){case"px":return t;case"%":t/=100}return e*t},toPadding:function(t){var e,i,n,a;return K.isObject(t)?(e=+t.top||0,i=+t.right||0,n=+t.bottom||0,a=+t.left||0):e=i=n=a=+t||0,{top:e,right:i,bottom:n,left:a,height:e+n,width:a+i}},_parseFont:function(t){var e=st.global,i=lt(t.fontSize,e.defaultFontSize),n={family:lt(t.fontFamily,e.defaultFontFamily),lineHeight:K.options.toLineHeight(lt(t.lineHeight,e.defaultLineHeight),i),size:i,style:lt(t.fontStyle,e.defaultFontStyle),weight:null,string:""};return n.string=function(t){return!t||K.isNullOrUndef(t.size)||K.isNullOrUndef(t.family)?null:(t.style?t.style+" ":"")+(t.weight?t.weight+" ":"")+t.size+"px "+t.family}(n),n},resolve:function(t,e,i,n){var a,r,o,s=!0;for(a=0,r=t.length;a<r;++a)if(void 0!==(o=t[a])&&(void 0!==e&&"function"==typeof o&&(o=o(e),s=!1),void 0!==i&&K.isArray(o)&&(o=o[i],s=!1),void 0!==o))return n&&!s&&(n.cacheable=!1),o}},dt={_factorize:function(t){var e,i=[],n=Math.sqrt(t);for(e=1;e<n;e++)t%e==0&&(i.push(e),i.push(t/e));return n===(0|n)&&i.push(n),i.sort(function(t,e){return t-e}).pop(),i},log10:Math.log10||function(t){var e=Math.log(t)*Math.LOG10E,i=Math.round(e);return t===Math.pow(10,i)?i:e}},ht=dt;K.log10=dt.log10;var ct=K,ft=$,gt=rt,pt=ut,mt=ht,vt={getRtlAdapter:function(t,e,i){return t?function(t,e){return{x:function(i){return t+t+e-i},setWidth:function(t){e=t},textAlign:function(t){return"center"===t?t:"right"===t?"left":"right"},xPlus:function(t,e){return t-e},leftForLtr:function(t,e){return t-e}}}(e,i):{x:function(t){return t},setWidth:function(t){},textAlign:function(t){return t},xPlus:function(t,e){return t+e},leftForLtr:function(t,e){return t}}},overrideTextDirection:function(t,e){var i,n;"ltr"!==e&&"rtl"!==e||(n=[(i=t.canvas.style).getPropertyValue("direction"),i.getPropertyPriority("direction")],i.setProperty("direction",e,"important"),t.prevTextDirection=n)},restoreTextDirection:function(t){var e=t.prevTextDirection;void 0!==e&&(delete t.prevTextDirection,t.canvas.style.setProperty("direction",e[0],e[1]))}};ct.easing=ft,ct.canvas=gt,ct.options=pt,ct.math=mt,ct.rtl=vt;var bt=function(t){ct.extend(this,t),this.initialize.apply(this,arguments)};ct.extend(bt.prototype,{_type:void 0,initialize:function(){this.hidden=!1},pivot:function(){var t=this;return t._view||(t._view=ct.extend({},t._model)),t._start={},t},transition:function(t){var e=this,i=e._model,n=e._start,a=e._view;return i&&1!==t?(a||(a=e._view={}),n||(n=e._start={}),function(t,e,i,n){var a,r,o,s,l,u,d,h,c,f=Object.keys(i);for(a=0,r=f.length;a<r;++a)if(u=i[o=f[a]],e.hasOwnProperty(o)||(e[o]=u),(s=e[o])!==u&&"_"!==o[0]){if(t.hasOwnProperty(o)||(t[o]=s),(d=typeof u)===typeof(l=t[o]))if("string"===d){if((h=G(l)).valid&&(c=G(u)).valid){e[o]=c.mix(h,n).rgbString();continue}}else if(ct.isFinite(l)&&ct.isFinite(u)){e[o]=l+(u-l)*n;continue}e[o]=u}}(n,a,i,t),e):(e._view=ct.extend({},i),e._start=null,e)},tooltipPosition:function(){return{x:this._model.x,y:this._model.y}},hasValue:function(){return ct.isNumber(this._model.x)&&ct.isNumber(this._model.y)}}),bt.extend=ct.inherits;var xt=bt,yt=xt.extend({chart:null,currentStep:0,numSteps:60,easing:"",render:null,onAnimationProgress:null,onAnimationComplete:null}),_t=yt;Object.defineProperty(yt.prototype,"animationObject",{get:function(){return this}}),Object.defineProperty(yt.prototype,"chartInstance",{get:function(){return this.chart},set:function(t){this.chart=t}}),st._set("global",{animation:{duration:1e3,easing:"easeOutQuart",onProgress:ct.noop,onComplete:ct.noop}});var kt={animations:[],request:null,addAnimation:function(t,e,i,n){var a,r,o=this.animations;for(e.chart=t,e.startTime=Date.now(),e.duration=i,n||(t.animating=!0),a=0,r=o.length;a<r;++a)if(o[a].chart===t)return void(o[a]=e);o.push(e),1===o.length&&this.requestAnimationFrame()},cancelAnimation:function(t){var e=ct.findIndex(this.animations,function(e){return e.chart===t});-1!==e&&(this.animations.splice(e,1),t.animating=!1)},requestAnimationFrame:function(){var t=this;null===t.request&&(t.request=ct.requestAnimFrame.call(window,function(){t.request=null,t.startDigest()}))},startDigest:function(){this.advance(),this.animations.length>0&&this.requestAnimationFrame()},advance:function(){for(var t,e,i,n,a=this.animations,r=0;r<a.length;)e=(t=a[r]).chart,i=t.numSteps,n=Math.floor((Date.now()-t.startTime)/t.duration*i)+1,t.currentStep=Math.min(n,i),ct.callback(t.render,[e,t],e),ct.callback(t.onAnimationProgress,[t],e),t.currentStep>=i?(ct.callback(t.onAnimationComplete,[t],e),e.animating=!1,a.splice(r,1)):++r}},wt=ct.options.resolve,Mt=["push","pop","shift","splice","unshift"];function St(t,e){var i=t._chartjs;if(i){var n=i.listeners,a=n.indexOf(e);-1!==a&&n.splice(a,1),n.length>0||(Mt.forEach(function(e){delete t[e]}),delete t._chartjs)}}var Ct=function(t,e){this.initialize(t,e)};ct.extend(Ct.prototype,{datasetElementType:null,dataElementType:null,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth"],_dataElementOptions:["backgroundColor","borderColor","borderWidth","pointStyle"],initialize:function(t,e){var i=this;i.chart=t,i.index=e,i.linkScales(),i.addElements(),i._type=i.getMeta().type},updateIndex:function(t){this.index=t},linkScales:function(){var t=this.getMeta(),e=this.chart,i=e.scales,n=this.getDataset(),a=e.options.scales;null!==t.xAxisID&&t.xAxisID in i&&!n.xAxisID||(t.xAxisID=n.xAxisID||a.xAxes[0].id),null!==t.yAxisID&&t.yAxisID in i&&!n.yAxisID||(t.yAxisID=n.yAxisID||a.yAxes[0].id)},getDataset:function(){return this.chart.data.datasets[this.index]},getMeta:function(){return this.chart.getDatasetMeta(this.index)},getScaleForId:function(t){return this.chart.scales[t]},_getValueScaleId:function(){return this.getMeta().yAxisID},_getIndexScaleId:function(){return this.getMeta().xAxisID},_getValueScale:function(){return this.getScaleForId(this._getValueScaleId())},_getIndexScale:function(){return this.getScaleForId(this._getIndexScaleId())},reset:function(){this._update(!0)},destroy:function(){this._data&&St(this._data,this)},createMetaDataset:function(){var t=this.datasetElementType;return t&&new t({_chart:this.chart,_datasetIndex:this.index})},createMetaData:function(t){var e=this.dataElementType;return e&&new e({_chart:this.chart,_datasetIndex:this.index,_index:t})},addElements:function(){var t,e,i=this.getMeta(),n=this.getDataset().data||[],a=i.data;for(t=0,e=n.length;t<e;++t)a[t]=a[t]||this.createMetaData(t);i.dataset=i.dataset||this.createMetaDataset()},addElementAndReset:function(t){var e=this.createMetaData(t);this.getMeta().data.splice(t,0,e),this.updateElement(e,t,!0)},buildOrUpdateElements:function(){var t,e,i=this,n=i.getDataset(),a=n.data||(n.data=[]);i._data!==a&&(i._data&&St(i._data,i),a&&Object.isExtensible(a)&&(e=i,(t=a)._chartjs?t._chartjs.listeners.push(e):(Object.defineProperty(t,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[e]}}),Mt.forEach(function(e){var i="onData"+e.charAt(0).toUpperCase()+e.slice(1),n=t[e];Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:function(){var e=Array.prototype.slice.call(arguments),a=n.apply(this,e);return ct.each(t._chartjs.listeners,function(t){"function"==typeof t[i]&&t[i].apply(t,e)}),a}})}))),i._data=a),i.resyncElements()},_configure:function(){this._config=ct.merge({},[this.chart.options.datasets[this._type],this.getDataset()],{merger:function(t,e,i){"_meta"!==t&&"data"!==t&&ct._merger(t,e,i)}})},_update:function(t){this._configure(),this._cachedDataOpts=null,this.update(t)},update:ct.noop,transition:function(t){for(var e=this.getMeta(),i=e.data||[],n=i.length,a=0;a<n;++a)i[a].transition(t);e.dataset&&e.dataset.transition(t)},draw:function(){var t=this.getMeta(),e=t.data||[],i=e.length,n=0;for(t.dataset&&t.dataset.draw();n<i;++n)e[n].draw()},getStyle:function(t){var e,i=this.getMeta(),n=i.dataset;return this._configure(),n&&void 0===t?e=this._resolveDatasetElementOptions(n||{}):(t=t||0,e=this._resolveDataElementOptions(i.data[t]||{},t)),!1!==e.fill&&null!==e.fill||(e.backgroundColor="rgba(0,0,0,0)"),e},_resolveDatasetElementOptions:function(t,e){var i,n,a,r,o=this,s=o.chart,l=o._config,u=t.custom||{},d=s.options.elements[o.datasetElementType.prototype._type]||{},h=o._datasetElementOptions,c={},f={chart:s,dataset:o.getDataset(),datasetIndex:o.index,hover:e};for(i=0,n=h.length;i<n;++i)a=h[i],r=e?"hover"+a.charAt(0).toUpperCase()+a.slice(1):a,c[a]=wt([u[r],l[r],d[r]],f);return c},_resolveDataElementOptions:function(t,e){var i=this,n=t&&t.custom,a=i._cachedDataOpts;if(a&&!n)return a;var r,o,s,l,u=i.chart,d=i._config,h=u.options.elements[i.dataElementType.prototype._type]||{},c=i._dataElementOptions,f={},g={chart:u,dataIndex:e,dataset:i.getDataset(),datasetIndex:i.index},p={cacheable:!n};if(n=n||{},ct.isArray(c))for(o=0,s=c.length;o<s;++o)f[l=c[o]]=wt([n[l],d[l],h[l]],g,e,p);else for(o=0,s=(r=Object.keys(c)).length;o<s;++o)f[l=r[o]]=wt([n[l],d[c[l]],d[l],h[l]],g,e,p);return p.cacheable&&(i._cachedDataOpts=Object.freeze(f)),f},removeHoverStyle:function(t){ct.merge(t._model,t.$previousStyle||{}),delete t.$previousStyle},setHoverStyle:function(t){var e=this.chart.data.datasets[t._datasetIndex],i=t._index,n=t.custom||{},a=t._model,r=ct.getHoverColor;t.$previousStyle={backgroundColor:a.backgroundColor,borderColor:a.borderColor,borderWidth:a.borderWidth},a.backgroundColor=wt([n.hoverBackgroundColor,e.hoverBackgroundColor,r(a.backgroundColor)],void 0,i),a.borderColor=wt([n.hoverBorderColor,e.hoverBorderColor,r(a.borderColor)],void 0,i),a.borderWidth=wt([n.hoverBorderWidth,e.hoverBorderWidth,a.borderWidth],void 0,i)},_removeDatasetHoverStyle:function(){var t=this.getMeta().dataset;t&&this.removeHoverStyle(t)},_setDatasetHoverStyle:function(){var t,e,i,n,a,r,o=this.getMeta().dataset,s={};if(o){for(r=o._model,a=this._resolveDatasetElementOptions(o,!0),t=0,e=(n=Object.keys(a)).length;t<e;++t)s[i=n[t]]=r[i],r[i]=a[i];o.$previousStyle=s}},resyncElements:function(){var t=this.getMeta(),e=this.getDataset().data,i=t.data.length,n=e.length;n<i?t.data.splice(n,i-n):n>i&&this.insertElements(i,n-i)},insertElements:function(t,e){for(var i=0;i<e;++i)this.addElementAndReset(t+i)},onDataPush:function(){var t=arguments.length;this.insertElements(this.getDataset().data.length-t,t)},onDataPop:function(){this.getMeta().data.pop()},onDataShift:function(){this.getMeta().data.shift()},onDataSplice:function(t,e){this.getMeta().data.splice(t,e),this.insertElements(t,arguments.length-2)},onDataUnshift:function(){this.insertElements(0,arguments.length)}}),Ct.extend=ct.inherits;var Pt=Ct,At=2*Math.PI;function Dt(t,e){var i=e.startAngle,n=e.endAngle,a=e.pixelMargin,r=a/e.outerRadius,o=e.x,s=e.y;t.beginPath(),t.arc(o,s,e.outerRadius,i-r,n+r),e.innerRadius>a?(r=a/e.innerRadius,t.arc(o,s,e.innerRadius-a,n+r,i-r,!0)):t.arc(o,s,a,n+Math.PI/2,i-Math.PI/2),t.closePath(),t.clip()}function Tt(t,e,i){var n="inner"===e.borderAlign;n?(t.lineWidth=2*e.borderWidth,t.lineJoin="round"):(t.lineWidth=e.borderWidth,t.lineJoin="bevel"),i.fullCircles&&function(t,e,i,n){var a,r=i.endAngle;for(n&&(i.endAngle=i.startAngle+At,Dt(t,i),i.endAngle=r,i.endAngle===i.startAngle&&i.fullCircles&&(i.endAngle+=At,i.fullCircles--)),t.beginPath(),t.arc(i.x,i.y,i.innerRadius,i.startAngle+At,i.startAngle,!0),a=0;a<i.fullCircles;++a)t.stroke();for(t.beginPath(),t.arc(i.x,i.y,e.outerRadius,i.startAngle,i.startAngle+At),a=0;a<i.fullCircles;++a)t.stroke()}(t,e,i,n),n&&Dt(t,i),t.beginPath(),t.arc(i.x,i.y,e.outerRadius,i.startAngle,i.endAngle),t.arc(i.x,i.y,i.innerRadius,i.endAngle,i.startAngle,!0),t.closePath(),t.stroke()}st._set("global",{elements:{arc:{backgroundColor:st.global.defaultColor,borderColor:"#fff",borderWidth:2,borderAlign:"center"}}});var It=xt.extend({_type:"arc",inLabelRange:function(t){var e=this._view;return!!e&&Math.pow(t-e.x,2)<Math.pow(e.radius+e.hoverRadius,2)},inRange:function(t,e){var i=this._view;if(i){for(var n=ct.getAngleFromPoint(i,{x:t,y:e}),a=n.angle,r=n.distance,o=i.startAngle,s=i.endAngle;s<o;)s+=At;for(;a>s;)a-=At;for(;a<o;)a+=At;var l=a>=o&&a<=s,u=r>=i.innerRadius&&r<=i.outerRadius;return l&&u}return!1},getCenterPoint:function(){var t=this._view,e=(t.startAngle+t.endAngle)/2,i=(t.innerRadius+t.outerRadius)/2;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},getArea:function(){var t=this._view;return Math.PI*((t.endAngle-t.startAngle)/(2*Math.PI))*(Math.pow(t.outerRadius,2)-Math.pow(t.innerRadius,2))},tooltipPosition:function(){var t=this._view,e=t.startAngle+(t.endAngle-t.startAngle)/2,i=(t.outerRadius-t.innerRadius)/2+t.innerRadius;return{x:t.x+Math.cos(e)*i,y:t.y+Math.sin(e)*i}},draw:function(){var t,e=this._chart.ctx,i=this._view,n="inner"===i.borderAlign?.33:0,a={x:i.x,y:i.y,innerRadius:i.innerRadius,outerRadius:Math.max(i.outerRadius-n,0),pixelMargin:n,startAngle:i.startAngle,endAngle:i.endAngle,fullCircles:Math.floor(i.circumference/At)};if(e.save(),e.fillStyle=i.backgroundColor,e.strokeStyle=i.borderColor,a.fullCircles){for(a.endAngle=a.startAngle+At,e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),t=0;t<a.fullCircles;++t)e.fill();a.endAngle=a.startAngle+i.circumference%At}e.beginPath(),e.arc(a.x,a.y,a.outerRadius,a.startAngle,a.endAngle),e.arc(a.x,a.y,a.innerRadius,a.endAngle,a.startAngle,!0),e.closePath(),e.fill(),i.borderWidth&&Tt(e,i,a),e.restore()}}),Ft=ct.valueOrDefault,Lt=st.global.defaultColor;st._set("global",{elements:{line:{tension:.4,backgroundColor:Lt,borderWidth:3,borderColor:Lt,borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",capBezierPoints:!0,fill:!0}}});var Ot=xt.extend({_type:"line",draw:function(){var t,e,i,n=this,a=n._view,r=n._chart.ctx,o=a.spanGaps,s=n._children.slice(),l=st.global,u=l.elements.line,d=-1,h=n._loop;if(s.length){if(n._loop){for(t=0;t<s.length;++t)if(e=ct.previousItem(s,t),!s[t]._view.skip&&e._view.skip){s=s.slice(t).concat(s.slice(0,t)),h=o;break}h&&s.push(s[0])}for(r.save(),r.lineCap=a.borderCapStyle||u.borderCapStyle,r.setLineDash&&r.setLineDash(a.borderDash||u.borderDash),r.lineDashOffset=Ft(a.borderDashOffset,u.borderDashOffset),r.lineJoin=a.borderJoinStyle||u.borderJoinStyle,r.lineWidth=Ft(a.borderWidth,u.borderWidth),r.strokeStyle=a.borderColor||l.defaultColor,r.beginPath(),(i=s[0]._view).skip||(r.moveTo(i.x,i.y),d=0),t=1;t<s.length;++t)i=s[t]._view,e=-1===d?ct.previousItem(s,t):s[d],i.skip||(d!==t-1&&!o||-1===d?r.moveTo(i.x,i.y):ct.canvas.lineTo(r,e._view,i),d=t);h&&r.closePath(),r.stroke(),r.restore()}}}),Rt=ct.valueOrDefault,zt=st.global.defaultColor;function Nt(t){var e=this._view;return!!e&&Math.abs(t-e.x)<e.radius+e.hitRadius}st._set("global",{elements:{point:{radius:3,pointStyle:"circle",backgroundColor:zt,borderColor:zt,borderWidth:1,hitRadius:1,hoverRadius:4,hoverBorderWidth:1}}});var Bt=xt.extend({_type:"point",inRange:function(t,e){var i=this._view;return!!i&&Math.pow(t-i.x,2)+Math.pow(e-i.y,2)<Math.pow(i.hitRadius+i.radius,2)},inLabelRange:Nt,inXRange:Nt,inYRange:function(t){var e=this._view;return!!e&&Math.abs(t-e.y)<e.radius+e.hitRadius},getCenterPoint:function(){var t=this._view;return{x:t.x,y:t.y}},getArea:function(){return Math.PI*Math.pow(this._view.radius,2)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y,padding:t.radius+t.borderWidth}},draw:function(t){var e=this._view,i=this._chart.ctx,n=e.pointStyle,a=e.rotation,r=e.radius,o=e.x,s=e.y,l=st.global,u=l.defaultColor;e.skip||(void 0===t||ct.canvas._isPointInArea(e,t))&&(i.strokeStyle=e.borderColor||u,i.lineWidth=Rt(e.borderWidth,l.elements.point.borderWidth),i.fillStyle=e.backgroundColor||u,ct.canvas.drawPoint(i,n,r,o,s,a))}}),Et=st.global.defaultColor;function Vt(t){return t&&void 0!==t.width}function Wt(t){var e,i,n,a,r;return Vt(t)?(r=t.width/2,e=t.x-r,i=t.x+r,n=Math.min(t.y,t.base),a=Math.max(t.y,t.base)):(r=t.height/2,e=Math.min(t.x,t.base),i=Math.max(t.x,t.base),n=t.y-r,a=t.y+r),{left:e,top:n,right:i,bottom:a}}function Ht(t,e,i){return t===e?i:t===i?e:t}function jt(t,e,i){var n,a,r,o,s=t.borderWidth,l=function(t){var e=t.borderSkipped,i={};return e?(t.horizontal?t.base>t.x&&(e=Ht(e,"left","right")):t.base<t.y&&(e=Ht(e,"bottom","top")),i[e]=!0,i):i}(t);return ct.isObject(s)?(n=+s.top||0,a=+s.right||0,r=+s.bottom||0,o=+s.left||0):n=a=r=o=+s||0,{t:l.top||n<0?0:n>i?i:n,r:l.right||a<0?0:a>e?e:a,b:l.bottom||r<0?0:r>i?i:r,l:l.left||o<0?0:o>e?e:o}}function qt(t,e,i){var n=null===e,a=null===i,r=!(!t||n&&a)&&Wt(t);return r&&(n||e>=r.left&&e<=r.right)&&(a||i>=r.top&&i<=r.bottom)}st._set("global",{elements:{rectangle:{backgroundColor:Et,borderColor:Et,borderSkipped:"bottom",borderWidth:0}}});var Ut=xt.extend({_type:"rectangle",draw:function(){var t=this._chart.ctx,e=this._view,i=function(t){var e=Wt(t),i=e.right-e.left,n=e.bottom-e.top,a=jt(t,i/2,n/2);return{outer:{x:e.left,y:e.top,w:i,h:n},inner:{x:e.left+a.l,y:e.top+a.t,w:i-a.l-a.r,h:n-a.t-a.b}}}(e),n=i.outer,a=i.inner;t.fillStyle=e.backgroundColor,t.fillRect(n.x,n.y,n.w,n.h),n.w===a.w&&n.h===a.h||(t.save(),t.beginPath(),t.rect(n.x,n.y,n.w,n.h),t.clip(),t.fillStyle=e.borderColor,t.rect(a.x,a.y,a.w,a.h),t.fill("evenodd"),t.restore())},height:function(){var t=this._view;return t.base-t.y},inRange:function(t,e){return qt(this._view,t,e)},inLabelRange:function(t,e){var i=this._view;return Vt(i)?qt(i,t,null):qt(i,null,e)},inXRange:function(t){return qt(this._view,t,null)},inYRange:function(t){return qt(this._view,null,t)},getCenterPoint:function(){var t,e,i=this._view;return Vt(i)?(t=i.x,e=(i.y+i.base)/2):(t=(i.x+i.base)/2,e=i.y),{x:t,y:e}},getArea:function(){var t=this._view;return Vt(t)?t.width*Math.abs(t.y-t.base):t.height*Math.abs(t.x-t.base)},tooltipPosition:function(){var t=this._view;return{x:t.x,y:t.y}}}),Yt={},Gt=It,Xt=Ot,Kt=Bt,Zt=Ut;Yt.Arc=Gt,Yt.Line=Xt,Yt.Point=Kt,Yt.Rectangle=Zt;var $t=ct._deprecated,Jt=ct.valueOrDefault;function Qt(t,e,i){var n,a,r=i.barThickness,o=e.stackCount,s=e.pixels[t],l=ct.isNullOrUndef(r)?function(t,e){var i,n,a,r,o=t._length;for(a=1,r=e.length;a<r;++a)o=Math.min(o,Math.abs(e[a]-e[a-1]));for(a=0,r=t.getTicks().length;a<r;++a)n=t.getPixelForTick(a),o=a>0?Math.min(o,Math.abs(n-i)):o,i=n;return o}(e.scale,e.pixels):-1;return ct.isNullOrUndef(r)?(n=l*i.categoryPercentage,a=i.barPercentage):(n=r*o,a=1),{chunk:n/o,ratio:a,start:s-n/2}}st._set("bar",{hover:{mode:"label"},scales:{xAxes:[{type:"category",offset:!0,gridLines:{offsetGridLines:!0}}],yAxes:[{type:"linear"}]}}),st._set("global",{datasets:{bar:{categoryPercentage:.8,barPercentage:.9}}});var te=Pt.extend({dataElementType:Yt.Rectangle,_dataElementOptions:["backgroundColor","borderColor","borderSkipped","borderWidth","barPercentage","barThickness","categoryPercentage","maxBarThickness","minBarLength"],initialize:function(){var t,e,i=this;Pt.prototype.initialize.apply(i,arguments),(t=i.getMeta()).stack=i.getDataset().stack,t.bar=!0,e=i._getIndexScale().options,$t("bar chart",e.barPercentage,"scales.[x/y]Axes.barPercentage","dataset.barPercentage"),$t("bar chart",e.barThickness,"scales.[x/y]Axes.barThickness","dataset.barThickness"),$t("bar chart",e.categoryPercentage,"scales.[x/y]Axes.categoryPercentage","dataset.categoryPercentage"),$t("bar chart",i._getValueScale().options.minBarLength,"scales.[x/y]Axes.minBarLength","dataset.minBarLength"),$t("bar chart",e.maxBarThickness,"scales.[x/y]Axes.maxBarThickness","dataset.maxBarThickness")},update:function(t){var e,i,n=this.getMeta().data;for(this._ruler=this.getRuler(),e=0,i=n.length;e<i;++e)this.updateElement(n[e],e,t)},updateElement:function(t,e,i){var n=this,a=n.getMeta(),r=n.getDataset(),o=n._resolveDataElementOptions(t,e);t._xScale=n.getScaleForId(a.xAxisID),t._yScale=n.getScaleForId(a.yAxisID),t._datasetIndex=n.index,t._index=e,t._model={backgroundColor:o.backgroundColor,borderColor:o.borderColor,borderSkipped:o.borderSkipped,borderWidth:o.borderWidth,datasetLabel:r.label,label:n.chart.data.labels[e]},ct.isArray(r.data[e])&&(t._model.borderSkipped=null),n._updateElementGeometry(t,e,i,o),t.pivot()},_updateElementGeometry:function(t,e,i,n){var a=this,r=t._model,o=a._getValueScale(),s=o.getBasePixel(),l=o.isHorizontal(),u=a._ruler||a.getRuler(),d=a.calculateBarValuePixels(a.index,e,n),h=a.calculateBarIndexPixels(a.index,e,u,n);r.horizontal=l,r.base=i?s:d.base,r.x=l?i?s:d.head:h.center,r.y=l?h.center:i?s:d.head,r.height=l?h.size:void 0,r.width=l?void 0:h.size},_getStacks:function(t){var e,i,n=this._getIndexScale(),a=n._getMatchingVisibleMetas(this._type),r=n.options.stacked,o=a.length,s=[];for(e=0;e<o&&(i=a[e],(!1===r||-1===s.indexOf(i.stack)||void 0===r&&void 0===i.stack)&&s.push(i.stack),i.index!==t);++e);return s},getStackCount:function(){return this._getStacks().length},getStackIndex:function(t,e){var i=this._getStacks(t),n=void 0!==e?i.indexOf(e):-1;return-1===n?i.length-1:n},getRuler:function(){var t,e,i=this._getIndexScale(),n=[];for(t=0,e=this.getMeta().data.length;t<e;++t)n.push(i.getPixelForValue(null,t,this.index));return{pixels:n,start:i._startPixel,end:i._endPixel,stackCount:this.getStackCount(),scale:i}},calculateBarValuePixels:function(t,e,i){var n,a,r,o,s,l,u,d=this.chart,h=this._getValueScale(),c=h.isHorizontal(),f=d.data.datasets,g=h._getMatchingVisibleMetas(this._type),p=h._parseValue(f[t].data[e]),m=i.minBarLength,v=h.options.stacked,b=this.getMeta().stack,x=void 0===p.start?0:p.max>=0&&p.min>=0?p.min:p.max,y=void 0===p.start?p.end:p.max>=0&&p.min>=0?p.max-p.min:p.min-p.max,_=g.length;if(v||void 0===v&&void 0!==b)for(n=0;n<_&&(a=g[n]).index!==t;++n)a.stack===b&&(r=void 0===(u=h._parseValue(f[a.index].data[e])).start?u.end:u.min>=0&&u.max>=0?u.max:u.min,(p.min<0&&r<0||p.max>=0&&r>0)&&(x+=r));return o=h.getPixelForValue(x),l=(s=h.getPixelForValue(x+y))-o,void 0!==m&&Math.abs(l)<m&&(l=m,s=y>=0&&!c||y<0&&c?o-m:o+m),{size:l,base:o,head:s,center:s+l/2}},calculateBarIndexPixels:function(t,e,i,n){var a="flex"===n.barThickness?function(t,e,i){var n,a=e.pixels,r=a[t],o=t>0?a[t-1]:null,s=t<a.length-1?a[t+1]:null,l=i.categoryPercentage;return null===o&&(o=r-(null===s?e.end-e.start:s-r)),null===s&&(s=r+r-o),n=r-(r-Math.min(o,s))/2*l,{chunk:Math.abs(s-o)/2*l/e.stackCount,ratio:i.barPercentage,start:n}}(e,i,n):Qt(e,i,n),r=this.getStackIndex(t,this.getMeta().stack),o=a.start+a.chunk*r+a.chunk/2,s=Math.min(Jt(n.maxBarThickness,1/0),a.chunk*a.ratio);return{base:o-s/2,head:o+s/2,center:o,size:s}},draw:function(){var t=this.chart,e=this._getValueScale(),i=this.getMeta().data,n=this.getDataset(),a=i.length,r=0;for(ct.canvas.clipArea(t.ctx,t.chartArea);r<a;++r){var o=e._parseValue(n.data[r]);isNaN(o.min)||isNaN(o.max)||i[r].draw()}ct.canvas.unclipArea(t.ctx)},_resolveDataElementOptions:function(){var t=this,e=ct.extend({},Pt.prototype._resolveDataElementOptions.apply(t,arguments)),i=t._getIndexScale().options,n=t._getValueScale().options;return e.barPercentage=Jt(i.barPercentage,e.barPercentage),e.barThickness=Jt(i.barThickness,e.barThickness),e.categoryPercentage=Jt(i.categoryPercentage,e.categoryPercentage),e.maxBarThickness=Jt(i.maxBarThickness,e.maxBarThickness),e.minBarLength=Jt(n.minBarLength,e.minBarLength),e}}),ee=ct.valueOrDefault,ie=ct.options.resolve;st._set("bubble",{hover:{mode:"single"},scales:{xAxes:[{type:"linear",position:"bottom",id:"x-axis-0"}],yAxes:[{type:"linear",position:"left",id:"y-axis-0"}]},tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.datasets[t.datasetIndex].label||"",n=e.datasets[t.datasetIndex].data[t.index];return i+": ("+t.xLabel+", "+t.yLabel+", "+n.r+")"}}}});var ne=Pt.extend({dataElementType:Yt.Point,_dataElementOptions:["backgroundColor","borderColor","borderWidth","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth","hoverRadius","hitRadius","pointStyle","rotation"],update:function(t){var e=this,i=e.getMeta().data;ct.each(i,function(i,n){e.updateElement(i,n,t)})},updateElement:function(t,e,i){var n=this,a=n.getMeta(),r=t.custom||{},o=n.getScaleForId(a.xAxisID),s=n.getScaleForId(a.yAxisID),l=n._resolveDataElementOptions(t,e),u=n.getDataset().data[e],d=n.index,h=i?o.getPixelForDecimal(.5):o.getPixelForValue("object"==typeof u?u:NaN,e,d),c=i?s.getBasePixel():s.getPixelForValue(u,e,d);t._xScale=o,t._yScale=s,t._options=l,t._datasetIndex=d,t._index=e,t._model={backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,hitRadius:l.hitRadius,pointStyle:l.pointStyle,rotation:l.rotation,radius:i?0:l.radius,skip:r.skip||isNaN(h)||isNaN(c),x:h,y:c},t.pivot()},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=ee(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=ee(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=ee(i.hoverBorderWidth,i.borderWidth),e.radius=i.radius+i.hoverRadius},_resolveDataElementOptions:function(t,e){var i=this,n=i.chart,a=i.getDataset(),r=t.custom||{},o=a.data[e]||{},s=Pt.prototype._resolveDataElementOptions.apply(i,arguments),l={chart:n,dataIndex:e,dataset:a,datasetIndex:i.index};return i._cachedDataOpts===s&&(s=ct.extend({},s)),s.radius=ie([r.radius,o.r,i._config.radius,n.options.elements.point.radius],l,e),s}}),ae=ct.valueOrDefault,re=Math.PI,oe=2*re,se=re/2;st._set("doughnut",{animation:{animateRotate:!0,animateScale:!1},hover:{mode:"single"},legendCallback:function(t){var e,i,n,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels;if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,i=o[0].data.length;e<i;++e)(n=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&n.appendChild(document.createTextNode(s[e]));return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(i,n){var a=t.getDatasetMeta(0),r=a.controller.getStyle(n);return{text:i,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[n])||a.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var i,n,a,r=e.index,o=this.chart;for(i=0,n=(o.data.datasets||[]).length;i<n;++i)(a=o.getDatasetMeta(i)).data[r]&&(a.data[r].hidden=!a.data[r].hidden);o.update()}},cutoutPercentage:50,rotation:-se,circumference:oe,tooltips:{callbacks:{title:function(){return""},label:function(t,e){var i=e.labels[t.index],n=": "+e.datasets[t.datasetIndex].data[t.index];return ct.isArray(i)?(i=i.slice())[0]+=n:i+=n,i}}}});var le=Pt.extend({dataElementType:Yt.Arc,linkScales:ct.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],getRingIndex:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&++e;return e},update:function(t){var e,i,n,a,r=this,o=r.chart,s=o.chartArea,l=o.options,u=1,d=1,h=0,c=0,f=r.getMeta(),g=f.data,p=l.cutoutPercentage/100||0,m=l.circumference,v=r._getRingWeight(r.index);if(m<oe){var b=l.rotation%oe,x=(b+=b>=re?-oe:b<-re?oe:0)+m,y=Math.cos(b),_=Math.sin(b),k=Math.cos(x),w=Math.sin(x),M=b<=0&&x>=0||x>=oe,S=b<=se&&x>=se||x>=oe+se,C=b<=-se&&x>=-se||x>=re+se,P=b===-re||x>=re?-1:Math.min(y,y*p,k,k*p),A=C?-1:Math.min(_,_*p,w,w*p),D=M?1:Math.max(y,y*p,k,k*p),T=S?1:Math.max(_,_*p,w,w*p);u=(D-P)/2,d=(T-A)/2,h=-(D+P)/2,c=-(T+A)/2}for(n=0,a=g.length;n<a;++n)g[n]._options=r._resolveDataElementOptions(g[n],n);for(o.borderWidth=r.getMaxBorderWidth(),e=(s.right-s.left-o.borderWidth)/u,i=(s.bottom-s.top-o.borderWidth)/d,o.outerRadius=Math.max(Math.min(e,i)/2,0),o.innerRadius=Math.max(o.outerRadius*p,0),o.radiusLength=(o.outerRadius-o.innerRadius)/(r._getVisibleDatasetWeightTotal()||1),o.offsetX=h*o.outerRadius,o.offsetY=c*o.outerRadius,f.total=r.calculateTotal(),r.outerRadius=o.outerRadius-o.radiusLength*r._getRingWeightOffset(r.index),r.innerRadius=Math.max(r.outerRadius-o.radiusLength*v,0),n=0,a=g.length;n<a;++n)r.updateElement(g[n],n,t)},updateElement:function(t,e,i){var n=this,a=n.chart,r=a.chartArea,o=a.options,s=o.animation,l=(r.left+r.right)/2,u=(r.top+r.bottom)/2,d=o.rotation,h=o.rotation,c=n.getDataset(),f=i&&s.animateRotate?0:t.hidden?0:n.calculateCircumference(c.data[e])*(o.circumference/oe),g=i&&s.animateScale?0:n.innerRadius,p=i&&s.animateScale?0:n.outerRadius,m=t._options||{};ct.extend(t,{_datasetIndex:n.index,_index:e,_model:{backgroundColor:m.backgroundColor,borderColor:m.borderColor,borderWidth:m.borderWidth,borderAlign:m.borderAlign,x:l+a.offsetX,y:u+a.offsetY,startAngle:d,endAngle:h,circumference:f,outerRadius:p,innerRadius:g,label:ct.valueAtIndexOrDefault(c.label,e,a.data.labels[e])}});var v=t._model;i&&s.animateRotate||(v.startAngle=0===e?o.rotation:n.getMeta().data[e-1]._model.endAngle,v.endAngle=v.startAngle+v.circumference),t.pivot()},calculateTotal:function(){var t,e=this.getDataset(),i=this.getMeta(),n=0;return ct.each(i.data,function(i,a){t=e.data[a],isNaN(t)||i.hidden||(n+=Math.abs(t))}),n},calculateCircumference:function(t){var e=this.getMeta().total;return e>0&&!isNaN(t)?oe*(Math.abs(t)/e):0},getMaxBorderWidth:function(t){var e,i,n,a,r,o,s,l,u=0,d=this.chart;if(!t)for(e=0,i=d.data.datasets.length;e<i;++e)if(d.isDatasetVisible(e)){t=(n=d.getDatasetMeta(e)).data,e!==this.index&&(r=n.controller);break}if(!t)return 0;for(e=0,i=t.length;e<i;++e)a=t[e],r?(r._configure(),o=r._resolveDataElementOptions(a,e)):o=a._options,"inner"!==o.borderAlign&&(s=o.borderWidth,u=(l=o.hoverBorderWidth)>(u=s>u?s:u)?l:u);return u},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=ae(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=ae(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=ae(i.hoverBorderWidth,i.borderWidth)},_getRingWeightOffset:function(t){for(var e=0,i=0;i<t;++i)this.chart.isDatasetVisible(i)&&(e+=this._getRingWeight(i));return e},_getRingWeight:function(t){return Math.max(ae(this.chart.data.datasets[t].weight,1),0)},_getVisibleDatasetWeightTotal:function(){return this._getRingWeightOffset(this.chart.data.datasets.length)}});st._set("horizontalBar",{hover:{mode:"index",axis:"y"},scales:{xAxes:[{type:"linear",position:"bottom"}],yAxes:[{type:"category",position:"left",offset:!0,gridLines:{offsetGridLines:!0}}]},elements:{rectangle:{borderSkipped:"left"}},tooltips:{mode:"index",axis:"y"}}),st._set("global",{datasets:{horizontalBar:{categoryPercentage:.8,barPercentage:.9}}});var ue=te.extend({_getValueScaleId:function(){return this.getMeta().xAxisID},_getIndexScaleId:function(){return this.getMeta().yAxisID}}),de=ct.valueOrDefault,he=ct.options.resolve,ce=ct.canvas._isPointInArea;st._set("line",{showLines:!0,spanGaps:!1,hover:{mode:"label"},scales:{xAxes:[{type:"category",id:"x-axis-0"}],yAxes:[{type:"linear",id:"y-axis-0"}]}});var fe=Pt.extend({datasetElementType:Yt.Line,dataElementType:Yt.Point,_datasetElementOptions:["backgroundColor","borderCapStyle","borderColor","borderDash","borderDashOffset","borderJoinStyle","borderWidth","cubicInterpolationMode","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},update:function(t){var e,i,n=this,a=n.getMeta(),r=a.dataset,o=a.data||[],s=n.chart.options,l=n._config,u=n._showLine=de(l.showLine,s.showLines);for(n._xScale=n.getScaleForId(a.xAxisID),n._yScale=n.getScaleForId(a.yAxisID),u&&(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=n._yScale,r._datasetIndex=n.index,r._children=o,r._model=n._resolveDatasetElementOptions(r),r.pivot()),e=0,i=o.length;e<i;++e)n.updateElement(o[e],e,t);for(u&&0!==r._model.tension&&n.updateBezierControlPoints(),e=0,i=o.length;e<i;++e)o[e].pivot()},updateElement:function(t,e,i){var n,a,r=this,o=r.getMeta(),s=t.custom||{},l=r.getDataset(),u=r.index,d=l.data[e],h=r._xScale,c=r._yScale,f=o.dataset._model,g=r._resolveDataElementOptions(t,e);n=h.getPixelForValue("object"==typeof d?d:NaN,e,u),a=i?c.getBasePixel():r.calculatePointY(d,e,u),t._xScale=h,t._yScale=c,t._options=g,t._datasetIndex=u,t._index=e,t._model={x:n,y:a,skip:s.skip||isNaN(n)||isNaN(a),radius:g.radius,pointStyle:g.pointStyle,rotation:g.rotation,backgroundColor:g.backgroundColor,borderColor:g.borderColor,borderWidth:g.borderWidth,tension:de(s.tension,f?f.tension:0),steppedLine:!!f&&f.steppedLine,hitRadius:g.hitRadius}},_resolveDatasetElementOptions:function(t){var e=this,i=e._config,n=t.custom||{},a=e.chart.options,r=a.elements.line,o=Pt.prototype._resolveDatasetElementOptions.apply(e,arguments);return o.spanGaps=de(i.spanGaps,a.spanGaps),o.tension=de(i.lineTension,r.tension),o.steppedLine=he([n.steppedLine,i.steppedLine,r.stepped]),o},calculatePointY:function(t,e,i){var n,a,r,o,s=this.chart,l=this._yScale,u=0,d=0,h=+l.getRightValue(t),c=s._getSortedVisibleDatasetMetas(),f=c.length;if(l.options.stacked){for(n=0;n<f&&(r=c[n]).index!==i;++n)a=s.data.datasets[r.index],"line"===r.type&&r.yAxisID===l.id&&((o=+l.getRightValue(a.data[e]))<0?d+=o||0:u+=o||0);return h<0?l.getPixelForValue(d+h):l.getPixelForValue(u+h)}return l.getPixelForValue(t)},updateBezierControlPoints:function(){var t,e,i,n,a=this.chart,r=this.getMeta(),o=r.dataset._model,s=a.chartArea,l=r.data||[];function u(t,e,i){return Math.max(Math.min(t,i),e)}if(o.spanGaps&&(l=l.filter(function(t){return!t._model.skip})),"monotone"===o.cubicInterpolationMode)ct.splineCurveMonotone(l);else for(t=0,e=l.length;t<e;++t)i=l[t]._model,n=ct.splineCurve(ct.previousItem(l,t)._model,i,ct.nextItem(l,t)._model,o.tension),i.controlPointPreviousX=n.previous.x,i.controlPointPreviousY=n.previous.y,i.controlPointNextX=n.next.x,i.controlPointNextY=n.next.y;if(a.options.elements.line.capBezierPoints)for(t=0,e=l.length;t<e;++t)i=l[t]._model,ce(i,s)&&(t>0&&ce(l[t-1]._model,s)&&(i.controlPointPreviousX=u(i.controlPointPreviousX,s.left,s.right),i.controlPointPreviousY=u(i.controlPointPreviousY,s.top,s.bottom)),t<l.length-1&&ce(l[t+1]._model,s)&&(i.controlPointNextX=u(i.controlPointNextX,s.left,s.right),i.controlPointNextY=u(i.controlPointNextY,s.top,s.bottom)))},draw:function(){var t,e=this.chart,i=this.getMeta(),n=i.data||[],a=e.chartArea,r=0,o=n.length;for(this._showLine&&(t=(i.dataset._model.borderWidth||0)/2,ct.canvas.clipArea(e.ctx,{left:a.left-t,right:a.right+t,top:a.top-t,bottom:a.bottom+t}),i.dataset.draw(),ct.canvas.unclipArea(e.ctx));r<o;++r)n[r].draw(a)},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=de(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=de(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=de(i.hoverBorderWidth,i.borderWidth),e.radius=de(i.hoverRadius,i.radius)}}),ge=ct.options.resolve;st._set("polarArea",{scale:{type:"radialLinear",angleLines:{display:!1},gridLines:{circular:!0},pointLabels:{display:!1},ticks:{beginAtZero:!0}},animation:{animateRotate:!0,animateScale:!0},startAngle:-.5*Math.PI,legendCallback:function(t){var e,i,n,a=document.createElement("ul"),r=t.data,o=r.datasets,s=r.labels;if(a.setAttribute("class",t.id+"-legend"),o.length)for(e=0,i=o[0].data.length;e<i;++e)(n=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=o[0].backgroundColor[e],s[e]&&n.appendChild(document.createTextNode(s[e]));return a.outerHTML},legend:{labels:{generateLabels:function(t){var e=t.data;return e.labels.length&&e.datasets.length?e.labels.map(function(i,n){var a=t.getDatasetMeta(0),r=a.controller.getStyle(n);return{text:i,fillStyle:r.backgroundColor,strokeStyle:r.borderColor,lineWidth:r.borderWidth,hidden:isNaN(e.datasets[0].data[n])||a.data[n].hidden,index:n}}):[]}},onClick:function(t,e){var i,n,a,r=e.index,o=this.chart;for(i=0,n=(o.data.datasets||[]).length;i<n;++i)(a=o.getDatasetMeta(i)).data[r].hidden=!a.data[r].hidden;o.update()}},tooltips:{callbacks:{title:function(){return""},label:function(t,e){return e.labels[t.index]+": "+t.yLabel}}}});var pe=Pt.extend({dataElementType:Yt.Arc,linkScales:ct.noop,_dataElementOptions:["backgroundColor","borderColor","borderWidth","borderAlign","hoverBackgroundColor","hoverBorderColor","hoverBorderWidth"],_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,i,n,a=this,r=a.getDataset(),o=a.getMeta(),s=a.chart.options.startAngle||0,l=a._starts=[],u=a._angles=[],d=o.data;for(a._updateRadius(),o.count=a.countVisibleElements(),e=0,i=r.data.length;e<i;e++)l[e]=s,n=a._computeAngle(e),u[e]=n,s+=n;for(e=0,i=d.length;e<i;++e)d[e]._options=a._resolveDataElementOptions(d[e],e),a.updateElement(d[e],e,t)},_updateRadius:function(){var t=this,e=t.chart,i=e.chartArea,n=e.options,a=Math.min(i.right-i.left,i.bottom-i.top);e.outerRadius=Math.max(a/2,0),e.innerRadius=Math.max(n.cutoutPercentage?e.outerRadius/100*n.cutoutPercentage:1,0),e.radiusLength=(e.outerRadius-e.innerRadius)/e.getVisibleDatasetCount(),t.outerRadius=e.outerRadius-e.radiusLength*t.index,t.innerRadius=t.outerRadius-e.radiusLength},updateElement:function(t,e,i){var n=this,a=n.chart,r=n.getDataset(),o=a.options,s=o.animation,l=a.scale,u=a.data.labels,d=l.xCenter,h=l.yCenter,c=o.startAngle,f=t.hidden?0:l.getDistanceFromCenterForValue(r.data[e]),g=n._starts[e],p=g+(t.hidden?0:n._angles[e]),m=s.animateScale?0:l.getDistanceFromCenterForValue(r.data[e]),v=t._options||{};ct.extend(t,{_datasetIndex:n.index,_index:e,_scale:l,_model:{backgroundColor:v.backgroundColor,borderColor:v.borderColor,borderWidth:v.borderWidth,borderAlign:v.borderAlign,x:d,y:h,innerRadius:0,outerRadius:i?m:f,startAngle:i&&s.animateRotate?c:g,endAngle:i&&s.animateRotate?c:p,label:ct.valueAtIndexOrDefault(u,e,u[e])}}),t.pivot()},countVisibleElements:function(){var t=this.getDataset(),e=this.getMeta(),i=0;return ct.each(e.data,function(e,n){isNaN(t.data[n])||e.hidden||i++}),i},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor,a=ct.valueOrDefault;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth},e.backgroundColor=a(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=a(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=a(i.hoverBorderWidth,i.borderWidth)},_computeAngle:function(t){var e=this,i=this.getMeta().count,n=e.getDataset(),a=e.getMeta();if(isNaN(n.data[t])||a.data[t].hidden)return 0;var r={chart:e.chart,dataIndex:t,dataset:n,datasetIndex:e.index};return ge([e.chart.options.elements.arc.angle,2*Math.PI/i],r,t)}});st._set("pie",ct.clone(st.doughnut)),st._set("pie",{cutoutPercentage:0});var me=le,ve=ct.valueOrDefault;st._set("radar",{spanGaps:!1,scale:{type:"radialLinear"},elements:{line:{tension:0}}});var be=Pt.extend({datasetElementType:Yt.Line,dataElementType:Yt.Point,linkScales:ct.noop,_datasetElementOptions:["backgroundColor","borderWidth","borderColor","borderCapStyle","borderDash","borderDashOffset","borderJoinStyle","fill"],_dataElementOptions:{backgroundColor:"pointBackgroundColor",borderColor:"pointBorderColor",borderWidth:"pointBorderWidth",hitRadius:"pointHitRadius",hoverBackgroundColor:"pointHoverBackgroundColor",hoverBorderColor:"pointHoverBorderColor",hoverBorderWidth:"pointHoverBorderWidth",hoverRadius:"pointHoverRadius",pointStyle:"pointStyle",radius:"pointRadius",rotation:"pointRotation"},_getIndexScaleId:function(){return this.chart.scale.id},_getValueScaleId:function(){return this.chart.scale.id},update:function(t){var e,i,n=this,a=n.getMeta(),r=a.dataset,o=a.data||[],s=n.chart.scale,l=n._config;for(void 0!==l.tension&&void 0===l.lineTension&&(l.lineTension=l.tension),r._scale=s,r._datasetIndex=n.index,r._children=o,r._loop=!0,r._model=n._resolveDatasetElementOptions(r),r.pivot(),e=0,i=o.length;e<i;++e)n.updateElement(o[e],e,t);for(n.updateBezierControlPoints(),e=0,i=o.length;e<i;++e)o[e].pivot()},updateElement:function(t,e,i){var n=this,a=t.custom||{},r=n.getDataset(),o=n.chart.scale,s=o.getPointPositionForValue(e,r.data[e]),l=n._resolveDataElementOptions(t,e),u=n.getMeta().dataset._model,d=i?o.xCenter:s.x,h=i?o.yCenter:s.y;t._scale=o,t._options=l,t._datasetIndex=n.index,t._index=e,t._model={x:d,y:h,skip:a.skip||isNaN(d)||isNaN(h),radius:l.radius,pointStyle:l.pointStyle,rotation:l.rotation,backgroundColor:l.backgroundColor,borderColor:l.borderColor,borderWidth:l.borderWidth,tension:ve(a.tension,u?u.tension:0),hitRadius:l.hitRadius}},_resolveDatasetElementOptions:function(){var t=this,e=t._config,i=t.chart.options,n=Pt.prototype._resolveDatasetElementOptions.apply(t,arguments);return n.spanGaps=ve(e.spanGaps,i.spanGaps),n.tension=ve(e.lineTension,i.elements.line.tension),n},updateBezierControlPoints:function(){var t,e,i,n,a=this.getMeta(),r=this.chart.chartArea,o=a.data||[];function s(t,e,i){return Math.max(Math.min(t,i),e)}for(a.dataset._model.spanGaps&&(o=o.filter(function(t){return!t._model.skip})),t=0,e=o.length;t<e;++t)i=o[t]._model,n=ct.splineCurve(ct.previousItem(o,t,!0)._model,i,ct.nextItem(o,t,!0)._model,i.tension),i.controlPointPreviousX=s(n.previous.x,r.left,r.right),i.controlPointPreviousY=s(n.previous.y,r.top,r.bottom),i.controlPointNextX=s(n.next.x,r.left,r.right),i.controlPointNextY=s(n.next.y,r.top,r.bottom)},setHoverStyle:function(t){var e=t._model,i=t._options,n=ct.getHoverColor;t.$previousStyle={backgroundColor:e.backgroundColor,borderColor:e.borderColor,borderWidth:e.borderWidth,radius:e.radius},e.backgroundColor=ve(i.hoverBackgroundColor,n(i.backgroundColor)),e.borderColor=ve(i.hoverBorderColor,n(i.borderColor)),e.borderWidth=ve(i.hoverBorderWidth,i.borderWidth),e.radius=ve(i.hoverRadius,i.radius)}});st._set("scatter",{hover:{mode:"single"},scales:{xAxes:[{id:"x-axis-1",type:"linear",position:"bottom"}],yAxes:[{id:"y-axis-1",type:"linear",position:"left"}]},tooltips:{callbacks:{title:function(){return""},label:function(t){return"("+t.xLabel+", "+t.yLabel+")"}}}}),st._set("global",{datasets:{scatter:{showLine:!1}}});var xe={bar:te,bubble:ne,doughnut:le,horizontalBar:ue,line:fe,polarArea:pe,pie:me,radar:be,scatter:fe};function ye(t,e){return t.native?{x:t.x,y:t.y}:ct.getRelativePosition(t,e)}function _e(t,e){var i,n,a,r,o,s,l=t._getSortedVisibleDatasetMetas();for(n=0,r=l.length;n<r;++n)for(a=0,o=(i=l[n].data).length;a<o;++a)(s=i[a])._view.skip||e(s)}function ke(t,e){var i=[];return _e(t,function(t){t.inRange(e.x,e.y)&&i.push(t)}),i}function we(t,e,i,n){var a=Number.POSITIVE_INFINITY,r=[];return _e(t,function(t){if(!i||t.inRange(e.x,e.y)){var o=t.getCenterPoint(),s=n(e,o);s<a?(r=[t],a=s):s===a&&r.push(t)}}),r}function Me(t){var e=-1!==t.indexOf("x"),i=-1!==t.indexOf("y");return function(t,n){var a=e?Math.abs(t.x-n.x):0,r=i?Math.abs(t.y-n.y):0;return Math.sqrt(Math.pow(a,2)+Math.pow(r,2))}}function Se(t,e,i){var n=ye(e,t);i.axis=i.axis||"x";var a=Me(i.axis),r=i.intersect?ke(t,n):we(t,n,!1,a),o=[];return r.length?(t._getSortedVisibleDatasetMetas().forEach(function(t){var e=t.data[r[0]._index];e&&!e._view.skip&&o.push(e)}),o):[]}var Ce={modes:{single:function(t,e){var i=ye(e,t),n=[];return _e(t,function(t){if(t.inRange(i.x,i.y))return n.push(t),n}),n.slice(0,1)},label:Se,index:Se,dataset:function(t,e,i){var n=ye(e,t);i.axis=i.axis||"xy";var a=Me(i.axis),r=i.intersect?ke(t,n):we(t,n,!1,a);return r.length>0&&(r=t.getDatasetMeta(r[0]._datasetIndex).data),r},"x-axis":function(t,e){return Se(t,e,{intersect:!1})},point:function(t,e){return ke(t,ye(e,t))},nearest:function(t,e,i){var n=ye(e,t);i.axis=i.axis||"xy";var a=Me(i.axis);return we(t,n,i.intersect,a)},x:function(t,e,i){var n=ye(e,t),a=[],r=!1;return _e(t,function(t){t.inXRange(n.x)&&a.push(t),t.inRange(n.x,n.y)&&(r=!0)}),i.intersect&&!r&&(a=[]),a},y:function(t,e,i){var n=ye(e,t),a=[],r=!1;return _e(t,function(t){t.inYRange(n.y)&&a.push(t),t.inRange(n.x,n.y)&&(r=!0)}),i.intersect&&!r&&(a=[]),a}}},Pe=ct.extend;function Ae(t,e){return ct.where(t,function(t){return t.pos===e})}function De(t,e){return t.sort(function(t,i){var n=e?i:t,a=e?t:i;return n.weight===a.weight?n.index-a.index:n.weight-a.weight})}function Te(t,e,i,n){return Math.max(t[i],e[i])+Math.max(t[n],e[n])}function Ie(t,e,i){var n,a,r=i.box,o=t.maxPadding;if(i.size&&(t[i.pos]-=i.size),i.size=i.horizontal?r.height:r.width,t[i.pos]+=i.size,r.getPadding){var s=r.getPadding();o.top=Math.max(o.top,s.top),o.left=Math.max(o.left,s.left),o.bottom=Math.max(o.bottom,s.bottom),o.right=Math.max(o.right,s.right)}if(n=e.outerWidth-Te(o,t,"left","right"),a=e.outerHeight-Te(o,t,"top","bottom"),n!==t.w||a!==t.h)return t.w=n,t.h=a,i.horizontal?n!==t.w:a!==t.h}function Fe(t,e){var i=e.maxPadding;function n(t){var n={left:0,top:0,right:0,bottom:0};return t.forEach(function(t){n[t]=Math.max(e[t],i[t])}),n}return n(t?["left","right"]:["top","bottom"])}function Le(t,e,i){var n,a,r,o,s,l,u=[];for(n=0,a=t.length;n<a;++n)(o=(r=t[n]).box).update(r.width||e.w,r.height||e.h,Fe(r.horizontal,e)),Ie(e,i,r)&&(l=!0,u.length&&(s=!0)),o.fullWidth||u.push(r);return s&&Le(u,e,i)||l}function Oe(t,e,i){var n,a,r,o,s=i.padding,l=e.x,u=e.y;for(n=0,a=t.length;n<a;++n)o=(r=t[n]).box,r.horizontal?(o.left=o.fullWidth?s.left:e.left,o.right=o.fullWidth?i.outerWidth-s.right:e.left+e.w,o.top=u,o.bottom=u+o.height,o.width=o.right-o.left,u=o.bottom):(o.left=l,o.right=l+o.width,o.top=e.top,o.bottom=e.top+e.h,o.height=o.bottom-o.top,l=o.right);e.x=l,e.y=u}st._set("global",{layout:{padding:{top:0,right:0,bottom:0,left:0}}});var Re={defaults:{},addBox:function(t,e){t.boxes||(t.boxes=[]),e.fullWidth=e.fullWidth||!1,e.position=e.position||"top",e.weight=e.weight||0,e._layers=e._layers||function(){return[{z:0,draw:function(){e.draw.apply(e,arguments)}}]},t.boxes.push(e)},removeBox:function(t,e){var i=t.boxes?t.boxes.indexOf(e):-1;-1!==i&&t.boxes.splice(i,1)},configure:function(t,e,i){for(var n,a=["fullWidth","position","weight"],r=a.length,o=0;o<r;++o)n=a[o],i.hasOwnProperty(n)&&(e[n]=i[n])},update:function(t,e,i){if(t){var n=t.options.layout||{},a=ct.options.toPadding(n.padding),r=e-a.width,o=i-a.height,s=function(t){var e=function(t){var e,i,n,a=[];for(e=0,i=(t||[]).length;e<i;++e)n=t[e],a.push({index:e,box:n,pos:n.position,horizontal:n.isHorizontal(),weight:n.weight});return a}(t),i=De(Ae(e,"left"),!0),n=De(Ae(e,"right")),a=De(Ae(e,"top"),!0),r=De(Ae(e,"bottom"));return{leftAndTop:i.concat(a),rightAndBottom:n.concat(r),chartArea:Ae(e,"chartArea"),vertical:i.concat(n),horizontal:a.concat(r)}}(t.boxes),l=s.vertical,u=s.horizontal,d=Object.freeze({outerWidth:e,outerHeight:i,padding:a,availableWidth:r,vBoxMaxWidth:r/2/l.length,hBoxMaxHeight:o/2}),h=Pe({maxPadding:Pe({},a),w:r,h:o,x:a.left,y:a.top},a);!function(t,e){var i,n,a;for(i=0,n=t.length;i<n;++i)(a=t[i]).width=a.horizontal?a.box.fullWidth&&e.availableWidth:e.vBoxMaxWidth,a.height=a.horizontal&&e.hBoxMaxHeight}(l.concat(u),d),Le(l,h,d),Le(u,h,d)&&Le(l,h,d),function(t){var e=t.maxPadding;function i(i){var n=Math.max(e[i]-t[i],0);return t[i]+=n,n}t.y+=i("top"),t.x+=i("left"),i("right"),i("bottom")}(h),Oe(s.leftAndTop,h,d),h.x+=h.w,h.y+=h.h,Oe(s.rightAndBottom,h,d),t.chartArea={left:h.left,top:h.top,right:h.left+h.w,bottom:h.top+h.h},ct.each(s.chartArea,function(e){var i=e.box;Pe(i,t.chartArea),i.update(h.w,h.h)})}}};var ze,Ne=(ze=Object.freeze({default:"@keyframes chartjs-render-animation{from{opacity:.99}to{opacity:1}}.chartjs-render-monitor{animation:chartjs-render-animation 1ms}.chartjs-size-monitor,.chartjs-size-monitor-expand,.chartjs-size-monitor-shrink{position:absolute;direction:ltr;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1}.chartjs-size-monitor-expand>div{position:absolute;width:1000000px;height:1000000px;left:0;top:0}.chartjs-size-monitor-shrink>div{position:absolute;width:200%;height:200%;left:0;top:0}"}))&&ze.default||ze,Be="$chartjs",Ee="chartjs-size-monitor",Ve="chartjs-render-monitor",We="chartjs-render-animation",He=["animationstart","webkitAnimationStart"],je={touchstart:"mousedown",touchmove:"mousemove",touchend:"mouseup",pointerenter:"mouseenter",pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointerleave:"mouseout",pointerout:"mouseout"};function qe(t,e){var i=ct.getStyle(t,e),n=i&&i.match(/^(\d+)(\.\d+)?px$/);return n?Number(n[1]):void 0}var Ue=!!function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("e",null,e)}catch(t){}return t}()&&{passive:!0};function Ye(t,e,i){t.addEventListener(e,i,Ue)}function Ge(t,e,i){t.removeEventListener(e,i,Ue)}function Xe(t,e,i,n,a){return{type:t,chart:e,native:a||null,x:void 0!==i?i:null,y:void 0!==n?n:null}}function Ke(t){var e=document.createElement("div");return e.className=t||"",e}function Ze(t,e,i){var n,a,r,o,s=t[Be]||(t[Be]={}),l=s.resizer=function(t){var e=Ke(Ee),i=Ke(Ee+"-expand"),n=Ke(Ee+"-shrink");i.appendChild(Ke()),n.appendChild(Ke()),e.appendChild(i),e.appendChild(n),e._reset=function(){i.scrollLeft=1e6,i.scrollTop=1e6,n.scrollLeft=1e6,n.scrollTop=1e6};var a=function(){e._reset(),t()};return Ye(i,"scroll",a.bind(i,"expand")),Ye(n,"scroll",a.bind(n,"shrink")),e}((n=function(){if(s.resizer){var n=i.options.maintainAspectRatio&&t.parentNode,a=n?n.clientWidth:0;e(Xe("resize",i)),n&&n.clientWidth<a&&i.canvas&&e(Xe("resize",i))}},r=!1,o=[],function(){o=Array.prototype.slice.call(arguments),a=a||this,r||(r=!0,ct.requestAnimFrame.call(window,function(){r=!1,n.apply(a,o)}))}));!function(t,e){var i=t[Be]||(t[Be]={}),n=i.renderProxy=function(t){t.animationName===We&&e()};ct.each(He,function(e){Ye(t,e,n)}),i.reflow=!!t.offsetParent,t.classList.add(Ve)}(t,function(){if(s.resizer){var e=t.parentNode;e&&e!==l.parentNode&&e.insertBefore(l,e.firstChild),l._reset()}})}function $e(t){var e=t[Be]||{},i=e.resizer;delete e.resizer,function(t){var e=t[Be]||{},i=e.renderProxy;i&&(ct.each(He,function(e){Ge(t,e,i)}),delete e.renderProxy),t.classList.remove(Ve)}(t),i&&i.parentNode&&i.parentNode.removeChild(i)}var Je={disableCSSInjection:!1,_enabled:"undefined"!=typeof window&&"undefined"!=typeof document,_ensureLoaded:function(t){if(!this.disableCSSInjection){var e=t.getRootNode();!function(t,e){var i=t[Be]||(t[Be]={});if(!i.containsStyles){i.containsStyles=!0,e="/* Chart.js */\n"+e;var n=document.createElement("style");n.setAttribute("type","text/css"),n.appendChild(document.createTextNode(e)),t.appendChild(n)}}(e.host?e:document.head,Ne)}},acquireContext:function(t,e){"string"==typeof t?t=document.getElementById(t):t.length&&(t=t[0]),t&&t.canvas&&(t=t.canvas);var i=t&&t.getContext&&t.getContext("2d");return i&&i.canvas===t?(this._ensureLoaded(t),function(t,e){var i=t.style,n=t.getAttribute("height"),a=t.getAttribute("width");if(t[Be]={initial:{height:n,width:a,style:{display:i.display,height:i.height,width:i.width}}},i.display=i.display||"block",null===a||""===a){var r=qe(t,"width");void 0!==r&&(t.width=r)}if(null===n||""===n)if(""===t.style.height)t.height=t.width/(e.options.aspectRatio||2);else{var o=qe(t,"height");void 0!==r&&(t.height=o)}}(t,e),i):null},releaseContext:function(t){var e=t.canvas;if(e[Be]){var i=e[Be].initial;["height","width"].forEach(function(t){var n=i[t];ct.isNullOrUndef(n)?e.removeAttribute(t):e.setAttribute(t,n)}),ct.each(i.style||{},function(t,i){e.style[i]=t}),e.width=e.width,delete e[Be]}},addEventListener:function(t,e,i){var n=t.canvas;if("resize"!==e){var a=i[Be]||(i[Be]={});Ye(n,e,(a.proxies||(a.proxies={}))[t.id+"_"+e]=function(e){i(function(t,e){var i=je[t.type]||t.type,n=ct.getRelativePosition(t,e);return Xe(i,e,n.x,n.y,t)}(e,t))})}else Ze(n,i,t)},removeEventListener:function(t,e,i){var n=t.canvas;if("resize"!==e){var a=((i[Be]||{}).proxies||{})[t.id+"_"+e];a&&Ge(n,e,a)}else $e(n)}};ct.addEvent=Ye,ct.removeEvent=Ge;var Qe=Je._enabled?Je:{acquireContext:function(t){return t&&t.canvas&&(t=t.canvas),t&&t.getContext("2d")||null}},ti=ct.extend({initialize:function(){},acquireContext:function(){},releaseContext:function(){},addEventListener:function(){},removeEventListener:function(){}},Qe);st._set("global",{plugins:{}});var ei={_plugins:[],_cacheId:0,register:function(t){var e=this._plugins;[].concat(t).forEach(function(t){-1===e.indexOf(t)&&e.push(t)}),this._cacheId++},unregister:function(t){var e=this._plugins;[].concat(t).forEach(function(t){var i=e.indexOf(t);-1!==i&&e.splice(i,1)}),this._cacheId++},clear:function(){this._plugins=[],this._cacheId++},count:function(){return this._plugins.length},getAll:function(){return this._plugins},notify:function(t,e,i){var n,a,r,o,s,l=this.descriptors(t),u=l.length;for(n=0;n<u;++n)if("function"==typeof(s=(r=(a=l[n]).plugin)[e])&&((o=[t].concat(i||[])).push(a.options),!1===s.apply(r,o)))return!1;return!0},descriptors:function(t){var e=t.$plugins||(t.$plugins={});if(e.id===this._cacheId)return e.descriptors;var i=[],n=[],a=t&&t.config||{},r=a.options&&a.options.plugins||{};return this._plugins.concat(a.plugins||[]).forEach(function(t){if(-1===i.indexOf(t)){var e=t.id,a=r[e];!1!==a&&(!0===a&&(a=ct.clone(st.global.plugins[e])),i.push(t),n.push({plugin:t,options:a||{}}))}}),e.descriptors=n,e.id=this._cacheId,n},_invalidate:function(t){delete t.$plugins}},ii={constructors:{},defaults:{},registerScaleType:function(t,e,i){this.constructors[t]=e,this.defaults[t]=ct.clone(i)},getScaleConstructor:function(t){return this.constructors.hasOwnProperty(t)?this.constructors[t]:void 0},getScaleDefaults:function(t){return this.defaults.hasOwnProperty(t)?ct.merge({},[st.scale,this.defaults[t]]):{}},updateScaleDefaults:function(t,e){this.defaults.hasOwnProperty(t)&&(this.defaults[t]=ct.extend(this.defaults[t],e))},addScalesToLayout:function(t){ct.each(t.scales,function(e){e.fullWidth=e.options.fullWidth,e.position=e.options.position,e.weight=e.options.weight,Re.addBox(t,e)})}},ni=ct.valueOrDefault,ai=ct.rtl.getRtlAdapter;st._set("global",{tooltips:{enabled:!0,custom:null,mode:"nearest",position:"average",intersect:!0,backgroundColor:"rgba(0,0,0,0.8)",titleFontStyle:"bold",titleSpacing:2,titleMarginBottom:6,titleFontColor:"#fff",titleAlign:"left",bodySpacing:2,bodyFontColor:"#fff",bodyAlign:"left",footerFontStyle:"bold",footerSpacing:2,footerMarginTop:6,footerFontColor:"#fff",footerAlign:"left",yPadding:6,xPadding:6,caretPadding:2,caretSize:5,cornerRadius:6,multiKeyBackground:"#fff",displayColors:!0,borderColor:"rgba(0,0,0,0)",borderWidth:0,callbacks:{beforeTitle:ct.noop,title:function(t,e){var i="",n=e.labels,a=n?n.length:0;if(t.length>0){var r=t[0];r.label?i=r.label:r.xLabel?i=r.xLabel:a>0&&r.index<a&&(i=n[r.index])}return i},afterTitle:ct.noop,beforeBody:ct.noop,beforeLabel:ct.noop,label:function(t,e){var i=e.datasets[t.datasetIndex].label||"";return i&&(i+=": "),ct.isNullOrUndef(t.value)?i+=t.yLabel:i+=t.value,i},labelColor:function(t,e){var i=e.getDatasetMeta(t.datasetIndex).data[t.index]._view;return{borderColor:i.borderColor,backgroundColor:i.backgroundColor}},labelTextColor:function(){return this._options.bodyFontColor},afterLabel:ct.noop,afterBody:ct.noop,beforeFooter:ct.noop,footer:ct.noop,afterFooter:ct.noop}}});var ri={average:function(t){if(!t.length)return!1;var e,i,n=0,a=0,r=0;for(e=0,i=t.length;e<i;++e){var o=t[e];if(o&&o.hasValue()){var s=o.tooltipPosition();n+=s.x,a+=s.y,++r}}return{x:n/r,y:a/r}},nearest:function(t,e){var i,n,a,r=e.x,o=e.y,s=Number.POSITIVE_INFINITY;for(i=0,n=t.length;i<n;++i){var l=t[i];if(l&&l.hasValue()){var u=l.getCenterPoint(),d=ct.distanceBetweenPoints(e,u);d<s&&(s=d,a=l)}}if(a){var h=a.tooltipPosition();r=h.x,o=h.y}return{x:r,y:o}}};function oi(t,e){return e&&(ct.isArray(e)?Array.prototype.push.apply(t,e):t.push(e)),t}function si(t){return("string"==typeof t||t instanceof String)&&t.indexOf("\n")>-1?t.split("\n"):t}function li(t){var e=st.global;return{xPadding:t.xPadding,yPadding:t.yPadding,xAlign:t.xAlign,yAlign:t.yAlign,rtl:t.rtl,textDirection:t.textDirection,bodyFontColor:t.bodyFontColor,_bodyFontFamily:ni(t.bodyFontFamily,e.defaultFontFamily),_bodyFontStyle:ni(t.bodyFontStyle,e.defaultFontStyle),_bodyAlign:t.bodyAlign,bodyFontSize:ni(t.bodyFontSize,e.defaultFontSize),bodySpacing:t.bodySpacing,titleFontColor:t.titleFontColor,_titleFontFamily:ni(t.titleFontFamily,e.defaultFontFamily),_titleFontStyle:ni(t.titleFontStyle,e.defaultFontStyle),titleFontSize:ni(t.titleFontSize,e.defaultFontSize),_titleAlign:t.titleAlign,titleSpacing:t.titleSpacing,titleMarginBottom:t.titleMarginBottom,footerFontColor:t.footerFontColor,_footerFontFamily:ni(t.footerFontFamily,e.defaultFontFamily),_footerFontStyle:ni(t.footerFontStyle,e.defaultFontStyle),footerFontSize:ni(t.footerFontSize,e.defaultFontSize),_footerAlign:t.footerAlign,footerSpacing:t.footerSpacing,footerMarginTop:t.footerMarginTop,caretSize:t.caretSize,cornerRadius:t.cornerRadius,backgroundColor:t.backgroundColor,opacity:0,legendColorBackground:t.multiKeyBackground,displayColors:t.displayColors,borderColor:t.borderColor,borderWidth:t.borderWidth}}function ui(t,e){return"center"===e?t.x+t.width/2:"right"===e?t.x+t.width-t.xPadding:t.x+t.xPadding}function di(t){return oi([],si(t))}var hi=xt.extend({initialize:function(){this._model=li(this._options),this._lastActive=[]},getTitle:function(){var t=this,e=t._options,i=e.callbacks,n=i.beforeTitle.apply(t,arguments),a=i.title.apply(t,arguments),r=i.afterTitle.apply(t,arguments),o=[];return o=oi(o,si(n)),o=oi(o,si(a)),o=oi(o,si(r))},getBeforeBody:function(){return di(this._options.callbacks.beforeBody.apply(this,arguments))},getBody:function(t,e){var i=this,n=i._options.callbacks,a=[];return ct.each(t,function(t){var r={before:[],lines:[],after:[]};oi(r.before,si(n.beforeLabel.call(i,t,e))),oi(r.lines,n.label.call(i,t,e)),oi(r.after,si(n.afterLabel.call(i,t,e))),a.push(r)}),a},getAfterBody:function(){return di(this._options.callbacks.afterBody.apply(this,arguments))},getFooter:function(){var t=this,e=t._options.callbacks,i=e.beforeFooter.apply(t,arguments),n=e.footer.apply(t,arguments),a=e.afterFooter.apply(t,arguments),r=[];return r=oi(r,si(i)),r=oi(r,si(n)),r=oi(r,si(a))},update:function(t){var e,i,n,a,r,o,s,l,u,d,h=this,c=h._options,f=h._model,g=h._model=li(c),p=h._active,m=h._data,v={xAlign:f.xAlign,yAlign:f.yAlign},b={x:f.x,y:f.y},x={width:f.width,height:f.height},y={x:f.caretX,y:f.caretY};if(p.length){g.opacity=1;var _=[],k=[];y=ri[c.position].call(h,p,h._eventPosition);var w=[];for(e=0,i=p.length;e<i;++e)w.push((n=p[e],a=void 0,r=void 0,o=void 0,s=void 0,l=void 0,u=void 0,d=void 0,a=n._xScale,r=n._yScale||n._scale,o=n._index,s=n._datasetIndex,l=n._chart.getDatasetMeta(s).controller,u=l._getIndexScale(),d=l._getValueScale(),{xLabel:a?a.getLabelForIndex(o,s):"",yLabel:r?r.getLabelForIndex(o,s):"",label:u?""+u.getLabelForIndex(o,s):"",value:d?""+d.getLabelForIndex(o,s):"",index:o,datasetIndex:s,x:n._model.x,y:n._model.y}));c.filter&&(w=w.filter(function(t){return c.filter(t,m)})),c.itemSort&&(w=w.sort(function(t,e){return c.itemSort(t,e,m)})),ct.each(w,function(t){_.push(c.callbacks.labelColor.call(h,t,h._chart)),k.push(c.callbacks.labelTextColor.call(h,t,h._chart))}),g.title=h.getTitle(w,m),g.beforeBody=h.getBeforeBody(w,m),g.body=h.getBody(w,m),g.afterBody=h.getAfterBody(w,m),g.footer=h.getFooter(w,m),g.x=y.x,g.y=y.y,g.caretPadding=c.caretPadding,g.labelColors=_,g.labelTextColors=k,g.dataPoints=w,x=function(t,e){var i=t._chart.ctx,n=2*e.yPadding,a=0,r=e.body,o=r.reduce(function(t,e){return t+e.before.length+e.lines.length+e.after.length},0);o+=e.beforeBody.length+e.afterBody.length;var s=e.title.length,l=e.footer.length,u=e.titleFontSize,d=e.bodyFontSize,h=e.footerFontSize;n+=s*u,n+=s?(s-1)*e.titleSpacing:0,n+=s?e.titleMarginBottom:0,n+=o*d,n+=o?(o-1)*e.bodySpacing:0,n+=l?e.footerMarginTop:0,n+=l*h,n+=l?(l-1)*e.footerSpacing:0;var c=0,f=function(t){a=Math.max(a,i.measureText(t).width+c)};return i.font=ct.fontString(u,e._titleFontStyle,e._titleFontFamily),ct.each(e.title,f),i.font=ct.fontString(d,e._bodyFontStyle,e._bodyFontFamily),ct.each(e.beforeBody.concat(e.afterBody),f),c=e.displayColors?d+2:0,ct.each(r,function(t){ct.each(t.before,f),ct.each(t.lines,f),ct.each(t.after,f)}),c=0,i.font=ct.fontString(h,e._footerFontStyle,e._footerFontFamily),ct.each(e.footer,f),{width:a+=2*e.xPadding,height:n}}(this,g),b=function(t,e,i,n){var a=t.x,r=t.y,o=t.caretSize,s=t.caretPadding,l=t.cornerRadius,u=i.xAlign,d=i.yAlign,h=o+s,c=l+s;return"right"===u?a-=e.width:"center"===u&&((a-=e.width/2)+e.width>n.width&&(a=n.width-e.width),a<0&&(a=0)),"top"===d?r+=h:r-="bottom"===d?e.height+h:e.height/2,"center"===d?"left"===u?a+=h:"right"===u&&(a-=h):"left"===u?a-=c:"right"===u&&(a+=c),{x:a,y:r}}(g,x,v=function(t,e){var i,n,a,r,o,s=t._model,l=t._chart,u=t._chart.chartArea,d="center",h="center";s.y<e.height?h="top":s.y>l.height-e.height&&(h="bottom");var c=(u.left+u.right)/2,f=(u.top+u.bottom)/2;"center"===h?(i=function(t){return t<=c},n=function(t){return t>c}):(i=function(t){return t<=e.width/2},n=function(t){return t>=l.width-e.width/2}),a=function(t){return t+e.width+s.caretSize+s.caretPadding>l.width},r=function(t){return t-e.width-s.caretSize-s.caretPadding<0},o=function(t){return t<=f?"top":"bottom"},i(s.x)?(d="left",a(s.x)&&(d="center",h=o(s.y))):n(s.x)&&(d="right",r(s.x)&&(d="center",h=o(s.y)));var g=t._options;return{xAlign:g.xAlign?g.xAlign:d,yAlign:g.yAlign?g.yAlign:h}}(this,x),h._chart)}else g.opacity=0;return g.xAlign=v.xAlign,g.yAlign=v.yAlign,g.x=b.x,g.y=b.y,g.width=x.width,g.height=x.height,g.caretX=y.x,g.caretY=y.y,h._model=g,t&&c.custom&&c.custom.call(h,g),h},drawCaret:function(t,e){var i=this._chart.ctx,n=this._view,a=this.getCaretPosition(t,e,n);i.lineTo(a.x1,a.y1),i.lineTo(a.x2,a.y2),i.lineTo(a.x3,a.y3)},getCaretPosition:function(t,e,i){var n,a,r,o,s,l,u=i.caretSize,d=i.cornerRadius,h=i.xAlign,c=i.yAlign,f=t.x,g=t.y,p=e.width,m=e.height;if("center"===c)s=g+m/2,"left"===h?(a=(n=f)-u,r=n,o=s+u,l=s-u):(a=(n=f+p)+u,r=n,o=s-u,l=s+u);else if("left"===h?(n=(a=f+d+u)-u,r=a+u):"right"===h?(n=(a=f+p-d-u)-u,r=a+u):(n=(a=i.caretX)-u,r=a+u),"top"===c)s=(o=g)-u,l=o;else{s=(o=g+m)+u,l=o;var v=r;r=n,n=v}return{x1:n,x2:a,x3:r,y1:o,y2:s,y3:l}},drawTitle:function(t,e,i){var n,a,r,o=e.title,s=o.length;if(s){var l=ai(e.rtl,e.x,e.width);for(t.x=ui(e,e._titleAlign),i.textAlign=l.textAlign(e._titleAlign),i.textBaseline="middle",n=e.titleFontSize,a=e.titleSpacing,i.fillStyle=e.titleFontColor,i.font=ct.fontString(n,e._titleFontStyle,e._titleFontFamily),r=0;r<s;++r)i.fillText(o[r],l.x(t.x),t.y+n/2),t.y+=n+a,r+1===s&&(t.y+=e.titleMarginBottom-a)}},drawBody:function(t,e,i){var n,a,r,o,s,l,u,d,h=e.bodyFontSize,c=e.bodySpacing,f=e._bodyAlign,g=e.body,p=e.displayColors,m=0,v=p?ui(e,"left"):0,b=ai(e.rtl,e.x,e.width),x=function(e){i.fillText(e,b.x(t.x+m),t.y+h/2),t.y+=h+c},y=b.textAlign(f);for(i.textAlign=f,i.textBaseline="middle",i.font=ct.fontString(h,e._bodyFontStyle,e._bodyFontFamily),t.x=ui(e,y),i.fillStyle=e.bodyFontColor,ct.each(e.beforeBody,x),m=p&&"right"!==y?"center"===f?h/2+1:h+2:0,s=0,u=g.length;s<u;++s){for(n=g[s],a=e.labelTextColors[s],r=e.labelColors[s],i.fillStyle=a,ct.each(n.before,x),l=0,d=(o=n.lines).length;l<d;++l){if(p){var _=b.x(v);i.fillStyle=e.legendColorBackground,i.fillRect(b.leftForLtr(_,h),t.y,h,h),i.lineWidth=1,i.strokeStyle=r.borderColor,i.strokeRect(b.leftForLtr(_,h),t.y,h,h),i.fillStyle=r.backgroundColor,i.fillRect(b.leftForLtr(b.xPlus(_,1),h-2),t.y+1,h-2,h-2),i.fillStyle=a}x(o[l])}ct.each(n.after,x)}m=0,ct.each(e.afterBody,x),t.y-=c},drawFooter:function(t,e,i){var n,a,r=e.footer,o=r.length;if(o){var s=ai(e.rtl,e.x,e.width);for(t.x=ui(e,e._footerAlign),t.y+=e.footerMarginTop,i.textAlign=s.textAlign(e._footerAlign),i.textBaseline="middle",n=e.footerFontSize,i.fillStyle=e.footerFontColor,i.font=ct.fontString(n,e._footerFontStyle,e._footerFontFamily),a=0;a<o;++a)i.fillText(r[a],s.x(t.x),t.y+n/2),t.y+=n+e.footerSpacing}},drawBackground:function(t,e,i,n){i.fillStyle=e.backgroundColor,i.strokeStyle=e.borderColor,i.lineWidth=e.borderWidth;var a=e.xAlign,r=e.yAlign,o=t.x,s=t.y,l=n.width,u=n.height,d=e.cornerRadius;i.beginPath(),i.moveTo(o+d,s),"top"===r&&this.drawCaret(t,n),i.lineTo(o+l-d,s),i.quadraticCurveTo(o+l,s,o+l,s+d),"center"===r&&"right"===a&&this.drawCaret(t,n),i.lineTo(o+l,s+u-d),i.quadraticCurveTo(o+l,s+u,o+l-d,s+u),"bottom"===r&&this.drawCaret(t,n),i.lineTo(o+d,s+u),i.quadraticCurveTo(o,s+u,o,s+u-d),"center"===r&&"left"===a&&this.drawCaret(t,n),i.lineTo(o,s+d),i.quadraticCurveTo(o,s,o+d,s),i.closePath(),i.fill(),e.borderWidth>0&&i.stroke()},draw:function(){var t=this._chart.ctx,e=this._view;if(0!==e.opacity){var i={width:e.width,height:e.height},n={x:e.x,y:e.y},a=Math.abs(e.opacity<.001)?0:e.opacity,r=e.title.length||e.beforeBody.length||e.body.length||e.afterBody.length||e.footer.length;this._options.enabled&&r&&(t.save(),t.globalAlpha=a,this.drawBackground(n,e,t,i),n.y+=e.yPadding,ct.rtl.overrideTextDirection(t,e.textDirection),this.drawTitle(n,e,t),this.drawBody(n,e,t),this.drawFooter(n,e,t),ct.rtl.restoreTextDirection(t,e.textDirection),t.restore())}},handleEvent:function(t){var e,i=this,n=i._options;return i._lastActive=i._lastActive||[],"mouseout"===t.type?i._active=[]:(i._active=i._chart.getElementsAtEventForMode(t,n.mode,n),n.reverse&&i._active.reverse()),(e=!ct.arrayEquals(i._active,i._lastActive))&&(i._lastActive=i._active,(n.enabled||n.custom)&&(i._eventPosition={x:t.x,y:t.y},i.update(!0),i.pivot())),e}}),ci=ri,fi=hi;fi.positioners=ci;var gi=ct.valueOrDefault;function pi(){return ct.merge({},[].slice.call(arguments),{merger:function(t,e,i,n){if("xAxes"===t||"yAxes"===t){var a,r,o,s=i[t].length;for(e[t]||(e[t]=[]),a=0;a<s;++a)o=i[t][a],r=gi(o.type,"xAxes"===t?"category":"linear"),a>=e[t].length&&e[t].push({}),!e[t][a].type||o.type&&o.type!==e[t][a].type?ct.merge(e[t][a],[ii.getScaleDefaults(r),o]):ct.merge(e[t][a],o)}else ct._merger(t,e,i,n)}})}function mi(){return ct.merge({},[].slice.call(arguments),{merger:function(t,e,i,n){var a=e[t]||{},r=i[t];"scales"===t?e[t]=pi(a,r):"scale"===t?e[t]=ct.merge(a,[ii.getScaleDefaults(r.type),r]):ct._merger(t,e,i,n)}})}function vi(t){var e=t.options;ct.each(t.scales,function(e){Re.removeBox(t,e)}),e=mi(st.global,st[t.config.type],e),t.options=t.config.options=e,t.ensureScalesHaveIDs(),t.buildOrUpdateScales(),t.tooltip._options=e.tooltips,t.tooltip.initialize()}function bi(t,e,i){var n,a=function(t){return t.id===n};do{n=e+i++}while(ct.findIndex(t,a)>=0);return n}function xi(t){return"top"===t||"bottom"===t}function yi(t,e){return function(i,n){return i[t]===n[t]?i[e]-n[e]:i[t]-n[t]}}st._set("global",{elements:{},events:["mousemove","mouseout","click","touchstart","touchmove"],hover:{onHover:null,mode:"nearest",intersect:!0,animationDuration:400},onClick:null,maintainAspectRatio:!0,responsive:!0,responsiveAnimationDuration:0});var _i=function(t,e){return this.construct(t,e),this};ct.extend(_i.prototype,{construct:function(t,e){var i=this;e=function(t){var e=(t=t||{}).data=t.data||{};return e.datasets=e.datasets||[],e.labels=e.labels||[],t.options=mi(st.global,st[t.type],t.options||{}),t}(e);var n=ti.acquireContext(t,e),a=n&&n.canvas,r=a&&a.height,o=a&&a.width;i.id=ct.uid(),i.ctx=n,i.canvas=a,i.config=e,i.width=o,i.height=r,i.aspectRatio=r?o/r:null,i.options=e.options,i._bufferedRender=!1,i._layers=[],i.chart=i,i.controller=i,_i.instances[i.id]=i,Object.defineProperty(i,"data",{get:function(){return i.config.data},set:function(t){i.config.data=t}}),n&&a?(i.initialize(),i.update()):console.error("Failed to create chart: can't acquire context from the given item")},initialize:function(){var t=this;return ei.notify(t,"beforeInit"),ct.retinaScale(t,t.options.devicePixelRatio),t.bindEvents(),t.options.responsive&&t.resize(!0),t.initToolTip(),ei.notify(t,"afterInit"),t},clear:function(){return ct.canvas.clear(this),this},stop:function(){return kt.cancelAnimation(this),this},resize:function(t){var e=this,i=e.options,n=e.canvas,a=i.maintainAspectRatio&&e.aspectRatio||null,r=Math.max(0,Math.floor(ct.getMaximumWidth(n))),o=Math.max(0,Math.floor(a?r/a:ct.getMaximumHeight(n)));if((e.width!==r||e.height!==o)&&(n.width=e.width=r,n.height=e.height=o,n.style.width=r+"px",n.style.height=o+"px",ct.retinaScale(e,i.devicePixelRatio),!t)){var s={width:r,height:o};ei.notify(e,"resize",[s]),i.onResize&&i.onResize(e,s),e.stop(),e.update({duration:i.responsiveAnimationDuration})}},ensureScalesHaveIDs:function(){var t=this.options,e=t.scales||{},i=t.scale;ct.each(e.xAxes,function(t,i){t.id||(t.id=bi(e.xAxes,"x-axis-",i))}),ct.each(e.yAxes,function(t,i){t.id||(t.id=bi(e.yAxes,"y-axis-",i))}),i&&(i.id=i.id||"scale")},buildOrUpdateScales:function(){var t=this,e=t.options,i=t.scales||{},n=[],a=Object.keys(i).reduce(function(t,e){return t[e]=!1,t},{});e.scales&&(n=n.concat((e.scales.xAxes||[]).map(function(t){return{options:t,dtype:"category",dposition:"bottom"}}),(e.scales.yAxes||[]).map(function(t){return{options:t,dtype:"linear",dposition:"left"}}))),e.scale&&n.push({options:e.scale,dtype:"radialLinear",isDefault:!0,dposition:"chartArea"}),ct.each(n,function(e){var n=e.options,r=n.id,o=gi(n.type,e.dtype);xi(n.position)!==xi(e.dposition)&&(n.position=e.dposition),a[r]=!0;var s=null;if(r in i&&i[r].type===o)(s=i[r]).options=n,s.ctx=t.ctx,s.chart=t;else{var l=ii.getScaleConstructor(o);if(!l)return;s=new l({id:r,type:o,options:n,ctx:t.ctx,chart:t}),i[s.id]=s}s.mergeTicksOptions(),e.isDefault&&(t.scale=s)}),ct.each(a,function(t,e){t||delete i[e]}),t.scales=i,ii.addScalesToLayout(this)},buildOrUpdateControllers:function(){var t,e,i=this,n=[],a=i.data.datasets;for(t=0,e=a.length;t<e;t++){var r=a[t],o=i.getDatasetMeta(t),s=r.type||i.config.type;if(o.type&&o.type!==s&&(i.destroyDatasetMeta(t),o=i.getDatasetMeta(t)),o.type=s,o.order=r.order||0,o.index=t,o.controller)o.controller.updateIndex(t),o.controller.linkScales();else{var l=xe[o.type];if(void 0===l)throw new Error('"'+o.type+'" is not a chart type.');o.controller=new l(i,t),n.push(o.controller)}}return n},resetElements:function(){var t=this;ct.each(t.data.datasets,function(e,i){t.getDatasetMeta(i).controller.reset()},t)},reset:function(){this.resetElements(),this.tooltip.initialize()},update:function(t){var e,i,n=this;if(t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]}),vi(n),ei._invalidate(n),!1!==ei.notify(n,"beforeUpdate")){n.tooltip._data=n.data;var a=n.buildOrUpdateControllers();for(e=0,i=n.data.datasets.length;e<i;e++)n.getDatasetMeta(e).controller.buildOrUpdateElements();n.updateLayout(),n.options.animation&&n.options.animation.duration&&ct.each(a,function(t){t.reset()}),n.updateDatasets(),n.tooltip.initialize(),n.lastActive=[],ei.notify(n,"afterUpdate"),n._layers.sort(yi("z","_idx")),n._bufferedRender?n._bufferedRequest={duration:t.duration,easing:t.easing,lazy:t.lazy}:n.render(t)}},updateLayout:function(){var t=this;!1!==ei.notify(t,"beforeLayout")&&(Re.update(this,this.width,this.height),t._layers=[],ct.each(t.boxes,function(e){e._configure&&e._configure(),t._layers.push.apply(t._layers,e._layers())},t),t._layers.forEach(function(t,e){t._idx=e}),ei.notify(t,"afterScaleUpdate"),ei.notify(t,"afterLayout"))},updateDatasets:function(){if(!1!==ei.notify(this,"beforeDatasetsUpdate")){for(var t=0,e=this.data.datasets.length;t<e;++t)this.updateDataset(t);ei.notify(this,"afterDatasetsUpdate")}},updateDataset:function(t){var e=this.getDatasetMeta(t),i={meta:e,index:t};!1!==ei.notify(this,"beforeDatasetUpdate",[i])&&(e.controller._update(),ei.notify(this,"afterDatasetUpdate",[i]))},render:function(t){var e=this;t&&"object"==typeof t||(t={duration:t,lazy:arguments[1]});var i=e.options.animation,n=gi(t.duration,i&&i.duration),a=t.lazy;if(!1!==ei.notify(e,"beforeRender")){var r=function(t){ei.notify(e,"afterRender"),ct.callback(i&&i.onComplete,[t],e)};if(i&&n){var o=new _t({numSteps:n/16.66,easing:t.easing||i.easing,render:function(t,e){var i=ct.easing.effects[e.easing],n=e.currentStep,a=n/e.numSteps;t.draw(i(a),a,n)},onAnimationProgress:i.onProgress,onAnimationComplete:r});kt.addAnimation(e,o,n,a)}else e.draw(),r(new _t({numSteps:0,chart:e}));return e}},draw:function(t){var e,i,n=this;if(n.clear(),ct.isNullOrUndef(t)&&(t=1),n.transition(t),!(n.width<=0||n.height<=0)&&!1!==ei.notify(n,"beforeDraw",[t])){for(i=n._layers,e=0;e<i.length&&i[e].z<=0;++e)i[e].draw(n.chartArea);for(n.drawDatasets(t);e<i.length;++e)i[e].draw(n.chartArea);n._drawTooltip(t),ei.notify(n,"afterDraw",[t])}},transition:function(t){for(var e=0,i=(this.data.datasets||[]).length;e<i;++e)this.isDatasetVisible(e)&&this.getDatasetMeta(e).controller.transition(t);this.tooltip.transition(t)},_getSortedDatasetMetas:function(t){var e,i,n=[];for(e=0,i=(this.data.datasets||[]).length;e<i;++e)t&&!this.isDatasetVisible(e)||n.push(this.getDatasetMeta(e));return n.sort(yi("order","index")),n},_getSortedVisibleDatasetMetas:function(){return this._getSortedDatasetMetas(!0)},drawDatasets:function(t){var e,i;if(!1!==ei.notify(this,"beforeDatasetsDraw",[t])){for(i=(e=this._getSortedVisibleDatasetMetas()).length-1;i>=0;--i)this.drawDataset(e[i],t);ei.notify(this,"afterDatasetsDraw",[t])}},drawDataset:function(t,e){var i={meta:t,index:t.index,easingValue:e};!1!==ei.notify(this,"beforeDatasetDraw",[i])&&(t.controller.draw(e),ei.notify(this,"afterDatasetDraw",[i]))},_drawTooltip:function(t){var e=this.tooltip,i={tooltip:e,easingValue:t};!1!==ei.notify(this,"beforeTooltipDraw",[i])&&(e.draw(),ei.notify(this,"afterTooltipDraw",[i]))},getElementAtEvent:function(t){return Ce.modes.single(this,t)},getElementsAtEvent:function(t){return Ce.modes.label(this,t,{intersect:!0})},getElementsAtXAxis:function(t){return Ce.modes["x-axis"](this,t,{intersect:!0})},getElementsAtEventForMode:function(t,e,i){var n=Ce.modes[e];return"function"==typeof n?n(this,t,i):[]},getDatasetAtEvent:function(t){return Ce.modes.dataset(this,t,{intersect:!0})},getDatasetMeta:function(t){var e=this.data.datasets[t];e._meta||(e._meta={});var i=e._meta[this.id];return i||(i=e._meta[this.id]={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:e.order||0,index:t}),i},getVisibleDatasetCount:function(){for(var t=0,e=0,i=this.data.datasets.length;e<i;++e)this.isDatasetVisible(e)&&t++;return t},isDatasetVisible:function(t){var e=this.getDatasetMeta(t);return"boolean"==typeof e.hidden?!e.hidden:!this.data.datasets[t].hidden},generateLegend:function(){return this.options.legendCallback(this)},destroyDatasetMeta:function(t){var e=this.id,i=this.data.datasets[t],n=i._meta&&i._meta[e];n&&(n.controller.destroy(),delete i._meta[e])},destroy:function(){var t,e,i=this,n=i.canvas;for(i.stop(),t=0,e=i.data.datasets.length;t<e;++t)i.destroyDatasetMeta(t);n&&(i.unbindEvents(),ct.canvas.clear(i),ti.releaseContext(i.ctx),i.canvas=null,i.ctx=null),ei.notify(i,"destroy"),delete _i.instances[i.id]},toBase64Image:function(){return this.canvas.toDataURL.apply(this.canvas,arguments)},initToolTip:function(){var t=this;t.tooltip=new fi({_chart:t,_chartInstance:t,_data:t.data,_options:t.options.tooltips},t)},bindEvents:function(){var t=this,e=t._listeners={},i=function(){t.eventHandler.apply(t,arguments)};ct.each(t.options.events,function(n){ti.addEventListener(t,n,i),e[n]=i}),t.options.responsive&&(i=function(){t.resize()},ti.addEventListener(t,"resize",i),e.resize=i)},unbindEvents:function(){var t=this,e=t._listeners;e&&(delete t._listeners,ct.each(e,function(e,i){ti.removeEventListener(t,i,e)}))},updateHoverStyle:function(t,e,i){var n,a,r,o=i?"set":"remove";for(a=0,r=t.length;a<r;++a)(n=t[a])&&this.getDatasetMeta(n._datasetIndex).controller[o+"HoverStyle"](n);"dataset"===e&&this.getDatasetMeta(t[0]._datasetIndex).controller["_"+o+"DatasetHoverStyle"]()},eventHandler:function(t){var e=this,i=e.tooltip;if(!1!==ei.notify(e,"beforeEvent",[t])){e._bufferedRender=!0,e._bufferedRequest=null;var n=e.handleEvent(t);i&&(n=i._start?i.handleEvent(t):n|i.handleEvent(t)),ei.notify(e,"afterEvent",[t]);var a=e._bufferedRequest;return a?e.render(a):n&&!e.animating&&(e.stop(),e.render({duration:e.options.hover.animationDuration,lazy:!0})),e._bufferedRender=!1,e._bufferedRequest=null,e}},handleEvent:function(t){var e,i=this,n=i.options||{},a=n.hover;return i.lastActive=i.lastActive||[],"mouseout"===t.type?i.active=[]:i.active=i.getElementsAtEventForMode(t,a.mode,a),ct.callback(n.onHover||n.hover.onHover,[t.native,i.active],i),"mouseup"!==t.type&&"click"!==t.type||n.onClick&&n.onClick.call(i,t.native,i.active),i.lastActive.length&&i.updateHoverStyle(i.lastActive,a.mode,!1),i.active.length&&a.mode&&i.updateHoverStyle(i.active,a.mode,!0),e=!ct.arrayEquals(i.active,i.lastActive),i.lastActive=i.active,e}}),_i.instances={};var ki=_i;_i.Controller=_i,_i.types={},ct.configMerge=mi,ct.scaleMerge=pi;function wi(){throw new Error("This method is not implemented: either no adapter can be found or an incomplete integration was provided.")}function Mi(t){this.options=t||{}}ct.extend(Mi.prototype,{formats:wi,parse:wi,format:wi,add:wi,diff:wi,startOf:wi,endOf:wi,_create:function(t){return t}}),Mi.override=function(t){ct.extend(Mi.prototype,t)};var Si={_date:Mi},Ci={formatters:{values:function(t){return ct.isArray(t)?t:""+t},linear:function(t,e,i){var n=i.length>3?i[2]-i[1]:i[1]-i[0];Math.abs(n)>1&&t!==Math.floor(t)&&(n=t-Math.floor(t));var a=ct.log10(Math.abs(n)),r="";if(0!==t)if(Math.max(Math.abs(i[0]),Math.abs(i[i.length-1]))<1e-4){var o=ct.log10(Math.abs(t)),s=Math.floor(o)-Math.floor(a);s=Math.max(Math.min(s,20),0),r=t.toExponential(s)}else{var l=-1*Math.floor(a);l=Math.max(Math.min(l,20),0),r=t.toFixed(l)}else r="0";return r},logarithmic:function(t,e,i){var n=t/Math.pow(10,Math.floor(ct.log10(t)));return 0===t?"0":1===n||2===n||5===n||0===e||e===i.length-1?t.toExponential():""}}},Pi=ct.isArray,Ai=ct.isNullOrUndef,Di=ct.valueOrDefault,Ti=ct.valueAtIndexOrDefault;function Ii(t,e,i){var n,a=t.getTicks().length,r=Math.min(e,a-1),o=t.getPixelForTick(r),s=t._startPixel,l=t._endPixel;if(!(i&&(n=1===a?Math.max(o-s,l-o):0===e?(t.getPixelForTick(1)-o)/2:(o-t.getPixelForTick(r-1))/2,(o+=r<e?n:-n)<s-1e-6||o>l+1e-6)))return o}function Fi(t,e,i,n){var a,r,o,s,l,u,d,h,c,f,g,p,m,v=i.length,b=[],x=[],y=[];for(a=0;a<v;++a){if(s=i[a].label,l=i[a].major?e.major:e.minor,t.font=u=l.string,d=n[u]=n[u]||{data:{},gc:[]},h=l.lineHeight,c=f=0,Ai(s)||Pi(s)){if(Pi(s))for(r=0,o=s.length;r<o;++r)g=s[r],Ai(g)||Pi(g)||(c=ct.measureText(t,d.data,d.gc,c,g),f+=h)}else c=ct.measureText(t,d.data,d.gc,c,s),f=h;b.push(c),x.push(f),y.push(h/2)}function _(t){return{width:b[t]||0,height:x[t]||0,offset:y[t]||0}}return function(t,e){ct.each(t,function(t){var i,n=t.gc,a=n.length/2;if(a>e){for(i=0;i<a;++i)delete t.data[n[i]];n.splice(0,a)}})}(n,v),p=b.indexOf(Math.max.apply(null,b)),m=x.indexOf(Math.max.apply(null,x)),{first:_(0),last:_(v-1),widest:_(p),highest:_(m)}}function Li(t){return t.drawTicks?t.tickMarkLength:0}function Oi(t){var e,i;return t.display?(e=ct.options._parseFont(t),i=ct.options.toPadding(t.padding),e.lineHeight+i.height):0}function Ri(t,e){return ct.extend(ct.options._parseFont({fontFamily:Di(e.fontFamily,t.fontFamily),fontSize:Di(e.fontSize,t.fontSize),fontStyle:Di(e.fontStyle,t.fontStyle),lineHeight:Di(e.lineHeight,t.lineHeight)}),{color:ct.options.resolve([e.fontColor,t.fontColor,st.global.defaultFontColor])})}function zi(t){var e=Ri(t,t.minor);return{minor:e,major:t.major.enabled?Ri(t,t.major):e}}function Ni(t){var e,i,n,a=[];for(i=0,n=t.length;i<n;++i)void 0!==(e=t[i])._index&&a.push(e);return a}function Bi(t,e,i,n){var a,r,o,s,l=Di(i,0),u=Math.min(Di(n,t.length),t.length),d=0;for(e=Math.ceil(e),n&&(e=(a=n-i)/Math.floor(a/e)),s=l;s<0;)d++,s=Math.round(l+d*e);for(r=Math.max(l,0);r<u;r++)o=t[r],r===s?(o._index=r,d++,s=Math.round(l+d*e)):delete o.label}st._set("scale",{display:!0,position:"left",offset:!1,gridLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,drawBorder:!0,drawOnChartArea:!0,drawTicks:!0,tickMarkLength:10,zeroLineWidth:1,zeroLineColor:"rgba(0,0,0,0.25)",zeroLineBorderDash:[],zeroLineBorderDashOffset:0,offsetGridLines:!1,borderDash:[],borderDashOffset:0},scaleLabel:{display:!1,labelString:"",padding:{top:4,bottom:4}},ticks:{beginAtZero:!1,minRotation:0,maxRotation:50,mirror:!1,padding:0,reverse:!1,display:!0,autoSkip:!0,autoSkipPadding:0,labelOffset:0,callback:Ci.formatters.values,minor:{},major:{}}});var Ei=xt.extend({zeroLineIndex:0,getPadding:function(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}},getTicks:function(){return this._ticks},_getLabels:function(){var t=this.chart.data;return this.options.labels||(this.isHorizontal()?t.xLabels:t.yLabels)||t.labels},mergeTicksOptions:function(){},beforeUpdate:function(){ct.callback(this.options.beforeUpdate,[this])},update:function(t,e,i){var n,a,r,o,s,l=this,u=l.options.ticks,d=u.sampleSize;if(l.beforeUpdate(),l.maxWidth=t,l.maxHeight=e,l.margins=ct.extend({left:0,right:0,top:0,bottom:0},i),l._ticks=null,l.ticks=null,l._labelSizes=null,l._maxLabelLines=0,l.longestLabelWidth=0,l.longestTextCache=l.longestTextCache||{},l._gridLineItems=null,l._labelItems=null,l.beforeSetDimensions(),l.setDimensions(),l.afterSetDimensions(),l.beforeDataLimits(),l.determineDataLimits(),l.afterDataLimits(),l.beforeBuildTicks(),o=l.buildTicks()||[],(!(o=l.afterBuildTicks(o)||o)||!o.length)&&l.ticks)for(o=[],n=0,a=l.ticks.length;n<a;++n)o.push({value:l.ticks[n],major:!1});return l._ticks=o,s=d<o.length,r=l._convertTicksToLabels(s?function(t,e){for(var i=[],n=t.length/e,a=0,r=t.length;a<r;a+=n)i.push(t[Math.floor(a)]);return i}(o,d):o),l._configure(),l.beforeCalculateTickRotation(),l.calculateTickRotation(),l.afterCalculateTickRotation(),l.beforeFit(),l.fit(),l.afterFit(),l._ticksToDraw=u.display&&(u.autoSkip||"auto"===u.source)?l._autoSkip(o):o,s&&(r=l._convertTicksToLabels(l._ticksToDraw)),l.ticks=r,l.afterUpdate(),l.minSize},_configure:function(){var t,e,i=this,n=i.options.ticks.reverse;i.isHorizontal()?(t=i.left,e=i.right):(t=i.top,e=i.bottom,n=!n),i._startPixel=t,i._endPixel=e,i._reversePixels=n,i._length=e-t},afterUpdate:function(){ct.callback(this.options.afterUpdate,[this])},beforeSetDimensions:function(){ct.callback(this.options.beforeSetDimensions,[this])},setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0},afterSetDimensions:function(){ct.callback(this.options.afterSetDimensions,[this])},beforeDataLimits:function(){ct.callback(this.options.beforeDataLimits,[this])},determineDataLimits:ct.noop,afterDataLimits:function(){ct.callback(this.options.afterDataLimits,[this])},beforeBuildTicks:function(){ct.callback(this.options.beforeBuildTicks,[this])},buildTicks:ct.noop,afterBuildTicks:function(t){var e=this;return Pi(t)&&t.length?ct.callback(e.options.afterBuildTicks,[e,t]):(e.ticks=ct.callback(e.options.afterBuildTicks,[e,e.ticks])||e.ticks,t)},beforeTickToLabelConversion:function(){ct.callback(this.options.beforeTickToLabelConversion,[this])},convertTicksToLabels:function(){var t=this.options.ticks;this.ticks=this.ticks.map(t.userCallback||t.callback,this)},afterTickToLabelConversion:function(){ct.callback(this.options.afterTickToLabelConversion,[this])},beforeCalculateTickRotation:function(){ct.callback(this.options.beforeCalculateTickRotation,[this])},calculateTickRotation:function(){var t,e,i,n,a,r,o,s=this,l=s.options,u=l.ticks,d=s.getTicks().length,h=u.minRotation||0,c=u.maxRotation,f=h;!s._isVisible()||!u.display||h>=c||d<=1||!s.isHorizontal()?s.labelRotation=h:(e=(t=s._getLabelSizes()).widest.width,i=t.highest.height-t.highest.offset,n=Math.min(s.maxWidth,s.chart.width-e),e+6>(a=l.offset?s.maxWidth/d:n/(d-1))&&(a=n/(d-(l.offset?.5:1)),r=s.maxHeight-Li(l.gridLines)-u.padding-Oi(l.scaleLabel),o=Math.sqrt(e*e+i*i),f=ct.toDegrees(Math.min(Math.asin(Math.min((t.highest.height+6)/a,1)),Math.asin(Math.min(r/o,1))-Math.asin(i/o))),f=Math.max(h,Math.min(c,f))),s.labelRotation=f)},afterCalculateTickRotation:function(){ct.callback(this.options.afterCalculateTickRotation,[this])},beforeFit:function(){ct.callback(this.options.beforeFit,[this])},fit:function(){var t=this,e=t.minSize={width:0,height:0},i=t.chart,n=t.options,a=n.ticks,r=n.scaleLabel,o=n.gridLines,s=t._isVisible(),l="bottom"===n.position,u=t.isHorizontal();if(u?e.width=t.maxWidth:s&&(e.width=Li(o)+Oi(r)),u?s&&(e.height=Li(o)+Oi(r)):e.height=t.maxHeight,a.display&&s){var d=zi(a),h=t._getLabelSizes(),c=h.first,f=h.last,g=h.widest,p=h.highest,m=.4*d.minor.lineHeight,v=a.padding;if(u){var b=0!==t.labelRotation,x=ct.toRadians(t.labelRotation),y=Math.cos(x),_=Math.sin(x),k=_*g.width+y*(p.height-(b?p.offset:0))+(b?0:m);e.height=Math.min(t.maxHeight,e.height+k+v);var w,M,S=t.getPixelForTick(0)-t.left,C=t.right-t.getPixelForTick(t.getTicks().length-1);b?(w=l?y*c.width+_*c.offset:_*(c.height-c.offset),M=l?_*(f.height-f.offset):y*f.width+_*f.offset):(w=c.width/2,M=f.width/2),t.paddingLeft=Math.max((w-S)*t.width/(t.width-S),0)+3,t.paddingRight=Math.max((M-C)*t.width/(t.width-C),0)+3}else{var P=a.mirror?0:g.width+v+m;e.width=Math.min(t.maxWidth,e.width+P),t.paddingTop=c.height/2,t.paddingBottom=f.height/2}}t.handleMargins(),u?(t.width=t._length=i.width-t.margins.left-t.margins.right,t.height=e.height):(t.width=e.width,t.height=t._length=i.height-t.margins.top-t.margins.bottom)},handleMargins:function(){var t=this;t.margins&&(t.margins.left=Math.max(t.paddingLeft,t.margins.left),t.margins.top=Math.max(t.paddingTop,t.margins.top),t.margins.right=Math.max(t.paddingRight,t.margins.right),t.margins.bottom=Math.max(t.paddingBottom,t.margins.bottom))},afterFit:function(){ct.callback(this.options.afterFit,[this])},isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},isFullWidth:function(){return this.options.fullWidth},getRightValue:function(t){if(Ai(t))return NaN;if(("number"==typeof t||t instanceof Number)&&!isFinite(t))return NaN;if(t)if(this.isHorizontal()){if(void 0!==t.x)return this.getRightValue(t.x)}else if(void 0!==t.y)return this.getRightValue(t.y);return t},_convertTicksToLabels:function(t){var e,i,n,a=this;for(a.ticks=t.map(function(t){return t.value}),a.beforeTickToLabelConversion(),e=a.convertTicksToLabels(t)||a.ticks,a.afterTickToLabelConversion(),i=0,n=t.length;i<n;++i)t[i].label=e[i];return e},_getLabelSizes:function(){var t=this,e=t._labelSizes;return e||(t._labelSizes=e=Fi(t.ctx,zi(t.options.ticks),t.getTicks(),t.longestTextCache),t.longestLabelWidth=e.widest.width),e},_parseValue:function(t){var e,i,n,a;return Pi(t)?(e=+this.getRightValue(t[0]),i=+this.getRightValue(t[1]),n=Math.min(e,i),a=Math.max(e,i)):(e=void 0,i=t=+this.getRightValue(t),n=t,a=t),{min:n,max:a,start:e,end:i}},_getScaleLabel:function(t){var e=this._parseValue(t);return void 0!==e.start?"["+e.start+", "+e.end+"]":+this.getRightValue(t)},getLabelForIndex:ct.noop,getPixelForValue:ct.noop,getValueForPixel:ct.noop,getPixelForTick:function(t){var e=this.options.offset,i=this._ticks.length,n=1/Math.max(i-(e?0:1),1);return t<0||t>i-1?null:this.getPixelForDecimal(t*n+(e?n/2:0))},getPixelForDecimal:function(t){return this._reversePixels&&(t=1-t),this._startPixel+t*this._length},getDecimalForPixel:function(t){var e=(t-this._startPixel)/this._length;return this._reversePixels?1-e:e},getBasePixel:function(){return this.getPixelForValue(this.getBaseValue())},getBaseValue:function(){var t=this.min,e=this.max;return this.beginAtZero?0:t<0&&e<0?e:t>0&&e>0?t:0},_autoSkip:function(t){var e,i,n,a,r=this.options.ticks,o=this._length,s=r.maxTicksLimit||o/this._tickSize()+1,l=r.major.enabled?function(t){var e,i,n=[];for(e=0,i=t.length;e<i;e++)t[e].major&&n.push(e);return n}(t):[],u=l.length,d=l[0],h=l[u-1];if(u>s)return function(t,e,i){var n,a,r=0,o=e[0];for(i=Math.ceil(i),n=0;n<t.length;n++)a=t[n],n===o?(a._index=n,o=e[++r*i]):delete a.label}(t,l,u/s),Ni(t);if(n=function(t,e,i,n){var a,r,o,s,l=function(t){var e,i,n=t.length;if(n<2)return!1;for(i=t[0],e=1;e<n;++e)if(t[e]-t[e-1]!==i)return!1;return i}(t),u=(e.length-1)/n;if(!l)return Math.max(u,1);for(o=0,s=(a=ct.math._factorize(l)).length-1;o<s;o++)if((r=a[o])>u)return r;return Math.max(u,1)}(l,t,0,s),u>0){for(e=0,i=u-1;e<i;e++)Bi(t,n,l[e],l[e+1]);return a=u>1?(h-d)/(u-1):null,Bi(t,n,ct.isNullOrUndef(a)?0:d-a,d),Bi(t,n,h,ct.isNullOrUndef(a)?t.length:h+a),Ni(t)}return Bi(t,n),Ni(t)},_tickSize:function(){var t=this.options.ticks,e=ct.toRadians(this.labelRotation),i=Math.abs(Math.cos(e)),n=Math.abs(Math.sin(e)),a=this._getLabelSizes(),r=t.autoSkipPadding||0,o=a?a.widest.width+r:0,s=a?a.highest.height+r:0;return this.isHorizontal()?s*i>o*n?o/i:s/n:s*n<o*i?s/i:o/n},_isVisible:function(){var t,e,i,n=this.chart,a=this.options.display;if("auto"!==a)return!!a;for(t=0,e=n.data.datasets.length;t<e;++t)if(n.isDatasetVisible(t)&&((i=n.getDatasetMeta(t)).xAxisID===this.id||i.yAxisID===this.id))return!0;return!1},_computeGridLineItems:function(t){var e,i,n,a,r,o,s,l,u,d,h,c,f,g,p,m,v,b=this,x=b.chart,y=b.options,_=y.gridLines,k=y.position,w=_.offsetGridLines,M=b.isHorizontal(),S=b._ticksToDraw,C=S.length+(w?1:0),P=Li(_),A=[],D=_.drawBorder?Ti(_.lineWidth,0,0):0,T=D/2,I=ct._alignPixel,F=function(t){return I(x,t,D)};for("top"===k?(e=F(b.bottom),s=b.bottom-P,u=e-T,h=F(t.top)+T,f=t.bottom):"bottom"===k?(e=F(b.top),h=t.top,f=F(t.bottom)-T,s=e+T,u=b.top+P):"left"===k?(e=F(b.right),o=b.right-P,l=e-T,d=F(t.left)+T,c=t.right):(e=F(b.left),d=t.left,c=F(t.right)-T,o=e+T,l=b.left+P),i=0;i<C;++i)n=S[i]||{},Ai(n.label)&&i<S.length||(i===b.zeroLineIndex&&y.offset===w?(g=_.zeroLineWidth,p=_.zeroLineColor,m=_.zeroLineBorderDash||[],v=_.zeroLineBorderDashOffset||0):(g=Ti(_.lineWidth,i,1),p=Ti(_.color,i,"rgba(0,0,0,0.1)"),m=_.borderDash||[],v=_.borderDashOffset||0),void 0!==(a=Ii(b,n._index||i,w))&&(r=I(x,a,g),M?o=l=d=c=r:s=u=h=f=r,A.push({tx1:o,ty1:s,tx2:l,ty2:u,x1:d,y1:h,x2:c,y2:f,width:g,color:p,borderDash:m,borderDashOffset:v})));return A.ticksLength=C,A.borderValue=e,A},_computeLabelItems:function(){var t,e,i,n,a,r,o,s,l,u,d,h,c=this,f=c.options,g=f.ticks,p=f.position,m=g.mirror,v=c.isHorizontal(),b=c._ticksToDraw,x=zi(g),y=g.padding,_=Li(f.gridLines),k=-ct.toRadians(c.labelRotation),w=[];for("top"===p?(r=c.bottom-_-y,o=k?"left":"center"):"bottom"===p?(r=c.top+_+y,o=k?"right":"center"):"left"===p?(a=c.right-(m?0:_)-y,o=m?"left":"right"):(a=c.left+(m?0:_)+y,o=m?"right":"left"),t=0,e=b.length;t<e;++t)n=(i=b[t]).label,Ai(n)||(s=c.getPixelForTick(i._index||t)+g.labelOffset,u=(l=i.major?x.major:x.minor).lineHeight,d=Pi(n)?n.length:1,v?(a=s,h="top"===p?((k?1:.5)-d)*u:(k?0:.5)*u):(r=s,h=(1-d)*u/2),w.push({x:a,y:r,rotation:k,label:n,font:l,textOffset:h,textAlign:o}));return w},_drawGrid:function(t){var e=this,i=e.options.gridLines;if(i.display){var n,a,r,o,s,l=e.ctx,u=e.chart,d=ct._alignPixel,h=i.drawBorder?Ti(i.lineWidth,0,0):0,c=e._gridLineItems||(e._gridLineItems=e._computeGridLineItems(t));for(r=0,o=c.length;r<o;++r)n=(s=c[r]).width,a=s.color,n&&a&&(l.save(),l.lineWidth=n,l.strokeStyle=a,l.setLineDash&&(l.setLineDash(s.borderDash),l.lineDashOffset=s.borderDashOffset),l.beginPath(),i.drawTicks&&(l.moveTo(s.tx1,s.ty1),l.lineTo(s.tx2,s.ty2)),i.drawOnChartArea&&(l.moveTo(s.x1,s.y1),l.lineTo(s.x2,s.y2)),l.stroke(),l.restore());if(h){var f,g,p,m,v=h,b=Ti(i.lineWidth,c.ticksLength-1,1),x=c.borderValue;e.isHorizontal()?(f=d(u,e.left,v)-v/2,g=d(u,e.right,b)+b/2,p=m=x):(p=d(u,e.top,v)-v/2,m=d(u,e.bottom,b)+b/2,f=g=x),l.lineWidth=h,l.strokeStyle=Ti(i.color,0),l.beginPath(),l.moveTo(f,p),l.lineTo(g,m),l.stroke()}}},_drawLabels:function(){var t=this;if(t.options.ticks.display){var e,i,n,a,r,o,s,l,u=t.ctx,d=t._labelItems||(t._labelItems=t._computeLabelItems());for(e=0,n=d.length;e<n;++e){if(o=(r=d[e]).font,u.save(),u.translate(r.x,r.y),u.rotate(r.rotation),u.font=o.string,u.fillStyle=o.color,u.textBaseline="middle",u.textAlign=r.textAlign,s=r.label,l=r.textOffset,Pi(s))for(i=0,a=s.length;i<a;++i)u.fillText(""+s[i],0,l),l+=o.lineHeight;else u.fillText(s,0,l);u.restore()}}},_drawTitle:function(){var t=this,e=t.ctx,i=t.options,n=i.scaleLabel;if(n.display){var a,r,o=Di(n.fontColor,st.global.defaultFontColor),s=ct.options._parseFont(n),l=ct.options.toPadding(n.padding),u=s.lineHeight/2,d=i.position,h=0;if(t.isHorizontal())a=t.left+t.width/2,r="bottom"===d?t.bottom-u-l.bottom:t.top+u+l.top;else{var c="left"===d;a=c?t.left+u+l.top:t.right-u-l.top,r=t.top+t.height/2,h=c?-.5*Math.PI:.5*Math.PI}e.save(),e.translate(a,r),e.rotate(h),e.textAlign="center",e.textBaseline="middle",e.fillStyle=o,e.font=s.string,e.fillText(n.labelString,0,0),e.restore()}},draw:function(t){this._isVisible()&&(this._drawGrid(t),this._drawTitle(),this._drawLabels())},_layers:function(){var t=this,e=t.options,i=e.ticks&&e.ticks.z||0,n=e.gridLines&&e.gridLines.z||0;return t._isVisible()&&i!==n&&t.draw===t._draw?[{z:n,draw:function(){t._drawGrid.apply(t,arguments),t._drawTitle.apply(t,arguments)}},{z:i,draw:function(){t._drawLabels.apply(t,arguments)}}]:[{z:i,draw:function(){t.draw.apply(t,arguments)}}]},_getMatchingVisibleMetas:function(t){var e=this,i=e.isHorizontal();return e.chart._getSortedVisibleDatasetMetas().filter(function(n){return(!t||n.type===t)&&(i?n.xAxisID===e.id:n.yAxisID===e.id)})}});Ei.prototype._draw=Ei.prototype.draw;var Vi=Ei,Wi=ct.isNullOrUndef,Hi=Vi.extend({determineDataLimits:function(){var t,e=this,i=e._getLabels(),n=e.options.ticks,a=n.min,r=n.max,o=0,s=i.length-1;void 0!==a&&(t=i.indexOf(a))>=0&&(o=t),void 0!==r&&(t=i.indexOf(r))>=0&&(s=t),e.minIndex=o,e.maxIndex=s,e.min=i[o],e.max=i[s]},buildTicks:function(){var t=this._getLabels(),e=this.minIndex,i=this.maxIndex;this.ticks=0===e&&i===t.length-1?t:t.slice(e,i+1)},getLabelForIndex:function(t,e){var i=this.chart;return i.getDatasetMeta(e).controller._getValueScaleId()===this.id?this.getRightValue(i.data.datasets[e].data[t]):this._getLabels()[t]},_configure:function(){var t=this,e=t.options.offset,i=t.ticks;Vi.prototype._configure.call(t),t.isHorizontal()||(t._reversePixels=!t._reversePixels),i&&(t._startValue=t.minIndex-(e?.5:0),t._valueRange=Math.max(i.length-(e?0:1),1))},getPixelForValue:function(t,e,i){var n,a,r,o=this;return Wi(e)||Wi(i)||(t=o.chart.data.datasets[i].data[e]),Wi(t)||(n=o.isHorizontal()?t.x:t.y),(void 0!==n||void 0!==t&&isNaN(e))&&(a=o._getLabels(),t=ct.valueOrDefault(n,t),e=-1!==(r=a.indexOf(t))?r:e,isNaN(e)&&(e=t)),o.getPixelForDecimal((e-o._startValue)/o._valueRange)},getPixelForTick:function(t){var e=this.ticks;return t<0||t>e.length-1?null:this.getPixelForValue(e[t],t+this.minIndex)},getValueForPixel:function(t){var e=Math.round(this._startValue+this.getDecimalForPixel(t)*this._valueRange);return Math.min(Math.max(e,0),this.ticks.length-1)},getBasePixel:function(){return this.bottom}}),ji={position:"bottom"};Hi._defaults=ji;var qi=ct.noop,Ui=ct.isNullOrUndef;var Yi=Vi.extend({getRightValue:function(t){return"string"==typeof t?+t:Vi.prototype.getRightValue.call(this,t)},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;if(e.beginAtZero){var i=ct.sign(t.min),n=ct.sign(t.max);i<0&&n<0?t.max=0:i>0&&n>0&&(t.min=0)}var a=void 0!==e.min||void 0!==e.suggestedMin,r=void 0!==e.max||void 0!==e.suggestedMax;void 0!==e.min?t.min=e.min:void 0!==e.suggestedMin&&(null===t.min?t.min=e.suggestedMin:t.min=Math.min(t.min,e.suggestedMin)),void 0!==e.max?t.max=e.max:void 0!==e.suggestedMax&&(null===t.max?t.max=e.suggestedMax:t.max=Math.max(t.max,e.suggestedMax)),a!==r&&t.min>=t.max&&(a?t.max=t.min+1:t.min=t.max-1),t.min===t.max&&(t.max++,e.beginAtZero||t.min--)},getTickLimit:function(){var t,e=this.options.ticks,i=e.stepSize,n=e.maxTicksLimit;return i?t=Math.ceil(this.max/i)-Math.floor(this.min/i)+1:(t=this._computeTickLimit(),n=n||11),n&&(t=Math.min(n,t)),t},_computeTickLimit:function(){return Number.POSITIVE_INFINITY},handleDirectionalChanges:qi,buildTicks:function(){var t=this,e=t.options.ticks,i=t.getTickLimit(),n={maxTicks:i=Math.max(2,i),min:e.min,max:e.max,precision:e.precision,stepSize:ct.valueOrDefault(e.fixedStepSize,e.stepSize)},a=t.ticks=function(t,e){var i,n,a,r,o=[],s=t.stepSize,l=s||1,u=t.maxTicks-1,d=t.min,h=t.max,c=t.precision,f=e.min,g=e.max,p=ct.niceNum((g-f)/u/l)*l;if(p<1e-14&&Ui(d)&&Ui(h))return[f,g];(r=Math.ceil(g/p)-Math.floor(f/p))>u&&(p=ct.niceNum(r*p/u/l)*l),s||Ui(c)?i=Math.pow(10,ct._decimalPlaces(p)):(i=Math.pow(10,c),p=Math.ceil(p*i)/i),n=Math.floor(f/p)*p,a=Math.ceil(g/p)*p,s&&(!Ui(d)&&ct.almostWhole(d/p,p/1e3)&&(n=d),!Ui(h)&&ct.almostWhole(h/p,p/1e3)&&(a=h)),r=(a-n)/p,r=ct.almostEquals(r,Math.round(r),p/1e3)?Math.round(r):Math.ceil(r),n=Math.round(n*i)/i,a=Math.round(a*i)/i,o.push(Ui(d)?n:d);for(var m=1;m<r;++m)o.push(Math.round((n+m*p)*i)/i);return o.push(Ui(h)?a:h),o}(n,t);t.handleDirectionalChanges(),t.max=ct.max(a),t.min=ct.min(a),e.reverse?(a.reverse(),t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max)},convertTicksToLabels:function(){var t=this;t.ticksAsNumbers=t.ticks.slice(),t.zeroLineIndex=t.ticks.indexOf(0),Vi.prototype.convertTicksToLabels.call(t)},_configure:function(){var t,e=this,i=e.getTicks(),n=e.min,a=e.max;Vi.prototype._configure.call(e),e.options.offset&&i.length&&(n-=t=(a-n)/Math.max(i.length-1,1)/2,a+=t),e._startValue=n,e._endValue=a,e._valueRange=a-n}}),Gi={position:"left",ticks:{callback:Ci.formatters.linear}};function Xi(t,e,i,n){var a,r,o=t.options,s=function(t,e,i){var n=[i.type,void 0===e&&void 0===i.stack?i.index:"",i.stack].join(".");return void 0===t[n]&&(t[n]={pos:[],neg:[]}),t[n]}(e,o.stacked,i),l=s.pos,u=s.neg,d=n.length;for(a=0;a<d;++a)r=t._parseValue(n[a]),isNaN(r.min)||isNaN(r.max)||i.data[a].hidden||(l[a]=l[a]||0,u[a]=u[a]||0,o.relativePoints?l[a]=100:r.min<0||r.max<0?u[a]+=r.min:l[a]+=r.max)}function Ki(t,e,i){var n,a,r=i.length;for(n=0;n<r;++n)a=t._parseValue(i[n]),isNaN(a.min)||isNaN(a.max)||e.data[n].hidden||(t.min=Math.min(t.min,a.min),t.max=Math.max(t.max,a.max))}var Zi=Yi.extend({determineDataLimits:function(){var t,e,i,n,a=this,r=a.options,o=a.chart.data.datasets,s=a._getMatchingVisibleMetas(),l=r.stacked,u={},d=s.length;if(a.min=Number.POSITIVE_INFINITY,a.max=Number.NEGATIVE_INFINITY,void 0===l)for(t=0;!l&&t<d;++t)l=void 0!==(e=s[t]).stack;for(t=0;t<d;++t)i=o[(e=s[t]).index].data,l?Xi(a,u,e,i):Ki(a,e,i);ct.each(u,function(t){n=t.pos.concat(t.neg),a.min=Math.min(a.min,ct.min(n)),a.max=Math.max(a.max,ct.max(n))}),a.min=ct.isFinite(a.min)&&!isNaN(a.min)?a.min:0,a.max=ct.isFinite(a.max)&&!isNaN(a.max)?a.max:1,a.handleTickRangeOptions()},_computeTickLimit:function(){var t;return this.isHorizontal()?Math.ceil(this.width/40):(t=ct.options._parseFont(this.options.ticks),Math.ceil(this.height/t.lineHeight))},handleDirectionalChanges:function(){this.isHorizontal()||this.ticks.reverse()},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForValue:function(t){return this.getPixelForDecimal((+this.getRightValue(t)-this._startValue)/this._valueRange)},getValueForPixel:function(t){return this._startValue+this.getDecimalForPixel(t)*this._valueRange},getPixelForTick:function(t){var e=this.ticksAsNumbers;return t<0||t>e.length-1?null:this.getPixelForValue(e[t])}}),$i=Gi;Zi._defaults=$i;var Ji=ct.valueOrDefault,Qi=ct.math.log10;var tn={position:"left",ticks:{callback:Ci.formatters.logarithmic}};function en(t,e){return ct.isFinite(t)&&t>=0?t:e}var nn=Vi.extend({determineDataLimits:function(){var t,e,i,n,a,r,o=this,s=o.options,l=o.chart,u=l.data.datasets,d=o.isHorizontal();function h(t){return d?t.xAxisID===o.id:t.yAxisID===o.id}o.min=Number.POSITIVE_INFINITY,o.max=Number.NEGATIVE_INFINITY,o.minNotZero=Number.POSITIVE_INFINITY;var c=s.stacked;if(void 0===c)for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e)&&void 0!==e.stack){c=!0;break}if(s.stacked||c){var f={};for(t=0;t<u.length;t++){var g=[(e=l.getDatasetMeta(t)).type,void 0===s.stacked&&void 0===e.stack?t:"",e.stack].join(".");if(l.isDatasetVisible(t)&&h(e))for(void 0===f[g]&&(f[g]=[]),a=0,r=(n=u[t].data).length;a<r;a++){var p=f[g];i=o._parseValue(n[a]),isNaN(i.min)||isNaN(i.max)||e.data[a].hidden||i.min<0||i.max<0||(p[a]=p[a]||0,p[a]+=i.max)}}ct.each(f,function(t){if(t.length>0){var e=ct.min(t),i=ct.max(t);o.min=Math.min(o.min,e),o.max=Math.max(o.max,i)}})}else for(t=0;t<u.length;t++)if(e=l.getDatasetMeta(t),l.isDatasetVisible(t)&&h(e))for(a=0,r=(n=u[t].data).length;a<r;a++)i=o._parseValue(n[a]),isNaN(i.min)||isNaN(i.max)||e.data[a].hidden||i.min<0||i.max<0||(o.min=Math.min(i.min,o.min),o.max=Math.max(i.max,o.max),0!==i.min&&(o.minNotZero=Math.min(i.min,o.minNotZero)));o.min=ct.isFinite(o.min)?o.min:null,o.max=ct.isFinite(o.max)?o.max:null,o.minNotZero=ct.isFinite(o.minNotZero)?o.minNotZero:null,this.handleTickRangeOptions()},handleTickRangeOptions:function(){var t=this,e=t.options.ticks;t.min=en(e.min,t.min),t.max=en(e.max,t.max),t.min===t.max&&(0!==t.min&&null!==t.min?(t.min=Math.pow(10,Math.floor(Qi(t.min))-1),t.max=Math.pow(10,Math.floor(Qi(t.max))+1)):(t.min=1,t.max=10)),null===t.min&&(t.min=Math.pow(10,Math.floor(Qi(t.max))-1)),null===t.max&&(t.max=0!==t.min?Math.pow(10,Math.floor(Qi(t.min))+1):10),null===t.minNotZero&&(t.min>0?t.minNotZero=t.min:t.max<1?t.minNotZero=Math.pow(10,Math.floor(Qi(t.max))):t.minNotZero=1)},buildTicks:function(){var t=this,e=t.options.ticks,i=!t.isHorizontal(),n={min:en(e.min),max:en(e.max)},a=t.ticks=function(t,e){var i,n,a=[],r=Ji(t.min,Math.pow(10,Math.floor(Qi(e.min)))),o=Math.floor(Qi(e.max)),s=Math.ceil(e.max/Math.pow(10,o));0===r?(i=Math.floor(Qi(e.minNotZero)),n=Math.floor(e.minNotZero/Math.pow(10,i)),a.push(r),r=n*Math.pow(10,i)):(i=Math.floor(Qi(r)),n=Math.floor(r/Math.pow(10,i)));var l=i<0?Math.pow(10,Math.abs(i)):1;do{a.push(r),10===++n&&(n=1,l=++i>=0?1:l),r=Math.round(n*Math.pow(10,i)*l)/l}while(i<o||i===o&&n<s);var u=Ji(t.max,r);return a.push(u),a}(n,t);t.max=ct.max(a),t.min=ct.min(a),e.reverse?(i=!i,t.start=t.max,t.end=t.min):(t.start=t.min,t.end=t.max),i&&a.reverse()},convertTicksToLabels:function(){this.tickValues=this.ticks.slice(),Vi.prototype.convertTicksToLabels.call(this)},getLabelForIndex:function(t,e){return this._getScaleLabel(this.chart.data.datasets[e].data[t])},getPixelForTick:function(t){var e=this.tickValues;return t<0||t>e.length-1?null:this.getPixelForValue(e[t])},_getFirstTickValue:function(t){var e=Math.floor(Qi(t));return Math.floor(t/Math.pow(10,e))*Math.pow(10,e)},_configure:function(){var t=this,e=t.min,i=0;Vi.prototype._configure.call(t),0===e&&(e=t._getFirstTickValue(t.minNotZero),i=Ji(t.options.ticks.fontSize,st.global.defaultFontSize)/t._length),t._startValue=Qi(e),t._valueOffset=i,t._valueRange=(Qi(t.max)-Qi(e))/(1-i)},getPixelForValue:function(t){var e=this,i=0;return(t=+e.getRightValue(t))>e.min&&t>0&&(i=(Qi(t)-e._startValue)/e._valueRange+e._valueOffset),e.getPixelForDecimal(i)},getValueForPixel:function(t){var e=this,i=e.getDecimalForPixel(t);return 0===i&&0===e.min?0:Math.pow(10,e._startValue+(i-e._valueOffset)*e._valueRange)}}),an=tn;nn._defaults=an;var rn=ct.valueOrDefault,on=ct.valueAtIndexOrDefault,sn=ct.options.resolve,ln={display:!0,animate:!0,position:"chartArea",angleLines:{display:!0,color:"rgba(0,0,0,0.1)",lineWidth:1,borderDash:[],borderDashOffset:0},gridLines:{circular:!1},ticks:{showLabelBackdrop:!0,backdropColor:"rgba(255,255,255,0.75)",backdropPaddingY:2,backdropPaddingX:2,callback:Ci.formatters.linear},pointLabels:{display:!0,fontSize:10,callback:function(t){return t}}};function un(t){var e=t.ticks;return e.display&&t.display?rn(e.fontSize,st.global.defaultFontSize)+2*e.backdropPaddingY:0}function dn(t,e,i,n,a){return t===n||t===a?{start:e-i/2,end:e+i/2}:t<n||t>a?{start:e-i,end:e}:{start:e,end:e+i}}function hn(t){return 0===t||180===t?"center":t<180?"left":"right"}function cn(t,e,i,n){var a,r,o=i.y+n/2;if(ct.isArray(e))for(a=0,r=e.length;a<r;++a)t.fillText(e[a],i.x,o),o+=n;else t.fillText(e,i.x,o)}function fn(t,e,i){90===t||270===t?i.y-=e.h/2:(t>270||t<90)&&(i.y-=e.h)}function gn(t){return ct.isNumber(t)?t:0}var pn=Yi.extend({setDimensions:function(){var t=this;t.width=t.maxWidth,t.height=t.maxHeight,t.paddingTop=un(t.options)/2,t.xCenter=Math.floor(t.width/2),t.yCenter=Math.floor((t.height-t.paddingTop)/2),t.drawingArea=Math.min(t.height-t.paddingTop,t.width)/2},determineDataLimits:function(){var t=this,e=t.chart,i=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;ct.each(e.data.datasets,function(a,r){if(e.isDatasetVisible(r)){var o=e.getDatasetMeta(r);ct.each(a.data,function(e,a){var r=+t.getRightValue(e);isNaN(r)||o.data[a].hidden||(i=Math.min(r,i),n=Math.max(r,n))})}}),t.min=i===Number.POSITIVE_INFINITY?0:i,t.max=n===Number.NEGATIVE_INFINITY?0:n,t.handleTickRangeOptions()},_computeTickLimit:function(){return Math.ceil(this.drawingArea/un(this.options))},convertTicksToLabels:function(){var t=this;Yi.prototype.convertTicksToLabels.call(t),t.pointLabels=t.chart.data.labels.map(function(){var e=ct.callback(t.options.pointLabels.callback,arguments,t);return e||0===e?e:""})},getLabelForIndex:function(t,e){return+this.getRightValue(this.chart.data.datasets[e].data[t])},fit:function(){var t=this.options;t.display&&t.pointLabels.display?function(t){var e,i,n,a=ct.options._parseFont(t.options.pointLabels),r={l:0,r:t.width,t:0,b:t.height-t.paddingTop},o={};t.ctx.font=a.string,t._pointLabelSizes=[];var s,l,u,d=t.chart.data.labels.length;for(e=0;e<d;e++){n=t.getPointPosition(e,t.drawingArea+5),s=t.ctx,l=a.lineHeight,u=t.pointLabels[e],i=ct.isArray(u)?{w:ct.longestText(s,s.font,u),h:u.length*l}:{w:s.measureText(u).width,h:l},t._pointLabelSizes[e]=i;var h=t.getIndexAngle(e),c=ct.toDegrees(h)%360,f=dn(c,n.x,i.w,0,180),g=dn(c,n.y,i.h,90,270);f.start<r.l&&(r.l=f.start,o.l=h),f.end>r.r&&(r.r=f.end,o.r=h),g.start<r.t&&(r.t=g.start,o.t=h),g.end>r.b&&(r.b=g.end,o.b=h)}t.setReductions(t.drawingArea,r,o)}(this):this.setCenterPoint(0,0,0,0)},setReductions:function(t,e,i){var n=this,a=e.l/Math.sin(i.l),r=Math.max(e.r-n.width,0)/Math.sin(i.r),o=-e.t/Math.cos(i.t),s=-Math.max(e.b-(n.height-n.paddingTop),0)/Math.cos(i.b);a=gn(a),r=gn(r),o=gn(o),s=gn(s),n.drawingArea=Math.min(Math.floor(t-(a+r)/2),Math.floor(t-(o+s)/2)),n.setCenterPoint(a,r,o,s)},setCenterPoint:function(t,e,i,n){var a=this,r=a.width-e-a.drawingArea,o=t+a.drawingArea,s=i+a.drawingArea,l=a.height-a.paddingTop-n-a.drawingArea;a.xCenter=Math.floor((o+r)/2+a.left),a.yCenter=Math.floor((s+l)/2+a.top+a.paddingTop)},getIndexAngle:function(t){var e=this.chart,i=(t*(360/e.data.labels.length)+((e.options||{}).startAngle||0))%360;return(i<0?i+360:i)*Math.PI*2/360},getDistanceFromCenterForValue:function(t){var e=this;if(ct.isNullOrUndef(t))return NaN;var i=e.drawingArea/(e.max-e.min);return e.options.ticks.reverse?(e.max-t)*i:(t-e.min)*i},getPointPosition:function(t,e){var i=this.getIndexAngle(t)-Math.PI/2;return{x:Math.cos(i)*e+this.xCenter,y:Math.sin(i)*e+this.yCenter}},getPointPositionForValue:function(t,e){return this.getPointPosition(t,this.getDistanceFromCenterForValue(e))},getBasePosition:function(t){var e=this.min,i=this.max;return this.getPointPositionForValue(t||0,this.beginAtZero?0:e<0&&i<0?i:e>0&&i>0?e:0)},_drawGrid:function(){var t,e,i,n=this,a=n.ctx,r=n.options,o=r.gridLines,s=r.angleLines,l=rn(s.lineWidth,o.lineWidth),u=rn(s.color,o.color);if(r.pointLabels.display&&function(t){var e=t.ctx,i=t.options,n=i.pointLabels,a=un(i),r=t.getDistanceFromCenterForValue(i.ticks.reverse?t.min:t.max),o=ct.options._parseFont(n);e.save(),e.font=o.string,e.textBaseline="middle";for(var s=t.chart.data.labels.length-1;s>=0;s--){var l=0===s?a/2:0,u=t.getPointPosition(s,r+l+5),d=on(n.fontColor,s,st.global.defaultFontColor);e.fillStyle=d;var h=t.getIndexAngle(s),c=ct.toDegrees(h);e.textAlign=hn(c),fn(c,t._pointLabelSizes[s],u),cn(e,t.pointLabels[s],u,o.lineHeight)}e.restore()}(n),o.display&&ct.each(n.ticks,function(t,i){0!==i&&(e=n.getDistanceFromCenterForValue(n.ticksAsNumbers[i]),function(t,e,i,n){var a,r=t.ctx,o=e.circular,s=t.chart.data.labels.length,l=on(e.color,n-1),u=on(e.lineWidth,n-1);if((o||s)&&l&&u){if(r.save(),r.strokeStyle=l,r.lineWidth=u,r.setLineDash&&(r.setLineDash(e.borderDash||[]),r.lineDashOffset=e.borderDashOffset||0),r.beginPath(),o)r.arc(t.xCenter,t.yCenter,i,0,2*Math.PI);else{a=t.getPointPosition(0,i),r.moveTo(a.x,a.y);for(var d=1;d<s;d++)a=t.getPointPosition(d,i),r.lineTo(a.x,a.y)}r.closePath(),r.stroke(),r.restore()}}(n,o,e,i))}),s.display&&l&&u){for(a.save(),a.lineWidth=l,a.strokeStyle=u,a.setLineDash&&(a.setLineDash(sn([s.borderDash,o.borderDash,[]])),a.lineDashOffset=sn([s.borderDashOffset,o.borderDashOffset,0])),t=n.chart.data.labels.length-1;t>=0;t--)e=n.getDistanceFromCenterForValue(r.ticks.reverse?n.min:n.max),i=n.getPointPosition(t,e),a.beginPath(),a.moveTo(n.xCenter,n.yCenter),a.lineTo(i.x,i.y),a.stroke();a.restore()}},_drawLabels:function(){var t=this,e=t.ctx,i=t.options.ticks;if(i.display){var n,a,r=t.getIndexAngle(0),o=ct.options._parseFont(i),s=rn(i.fontColor,st.global.defaultFontColor);e.save(),e.font=o.string,e.translate(t.xCenter,t.yCenter),e.rotate(r),e.textAlign="center",e.textBaseline="middle",ct.each(t.ticks,function(r,l){(0!==l||i.reverse)&&(n=t.getDistanceFromCenterForValue(t.ticksAsNumbers[l]),i.showLabelBackdrop&&(a=e.measureText(r).width,e.fillStyle=i.backdropColor,e.fillRect(-a/2-i.backdropPaddingX,-n-o.size/2-i.backdropPaddingY,a+2*i.backdropPaddingX,o.size+2*i.backdropPaddingY)),e.fillStyle=s,e.fillText(r,0,-n))}),e.restore()}},_drawTitle:ct.noop}),mn=ln;pn._defaults=mn;var vn=ct._deprecated,bn=ct.options.resolve,xn=ct.valueOrDefault,yn=Number.MIN_SAFE_INTEGER||-9007199254740991,_n=Number.MAX_SAFE_INTEGER||9007199254740991,kn={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},wn=Object.keys(kn);function Mn(t,e){return t-e}function Sn(t){return ct.valueOrDefault(t.time.min,t.ticks.min)}function Cn(t){return ct.valueOrDefault(t.time.max,t.ticks.max)}function Pn(t,e,i,n){var a=function(t,e,i){for(var n,a,r,o=0,s=t.length-1;o>=0&&o<=s;){if(a=t[(n=o+s>>1)-1]||null,r=t[n],!a)return{lo:null,hi:r};if(r[e]<i)o=n+1;else{if(!(a[e]>i))return{lo:a,hi:r};s=n-1}}return{lo:r,hi:null}}(t,e,i),r=a.lo?a.hi?a.lo:t[t.length-2]:t[0],o=a.lo?a.hi?a.hi:t[t.length-1]:t[1],s=o[e]-r[e],l=s?(i-r[e])/s:0,u=(o[n]-r[n])*l;return r[n]+u}function An(t,e){var i=t._adapter,n=t.options.time,a=n.parser,r=a||n.format,o=e;return"function"==typeof a&&(o=a(o)),ct.isFinite(o)||(o="string"==typeof r?i.parse(o,r):i.parse(o)),null!==o?+o:(a||"function"!=typeof r||(o=r(e),ct.isFinite(o)||(o=i.parse(o))),o)}function Dn(t,e){if(ct.isNullOrUndef(e))return null;var i=t.options.time,n=An(t,t.getRightValue(e));return null===n?n:(i.round&&(n=+t._adapter.startOf(n,i.round)),n)}function Tn(t,e,i,n){var a,r,o,s=wn.length;for(a=wn.indexOf(t);a<s-1;++a)if(o=(r=kn[wn[a]]).steps?r.steps:_n,r.common&&Math.ceil((i-e)/(o*r.size))<=n)return wn[a];return wn[s-1]}function In(t,e,i){var n,a,r=[],o={},s=e.length;for(n=0;n<s;++n)o[a=e[n]]=n,r.push({value:a,major:!1});return 0!==s&&i?function(t,e,i,n){var a,r,o=t._adapter,s=+o.startOf(e[0].value,n),l=e[e.length-1].value;for(a=s;a<=l;a=+o.add(a,1,n))(r=i[a])>=0&&(e[r].major=!0);return e}(t,r,o,i):r}var Fn=Vi.extend({initialize:function(){this.mergeTicksOptions(),Vi.prototype.initialize.call(this)},update:function(){var t=this,e=t.options,i=e.time||(e.time={}),n=t._adapter=new Si._date(e.adapters.date);return vn("time scale",i.format,"time.format","time.parser"),vn("time scale",i.min,"time.min","ticks.min"),vn("time scale",i.max,"time.max","ticks.max"),ct.mergeIf(i.displayFormats,n.formats()),Vi.prototype.update.apply(t,arguments)},getRightValue:function(t){return t&&void 0!==t.t&&(t=t.t),Vi.prototype.getRightValue.call(this,t)},determineDataLimits:function(){var t,e,i,n,a,r,o,s=this,l=s.chart,u=s._adapter,d=s.options,h=d.time.unit||"day",c=_n,f=yn,g=[],p=[],m=[],v=s._getLabels();for(t=0,i=v.length;t<i;++t)m.push(Dn(s,v[t]));for(t=0,i=(l.data.datasets||[]).length;t<i;++t)if(l.isDatasetVisible(t))if(a=l.data.datasets[t].data,ct.isObject(a[0]))for(p[t]=[],e=0,n=a.length;e<n;++e)r=Dn(s,a[e]),g.push(r),p[t][e]=r;else p[t]=m.slice(0),o||(g=g.concat(m),o=!0);else p[t]=[];m.length&&(c=Math.min(c,m[0]),f=Math.max(f,m[m.length-1])),g.length&&(g=i>1?function(t){var e,i,n,a={},r=[];for(e=0,i=t.length;e<i;++e)a[n=t[e]]||(a[n]=!0,r.push(n));return r}(g).sort(Mn):g.sort(Mn),c=Math.min(c,g[0]),f=Math.max(f,g[g.length-1])),c=Dn(s,Sn(d))||c,f=Dn(s,Cn(d))||f,c=c===_n?+u.startOf(Date.now(),h):c,f=f===yn?+u.endOf(Date.now(),h)+1:f,s.min=Math.min(c,f),s.max=Math.max(c+1,f),s._table=[],s._timestamps={data:g,datasets:p,labels:m}},buildTicks:function(){var t,e,i,n=this,a=n.min,r=n.max,o=n.options,s=o.ticks,l=o.time,u=n._timestamps,d=[],h=n.getLabelCapacity(a),c=s.source,f=o.distribution;for(u="data"===c||"auto"===c&&"series"===f?u.data:"labels"===c?u.labels:function(t,e,i,n){var a,r=t._adapter,o=t.options,s=o.time,l=s.unit||Tn(s.minUnit,e,i,n),u=bn([s.stepSize,s.unitStepSize,1]),d="week"===l&&s.isoWeekday,h=e,c=[];if(d&&(h=+r.startOf(h,"isoWeek",d)),h=+r.startOf(h,d?"day":l),r.diff(i,e,l)>1e5*u)throw e+" and "+i+" are too far apart with stepSize of "+u+" "+l;for(a=h;a<i;a=+r.add(a,u,l))c.push(a);return a!==i&&"ticks"!==o.bounds||c.push(a),c}(n,a,r,h),"ticks"===o.bounds&&u.length&&(a=u[0],r=u[u.length-1]),a=Dn(n,Sn(o))||a,r=Dn(n,Cn(o))||r,t=0,e=u.length;t<e;++t)(i=u[t])>=a&&i<=r&&d.push(i);return n.min=a,n.max=r,n._unit=l.unit||(s.autoSkip?Tn(l.minUnit,n.min,n.max,h):function(t,e,i,n,a){var r,o;for(r=wn.length-1;r>=wn.indexOf(i);r--)if(o=wn[r],kn[o].common&&t._adapter.diff(a,n,o)>=e-1)return o;return wn[i?wn.indexOf(i):0]}(n,d.length,l.minUnit,n.min,n.max)),n._majorUnit=s.major.enabled&&"year"!==n._unit?function(t){for(var e=wn.indexOf(t)+1,i=wn.length;e<i;++e)if(kn[wn[e]].common)return wn[e]}(n._unit):void 0,n._table=function(t,e,i,n){if("linear"===n||!t.length)return[{time:e,pos:0},{time:i,pos:1}];var a,r,o,s,l,u=[],d=[e];for(a=0,r=t.length;a<r;++a)(s=t[a])>e&&s<i&&d.push(s);for(d.push(i),a=0,r=d.length;a<r;++a)l=d[a+1],o=d[a-1],s=d[a],void 0!==o&&void 0!==l&&Math.round((l+o)/2)===s||u.push({time:s,pos:a/(r-1)});return u}(n._timestamps.data,a,r,f),n._offsets=function(t,e,i,n,a){var r,o,s=0,l=0;return a.offset&&e.length&&(r=Pn(t,"time",e[0],"pos"),s=1===e.length?1-r:(Pn(t,"time",e[1],"pos")-r)/2,o=Pn(t,"time",e[e.length-1],"pos"),l=1===e.length?o:(o-Pn(t,"time",e[e.length-2],"pos"))/2),{start:s,end:l,factor:1/(s+1+l)}}(n._table,d,0,0,o),s.reverse&&d.reverse(),In(n,d,n._majorUnit)},getLabelForIndex:function(t,e){var i=this,n=i._adapter,a=i.chart.data,r=i.options.time,o=a.labels&&t<a.labels.length?a.labels[t]:"",s=a.datasets[e].data[t];return ct.isObject(s)&&(o=i.getRightValue(s)),r.tooltipFormat?n.format(An(i,o),r.tooltipFormat):"string"==typeof o?o:n.format(An(i,o),r.displayFormats.datetime)},tickFormatFunction:function(t,e,i,n){var a=this._adapter,r=this.options,o=r.time.displayFormats,s=o[this._unit],l=this._majorUnit,u=o[l],d=i[e],h=r.ticks,c=l&&u&&d&&d.major,f=a.format(t,n||(c?u:s)),g=c?h.major:h.minor,p=bn([g.callback,g.userCallback,h.callback,h.userCallback]);return p?p(f,e,i):f},convertTicksToLabels:function(t){var e,i,n=[];for(e=0,i=t.length;e<i;++e)n.push(this.tickFormatFunction(t[e].value,e,t));return n},getPixelForOffset:function(t){var e=this._offsets,i=Pn(this._table,"time",t,"pos");return this.getPixelForDecimal((e.start+i)*e.factor)},getPixelForValue:function(t,e,i){var n=null;if(void 0!==e&&void 0!==i&&(n=this._timestamps.datasets[i][e]),null===n&&(n=Dn(this,t)),null!==n)return this.getPixelForOffset(n)},getPixelForTick:function(t){var e=this.getTicks();return t>=0&&t<e.length?this.getPixelForOffset(e[t].value):null},getValueForPixel:function(t){var e=this._offsets,i=this.getDecimalForPixel(t)/e.factor-e.end,n=Pn(this._table,"pos",i,"time");return this._adapter._create(n)},_getLabelSize:function(t){var e=this.options.ticks,i=this.ctx.measureText(t).width,n=ct.toRadians(this.isHorizontal()?e.maxRotation:e.minRotation),a=Math.cos(n),r=Math.sin(n),o=xn(e.fontSize,st.global.defaultFontSize);return{w:i*a+o*r,h:i*r+o*a}},getLabelWidth:function(t){return this._getLabelSize(t).w},getLabelCapacity:function(t){var e=this,i=e.options.time,n=i.displayFormats,a=n[i.unit]||n.millisecond,r=e.tickFormatFunction(t,0,In(e,[t],e._majorUnit),a),o=e._getLabelSize(r),s=Math.floor(e.isHorizontal()?e.width/o.w:e.height/o.h);return e.options.offset&&s--,s>0?s:1}}),Ln={position:"bottom",distribution:"linear",bounds:"data",adapters:{},time:{parser:!1,unit:!1,round:!1,displayFormat:!1,isoWeekday:!1,minUnit:"millisecond",displayFormats:{}},ticks:{autoSkip:!1,source:"auto",major:{enabled:!1}}};Fn._defaults=Ln;var On={category:Hi,linear:Zi,logarithmic:nn,radialLinear:pn,time:Fn},Rn={datetime:"MMM D, YYYY, h:mm:ss a",millisecond:"h:mm:ss.SSS a",second:"h:mm:ss a",minute:"h:mm a",hour:"hA",day:"MMM D",week:"ll",month:"MMM YYYY",quarter:"[Q]Q - YYYY",year:"YYYY"};Si._date.override("function"==typeof t?{_id:"moment",formats:function(){return Rn},parse:function(e,i){return"string"==typeof e&&"string"==typeof i?e=t(e,i):e instanceof t||(e=t(e)),e.isValid()?e.valueOf():null},format:function(e,i){return t(e).format(i)},add:function(e,i,n){return t(e).add(i,n).valueOf()},diff:function(e,i,n){return t(e).diff(t(i),n)},startOf:function(e,i,n){return e=t(e),"isoWeek"===i?e.isoWeekday(n).valueOf():e.startOf(i).valueOf()},endOf:function(e,i){return t(e).endOf(i).valueOf()},_create:function(e){return t(e)}}:{}),st._set("global",{plugins:{filler:{propagate:!0}}});var zn={dataset:function(t){var e=t.fill,i=t.chart,n=i.getDatasetMeta(e),a=n&&i.isDatasetVisible(e)&&n.dataset._children||[],r=a.length||0;return r?function(t,e){return e<r&&a[e]._view||null}:null},boundary:function(t){var e=t.boundary,i=e?e.x:null,n=e?e.y:null;return ct.isArray(e)?function(t,i){return e[i]}:function(t){return{x:null===i?t.x:i,y:null===n?t.y:n}}}};function Nn(t,e,i){var n,a=t._model||{},r=a.fill;if(void 0===r&&(r=!!a.backgroundColor),!1===r||null===r)return!1;if(!0===r)return"origin";if(n=parseFloat(r,10),isFinite(n)&&Math.floor(n)===n)return"-"!==r[0]&&"+"!==r[0]||(n=e+n),!(n===e||n<0||n>=i)&&n;switch(r){case"bottom":return"start";case"top":return"end";case"zero":return"origin";case"origin":case"start":case"end":return r;default:return!1}}function Bn(t){return(t.el._scale||{}).getPointPositionForValue?function(t){var e,i,n,a,r,o=t.el._scale,s=o.options,l=o.chart.data.labels.length,u=t.fill,d=[];if(!l)return null;for(e=s.ticks.reverse?o.max:o.min,i=s.ticks.reverse?o.min:o.max,n=o.getPointPositionForValue(0,e),a=0;a<l;++a)r="start"===u||"end"===u?o.getPointPositionForValue(a,"start"===u?e:i):o.getBasePosition(a),s.gridLines.circular&&(r.cx=n.x,r.cy=n.y,r.angle=o.getIndexAngle(a)-Math.PI/2),d.push(r);return d}(t):function(t){var e,i=t.el._model||{},n=t.el._scale||{},a=t.fill,r=null;if(isFinite(a))return null;if("start"===a?r=void 0===i.scaleBottom?n.bottom:i.scaleBottom:"end"===a?r=void 0===i.scaleTop?n.top:i.scaleTop:void 0!==i.scaleZero?r=i.scaleZero:n.getBasePixel&&(r=n.getBasePixel()),null!=r){if(void 0!==r.x&&void 0!==r.y)return r;if(ct.isFinite(r))return{x:(e=n.isHorizontal())?r:null,y:e?null:r}}return null}(t)}function En(t,e,i){var n,a=t[e].fill,r=[e];if(!i)return a;for(;!1!==a&&-1===r.indexOf(a);){if(!isFinite(a))return a;if(!(n=t[a]))return!1;if(n.visible)return a;r.push(a),a=n.fill}return!1}function Vn(t){var e=t.fill,i="dataset";return!1===e?null:(isFinite(e)||(i="boundary"),zn[i](t))}function Wn(t){return t&&!t.skip}function Hn(t,e,i,n,a){var r,o,s,l;if(n&&a){for(t.moveTo(e[0].x,e[0].y),r=1;r<n;++r)ct.canvas.lineTo(t,e[r-1],e[r]);if(void 0===i[0].angle)for(t.lineTo(i[a-1].x,i[a-1].y),r=a-1;r>0;--r)ct.canvas.lineTo(t,i[r],i[r-1],!0);else for(o=i[0].cx,s=i[0].cy,l=Math.sqrt(Math.pow(i[0].x-o,2)+Math.pow(i[0].y-s,2)),r=a-1;r>0;--r)t.arc(o,s,l,i[r].angle,i[r-1].angle,!0)}}function jn(t,e,i,n,a,r){var o,s,l,u,d,h,c,f,g=e.length,p=n.spanGaps,m=[],v=[],b=0,x=0;for(t.beginPath(),o=0,s=g;o<s;++o)d=i(u=e[l=o%g]._view,l,n),h=Wn(u),c=Wn(d),r&&void 0===f&&h&&(s=g+(f=o+1)),h&&c?(b=m.push(u),x=v.push(d)):b&&x&&(p?(h&&m.push(u),c&&v.push(d)):(Hn(t,m,v,b,x),b=x=0,m=[],v=[]));Hn(t,m,v,b,x),t.closePath(),t.fillStyle=a,t.fill()}var qn={id:"filler",afterDatasetsUpdate:function(t,e){var i,n,a,r,o=(t.data.datasets||[]).length,s=e.propagate,l=[];for(n=0;n<o;++n)r=null,(a=(i=t.getDatasetMeta(n)).dataset)&&a._model&&a instanceof Yt.Line&&(r={visible:t.isDatasetVisible(n),fill:Nn(a,n,o),chart:t,el:a}),i.$filler=r,l.push(r);for(n=0;n<o;++n)(r=l[n])&&(r.fill=En(l,n,s),r.boundary=Bn(r),r.mapper=Vn(r))},beforeDatasetsDraw:function(t){var e,i,n,a,r,o,s,l=t._getSortedVisibleDatasetMetas(),u=t.ctx;for(i=l.length-1;i>=0;--i)(e=l[i].$filler)&&e.visible&&(a=(n=e.el)._view,r=n._children||[],o=e.mapper,s=a.backgroundColor||st.global.defaultColor,o&&s&&r.length&&(ct.canvas.clipArea(u,t.chartArea),jn(u,r,o,a,s,n._loop),ct.canvas.unclipArea(u)))}},Un=ct.rtl.getRtlAdapter,Yn=ct.noop,Gn=ct.valueOrDefault;function Xn(t,e){return t.usePointStyle&&t.boxWidth>e?e:t.boxWidth}st._set("global",{legend:{display:!0,position:"top",align:"center",fullWidth:!0,reverse:!1,weight:1e3,onClick:function(t,e){var i=e.datasetIndex,n=this.chart,a=n.getDatasetMeta(i);a.hidden=null===a.hidden?!n.data.datasets[i].hidden:null,n.update()},onHover:null,onLeave:null,labels:{boxWidth:40,padding:10,generateLabels:function(t){var e=t.data.datasets,i=t.options.legend||{},n=i.labels&&i.labels.usePointStyle;return t._getSortedDatasetMetas().map(function(i,a){var r=i.controller.getStyle(n?0:void 0);return{text:e[i.index].label,fillStyle:r.backgroundColor,hidden:!t.isDatasetVisible(a),lineCap:r.borderCapStyle,lineDash:r.borderDash,lineDashOffset:r.borderDashOffset,lineJoin:r.borderJoinStyle,lineWidth:r.borderWidth,strokeStyle:r.borderColor,pointStyle:r.pointStyle,rotation:r.rotation,datasetIndex:a}},this)}}},legendCallback:function(t){var e,i,n,a=document.createElement("ul"),r=t.data.datasets;for(a.setAttribute("class",t.id+"-legend"),e=0,i=r.length;e<i;e++)(n=a.appendChild(document.createElement("li"))).appendChild(document.createElement("span")).style.backgroundColor=r[e].backgroundColor,r[e].label&&n.appendChild(document.createTextNode(r[e].label));return a.outerHTML}});var Kn=xt.extend({initialize:function(t){ct.extend(this,t),this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1},beforeUpdate:Yn,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:Yn,beforeSetDimensions:Yn,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:Yn,beforeBuildLabels:Yn,buildLabels:function(){var t=this,e=t.options.labels||{},i=ct.callback(e.generateLabels,[t.chart],t)||[];e.filter&&(i=i.filter(function(i){return e.filter(i,t.chart.data)})),t.options.reverse&&i.reverse(),t.legendItems=i},afterBuildLabels:Yn,beforeFit:Yn,fit:function(){var t=this,e=t.options,i=e.labels,n=e.display,a=t.ctx,r=ct.options._parseFont(i),o=r.size,s=t.legendHitBoxes=[],l=t.minSize,u=t.isHorizontal();if(u?(l.width=t.maxWidth,l.height=n?10:0):(l.width=n?10:0,l.height=t.maxHeight),n){if(a.font=r.string,u){var d=t.lineWidths=[0],h=0;a.textAlign="left",a.textBaseline="middle",ct.each(t.legendItems,function(t,e){var n=Xn(i,o)+o/2+a.measureText(t.text).width;(0===e||d[d.length-1]+n+2*i.padding>l.width)&&(h+=o+i.padding,d[d.length-(e>0?0:1)]=0),s[e]={left:0,top:0,width:n,height:o},d[d.length-1]+=n+i.padding}),l.height+=h}else{var c=i.padding,f=t.columnWidths=[],g=t.columnHeights=[],p=i.padding,m=0,v=0;ct.each(t.legendItems,function(t,e){var n=Xn(i,o)+o/2+a.measureText(t.text).width;e>0&&v+o+2*c>l.height&&(p+=m+i.padding,f.push(m),g.push(v),m=0,v=0),m=Math.max(m,n),v+=o+c,s[e]={left:0,top:0,width:n,height:o}}),p+=m,f.push(m),g.push(v),l.width+=p}t.width=l.width,t.height=l.height}else t.width=l.width=t.height=l.height=0},afterFit:Yn,isHorizontal:function(){return"top"===this.options.position||"bottom"===this.options.position},draw:function(){var t=this,e=t.options,i=e.labels,n=st.global,a=n.defaultColor,r=n.elements.line,o=t.height,s=t.columnHeights,l=t.width,u=t.lineWidths;if(e.display){var d,h=Un(e.rtl,t.left,t.minSize.width),c=t.ctx,f=Gn(i.fontColor,n.defaultFontColor),g=ct.options._parseFont(i),p=g.size;c.textAlign=h.textAlign("left"),c.textBaseline="middle",c.lineWidth=.5,c.strokeStyle=f,c.fillStyle=f,c.font=g.string;var m=Xn(i,p),v=t.legendHitBoxes,b=function(t,n){switch(e.align){case"start":return i.padding;case"end":return t-n;default:return(t-n+i.padding)/2}},x=t.isHorizontal();d=x?{x:t.left+b(l,u[0]),y:t.top+i.padding,line:0}:{x:t.left+i.padding,y:t.top+b(o,s[0]),line:0},ct.rtl.overrideTextDirection(t.ctx,e.textDirection);var y=p+i.padding;ct.each(t.legendItems,function(e,n){var f=c.measureText(e.text).width,g=m+p/2+f,_=d.x,k=d.y;h.setWidth(t.minSize.width),x?n>0&&_+g+i.padding>t.left+t.minSize.width&&(k=d.y+=y,d.line++,_=d.x=t.left+b(l,u[d.line])):n>0&&k+y>t.top+t.minSize.height&&(_=d.x=_+t.columnWidths[d.line]+i.padding,d.line++,k=d.y=t.top+b(o,s[d.line]));var w=h.x(_);!function(t,e,n){if(!(isNaN(m)||m<=0)){c.save();var o=Gn(n.lineWidth,r.borderWidth);if(c.fillStyle=Gn(n.fillStyle,a),c.lineCap=Gn(n.lineCap,r.borderCapStyle),c.lineDashOffset=Gn(n.lineDashOffset,r.borderDashOffset),c.lineJoin=Gn(n.lineJoin,r.borderJoinStyle),c.lineWidth=o,c.strokeStyle=Gn(n.strokeStyle,a),c.setLineDash&&c.setLineDash(Gn(n.lineDash,r.borderDash)),i&&i.usePointStyle){var s=m*Math.SQRT2/2,l=h.xPlus(t,m/2),u=e+p/2;ct.canvas.drawPoint(c,n.pointStyle,s,l,u,n.rotation)}else c.fillRect(h.leftForLtr(t,m),e,m,p),0!==o&&c.strokeRect(h.leftForLtr(t,m),e,m,p);c.restore()}}(w,k,e),v[n].left=h.leftForLtr(w,v[n].width),v[n].top=k,function(t,e,i,n){var a=p/2,r=h.xPlus(t,m+a),o=e+a;c.fillText(i.text,r,o),i.hidden&&(c.beginPath(),c.lineWidth=2,c.moveTo(r,o),c.lineTo(h.xPlus(r,n),o),c.stroke())}(w,k,e,f),x?d.x+=g+i.padding:d.y+=y}),ct.rtl.restoreTextDirection(t.ctx,e.textDirection)}},_getLegendItemAt:function(t,e){var i,n,a,r=this;if(t>=r.left&&t<=r.right&&e>=r.top&&e<=r.bottom)for(a=r.legendHitBoxes,i=0;i<a.length;++i)if(t>=(n=a[i]).left&&t<=n.left+n.width&&e>=n.top&&e<=n.top+n.height)return r.legendItems[i];return null},handleEvent:function(t){var e,i=this,n=i.options,a="mouseup"===t.type?"click":t.type;if("mousemove"===a){if(!n.onHover&&!n.onLeave)return}else{if("click"!==a)return;if(!n.onClick)return}e=i._getLegendItemAt(t.x,t.y),"click"===a?e&&n.onClick&&n.onClick.call(i,t.native,e):(n.onLeave&&e!==i._hoveredItem&&(i._hoveredItem&&n.onLeave.call(i,t.native,i._hoveredItem),i._hoveredItem=e),n.onHover&&e&&n.onHover.call(i,t.native,e))}});function Zn(t,e){var i=new Kn({ctx:t.ctx,options:e,chart:t});Re.configure(t,i,e),Re.addBox(t,i),t.legend=i}var $n={id:"legend",_element:Kn,beforeInit:function(t){var e=t.options.legend;e&&Zn(t,e)},beforeUpdate:function(t){var e=t.options.legend,i=t.legend;e?(ct.mergeIf(e,st.global.legend),i?(Re.configure(t,i,e),i.options=e):Zn(t,e)):i&&(Re.removeBox(t,i),delete t.legend)},afterEvent:function(t,e){var i=t.legend;i&&i.handleEvent(e)}},Jn=ct.noop;st._set("global",{title:{display:!1,fontStyle:"bold",fullWidth:!0,padding:10,position:"top",text:"",weight:2e3}});var Qn=xt.extend({initialize:function(t){ct.extend(this,t),this.legendHitBoxes=[]},beforeUpdate:Jn,update:function(t,e,i){var n=this;return n.beforeUpdate(),n.maxWidth=t,n.maxHeight=e,n.margins=i,n.beforeSetDimensions(),n.setDimensions(),n.afterSetDimensions(),n.beforeBuildLabels(),n.buildLabels(),n.afterBuildLabels(),n.beforeFit(),n.fit(),n.afterFit(),n.afterUpdate(),n.minSize},afterUpdate:Jn,beforeSetDimensions:Jn,setDimensions:function(){var t=this;t.isHorizontal()?(t.width=t.maxWidth,t.left=0,t.right=t.width):(t.height=t.maxHeight,t.top=0,t.bottom=t.height),t.paddingLeft=0,t.paddingTop=0,t.paddingRight=0,t.paddingBottom=0,t.minSize={width:0,height:0}},afterSetDimensions:Jn,beforeBuildLabels:Jn,buildLabels:Jn,afterBuildLabels:Jn,beforeFit:Jn,fit:function(){var t,e=this,i=e.options,n=e.minSize={},a=e.isHorizontal();i.display?(t=(ct.isArray(i.text)?i.text.length:1)*ct.options._parseFont(i).lineHeight+2*i.padding,e.width=n.width=a?e.maxWidth:t,e.height=n.height=a?t:e.maxHeight):e.width=n.width=e.height=n.height=0},afterFit:Jn,isHorizontal:function(){var t=this.options.position;return"top"===t||"bottom"===t},draw:function(){var t=this,e=t.ctx,i=t.options;if(i.display){var n,a,r,o=ct.options._parseFont(i),s=o.lineHeight,l=s/2+i.padding,u=0,d=t.top,h=t.left,c=t.bottom,f=t.right;e.fillStyle=ct.valueOrDefault(i.fontColor,st.global.defaultFontColor),e.font=o.string,t.isHorizontal()?(a=h+(f-h)/2,r=d+l,n=f-h):(a="left"===i.position?h+l:f-l,r=d+(c-d)/2,n=c-d,u=Math.PI*("left"===i.position?-.5:.5)),e.save(),e.translate(a,r),e.rotate(u),e.textAlign="center",e.textBaseline="middle";var g=i.text;if(ct.isArray(g))for(var p=0,m=0;m<g.length;++m)e.fillText(g[m],0,p,n),p+=s;else e.fillText(g,0,0,n);e.restore()}}});function ta(t,e){var i=new Qn({ctx:t.ctx,options:e,chart:t});Re.configure(t,i,e),Re.addBox(t,i),t.titleBlock=i}var ea={},ia=qn,na=$n,aa={id:"title",_element:Qn,beforeInit:function(t){var e=t.options.title;e&&ta(t,e)},beforeUpdate:function(t){var e=t.options.title,i=t.titleBlock;e?(ct.mergeIf(e,st.global.title),i?(Re.configure(t,i,e),i.options=e):ta(t,e)):i&&(Re.removeBox(t,i),delete t.titleBlock)}};for(var ra in ea.filler=ia,ea.legend=na,ea.title=aa,ki.helpers=ct,function(){function t(t,e,i){var n;return"string"==typeof t?(n=parseInt(t,10),-1!==t.indexOf("%")&&(n=n/100*e.parentNode[i])):n=t,n}function e(t){return null!=t&&"none"!==t}function i(i,n,a){var r=document.defaultView,o=ct._getParentNode(i),s=r.getComputedStyle(i)[n],l=r.getComputedStyle(o)[n],u=e(s),d=e(l),h=Number.POSITIVE_INFINITY;return u||d?Math.min(u?t(s,i,a):h,d?t(l,o,a):h):"none"}ct.where=function(t,e){if(ct.isArray(t)&&Array.prototype.filter)return t.filter(e);var i=[];return ct.each(t,function(t){e(t)&&i.push(t)}),i},ct.findIndex=Array.prototype.findIndex?function(t,e,i){return t.findIndex(e,i)}:function(t,e,i){i=void 0===i?t:i;for(var n=0,a=t.length;n<a;++n)if(e.call(i,t[n],n,t))return n;return-1},ct.findNextWhere=function(t,e,i){ct.isNullOrUndef(i)&&(i=-1);for(var n=i+1;n<t.length;n++){var a=t[n];if(e(a))return a}},ct.findPreviousWhere=function(t,e,i){ct.isNullOrUndef(i)&&(i=t.length);for(var n=i-1;n>=0;n--){var a=t[n];if(e(a))return a}},ct.isNumber=function(t){return!isNaN(parseFloat(t))&&isFinite(t)},ct.almostEquals=function(t,e,i){return Math.abs(t-e)<i},ct.almostWhole=function(t,e){var i=Math.round(t);return i-e<=t&&i+e>=t},ct.max=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.max(t,e)},Number.NEGATIVE_INFINITY)},ct.min=function(t){return t.reduce(function(t,e){return isNaN(e)?t:Math.min(t,e)},Number.POSITIVE_INFINITY)},ct.sign=Math.sign?function(t){return Math.sign(t)}:function(t){return 0===(t=+t)||isNaN(t)?t:t>0?1:-1},ct.toRadians=function(t){return t*(Math.PI/180)},ct.toDegrees=function(t){return t*(180/Math.PI)},ct._decimalPlaces=function(t){if(ct.isFinite(t)){for(var e=1,i=0;Math.round(t*e)/e!==t;)e*=10,i++;return i}},ct.getAngleFromPoint=function(t,e){var i=e.x-t.x,n=e.y-t.y,a=Math.sqrt(i*i+n*n),r=Math.atan2(n,i);return r<-.5*Math.PI&&(r+=2*Math.PI),{angle:r,distance:a}},ct.distanceBetweenPoints=function(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))},ct.aliasPixel=function(t){return t%2==0?0:.5},ct._alignPixel=function(t,e,i){var n=t.currentDevicePixelRatio,a=i/2;return Math.round((e-a)*n)/n+a},ct.splineCurve=function(t,e,i,n){var a=t.skip?e:t,r=e,o=i.skip?e:i,s=Math.sqrt(Math.pow(r.x-a.x,2)+Math.pow(r.y-a.y,2)),l=Math.sqrt(Math.pow(o.x-r.x,2)+Math.pow(o.y-r.y,2)),u=s/(s+l),d=l/(s+l),h=n*(u=isNaN(u)?0:u),c=n*(d=isNaN(d)?0:d);return{previous:{x:r.x-h*(o.x-a.x),y:r.y-h*(o.y-a.y)},next:{x:r.x+c*(o.x-a.x),y:r.y+c*(o.y-a.y)}}},ct.EPSILON=Number.EPSILON||1e-14,ct.splineCurveMonotone=function(t){var e,i,n,a,r,o,s,l,u,d=(t||[]).map(function(t){return{model:t._model,deltaK:0,mK:0}}),h=d.length;for(e=0;e<h;++e)if(!(n=d[e]).model.skip){if(i=e>0?d[e-1]:null,(a=e<h-1?d[e+1]:null)&&!a.model.skip){var c=a.model.x-n.model.x;n.deltaK=0!==c?(a.model.y-n.model.y)/c:0}!i||i.model.skip?n.mK=n.deltaK:!a||a.model.skip?n.mK=i.deltaK:this.sign(i.deltaK)!==this.sign(n.deltaK)?n.mK=0:n.mK=(i.deltaK+n.deltaK)/2}for(e=0;e<h-1;++e)n=d[e],a=d[e+1],n.model.skip||a.model.skip||(ct.almostEquals(n.deltaK,0,this.EPSILON)?n.mK=a.mK=0:(r=n.mK/n.deltaK,o=a.mK/n.deltaK,(l=Math.pow(r,2)+Math.pow(o,2))<=9||(s=3/Math.sqrt(l),n.mK=r*s*n.deltaK,a.mK=o*s*n.deltaK)));for(e=0;e<h;++e)(n=d[e]).model.skip||(i=e>0?d[e-1]:null,a=e<h-1?d[e+1]:null,i&&!i.model.skip&&(u=(n.model.x-i.model.x)/3,n.model.controlPointPreviousX=n.model.x-u,n.model.controlPointPreviousY=n.model.y-u*n.mK),a&&!a.model.skip&&(u=(a.model.x-n.model.x)/3,n.model.controlPointNextX=n.model.x+u,n.model.controlPointNextY=n.model.y+u*n.mK))},ct.nextItem=function(t,e,i){return i?e>=t.length-1?t[0]:t[e+1]:e>=t.length-1?t[t.length-1]:t[e+1]},ct.previousItem=function(t,e,i){return i?e<=0?t[t.length-1]:t[e-1]:e<=0?t[0]:t[e-1]},ct.niceNum=function(t,e){var i=Math.floor(ct.log10(t)),n=t/Math.pow(10,i);return(e?n<1.5?1:n<3?2:n<7?5:10:n<=1?1:n<=2?2:n<=5?5:10)*Math.pow(10,i)},ct.requestAnimFrame="undefined"==typeof window?function(t){t()}:window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)},ct.getRelativePosition=function(t,e){var i,n,a=t.originalEvent||t,r=t.target||t.srcElement,o=r.getBoundingClientRect(),s=a.touches;s&&s.length>0?(i=s[0].clientX,n=s[0].clientY):(i=a.clientX,n=a.clientY);var l=parseFloat(ct.getStyle(r,"padding-left")),u=parseFloat(ct.getStyle(r,"padding-top")),d=parseFloat(ct.getStyle(r,"padding-right")),h=parseFloat(ct.getStyle(r,"padding-bottom")),c=o.right-o.left-l-d,f=o.bottom-o.top-u-h;return{x:i=Math.round((i-o.left-l)/c*r.width/e.currentDevicePixelRatio),y:n=Math.round((n-o.top-u)/f*r.height/e.currentDevicePixelRatio)}},ct.getConstraintWidth=function(t){return i(t,"max-width","clientWidth")},ct.getConstraintHeight=function(t){return i(t,"max-height","clientHeight")},ct._calculatePadding=function(t,e,i){return(e=ct.getStyle(t,e)).indexOf("%")>-1?i*parseInt(e,10)/100:parseInt(e,10)},ct._getParentNode=function(t){var e=t.parentNode;return e&&"[object ShadowRoot]"===e.toString()&&(e=e.host),e},ct.getMaximumWidth=function(t){var e=ct._getParentNode(t);if(!e)return t.clientWidth;var i=e.clientWidth,n=i-ct._calculatePadding(e,"padding-left",i)-ct._calculatePadding(e,"padding-right",i),a=ct.getConstraintWidth(t);return isNaN(a)?n:Math.min(n,a)},ct.getMaximumHeight=function(t){var e=ct._getParentNode(t);if(!e)return t.clientHeight;var i=e.clientHeight,n=i-ct._calculatePadding(e,"padding-top",i)-ct._calculatePadding(e,"padding-bottom",i),a=ct.getConstraintHeight(t);return isNaN(a)?n:Math.min(n,a)},ct.getStyle=function(t,e){return t.currentStyle?t.currentStyle[e]:document.defaultView.getComputedStyle(t,null).getPropertyValue(e)},ct.retinaScale=function(t,e){var i=t.currentDevicePixelRatio=e||"undefined"!=typeof window&&window.devicePixelRatio||1;if(1!==i){var n=t.canvas,a=t.height,r=t.width;n.height=a*i,n.width=r*i,t.ctx.scale(i,i),n.style.height||n.style.width||(n.style.height=a+"px",n.style.width=r+"px")}},ct.fontString=function(t,e,i){return e+" "+t+"px "+i},ct.longestText=function(t,e,i,n){var a=(n=n||{}).data=n.data||{},r=n.garbageCollect=n.garbageCollect||[];n.font!==e&&(a=n.data={},r=n.garbageCollect=[],n.font=e),t.font=e;var o,s,l,u,d,h=0,c=i.length;for(o=0;o<c;o++)if(null!=(u=i[o])&&!0!==ct.isArray(u))h=ct.measureText(t,a,r,h,u);else if(ct.isArray(u))for(s=0,l=u.length;s<l;s++)null==(d=u[s])||ct.isArray(d)||(h=ct.measureText(t,a,r,h,d));var f=r.length/2;if(f>i.length){for(o=0;o<f;o++)delete a[r[o]];r.splice(0,f)}return h},ct.measureText=function(t,e,i,n,a){var r=e[a];return r||(r=e[a]=t.measureText(a).width,i.push(a)),r>n&&(n=r),n},ct.numberOfLabelLines=function(t){var e=1;return ct.each(t,function(t){ct.isArray(t)&&t.length>e&&(e=t.length)}),e},ct.color=G?function(t){return t instanceof CanvasGradient&&(t=st.global.defaultColor),G(t)}:function(t){return console.error("Color.js not found!"),t},ct.getHoverColor=function(t){return t instanceof CanvasPattern||t instanceof CanvasGradient?t:ct.color(t).saturate(.5).darken(.1).rgbString()}}(),ki._adapters=Si,ki.Animation=_t,ki.animationService=kt,ki.controllers=xe,ki.DatasetController=Pt,ki.defaults=st,ki.Element=xt,ki.elements=Yt,ki.Interaction=Ce,ki.layouts=Re,ki.platform=ti,ki.plugins=ei,ki.Scale=Vi,ki.scaleService=ii,ki.Ticks=Ci,ki.Tooltip=fi,ki.helpers.each(On,function(t,e){ki.scaleService.registerScaleType(e,t,t._defaults)}),ea)ea.hasOwnProperty(ra)&&ki.plugins.register(ea[ra]);ki.platform.initialize();var oa=ki;return"undefined"!=typeof window&&(window.Chart=ki),ki.Chart=ki,ki.Legend=ea.legend._element,ki.Title=ea.title._element,ki.pluginService=ki.plugins,ki.PluginBase=ki.Element.extend({}),ki.canvasHelpers=ki.helpers.canvas,ki.layoutService=ki.layouts,ki.LinearScaleBase=Yi,ki.helpers.each(["Bar","Bubble","Doughnut","Line","PolarArea","Radar","Scatter"],function(t){ki[t]=function(e,i){return new ki(e,ki.helpers.merge(i||{},{type:t.charAt(0).toLowerCase()+t.slice(1)}))}}),oa});

;!function(){function n(n){return null!=n&&!isNaN(n)}function t(n){return n.length}function e(n){for(var t=1;n*t%1;)t*=10;return t}function r(n,t){try{for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}catch(r){n.prototype=t}}function u(){}function i(n){return aa+n in this}function o(n){return n=aa+n,n in this&&delete this[n]}function a(){var n=[];return this.forEach(function(t){n.push(t)}),n}function c(){var n=0;for(var t in this)t.charCodeAt(0)===ca&&++n;return n}function s(){for(var n in this)if(n.charCodeAt(0)===ca)return!1;return!0}function l(){}function f(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function h(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.substring(1);for(var e=0,r=sa.length;r>e;++e){var u=sa[e]+t;if(u in n)return u}}function g(){}function p(){}function v(n){function t(){for(var t,r=e,u=-1,i=r.length;++u<i;)(t=r[u].on)&&t.apply(this,arguments);return n}var e=[],r=new u;return t.on=function(t,u){var i,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,i=e.indexOf(o)).concat(e.slice(i+1)),r.remove(t)),u&&e.push(r.set(t,{on:u})),n)},t}function d(){Xo.event.preventDefault()}function m(){for(var n,t=Xo.event;n=t.sourceEvent;)t=n;return t}function y(n){for(var t=new p,e=0,r=arguments.length;++e<r;)t[arguments[e]]=v(t);return t.of=function(e,r){return function(u){try{var i=u.sourceEvent=Xo.event;u.target=n,Xo.event=u,t[u.type].apply(e,r)}finally{Xo.event=i}}},t}function x(n){return fa(n,da),n}function M(n){return"function"==typeof n?n:function(){return ha(n,this)}}function _(n){return"function"==typeof n?n:function(){return ga(n,this)}}function b(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function u(){this.setAttribute(n,t)}function i(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=Xo.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?i:u}function w(n){return n.trim().replace(/\s+/g," ")}function S(n){return new RegExp("(?:^|\\s+)"+Xo.requote(n)+"(?:\\s+|$)","g")}function k(n){return n.trim().split(/^|\s+/)}function E(n,t){function e(){for(var e=-1;++e<u;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<u;)n[e](this,r)}n=k(n).map(A);var u=n.length;return"function"==typeof t?r:e}function A(n){var t=S(n);return function(e,r){if(u=e.classList)return r?u.add(n):u.remove(n);var u=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(u)||e.setAttribute("class",w(u+" "+n))):e.setAttribute("class",w(u.replace(t," ")))}}function C(n,t,e){function r(){this.style.removeProperty(n)}function u(){this.style.setProperty(n,t,e)}function i(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?i:u}function N(n,t){function e(){delete this[n]}function r(){this[n]=t}function u(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?u:r}function L(n){return"function"==typeof n?n:(n=Xo.ns.qualify(n)).local?function(){return this.ownerDocument.createElementNS(n.space,n.local)}:function(){return this.ownerDocument.createElementNS(this.namespaceURI,n)}}function z(n){return{__data__:n}}function q(n){return function(){return va(this,n)}}function T(n){return arguments.length||(n=Xo.ascending),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function R(n,t){for(var e=0,r=n.length;r>e;e++)for(var u,i=n[e],o=0,a=i.length;a>o;o++)(u=i[o])&&t(u,o,e);return n}function D(n){return fa(n,ya),n}function P(n){var t,e;return function(r,u,i){var o,a=n[i].update,c=a.length;for(i!=e&&(e=i,t=0),u>=t&&(t=u+1);!(o=a[t])&&++t<c;);return o}}function U(){var n=this.__transition__;n&&++n.active}function j(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function u(){var u=c(t,Bo(arguments));r.call(this),this.addEventListener(n,this[o]=u,u.$=e),u._=t}function i(){var t,e=new RegExp("^__on([^.]+)"+Xo.requote(n)+"$");for(var r in this)if(t=r.match(e)){var u=this[r];this.removeEventListener(t[1],u,u.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),c=H;a>0&&(n=n.substring(0,a));var s=Ma.get(n);return s&&(n=s,c=F),a?t?u:r:t?g:i}function H(n,t){return function(e){var r=Xo.event;Xo.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{Xo.event=r}}}function F(n,t){var e=H(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function O(){var n=".dragsuppress-"+ ++ba,t="click"+n,e=Xo.select(Go).on("touchmove"+n,d).on("dragstart"+n,d).on("selectstart"+n,d);if(_a){var r=Jo.style,u=r[_a];r[_a]="none"}return function(i){function o(){e.on(t,null)}e.on(n,null),_a&&(r[_a]=u),i&&(e.on(t,function(){d(),o()},!0),setTimeout(o,0))}}function Y(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>wa&&(Go.scrollX||Go.scrollY)){e=Xo.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var u=e[0][0].getScreenCTM();wa=!(u.f||u.e),e.remove()}return wa?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var i=n.getBoundingClientRect();return[t.clientX-i.left-n.clientLeft,t.clientY-i.top-n.clientTop]}function I(n){return n>0?1:0>n?-1:0}function Z(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function V(n){return n>1?0:-1>n?Sa:Math.acos(n)}function X(n){return n>1?Ea:-1>n?-Ea:Math.asin(n)}function $(n){return((n=Math.exp(n))-1/n)/2}function B(n){return((n=Math.exp(n))+1/n)/2}function W(n){return((n=Math.exp(2*n))-1)/(n+1)}function J(n){return(n=Math.sin(n/2))*n}function G(){}function K(n,t,e){return new Q(n,t,e)}function Q(n,t,e){this.h=n,this.s=t,this.l=e}function nt(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?i+(o-i)*n/60:180>n?o:240>n?i+(o-i)*(240-n)/60:i}function u(n){return Math.round(255*r(n))}var i,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,i=2*e-o,gt(u(n+120),u(n),u(n-120))}function tt(n,t,e){return new et(n,t,e)}function et(n,t,e){this.h=n,this.c=t,this.l=e}function rt(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),ut(e,Math.cos(n*=Na)*t,Math.sin(n)*t)}function ut(n,t,e){return new it(n,t,e)}function it(n,t,e){this.l=n,this.a=t,this.b=e}function ot(n,t,e){var r=(n+16)/116,u=r+t/500,i=r-e/200;return u=ct(u)*Fa,r=ct(r)*Oa,i=ct(i)*Ya,gt(lt(3.2404542*u-1.5371385*r-.4985314*i),lt(-.969266*u+1.8760108*r+.041556*i),lt(.0556434*u-.2040259*r+1.0572252*i))}function at(n,t,e){return n>0?tt(Math.atan2(e,t)*La,Math.sqrt(t*t+e*e),n):tt(0/0,0/0,n)}function ct(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function st(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function lt(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function ft(n){return gt(n>>16,255&n>>8,255&n)}function ht(n){return ft(n)+""}function gt(n,t,e){return new pt(n,t,e)}function pt(n,t,e){this.r=n,this.g=t,this.b=e}function vt(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function dt(n,t,e){var r,u,i,o=0,a=0,c=0;if(r=/([a-z]+)\((.*)\)/i.exec(n))switch(u=r[2].split(","),r[1]){case"hsl":return e(parseFloat(u[0]),parseFloat(u[1])/100,parseFloat(u[2])/100);case"rgb":return t(Mt(u[0]),Mt(u[1]),Mt(u[2]))}return(i=Va.get(n))?t(i.r,i.g,i.b):(null!=n&&"#"===n.charAt(0)&&(4===n.length?(o=n.charAt(1),o+=o,a=n.charAt(2),a+=a,c=n.charAt(3),c+=c):7===n.length&&(o=n.substring(1,3),a=n.substring(3,5),c=n.substring(5,7)),o=parseInt(o,16),a=parseInt(a,16),c=parseInt(c,16)),t(o,a,c))}function mt(n,t,e){var r,u,i=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-i,c=(o+i)/2;return a?(u=.5>c?a/(o+i):a/(2-o-i),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=0/0,u=c>0&&1>c?0:r),K(r,u,c)}function yt(n,t,e){n=xt(n),t=xt(t),e=xt(e);var r=st((.4124564*n+.3575761*t+.1804375*e)/Fa),u=st((.2126729*n+.7151522*t+.072175*e)/Oa),i=st((.0193339*n+.119192*t+.9503041*e)/Ya);return ut(116*u-16,500*(r-u),200*(u-i))}function xt(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Mt(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function _t(n){return"function"==typeof n?n:function(){return n}}function bt(n){return n}function wt(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),St(t,e,n,r)}}function St(n,t,e,r){function u(){var n,t=c.status;if(!t&&c.responseText||t>=200&&300>t||304===t){try{n=e.call(i,c)}catch(r){return o.error.call(i,r),void 0}o.load.call(i,n)}else o.error.call(i,c)}var i={},o=Xo.dispatch("beforesend","progress","load","error"),a={},c=new XMLHttpRequest,s=null;return!Go.XDomainRequest||"withCredentials"in c||!/^(http(s)?:)?\/\//.test(n)||(c=new XDomainRequest),"onload"in c?c.onload=c.onerror=u:c.onreadystatechange=function(){c.readyState>3&&u()},c.onprogress=function(n){var t=Xo.event;Xo.event=n;try{o.progress.call(i,c)}finally{Xo.event=t}},i.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",i)},i.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",i):t},i.responseType=function(n){return arguments.length?(s=n,i):s},i.response=function(n){return e=n,i},["get","post"].forEach(function(n){i[n]=function(){return i.send.apply(i,[n].concat(Bo(arguments)))}}),i.send=function(e,r,u){if(2===arguments.length&&"function"==typeof r&&(u=r,r=null),c.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),c.setRequestHeader)for(var l in a)c.setRequestHeader(l,a[l]);return null!=t&&c.overrideMimeType&&c.overrideMimeType(t),null!=s&&(c.responseType=s),null!=u&&i.on("error",u).on("load",function(n){u(null,n)}),o.beforesend.call(i,c),c.send(null==r?null:r),i},i.abort=function(){return c.abort(),i},Xo.rebind(i,o,"on"),null==r?i:i.get(kt(r))}function kt(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Et(){var n=At(),t=Ct()-n;t>24?(isFinite(t)&&(clearTimeout(Wa),Wa=setTimeout(Et,t)),Ba=0):(Ba=1,Ga(Et))}function At(){var n=Date.now();for(Ja=Xa;Ja;)n>=Ja.t&&(Ja.f=Ja.c(n-Ja.t)),Ja=Ja.n;return n}function Ct(){for(var n,t=Xa,e=1/0;t;)t.f?t=n?n.n=t.n:Xa=t.n:(t.t<e&&(e=t.t),t=(n=t).n);return $a=n,e}function Nt(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Lt(n,t){var e=Math.pow(10,3*oa(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function zt(n){var t=n.decimal,e=n.thousands,r=n.grouping,u=n.currency,i=r?function(n){for(var t=n.length,u=[],i=0,o=r[0];t>0&&o>0;)u.push(n.substring(t-=o,t+o)),o=r[i=(i+1)%r.length];return u.reverse().join(e)}:bt;return function(n){var e=Qa.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"",c=e[4]||"",s=e[5],l=+e[6],f=e[7],h=e[8],g=e[9],p=1,v="",d="",m=!1;switch(h&&(h=+h.substring(1)),(s||"0"===r&&"="===o)&&(s=r="0",o="=",f&&(l-=Math.floor((l-1)/4))),g){case"n":f=!0,g="g";break;case"%":p=100,d="%",g="f";break;case"p":p=100,d="%",g="r";break;case"b":case"o":case"x":case"X":"#"===c&&(v="0"+g.toLowerCase());case"c":case"d":m=!0,h=0;break;case"s":p=-1,g="r"}"$"===c&&(v=u[0],d=u[1]),"r"!=g||h||(g="g"),null!=h&&("g"==g?h=Math.max(1,Math.min(21,h)):("e"==g||"f"==g)&&(h=Math.max(0,Math.min(20,h)))),g=nc.get(g)||qt;var y=s&&f;return function(n){var e=d;if(m&&n%1)return"";var u=0>n||0===n&&0>1/n?(n=-n,"-"):a;if(0>p){var c=Xo.formatPrefix(n,h);n=c.scale(n),e=c.symbol+d}else n*=p;n=g(n,h);var x=n.lastIndexOf("."),M=0>x?n:n.substring(0,x),_=0>x?"":t+n.substring(x+1);!s&&f&&(M=i(M));var b=v.length+M.length+_.length+(y?0:u.length),w=l>b?new Array(b=l-b+1).join(r):"";return y&&(M=i(w+M)),u+=v,n=M+_,("<"===o?u+n+w:">"===o?w+u+n:"^"===o?w.substring(0,b>>=1)+u+n+w.substring(b):u+(y?n:w+n))+e}}}function qt(n){return n+""}function Tt(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Rt(n,t,e){function r(t){var e=n(t),r=i(e,1);return r-t>t-e?e:r}function u(e){return t(e=n(new ec(e-1)),1),e}function i(n,e){return t(n=new ec(+n),e),n}function o(n,r,i){var o=u(n),a=[];if(i>1)for(;r>o;)e(o)%i||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{ec=Tt;var r=new Tt;return r._=n,o(r,t,e)}finally{ec=Date}}n.floor=n,n.round=r,n.ceil=u,n.offset=i,n.range=o;var c=n.utc=Dt(n);return c.floor=c,c.round=Dt(r),c.ceil=Dt(u),c.offset=Dt(i),c.range=a,n}function Dt(n){return function(t,e){try{ec=Tt;var r=new Tt;return r._=t,n(r,e)._}finally{ec=Date}}}function Pt(n){function t(n){function t(t){for(var e,u,i,o=[],a=-1,c=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.substring(c,a)),null!=(u=uc[e=n.charAt(++a)])&&(e=n.charAt(++a)),(i=C[e])&&(e=i(t,null==u?"e"===e?" ":"0":u)),o.push(e),c=a+1);return o.push(n.substring(c,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},u=e(r,n,t,0);if(u!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var i=null!=r.Z&&ec!==Tt,o=new(i?Tt:ec);return"j"in r?o.setFullYear(r.y,0,r.j):"w"in r&&("W"in r||"U"in r)?(o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+Math.floor(r.Z/100),r.M+r.Z%100,r.S,r.L),i?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var u,i,o,a=0,c=t.length,s=e.length;c>a;){if(r>=s)return-1;if(u=t.charCodeAt(a++),37===u){if(o=t.charAt(a++),i=N[o in uc?t.charAt(a++):o],!i||(r=i(n,e,r))<0)return-1}else if(u!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){b.lastIndex=0;var r=b.exec(t.substring(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){M.lastIndex=0;var r=M.exec(t.substring(e));return r?(n.w=_.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){E.lastIndex=0;var r=E.exec(t.substring(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.substring(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,C.c.toString(),t,r)}function c(n,t,r){return e(n,C.x.toString(),t,r)}function s(n,t,r){return e(n,C.X.toString(),t,r)}function l(n,t,e){var r=x.get(t.substring(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,g=n.time,p=n.periods,v=n.days,d=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{ec=Tt;var t=new ec;return t._=n,r(t)}finally{ec=Date}}var r=t(n);return e.parse=function(n){try{ec=Tt;var t=r.parse(n);return t&&t._}finally{ec=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ee;var x=Xo.map(),M=jt(v),_=Ht(v),b=jt(d),w=Ht(d),S=jt(m),k=Ht(m),E=jt(y),A=Ht(y);p.forEach(function(n,t){x.set(n.toLowerCase(),t)});var C={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Ut(n.getDate(),t,2)},e:function(n,t){return Ut(n.getDate(),t,2)},H:function(n,t){return Ut(n.getHours(),t,2)},I:function(n,t){return Ut(n.getHours()%12||12,t,2)},j:function(n,t){return Ut(1+tc.dayOfYear(n),t,3)},L:function(n,t){return Ut(n.getMilliseconds(),t,3)},m:function(n,t){return Ut(n.getMonth()+1,t,2)},M:function(n,t){return Ut(n.getMinutes(),t,2)},p:function(n){return p[+(n.getHours()>=12)]},S:function(n,t){return Ut(n.getSeconds(),t,2)},U:function(n,t){return Ut(tc.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Ut(tc.mondayOfYear(n),t,2)},x:t(h),X:t(g),y:function(n,t){return Ut(n.getFullYear()%100,t,2)},Y:function(n,t){return Ut(n.getFullYear()%1e4,t,4)},Z:ne,"%":function(){return"%"}},N={a:r,A:u,b:i,B:o,c:a,d:Bt,e:Bt,H:Jt,I:Jt,j:Wt,L:Qt,m:$t,M:Gt,p:l,S:Kt,U:Ot,w:Ft,W:Yt,x:c,X:s,y:Zt,Y:It,Z:Vt,"%":te};return t}function Ut(n,t,e){var r=0>n?"-":"",u=(r?-n:n)+"",i=u.length;return r+(e>i?new Array(e-i+1).join(t)+u:u)}function jt(n){return new RegExp("^(?:"+n.map(Xo.requote).join("|")+")","i")}function Ht(n){for(var t=new u,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Ft(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Ot(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e));return r?(n.U=+r[0],e+r[0].length):-1}function Yt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e));return r?(n.W=+r[0],e+r[0].length):-1}function It(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Zt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.y=Xt(+r[0]),e+r[0].length):-1}function Vt(n,t,e){return/^[+-]\d{4}$/.test(t=t.substring(e,e+5))?(n.Z=+t,e+5):-1}function Xt(n){return n+(n>68?1900:2e3)}function $t(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function Bt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function Wt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function Jt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function Gt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function Kt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function Qt(n,t,e){ic.lastIndex=0;var r=ic.exec(t.substring(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ne(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=~~(oa(t)/60),u=oa(t)%60;return e+Ut(r,"0",2)+Ut(u,"0",2)}function te(n,t,e){oc.lastIndex=0;var r=oc.exec(t.substring(e,e+1));return r?e+r[0].length:-1}function ee(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function re(){}function ue(n,t,e){var r=e.s=n+t,u=r-n,i=r-u;e.t=n-i+(t-u)}function ie(n,t){n&&lc.hasOwnProperty(n.type)&&lc[n.type](n,t)}function oe(n,t,e){var r,u=-1,i=n.length-e;for(t.lineStart();++u<i;)r=n[u],t.point(r[0],r[1],r[2]);t.lineEnd()}function ae(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)oe(n[e],t,1);t.polygonEnd()}function ce(){function n(n,t){n*=Na,t=t*Na/2+Sa/4;var e=n-r,o=Math.cos(t),a=Math.sin(t),c=i*a,s=u*o+c*Math.cos(e),l=c*Math.sin(e);hc.add(Math.atan2(l,s)),r=n,u=o,i=a}var t,e,r,u,i;gc.point=function(o,a){gc.point=n,r=(t=o)*Na,u=Math.cos(a=(e=a)*Na/2+Sa/4),i=Math.sin(a)},gc.lineEnd=function(){n(t,e)}}function se(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function le(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function fe(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function he(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function ge(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function pe(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function ve(n){return[Math.atan2(n[1],n[0]),X(n[2])]}function de(n,t){return oa(n[0]-t[0])<Aa&&oa(n[1]-t[1])<Aa}function me(n,t){n*=Na;var e=Math.cos(t*=Na);ye(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function ye(n,t,e){++pc,dc+=(n-dc)/pc,mc+=(t-mc)/pc,yc+=(e-yc)/pc}function xe(){function n(n,u){n*=Na;var i=Math.cos(u*=Na),o=i*Math.cos(n),a=i*Math.sin(n),c=Math.sin(u),s=Math.atan2(Math.sqrt((s=e*c-r*a)*s+(s=r*o-t*c)*s+(s=t*a-e*o)*s),t*o+e*a+r*c);vc+=s,xc+=s*(t+(t=o)),Mc+=s*(e+(e=a)),_c+=s*(r+(r=c)),ye(t,e,r)}var t,e,r;kc.point=function(u,i){u*=Na;var o=Math.cos(i*=Na);t=o*Math.cos(u),e=o*Math.sin(u),r=Math.sin(i),kc.point=n,ye(t,e,r)}}function Me(){kc.point=me}function _e(){function n(n,t){n*=Na;var e=Math.cos(t*=Na),o=e*Math.cos(n),a=e*Math.sin(n),c=Math.sin(t),s=u*c-i*a,l=i*o-r*c,f=r*a-u*o,h=Math.sqrt(s*s+l*l+f*f),g=r*o+u*a+i*c,p=h&&-V(g)/h,v=Math.atan2(h,g);bc+=p*s,wc+=p*l,Sc+=p*f,vc+=v,xc+=v*(r+(r=o)),Mc+=v*(u+(u=a)),_c+=v*(i+(i=c)),ye(r,u,i)}var t,e,r,u,i;kc.point=function(o,a){t=o,e=a,kc.point=n,o*=Na;var c=Math.cos(a*=Na);r=c*Math.cos(o),u=c*Math.sin(o),i=Math.sin(a),ye(r,u,i)},kc.lineEnd=function(){n(t,e),kc.lineEnd=Me,kc.point=me}}function be(){return!0}function we(n,t,e,r,u){var i=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(de(e,r)){u.lineStart();for(var a=0;t>a;++a)u.point((e=n[a])[0],e[1]);return u.lineEnd(),void 0}var c=new ke(e,n,null,!0),s=new ke(e,null,c,!1);c.o=s,i.push(c),o.push(s),c=new ke(r,n,null,!1),s=new ke(r,null,c,!0),c.o=s,i.push(c),o.push(s)}}),o.sort(t),Se(i),Se(o),i.length){for(var a=0,c=e,s=o.length;s>a;++a)o[a].e=c=!c;for(var l,f,h=i[0];;){for(var g=h,p=!0;g.v;)if((g=g.n)===h)return;l=g.z,u.lineStart();do{if(g.v=g.o.v=!0,g.e){if(p)for(var a=0,s=l.length;s>a;++a)u.point((f=l[a])[0],f[1]);else r(g.x,g.n.x,1,u);g=g.n}else{if(p){l=g.p.z;for(var a=l.length-1;a>=0;--a)u.point((f=l[a])[0],f[1])}else r(g.x,g.p.x,-1,u);g=g.p}g=g.o,l=g.z,p=!p}while(!g.v);u.lineEnd()}}}function Se(n){if(t=n.length){for(var t,e,r=0,u=n[0];++r<t;)u.n=e=n[r],e.p=u,u=e;u.n=e=n[0],e.p=u}}function ke(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Ee(n,t,e,r){return function(u,i){function o(t,e){var r=u(t,e);n(t=r[0],e=r[1])&&i.point(t,e)}function a(n,t){var e=u(n,t);d.point(e[0],e[1])}function c(){y.point=a,d.lineStart()}function s(){y.point=o,d.lineEnd()}function l(n,t){v.push([n,t]);var e=u(n,t);M.point(e[0],e[1])}function f(){M.lineStart(),v=[]}function h(){l(v[0][0],v[0][1]),M.lineEnd();var n,t=M.clean(),e=x.buffer(),r=e.length;if(v.pop(),p.push(v),v=null,r){if(1&t){n=e[0];var u,r=n.length-1,o=-1;for(i.lineStart();++o<r;)i.point((u=n[o])[0],u[1]);return i.lineEnd(),void 0}r>1&&2&t&&e.push(e.pop().concat(e.shift())),g.push(e.filter(Ae))}}var g,p,v,d=t(i),m=u.invert(r[0],r[1]),y={point:o,lineStart:c,lineEnd:s,polygonStart:function(){y.point=l,y.lineStart=f,y.lineEnd=h,g=[],p=[],i.polygonStart()},polygonEnd:function(){y.point=o,y.lineStart=c,y.lineEnd=s,g=Xo.merge(g);var n=Le(m,p);g.length?we(g,Ne,n,e,i):n&&(i.lineStart(),e(null,null,1,i),i.lineEnd()),i.polygonEnd(),g=p=null},sphere:function(){i.polygonStart(),i.lineStart(),e(null,null,1,i),i.lineEnd(),i.polygonEnd()}},x=Ce(),M=t(x);return y}}function Ae(n){return n.length>1}function Ce(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:g,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Ne(n,t){return((n=n.x)[0]<0?n[1]-Ea-Aa:Ea-n[1])-((t=t.x)[0]<0?t[1]-Ea-Aa:Ea-t[1])}function Le(n,t){var e=n[0],r=n[1],u=[Math.sin(e),-Math.cos(e),0],i=0,o=0;hc.reset();for(var a=0,c=t.length;c>a;++a){var s=t[a],l=s.length;if(l)for(var f=s[0],h=f[0],g=f[1]/2+Sa/4,p=Math.sin(g),v=Math.cos(g),d=1;;){d===l&&(d=0),n=s[d];var m=n[0],y=n[1]/2+Sa/4,x=Math.sin(y),M=Math.cos(y),_=m-h,b=oa(_)>Sa,w=p*x;if(hc.add(Math.atan2(w*Math.sin(_),v*M+w*Math.cos(_))),i+=b?_+(_>=0?ka:-ka):_,b^h>=e^m>=e){var S=fe(se(f),se(n));pe(S);var k=fe(u,S);pe(k);var E=(b^_>=0?-1:1)*X(k[2]);(r>E||r===E&&(S[0]||S[1]))&&(o+=b^_>=0?1:-1)}if(!d++)break;h=m,p=x,v=M,f=n}}return(-Aa>i||Aa>i&&0>hc)^1&o}function ze(n){var t,e=0/0,r=0/0,u=0/0;return{lineStart:function(){n.lineStart(),t=1},point:function(i,o){var a=i>0?Sa:-Sa,c=oa(i-e);oa(c-Sa)<Aa?(n.point(e,r=(r+o)/2>0?Ea:-Ea),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(i,r),t=0):u!==a&&c>=Sa&&(oa(e-u)<Aa&&(e-=u*Aa),oa(i-a)<Aa&&(i-=a*Aa),r=qe(e,r,i,o),n.point(u,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=i,r=o),u=a},lineEnd:function(){n.lineEnd(),e=r=0/0},clean:function(){return 2-t}}}function qe(n,t,e,r){var u,i,o=Math.sin(n-e);return oa(o)>Aa?Math.atan((Math.sin(t)*(i=Math.cos(r))*Math.sin(e)-Math.sin(r)*(u=Math.cos(t))*Math.sin(n))/(u*i*o)):(t+r)/2}function Te(n,t,e,r){var u;if(null==n)u=e*Ea,r.point(-Sa,u),r.point(0,u),r.point(Sa,u),r.point(Sa,0),r.point(Sa,-u),r.point(0,-u),r.point(-Sa,-u),r.point(-Sa,0),r.point(-Sa,u);else if(oa(n[0]-t[0])>Aa){var i=n[0]<t[0]?Sa:-Sa;u=e*i/2,r.point(-i,u),r.point(0,u),r.point(i,u)}else r.point(t[0],t[1])}function Re(n){function t(n,t){return Math.cos(n)*Math.cos(t)>i}function e(n){var e,i,c,s,l;return{lineStart:function(){s=c=!1,l=1},point:function(f,h){var g,p=[f,h],v=t(f,h),d=o?v?0:u(f,h):v?u(f+(0>f?Sa:-Sa),h):0;if(!e&&(s=c=v)&&n.lineStart(),v!==c&&(g=r(e,p),(de(e,g)||de(p,g))&&(p[0]+=Aa,p[1]+=Aa,v=t(p[0],p[1]))),v!==c)l=0,v?(n.lineStart(),g=r(p,e),n.point(g[0],g[1])):(g=r(e,p),n.point(g[0],g[1]),n.lineEnd()),e=g;else if(a&&e&&o^v){var m;d&i||!(m=r(p,e,!0))||(l=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!v||e&&de(e,p)||n.point(p[0],p[1]),e=p,c=v,i=d},lineEnd:function(){c&&n.lineEnd(),e=null},clean:function(){return l|(s&&c)<<1}}}function r(n,t,e){var r=se(n),u=se(t),o=[1,0,0],a=fe(r,u),c=le(a,a),s=a[0],l=c-s*s;if(!l)return!e&&n;var f=i*c/l,h=-i*s/l,g=fe(o,a),p=ge(o,f),v=ge(a,h);he(p,v);var d=g,m=le(p,d),y=le(d,d),x=m*m-y*(le(p,p)-1);if(!(0>x)){var M=Math.sqrt(x),_=ge(d,(-m-M)/y);if(he(_,p),_=ve(_),!e)return _;var b,w=n[0],S=t[0],k=n[1],E=t[1];w>S&&(b=w,w=S,S=b);var A=S-w,C=oa(A-Sa)<Aa,N=C||Aa>A;if(!C&&k>E&&(b=k,k=E,E=b),N?C?k+E>0^_[1]<(oa(_[0]-w)<Aa?k:E):k<=_[1]&&_[1]<=E:A>Sa^(w<=_[0]&&_[0]<=S)){var L=ge(d,(-m+M)/y);return he(L,p),[_,ve(L)]}}}function u(t,e){var r=o?n:Sa-n,u=0;return-r>t?u|=1:t>r&&(u|=2),-r>e?u|=4:e>r&&(u|=8),u}var i=Math.cos(n),o=i>0,a=oa(i)>Aa,c=cr(n,6*Na);return Ee(t,e,c,o?[0,-n]:[-Sa,n-Sa])}function De(n,t,e,r){return function(u){var i,o=u.a,a=u.b,c=o.x,s=o.y,l=a.x,f=a.y,h=0,g=1,p=l-c,v=f-s;if(i=n-c,p||!(i>0)){if(i/=p,0>p){if(h>i)return;g>i&&(g=i)}else if(p>0){if(i>g)return;i>h&&(h=i)}if(i=e-c,p||!(0>i)){if(i/=p,0>p){if(i>g)return;i>h&&(h=i)}else if(p>0){if(h>i)return;g>i&&(g=i)}if(i=t-s,v||!(i>0)){if(i/=v,0>v){if(h>i)return;g>i&&(g=i)}else if(v>0){if(i>g)return;i>h&&(h=i)}if(i=r-s,v||!(0>i)){if(i/=v,0>v){if(i>g)return;i>h&&(h=i)}else if(v>0){if(h>i)return;g>i&&(g=i)}return h>0&&(u.a={x:c+h*p,y:s+h*v}),1>g&&(u.b={x:c+g*p,y:s+g*v}),u}}}}}}function Pe(n,t,e,r){function u(r,u){return oa(r[0]-n)<Aa?u>0?0:3:oa(r[0]-e)<Aa?u>0?2:1:oa(r[1]-t)<Aa?u>0?1:0:u>0?3:2}function i(n,t){return o(n.x,t.x)}function o(n,t){var e=u(n,1),r=u(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function c(n){for(var t=0,e=d.length,r=n[1],u=0;e>u;++u)for(var i,o=1,a=d[u],c=a.length,s=a[0];c>o;++o)i=a[o],s[1]<=r?i[1]>r&&Z(s,i,n)>0&&++t:i[1]<=r&&Z(s,i,n)<0&&--t,s=i;return 0!==t}function s(i,a,c,s){var l=0,f=0;if(null==i||(l=u(i,c))!==(f=u(a,c))||o(i,a)<0^c>0){do s.point(0===l||3===l?n:e,l>1?r:t);while((l=(l+c+4)%4)!==f)}else s.point(a[0],a[1])}function l(u,i){return u>=n&&e>=u&&i>=t&&r>=i}function f(n,t){l(n,t)&&a.point(n,t)}function h(){N.point=p,d&&d.push(m=[]),S=!0,w=!1,_=b=0/0}function g(){v&&(p(y,x),M&&w&&A.rejoin(),v.push(A.buffer())),N.point=f,w&&a.lineEnd()}function p(n,t){n=Math.max(-Ac,Math.min(Ac,n)),t=Math.max(-Ac,Math.min(Ac,t));var e=l(n,t);if(d&&m.push([n,t]),S)y=n,x=t,M=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:_,y:b},b:{x:n,y:t}};C(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}_=n,b=t,w=e}var v,d,m,y,x,M,_,b,w,S,k,E=a,A=Ce(),C=De(n,t,e,r),N={point:f,lineStart:h,lineEnd:g,polygonStart:function(){a=A,v=[],d=[],k=!0},polygonEnd:function(){a=E,v=Xo.merge(v);var t=c([n,r]),e=k&&t,u=v.length;(e||u)&&(a.polygonStart(),e&&(a.lineStart(),s(null,null,1,a),a.lineEnd()),u&&we(v,i,t,s,a),a.polygonEnd()),v=d=m=null}};return N}}function Ue(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function je(n){var t=0,e=Sa/3,r=nr(n),u=r(t,e);return u.parallels=function(n){return arguments.length?r(t=n[0]*Sa/180,e=n[1]*Sa/180):[180*(t/Sa),180*(e/Sa)]},u}function He(n,t){function e(n,t){var e=Math.sqrt(i-2*u*Math.sin(t))/u;return[e*Math.sin(n*=u),o-e*Math.cos(n)]}var r=Math.sin(n),u=(r+Math.sin(t))/2,i=1+r*(2*u-r),o=Math.sqrt(i)/u;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/u,X((i-(n*n+e*e)*u*u)/(2*u))]},e}function Fe(){function n(n,t){Nc+=u*n-r*t,r=n,u=t}var t,e,r,u;Rc.point=function(i,o){Rc.point=n,t=r=i,e=u=o},Rc.lineEnd=function(){n(t,e)}}function Oe(n,t){Lc>n&&(Lc=n),n>qc&&(qc=n),zc>t&&(zc=t),t>Tc&&(Tc=t)}function Ye(){function n(n,t){o.push("M",n,",",t,i)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function u(){o.push("Z")}var i=Ie(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return i=Ie(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Ie(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Ze(n,t){dc+=n,mc+=t,++yc}function Ve(){function n(n,r){var u=n-t,i=r-e,o=Math.sqrt(u*u+i*i);xc+=o*(t+n)/2,Mc+=o*(e+r)/2,_c+=o,Ze(t=n,e=r)}var t,e;Pc.point=function(r,u){Pc.point=n,Ze(t=r,e=u)}}function Xe(){Pc.point=Ze}function $e(){function n(n,t){var e=n-r,i=t-u,o=Math.sqrt(e*e+i*i);xc+=o*(r+n)/2,Mc+=o*(u+t)/2,_c+=o,o=u*n-r*t,bc+=o*(r+n),wc+=o*(u+t),Sc+=3*o,Ze(r=n,u=t)}var t,e,r,u;Pc.point=function(i,o){Pc.point=n,Ze(t=r=i,e=u=o)},Pc.lineEnd=function(){n(t,e)}}function Be(n){function t(t,e){n.moveTo(t,e),n.arc(t,e,o,0,ka)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function u(){a.point=t}function i(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:u,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=u,a.point=t},pointRadius:function(n){return o=n,a},result:g};return a}function We(n){function t(n){return(a?r:e)(n)}function e(t){return Ke(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=0/0,S.point=i,t.lineStart()}function i(e,r){var i=se([e,r]),o=n(e,r);u(x,M,y,_,b,w,x=o[0],M=o[1],y=e,_=i[0],b=i[1],w=i[2],a,t),t.point(x,M)}function o(){S.point=e,t.lineEnd()}function c(){r(),S.point=s,S.lineEnd=l}function s(n,t){i(f=n,h=t),g=x,p=M,v=_,d=b,m=w,S.point=i}function l(){u(x,M,y,_,b,w,g,p,f,v,d,m,a,t),S.lineEnd=o,o()}var f,h,g,p,v,d,m,y,x,M,_,b,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=c},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function u(t,e,r,a,c,s,l,f,h,g,p,v,d,m){var y=l-t,x=f-e,M=y*y+x*x;if(M>4*i&&d--){var _=a+g,b=c+p,w=s+v,S=Math.sqrt(_*_+b*b+w*w),k=Math.asin(w/=S),E=oa(oa(w)-1)<Aa||oa(r-h)<Aa?(r+h)/2:Math.atan2(b,_),A=n(E,k),C=A[0],N=A[1],L=C-t,z=N-e,q=x*L-y*z;(q*q/M>i||oa((y*L+x*z)/M-.5)>.3||o>a*g+c*p+s*v)&&(u(t,e,r,a,c,s,C,N,E,_/=S,b/=S,w,d,m),m.point(C,N),u(C,N,E,_,b,w,l,f,h,g,p,v,d,m))}}var i=.5,o=Math.cos(30*Na),a=16;return t.precision=function(n){return arguments.length?(a=(i=n*n)>0&&16,t):Math.sqrt(i)},t}function Je(n){var t=We(function(t,e){return n([t*La,e*La])});return function(n){return tr(t(n))}}function Ge(n){this.stream=n}function Ke(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function Qe(n){return nr(function(){return n})()}function nr(n){function t(n){return n=a(n[0]*Na,n[1]*Na),[n[0]*h+c,s-n[1]*h]}function e(n){return n=a.invert((n[0]-c)/h,(s-n[1])/h),n&&[n[0]*La,n[1]*La]}function r(){a=Ue(o=ur(m,y,x),i);var n=i(v,d);return c=g-n[0]*h,s=p+n[1]*h,u()}function u(){return l&&(l.valid=!1,l=null),t}var i,o,a,c,s,l,f=We(function(n,t){return n=i(n,t),[n[0]*h+c,s-n[1]*h]}),h=150,g=480,p=250,v=0,d=0,m=0,y=0,x=0,M=Ec,_=bt,b=null,w=null;return t.stream=function(n){return l&&(l.valid=!1),l=tr(M(o,f(_(n)))),l.valid=!0,l},t.clipAngle=function(n){return arguments.length?(M=null==n?(b=n,Ec):Re((b=+n)*Na),u()):b
},t.clipExtent=function(n){return arguments.length?(w=n,_=n?Pe(n[0][0],n[0][1],n[1][0],n[1][1]):bt,u()):w},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(g=+n[0],p=+n[1],r()):[g,p]},t.center=function(n){return arguments.length?(v=n[0]%360*Na,d=n[1]%360*Na,r()):[v*La,d*La]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Na,y=n[1]%360*Na,x=n.length>2?n[2]%360*Na:0,r()):[m*La,y*La,x*La]},Xo.rebind(t,f,"precision"),function(){return i=n.apply(this,arguments),t.invert=i.invert&&e,r()}}function tr(n){return Ke(n,function(t,e){n.point(t*Na,e*Na)})}function er(n,t){return[n,t]}function rr(n,t){return[n>Sa?n-ka:-Sa>n?n+ka:n,t]}function ur(n,t,e){return n?t||e?Ue(or(n),ar(t,e)):or(n):t||e?ar(t,e):rr}function ir(n){return function(t,e){return t+=n,[t>Sa?t-ka:-Sa>t?t+ka:t,e]}}function or(n){var t=ir(n);return t.invert=ir(-n),t}function ar(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*r+a*u;return[Math.atan2(c*i-l*o,a*r-s*u),X(l*i+c*o)]}var r=Math.cos(n),u=Math.sin(n),i=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,c=Math.sin(n)*e,s=Math.sin(t),l=s*i-c*o;return[Math.atan2(c*i+s*o,a*r+l*u),X(l*r-a*u)]},e}function cr(n,t){var e=Math.cos(n),r=Math.sin(n);return function(u,i,o,a){var c=o*t;null!=u?(u=sr(e,u),i=sr(e,i),(o>0?i>u:u>i)&&(u+=o*ka)):(u=n+o*ka,i=n-.5*c);for(var s,l=u;o>0?l>i:i>l;l-=c)a.point((s=ve([e,-r*Math.cos(l),-r*Math.sin(l)]))[0],s[1])}}function sr(n,t){var e=se(t);e[0]-=n,pe(e);var r=V(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Aa)%(2*Math.PI)}function lr(n,t,e){var r=Xo.range(n,t-Aa,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function fr(n,t,e){var r=Xo.range(n,t-Aa,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function hr(n){return n.source}function gr(n){return n.target}function pr(n,t,e,r){var u=Math.cos(t),i=Math.sin(t),o=Math.cos(r),a=Math.sin(r),c=u*Math.cos(n),s=u*Math.sin(n),l=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(J(r-t)+u*o*J(e-n))),g=1/Math.sin(h),p=h?function(n){var t=Math.sin(n*=h)*g,e=Math.sin(h-n)*g,r=e*c+t*l,u=e*s+t*f,o=e*i+t*a;return[Math.atan2(u,r)*La,Math.atan2(o,Math.sqrt(r*r+u*u))*La]}:function(){return[n*La,t*La]};return p.distance=h,p}function vr(){function n(n,u){var i=Math.sin(u*=Na),o=Math.cos(u),a=oa((n*=Na)-t),c=Math.cos(a);Uc+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*i-e*o*c)*a),e*i+r*o*c),t=n,e=i,r=o}var t,e,r;jc.point=function(u,i){t=u*Na,e=Math.sin(i*=Na),r=Math.cos(i),jc.point=n},jc.lineEnd=function(){jc.point=jc.lineEnd=g}}function dr(n,t){function e(t,e){var r=Math.cos(t),u=Math.cos(e),i=n(r*u);return[i*u*Math.sin(t),i*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),u=t(r),i=Math.sin(u),o=Math.cos(u);return[Math.atan2(n*i,r*o),Math.asin(r&&e*i/r)]},e}function mr(n,t){function e(n,t){var e=oa(oa(t)-Ea)<Aa?0:o/Math.pow(u(t),i);return[e*Math.sin(i*n),o-e*Math.cos(i*n)]}var r=Math.cos(n),u=function(n){return Math.tan(Sa/4+n/2)},i=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(u(t)/u(n)),o=r*Math.pow(u(n),i)/i;return i?(e.invert=function(n,t){var e=o-t,r=I(i)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/i,2*Math.atan(Math.pow(o/r,1/i))-Ea]},e):xr}function yr(n,t){function e(n,t){var e=i-t;return[e*Math.sin(u*n),i-e*Math.cos(u*n)]}var r=Math.cos(n),u=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),i=r/u+n;return oa(u)<Aa?er:(e.invert=function(n,t){var e=i-t;return[Math.atan2(n,e)/u,i-I(u)*Math.sqrt(n*n+e*e)]},e)}function xr(n,t){return[n,Math.log(Math.tan(Sa/4+t/2))]}function Mr(n){var t,e=Qe(n),r=e.scale,u=e.translate,i=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=u.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=i.apply(e,arguments);if(o===e){if(t=null==n){var a=Sa*r(),c=u();i([[c[0]-a,c[1]-a],[c[0]+a,c[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function _r(n,t){return[Math.log(Math.tan(Sa/4+t/2)),-n]}function br(n){return n[0]}function wr(n){return n[1]}function Sr(n){for(var t=n.length,e=[0,1],r=2,u=2;t>u;u++){for(;r>1&&Z(n[e[r-2]],n[e[r-1]],n[u])<=0;)--r;e[r++]=u}return e.slice(0,r)}function kr(n,t){return n[0]-t[0]||n[1]-t[1]}function Er(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Ar(n,t,e,r){var u=n[0],i=e[0],o=t[0]-u,a=r[0]-i,c=n[1],s=e[1],l=t[1]-c,f=r[1]-s,h=(a*(c-s)-f*(u-i))/(f*o-a*l);return[u+h*o,c+h*l]}function Cr(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Nr(){Jr(this),this.edge=this.site=this.circle=null}function Lr(n){var t=Jc.pop()||new Nr;return t.site=n,t}function zr(n){Or(n),$c.remove(n),Jc.push(n),Jr(n)}function qr(n){var t=n.circle,e=t.x,r=t.cy,u={x:e,y:r},i=n.P,o=n.N,a=[n];zr(n);for(var c=i;c.circle&&oa(e-c.circle.x)<Aa&&oa(r-c.circle.cy)<Aa;)i=c.P,a.unshift(c),zr(c),c=i;a.unshift(c),Or(c);for(var s=o;s.circle&&oa(e-s.circle.x)<Aa&&oa(r-s.circle.cy)<Aa;)o=s.N,a.push(s),zr(s),s=o;a.push(s),Or(s);var l,f=a.length;for(l=1;f>l;++l)s=a[l],c=a[l-1],$r(s.edge,c.site,s.site,u);c=a[0],s=a[f-1],s.edge=Vr(c.site,s.site,null,u),Fr(c),Fr(s)}function Tr(n){for(var t,e,r,u,i=n.x,o=n.y,a=$c._;a;)if(r=Rr(a,o)-i,r>Aa)a=a.L;else{if(u=i-Dr(a,o),!(u>Aa)){r>-Aa?(t=a.P,e=a):u>-Aa?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var c=Lr(n);if($c.insert(t,c),t||e){if(t===e)return Or(t),e=Lr(t.site),$c.insert(c,e),c.edge=e.edge=Vr(t.site,c.site),Fr(t),Fr(e),void 0;if(!e)return c.edge=Vr(t.site,c.site),void 0;Or(t),Or(e);var s=t.site,l=s.x,f=s.y,h=n.x-l,g=n.y-f,p=e.site,v=p.x-l,d=p.y-f,m=2*(h*d-g*v),y=h*h+g*g,x=v*v+d*d,M={x:(d*y-g*x)/m+l,y:(h*x-v*y)/m+f};$r(e.edge,s,p,M),c.edge=Vr(s,n,null,M),e.edge=Vr(n,p,null,M),Fr(t),Fr(e)}}function Rr(n,t){var e=n.site,r=e.x,u=e.y,i=u-t;if(!i)return r;var o=n.P;if(!o)return-1/0;e=o.site;var a=e.x,c=e.y,s=c-t;if(!s)return a;var l=a-r,f=1/i-1/s,h=l/s;return f?(-h+Math.sqrt(h*h-2*f*(l*l/(-2*s)-c+s/2+u-i/2)))/f+r:(r+a)/2}function Dr(n,t){var e=n.N;if(e)return Rr(e,t);var r=n.site;return r.y===t?r.x:1/0}function Pr(n){this.site=n,this.edges=[]}function Ur(n){for(var t,e,r,u,i,o,a,c,s,l,f=n[0][0],h=n[1][0],g=n[0][1],p=n[1][1],v=Xc,d=v.length;d--;)if(i=v[d],i&&i.prepare())for(a=i.edges,c=a.length,o=0;c>o;)l=a[o].end(),r=l.x,u=l.y,s=a[++o%c].start(),t=s.x,e=s.y,(oa(r-t)>Aa||oa(u-e)>Aa)&&(a.splice(o,0,new Br(Xr(i.site,l,oa(r-f)<Aa&&p-u>Aa?{x:f,y:oa(t-f)<Aa?e:p}:oa(u-p)<Aa&&h-r>Aa?{x:oa(e-p)<Aa?t:h,y:p}:oa(r-h)<Aa&&u-g>Aa?{x:h,y:oa(t-h)<Aa?e:g}:oa(u-g)<Aa&&r-f>Aa?{x:oa(e-g)<Aa?t:f,y:g}:null),i.site,null)),++c)}function jr(n,t){return t.angle-n.angle}function Hr(){Jr(this),this.x=this.y=this.arc=this.site=this.cy=null}function Fr(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,u=n.site,i=e.site;if(r!==i){var o=u.x,a=u.y,c=r.x-o,s=r.y-a,l=i.x-o,f=i.y-a,h=2*(c*f-s*l);if(!(h>=-Ca)){var g=c*c+s*s,p=l*l+f*f,v=(f*g-s*p)/h,d=(c*p-l*g)/h,f=d+a,m=Gc.pop()||new Hr;m.arc=n,m.site=u,m.x=v+o,m.y=f+Math.sqrt(v*v+d*d),m.cy=f,n.circle=m;for(var y=null,x=Wc._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}Wc.insert(y,m),y||(Bc=m)}}}}function Or(n){var t=n.circle;t&&(t.P||(Bc=t.N),Wc.remove(t),Gc.push(t),Jr(t),n.circle=null)}function Yr(n){for(var t,e=Vc,r=De(n[0][0],n[0][1],n[1][0],n[1][1]),u=e.length;u--;)t=e[u],(!Ir(t,n)||!r(t)||oa(t.a.x-t.b.x)<Aa&&oa(t.a.y-t.b.y)<Aa)&&(t.a=t.b=null,e.splice(u,1))}function Ir(n,t){var e=n.b;if(e)return!0;var r,u,i=n.a,o=t[0][0],a=t[1][0],c=t[0][1],s=t[1][1],l=n.l,f=n.r,h=l.x,g=l.y,p=f.x,v=f.y,d=(h+p)/2,m=(g+v)/2;if(v===g){if(o>d||d>=a)return;if(h>p){if(i){if(i.y>=s)return}else i={x:d,y:c};e={x:d,y:s}}else{if(i){if(i.y<c)return}else i={x:d,y:s};e={x:d,y:c}}}else if(r=(h-p)/(v-g),u=m-r*d,-1>r||r>1)if(h>p){if(i){if(i.y>=s)return}else i={x:(c-u)/r,y:c};e={x:(s-u)/r,y:s}}else{if(i){if(i.y<c)return}else i={x:(s-u)/r,y:s};e={x:(c-u)/r,y:c}}else if(v>g){if(i){if(i.x>=a)return}else i={x:o,y:r*o+u};e={x:a,y:r*a+u}}else{if(i){if(i.x<o)return}else i={x:a,y:r*a+u};e={x:o,y:r*o+u}}return n.a=i,n.b=e,!0}function Zr(n,t){this.l=n,this.r=t,this.a=this.b=null}function Vr(n,t,e,r){var u=new Zr(n,t);return Vc.push(u),e&&$r(u,n,t,e),r&&$r(u,t,n,r),Xc[n.i].edges.push(new Br(u,n,t)),Xc[t.i].edges.push(new Br(u,t,n)),u}function Xr(n,t,e){var r=new Zr(n,null);return r.a=t,r.b=e,Vc.push(r),r}function $r(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function Br(n,t,e){var r=n.a,u=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(u.x-r.x,r.y-u.y):Math.atan2(r.x-u.x,u.y-r.y)}function Wr(){this._=null}function Jr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function Gr(n,t){var e=t,r=t.R,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function Kr(n,t){var e=t,r=t.L,u=e.U;u?u.L===e?u.L=r:u.R=r:n._=r,r.U=u,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function Qr(n){for(;n.L;)n=n.L;return n}function nu(n,t){var e,r,u,i=n.sort(tu).pop();for(Vc=[],Xc=new Array(n.length),$c=new Wr,Wc=new Wr;;)if(u=Bc,i&&(!u||i.y<u.y||i.y===u.y&&i.x<u.x))(i.x!==e||i.y!==r)&&(Xc[i.i]=new Pr(i),Tr(i),e=i.x,r=i.y),i=n.pop();else{if(!u)break;qr(u.arc)}t&&(Yr(t),Ur(t));var o={cells:Xc,edges:Vc};return $c=Wc=Vc=Xc=null,o}function tu(n,t){return t.y-n.y||t.x-n.x}function eu(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function ru(n){return n.x}function uu(n){return n.y}function iu(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function ou(n,t,e,r,u,i){if(!n(t,e,r,u,i)){var o=.5*(e+u),a=.5*(r+i),c=t.nodes;c[0]&&ou(n,c[0],e,r,o,a),c[1]&&ou(n,c[1],o,r,u,a),c[2]&&ou(n,c[2],e,a,o,i),c[3]&&ou(n,c[3],o,a,u,i)}}function au(n,t){n=Xo.rgb(n),t=Xo.rgb(t);var e=n.r,r=n.g,u=n.b,i=t.r-e,o=t.g-r,a=t.b-u;return function(n){return"#"+vt(Math.round(e+i*n))+vt(Math.round(r+o*n))+vt(Math.round(u+a*n))}}function cu(n,t){var e,r={},u={};for(e in n)e in t?r[e]=fu(n[e],t[e]):u[e]=n[e];for(e in t)e in n||(u[e]=t[e]);return function(n){for(e in r)u[e]=r[e](n);return u}}function su(n,t){return t-=n=+n,function(e){return n+t*e}}function lu(n,t){var e,r,u,i,o,a=0,c=0,s=[],l=[];for(n+="",t+="",Qc.lastIndex=0,r=0;e=Qc.exec(t);++r)e.index&&s.push(t.substring(a,c=e.index)),l.push({i:s.length,x:e[0]}),s.push(null),a=Qc.lastIndex;for(a<t.length&&s.push(t.substring(a)),r=0,i=l.length;(e=Qc.exec(n))&&i>r;++r)if(o=l[r],o.x==e[0]){if(o.i)if(null==s[o.i+1])for(s[o.i-1]+=o.x,s.splice(o.i,1),u=r+1;i>u;++u)l[u].i--;else for(s[o.i-1]+=o.x+s[o.i+1],s.splice(o.i,2),u=r+1;i>u;++u)l[u].i-=2;else if(null==s[o.i+1])s[o.i]=o.x;else for(s[o.i]=o.x+s[o.i+1],s.splice(o.i+1,1),u=r+1;i>u;++u)l[u].i--;l.splice(r,1),i--,r--}else o.x=su(parseFloat(e[0]),parseFloat(o.x));for(;i>r;)o=l.pop(),null==s[o.i+1]?s[o.i]=o.x:(s[o.i]=o.x+s[o.i+1],s.splice(o.i+1,1)),i--;return 1===s.length?null==s[0]?(o=l[0].x,function(n){return o(n)+""}):function(){return t}:function(n){for(r=0;i>r;++r)s[(o=l[r]).i]=o.x(n);return s.join("")}}function fu(n,t){for(var e,r=Xo.interpolators.length;--r>=0&&!(e=Xo.interpolators[r](n,t)););return e}function hu(n,t){var e,r=[],u=[],i=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(fu(n[e],t[e]));for(;i>e;++e)u[e]=n[e];for(;o>e;++e)u[e]=t[e];return function(n){for(e=0;a>e;++e)u[e]=r[e](n);return u}}function gu(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function pu(n){return function(t){return 1-n(1-t)}}function vu(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function du(n){return n*n}function mu(n){return n*n*n}function yu(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function xu(n){return function(t){return Math.pow(t,n)}}function Mu(n){return 1-Math.cos(n*Ea)}function _u(n){return Math.pow(2,10*(n-1))}function bu(n){return 1-Math.sqrt(1-n*n)}function wu(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/ka*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*ka/t)}}function Su(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function ku(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Eu(n,t){n=Xo.hcl(n),t=Xo.hcl(t);var e=n.h,r=n.c,u=n.l,i=t.h-e,o=t.c-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return rt(e+i*n,r+o*n,u+a*n)+""}}function Au(n,t){n=Xo.hsl(n),t=Xo.hsl(t);var e=n.h,r=n.s,u=n.l,i=t.h-e,o=t.s-r,a=t.l-u;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(i)?(i=0,e=isNaN(e)?t.h:e):i>180?i-=360:-180>i&&(i+=360),function(n){return nt(e+i*n,r+o*n,u+a*n)+""}}function Cu(n,t){n=Xo.lab(n),t=Xo.lab(t);var e=n.l,r=n.a,u=n.b,i=t.l-e,o=t.a-r,a=t.b-u;return function(n){return ot(e+i*n,r+o*n,u+a*n)+""}}function Nu(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Lu(n){var t=[n.a,n.b],e=[n.c,n.d],r=qu(t),u=zu(t,e),i=qu(Tu(e,t,-u))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,u*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*La,this.translate=[n.e,n.f],this.scale=[r,i],this.skew=i?Math.atan2(u,i)*La:0}function zu(n,t){return n[0]*t[0]+n[1]*t[1]}function qu(n){var t=Math.sqrt(zu(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Tu(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ru(n,t){var e,r=[],u=[],i=Xo.transform(n),o=Xo.transform(t),a=i.translate,c=o.translate,s=i.rotate,l=o.rotate,f=i.skew,h=o.skew,g=i.scale,p=o.scale;return a[0]!=c[0]||a[1]!=c[1]?(r.push("translate(",null,",",null,")"),u.push({i:1,x:su(a[0],c[0])},{i:3,x:su(a[1],c[1])})):c[0]||c[1]?r.push("translate("+c+")"):r.push(""),s!=l?(s-l>180?l+=360:l-s>180&&(s+=360),u.push({i:r.push(r.pop()+"rotate(",null,")")-2,x:su(s,l)})):l&&r.push(r.pop()+"rotate("+l+")"),f!=h?u.push({i:r.push(r.pop()+"skewX(",null,")")-2,x:su(f,h)}):h&&r.push(r.pop()+"skewX("+h+")"),g[0]!=p[0]||g[1]!=p[1]?(e=r.push(r.pop()+"scale(",null,",",null,")"),u.push({i:e-4,x:su(g[0],p[0])},{i:e-2,x:su(g[1],p[1])})):(1!=p[0]||1!=p[1])&&r.push(r.pop()+"scale("+p+")"),e=u.length,function(n){for(var t,i=-1;++i<e;)r[(t=u[i]).i]=t.x(n);return r.join("")}}function Du(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return(e-n)*t}}function Pu(n,t){return t=t-(n=+n)?1/(t-n):0,function(e){return Math.max(0,Math.min(1,(e-n)*t))}}function Uu(n){for(var t=n.source,e=n.target,r=Hu(t,e),u=[t];t!==r;)t=t.parent,u.push(t);for(var i=u.length;e!==r;)u.splice(i,0,e),e=e.parent;return u}function ju(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Hu(n,t){if(n===t)return n;for(var e=ju(n),r=ju(t),u=e.pop(),i=r.pop(),o=null;u===i;)o=u,u=e.pop(),i=r.pop();return o}function Fu(n){n.fixed|=2}function Ou(n){n.fixed&=-7}function Yu(n){n.fixed|=4,n.px=n.x,n.py=n.y}function Iu(n){n.fixed&=-5}function Zu(n,t,e){var r=0,u=0;if(n.charge=0,!n.leaf)for(var i,o=n.nodes,a=o.length,c=-1;++c<a;)i=o[c],null!=i&&(Zu(i,t,e),n.charge+=i.charge,r+=i.charge*i.cx,u+=i.charge*i.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var s=t*e[n.point.index];n.charge+=n.pointCharge=s,r+=s*n.point.x,u+=s*n.point.y}n.cx=r/n.charge,n.cy=u/n.charge}function Vu(n,t){return Xo.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=Wu,n}function Xu(n){return n.children}function $u(n){return n.value}function Bu(n,t){return t.value-n.value}function Wu(n){return Xo.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function Ju(n){return n.x}function Gu(n){return n.y}function Ku(n,t,e){n.y0=t,n.y=e}function Qu(n){return Xo.range(n.length)}function ni(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function ti(n){for(var t,e=1,r=0,u=n[0][1],i=n.length;i>e;++e)(t=n[e][1])>u&&(r=e,u=t);return r}function ei(n){return n.reduce(ri,0)}function ri(n,t){return n+t[1]}function ui(n,t){return ii(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function ii(n,t){for(var e=-1,r=+n[0],u=(n[1]-r)/t,i=[];++e<=t;)i[e]=u*e+r;return i}function oi(n){return[Xo.min(n),Xo.max(n)]}function ai(n,t){return n.parent==t.parent?1:2}function ci(n){var t=n.children;return t&&t.length?t[0]:n._tree.thread}function si(n){var t,e=n.children;return e&&(t=e.length)?e[t-1]:n._tree.thread}function li(n,t){var e=n.children;if(e&&(u=e.length))for(var r,u,i=-1;++i<u;)t(r=li(e[i],t),n)>0&&(n=r);return n}function fi(n,t){return n.x-t.x}function hi(n,t){return t.x-n.x}function gi(n,t){return n.depth-t.depth}function pi(n,t){function e(n,r){var u=n.children;if(u&&(o=u.length))for(var i,o,a=null,c=-1;++c<o;)i=u[c],e(i,a),a=i;t(n,r)}e(n,null)}function vi(n){for(var t,e=0,r=0,u=n.children,i=u.length;--i>=0;)t=u[i]._tree,t.prelim+=e,t.mod+=e,e+=t.shift+(r+=t.change)}function di(n,t,e){n=n._tree,t=t._tree;var r=e/(t.number-n.number);n.change+=r,t.change-=r,t.shift+=e,t.prelim+=e,t.mod+=e}function mi(n,t,e){return n._tree.ancestor.parent==t.parent?n._tree.ancestor:e}function yi(n,t){return n.value-t.value}function xi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Mi(n,t){n._pack_next=t,t._pack_prev=n}function _i(n,t){var e=t.x-n.x,r=t.y-n.y,u=n.r+t.r;return.999*u*u>e*e+r*r}function bi(n){function t(n){l=Math.min(n.x-n.r,l),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),g=Math.max(n.y+n.r,g)}if((e=n.children)&&(s=e.length)){var e,r,u,i,o,a,c,s,l=1/0,f=-1/0,h=1/0,g=-1/0;if(e.forEach(wi),r=e[0],r.x=-r.r,r.y=0,t(r),s>1&&(u=e[1],u.x=u.r,u.y=0,t(u),s>2))for(i=e[2],Ei(r,u,i),t(i),xi(r,i),r._pack_prev=i,xi(i,u),u=r._pack_next,o=3;s>o;o++){Ei(r,u,i=e[o]);var p=0,v=1,d=1;for(a=u._pack_next;a!==u;a=a._pack_next,v++)if(_i(a,i)){p=1;break}if(1==p)for(c=r._pack_prev;c!==a._pack_prev&&!_i(c,i);c=c._pack_prev,d++);p?(d>v||v==d&&u.r<r.r?Mi(r,u=a):Mi(r=c,u),o--):(xi(r,i),u=i,t(i))}var m=(l+f)/2,y=(h+g)/2,x=0;for(o=0;s>o;o++)i=e[o],i.x-=m,i.y-=y,x=Math.max(x,i.r+Math.sqrt(i.x*i.x+i.y*i.y));n.r=x,e.forEach(Si)}}function wi(n){n._pack_next=n._pack_prev=n}function Si(n){delete n._pack_next,delete n._pack_prev}function ki(n,t,e,r){var u=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,u)for(var i=-1,o=u.length;++i<o;)ki(u[i],t,e,r)}function Ei(n,t,e){var r=n.r+e.r,u=t.x-n.x,i=t.y-n.y;if(r&&(u||i)){var o=t.r+e.r,a=u*u+i*i;o*=o,r*=r;var c=.5+(r-o)/(2*a),s=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+c*u+s*i,e.y=n.y+c*i-s*u}else e.x=n.x+r,e.y=n.y}function Ai(n){return 1+Xo.max(n,function(n){return n.y})}function Ci(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Ni(n){var t=n.children;return t&&t.length?Ni(t[0]):n}function Li(n){var t,e=n.children;return e&&(t=e.length)?Li(e[t-1]):n}function zi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function qi(n,t){var e=n.x+t[3],r=n.y+t[0],u=n.dx-t[1]-t[3],i=n.dy-t[0]-t[2];return 0>u&&(e+=u/2,u=0),0>i&&(r+=i/2,i=0),{x:e,y:r,dx:u,dy:i}}function Ti(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Ri(n){return n.rangeExtent?n.rangeExtent():Ti(n.range())}function Di(n,t,e,r){var u=e(n[0],n[1]),i=r(t[0],t[1]);return function(n){return i(u(n))}}function Pi(n,t){var e,r=0,u=n.length-1,i=n[r],o=n[u];return i>o&&(e=r,r=u,u=e,e=i,i=o,o=e),n[r]=t.floor(i),n[u]=t.ceil(o),n}function Ui(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:ls}function ji(n,t,e,r){var u=[],i=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)u.push(e(n[o-1],n[o])),i.push(r(t[o-1],t[o]));return function(t){var e=Xo.bisect(n,t,1,a)-1;return i[e](u[e](t))}}function Hi(n,t,e,r){function u(){var u=Math.min(n.length,t.length)>2?ji:Di,c=r?Pu:Du;return o=u(n,t,c,e),a=u(t,n,c,fu),i}function i(n){return o(n)}var o,a;return i.invert=function(n){return a(n)},i.domain=function(t){return arguments.length?(n=t.map(Number),u()):n},i.range=function(n){return arguments.length?(t=n,u()):t},i.rangeRound=function(n){return i.range(n).interpolate(Nu)},i.clamp=function(n){return arguments.length?(r=n,u()):r},i.interpolate=function(n){return arguments.length?(e=n,u()):e},i.ticks=function(t){return Ii(n,t)},i.tickFormat=function(t,e){return Zi(n,t,e)},i.nice=function(t){return Oi(n,t),u()},i.copy=function(){return Hi(n,t,e,r)},u()}function Fi(n,t){return Xo.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Oi(n,t){return Pi(n,Ui(Yi(n,t)[2]))}function Yi(n,t){null==t&&(t=10);var e=Ti(n),r=e[1]-e[0],u=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),i=t/r*u;return.15>=i?u*=10:.35>=i?u*=5:.75>=i&&(u*=2),e[0]=Math.ceil(e[0]/u)*u,e[1]=Math.floor(e[1]/u)*u+.5*u,e[2]=u,e}function Ii(n,t){return Xo.range.apply(Xo,Yi(n,t))}function Zi(n,t,e){var r=Yi(n,t);return Xo.format(e?e.replace(Qa,function(n,t,e,u,i,o,a,c,s,l){return[t,e,u,i,o,a,c,s||"."+Xi(l,r),l].join("")}):",."+Vi(r[2])+"f")}function Vi(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function Xi(n,t){var e=Vi(t[2]);return n in fs?Math.abs(e-Vi(Math.max(Math.abs(t[0]),Math.abs(t[1]))))+ +("e"!==n):e-2*("%"===n)}function $i(n,t,e,r){function u(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function i(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(u(t))}return o.invert=function(t){return i(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(u)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(u)),o):t},o.nice=function(){var t=Pi(r.map(u),e?Math:gs);return n.domain(t),r=t.map(i),o},o.ticks=function(){var n=Ti(r),o=[],a=n[0],c=n[1],s=Math.floor(u(a)),l=Math.ceil(u(c)),f=t%1?2:t;if(isFinite(l-s)){if(e){for(;l>s;s++)for(var h=1;f>h;h++)o.push(i(s)*h);o.push(i(s))}else for(o.push(i(s));s++<l;)for(var h=f-1;h>0;h--)o.push(i(s)*h);for(s=0;o[s]<a;s++);for(l=o.length;o[l-1]>c;l--);o=o.slice(s,l)}return o},o.tickFormat=function(n,t){if(!arguments.length)return hs;arguments.length<2?t=hs:"function"!=typeof t&&(t=Xo.format(t));var r,a=Math.max(.1,n/o.ticks().length),c=e?(r=1e-12,Math.ceil):(r=-1e-12,Math.floor);return function(n){return n/i(c(u(n)+r))<=a?t(n):""}},o.copy=function(){return $i(n.copy(),t,e,r)},Fi(o,n)}function Bi(n,t,e){function r(t){return n(u(t))}var u=Wi(t),i=Wi(1/t);return r.invert=function(t){return i(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(u)),r):e},r.ticks=function(n){return Ii(e,n)},r.tickFormat=function(n,t){return Zi(e,n,t)},r.nice=function(n){return r.domain(Oi(e,n))},r.exponent=function(o){return arguments.length?(u=Wi(t=o),i=Wi(1/t),n.domain(e.map(u)),r):t},r.copy=function(){return Bi(n.copy(),t,e)},Fi(r,n)}function Wi(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function Ji(n,t){function e(e){return o[((i.get(e)||"range"===t.t&&i.set(e,n.push(e)))-1)%o.length]}function r(t,e){return Xo.range(n.length).map(function(n){return t+e*n})}var i,o,a;return e.domain=function(r){if(!arguments.length)return n;n=[],i=new u;for(var o,a=-1,c=r.length;++a<c;)i.has(o=r[a])||i.set(o,n.push(o));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(o=n,a=0,t={t:"range",a:arguments},e):o},e.rangePoints=function(u,i){arguments.length<2&&(i=0);var c=u[0],s=u[1],l=(s-c)/(Math.max(1,n.length-1)+i);return o=r(n.length<2?(c+s)/2:c+l*i/2,l),a=0,t={t:"rangePoints",a:arguments},e},e.rangeBands=function(u,i,c){arguments.length<2&&(i=0),arguments.length<3&&(c=i);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=(f-l)/(n.length-i+2*c);return o=r(l+h*c,h),s&&o.reverse(),a=h*(1-i),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(u,i,c){arguments.length<2&&(i=0),arguments.length<3&&(c=i);var s=u[1]<u[0],l=u[s-0],f=u[1-s],h=Math.floor((f-l)/(n.length-i+2*c)),g=f-l-(n.length-i)*h;return o=r(l+Math.round(g/2),h),s&&o.reverse(),a=Math.round(h*(1-i)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return a},e.rangeExtent=function(){return Ti(t.a[0])},e.copy=function(){return Ji(n,t)},e.domain(n)}function Gi(n,t){function e(){var e=0,i=t.length;for(u=[];++e<i;)u[e-1]=Xo.quantile(n,e/i);return r}function r(n){return isNaN(n=+n)?void 0:t[Xo.bisect(u,n)]}var u;return r.domain=function(t){return arguments.length?(n=t.filter(function(n){return!isNaN(n)}).sort(Xo.ascending),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return u},r.invertExtent=function(e){return e=t.indexOf(e),0>e?[0/0,0/0]:[e>0?u[e-1]:n[0],e<u.length?u[e]:n[n.length-1]]},r.copy=function(){return Gi(n,t)},e()}function Ki(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(i*(t-n))))]}function u(){return i=e.length/(t-n),o=e.length-1,r}var i,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],u()):[n,t]},r.range=function(n){return arguments.length?(e=n,u()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?0/0:t/i+n,[t,t+1/i]},r.copy=function(){return Ki(n,t,e)},u()}function Qi(n,t){function e(e){return e>=e?t[Xo.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return Qi(n,t)},e}function no(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Ii(n,t)},t.tickFormat=function(t,e){return Zi(n,t,e)},t.copy=function(){return no(n)},t}function to(n){return n.innerRadius}function eo(n){return n.outerRadius}function ro(n){return n.startAngle}function uo(n){return n.endAngle}function io(n){function t(t){function o(){s.push("M",i(n(l),a))}for(var c,s=[],l=[],f=-1,h=t.length,g=_t(e),p=_t(r);++f<h;)u.call(this,c=t[f],f)?l.push([+g.call(this,c,f),+p.call(this,c,f)]):l.length&&(o(),l=[]);return l.length&&o(),s.length?s.join(""):null}var e=br,r=wr,u=be,i=oo,o=i.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(u=n,t):u},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?i=n:(i=Ms.get(n)||oo).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function oo(n){return n.join("L")}function ao(n){return oo(n)+"Z"}function co(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&u.push("H",r[0]),u.join("")}function so(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("V",(r=n[t])[1],"H",r[0]);return u.join("")}function lo(n){for(var t=0,e=n.length,r=n[0],u=[r[0],",",r[1]];++t<e;)u.push("H",(r=n[t])[0],"V",r[1]);return u.join("")}function fo(n,t){return n.length<4?oo(n):n[1]+po(n.slice(1,n.length-1),vo(n,t))}function ho(n,t){return n.length<3?oo(n):n[0]+po((n.push(n[0]),n),vo([n[n.length-2]].concat(n,[n[1]]),t))}function go(n,t){return n.length<3?oo(n):n[0]+po(n,vo(n,t))}function po(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return oo(n);var e=n.length!=t.length,r="",u=n[0],i=n[1],o=t[0],a=o,c=1;if(e&&(r+="Q"+(i[0]-2*o[0]/3)+","+(i[1]-2*o[1]/3)+","+i[0]+","+i[1],u=n[1],c=2),t.length>1){a=t[1],i=n[c],c++,r+="C"+(u[0]+o[0])+","+(u[1]+o[1])+","+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1];for(var s=2;s<t.length;s++,c++)i=n[c],a=t[s],r+="S"+(i[0]-a[0])+","+(i[1]-a[1])+","+i[0]+","+i[1]}if(e){var l=n[c];r+="Q"+(i[0]+2*a[0]/3)+","+(i[1]+2*a[1]/3)+","+l[0]+","+l[1]}return r}function vo(n,t){for(var e,r=[],u=(1-t)/2,i=n[0],o=n[1],a=1,c=n.length;++a<c;)e=i,i=o,o=n[a],r.push([u*(o[0]-e[0]),u*(o[1]-e[1])]);return r}function mo(n){if(n.length<3)return oo(n);var t=1,e=n.length,r=n[0],u=r[0],i=r[1],o=[u,u,u,(r=n[1])[0]],a=[i,i,i,r[1]],c=[u,",",i,"L",_o(ws,o),",",_o(ws,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),bo(c,o,a);return n.pop(),c.push("L",r),c.join("")}function yo(n){if(n.length<4)return oo(n);for(var t,e=[],r=-1,u=n.length,i=[0],o=[0];++r<3;)t=n[r],i.push(t[0]),o.push(t[1]);for(e.push(_o(ws,i)+","+_o(ws,o)),--r;++r<u;)t=n[r],i.shift(),i.push(t[0]),o.shift(),o.push(t[1]),bo(e,i,o);return e.join("")}function xo(n){for(var t,e,r=-1,u=n.length,i=u+4,o=[],a=[];++r<4;)e=n[r%u],o.push(e[0]),a.push(e[1]);for(t=[_o(ws,o),",",_o(ws,a)],--r;++r<i;)e=n[r%u],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),bo(t,o,a);return t.join("")}function Mo(n,t){var e=n.length-1;if(e)for(var r,u,i=n[0][0],o=n[0][1],a=n[e][0]-i,c=n[e][1]-o,s=-1;++s<=e;)r=n[s],u=s/e,r[0]=t*r[0]+(1-t)*(i+u*a),r[1]=t*r[1]+(1-t)*(o+u*c);return mo(n)}function _o(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function bo(n,t,e){n.push("C",_o(_s,t),",",_o(_s,e),",",_o(bs,t),",",_o(bs,e),",",_o(ws,t),",",_o(ws,e))}function wo(n,t){return(t[1]-n[1])/(t[0]-n[0])}function So(n){for(var t=0,e=n.length-1,r=[],u=n[0],i=n[1],o=r[0]=wo(u,i);++t<e;)r[t]=(o+(o=wo(u=i,i=n[t+1])))/2;return r[t]=o,r}function ko(n){for(var t,e,r,u,i=[],o=So(n),a=-1,c=n.length-1;++a<c;)t=wo(n[a],n[a+1]),oa(t)<Aa?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,u=e*e+r*r,u>9&&(u=3*t/Math.sqrt(u),o[a]=u*e,o[a+1]=u*r));for(a=-1;++a<=c;)u=(n[Math.min(c,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),i.push([u||0,o[a]*u||0]);return i}function Eo(n){return n.length<3?oo(n):n[0]+po(n,ko(n))}function Ao(n){for(var t,e,r,u=-1,i=n.length;++u<i;)t=n[u],e=t[0],r=t[1]+ys,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Co(n){function t(t){function c(){v.push("M",a(n(m),f),l,s(n(d.reverse()),f),"Z")}for(var h,g,p,v=[],d=[],m=[],y=-1,x=t.length,M=_t(e),_=_t(u),b=e===r?function(){return g}:_t(r),w=u===i?function(){return p}:_t(i);++y<x;)o.call(this,h=t[y],y)?(d.push([g=+M.call(this,h,y),p=+_.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):d.length&&(c(),d=[],m=[]);return d.length&&c(),v.length?v.join(""):null}var e=br,r=br,u=0,i=wr,o=be,a=oo,c=a.key,s=a,l="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(u=i=n,t):i},t.y0=function(n){return arguments.length?(u=n,t):u},t.y1=function(n){return arguments.length?(i=n,t):i},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(c="function"==typeof n?a=n:(a=Ms.get(n)||oo).key,s=a.reverse||a,l=a.closed?"M":"L",t):c},t.tension=function(n){return arguments.length?(f=n,t):f},t}function No(n){return n.radius}function Lo(n){return[n.x,n.y]}function zo(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]+ys;return[e*Math.cos(r),e*Math.sin(r)]}}function qo(){return 64}function To(){return"circle"}function Ro(n){var t=Math.sqrt(n/Sa);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Do(n,t){return fa(n,Ns),n.id=t,n}function Po(n,t,e,r){var u=n.id;return R(n,"function"==typeof e?function(n,i,o){n.__transition__[u].tween.set(t,r(e.call(n,n.__data__,i,o)))}:(e=r(e),function(n){n.__transition__[u].tween.set(t,e)}))}function Uo(n){return null==n&&(n=""),function(){this.textContent=n}}function jo(n,t,e,r){var i=n.__transition__||(n.__transition__={active:0,count:0}),o=i[e];if(!o){var a=r.time;o=i[e]={tween:new u,time:a,ease:r.ease,delay:r.delay,duration:r.duration},++i.count,Xo.timer(function(r){function u(r){return i.active>e?s():(i.active=e,o.event&&o.event.start.call(n,l,t),o.tween.forEach(function(e,r){(r=r.call(n,l,t))&&v.push(r)}),Xo.timer(function(){return p.c=c(r||1)?be:c,1},0,a),void 0)}function c(r){if(i.active!==e)return s();for(var u=r/g,a=f(u),c=v.length;c>0;)v[--c].call(n,a);return u>=1?(o.event&&o.event.end.call(n,l,t),s()):void 0}function s(){return--i.count?delete i[e]:delete n.__transition__,1}var l=n.__data__,f=o.ease,h=o.delay,g=o.duration,p=Ja,v=[];return p.t=h+a,r>=h?u(r-h):(p.c=u,void 0)},0,a)}}function Ho(n,t){n.attr("transform",function(n){return"translate("+t(n)+",0)"})}function Fo(n,t){n.attr("transform",function(n){return"translate(0,"+t(n)+")"})}function Oo(n){return n.toISOString()}function Yo(n,t,e){function r(t){return n(t)}function u(n,e){var r=n[1]-n[0],u=r/e,i=Xo.bisect(js,u);return i==js.length?[t.year,Yi(n.map(function(n){return n/31536e6}),e)[2]]:i?t[u/js[i-1]<js[i]/u?i-1:i]:[Os,Yi(n,e)[2]]
}return r.invert=function(t){return Io(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(Io)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,Io(+e+1),t).length}var i=r.domain(),o=Ti(i),a=null==n?u(o,10):"number"==typeof n&&u(o,n);return a&&(n=a[0],t=a[1]),r.domain(Pi(i,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=Io(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=Io(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Ti(r.domain()),i=null==n?u(e,10):"number"==typeof n?u(e,n):!n.range&&[{range:n},t];return i&&(n=i[0],t=i[1]),n.range(e[0],Io(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return Yo(n.copy(),t,e)},Fi(r,n)}function Io(n){return new Date(n)}function Zo(n){return JSON.parse(n.responseText)}function Vo(n){var t=Wo.createRange();return t.selectNode(Wo.body),t.createContextualFragment(n.responseText)}var Xo={version:"3.4.2"};Date.now||(Date.now=function(){return+new Date});var $o=[].slice,Bo=function(n){return $o.call(n)},Wo=document,Jo=Wo.documentElement,Go=window;try{Bo(Jo.childNodes)[0].nodeType}catch(Ko){Bo=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}try{Wo.createElement("div").style.setProperty("opacity",0,"")}catch(Qo){var na=Go.Element.prototype,ta=na.setAttribute,ea=na.setAttributeNS,ra=Go.CSSStyleDeclaration.prototype,ua=ra.setProperty;na.setAttribute=function(n,t){ta.call(this,n,t+"")},na.setAttributeNS=function(n,t,e){ea.call(this,n,t,e+"")},ra.setProperty=function(n,t,e){ua.call(this,n,t+"",e)}}Xo.ascending=function(n,t){return t>n?-1:n>t?1:n>=t?0:0/0},Xo.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:0/0},Xo.min=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&e>r&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&e>r&&(e=r)}return e},Xo.max=function(n,t){var e,r,u=-1,i=n.length;if(1===arguments.length){for(;++u<i&&!(null!=(e=n[u])&&e>=e);)e=void 0;for(;++u<i;)null!=(r=n[u])&&r>e&&(e=r)}else{for(;++u<i&&!(null!=(e=t.call(n,n[u],u))&&e>=e);)e=void 0;for(;++u<i;)null!=(r=t.call(n,n[u],u))&&r>e&&(e=r)}return e},Xo.extent=function(n,t){var e,r,u,i=-1,o=n.length;if(1===arguments.length){for(;++i<o&&!(null!=(e=u=n[i])&&e>=e);)e=u=void 0;for(;++i<o;)null!=(r=n[i])&&(e>r&&(e=r),r>u&&(u=r))}else{for(;++i<o&&!(null!=(e=u=t.call(n,n[i],i))&&e>=e);)e=void 0;for(;++i<o;)null!=(r=t.call(n,n[i],i))&&(e>r&&(e=r),r>u&&(u=r))}return[e,u]},Xo.sum=function(n,t){var e,r=0,u=n.length,i=-1;if(1===arguments.length)for(;++i<u;)isNaN(e=+n[i])||(r+=e);else for(;++i<u;)isNaN(e=+t.call(n,n[i],i))||(r+=e);return r},Xo.mean=function(t,e){var r,u=t.length,i=0,o=-1,a=0;if(1===arguments.length)for(;++o<u;)n(r=t[o])&&(i+=(r-i)/++a);else for(;++o<u;)n(r=e.call(t,t[o],o))&&(i+=(r-i)/++a);return a?i:void 0},Xo.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),u=+n[r-1],i=e-r;return i?u+i*(n[r]-u):u},Xo.median=function(t,e){return arguments.length>1&&(t=t.map(e)),t=t.filter(n),t.length?Xo.quantile(t.sort(Xo.ascending),.5):void 0},Xo.bisector=function(n){return{left:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;n.call(t,t[i],i)<e?r=i+1:u=i}return r},right:function(t,e,r,u){for(arguments.length<3&&(r=0),arguments.length<4&&(u=t.length);u>r;){var i=r+u>>>1;e<n.call(t,t[i],i)?u=i:r=i+1}return r}}};var ia=Xo.bisector(function(n){return n});Xo.bisectLeft=ia.left,Xo.bisect=Xo.bisectRight=ia.right,Xo.shuffle=function(n){for(var t,e,r=n.length;r;)e=0|Math.random()*r--,t=n[r],n[r]=n[e],n[e]=t;return n},Xo.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},Xo.pairs=function(n){for(var t,e=0,r=n.length-1,u=n[0],i=new Array(0>r?0:r);r>e;)i[e]=[t=u,u=n[++e]];return i},Xo.zip=function(){if(!(u=arguments.length))return[];for(var n=-1,e=Xo.min(arguments,t),r=new Array(e);++n<e;)for(var u,i=-1,o=r[n]=new Array(u);++i<u;)o[i]=arguments[i][n];return r},Xo.transpose=function(n){return Xo.zip.apply(Xo,n)},Xo.keys=function(n){var t=[];for(var e in n)t.push(e);return t},Xo.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},Xo.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},Xo.merge=function(n){for(var t,e,r,u=n.length,i=-1,o=0;++i<u;)o+=n[i].length;for(e=new Array(o);--u>=0;)for(r=n[u],t=r.length;--t>=0;)e[--o]=r[t];return e};var oa=Math.abs;Xo.range=function(n,t,r){if(arguments.length<3&&(r=1,arguments.length<2&&(t=n,n=0)),1/0===(t-n)/r)throw new Error("infinite range");var u,i=[],o=e(oa(r)),a=-1;if(n*=o,t*=o,r*=o,0>r)for(;(u=n+r*++a)>t;)i.push(u/o);else for(;(u=n+r*++a)<t;)i.push(u/o);return i},Xo.map=function(n){var t=new u;if(n instanceof u)n.forEach(function(n,e){t.set(n,e)});else for(var e in n)t.set(e,n[e]);return t},r(u,{has:i,get:function(n){return this[aa+n]},set:function(n,t){return this[aa+n]=t},remove:o,keys:a,values:function(){var n=[];return this.forEach(function(t,e){n.push(e)}),n},entries:function(){var n=[];return this.forEach(function(t,e){n.push({key:t,value:e})}),n},size:c,empty:s,forEach:function(n){for(var t in this)t.charCodeAt(0)===ca&&n.call(this,t.substring(1),this[t])}});var aa="\x00",ca=aa.charCodeAt(0);Xo.nest=function(){function n(t,a,c){if(c>=o.length)return r?r.call(i,a):e?a.sort(e):a;for(var s,l,f,h,g=-1,p=a.length,v=o[c++],d=new u;++g<p;)(h=d.get(s=v(l=a[g])))?h.push(l):d.set(s,[l]);return t?(l=t(),f=function(e,r){l.set(e,n(t,r,c))}):(l={},f=function(e,r){l[e]=n(t,r,c)}),d.forEach(f),l}function t(n,e){if(e>=o.length)return n;var r=[],u=a[e++];return n.forEach(function(n,u){r.push({key:n,values:t(u,e)})}),u?r.sort(function(n,t){return u(n.key,t.key)}):r}var e,r,i={},o=[],a=[];return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n(Xo.map,e,0),0)},i.key=function(n){return o.push(n),i},i.sortKeys=function(n){return a[o.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},Xo.set=function(n){var t=new l;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},r(l,{has:i,add:function(n){return this[aa+n]=!0,n},remove:function(n){return n=aa+n,n in this&&delete this[n]},values:a,size:c,empty:s,forEach:function(n){for(var t in this)t.charCodeAt(0)===ca&&n.call(this,t.substring(1))}}),Xo.behavior={},Xo.rebind=function(n,t){for(var e,r=1,u=arguments.length;++r<u;)n[e=arguments[r]]=f(n,t,t[e]);return n};var sa=["webkit","ms","moz","Moz","o","O"];Xo.dispatch=function(){for(var n=new p,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=v(n);return n},p.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.substring(e+1),n=n.substring(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},Xo.event=null,Xo.requote=function(n){return n.replace(la,"\\$&")};var la=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,fa={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},ha=function(n,t){return t.querySelector(n)},ga=function(n,t){return t.querySelectorAll(n)},pa=Jo[h(Jo,"matchesSelector")],va=function(n,t){return pa.call(n,t)};"function"==typeof Sizzle&&(ha=function(n,t){return Sizzle(n,t)[0]||null},ga=function(n,t){return Sizzle.uniqueSort(Sizzle(n,t))},va=Sizzle.matchesSelector),Xo.selection=function(){return xa};var da=Xo.selection.prototype=[];da.select=function(n){var t,e,r,u,i=[];n=M(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var c=-1,s=r.length;++c<s;)(u=r[c])?(t.push(e=n.call(u,u.__data__,c,o)),e&&"__data__"in u&&(e.__data__=u.__data__)):t.push(null)}return x(i)},da.selectAll=function(n){var t,e,r=[];n=_(n);for(var u=-1,i=this.length;++u<i;)for(var o=this[u],a=-1,c=o.length;++a<c;)(e=o[a])&&(r.push(t=Bo(n.call(e,e.__data__,a,u))),t.parentNode=e);return x(r)};var ma={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};Xo.ns={prefix:ma,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&(e=n.substring(0,t),n=n.substring(t+1)),ma.hasOwnProperty(e)?{space:ma[e],local:n}:n}},da.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=Xo.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(b(t,n[t]));return this}return this.each(b(n,t))},da.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=k(n)).length,u=-1;if(t=e.classList){for(;++u<r;)if(!t.contains(n[u]))return!1}else for(t=e.getAttribute("class");++u<r;)if(!S(n[u]).test(t))return!1;return!0}for(t in n)this.each(E(t,n[t]));return this}return this.each(E(n,t))},da.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(C(e,n[e],t));return this}if(2>r)return Go.getComputedStyle(this.node(),null).getPropertyValue(n);e=""}return this.each(C(n,t,e))},da.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(N(t,n[t]));return this}return this.each(N(n,t))},da.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},da.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},da.append=function(n){return n=L(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},da.insert=function(n,t){return n=L(n),t=M(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},da.remove=function(){return this.each(function(){var n=this.parentNode;n&&n.removeChild(this)})},da.data=function(n,t){function e(n,e){var r,i,o,a=n.length,f=e.length,h=Math.min(a,f),g=new Array(f),p=new Array(f),v=new Array(a);if(t){var d,m=new u,y=new u,x=[];for(r=-1;++r<a;)d=t.call(i=n[r],i.__data__,r),m.has(d)?v[r]=i:m.set(d,i),x.push(d);for(r=-1;++r<f;)d=t.call(e,o=e[r],r),(i=m.get(d))?(g[r]=i,i.__data__=o):y.has(d)||(p[r]=z(o)),y.set(d,o),m.remove(d);for(r=-1;++r<a;)m.has(x[r])&&(v[r]=n[r])}else{for(r=-1;++r<h;)i=n[r],o=e[r],i?(i.__data__=o,g[r]=i):p[r]=z(o);for(;f>r;++r)p[r]=z(e[r]);for(;a>r;++r)v[r]=n[r]}p.update=g,p.parentNode=g.parentNode=v.parentNode=n.parentNode,c.push(p),s.push(g),l.push(v)}var r,i,o=-1,a=this.length;if(!arguments.length){for(n=new Array(a=(r=this[0]).length);++o<a;)(i=r[o])&&(n[o]=i.__data__);return n}var c=D([]),s=x([]),l=x([]);if("function"==typeof n)for(;++o<a;)e(r=this[o],n.call(r,r.parentNode.__data__,o));else for(;++o<a;)e(r=this[o],n);return s.enter=function(){return c},s.exit=function(){return l},s},da.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},da.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=q(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]),t.parentNode=(e=this[i]).parentNode;for(var a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return x(u)},da.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],u=r.length-1,i=r[u];--u>=0;)(e=r[u])&&(i&&i!==e.nextSibling&&i.parentNode.insertBefore(e,i),i=e);return this},da.sort=function(n){n=T.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},da.each=function(n){return R(this,function(t,e,r){n.call(t,t.__data__,e,r)})},da.call=function(n){var t=Bo(arguments);return n.apply(t[0]=this,t),this},da.empty=function(){return!this.node()},da.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,u=e.length;u>r;r++){var i=e[r];if(i)return i}return null},da.size=function(){var n=0;return this.each(function(){++n}),n};var ya=[];Xo.selection.enter=D,Xo.selection.enter.prototype=ya,ya.append=da.append,ya.empty=da.empty,ya.node=da.node,ya.call=da.call,ya.size=da.size,ya.select=function(n){for(var t,e,r,u,i,o=[],a=-1,c=this.length;++a<c;){r=(u=this[a]).update,o.push(t=[]),t.parentNode=u.parentNode;for(var s=-1,l=u.length;++s<l;)(i=u[s])?(t.push(r[s]=e=n.call(u.parentNode,i.__data__,s,a)),e.__data__=i.__data__):t.push(null)}return x(o)},ya.insert=function(n,t){return arguments.length<2&&(t=P(this)),da.insert.call(this,n,t)},da.transition=function(){for(var n,t,e=ks||++Ls,r=[],u=Es||{time:Date.now(),ease:yu,delay:0,duration:250},i=-1,o=this.length;++i<o;){r.push(n=[]);for(var a=this[i],c=-1,s=a.length;++c<s;)(t=a[c])&&jo(t,c,e,u),n.push(t)}return Do(r,e)},da.interrupt=function(){return this.each(U)},Xo.select=function(n){var t=["string"==typeof n?ha(n,Wo):n];return t.parentNode=Jo,x([t])},Xo.selectAll=function(n){var t=Bo("string"==typeof n?ga(n,Wo):n);return t.parentNode=Jo,x([t])};var xa=Xo.select(Jo);da.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(j(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(j(n,t,e))};var Ma=Xo.map({mouseenter:"mouseover",mouseleave:"mouseout"});Ma.forEach(function(n){"on"+n in Wo&&Ma.remove(n)});var _a="onselectstart"in Wo?null:h(Jo.style,"userSelect"),ba=0;Xo.mouse=function(n){return Y(n,m())};var wa=/WebKit/.test(Go.navigator.userAgent)?-1:0;Xo.touches=function(n,t){return arguments.length<2&&(t=m().touches),t?Bo(t).map(function(t){var e=Y(n,t);return e.identifier=t.identifier,e}):[]},Xo.behavior.drag=function(){function n(){this.on("mousedown.drag",o).on("touchstart.drag",a)}function t(){return Xo.event.changedTouches[0].identifier}function e(n,t){return Xo.touches(n).filter(function(n){return n.identifier===t})[0]}function r(n,t,e,r){return function(){function o(){var n=t(l,g),e=n[0]-v[0],r=n[1]-v[1];d|=e|r,v=n,f({type:"drag",x:n[0]+c[0],y:n[1]+c[1],dx:e,dy:r})}function a(){m.on(e+"."+p,null).on(r+"."+p,null),y(d&&Xo.event.target===h),f({type:"dragend"})}var c,s=this,l=s.parentNode,f=u.of(s,arguments),h=Xo.event.target,g=n(),p=null==g?"drag":"drag-"+g,v=t(l,g),d=0,m=Xo.select(Go).on(e+"."+p,o).on(r+"."+p,a),y=O();i?(c=i.apply(s,arguments),c=[c.x-v[0],c.y-v[1]]):c=[0,0],f({type:"dragstart"})}}var u=y(n,"drag","dragstart","dragend"),i=null,o=r(g,Xo.mouse,"mousemove","mouseup"),a=r(t,e,"touchmove","touchend");return n.origin=function(t){return arguments.length?(i=t,n):i},Xo.rebind(n,u,"on")};var Sa=Math.PI,ka=2*Sa,Ea=Sa/2,Aa=1e-6,Ca=Aa*Aa,Na=Sa/180,La=180/Sa,za=Math.SQRT2,qa=2,Ta=4;Xo.interpolateZoom=function(n,t){function e(n){var t=n*y;if(m){var e=B(v),o=i/(qa*h)*(e*W(za*t+v)-$(v));return[r+o*s,u+o*l,i*e/B(za*t+v)]}return[r+n*s,u+n*l,i*Math.exp(za*t)]}var r=n[0],u=n[1],i=n[2],o=t[0],a=t[1],c=t[2],s=o-r,l=a-u,f=s*s+l*l,h=Math.sqrt(f),g=(c*c-i*i+Ta*f)/(2*i*qa*h),p=(c*c-i*i-Ta*f)/(2*c*qa*h),v=Math.log(Math.sqrt(g*g+1)-g),d=Math.log(Math.sqrt(p*p+1)-p),m=d-v,y=(m||Math.log(c/i))/za;return e.duration=1e3*y,e},Xo.behavior.zoom=function(){function n(n){n.on(A,s).on(Pa+".zoom",f).on(C,h).on("dblclick.zoom",g).on(L,l)}function t(n){return[(n[0]-S.x)/S.k,(n[1]-S.y)/S.k]}function e(n){return[n[0]*S.k+S.x,n[1]*S.k+S.y]}function r(n){S.k=Math.max(E[0],Math.min(E[1],n))}function u(n,t){t=e(t),S.x+=n[0]-t[0],S.y+=n[1]-t[1]}function i(){_&&_.domain(M.range().map(function(n){return(n-S.x)/S.k}).map(M.invert)),w&&w.domain(b.range().map(function(n){return(n-S.y)/S.k}).map(b.invert))}function o(n){n({type:"zoomstart"})}function a(n){i(),n({type:"zoom",scale:S.k,translate:[S.x,S.y]})}function c(n){n({type:"zoomend"})}function s(){function n(){l=1,u(Xo.mouse(r),g),a(i)}function e(){f.on(C,Go===r?h:null).on(N,null),p(l&&Xo.event.target===s),c(i)}var r=this,i=z.of(r,arguments),s=Xo.event.target,l=0,f=Xo.select(Go).on(C,n).on(N,e),g=t(Xo.mouse(r)),p=O();U.call(r),o(i)}function l(){function n(){var n=Xo.touches(g);return h=S.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function e(){for(var t=Xo.event.changedTouches,e=0,i=t.length;i>e;++e)v[t[e].identifier]=null;var o=n(),c=Date.now();if(1===o.length){if(500>c-x){var s=o[0],l=v[s.identifier];r(2*S.k),u(s,l),d(),a(p)}x=c}else if(o.length>1){var s=o[0],f=o[1],h=s[0]-f[0],g=s[1]-f[1];m=h*h+g*g}}function i(){for(var n,t,e,i,o=Xo.touches(g),c=0,s=o.length;s>c;++c,i=null)if(e=o[c],i=v[e.identifier]){if(t)break;n=e,t=i}if(i){var l=(l=e[0]-n[0])*l+(l=e[1]-n[1])*l,f=m&&Math.sqrt(l/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+i[0])/2,(t[1]+i[1])/2],r(f*h)}x=null,u(n,t),a(p)}function f(){if(Xo.event.touches.length){for(var t=Xo.event.changedTouches,e=0,r=t.length;r>e;++e)delete v[t[e].identifier];for(var u in v)return void n()}b.on(M,null).on(_,null),w.on(A,s).on(L,l),k(),c(p)}var h,g=this,p=z.of(g,arguments),v={},m=0,y=Xo.event.changedTouches[0].identifier,M="touchmove.zoom-"+y,_="touchend.zoom-"+y,b=Xo.select(Go).on(M,i).on(_,f),w=Xo.select(g).on(A,null).on(L,e),k=O();U.call(g),e(),o(p)}function f(){var n=z.of(this,arguments);m?clearTimeout(m):(U.call(this),o(n)),m=setTimeout(function(){m=null,c(n)},50),d();var e=v||Xo.mouse(this);p||(p=t(e)),r(Math.pow(2,.002*Ra())*S.k),u(e,p),a(n)}function h(){p=null}function g(){var n=z.of(this,arguments),e=Xo.mouse(this),i=t(e),s=Math.log(S.k)/Math.LN2;o(n),r(Math.pow(2,Xo.event.shiftKey?Math.ceil(s)-1:Math.floor(s)+1)),u(e,i),a(n),c(n)}var p,v,m,x,M,_,b,w,S={x:0,y:0,k:1},k=[960,500],E=Da,A="mousedown.zoom",C="mousemove.zoom",N="mouseup.zoom",L="touchstart.zoom",z=y(n,"zoomstart","zoom","zoomend");return n.event=function(n){n.each(function(){var n=z.of(this,arguments),t=S;ks?Xo.select(this).transition().each("start.zoom",function(){S=this.__chart__||{x:0,y:0,k:1},o(n)}).tween("zoom:zoom",function(){var e=k[0],r=k[1],u=e/2,i=r/2,o=Xo.interpolateZoom([(u-S.x)/S.k,(i-S.y)/S.k,e/S.k],[(u-t.x)/t.k,(i-t.y)/t.k,e/t.k]);return function(t){var r=o(t),c=e/r[2];this.__chart__=S={x:u-r[0]*c,y:i-r[1]*c,k:c},a(n)}}).each("end.zoom",function(){c(n)}):(this.__chart__=S,o(n),a(n),c(n))})},n.translate=function(t){return arguments.length?(S={x:+t[0],y:+t[1],k:S.k},i(),n):[S.x,S.y]},n.scale=function(t){return arguments.length?(S={x:S.x,y:S.y,k:+t},i(),n):S.k},n.scaleExtent=function(t){return arguments.length?(E=null==t?Da:[+t[0],+t[1]],n):E},n.center=function(t){return arguments.length?(v=t&&[+t[0],+t[1]],n):v},n.size=function(t){return arguments.length?(k=t&&[+t[0],+t[1]],n):k},n.x=function(t){return arguments.length?(_=t,M=t.copy(),S={x:0,y:0,k:1},n):_},n.y=function(t){return arguments.length?(w=t,b=t.copy(),S={x:0,y:0,k:1},n):w},Xo.rebind(n,z,"on")};var Ra,Da=[0,1/0],Pa="onwheel"in Wo?(Ra=function(){return-Xo.event.deltaY*(Xo.event.deltaMode?120:1)},"wheel"):"onmousewheel"in Wo?(Ra=function(){return Xo.event.wheelDelta},"mousewheel"):(Ra=function(){return-Xo.event.detail},"MozMousePixelScroll");G.prototype.toString=function(){return this.rgb()+""},Xo.hsl=function(n,t,e){return 1===arguments.length?n instanceof Q?K(n.h,n.s,n.l):dt(""+n,mt,K):K(+n,+t,+e)};var Ua=Q.prototype=new G;Ua.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),K(this.h,this.s,this.l/n)},Ua.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),K(this.h,this.s,n*this.l)},Ua.rgb=function(){return nt(this.h,this.s,this.l)},Xo.hcl=function(n,t,e){return 1===arguments.length?n instanceof et?tt(n.h,n.c,n.l):n instanceof it?at(n.l,n.a,n.b):at((n=yt((n=Xo.rgb(n)).r,n.g,n.b)).l,n.a,n.b):tt(+n,+t,+e)};var ja=et.prototype=new G;ja.brighter=function(n){return tt(this.h,this.c,Math.min(100,this.l+Ha*(arguments.length?n:1)))},ja.darker=function(n){return tt(this.h,this.c,Math.max(0,this.l-Ha*(arguments.length?n:1)))},ja.rgb=function(){return rt(this.h,this.c,this.l).rgb()},Xo.lab=function(n,t,e){return 1===arguments.length?n instanceof it?ut(n.l,n.a,n.b):n instanceof et?rt(n.l,n.c,n.h):yt((n=Xo.rgb(n)).r,n.g,n.b):ut(+n,+t,+e)};var Ha=18,Fa=.95047,Oa=1,Ya=1.08883,Ia=it.prototype=new G;Ia.brighter=function(n){return ut(Math.min(100,this.l+Ha*(arguments.length?n:1)),this.a,this.b)},Ia.darker=function(n){return ut(Math.max(0,this.l-Ha*(arguments.length?n:1)),this.a,this.b)},Ia.rgb=function(){return ot(this.l,this.a,this.b)},Xo.rgb=function(n,t,e){return 1===arguments.length?n instanceof pt?gt(n.r,n.g,n.b):dt(""+n,gt,nt):gt(~~n,~~t,~~e)};var Za=pt.prototype=new G;Za.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,u=30;return t||e||r?(t&&u>t&&(t=u),e&&u>e&&(e=u),r&&u>r&&(r=u),gt(Math.min(255,~~(t/n)),Math.min(255,~~(e/n)),Math.min(255,~~(r/n)))):gt(u,u,u)},Za.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),gt(~~(n*this.r),~~(n*this.g),~~(n*this.b))},Za.hsl=function(){return mt(this.r,this.g,this.b)},Za.toString=function(){return"#"+vt(this.r)+vt(this.g)+vt(this.b)};var Va=Xo.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});Va.forEach(function(n,t){Va.set(n,ft(t))}),Xo.functor=_t,Xo.xhr=wt(bt),Xo.dsv=function(n,t){function e(n,e,i){arguments.length<3&&(i=e,e=null);var o=St(n,t,null==e?r:u(e),i);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:u(n)):e},o}function r(n){return e.parse(n.responseText)}function u(n){return function(t){return e.parse(t.responseText,n)}}function i(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),c=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var u=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(u(n),e)}:u})},e.parseRows=function(n,t){function e(){if(l>=s)return o;if(u)return u=!1,i;var t=l;if(34===n.charCodeAt(t)){for(var e=t;e++<s;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}l=e+2;var r=n.charCodeAt(e+1);return 13===r?(u=!0,10===n.charCodeAt(e+2)&&++l):10===r&&(u=!0),n.substring(t+1,e).replace(/""/g,'"')}for(;s>l;){var r=n.charCodeAt(l++),a=1;if(10===r)u=!0;else if(13===r)u=!0,10===n.charCodeAt(l)&&(++l,++a);else if(r!==c)continue;return n.substring(t,l-a)}return n.substring(t)}for(var r,u,i={},o={},a=[],s=n.length,l=0,f=0;(r=e())!==o;){for(var h=[];r!==i&&r!==o;)h.push(r),r=e();(!t||(h=t(h,f++)))&&a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new l,u=[];return t.forEach(function(n){for(var t in n)r.has(t)||u.push(r.add(t))}),[u.map(o).join(n)].concat(t.map(function(t){return u.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(i).join("\n")},e},Xo.csv=Xo.dsv(",","text/csv"),Xo.tsv=Xo.dsv("	","text/tab-separated-values");var Xa,$a,Ba,Wa,Ja,Ga=Go[h(Go,"requestAnimationFrame")]||function(n){setTimeout(n,17)};Xo.timer=function(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var u=e+t,i={c:n,t:u,f:!1,n:null};$a?$a.n=i:Xa=i,$a=i,Ba||(Wa=clearTimeout(Wa),Ba=1,Ga(Et))},Xo.timer.flush=function(){At(),Ct()},Xo.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var Ka=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Lt);Xo.formatPrefix=function(n,t){var e=0;return n&&(0>n&&(n*=-1),t&&(n=Xo.round(n,Nt(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((0>=e?e+1:e-1)/3)))),Ka[8+e/3]};var Qa=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,nc=Xo.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=Xo.round(n,Nt(n,t))).toFixed(Math.max(0,Math.min(20,Nt(n*(1+1e-15),t))))}}),tc=Xo.time={},ec=Date;Tt.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){rc.setUTCDate.apply(this._,arguments)},setDay:function(){rc.setUTCDay.apply(this._,arguments)},setFullYear:function(){rc.setUTCFullYear.apply(this._,arguments)},setHours:function(){rc.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){rc.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){rc.setUTCMinutes.apply(this._,arguments)},setMonth:function(){rc.setUTCMonth.apply(this._,arguments)},setSeconds:function(){rc.setUTCSeconds.apply(this._,arguments)},setTime:function(){rc.setTime.apply(this._,arguments)}};var rc=Date.prototype;tc.year=Rt(function(n){return n=tc.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),tc.years=tc.year.range,tc.years.utc=tc.year.utc.range,tc.day=Rt(function(n){var t=new ec(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),tc.days=tc.day.range,tc.days.utc=tc.day.utc.range,tc.dayOfYear=function(n){var t=tc.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=tc[n]=Rt(function(n){return(n=tc.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=tc.year(n).getDay();return Math.floor((tc.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});tc[n+"s"]=e.range,tc[n+"s"].utc=e.utc.range,tc[n+"OfYear"]=function(n){var e=tc.year(n).getDay();return Math.floor((tc.dayOfYear(n)+(e+t)%7)/7)}}),tc.week=tc.sunday,tc.weeks=tc.sunday.range,tc.weeks.utc=tc.sunday.utc.range,tc.weekOfYear=tc.sundayOfYear;var uc={"-":"",_:" ",0:"0"},ic=/^\s*\d+/,oc=/^%/;Xo.locale=function(n){return{numberFormat:zt(n),timeFormat:Pt(n)}};var ac=Xo.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});Xo.format=ac.numberFormat,Xo.geo={},re.prototype={s:0,t:0,add:function(n){ue(n,this.t,cc),ue(cc.s,this.s,this),this.s?this.t+=cc.t:this.s=cc.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var cc=new re;Xo.geo.stream=function(n,t){n&&sc.hasOwnProperty(n.type)?sc[n.type](n,t):ie(n,t)};var sc={Feature:function(n,t){ie(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,u=e.length;++r<u;)ie(e[r].geometry,t)}},lc={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){oe(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)oe(e[r],t,0)},Polygon:function(n,t){ae(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,u=e.length;++r<u;)ae(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,u=e.length;++r<u;)ie(e[r],t)}};Xo.geo.area=function(n){return fc=0,Xo.geo.stream(n,gc),fc};var fc,hc=new re,gc={sphere:function(){fc+=4*Sa},point:g,lineStart:g,lineEnd:g,polygonStart:function(){hc.reset(),gc.lineStart=ce},polygonEnd:function(){var n=2*hc;fc+=0>n?4*Sa+n:n,gc.lineStart=gc.lineEnd=gc.point=g}};Xo.geo.bounds=function(){function n(n,t){x.push(M=[l=n,h=n]),f>t&&(f=t),t>g&&(g=t)}function t(t,e){var r=se([t*Na,e*Na]);if(m){var u=fe(m,r),i=[u[1],-u[0],0],o=fe(i,u);pe(o),o=ve(o);var c=t-p,s=c>0?1:-1,v=o[0]*La*s,d=oa(c)>180;if(d^(v>s*p&&s*t>v)){var y=o[1]*La;y>g&&(g=y)}else if(v=(v+360)%360-180,d^(v>s*p&&s*t>v)){var y=-o[1]*La;f>y&&(f=y)}else f>e&&(f=e),e>g&&(g=e);d?p>t?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t):h>=l?(l>t&&(l=t),t>h&&(h=t)):t>p?a(l,t)>a(l,h)&&(h=t):a(t,h)>a(l,h)&&(l=t)}else n(t,e);m=r,p=t}function e(){_.point=t}function r(){M[0]=l,M[1]=h,_.point=n,m=null}function u(n,e){if(m){var r=n-p;y+=oa(r)>180?r+(r>0?360:-360):r}else v=n,d=e;gc.point(n,e),t(n,e)}function i(){gc.lineStart()}function o(){u(v,d),gc.lineEnd(),oa(y)>Aa&&(l=-(h=180)),M[0]=l,M[1]=h,m=null}function a(n,t){return(t-=n)<0?t+360:t}function c(n,t){return n[0]-t[0]}function s(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var l,f,h,g,p,v,d,m,y,x,M,_={point:n,lineStart:e,lineEnd:r,polygonStart:function(){_.point=u,_.lineStart=i,_.lineEnd=o,y=0,gc.polygonStart()},polygonEnd:function(){gc.polygonEnd(),_.point=n,_.lineStart=e,_.lineEnd=r,0>hc?(l=-(h=180),f=-(g=90)):y>Aa?g=90:-Aa>y&&(f=-90),M[0]=l,M[1]=h
}};return function(n){g=h=-(l=f=1/0),x=[],Xo.geo.stream(n,_);var t=x.length;if(t){x.sort(c);for(var e,r=1,u=x[0],i=[u];t>r;++r)e=x[r],s(e[0],u)||s(e[1],u)?(a(u[0],e[1])>a(u[0],u[1])&&(u[1]=e[1]),a(e[0],u[1])>a(u[0],u[1])&&(u[0]=e[0])):i.push(u=e);for(var o,e,p=-1/0,t=i.length-1,r=0,u=i[t];t>=r;u=e,++r)e=i[r],(o=a(u[1],e[0]))>p&&(p=o,l=e[0],h=u[1])}return x=M=null,1/0===l||1/0===f?[[0/0,0/0],[0/0,0/0]]:[[l,f],[h,g]]}}(),Xo.geo.centroid=function(n){pc=vc=dc=mc=yc=xc=Mc=_c=bc=wc=Sc=0,Xo.geo.stream(n,kc);var t=bc,e=wc,r=Sc,u=t*t+e*e+r*r;return Ca>u&&(t=xc,e=Mc,r=_c,Aa>vc&&(t=dc,e=mc,r=yc),u=t*t+e*e+r*r,Ca>u)?[0/0,0/0]:[Math.atan2(e,t)*La,X(r/Math.sqrt(u))*La]};var pc,vc,dc,mc,yc,xc,Mc,_c,bc,wc,Sc,kc={sphere:g,point:me,lineStart:xe,lineEnd:Me,polygonStart:function(){kc.lineStart=_e},polygonEnd:function(){kc.lineStart=xe}},Ec=Ee(be,ze,Te,[-Sa,-Sa/2]),Ac=1e9;Xo.geo.clipExtent=function(){var n,t,e,r,u,i,o={stream:function(n){return u&&(u.valid=!1),u=i(n),u.valid=!0,u},extent:function(a){return arguments.length?(i=Pe(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),u&&(u.valid=!1,u=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(Xo.geo.conicEqualArea=function(){return je(He)}).raw=He,Xo.geo.albers=function(){return Xo.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},Xo.geo.albersUsa=function(){function n(n){var i=n[0],o=n[1];return t=null,e(i,o),t||(r(i,o),t)||u(i,o),t}var t,e,r,u,i=Xo.geo.albers(),o=Xo.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=Xo.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),c={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=i.scale(),e=i.translate(),r=(n[0]-e[0])/t,u=(n[1]-e[1])/t;return(u>=.12&&.234>u&&r>=-.425&&-.214>r?o:u>=.166&&.234>u&&r>=-.214&&-.115>r?a:i).invert(n)},n.stream=function(n){var t=i.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,u){t.point(n,u),e.point(n,u),r.point(n,u)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(i.precision(t),o.precision(t),a.precision(t),n):i.precision()},n.scale=function(t){return arguments.length?(i.scale(t),o.scale(.35*t),a.scale(t),n.translate(i.translate())):i.scale()},n.translate=function(t){if(!arguments.length)return i.translate();var s=i.scale(),l=+t[0],f=+t[1];return e=i.translate(t).clipExtent([[l-.455*s,f-.238*s],[l+.455*s,f+.238*s]]).stream(c).point,r=o.translate([l-.307*s,f+.201*s]).clipExtent([[l-.425*s+Aa,f+.12*s+Aa],[l-.214*s-Aa,f+.234*s-Aa]]).stream(c).point,u=a.translate([l-.205*s,f+.212*s]).clipExtent([[l-.214*s+Aa,f+.166*s+Aa],[l-.115*s-Aa,f+.234*s-Aa]]).stream(c).point,n},n.scale(1070)};var Cc,Nc,Lc,zc,qc,Tc,Rc={point:g,lineStart:g,lineEnd:g,polygonStart:function(){Nc=0,Rc.lineStart=Fe},polygonEnd:function(){Rc.lineStart=Rc.lineEnd=Rc.point=g,Cc+=oa(Nc/2)}},Dc={point:Oe,lineStart:g,lineEnd:g,polygonStart:g,polygonEnd:g},Pc={point:Ze,lineStart:Ve,lineEnd:Xe,polygonStart:function(){Pc.lineStart=$e},polygonEnd:function(){Pc.point=Ze,Pc.lineStart=Ve,Pc.lineEnd=Xe}};Xo.geo.path=function(){function n(n){return n&&("function"==typeof a&&i.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=u(i)),Xo.geo.stream(n,o)),i.result()}function t(){return o=null,n}var e,r,u,i,o,a=4.5;return n.area=function(n){return Cc=0,Xo.geo.stream(n,u(Rc)),Cc},n.centroid=function(n){return dc=mc=yc=xc=Mc=_c=bc=wc=Sc=0,Xo.geo.stream(n,u(Pc)),Sc?[bc/Sc,wc/Sc]:_c?[xc/_c,Mc/_c]:yc?[dc/yc,mc/yc]:[0/0,0/0]},n.bounds=function(n){return qc=Tc=-(Lc=zc=1/0),Xo.geo.stream(n,u(Dc)),[[Lc,zc],[qc,Tc]]},n.projection=function(n){return arguments.length?(u=(e=n)?n.stream||Je(n):bt,t()):e},n.context=function(n){return arguments.length?(i=null==(r=n)?new Ye:new Be(n),"function"!=typeof a&&i.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(i.pointRadius(+t),+t),n):a},n.projection(Xo.geo.albersUsa()).context(null)},Xo.geo.transform=function(n){return{stream:function(t){var e=new Ge(t);for(var r in n)e[r]=n[r];return e}}},Ge.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},Xo.geo.projection=Qe,Xo.geo.projectionMutator=nr,(Xo.geo.equirectangular=function(){return Qe(er)}).raw=er.invert=er,Xo.geo.rotation=function(n){function t(t){return t=n(t[0]*Na,t[1]*Na),t[0]*=La,t[1]*=La,t}return n=ur(n[0]%360*Na,n[1]*Na,n.length>2?n[2]*Na:0),t.invert=function(t){return t=n.invert(t[0]*Na,t[1]*Na),t[0]*=La,t[1]*=La,t},t},rr.invert=er,Xo.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=ur(-n[0]*Na,-n[1]*Na,0).invert,u=[];return e(null,null,1,{point:function(n,e){u.push(n=t(n,e)),n[0]*=La,n[1]*=La}}),{type:"Polygon",coordinates:[u]}}var t,e,r=[0,0],u=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=cr((t=+r)*Na,u*Na),n):t},n.precision=function(r){return arguments.length?(e=cr(t*Na,(u=+r)*Na),n):u},n.angle(90)},Xo.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Na,u=n[1]*Na,i=t[1]*Na,o=Math.sin(r),a=Math.cos(r),c=Math.sin(u),s=Math.cos(u),l=Math.sin(i),f=Math.cos(i);return Math.atan2(Math.sqrt((e=f*o)*e+(e=s*l-c*f*a)*e),c*l+s*f*a)},Xo.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return Xo.range(Math.ceil(i/d)*d,u,d).map(h).concat(Xo.range(Math.ceil(s/m)*m,c,m).map(g)).concat(Xo.range(Math.ceil(r/p)*p,e,p).filter(function(n){return oa(n%d)>Aa}).map(l)).concat(Xo.range(Math.ceil(a/v)*v,o,v).filter(function(n){return oa(n%m)>Aa}).map(f))}var e,r,u,i,o,a,c,s,l,f,h,g,p=10,v=p,d=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(i).concat(g(c).slice(1),h(u).reverse().slice(1),g(s).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(i=+t[0][0],u=+t[1][0],s=+t[0][1],c=+t[1][1],i>u&&(t=i,i=u,u=t),s>c&&(t=s,s=c,c=t),n.precision(y)):[[i,s],[u,c]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(y)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],m=+t[1],n):[d,m]},n.minorStep=function(t){return arguments.length?(p=+t[0],v=+t[1],n):[p,v]},n.precision=function(t){return arguments.length?(y=+t,l=lr(a,o,90),f=fr(r,e,y),h=lr(s,c,90),g=fr(i,u,y),n):y},n.majorExtent([[-180,-90+Aa],[180,90-Aa]]).minorExtent([[-180,-80-Aa],[180,80+Aa]])},Xo.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||u.apply(this,arguments)]}}var t,e,r=hr,u=gr;return n.distance=function(){return Xo.geo.distance(t||r.apply(this,arguments),e||u.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(u=t,e="function"==typeof t?null:t,n):u},n.precision=function(){return arguments.length?n:0},n},Xo.geo.interpolate=function(n,t){return pr(n[0]*Na,n[1]*Na,t[0]*Na,t[1]*Na)},Xo.geo.length=function(n){return Uc=0,Xo.geo.stream(n,jc),Uc};var Uc,jc={sphere:g,point:g,lineStart:vr,lineEnd:g,polygonStart:g,polygonEnd:g},Hc=dr(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(Xo.geo.azimuthalEqualArea=function(){return Qe(Hc)}).raw=Hc;var Fc=dr(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},bt);(Xo.geo.azimuthalEquidistant=function(){return Qe(Fc)}).raw=Fc,(Xo.geo.conicConformal=function(){return je(mr)}).raw=mr,(Xo.geo.conicEquidistant=function(){return je(yr)}).raw=yr;var Oc=dr(function(n){return 1/n},Math.atan);(Xo.geo.gnomonic=function(){return Qe(Oc)}).raw=Oc,xr.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ea]},(Xo.geo.mercator=function(){return Mr(xr)}).raw=xr;var Yc=dr(function(){return 1},Math.asin);(Xo.geo.orthographic=function(){return Qe(Yc)}).raw=Yc;var Ic=dr(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(Xo.geo.stereographic=function(){return Qe(Ic)}).raw=Ic,_r.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ea]},(Xo.geo.transverseMercator=function(){var n=Mr(_r),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[-n[1],n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},n.rotate([0,0])}).raw=_r,Xo.geom={},Xo.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,u=_t(e),i=_t(r),o=n.length,a=[],c=[];for(t=0;o>t;t++)a.push([+u.call(this,n[t],t),+i.call(this,n[t],t),t]);for(a.sort(kr),t=0;o>t;t++)c.push([a[t][0],-a[t][1]]);var s=Sr(a),l=Sr(c),f=l[0]===s[0],h=l[l.length-1]===s[s.length-1],g=[];for(t=s.length-1;t>=0;--t)g.push(n[a[s[t]][2]]);for(t=+f;t<l.length-h;++t)g.push(n[a[l[t]][2]]);return g}var e=br,r=wr;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},Xo.geom.polygon=function(n){return fa(n,Zc),n};var Zc=Xo.geom.polygon.prototype=[];Zc.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],u=0;++t<e;)n=r,r=this[t],u+=n[1]*r[0]-n[0]*r[1];return.5*u},Zc.centroid=function(n){var t,e,r=-1,u=this.length,i=0,o=0,a=this[u-1];for(arguments.length||(n=-1/(6*this.area()));++r<u;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],i+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[i*n,o*n]},Zc.clip=function(n){for(var t,e,r,u,i,o,a=Cr(n),c=-1,s=this.length-Cr(this),l=this[s-1];++c<s;){for(t=n.slice(),n.length=0,u=this[c],i=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Er(o,l,u)?(Er(i,l,u)||n.push(Ar(i,o,l,u)),n.push(o)):Er(i,l,u)&&n.push(Ar(i,o,l,u)),i=o;a&&n.push(n[0]),l=u}return n};var Vc,Xc,$c,Bc,Wc,Jc=[],Gc=[];Pr.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(jr),t.length},Br.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},Wr.prototype={insert:function(n,t){var e,r,u;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=Qr(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(u=r.R,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.R&&(Gr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,Kr(this,r))):(u=r.L,u&&u.C?(e.C=u.C=!1,r.C=!0,n=r):(n===e.L&&(Kr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,Gr(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,u=n.U,i=n.L,o=n.R;if(e=i?o?Qr(o):i:o,u?u.L===n?u.L=e:u.R=e:this._=e,i&&o?(r=e.C,e.C=n.C,e.L=i,i.U=e,e!==o?(u=e.U,e.U=n.U,n=e.R,u.L=n,e.R=o,o.U=e):(e.U=u,u=e,n=e.R)):(r=n.C,n=e),n&&(n.U=u),!r){if(n&&n.C)return n.C=!1,void 0;do{if(n===this._)break;if(n===u.L){if(t=u.R,t.C&&(t.C=!1,u.C=!0,Gr(this,u),t=u.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,Kr(this,t),t=u.R),t.C=u.C,u.C=t.R.C=!1,Gr(this,u),n=this._;break}}else if(t=u.L,t.C&&(t.C=!1,u.C=!0,Kr(this,u),t=u.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,Gr(this,t),t=u.L),t.C=u.C,u.C=t.L.C=!1,Kr(this,u),n=this._;break}t.C=!0,n=u,u=u.U}while(!n.C);n&&(n.C=!1)}}},Xo.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],u=a[0][1],i=a[1][0],o=a[1][1];return nu(e(n),a).cells.forEach(function(e,a){var c=e.edges,s=e.site,l=t[a]=c.length?c.map(function(n){var t=n.start();return[t.x,t.y]}):s.x>=r&&s.x<=i&&s.y>=u&&s.y<=o?[[r,o],[i,o],[i,u],[r,u]]:[];l.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(i(n,t)/Aa)*Aa,y:Math.round(o(n,t)/Aa)*Aa,i:t}})}var r=br,u=wr,i=r,o=u,a=Kc;return n?t(n):(t.links=function(n){return nu(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return nu(e(n)).cells.forEach(function(e,r){for(var u,i,o=e.site,a=e.edges.sort(jr),c=-1,s=a.length,l=a[s-1].edge,f=l.l===o?l.r:l.l;++c<s;)u=l,i=f,l=a[c].edge,f=l.l===o?l.r:l.l,r<i.i&&r<f.i&&eu(o,i,f)<0&&t.push([n[r],n[i.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(i=_t(r=n),t):r},t.y=function(n){return arguments.length?(o=_t(u=n),t):u},t.clipExtent=function(n){return arguments.length?(a=null==n?Kc:n,t):a===Kc?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===Kc?null:a&&a[1]},t)};var Kc=[[-1e6,-1e6],[1e6,1e6]];Xo.geom.delaunay=function(n){return Xo.geom.voronoi().triangles(n)},Xo.geom.quadtree=function(n,t,e,r,u){function i(n){function i(n,t,e,r,u,i,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var c=n.x,l=n.y;if(null!=c)if(oa(c-e)+oa(l-r)<.01)s(n,t,e,r,u,i,o,a);else{var f=n.point;n.x=n.y=n.point=null,s(n,f,c,l,u,i,o,a),s(n,t,e,r,u,i,o,a)}else n.x=e,n.y=r,n.point=t}else s(n,t,e,r,u,i,o,a)}function s(n,t,e,r,u,o,a,c){var s=.5*(u+a),l=.5*(o+c),f=e>=s,h=r>=l,g=(h<<1)+f;n.leaf=!1,n=n.nodes[g]||(n.nodes[g]=iu()),f?u=s:a=s,h?o=l:c=l,i(n,t,e,r,u,o,a,c)}var l,f,h,g,p,v,d,m,y,x=_t(a),M=_t(c);if(null!=t)v=t,d=e,m=r,y=u;else if(m=y=-(v=d=1/0),f=[],h=[],p=n.length,o)for(g=0;p>g;++g)l=n[g],l.x<v&&(v=l.x),l.y<d&&(d=l.y),l.x>m&&(m=l.x),l.y>y&&(y=l.y),f.push(l.x),h.push(l.y);else for(g=0;p>g;++g){var _=+x(l=n[g],g),b=+M(l,g);v>_&&(v=_),d>b&&(d=b),_>m&&(m=_),b>y&&(y=b),f.push(_),h.push(b)}var w=m-v,S=y-d;w>S?y=d+w:m=v+S;var k=iu();if(k.add=function(n){i(k,n,+x(n,++g),+M(n,g),v,d,m,y)},k.visit=function(n){ou(n,k,v,d,m,y)},g=-1,null==t){for(;++g<p;)i(k,n[g],f[g],h[g],v,d,m,y);--g}else n.forEach(k.add);return f=h=n=l=null,k}var o,a=br,c=wr;return(o=arguments.length)?(a=ru,c=uu,3===o&&(u=e,r=t,e=t=0),i(n)):(i.x=function(n){return arguments.length?(a=n,i):a},i.y=function(n){return arguments.length?(c=n,i):c},i.extent=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],u=+n[1][1]),i):null==t?null:[[t,e],[r,u]]},i.size=function(n){return arguments.length?(null==n?t=e=r=u=null:(t=e=0,r=+n[0],u=+n[1]),i):null==t?null:[r-t,u-e]},i)},Xo.interpolateRgb=au,Xo.interpolateObject=cu,Xo.interpolateNumber=su,Xo.interpolateString=lu;var Qc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;Xo.interpolate=fu,Xo.interpolators=[function(n,t){var e=typeof t;return("string"===e?Va.has(t)||/^(#|rgb\(|hsl\()/.test(t)?au:lu:t instanceof G?au:"object"===e?Array.isArray(t)?hu:cu:su)(n,t)}],Xo.interpolateArray=hu;var ns=function(){return bt},ts=Xo.map({linear:ns,poly:xu,quad:function(){return du},cubic:function(){return mu},sin:function(){return Mu},exp:function(){return _u},circle:function(){return bu},elastic:wu,back:Su,bounce:function(){return ku}}),es=Xo.map({"in":bt,out:pu,"in-out":vu,"out-in":function(n){return vu(pu(n))}});Xo.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.substring(0,t):n,r=t>=0?n.substring(t+1):"in";return e=ts.get(e)||ns,r=es.get(r)||bt,gu(r(e.apply(null,$o.call(arguments,1))))},Xo.interpolateHcl=Eu,Xo.interpolateHsl=Au,Xo.interpolateLab=Cu,Xo.interpolateRound=Nu,Xo.transform=function(n){var t=Wo.createElementNS(Xo.ns.prefix.svg,"g");return(Xo.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Lu(e?e.matrix:rs)})(n)},Lu.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var rs={a:1,b:0,c:0,d:1,e:0,f:0};Xo.interpolateTransform=Ru,Xo.layout={},Xo.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Uu(n[e]));return t}},Xo.layout.chord=function(){function n(){var n,s,f,h,g,p={},v=[],d=Xo.range(i),m=[];for(e=[],r=[],n=0,h=-1;++h<i;){for(s=0,g=-1;++g<i;)s+=u[h][g];v.push(s),m.push(Xo.range(i)),n+=s}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&m.forEach(function(n,t){n.sort(function(n,e){return a(u[t][n],u[t][e])})}),n=(ka-l*i)/n,s=0,h=-1;++h<i;){for(f=s,g=-1;++g<i;){var y=d[h],x=m[y][g],M=u[y][x],_=s,b=s+=M*n;p[y+"-"+x]={index:y,subindex:x,startAngle:_,endAngle:b,value:M}}r[y]={index:y,startAngle:f,endAngle:s,value:(s-f)/n},s+=l}for(h=-1;++h<i;)for(g=h-1;++g<i;){var w=p[h+"-"+g],S=p[g+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}c&&t()}function t(){e.sort(function(n,t){return c((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,u,i,o,a,c,s={},l=0;return s.matrix=function(n){return arguments.length?(i=(u=n)&&u.length,e=r=null,s):u},s.padding=function(n){return arguments.length?(l=n,e=r=null,s):l},s.sortGroups=function(n){return arguments.length?(o=n,e=r=null,s):o},s.sortSubgroups=function(n){return arguments.length?(a=n,e=null,s):a},s.sortChords=function(n){return arguments.length?(c=n,e&&t(),s):c},s.chords=function(){return e||n(),e},s.groups=function(){return r||n(),r},s},Xo.layout.force=function(){function n(n){return function(t,e,r,u){if(t.point!==n){var i=t.cx-n.x,o=t.cy-n.y,a=u-e,c=i*i+o*o;if(c>a*a/d){if(p>c){var s=t.charge/c;n.px-=i*s,n.py-=o*s}return!0}if(t.point&&c&&p>c){var s=t.pointCharge/c;n.px-=i*s,n.py-=o*s}}return!t.charge}}function t(n){n.px=Xo.event.x,n.py=Xo.event.y,a.resume()}var e,r,u,i,o,a={},c=Xo.dispatch("start","tick","end"),s=[1,1],l=.9,f=us,h=is,g=-30,p=os,v=.1,d=.64,m=[],y=[];return a.tick=function(){if((r*=.99)<.005)return c.end({type:"end",alpha:r=0}),!0;var t,e,a,f,h,p,d,x,M,_=m.length,b=y.length;for(e=0;b>e;++e)a=y[e],f=a.source,h=a.target,x=h.x-f.x,M=h.y-f.y,(p=x*x+M*M)&&(p=r*i[e]*((p=Math.sqrt(p))-u[e])/p,x*=p,M*=p,h.x-=x*(d=f.weight/(h.weight+f.weight)),h.y-=M*d,f.x+=x*(d=1-d),f.y+=M*d);if((d=r*v)&&(x=s[0]/2,M=s[1]/2,e=-1,d))for(;++e<_;)a=m[e],a.x+=(x-a.x)*d,a.y+=(M-a.y)*d;if(g)for(Zu(t=Xo.geom.quadtree(m),r,o),e=-1;++e<_;)(a=m[e]).fixed||t.visit(n(a));for(e=-1;++e<_;)a=m[e],a.fixed?(a.x=a.px,a.y=a.py):(a.x-=(a.px-(a.px=a.x))*l,a.y-=(a.py-(a.py=a.y))*l);c.tick({type:"tick",alpha:r})},a.nodes=function(n){return arguments.length?(m=n,a):m},a.links=function(n){return arguments.length?(y=n,a):y},a.size=function(n){return arguments.length?(s=n,a):s},a.linkDistance=function(n){return arguments.length?(f="function"==typeof n?n:+n,a):f},a.distance=a.linkDistance,a.linkStrength=function(n){return arguments.length?(h="function"==typeof n?n:+n,a):h},a.friction=function(n){return arguments.length?(l=+n,a):l},a.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,a):g},a.chargeDistance=function(n){return arguments.length?(p=n*n,a):Math.sqrt(p)},a.gravity=function(n){return arguments.length?(v=+n,a):v},a.theta=function(n){return arguments.length?(d=n*n,a):Math.sqrt(d)},a.alpha=function(n){return arguments.length?(n=+n,r?r=n>0?n:0:n>0&&(c.start({type:"start",alpha:r=n}),Xo.timer(a.tick)),a):r},a.start=function(){function n(n,r){if(!e){for(e=new Array(c),a=0;c>a;++a)e[a]=[];for(a=0;s>a;++a){var u=y[a];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var i,o=e[t],a=-1,s=o.length;++a<s;)if(!isNaN(i=o[a][n]))return i;return Math.random()*r}var t,e,r,c=m.length,l=y.length,p=s[0],v=s[1];for(t=0;c>t;++t)(r=m[t]).index=t,r.weight=0;for(t=0;l>t;++t)r=y[t],"number"==typeof r.source&&(r.source=m[r.source]),"number"==typeof r.target&&(r.target=m[r.target]),++r.source.weight,++r.target.weight;for(t=0;c>t;++t)r=m[t],isNaN(r.x)&&(r.x=n("x",p)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof f)for(t=0;l>t;++t)u[t]=+f.call(this,y[t],t);else for(t=0;l>t;++t)u[t]=f;if(i=[],"function"==typeof h)for(t=0;l>t;++t)i[t]=+h.call(this,y[t],t);else for(t=0;l>t;++t)i[t]=h;if(o=[],"function"==typeof g)for(t=0;c>t;++t)o[t]=+g.call(this,m[t],t);else for(t=0;c>t;++t)o[t]=g;return a.resume()},a.resume=function(){return a.alpha(.1)},a.stop=function(){return a.alpha(0)},a.drag=function(){return e||(e=Xo.behavior.drag().origin(bt).on("dragstart.force",Fu).on("drag.force",t).on("dragend.force",Ou)),arguments.length?(this.on("mouseover.force",Yu).on("mouseout.force",Iu).call(e),void 0):e},Xo.rebind(a,c,"on")};var us=20,is=1,os=1/0;Xo.layout.hierarchy=function(){function n(t,o,a){var c=u.call(e,t,o);if(t.depth=o,a.push(t),c&&(s=c.length)){for(var s,l,f=-1,h=t.children=new Array(s),g=0,p=o+1;++f<s;)l=h[f]=n(c[f],p,a),l.parent=t,g+=l.value;r&&h.sort(r),i&&(t.value=g)}else delete t.children,i&&(t.value=+i.call(e,t,o)||0);return t}function t(n,r){var u=n.children,o=0;if(u&&(a=u.length))for(var a,c=-1,s=r+1;++c<a;)o+=t(u[c],s);else i&&(o=+i.call(e,n,r)||0);return i&&(n.value=o),o}function e(t){var e=[];return n(t,0,e),e}var r=Bu,u=Xu,i=$u;return e.sort=function(n){return arguments.length?(r=n,e):r},e.children=function(n){return arguments.length?(u=n,e):u},e.value=function(n){return arguments.length?(i=n,e):i},e.revalue=function(n){return t(n,0),n},e},Xo.layout.partition=function(){function n(t,e,r,u){var i=t.children;if(t.x=e,t.y=t.depth*u,t.dx=r,t.dy=u,i&&(o=i.length)){var o,a,c,s=-1;for(r=t.value?r/t.value:0;++s<o;)n(a=i[s],e,c=a.value*r,u),e+=c}}function t(n){var e=n.children,r=0;if(e&&(u=e.length))for(var u,i=-1;++i<u;)r=Math.max(r,t(e[i]));return 1+r}function e(e,i){var o=r.call(this,e,i);return n(o[0],0,u[0],u[1]/t(o[0])),o}var r=Xo.layout.hierarchy(),u=[1,1];return e.size=function(n){return arguments.length?(u=n,e):u},Vu(e,r)},Xo.layout.pie=function(){function n(i){var o=i.map(function(e,r){return+t.call(n,e,r)}),a=+("function"==typeof r?r.apply(this,arguments):r),c=(("function"==typeof u?u.apply(this,arguments):u)-a)/Xo.sum(o),s=Xo.range(i.length);null!=e&&s.sort(e===as?function(n,t){return o[t]-o[n]}:function(n,t){return e(i[n],i[t])});var l=[];return s.forEach(function(n){var t;l[n]={data:i[n],value:t=o[n],startAngle:a,endAngle:a+=t*c}}),l}var t=Number,e=as,r=0,u=ka;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(u=t,n):u},n};var as={};Xo.layout.stack=function(){function n(a,c){var s=a.map(function(e,r){return t.call(n,e,r)}),l=s.map(function(t){return t.map(function(t,e){return[i.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,l,c);s=Xo.permute(s,f),l=Xo.permute(l,f);var h,g,p,v=r.call(n,l,c),d=s.length,m=s[0].length;for(g=0;m>g;++g)for(u.call(n,s[0][g],p=v[g],l[0][g][1]),h=1;d>h;++h)u.call(n,s[h][g],p+=l[h-1][g][1],l[h][g][1]);return a}var t=bt,e=Qu,r=ni,u=Ku,i=Ju,o=Gu;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:cs.get(t)||Qu,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:ss.get(t)||ni,n):r},n.x=function(t){return arguments.length?(i=t,n):i},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(u=t,n):u},n};var cs=Xo.map({"inside-out":function(n){var t,e,r=n.length,u=n.map(ti),i=n.map(ei),o=Xo.range(r).sort(function(n,t){return u[n]-u[t]}),a=0,c=0,s=[],l=[];for(t=0;r>t;++t)e=o[t],c>a?(a+=i[e],s.push(e)):(c+=i[e],l.push(e));return l.reverse().concat(s)},reverse:function(n){return Xo.range(n.length).reverse()},"default":Qu}),ss=Xo.map({silhouette:function(n){var t,e,r,u=n.length,i=n[0].length,o=[],a=0,c=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;i>e;++e)c[e]=(a-o[e])/2;return c},wiggle:function(n){var t,e,r,u,i,o,a,c,s,l=n.length,f=n[0],h=f.length,g=[];for(g[0]=c=s=0,e=1;h>e;++e){for(t=0,u=0;l>t;++t)u+=n[t][e][1];for(t=0,i=0,a=f[e][0]-f[e-1][0];l>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;i+=o*n[t][e][1]}g[e]=c-=u?i/u*a:0,s>c&&(s=c)}for(e=0;h>e;++e)g[e]-=s;return g},expand:function(n){var t,e,r,u=n.length,i=n[0].length,o=1/u,a=[];for(e=0;i>e;++e){for(t=0,r=0;u>t;t++)r+=n[t][e][1];if(r)for(t=0;u>t;t++)n[t][e][1]/=r;else for(t=0;u>t;t++)n[t][e][1]=o}for(e=0;i>e;++e)a[e]=0;return a},zero:ni});Xo.layout.histogram=function(){function n(n,i){for(var o,a,c=[],s=n.map(e,this),l=r.call(this,s,i),f=u.call(this,l,s,i),i=-1,h=s.length,g=f.length-1,p=t?1:1/h;++i<g;)o=c[i]=[],o.dx=f[i+1]-(o.x=f[i]),o.y=0;if(g>0)for(i=-1;++i<h;)a=s[i],a>=l[0]&&a<=l[1]&&(o=c[Xo.bisect(f,a,1,g)-1],o.y+=p,o.push(n[i]));return c}var t=!0,e=Number,r=oi,u=ui;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=_t(t),n):r},n.bins=function(t){return arguments.length?(u="number"==typeof t?function(n){return ii(n,t)}:_t(t),n):u},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},Xo.layout.tree=function(){function n(n,i){function o(n,t){var r=n.children,u=n._tree;if(r&&(i=r.length)){for(var i,a,s,l=r[0],f=l,h=-1;++h<i;)s=r[h],o(s,a),f=c(s,a,f),a=s;vi(n);var g=.5*(l._tree.prelim+s._tree.prelim);t?(u.prelim=t._tree.prelim+e(n,t),u.mod=u.prelim-g):u.prelim=g}else t&&(u.prelim=t._tree.prelim+e(n,t))}function a(n,t){n.x=n._tree.prelim+t;var e=n.children;if(e&&(r=e.length)){var r,u=-1;for(t+=n._tree.mod;++u<r;)a(e[u],t)}}function c(n,t,r){if(t){for(var u,i=n,o=n,a=t,c=n.parent.children[0],s=i._tree.mod,l=o._tree.mod,f=a._tree.mod,h=c._tree.mod;a=si(a),i=ci(i),a&&i;)c=ci(c),o=si(o),o._tree.ancestor=n,u=a._tree.prelim+f-i._tree.prelim-s+e(a,i),u>0&&(di(mi(a,n,r),n,u),s+=u,l+=u),f+=a._tree.mod,s+=i._tree.mod,h+=c._tree.mod,l+=o._tree.mod;a&&!si(o)&&(o._tree.thread=a,o._tree.mod+=f-l),i&&!ci(c)&&(c._tree.thread=i,c._tree.mod+=s-h,r=n)}return r}var s=t.call(this,n,i),l=s[0];pi(l,function(n,t){n._tree={ancestor:n,prelim:0,mod:0,change:0,shift:0,number:t?t._tree.number+1:0}}),o(l),a(l,-l._tree.prelim);var f=li(l,hi),h=li(l,fi),g=li(l,gi),p=f.x-e(f,h)/2,v=h.x+e(h,f)/2,d=g.depth||1;return pi(l,u?function(n){n.x*=r[0],n.y=n.depth*r[1],delete n._tree}:function(n){n.x=(n.x-p)/(v-p)*r[0],n.y=n.depth/d*r[1],delete n._tree}),s}var t=Xo.layout.hierarchy().sort(null).value(null),e=ai,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Vu(n,t)},Xo.layout.pack=function(){function n(n,i){var o=e.call(this,n,i),a=o[0],c=u[0],s=u[1],l=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,pi(a,function(n){n.r=+l(n.value)}),pi(a,bi),r){var f=r*(t?1:Math.max(2*a.r/c,2*a.r/s))/2;pi(a,function(n){n.r+=f}),pi(a,bi),pi(a,function(n){n.r-=f})}return ki(a,c/2,s/2,t?1:1/Math.max(2*a.r/c,2*a.r/s)),o}var t,e=Xo.layout.hierarchy().sort(yi),r=0,u=[1,1];return n.size=function(t){return arguments.length?(u=t,n):u},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},Vu(n,e)},Xo.layout.cluster=function(){function n(n,i){var o,a=t.call(this,n,i),c=a[0],s=0;pi(c,function(n){var t=n.children;t&&t.length?(n.x=Ci(t),n.y=Ai(t)):(n.x=o?s+=e(n,o):0,n.y=0,o=n)});var l=Ni(c),f=Li(c),h=l.x-e(l,f)/2,g=f.x+e(f,l)/2;return pi(c,u?function(n){n.x=(n.x-c.x)*r[0],n.y=(c.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(g-h)*r[0],n.y=(1-(c.y?n.y/c.y:1))*r[1]}),a}var t=Xo.layout.hierarchy().sort(null).value(null),e=ai,r=[1,1],u=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(u=null==(r=t),n):u?null:r},n.nodeSize=function(t){return arguments.length?(u=null!=(r=t),n):u?r:null},Vu(n,t)},Xo.layout.treemap=function(){function n(n,t){for(var e,r,u=-1,i=n.length;++u<i;)r=(e=n[u]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var i=e.children;if(i&&i.length){var o,a,c,s=f(e),l=[],h=i.slice(),p=1/0,v="slice"===g?s.dx:"dice"===g?s.dy:"slice-dice"===g?1&e.depth?s.dy:s.dx:Math.min(s.dx,s.dy);for(n(h,s.dx*s.dy/e.value),l.area=0;(c=h.length)>0;)l.push(o=h[c-1]),l.area+=o.area,"squarify"!==g||(a=r(l,v))<=p?(h.pop(),p=a):(l.area-=l.pop().area,u(l,v,s,!1),v=Math.min(s.dx,s.dy),l.length=l.area=0,p=1/0);l.length&&(u(l,v,s,!0),l.length=l.area=0),i.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var i,o=f(t),a=r.slice(),c=[];for(n(a,o.dx*o.dy/t.value),c.area=0;i=a.pop();)c.push(i),c.area+=i.area,null!=i.z&&(u(c,i.z?o.dx:o.dy,o,!a.length),c.length=c.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,u=0,i=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(i>e&&(i=e),e>u&&(u=e));return r*=r,t*=t,r?Math.max(t*u*p/r,r/(t*i*p)):1/0}function u(n,t,e,r){var u,i=-1,o=n.length,a=e.x,s=e.y,l=t?c(n.area/t):0;if(t==e.dx){for((r||l>e.dy)&&(l=e.dy);++i<o;)u=n[i],u.x=a,u.y=s,u.dy=l,a+=u.dx=Math.min(e.x+e.dx-a,l?c(u.area/l):0);u.z=!0,u.dx+=e.x+e.dx-a,e.y+=l,e.dy-=l}else{for((r||l>e.dx)&&(l=e.dx);++i<o;)u=n[i],u.x=a,u.y=s,u.dx=l,s+=u.dy=Math.min(e.y+e.dy-s,l?c(u.area/l):0);u.z=!1,u.dy+=e.y+e.dy-s,e.x+=l,e.dx-=l}}function i(r){var u=o||a(r),i=u[0];return i.x=0,i.y=0,i.dx=s[0],i.dy=s[1],o&&a.revalue(i),n([i],i.dx*i.dy/i.value),(o?e:t)(i),h&&(o=u),u}var o,a=Xo.layout.hierarchy(),c=Math.round,s=[1,1],l=null,f=zi,h=!1,g="squarify",p=.5*(1+Math.sqrt(5));return i.size=function(n){return arguments.length?(s=n,i):s},i.padding=function(n){function t(t){var e=n.call(i,t,t.depth);return null==e?zi(t):qi(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return qi(t,n)}if(!arguments.length)return l;var r;return f=null==(l=n)?zi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,i},i.round=function(n){return arguments.length?(c=n?Math.round:Number,i):c!=Number},i.sticky=function(n){return arguments.length?(h=n,o=null,i):h},i.ratio=function(n){return arguments.length?(p=n,i):p},i.mode=function(n){return arguments.length?(g=n+"",i):g},Vu(i,a)},Xo.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,u;do e=2*Math.random()-1,r=2*Math.random()-1,u=e*e+r*r;while(!u||u>1);return n+t*e*Math.sqrt(-2*Math.log(u)/u)}},logNormal:function(){var n=Xo.random.normal.apply(Xo,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=Xo.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},Xo.scale={};var ls={floor:bt,ceil:bt};Xo.scale.linear=function(){return Hi([0,1],[0,1],fu,!1)};var fs={s:1,g:1,p:1,r:1,e:1};Xo.scale.log=function(){return $i(Xo.scale.linear().domain([0,1]),10,!0,[1,10])};var hs=Xo.format(".0e"),gs={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};Xo.scale.pow=function(){return Bi(Xo.scale.linear(),1,[0,1])},Xo.scale.sqrt=function(){return Xo.scale.pow().exponent(.5)},Xo.scale.ordinal=function(){return Ji([],{t:"range",a:[[]]})},Xo.scale.category10=function(){return Xo.scale.ordinal().range(ps)},Xo.scale.category20=function(){return Xo.scale.ordinal().range(vs)},Xo.scale.category20b=function(){return Xo.scale.ordinal().range(ds)},Xo.scale.category20c=function(){return Xo.scale.ordinal().range(ms)};var ps=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(ht),vs=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(ht),ds=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(ht),ms=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(ht);Xo.scale.quantile=function(){return Gi([],[])
},Xo.scale.quantize=function(){return Ki(0,1,[0,1])},Xo.scale.threshold=function(){return Qi([.5],[0,1])},Xo.scale.identity=function(){return no([0,1])},Xo.svg={},Xo.svg.arc=function(){function n(){var n=t.apply(this,arguments),i=e.apply(this,arguments),o=r.apply(this,arguments)+ys,a=u.apply(this,arguments)+ys,c=(o>a&&(c=o,o=a,a=c),a-o),s=Sa>c?"0":"1",l=Math.cos(o),f=Math.sin(o),h=Math.cos(a),g=Math.sin(a);return c>=xs?n?"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"M0,"+n+"A"+n+","+n+" 0 1,0 0,"+-n+"A"+n+","+n+" 0 1,0 0,"+n+"Z":"M0,"+i+"A"+i+","+i+" 0 1,1 0,"+-i+"A"+i+","+i+" 0 1,1 0,"+i+"Z":n?"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L"+n*h+","+n*g+"A"+n+","+n+" 0 "+s+",0 "+n*l+","+n*f+"Z":"M"+i*l+","+i*f+"A"+i+","+i+" 0 "+s+",1 "+i*h+","+i*g+"L0,0"+"Z"}var t=to,e=eo,r=ro,u=uo;return n.innerRadius=function(e){return arguments.length?(t=_t(e),n):t},n.outerRadius=function(t){return arguments.length?(e=_t(t),n):e},n.startAngle=function(t){return arguments.length?(r=_t(t),n):r},n.endAngle=function(t){return arguments.length?(u=_t(t),n):u},n.centroid=function(){var n=(t.apply(this,arguments)+e.apply(this,arguments))/2,i=(r.apply(this,arguments)+u.apply(this,arguments))/2+ys;return[Math.cos(i)*n,Math.sin(i)*n]},n};var ys=-Ea,xs=ka-Aa;Xo.svg.line=function(){return io(bt)};var Ms=Xo.map({linear:oo,"linear-closed":ao,step:co,"step-before":so,"step-after":lo,basis:mo,"basis-open":yo,"basis-closed":xo,bundle:Mo,cardinal:go,"cardinal-open":fo,"cardinal-closed":ho,monotone:Eo});Ms.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var _s=[0,2/3,1/3,0],bs=[0,1/3,2/3,0],ws=[0,1/6,2/3,1/6];Xo.svg.line.radial=function(){var n=io(Ao);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},so.reverse=lo,lo.reverse=so,Xo.svg.area=function(){return Co(bt)},Xo.svg.area.radial=function(){var n=Co(Ao);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},Xo.svg.chord=function(){function n(n,a){var c=t(this,i,n,a),s=t(this,o,n,a);return"M"+c.p0+r(c.r,c.p1,c.a1-c.a0)+(e(c,s)?u(c.r,c.p1,c.r,c.p0):u(c.r,c.p1,s.r,s.p0)+r(s.r,s.p1,s.a1-s.a0)+u(s.r,s.p1,c.r,c.p0))+"Z"}function t(n,t,e,r){var u=t.call(n,e,r),i=a.call(n,u,r),o=c.call(n,u,r)+ys,l=s.call(n,u,r)+ys;return{r:i,a0:o,a1:l,p0:[i*Math.cos(o),i*Math.sin(o)],p1:[i*Math.cos(l),i*Math.sin(l)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Sa)+",1 "+t}function u(n,t,e,r){return"Q 0,0 "+r}var i=hr,o=gr,a=No,c=ro,s=uo;return n.radius=function(t){return arguments.length?(a=_t(t),n):a},n.source=function(t){return arguments.length?(i=_t(t),n):i},n.target=function(t){return arguments.length?(o=_t(t),n):o},n.startAngle=function(t){return arguments.length?(c=_t(t),n):c},n.endAngle=function(t){return arguments.length?(s=_t(t),n):s},n},Xo.svg.diagonal=function(){function n(n,u){var i=t.call(this,n,u),o=e.call(this,n,u),a=(i.y+o.y)/2,c=[i,{x:i.x,y:a},{x:o.x,y:a},o];return c=c.map(r),"M"+c[0]+"C"+c[1]+" "+c[2]+" "+c[3]}var t=hr,e=gr,r=Lo;return n.source=function(e){return arguments.length?(t=_t(e),n):t},n.target=function(t){return arguments.length?(e=_t(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},Xo.svg.diagonal.radial=function(){var n=Xo.svg.diagonal(),t=Lo,e=n.projection;return n.projection=function(n){return arguments.length?e(zo(t=n)):t},n},Xo.svg.symbol=function(){function n(n,r){return(Ss.get(t.call(this,n,r))||Ro)(e.call(this,n,r))}var t=To,e=qo;return n.type=function(e){return arguments.length?(t=_t(e),n):t},n.size=function(t){return arguments.length?(e=_t(t),n):e},n};var Ss=Xo.map({circle:Ro,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Cs)),e=t*Cs;return"M0,"+-t+"L"+e+",0"+" 0,"+t+" "+-e+",0"+"Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/As),e=t*As/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/As),e=t*As/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});Xo.svg.symbolTypes=Ss.keys();var ks,Es,As=Math.sqrt(3),Cs=Math.tan(30*Na),Ns=[],Ls=0;Ns.call=da.call,Ns.empty=da.empty,Ns.node=da.node,Ns.size=da.size,Xo.transition=function(n){return arguments.length?ks?n.transition():n:xa.transition()},Xo.transition.prototype=Ns,Ns.select=function(n){var t,e,r,u=this.id,i=[];n=M(n);for(var o=-1,a=this.length;++o<a;){i.push(t=[]);for(var c=this[o],s=-1,l=c.length;++s<l;)(r=c[s])&&(e=n.call(r,r.__data__,s,o))?("__data__"in r&&(e.__data__=r.__data__),jo(e,s,u,r.__transition__[u]),t.push(e)):t.push(null)}return Do(i,u)},Ns.selectAll=function(n){var t,e,r,u,i,o=this.id,a=[];n=_(n);for(var c=-1,s=this.length;++c<s;)for(var l=this[c],f=-1,h=l.length;++f<h;)if(r=l[f]){i=r.__transition__[o],e=n.call(r,r.__data__,f,c),a.push(t=[]);for(var g=-1,p=e.length;++g<p;)(u=e[g])&&jo(u,g,o,i),t.push(u)}return Do(a,o)},Ns.filter=function(n){var t,e,r,u=[];"function"!=typeof n&&(n=q(n));for(var i=0,o=this.length;o>i;i++){u.push(t=[]);for(var e=this[i],a=0,c=e.length;c>a;a++)(r=e[a])&&n.call(r,r.__data__,a,i)&&t.push(r)}return Do(u,this.id)},Ns.tween=function(n,t){var e=this.id;return arguments.length<2?this.node().__transition__[e].tween.get(n):R(this,null==t?function(t){t.__transition__[e].tween.remove(n)}:function(r){r.__transition__[e].tween.set(n,t)})},Ns.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function u(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function i(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Ru:fu,a=Xo.ns.qualify(n);return Po(this,"attr."+n,t,a.local?i:u)},Ns.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(u));return r&&function(n){this.setAttribute(u,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(u.space,u.local));return r&&function(n){this.setAttributeNS(u.space,u.local,r(n))}}var u=Xo.ns.qualify(n);return this.tween("attr."+n,u.local?r:e)},Ns.style=function(n,t,e){function r(){this.style.removeProperty(n)}function u(t){return null==t?r:(t+="",function(){var r,u=Go.getComputedStyle(this,null).getPropertyValue(n);return u!==t&&(r=fu(u,t),function(t){this.style.setProperty(n,r(t),e)})})}var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return Po(this,"style."+n,t,u)},Ns.styleTween=function(n,t,e){function r(r,u){var i=t.call(this,r,u,Go.getComputedStyle(this,null).getPropertyValue(n));return i&&function(t){this.style.setProperty(n,i(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Ns.text=function(n){return Po(this,"text",n,Uo)},Ns.remove=function(){return this.each("end.transition",function(){var n;this.__transition__.count<2&&(n=this.parentNode)&&n.removeChild(this)})},Ns.ease=function(n){var t=this.id;return arguments.length<1?this.node().__transition__[t].ease:("function"!=typeof n&&(n=Xo.ease.apply(Xo,arguments)),R(this,function(e){e.__transition__[t].ease=n}))},Ns.delay=function(n){var t=this.id;return R(this,"function"==typeof n?function(e,r,u){e.__transition__[t].delay=+n.call(e,e.__data__,r,u)}:(n=+n,function(e){e.__transition__[t].delay=n}))},Ns.duration=function(n){var t=this.id;return R(this,"function"==typeof n?function(e,r,u){e.__transition__[t].duration=Math.max(1,n.call(e,e.__data__,r,u))}:(n=Math.max(1,n),function(e){e.__transition__[t].duration=n}))},Ns.each=function(n,t){var e=this.id;if(arguments.length<2){var r=Es,u=ks;ks=e,R(this,function(t,r,u){Es=t.__transition__[e],n.call(t,t.__data__,r,u)}),Es=r,ks=u}else R(this,function(r){var u=r.__transition__[e];(u.event||(u.event=Xo.dispatch("start","end"))).on(n,t)});return this},Ns.transition=function(){for(var n,t,e,r,u=this.id,i=++Ls,o=[],a=0,c=this.length;c>a;a++){o.push(n=[]);for(var t=this[a],s=0,l=t.length;l>s;s++)(e=t[s])&&(r=Object.create(e.__transition__[u]),r.delay+=r.duration,jo(e,s,i,r)),n.push(e)}return Do(o,i)},Xo.svg.axis=function(){function n(n){n.each(function(){var n,s=Xo.select(this),l=this.__chart__||e,f=this.__chart__=e.copy(),h=null==c?f.ticks?f.ticks.apply(f,a):f.domain():c,g=null==t?f.tickFormat?f.tickFormat.apply(f,a):bt:t,p=s.selectAll(".tick").data(h,f),v=p.enter().insert("g",".domain").attr("class","tick").style("opacity",Aa),d=Xo.transition(p.exit()).style("opacity",Aa).remove(),m=Xo.transition(p).style("opacity",1),y=Ri(f),x=s.selectAll(".domain").data([0]),M=(x.enter().append("path").attr("class","domain"),Xo.transition(x));v.append("line"),v.append("text");var _=v.select("line"),b=m.select("line"),w=p.select("text").text(g),S=v.select("text"),k=m.select("text");switch(r){case"bottom":n=Ho,_.attr("y2",u),S.attr("y",Math.max(u,0)+o),b.attr("x2",0).attr("y2",u),k.attr("x",0).attr("y",Math.max(u,0)+o),w.attr("dy",".71em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+i+"V0H"+y[1]+"V"+i);break;case"top":n=Ho,_.attr("y2",-u),S.attr("y",-(Math.max(u,0)+o)),b.attr("x2",0).attr("y2",-u),k.attr("x",0).attr("y",-(Math.max(u,0)+o)),w.attr("dy","0em").style("text-anchor","middle"),M.attr("d","M"+y[0]+","+-i+"V0H"+y[1]+"V"+-i);break;case"left":n=Fo,_.attr("x2",-u),S.attr("x",-(Math.max(u,0)+o)),b.attr("x2",-u).attr("y2",0),k.attr("x",-(Math.max(u,0)+o)).attr("y",0),w.attr("dy",".32em").style("text-anchor","end"),M.attr("d","M"+-i+","+y[0]+"H0V"+y[1]+"H"+-i);break;case"right":n=Fo,_.attr("x2",u),S.attr("x",Math.max(u,0)+o),b.attr("x2",u).attr("y2",0),k.attr("x",Math.max(u,0)+o).attr("y",0),w.attr("dy",".32em").style("text-anchor","start"),M.attr("d","M"+i+","+y[0]+"H0V"+y[1]+"H"+i)}if(f.rangeBand){var E=f,A=E.rangeBand()/2;l=f=function(n){return E(n)+A}}else l.rangeBand?l=f:d.call(n,f);v.call(n,l),m.call(n,f)})}var t,e=Xo.scale.linear(),r=zs,u=6,i=6,o=3,a=[10],c=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in qs?t+"":zs,n):r},n.ticks=function(){return arguments.length?(a=arguments,n):a},n.tickValues=function(t){return arguments.length?(c=t,n):c},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(u=+t,i=+arguments[e-1],n):u},n.innerTickSize=function(t){return arguments.length?(u=+t,n):u},n.outerTickSize=function(t){return arguments.length?(i=+t,n):i},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var zs="bottom",qs={top:1,right:1,bottom:1,left:1};Xo.svg.brush=function(){function n(i){i.each(function(){var i=Xo.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=i.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),i.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=i.selectAll(".resize").data(p,bt);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Ts[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,f=Xo.transition(i),h=Xo.transition(o);c&&(l=Ri(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),e(f)),s&&(l=Ri(s),h.attr("y",l[0]).attr("height",l[1]-l[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+l[+/e$/.test(n)]+","+f[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",l[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",l[1]-l[0])}function r(n){n.select(".extent").attr("y",f[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",f[1]-f[0])}function u(){function u(){32==Xo.event.keyCode&&(C||(x=null,L[0]-=l[1],L[1]-=f[1],C=2),d())}function p(){32==Xo.event.keyCode&&2==C&&(L[0]+=l[1],L[1]+=f[1],C=0,d())}function v(){var n=Xo.mouse(_),u=!1;M&&(n[0]+=M[0],n[1]+=M[1]),C||(Xo.event.altKey?(x||(x=[(l[0]+l[1])/2,(f[0]+f[1])/2]),L[0]=l[+(n[0]<x[0])],L[1]=f[+(n[1]<x[1])]):x=null),E&&m(n,c,0)&&(e(S),u=!0),A&&m(n,s,1)&&(r(S),u=!0),u&&(t(S),w({type:"brush",mode:C?"move":"resize"}))}function m(n,t,e){var r,u,a=Ri(t),c=a[0],s=a[1],p=L[e],v=e?f:l,d=v[1]-v[0];return C&&(c-=p,s-=d+p),r=(e?g:h)?Math.max(c,Math.min(s,n[e])):n[e],C?u=(r+=p)+d:(x&&(p=Math.max(c,Math.min(s,2*x[e]-r))),r>p?(u=r,r=p):u=p),v[0]!=r||v[1]!=u?(e?o=null:i=null,v[0]=r,v[1]=u,!0):void 0}function y(){v(),S.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),Xo.select("body").style("cursor",null),z.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),N(),w({type:"brushend"})}var x,M,_=this,b=Xo.select(Xo.event.target),w=a.of(_,arguments),S=Xo.select(_),k=b.datum(),E=!/^(n|s)$/.test(k)&&c,A=!/^(e|w)$/.test(k)&&s,C=b.classed("extent"),N=O(),L=Xo.mouse(_),z=Xo.select(Go).on("keydown.brush",u).on("keyup.brush",p);if(Xo.event.changedTouches?z.on("touchmove.brush",v).on("touchend.brush",y):z.on("mousemove.brush",v).on("mouseup.brush",y),S.interrupt().selectAll("*").interrupt(),C)L[0]=l[0]-L[0],L[1]=f[0]-L[1];else if(k){var q=+/w$/.test(k),T=+/^n/.test(k);M=[l[1-q]-L[0],f[1-T]-L[1]],L[0]=l[q],L[1]=f[T]}else Xo.event.altKey&&(x=L.slice());S.style("pointer-events","none").selectAll(".resize").style("display",null),Xo.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var i,o,a=y(n,"brushstart","brush","brushend"),c=null,s=null,l=[0,0],f=[0,0],h=!0,g=!0,p=Rs[0];return n.event=function(n){n.each(function(){var n=a.of(this,arguments),t={x:l,y:f,i:i,j:o},e=this.__chart__||t;this.__chart__=t,ks?Xo.select(this).transition().each("start.brush",function(){i=e.i,o=e.j,l=e.x,f=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=hu(l,t.x),r=hu(f,t.y);return i=o=null,function(u){l=t.x=e(u),f=t.y=r(u),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){i=t.i,o=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,p=Rs[!c<<1|!s],n):c},n.y=function(t){return arguments.length?(s=t,p=Rs[!c<<1|!s],n):s},n.clamp=function(t){return arguments.length?(c&&s?(h=!!t[0],g=!!t[1]):c?h=!!t:s&&(g=!!t),n):c&&s?[h,g]:c?h:s?g:null},n.extent=function(t){var e,r,u,a,h;return arguments.length?(c&&(e=t[0],r=t[1],s&&(e=e[0],r=r[0]),i=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(h=e,e=r,r=h),(e!=l[0]||r!=l[1])&&(l=[e,r])),s&&(u=t[0],a=t[1],c&&(u=u[1],a=a[1]),o=[u,a],s.invert&&(u=s(u),a=s(a)),u>a&&(h=u,u=a,a=h),(u!=f[0]||a!=f[1])&&(f=[u,a])),n):(c&&(i?(e=i[0],r=i[1]):(e=l[0],r=l[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(h=e,e=r,r=h))),s&&(o?(u=o[0],a=o[1]):(u=f[0],a=f[1],s.invert&&(u=s.invert(u),a=s.invert(a)),u>a&&(h=u,u=a,a=h))),c&&s?[[e,u],[r,a]]:c?[e,r]:s&&[u,a])},n.clear=function(){return n.empty()||(l=[0,0],f=[0,0],i=o=null),n},n.empty=function(){return!!c&&l[0]==l[1]||!!s&&f[0]==f[1]},Xo.rebind(n,a,"on")};var Ts={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Rs=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Ds=tc.format=ac.timeFormat,Ps=Ds.utc,Us=Ps("%Y-%m-%dT%H:%M:%S.%LZ");Ds.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?Oo:Us,Oo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},Oo.toString=Us.toString,tc.second=Rt(function(n){return new ec(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),tc.seconds=tc.second.range,tc.seconds.utc=tc.second.utc.range,tc.minute=Rt(function(n){return new ec(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),tc.minutes=tc.minute.range,tc.minutes.utc=tc.minute.utc.range,tc.hour=Rt(function(n){var t=n.getTimezoneOffset()/60;return new ec(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),tc.hours=tc.hour.range,tc.hours.utc=tc.hour.utc.range,tc.month=Rt(function(n){return n=tc.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),tc.months=tc.month.range,tc.months.utc=tc.month.utc.range;var js=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Hs=[[tc.second,1],[tc.second,5],[tc.second,15],[tc.second,30],[tc.minute,1],[tc.minute,5],[tc.minute,15],[tc.minute,30],[tc.hour,1],[tc.hour,3],[tc.hour,6],[tc.hour,12],[tc.day,1],[tc.day,2],[tc.week,1],[tc.month,1],[tc.month,3],[tc.year,1]],Fs=Ds.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",be]]),Os={range:function(n,t,e){return Xo.range(+n,+t,e).map(Io)},floor:bt,ceil:bt};Hs.year=tc.year,tc.scale=function(){return Yo(Xo.scale.linear(),Hs,Fs)};var Ys=Hs.map(function(n){return[n[0].utc,n[1]]}),Is=Ps.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",be]]);Ys.year=tc.year.utc,tc.scale.utc=function(){return Yo(Xo.scale.linear(),Ys,Is)},Xo.text=wt(function(n){return n.responseText}),Xo.json=function(n,t){return St(n,"application/json",Zo,t)},Xo.html=function(n,t){return St(n,"text/html",Vo,t)},Xo.xml=wt(function(n){return n.responseXML}),"function"==typeof define&&define.amd?define(Xo):"object"==typeof module&&module.exports?module.exports=Xo:this.d3=Xo}();
;!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=60)}([function(t,e,n){(function(){var e,r,i,o,s,a,u,c,l,h,f,p,d={}.hasOwnProperty;p=n(1),f=p.isObject,h=p.isFunction,l=p.isEmpty,s=null,e=null,r=null,i=null,o=null,u=null,c=null,a=null,t.exports=function(){function t(t){this.parent=t,this.parent&&(this.options=this.parent.options,this.stringify=this.parent.stringify),this.children=[],s||(s=n(21),e=n(20),r=n(19),i=n(18),o=n(17),u=n(12),c=n(11),a=n(10))}return t.prototype.element=function(t,e,n){var r,i,o,s,a,u,c,p,y,g;if(u=null,null==e&&(e={}),e=e.valueOf(),f(e)||(n=(y=[e,n])[0],e=y[1]),null!=t&&(t=t.valueOf()),Array.isArray(t))for(o=0,c=t.length;o<c;o++)i=t[o],u=this.element(i);else if(h(t))u=this.element(t.apply());else if(f(t)){for(a in t)if(d.call(t,a))if(g=t[a],h(g)&&(g=g.apply()),f(g)&&l(g)&&(g=null),!this.options.ignoreDecorators&&this.stringify.convertAttKey&&0===a.indexOf(this.stringify.convertAttKey))u=this.attribute(a.substr(this.stringify.convertAttKey.length),g);else if(!this.options.separateArrayItems&&Array.isArray(g))for(s=0,p=g.length;s<p;s++)i=g[s],(r={})[a]=i,u=this.element(r);else f(g)?(u=this.element(a)).element(g):u=this.element(a,g)}else u=!this.options.ignoreDecorators&&this.stringify.convertTextKey&&0===t.indexOf(this.stringify.convertTextKey)?this.text(n):!this.options.ignoreDecorators&&this.stringify.convertCDataKey&&0===t.indexOf(this.stringify.convertCDataKey)?this.cdata(n):!this.options.ignoreDecorators&&this.stringify.convertCommentKey&&0===t.indexOf(this.stringify.convertCommentKey)?this.comment(n):!this.options.ignoreDecorators&&this.stringify.convertRawKey&&0===t.indexOf(this.stringify.convertRawKey)?this.raw(n):!this.options.ignoreDecorators&&this.stringify.convertPIKey&&0===t.indexOf(this.stringify.convertPIKey)?this.instruction(t.substr(this.stringify.convertPIKey.length),n):this.node(t,e,n);if(null==u)throw new Error("Could not create any elements with: "+t);return u},t.prototype.insertBefore=function(t,e,n){var r,i,o;if(this.isRoot)throw new Error("Cannot insert elements at root level");return i=this.parent.children.indexOf(this),o=this.parent.children.splice(i),r=this.parent.element(t,e,n),Array.prototype.push.apply(this.parent.children,o),r},t.prototype.insertAfter=function(t,e,n){var r,i,o;if(this.isRoot)throw new Error("Cannot insert elements at root level");return i=this.parent.children.indexOf(this),o=this.parent.children.splice(i+1),r=this.parent.element(t,e,n),Array.prototype.push.apply(this.parent.children,o),r},t.prototype.remove=function(){var t;if(this.isRoot)throw new Error("Cannot remove the root element");return t=this.parent.children.indexOf(this),[].splice.apply(this.parent.children,[t,t-t+1].concat([])),this.parent},t.prototype.node=function(t,e,n){var r,i;return null!=t&&(t=t.valueOf()),e||(e={}),e=e.valueOf(),f(e)||(n=(i=[e,n])[0],e=i[1]),r=new s(this,t,e),null!=n&&r.text(n),this.children.push(r),r},t.prototype.text=function(t){var e;return e=new c(this,t),this.children.push(e),this},t.prototype.cdata=function(t){var n;return n=new e(this,t),this.children.push(n),this},t.prototype.comment=function(t){var e;return e=new r(this,t),this.children.push(e),this},t.prototype.commentBefore=function(t){var e,n;return e=this.parent.children.indexOf(this),n=this.parent.children.splice(e),this.parent.comment(t),Array.prototype.push.apply(this.parent.children,n),this},t.prototype.commentAfter=function(t){var e,n;return e=this.parent.children.indexOf(this),n=this.parent.children.splice(e+1),this.parent.comment(t),Array.prototype.push.apply(this.parent.children,n),this},t.prototype.raw=function(t){var e;return e=new u(this,t),this.children.push(e),this},t.prototype.instruction=function(t,e){var n,r,i,o,s;if(null!=t&&(t=t.valueOf()),null!=e&&(e=e.valueOf()),Array.isArray(t))for(o=0,s=t.length;o<s;o++)n=t[o],this.instruction(n);else if(f(t))for(n in t)d.call(t,n)&&(r=t[n],this.instruction(n,r));else h(e)&&(e=e.apply()),i=new a(this,t,e),this.children.push(i);return this},t.prototype.instructionBefore=function(t,e){var n,r;return n=this.parent.children.indexOf(this),r=this.parent.children.splice(n),this.parent.instruction(t,e),Array.prototype.push.apply(this.parent.children,r),this},t.prototype.instructionAfter=function(t,e){var n,r;return n=this.parent.children.indexOf(this),r=this.parent.children.splice(n+1),this.parent.instruction(t,e),Array.prototype.push.apply(this.parent.children,r),this},t.prototype.declaration=function(t,e,n){var r,o;return r=this.document(),o=new i(r,t,e,n),r.children[0]instanceof i?r.children[0]=o:r.children.unshift(o),r.root()||r},t.prototype.doctype=function(t,e){var n,r,i,s,a,u,c,l,h;for(n=this.document(),r=new o(n,t,e),i=s=0,u=(l=n.children).length;s<u;i=++s)if(l[i]instanceof o)return n.children[i]=r,r;for(i=a=0,c=(h=n.children).length;a<c;i=++a)if(h[i].isRoot)return n.children.splice(i,0,r),r;return n.children.push(r),r},t.prototype.up=function(){if(this.isRoot)throw new Error("The root node has no parent. Use doc() if you need to get the document object.");return this.parent},t.prototype.root=function(){var t;for(t=this;t;){if(t.isDocument)return t.rootObject;if(t.isRoot)return t;t=t.parent}},t.prototype.document=function(){var t;for(t=this;t;){if(t.isDocument)return t;t=t.parent}},t.prototype.end=function(t){return this.document().end(t)},t.prototype.prev=function(){var t;if((t=this.parent.children.indexOf(this))<1)throw new Error("Already at the first node");return this.parent.children[t-1]},t.prototype.next=function(){var t;if(-1===(t=this.parent.children.indexOf(this))||t===this.parent.children.length-1)throw new Error("Already at the last node");return this.parent.children[t+1]},t.prototype.importDocument=function(t){var e;return(e=t.root().clone()).parent=this,e.isRoot=!1,this.children.push(e),this},t.prototype.ele=function(t,e,n){return this.element(t,e,n)},t.prototype.nod=function(t,e,n){return this.node(t,e,n)},t.prototype.txt=function(t){return this.text(t)},t.prototype.dat=function(t){return this.cdata(t)},t.prototype.com=function(t){return this.comment(t)},t.prototype.ins=function(t,e){return this.instruction(t,e)},t.prototype.doc=function(){return this.document()},t.prototype.dec=function(t,e,n){return this.declaration(t,e,n)},t.prototype.dtd=function(t,e){return this.doctype(t,e)},t.prototype.e=function(t,e,n){return this.element(t,e,n)},t.prototype.n=function(t,e,n){return this.node(t,e,n)},t.prototype.t=function(t){return this.text(t)},t.prototype.d=function(t){return this.cdata(t)},t.prototype.c=function(t){return this.comment(t)},t.prototype.r=function(t){return this.raw(t)},t.prototype.i=function(t,e){return this.instruction(t,e)},t.prototype.u=function(){return this.up()},t.prototype.importXMLBuilder=function(t){return this.importDocument(t)},t}()}).call(this)},function(t,e){(function(){var e,n,r,i,o,s,a=[].slice,u={}.hasOwnProperty;e=function(){var t,e,n,r,o,s;if(s=arguments[0],o=2<=arguments.length?a.call(arguments,1):[],i(Object.assign))Object.assign.apply(null,arguments);else for(t=0,n=o.length;t<n;t++)if(null!=(r=o[t]))for(e in r)u.call(r,e)&&(s[e]=r[e]);return s},i=function(t){return!!t&&"[object Function]"===Object.prototype.toString.call(t)},o=function(t){var e;return!!t&&("function"==(e=typeof t)||"object"===e)},n=function(t){return i(Array.isArray)?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t)},r=function(t){var e;if(n(t))return!t.length;for(e in t)if(u.call(t,e))return!1;return!0},s=function(t){var e,n;return o(t)&&(n=Object.getPrototypeOf(t))&&(e=n.constructor)&&"function"==typeof e&&e instanceof e&&Function.prototype.toString.call(e)===Function.prototype.toString.call(Object)},t.exports.assign=e,t.exports.isFunction=i,t.exports.isObject=o,t.exports.isArray=n,t.exports.isEmpty=r,t.exports.isPlainObject=s}).call(this)},function(t,e,n){"use strict";var r=n(7),i=Object.keys||function(t){var e=[];for(var n in t)e.push(n);return e};t.exports=h;var o=n(5);o.inherits=n(3);var s=n(33),a=n(23);o.inherits(h,s);for(var u=i(a.prototype),c=0;c<u.length;c++){var l=u[c];h.prototype[l]||(h.prototype[l]=a.prototype[l])}function h(t){if(!(this instanceof h))return new h(t);s.call(this,t),a.call(this,t),t&&!1===t.readable&&(this.readable=!1),t&&!1===t.writable&&(this.writable=!1),this.allowHalfOpen=!0,t&&!1===t.allowHalfOpen&&(this.allowHalfOpen=!1),this.once("end",f)}function f(){this.allowHalfOpen||this._writableState.ended||r.nextTick(p,this)}function p(t){t.end()}Object.defineProperty(h.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),Object.defineProperty(h.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed&&this._writableState.destroyed)},set:function(t){void 0!==this._readableState&&void 0!==this._writableState&&(this._readableState.destroyed=t,this._writableState.destroyed=t)}}),h.prototype._destroy=function(t,e){this.push(null),this.end(),r.nextTick(e,t)}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var n=function(){};n.prototype=e.prototype,t.prototype=new n,t.prototype.constructor=t}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(t){function n(t){return Object.prototype.toString.call(t)}e.isArray=function(t){return Array.isArray?Array.isArray(t):"[object Array]"===n(t)},e.isBoolean=function(t){return"boolean"==typeof t},e.isNull=function(t){return null===t},e.isNullOrUndefined=function(t){return null==t},e.isNumber=function(t){return"number"==typeof t},e.isString=function(t){return"string"==typeof t},e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=function(t){return void 0===t},e.isRegExp=function(t){return"[object RegExp]"===n(t)},e.isObject=function(t){return"object"==typeof t&&null!==t},e.isDate=function(t){return"[object Date]"===n(t)},e.isError=function(t){return"[object Error]"===n(t)||t instanceof Error},e.isFunction=function(t){return"function"==typeof t},e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=t.isBuffer}).call(this,n(25).Buffer)},function(t,e,n){var r=n(25),i=r.Buffer;function o(t,e){for(var n in t)e[n]=t[n]}function s(t,e,n){return i(t,e,n)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=r:(o(r,e),e.Buffer=s),o(i,s),s.from=function(t,e,n){if("number"==typeof t)throw new TypeError("Argument must not be a number");return i(t,e,n)},s.alloc=function(t,e,n){if("number"!=typeof t)throw new TypeError("Argument must be a number");var r=i(t);return void 0!==e?"string"==typeof n?r.fill(e,n):r.fill(e):r.fill(0),r},s.allocUnsafe=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return i(t)},s.allocUnsafeSlow=function(t){if("number"!=typeof t)throw new TypeError("Argument must be a number");return r.SlowBuffer(t)}},function(t,e,n){"use strict";(function(e){!e.version||0===e.version.indexOf("v0.")||0===e.version.indexOf("v1.")&&0!==e.version.indexOf("v1.8.")?t.exports={nextTick:function(t,n,r,i){if("function"!=typeof t)throw new TypeError('"callback" argument must be a function');var o,s,a=arguments.length;switch(a){case 0:case 1:return e.nextTick(t);case 2:return e.nextTick(function(){t.call(null,n)});case 3:return e.nextTick(function(){t.call(null,n,r)});case 4:return e.nextTick(function(){t.call(null,n,r,i)});default:for(o=new Array(a-1),s=0;s<o.length;)o[s++]=arguments[s];return e.nextTick(function(){t.apply(null,o)})}}}:t.exports=e}).call(this,n(8))},function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(t){r=s}}();var u,c=[],l=!1,h=-1;function f(){l&&u&&(l=!1,u.length?c=u.concat(c):h=-1,c.length&&p())}function p(){if(!l){var t=a(f);l=!0;for(var e=c.length;e;){for(u=c,c=[];++h<e;)u&&u[h].run();h=-1,e=c.length}u=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function d(t,e){this.fun=t,this.array=e}function y(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new d(t,e)),1!==c.length||l||a(p)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=y,i.addListener=y,i.once=y,i.off=y,i.removeListener=y,i.removeAllListeners=y,i.emit=y,i.prependListener=y,i.prependOnceListener=y,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e){function n(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function r(t){return"function"==typeof t}function i(t){return"object"==typeof t&&null!==t}function o(t){return void 0===t}t.exports=n,n.EventEmitter=n,n.prototype._events=void 0,n.prototype._maxListeners=void 0,n.defaultMaxListeners=10,n.prototype.setMaxListeners=function(t){if("number"!=typeof t||t<0||isNaN(t))throw TypeError("n must be a positive number");return this._maxListeners=t,this},n.prototype.emit=function(t){var e,n,s,a,u,c;if(this._events||(this._events={}),"error"===t&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if((e=arguments[1])instanceof Error)throw e;var l=new Error('Uncaught, unspecified "error" event. ('+e+")");throw l.context=e,l}if(o(n=this._events[t]))return!1;if(r(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),n.apply(this,a)}else if(i(n))for(a=Array.prototype.slice.call(arguments,1),s=(c=n.slice()).length,u=0;u<s;u++)c[u].apply(this,a);return!0},n.prototype.addListener=function(t,e){var s;if(!r(e))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,r(e.listener)?e.listener:e),this._events[t]?i(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,i(this._events[t])&&!this._events[t].warned&&(s=o(this._maxListeners)?n.defaultMaxListeners:this._maxListeners)&&s>0&&this._events[t].length>s&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace()),this},n.prototype.on=n.prototype.addListener,n.prototype.once=function(t,e){if(!r(e))throw TypeError("listener must be a function");var n=!1;function i(){this.removeListener(t,i),n||(n=!0,e.apply(this,arguments))}return i.listener=e,this.on(t,i),this},n.prototype.removeListener=function(t,e){var n,o,s,a;if(!r(e))throw TypeError("listener must be a function");if(!this._events||!this._events[t])return this;if(s=(n=this._events[t]).length,o=-1,n===e||r(n.listener)&&n.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e);else if(i(n)){for(a=s;a-- >0;)if(n[a]===e||n[a].listener&&n[a].listener===e){o=a;break}if(o<0)return this;1===n.length?(n.length=0,delete this._events[t]):n.splice(o,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},n.prototype.removeAllListeners=function(t){var e,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this;if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e);return this.removeAllListeners("removeListener"),this._events={},this}if(r(n=this._events[t]))this.removeListener(t,n);else if(n)for(;n.length;)this.removeListener(t,n[n.length-1]);return delete this._events[t],this},n.prototype.listeners=function(t){return this._events&&this._events[t]?r(this._events[t])?[this._events[t]]:this._events[t].slice():[]},n.prototype.listenerCount=function(t){if(this._events){var e=this._events[t];if(r(e))return 1;if(e)return e.length}return 0},n.listenerCount=function(t,e){return t.listenerCount(e)}},function(t,e,n){(function(){var e,r={}.hasOwnProperty;e=n(0),t.exports=function(t){function n(t,e,r){if(n.__super__.constructor.call(this,t),null==e)throw new Error("Missing instruction target");this.target=this.stringify.insTarget(e),r&&(this.value=this.stringify.insValue(r))}return function(t,e){for(var n in e)r.call(e,n)&&(t[n]=e[n]);function i(){this.constructor=t}i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype}(n,e),n.prototype.clone=function(){return Object.create(this)},n.prototype.toString=function(t){return this.options.writer.set(t).processingInstruction(this)},n}()}).call(this)},function(t,e,n){(function(){var e,r={}.hasOwnProperty;e=n(0),t.exports=function(t){function n(t,e){if(n.__super__.constructor.call(this,t),null==e)throw new Error("Missing element text");this.value=this.stringify.eleText(e)}return function(t,e){for(var n in e)r.call(e,n)&&(t[n]=e[n]);function i(){this.constructor=t}i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype}(n,e),n.prototype.clone=function(){return Object.create(this)},n.prototype.toString=function(t){return this.options.writer.set(t).text(this)},n}()}).call(this)},function(t,e,n){(function(){var e,r={}.hasOwnProperty;e=n(0),t.exports=function(t){function n(t,e){if(n.__super__.constructor.call(this,t),null==e)throw new Error("Missing raw text");this.value=this.stringify.raw(e)}return function(t,e){for(var n in e)r.call(e,n)&&(t[n]=e[n]);function i(){this.constructor=t}i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype}(n,e),n.prototype.clone=function(){return Object.create(this)},n.prototype.toString=function(t){return this.options.writer.set(t).raw(this)},n}()}).call(this)},function(t,e,n){(function(){var e,r={}.hasOwnProperty;e=n(0),t.exports=function(t){function n(t,e,r){if(n.__super__.constructor.call(this,t),null==e)throw new Error("Missing notation name");if(!r.pubID&&!r.sysID)throw new Error("Public or system identifiers are required for an external entity");this.name=this.stringify.eleName(e),null!=r.pubID&&(this.pubID=this.stringify.dtdPubID(r.pubID)),null!=r.sysID&&(this.sysID=this.stringify.dtdSysID(r.sysID))}return function(t,e){for(var n in e)r.call(e,n)&&(t[n]=e[n]);function i(){this.constructor=t}i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype}(n,e),n.prototype.toString=function(t){return this.options.writer.set(t).dtdNotation(this)},n}()}).call(this)},function(t,e,n){(function(){var e,r={}.hasOwnProperty;e=n(0),t.exports=function(t){function n(t,e,r){if(n.__super__.constructor.call(this,t),null==e)throw new Error("Missing DTD element name");r||(r="(#PCDATA)"),Array.isArray(r)&&(r="("+r.join(",")+")"),this.name=this.stringify.eleName(e),this.value=this.stringify.dtdElementValue(r)}return function(t,e){for(var n in e)r.call(e,n)&&(t[n]=e[n]);function i(){this.constructor=t}i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype}(n,e),n.prototype.toString=function(t){return this.options.writer.set(t).dtdElement(this)},n}()}).call(this)},function(t,e,n){(function(){var e,r,i={}.hasOwnProperty;r=n(1).isObject,e=n(0),t.exports=function(t){function n(t,e,i,o){if(n.__super__.constructor.call(this,t),null==i)throw new Error("Missing entity name");if(null==o)throw new Error("Missing entity value");if(this.pe=!!e,this.name=this.stringify.eleName(i),r(o)){if(!o.pubID&&!o.sysID)throw new Error("Public and/or system identifiers are required for an external entity");if(o.pubID&&!o.sysID)throw new Error("System identifier is required for a public external entity");if(null!=o.pubID&&(this.pubID=this.stringify.dtdPubID(o.pubID)),null!=o.sysID&&(this.sysID=this.stringify.dtdSysID(o.sysID)),null!=o.nData&&(this.nData=this.stringify.dtdNData(o.nData)),this.pe&&this.nData)throw new Error("Notation declaration is not allowed in a parameter entity")}else this.value=this.stringify.dtdEntityValue(o)}return function(t,e){for(var n in e)i.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(n,e),n.prototype.toString=function(t){return this.options.writer.set(t).dtdEntity(this)},n}()}).call(this)},function(t,e,n){(function(){var e,r={}.hasOwnProperty;e=n(0),t.exports=function(t){function n(t,e,r,i,o,s){if(n.__super__.constructor.call(this,t),null==e)throw new Error("Missing DTD element name");if(null==r)throw new Error("Missing DTD attribute name");if(!i)throw new Error("Missing DTD attribute type");if(!o)throw new Error("Missing DTD attribute default");if(0!==o.indexOf("#")&&(o="#"+o),!o.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/))throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");if(s&&!o.match(/^(#FIXED|#DEFAULT)$/))throw new Error("Default value only applies to #FIXED or #DEFAULT");this.elementName=this.stringify.eleName(e),this.attributeName=this.stringify.attName(r),this.attributeType=this.stringify.dtdAttType(i),this.defaultValue=this.stringify.dtdAttDefault(s),this.defaultValueType=o}return function(t,e){for(var n in e)r.call(e,n)&&(t[n]=e[n]);function i(){this.constructor=t}i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype}(n,e),n.prototype.toString=function(t){return this.options.writer.set(t).dtdAttList(this)},n}()}).call(this)},function(t,e,n){(function(){var e,r,i,o,s,a,u={}.hasOwnProperty;a=n(1).isObject,s=n(0),e=n(16),i=n(15),r=n(14),o=n(13),t.exports=function(t){function n(t,e,r){var i,o;n.__super__.constructor.call(this,t),this.documentObject=t,a(e)&&(e=(i=e).pubID,r=i.sysID),null==r&&(r=(o=[e,r])[0],e=o[1]),null!=e&&(this.pubID=this.stringify.dtdPubID(e)),null!=r&&(this.sysID=this.stringify.dtdSysID(r))}return function(t,e){for(var n in e)u.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(n,s),n.prototype.element=function(t,e){var n;return n=new r(this,t,e),this.children.push(n),this},n.prototype.attList=function(t,n,r,i,o){var s;return s=new e(this,t,n,r,i,o),this.children.push(s),this},n.prototype.entity=function(t,e){var n;return n=new i(this,!1,t,e),this.children.push(n),this},n.prototype.pEntity=function(t,e){var n;return n=new i(this,!0,t,e),this.children.push(n),this},n.prototype.notation=function(t,e){var n;return n=new o(this,t,e),this.children.push(n),this},n.prototype.toString=function(t){return this.options.writer.set(t).docType(this)},n.prototype.ele=function(t,e){return this.element(t,e)},n.prototype.att=function(t,e,n,r,i){return this.attList(t,e,n,r,i)},n.prototype.ent=function(t,e){return this.entity(t,e)},n.prototype.pent=function(t,e){return this.pEntity(t,e)},n.prototype.not=function(t,e){return this.notation(t,e)},n.prototype.up=function(){return this.root()||this.documentObject},n}()}).call(this)},function(t,e,n){(function(){var e,r,i={}.hasOwnProperty;r=n(1).isObject,e=n(0),t.exports=function(t){function n(t,e,i,o){var s;n.__super__.constructor.call(this,t),r(e)&&(e=(s=e).version,i=s.encoding,o=s.standalone),e||(e="1.0"),this.version=this.stringify.xmlVersion(e),null!=i&&(this.encoding=this.stringify.xmlEncoding(i)),null!=o&&(this.standalone=this.stringify.xmlStandalone(o))}return function(t,e){for(var n in e)i.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(n,e),n.prototype.toString=function(t){return this.options.writer.set(t).declaration(this)},n}()}).call(this)},function(t,e,n){(function(){var e,r={}.hasOwnProperty;e=n(0),t.exports=function(t){function n(t,e){if(n.__super__.constructor.call(this,t),null==e)throw new Error("Missing comment text");this.text=this.stringify.comment(e)}return function(t,e){for(var n in e)r.call(e,n)&&(t[n]=e[n]);function i(){this.constructor=t}i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype}(n,e),n.prototype.clone=function(){return Object.create(this)},n.prototype.toString=function(t){return this.options.writer.set(t).comment(this)},n}()}).call(this)},function(t,e,n){(function(){var e,r={}.hasOwnProperty;e=n(0),t.exports=function(t){function n(t,e){if(n.__super__.constructor.call(this,t),null==e)throw new Error("Missing CDATA text");this.text=this.stringify.cdata(e)}return function(t,e){for(var n in e)r.call(e,n)&&(t[n]=e[n]);function i(){this.constructor=t}i.prototype=e.prototype,t.prototype=new i,t.__super__=e.prototype}(n,e),n.prototype.clone=function(){return Object.create(this)},n.prototype.toString=function(t){return this.options.writer.set(t).cdata(this)},n}()}).call(this)},function(t,e,n){(function(){var e,r,i,o,s,a={}.hasOwnProperty;s=n(1),o=s.isObject,i=s.isFunction,r=n(0),e=n(37),t.exports=function(t){function n(t,e,r){if(n.__super__.constructor.call(this,t),null==e)throw new Error("Missing element name");this.name=this.stringify.eleName(e),this.attributes={},null!=r&&this.attribute(r),t.isDocument&&(this.isRoot=!0,this.documentObject=t,t.rootObject=this)}return function(t,e){for(var n in e)a.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(n,r),n.prototype.clone=function(){var t,e,n,r;for(e in(n=Object.create(this)).isRoot&&(n.documentObject=null),n.attributes={},r=this.attributes)a.call(r,e)&&(t=r[e],n.attributes[e]=t.clone());return n.children=[],this.children.forEach(function(t){var e;return(e=t.clone()).parent=n,n.children.push(e)}),n},n.prototype.attribute=function(t,n){var r,s;if(null!=t&&(t=t.valueOf()),o(t))for(r in t)a.call(t,r)&&(s=t[r],this.attribute(r,s));else i(n)&&(n=n.apply()),this.options.skipNullAttributes&&null==n||(this.attributes[t]=new e(this,t,n));return this},n.prototype.removeAttribute=function(t){var e,n,r;if(null==t)throw new Error("Missing attribute name");if(t=t.valueOf(),Array.isArray(t))for(n=0,r=t.length;n<r;n++)e=t[n],delete this.attributes[e];else delete this.attributes[t];return this},n.prototype.toString=function(t){return this.options.writer.set(t).element(this)},n.prototype.att=function(t,e){return this.attribute(t,e)},n.prototype.a=function(t,e){return this.attribute(t,e)},n}()}).call(this)},function(t,e,n){"use strict";var r=n(6).Buffer,i=r.isEncoding||function(t){switch((t=""+t)&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function o(t){var e;switch(this.encoding=function(t){var e=function(t){if(!t)return"utf8";for(var e;;)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}(t);if("string"!=typeof e&&(r.isEncoding===i||!i(t)))throw new Error("Unknown encoding: "+t);return e||t}(t),this.encoding){case"utf16le":this.text=u,this.end=c,e=4;break;case"utf8":this.fillLast=a,e=4;break;case"base64":this.text=l,this.end=h,e=3;break;default:return this.write=f,void(this.end=p)}this.lastNeed=0,this.lastTotal=0,this.lastChar=r.allocUnsafe(e)}function s(t){return t<=127?0:t>>5==6?2:t>>4==14?3:t>>3==30?4:t>>6==2?-1:-2}function a(t){var e=this.lastTotal-this.lastNeed,n=function(t,e,n){if(128!=(192&e[0]))return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if(128!=(192&e[1]))return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&128!=(192&e[2]))return t.lastNeed=2,"�"}}(this,t);return void 0!==n?n:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function u(t,e){if((t.length-e)%2==0){var n=t.toString("utf16le",e);if(n){var r=n.charCodeAt(n.length-1);if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],n.slice(0,-1)}return n}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function c(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var n=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,n)}return e}function l(t,e){var n=(t.length-e)%3;return 0===n?t.toString("base64",e):(this.lastNeed=3-n,this.lastTotal=3,1===n?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-n))}function h(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function f(t){return t.toString(this.encoding)}function p(t){return t&&t.length?this.write(t):""}e.StringDecoder=o,o.prototype.write=function(t){if(0===t.length)return"";var e,n;if(this.lastNeed){if(void 0===(e=this.fillLast(t)))return"";n=this.lastNeed,this.lastNeed=0}else n=0;return n<t.length?e?e+this.text(t,n):this.text(t,n):e||""},o.prototype.end=function(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e},o.prototype.text=function(t,e){var n=function(t,e,n){var r=e.length-1;if(r<n)return 0;var i=s(e[r]);if(i>=0)return i>0&&(t.lastNeed=i-1),i;if(--r<n||-2===i)return 0;if((i=s(e[r]))>=0)return i>0&&(t.lastNeed=i-2),i;if(--r<n||-2===i)return 0;if((i=s(e[r]))>=0)return i>0&&(2===i?i=0:t.lastNeed=i-3),i;return 0}(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=n;var r=t.length-(n-this.lastNeed);return t.copy(this.lastChar,0,r),t.toString("utf8",e,r)},o.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},function(t,e,n){"use strict";(function(e,r,i){var o=n(7);function s(t){var e=this;this.next=null,this.entry=null,this.finish=function(){!function(t,e,n){var r=t.entry;t.entry=null;for(;r;){var i=r.callback;e.pendingcb--,i(n),r=r.next}e.corkedRequestsFree?e.corkedRequestsFree.next=t:e.corkedRequestsFree=t}(e,t)}}t.exports=_;var a,u=!e.browser&&["v0.10","v0.9."].indexOf(e.version.slice(0,5))>-1?r:o.nextTick;_.WritableState=m;var c=n(5);c.inherits=n(3);var l={deprecate:n(44)},h=n(32),f=n(6).Buffer,p=i.Uint8Array||function(){};var d,y=n(31);function g(){}function m(t,e){a=a||n(2),t=t||{};var r=e instanceof a;this.objectMode=!!t.objectMode,r&&(this.objectMode=this.objectMode||!!t.writableObjectMode);var i=t.highWaterMark,c=t.writableHighWaterMark,l=this.objectMode?16:16384;this.highWaterMark=i||0===i?i:r&&(c||0===c)?c:l,this.highWaterMark=Math.floor(this.highWaterMark),this.finalCalled=!1,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1,this.destroyed=!1;var h=!1===t.decodeStrings;this.decodeStrings=!h,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.corked=0,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){!function(t,e){var n=t._writableState,r=n.sync,i=n.writecb;if(function(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}(n),e)!function(t,e,n,r,i){--e.pendingcb,n?(o.nextTick(i,r),o.nextTick(x,t,e),t._writableState.errorEmitted=!0,t.emit("error",r)):(i(r),t._writableState.errorEmitted=!0,t.emit("error",r),x(t,e))}(t,n,r,e,i);else{var s=E(n);s||n.corked||n.bufferProcessing||!n.bufferedRequest||v(t,n),r?u(w,t,n,s,i):w(t,n,s,i)}}(e,t)},this.writecb=null,this.writelen=0,this.bufferedRequest=null,this.lastBufferedRequest=null,this.pendingcb=0,this.prefinished=!1,this.errorEmitted=!1,this.bufferedRequestCount=0,this.corkedRequestsFree=new s(this)}function _(t){if(a=a||n(2),!(d.call(_,this)||this instanceof a))return new _(t);this._writableState=new m(t,this),this.writable=!0,t&&("function"==typeof t.write&&(this._write=t.write),"function"==typeof t.writev&&(this._writev=t.writev),"function"==typeof t.destroy&&(this._destroy=t.destroy),"function"==typeof t.final&&(this._final=t.final)),h.call(this)}function b(t,e,n,r,i,o,s){e.writelen=r,e.writecb=s,e.writing=!0,e.sync=!0,n?t._writev(i,e.onwrite):t._write(i,o,e.onwrite),e.sync=!1}function w(t,e,n,r){n||function(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}(t,e),e.pendingcb--,r(),x(t,e)}function v(t,e){e.bufferProcessing=!0;var n=e.bufferedRequest;if(t._writev&&n&&n.next){var r=e.bufferedRequestCount,i=new Array(r),o=e.corkedRequestsFree;o.entry=n;for(var a=0,u=!0;n;)i[a]=n,n.isBuf||(u=!1),n=n.next,a+=1;i.allBuffers=u,b(t,e,!0,e.length,i,"",o.finish),e.pendingcb++,e.lastBufferedRequest=null,o.next?(e.corkedRequestsFree=o.next,o.next=null):e.corkedRequestsFree=new s(e),e.bufferedRequestCount=0}else{for(;n;){var c=n.chunk,l=n.encoding,h=n.callback;if(b(t,e,!1,e.objectMode?1:c.length,c,l,h),n=n.next,e.bufferedRequestCount--,e.writing)break}null===n&&(e.lastBufferedRequest=null)}e.bufferedRequest=n,e.bufferProcessing=!1}function E(t){return t.ending&&0===t.length&&null===t.bufferedRequest&&!t.finished&&!t.writing}function T(t,e){t._final(function(n){e.pendingcb--,n&&t.emit("error",n),e.prefinished=!0,t.emit("prefinish"),x(t,e)})}function x(t,e){var n=E(e);return n&&(!function(t,e){e.prefinished||e.finalCalled||("function"==typeof t._final?(e.pendingcb++,e.finalCalled=!0,o.nextTick(T,t,e)):(e.prefinished=!0,t.emit("prefinish")))}(t,e),0===e.pendingcb&&(e.finished=!0,t.emit("finish"))),n}c.inherits(_,h),m.prototype.getBuffer=function(){for(var t=this.bufferedRequest,e=[];t;)e.push(t),t=t.next;return e},function(){try{Object.defineProperty(m.prototype,"buffer",{get:l.deprecate(function(){return this.getBuffer()},"_writableState.buffer is deprecated. Use _writableState.getBuffer instead.","DEP0003")})}catch(t){}}(),"function"==typeof Symbol&&Symbol.hasInstance&&"function"==typeof Function.prototype[Symbol.hasInstance]?(d=Function.prototype[Symbol.hasInstance],Object.defineProperty(_,Symbol.hasInstance,{value:function(t){return!!d.call(this,t)||this===_&&(t&&t._writableState instanceof m)}})):d=function(t){return t instanceof this},_.prototype.pipe=function(){this.emit("error",new Error("Cannot pipe, not readable"))},_.prototype.write=function(t,e,n){var r,i=this._writableState,s=!1,a=!i.objectMode&&(r=t,f.isBuffer(r)||r instanceof p);return a&&!f.isBuffer(t)&&(t=function(t){return f.from(t)}(t)),"function"==typeof e&&(n=e,e=null),a?e="buffer":e||(e=i.defaultEncoding),"function"!=typeof n&&(n=g),i.ended?function(t,e){var n=new Error("write after end");t.emit("error",n),o.nextTick(e,n)}(this,n):(a||function(t,e,n,r){var i=!0,s=!1;return null===n?s=new TypeError("May not write null values to stream"):"string"==typeof n||void 0===n||e.objectMode||(s=new TypeError("Invalid non-string/buffer chunk")),s&&(t.emit("error",s),o.nextTick(r,s),i=!1),i}(this,i,t,n))&&(i.pendingcb++,s=function(t,e,n,r,i,o){if(!n){var s=function(t,e,n){t.objectMode||!1===t.decodeStrings||"string"!=typeof e||(e=f.from(e,n));return e}(e,r,i);r!==s&&(n=!0,i="buffer",r=s)}var a=e.objectMode?1:r.length;e.length+=a;var u=e.length<e.highWaterMark;u||(e.needDrain=!0);if(e.writing||e.corked){var c=e.lastBufferedRequest;e.lastBufferedRequest={chunk:r,encoding:i,isBuf:n,callback:o,next:null},c?c.next=e.lastBufferedRequest:e.bufferedRequest=e.lastBufferedRequest,e.bufferedRequestCount+=1}else b(t,e,!1,a,r,i,o);return u}(this,i,a,t,e,n)),s},_.prototype.cork=function(){this._writableState.corked++},_.prototype.uncork=function(){var t=this._writableState;t.corked&&(t.corked--,t.writing||t.corked||t.finished||t.bufferProcessing||!t.bufferedRequest||v(this,t))},_.prototype.setDefaultEncoding=function(t){if("string"==typeof t&&(t=t.toLowerCase()),!(["hex","utf8","utf-8","ascii","binary","base64","ucs2","ucs-2","utf16le","utf-16le","raw"].indexOf((t+"").toLowerCase())>-1))throw new TypeError("Unknown encoding: "+t);return this._writableState.defaultEncoding=t,this},Object.defineProperty(_.prototype,"writableHighWaterMark",{enumerable:!1,get:function(){return this._writableState.highWaterMark}}),_.prototype._write=function(t,e,n){n(new Error("_write() is not implemented"))},_.prototype._writev=null,_.prototype.end=function(t,e,n){var r=this._writableState;"function"==typeof t?(n=t,t=null,e=null):"function"==typeof e&&(n=e,e=null),null!==t&&void 0!==t&&this.write(t,e),r.corked&&(r.corked=1,this.uncork()),r.ending||r.finished||function(t,e,n){e.ending=!0,x(t,e),n&&(e.finished?o.nextTick(n):t.once("finish",n));e.ended=!0,t.writable=!1}(this,r,n)},Object.defineProperty(_.prototype,"destroyed",{get:function(){return void 0!==this._writableState&&this._writableState.destroyed},set:function(t){this._writableState&&(this._writableState.destroyed=t)}}),_.prototype.destroy=y.destroy,_.prototype._undestroy=y.undestroy,_.prototype._destroy=function(t,e){this.end(),e(t)}}).call(this,n(8),n(30).setImmediate,n(4))},function(t,e,n){(e=t.exports=n(33)).Stream=e,e.Readable=e,e.Writable=n(23),e.Duplex=n(2),e.Transform=n(29),e.PassThrough=n(43)},function(t,e,n){"use strict";(function(t){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var r=n(51),i=n(50),o=n(34);function s(){return u.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function a(t,e){if(s()<e)throw new RangeError("Invalid typed array length");return u.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e)).__proto__=u.prototype:(null===t&&(t=new u(e)),t.length=e),t}function u(t,e,n){if(!(u.TYPED_ARRAY_SUPPORT||this instanceof u))return new u(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return h(this,t)}return c(this,t,e,n)}function c(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?function(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r);u.TYPED_ARRAY_SUPPORT?(t=e).__proto__=u.prototype:t=f(t,e);return t}(t,e,n,r):"string"==typeof e?function(t,e,n){"string"==typeof n&&""!==n||(n="utf8");if(!u.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|d(e,n),i=(t=a(t,r)).write(e,n);i!==r&&(t=t.slice(0,i));return t}(t,e,n):function(t,e){if(u.isBuffer(e)){var n=0|p(e.length);return 0===(t=a(t,n)).length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||(r=e.length)!=r?a(t,0):f(t,e);if("Buffer"===e.type&&o(e.data))return f(t,e.data)}var r;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,e)}function l(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function h(t,e){if(l(e),t=a(t,e<0?0:0|p(e)),!u.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function f(t,e){var n=e.length<0?0:0|p(e.length);t=a(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function p(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function d(t,e){if(u.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return j(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Y(t).length;default:if(r)return j(t).length;e=(""+e).toLowerCase(),r=!0}}function y(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function g(t,e,n,r,i){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof e&&(e=u.from(e,r)),u.isBuffer(e))return 0===e.length?-1:m(t,e,n,r,i);if("number"==typeof e)return e&=255,u.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):m(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function m(t,e,n,r,i){var o,s=1,a=t.length,u=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;s=2,a/=2,u/=2,n/=2}function c(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}if(i){var l=-1;for(o=n;o<a;o++)if(c(t,o)===c(e,-1===l?0:o-l)){if(-1===l&&(l=o),o-l+1===u)return l*s}else-1!==l&&(o-=o-l),l=-1}else for(n+u>a&&(n=a-u),o=n;o>=0;o--){for(var h=!0,f=0;f<u;f++)if(c(t,o+f)!==c(e,f)){h=!1;break}if(h)return o}return-1}function _(t,e,n,r){n=Number(n)||0;var i=t.length-n;r?(r=Number(r))>i&&(r=i):r=i;var o=e.length;if(o%2!=0)throw new TypeError("Invalid hex string");r>o/2&&(r=o/2);for(var s=0;s<r;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[n+s]=a}return s}function b(t,e,n,r){return z(j(e,t.length-n),t,n,r)}function w(t,e,n,r){return z(function(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function v(t,e,n,r){return w(t,e,n,r)}function E(t,e,n,r){return z(Y(e),t,n,r)}function T(t,e,n,r){return z(function(t,e){for(var n,r,i,o=[],s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,i=n%256,o.push(i),o.push(r);return o}(e,t.length-n),t,n,r)}function x(t,e,n){return 0===e&&n===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,n))}function A(t,e,n){n=Math.min(t.length,n);for(var r=[],i=e;i<n;){var o,s,a,u,c=t[i],l=null,h=c>239?4:c>223?3:c>191?2:1;if(i+h<=n)switch(h){case 1:c<128&&(l=c);break;case 2:128==(192&(o=t[i+1]))&&(u=(31&c)<<6|63&o)>127&&(l=u);break;case 3:o=t[i+1],s=t[i+2],128==(192&o)&&128==(192&s)&&(u=(15&c)<<12|(63&o)<<6|63&s)>2047&&(u<55296||u>57343)&&(l=u);break;case 4:o=t[i+1],s=t[i+2],a=t[i+3],128==(192&o)&&128==(192&s)&&128==(192&a)&&(u=(15&c)<<18|(63&o)<<12|(63&s)<<6|63&a)>65535&&u<1114112&&(l=u)}null===l?(l=65533,h=1):l>65535&&(l-=65536,r.push(l>>>10&1023|55296),l=56320|1023&l),r.push(l),i+=h}return function(t){var e=t.length;if(e<=D)return String.fromCharCode.apply(String,t);var n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=D));return n}(r)}e.Buffer=u,e.SlowBuffer=function(t){+t!=t&&(t=0);return u.alloc(+t)},e.INSPECT_MAX_BYTES=50,u.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=s(),u.poolSize=8192,u._augment=function(t){return t.__proto__=u.prototype,t},u.from=function(t,e,n){return c(null,t,e,n)},u.TYPED_ARRAY_SUPPORT&&(u.prototype.__proto__=Uint8Array.prototype,u.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&u[Symbol.species]===u&&Object.defineProperty(u,Symbol.species,{value:null,configurable:!0})),u.alloc=function(t,e,n){return function(t,e,n,r){return l(e),e<=0?a(t,e):void 0!==n?"string"==typeof r?a(t,e).fill(n,r):a(t,e).fill(n):a(t,e)}(null,t,e,n)},u.allocUnsafe=function(t){return h(null,t)},u.allocUnsafeSlow=function(t){return h(null,t)},u.isBuffer=function(t){return!(null==t||!t._isBuffer)},u.compare=function(t,e){if(!u.isBuffer(t)||!u.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,i=0,o=Math.min(n,r);i<o;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},u.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},u.concat=function(t,e){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return u.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=u.allocUnsafe(e),i=0;for(n=0;n<t.length;++n){var s=t[n];if(!u.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,i),i+=s.length}return r},u.byteLength=d,u.prototype._isBuffer=!0,u.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)y(this,e,e+1);return this},u.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)y(this,e,e+3),y(this,e+1,e+2);return this},u.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)y(this,e,e+7),y(this,e+1,e+6),y(this,e+2,e+5),y(this,e+3,e+4);return this},u.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?A(this,0,t):function(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return S(this,e,n);case"utf8":case"utf-8":return A(this,e,n);case"ascii":return I(this,e,n);case"latin1":case"binary":return N(this,e,n);case"base64":return x(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return O(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}.apply(this,arguments)},u.prototype.equals=function(t){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===u.compare(this,t)},u.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},u.prototype.compare=function(t,e,n,r,i){if(!u.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,i>>>=0,this===t)return 0;for(var o=i-r,s=n-e,a=Math.min(o,s),c=this.slice(r,i),l=t.slice(e,n),h=0;h<a;++h)if(c[h]!==l[h]){o=c[h],s=l[h];break}return o<s?-1:s<o?1:0},u.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},u.prototype.indexOf=function(t,e,n){return g(this,t,e,n,!0)},u.prototype.lastIndexOf=function(t,e,n){return g(this,t,e,n,!1)},u.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var o=!1;;)switch(r){case"hex":return _(this,t,e,n);case"utf8":case"utf-8":return b(this,t,e,n);case"ascii":return w(this,t,e,n);case"latin1":case"binary":return v(this,t,e,n);case"base64":return E(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T(this,t,e,n);default:if(o)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),o=!0}},u.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var D=4096;function I(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function N(t,e,n){var r="";n=Math.min(t.length,n);for(var i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function S(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var i="",o=e;o<n;++o)i+=F(t[o]);return i}function O(t,e,n){for(var r=t.slice(e,n),i="",o=0;o<r.length;o+=2)i+=String.fromCharCode(r[o]+256*r[o+1]);return i}function C(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function P(t,e,n,r,i,o){if(!u.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<o)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function k(t,e,n,r){e<0&&(e=65535+e+1);for(var i=0,o=Math.min(t.length-n,2);i<o;++i)t[n+i]=(e&255<<8*(r?i:1-i))>>>8*(r?i:1-i)}function L(t,e,n,r){e<0&&(e=4294967295+e+1);for(var i=0,o=Math.min(t.length-n,4);i<o;++i)t[n+i]=e>>>8*(r?i:3-i)&255}function R(t,e,n,r,i,o){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function M(t,e,n,r,o){return o||R(t,0,n,4),i.write(t,e,n,r,23,4),n+4}function B(t,e,n,r,o){return o||R(t,0,n,8),i.write(t,e,n,r,52,8),n+8}u.prototype.slice=function(t,e){var n,r=this.length;if(t=~~t,e=void 0===e?r:~~e,t<0?(t+=r)<0&&(t=0):t>r&&(t=r),e<0?(e+=r)<0&&(e=0):e>r&&(e=r),e<t&&(e=t),u.TYPED_ARRAY_SUPPORT)(n=this.subarray(t,e)).__proto__=u.prototype;else{var i=e-t;n=new u(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+t]}return n},u.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||C(t,e,this.length);for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i;return r},u.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||C(t,e,this.length);for(var r=this[t+--e],i=1;e>0&&(i*=256);)r+=this[t+--e]*i;return r},u.prototype.readUInt8=function(t,e){return e||C(t,1,this.length),this[t]},u.prototype.readUInt16LE=function(t,e){return e||C(t,2,this.length),this[t]|this[t+1]<<8},u.prototype.readUInt16BE=function(t,e){return e||C(t,2,this.length),this[t]<<8|this[t+1]},u.prototype.readUInt32LE=function(t,e){return e||C(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},u.prototype.readUInt32BE=function(t,e){return e||C(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},u.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||C(t,e,this.length);for(var r=this[t],i=1,o=0;++o<e&&(i*=256);)r+=this[t+o]*i;return r>=(i*=128)&&(r-=Math.pow(2,8*e)),r},u.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||C(t,e,this.length);for(var r=e,i=1,o=this[t+--r];r>0&&(i*=256);)o+=this[t+--r]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*e)),o},u.prototype.readInt8=function(t,e){return e||C(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},u.prototype.readInt16LE=function(t,e){e||C(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt16BE=function(t,e){e||C(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},u.prototype.readInt32LE=function(t,e){return e||C(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},u.prototype.readInt32BE=function(t,e){return e||C(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},u.prototype.readFloatLE=function(t,e){return e||C(t,4,this.length),i.read(this,t,!0,23,4)},u.prototype.readFloatBE=function(t,e){return e||C(t,4,this.length),i.read(this,t,!1,23,4)},u.prototype.readDoubleLE=function(t,e){return e||C(t,8,this.length),i.read(this,t,!0,52,8)},u.prototype.readDoubleBE=function(t,e){return e||C(t,8,this.length),i.read(this,t,!1,52,8)},u.prototype.writeUIntLE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||P(this,t,e,n,Math.pow(2,8*n)-1,0);var i=1,o=0;for(this[e]=255&t;++o<n&&(i*=256);)this[e+o]=t/i&255;return e+n},u.prototype.writeUIntBE=function(t,e,n,r){(t=+t,e|=0,n|=0,r)||P(this,t,e,n,Math.pow(2,8*n)-1,0);var i=n-1,o=1;for(this[e+i]=255&t;--i>=0&&(o*=256);)this[e+i]=t/o&255;return e+n},u.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||P(this,t,e,1,255,0),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},u.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||P(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):k(this,t,e,!0),e+2},u.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||P(this,t,e,2,65535,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):k(this,t,e,!1),e+2},u.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||P(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):L(this,t,e,!0),e+4},u.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||P(this,t,e,4,4294967295,0),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},u.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);P(this,t,e,n,i-1,-i)}var o=0,s=1,a=0;for(this[e]=255&t;++o<n&&(s*=256);)t<0&&0===a&&0!==this[e+o-1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+n},u.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var i=Math.pow(2,8*n-1);P(this,t,e,n,i-1,-i)}var o=n-1,s=1,a=0;for(this[e+o]=255&t;--o>=0&&(s*=256);)t<0&&0===a&&0!==this[e+o+1]&&(a=1),this[e+o]=(t/s>>0)-a&255;return e+n},u.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||P(this,t,e,1,127,-128),u.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},u.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||P(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):k(this,t,e,!0),e+2},u.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||P(this,t,e,2,32767,-32768),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):k(this,t,e,!1),e+2},u.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||P(this,t,e,4,2147483647,-2147483648),u.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):L(this,t,e,!0),e+4},u.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||P(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),u.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):L(this,t,e,!1),e+4},u.prototype.writeFloatLE=function(t,e,n){return M(this,t,e,!0,n)},u.prototype.writeFloatBE=function(t,e,n){return M(this,t,e,!1,n)},u.prototype.writeDoubleLE=function(t,e,n){return B(this,t,e,!0,n)},u.prototype.writeDoubleBE=function(t,e,n){return B(this,t,e,!1,n)},u.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var i,o=r-n;if(this===t&&n<e&&e<r)for(i=o-1;i>=0;--i)t[i+e]=this[i+n];else if(o<1e3||!u.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+e]=this[i+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+o),e);return o},u.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!u.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;var o;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(o=e;o<n;++o)this[o]=t;else{var s=u.isBuffer(t)?t:j(new u(t,r).toString()),a=s.length;for(o=0;o<n-e;++o)this[o+e]=s[o%a]}return this};var U=/[^+\/0-9A-Za-z-_]/g;function F(t){return t<16?"0"+t.toString(16):t.toString(16)}function j(t,e){var n;e=e||1/0;for(var r=t.length,i=null,o=[],s=0;s<r;++s){if((n=t.charCodeAt(s))>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&o.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&o.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&o.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&o.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;o.push(n)}else if(n<2048){if((e-=2)<0)break;o.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;o.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;o.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return o}function Y(t){return r.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(U,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function z(t,e,n,r){for(var i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i];return i}}).call(this,n(4))},function(t,e,n){(function(){var e,r,i,o,s,a,u,c,l,h,f,p,d,y={}.hasOwnProperty;u=n(18),c=n(17),e=n(20),r=n(19),l=n(21),f=n(12),p=n(11),h=n(10),i=n(16),o=n(14),s=n(15),a=n(13),d=n(35),t.exports=function(t){function n(t){n.__super__.constructor.call(this,t)}return function(t,e){for(var n in e)y.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(n,d),n.prototype.document=function(t){var e,n,i,o,s;for(this.textispresent=!1,o="",n=0,i=(s=t.children).length;n<i;n++)e=s[n],o+=function(){switch(!1){case!(e instanceof u):return this.declaration(e);case!(e instanceof c):return this.docType(e);case!(e instanceof r):return this.comment(e);case!(e instanceof h):return this.processingInstruction(e);default:return this.element(e,0)}}.call(this);return this.pretty&&o.slice(-this.newline.length)===this.newline&&(o=o.slice(0,-this.newline.length)),o},n.prototype.attribute=function(t){return" "+t.name+'="'+t.value+'"'},n.prototype.cdata=function(t,e){return this.space(e)+"<![CDATA["+t.text+"]]>"+this.newline},n.prototype.comment=function(t,e){return this.space(e)+"\x3c!-- "+t.text+" --\x3e"+this.newline},n.prototype.declaration=function(t,e){var n;return n=this.space(e),n+='<?xml version="'+t.version+'"',null!=t.encoding&&(n+=' encoding="'+t.encoding+'"'),null!=t.standalone&&(n+=' standalone="'+t.standalone+'"'),n+=this.spacebeforeslash+"?>",n+=this.newline},n.prototype.docType=function(t,n){var u,c,l,f,p;if(n||(n=0),f=this.space(n),f+="<!DOCTYPE "+t.root().name,t.pubID&&t.sysID?f+=' PUBLIC "'+t.pubID+'" "'+t.sysID+'"':t.sysID&&(f+=' SYSTEM "'+t.sysID+'"'),t.children.length>0){for(f+=" [",f+=this.newline,c=0,l=(p=t.children).length;c<l;c++)u=p[c],f+=function(){switch(!1){case!(u instanceof i):return this.dtdAttList(u,n+1);case!(u instanceof o):return this.dtdElement(u,n+1);case!(u instanceof s):return this.dtdEntity(u,n+1);case!(u instanceof a):return this.dtdNotation(u,n+1);case!(u instanceof e):return this.cdata(u,n+1);case!(u instanceof r):return this.comment(u,n+1);case!(u instanceof h):return this.processingInstruction(u,n+1);default:throw new Error("Unknown DTD node type: "+u.constructor.name)}}.call(this);f+="]"}return f+=this.spacebeforeslash+">",f+=this.newline},n.prototype.element=function(t,n){var i,o,s,a,u,c,d,g,m,_,b,w,v;for(d in n||(n=0),v=!1,this.textispresent?(this.newline="",this.pretty=!1):(this.newline=this.newlinedefault,this.pretty=this.prettydefault),g="",g+=(w=this.space(n))+"<"+t.name,m=t.attributes)y.call(m,d)&&(i=m[d],g+=this.attribute(i));if(0===t.children.length||t.children.every(function(t){return""===t.value}))this.allowEmpty?g+="></"+t.name+">"+this.newline:g+=this.spacebeforeslash+"/>"+this.newline;else if(this.pretty&&1===t.children.length&&null!=t.children[0].value)g+=">",g+=t.children[0].value,g+="</"+t.name+">"+this.newline;else{if(this.dontprettytextnodes)for(s=0,u=(_=t.children).length;s<u;s++)if(null!=(o=_[s]).value){this.textispresent++,v=!0;break}for(this.textispresent&&(this.newline="",this.pretty=!1,w=this.space(n)),g+=">"+this.newline,a=0,c=(b=t.children).length;a<c;a++)o=b[a],g+=function(){switch(!1){case!(o instanceof e):return this.cdata(o,n+1);case!(o instanceof r):return this.comment(o,n+1);case!(o instanceof l):return this.element(o,n+1);case!(o instanceof f):return this.raw(o,n+1);case!(o instanceof p):return this.text(o,n+1);case!(o instanceof h):return this.processingInstruction(o,n+1);default:throw new Error("Unknown XML node type: "+o.constructor.name)}}.call(this);v&&this.textispresent--,this.textispresent||(this.newline=this.newlinedefault,this.pretty=this.prettydefault),g+=w+"</"+t.name+">"+this.newline}return g},n.prototype.processingInstruction=function(t,e){var n;return n=this.space(e)+"<?"+t.target,t.value&&(n+=" "+t.value),n+=this.spacebeforeslash+"?>"+this.newline},n.prototype.raw=function(t,e){return this.space(e)+t.value+this.newline},n.prototype.text=function(t,e){return this.space(e)+t.value+this.newline},n.prototype.dtdAttList=function(t,e){var n;return n=this.space(e)+"<!ATTLIST "+t.elementName+" "+t.attributeName+" "+t.attributeType,"#DEFAULT"!==t.defaultValueType&&(n+=" "+t.defaultValueType),t.defaultValue&&(n+=' "'+t.defaultValue+'"'),n+=this.spacebeforeslash+">"+this.newline},n.prototype.dtdElement=function(t,e){return this.space(e)+"<!ELEMENT "+t.name+" "+t.value+this.spacebeforeslash+">"+this.newline},n.prototype.dtdEntity=function(t,e){var n;return n=this.space(e)+"<!ENTITY",t.pe&&(n+=" %"),n+=" "+t.name,t.value?n+=' "'+t.value+'"':(t.pubID&&t.sysID?n+=' PUBLIC "'+t.pubID+'" "'+t.sysID+'"':t.sysID&&(n+=' SYSTEM "'+t.sysID+'"'),t.nData&&(n+=" NDATA "+t.nData)),n+=this.spacebeforeslash+">"+this.newline},n.prototype.dtdNotation=function(t,e){var n;return n=this.space(e)+"<!NOTATION "+t.name,t.pubID&&t.sysID?n+=' PUBLIC "'+t.pubID+'" "'+t.sysID+'"':t.pubID?n+=' PUBLIC "'+t.pubID+'"':t.sysID&&(n+=' SYSTEM "'+t.sysID+'"'),n+=this.spacebeforeslash+">"+this.newline},n.prototype.openNode=function(t,e){var n,r,i,o;if(e||(e=0),t instanceof l){for(r in i=this.space(e)+"<"+t.name,o=t.attributes)y.call(o,r)&&(n=o[r],i+=this.attribute(n));return i+=(t.children?">":"/>")+this.newline}return i=this.space(e)+"<!DOCTYPE "+t.rootNodeName,t.pubID&&t.sysID?i+=' PUBLIC "'+t.pubID+'" "'+t.sysID+'"':t.sysID&&(i+=' SYSTEM "'+t.sysID+'"'),i+=(t.children?" [":">")+this.newline},n.prototype.closeNode=function(t,e){switch(e||(e=0),!1){case!(t instanceof l):return this.space(e)+"</"+t.name+">"+this.newline;case!(t instanceof c):return this.space(e)+"]>"+this.newline}},n}()}).call(this)},function(t,e){(function(){e.defaults={.1:{explicitCharkey:!1,trim:!0,normalize:!0,normalizeTags:!1,attrkey:"@",charkey:"#",explicitArray:!1,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!1,validator:null,xmlns:!1,explicitChildren:!1,childkey:"@@",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,emptyTag:""},.2:{explicitCharkey:!1,trim:!1,normalize:!1,normalizeTags:!1,attrkey:"$",charkey:"_",explicitArray:!0,ignoreAttrs:!1,mergeAttrs:!1,explicitRoot:!0,validator:null,xmlns:!1,explicitChildren:!1,preserveChildrenOrder:!1,childkey:"$$",charsAsChildren:!1,includeWhiteChars:!1,async:!1,strict:!0,attrNameProcessors:null,attrValueProcessors:null,tagNameProcessors:null,valueProcessors:null,rootName:"root",xmldec:{version:"1.0",encoding:"UTF-8",standalone:!0},doctype:null,renderOpts:{pretty:!0,indent:"  ",newline:"\n"},headless:!1,chunkSize:1e4,emptyTag:"",cdata:!1}}}).call(this)},function(t,e){(function(){"use strict";var t;t=new RegExp(/(?!xmlns)^.*:/),e.normalize=function(t){return t.toLowerCase()},e.firstCharLowerCase=function(t){return t.charAt(0).toLowerCase()+t.slice(1)},e.stripPrefix=function(e){return e.replace(t,"")},e.parseNumbers=function(t){return isNaN(t)||(t=t%1==0?parseInt(t,10):parseFloat(t)),t},e.parseBooleans=function(t){return/^(?:true|false)$/i.test(t)&&(t="true"===t.toLowerCase()),t}}).call(this)},function(t,e,n){"use strict";t.exports=o;var r=n(2),i=n(5);function o(t){if(!(this instanceof o))return new o(t);r.call(this,t),this._transformState={afterTransform:function(t,e){var n=this._transformState;n.transforming=!1;var r=n.writecb;if(!r)return this.emit("error",new Error("write callback called multiple times"));n.writechunk=null,n.writecb=null,null!=e&&this.push(e),r(t);var i=this._readableState;i.reading=!1,(i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}.bind(this),needTransform:!1,transforming:!1,writecb:null,writechunk:null,writeencoding:null},this._readableState.needReadable=!0,this._readableState.sync=!1,t&&("function"==typeof t.transform&&(this._transform=t.transform),"function"==typeof t.flush&&(this._flush=t.flush)),this.on("prefinish",s)}function s(){var t=this;"function"==typeof this._flush?this._flush(function(e,n){a(t,e,n)}):a(this,null,null)}function a(t,e,n){if(e)return t.emit("error",e);if(null!=n&&t.push(n),t._writableState.length)throw new Error("Calling transform done when ws.length != 0");if(t._transformState.transforming)throw new Error("Calling transform done when still transforming");return t.push(null)}i.inherits=n(3),i.inherits(o,r),o.prototype.push=function(t,e){return this._transformState.needTransform=!1,r.prototype.push.call(this,t,e)},o.prototype._transform=function(t,e,n){throw new Error("_transform() is not implemented")},o.prototype._write=function(t,e,n){var r=this._transformState;if(r.writecb=n,r.writechunk=t,r.writeencoding=e,!r.transforming){var i=this._readableState;(r.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},o.prototype._read=function(t){var e=this._transformState;null!==e.writechunk&&e.writecb&&!e.transforming?(e.transforming=!0,this._transform(e.writechunk,e.writeencoding,e.afterTransform)):e.needTransform=!0},o.prototype._destroy=function(t,e){var n=this;r.prototype._destroy.call(this,t,function(t){e(t),n.emit("close")})}},function(t,e,n){(function(t){var r=void 0!==t&&t||"undefined"!=typeof self&&self||window,i=Function.prototype.apply;function o(t,e){this._id=t,this._clearFn=e}e.setTimeout=function(){return new o(i.call(setTimeout,r,arguments),clearTimeout)},e.setInterval=function(){return new o(i.call(setInterval,r,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(r,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(45),e.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==t&&t.setImmediate||this&&this.setImmediate,e.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==t&&t.clearImmediate||this&&this.clearImmediate}).call(this,n(4))},function(t,e,n){"use strict";var r=n(7);function i(t,e){t.emit("error",e)}t.exports={destroy:function(t,e){var n=this,o=this._readableState&&this._readableState.destroyed,s=this._writableState&&this._writableState.destroyed;return o||s?(e?e(t):!t||this._writableState&&this._writableState.errorEmitted||r.nextTick(i,this,t),this):(this._readableState&&(this._readableState.destroyed=!0),this._writableState&&(this._writableState.destroyed=!0),this._destroy(t||null,function(t){!e&&t?(r.nextTick(i,n,t),n._writableState&&(n._writableState.errorEmitted=!0)):e&&e(t)}),this)},undestroy:function(){this._readableState&&(this._readableState.destroyed=!1,this._readableState.reading=!1,this._readableState.ended=!1,this._readableState.endEmitted=!1),this._writableState&&(this._writableState.destroyed=!1,this._writableState.ended=!1,this._writableState.ending=!1,this._writableState.finished=!1,this._writableState.errorEmitted=!1)}}},function(t,e,n){t.exports=n(9).EventEmitter},function(t,e,n){"use strict";(function(e,r){var i=n(7);t.exports=b;var o,s=n(34);b.ReadableState=_;n(9).EventEmitter;var a=function(t,e){return t.listeners(e).length},u=n(32),c=n(6).Buffer,l=e.Uint8Array||function(){};var h=n(5);h.inherits=n(3);var f=n(48),p=void 0;p=f&&f.debuglog?f.debuglog("stream"):function(){};var d,y=n(47),g=n(31);h.inherits(b,u);var m=["error","close","destroy","pause","resume"];function _(t,e){o=o||n(2),t=t||{};var r=e instanceof o;this.objectMode=!!t.objectMode,r&&(this.objectMode=this.objectMode||!!t.readableObjectMode);var i=t.highWaterMark,s=t.readableHighWaterMark,a=this.objectMode?16:16384;this.highWaterMark=i||0===i?i:r&&(s||0===s)?s:a,this.highWaterMark=Math.floor(this.highWaterMark),this.buffer=new y,this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=null,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.resumeScheduled=!1,this.destroyed=!1,this.defaultEncoding=t.defaultEncoding||"utf8",this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,t.encoding&&(d||(d=n(22).StringDecoder),this.decoder=new d(t.encoding),this.encoding=t.encoding)}function b(t){if(o=o||n(2),!(this instanceof b))return new b(t);this._readableState=new _(t,this),this.readable=!0,t&&("function"==typeof t.read&&(this._read=t.read),"function"==typeof t.destroy&&(this._destroy=t.destroy)),u.call(this)}function w(t,e,n,r,i){var o,s=t._readableState;null===e?(s.reading=!1,function(t,e){if(e.ended)return;if(e.decoder){var n=e.decoder.end();n&&n.length&&(e.buffer.push(n),e.length+=e.objectMode?1:n.length)}e.ended=!0,x(t)}(t,s)):(i||(o=function(t,e){var n;r=e,c.isBuffer(r)||r instanceof l||"string"==typeof e||void 0===e||t.objectMode||(n=new TypeError("Invalid non-string/buffer chunk"));var r;return n}(s,e)),o?t.emit("error",o):s.objectMode||e&&e.length>0?("string"==typeof e||s.objectMode||Object.getPrototypeOf(e)===c.prototype||(e=function(t){return c.from(t)}(e)),r?s.endEmitted?t.emit("error",new Error("stream.unshift() after end event")):v(t,s,e,!0):s.ended?t.emit("error",new Error("stream.push() after EOF")):(s.reading=!1,s.decoder&&!n?(e=s.decoder.write(e),s.objectMode||0!==e.length?v(t,s,e,!1):D(t,s)):v(t,s,e,!1))):r||(s.reading=!1));return function(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}(s)}function v(t,e,n,r){e.flowing&&0===e.length&&!e.sync?(t.emit("data",n),t.read(0)):(e.length+=e.objectMode?1:n.length,r?e.buffer.unshift(n):e.buffer.push(n),e.needReadable&&x(t)),D(t,e)}Object.defineProperty(b.prototype,"destroyed",{get:function(){return void 0!==this._readableState&&this._readableState.destroyed},set:function(t){this._readableState&&(this._readableState.destroyed=t)}}),b.prototype.destroy=g.destroy,b.prototype._undestroy=g.undestroy,b.prototype._destroy=function(t,e){this.push(null),e(t)},b.prototype.push=function(t,e){var n,r=this._readableState;return r.objectMode?n=!0:"string"==typeof t&&((e=e||r.defaultEncoding)!==r.encoding&&(t=c.from(t,e),e=""),n=!0),w(this,t,e,!1,n)},b.prototype.unshift=function(t){return w(this,t,null,!0,!1)},b.prototype.isPaused=function(){return!1===this._readableState.flowing},b.prototype.setEncoding=function(t){return d||(d=n(22).StringDecoder),this._readableState.decoder=new d(t),this._readableState.encoding=t,this};var E=8388608;function T(t,e){return t<=0||0===e.length&&e.ended?0:e.objectMode?1:t!=t?e.flowing&&e.length?e.buffer.head.data.length:e.length:(t>e.highWaterMark&&(e.highWaterMark=function(t){return t>=E?t=E:(t--,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,t|=t>>>16,t++),t}(t)),t<=e.length?t:e.ended?e.length:(e.needReadable=!0,0))}function x(t){var e=t._readableState;e.needReadable=!1,e.emittedReadable||(p("emitReadable",e.flowing),e.emittedReadable=!0,e.sync?i.nextTick(A,t):A(t))}function A(t){p("emit readable"),t.emit("readable"),O(t)}function D(t,e){e.readingMore||(e.readingMore=!0,i.nextTick(I,t,e))}function I(t,e){for(var n=e.length;!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark&&(p("maybeReadMore read 0"),t.read(0),n!==e.length);)n=e.length;e.readingMore=!1}function N(t){p("readable nexttick read 0"),t.read(0)}function S(t,e){e.reading||(p("resume read 0"),t.read(0)),e.resumeScheduled=!1,e.awaitDrain=0,t.emit("resume"),O(t),e.flowing&&!e.reading&&t.read(0)}function O(t){var e=t._readableState;for(p("flow",e.flowing);e.flowing&&null!==t.read(););}function C(t,e){return 0===e.length?null:(e.objectMode?n=e.buffer.shift():!t||t>=e.length?(n=e.decoder?e.buffer.join(""):1===e.buffer.length?e.buffer.head.data:e.buffer.concat(e.length),e.buffer.clear()):n=function(t,e,n){var r;t<e.head.data.length?(r=e.head.data.slice(0,t),e.head.data=e.head.data.slice(t)):r=t===e.head.data.length?e.shift():n?function(t,e){var n=e.head,r=1,i=n.data;t-=i.length;for(;n=n.next;){var o=n.data,s=t>o.length?o.length:t;if(s===o.length?i+=o:i+=o.slice(0,t),0===(t-=s)){s===o.length?(++r,n.next?e.head=n.next:e.head=e.tail=null):(e.head=n,n.data=o.slice(s));break}++r}return e.length-=r,i}(t,e):function(t,e){var n=c.allocUnsafe(t),r=e.head,i=1;r.data.copy(n),t-=r.data.length;for(;r=r.next;){var o=r.data,s=t>o.length?o.length:t;if(o.copy(n,n.length-t,0,s),0===(t-=s)){s===o.length?(++i,r.next?e.head=r.next:e.head=e.tail=null):(e.head=r,r.data=o.slice(s));break}++i}return e.length-=i,n}(t,e);return r}(t,e.buffer,e.decoder),n);var n}function P(t){var e=t._readableState;if(e.length>0)throw new Error('"endReadable()" called on non-empty stream');e.endEmitted||(e.ended=!0,i.nextTick(k,e,t))}function k(t,e){t.endEmitted||0!==t.length||(t.endEmitted=!0,e.readable=!1,e.emit("end"))}function L(t,e){for(var n=0,r=t.length;n<r;n++)if(t[n]===e)return n;return-1}b.prototype.read=function(t){p("read",t),t=parseInt(t,10);var e=this._readableState,n=t;if(0!==t&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return p("read: emitReadable",e.length,e.ended),0===e.length&&e.ended?P(this):x(this),null;if(0===(t=T(t,e))&&e.ended)return 0===e.length&&P(this),null;var r,i=e.needReadable;return p("need readable",i),(0===e.length||e.length-t<e.highWaterMark)&&p("length less than watermark",i=!0),e.ended||e.reading?p("reading or ended",i=!1):i&&(p("do read"),e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1,e.reading||(t=T(n,e))),null===(r=t>0?C(t,e):null)?(e.needReadable=!0,t=0):e.length-=t,0===e.length&&(e.ended||(e.needReadable=!0),n!==t&&e.ended&&P(this)),null!==r&&this.emit("data",r),r},b.prototype._read=function(t){this.emit("error",new Error("_read() is not implemented"))},b.prototype.pipe=function(t,e){var n=this,o=this._readableState;switch(o.pipesCount){case 0:o.pipes=t;break;case 1:o.pipes=[o.pipes,t];break;default:o.pipes.push(t)}o.pipesCount+=1,p("pipe count=%d opts=%j",o.pipesCount,e);var u=(!e||!1!==e.end)&&t!==r.stdout&&t!==r.stderr?l:b;function c(e,r){p("onunpipe"),e===n&&r&&!1===r.hasUnpiped&&(r.hasUnpiped=!0,p("cleanup"),t.removeListener("close",m),t.removeListener("finish",_),t.removeListener("drain",h),t.removeListener("error",g),t.removeListener("unpipe",c),n.removeListener("end",l),n.removeListener("end",b),n.removeListener("data",y),f=!0,!o.awaitDrain||t._writableState&&!t._writableState.needDrain||h())}function l(){p("onend"),t.end()}o.endEmitted?i.nextTick(u):n.once("end",u),t.on("unpipe",c);var h=function(t){return function(){var e=t._readableState;p("pipeOnDrain",e.awaitDrain),e.awaitDrain&&e.awaitDrain--,0===e.awaitDrain&&a(t,"data")&&(e.flowing=!0,O(t))}}(n);t.on("drain",h);var f=!1;var d=!1;function y(e){p("ondata"),d=!1,!1!==t.write(e)||d||((1===o.pipesCount&&o.pipes===t||o.pipesCount>1&&-1!==L(o.pipes,t))&&!f&&(p("false write response, pause",n._readableState.awaitDrain),n._readableState.awaitDrain++,d=!0),n.pause())}function g(e){p("onerror",e),b(),t.removeListener("error",g),0===a(t,"error")&&t.emit("error",e)}function m(){t.removeListener("finish",_),b()}function _(){p("onfinish"),t.removeListener("close",m),b()}function b(){p("unpipe"),n.unpipe(t)}return n.on("data",y),function(t,e,n){if("function"==typeof t.prependListener)return t.prependListener(e,n);t._events&&t._events[e]?s(t._events[e])?t._events[e].unshift(n):t._events[e]=[n,t._events[e]]:t.on(e,n)}(t,"error",g),t.once("close",m),t.once("finish",_),t.emit("pipe",n),o.flowing||(p("pipe resume"),n.resume()),t},b.prototype.unpipe=function(t){var e=this._readableState,n={hasUnpiped:!1};if(0===e.pipesCount)return this;if(1===e.pipesCount)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,e.flowing=!1,t&&t.emit("unpipe",this,n),this);if(!t){var r=e.pipes,i=e.pipesCount;e.pipes=null,e.pipesCount=0,e.flowing=!1;for(var o=0;o<i;o++)r[o].emit("unpipe",this,n);return this}var s=L(e.pipes,t);return-1===s?this:(e.pipes.splice(s,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this,n),this)},b.prototype.on=function(t,e){var n=u.prototype.on.call(this,t,e);if("data"===t)!1!==this._readableState.flowing&&this.resume();else if("readable"===t){var r=this._readableState;r.endEmitted||r.readableListening||(r.readableListening=r.needReadable=!0,r.emittedReadable=!1,r.reading?r.length&&x(this):i.nextTick(N,this))}return n},b.prototype.addListener=b.prototype.on,b.prototype.resume=function(){var t=this._readableState;return t.flowing||(p("resume"),t.flowing=!0,function(t,e){e.resumeScheduled||(e.resumeScheduled=!0,i.nextTick(S,t,e))}(this,t)),this},b.prototype.pause=function(){return p("call pause flowing=%j",this._readableState.flowing),!1!==this._readableState.flowing&&(p("pause"),this._readableState.flowing=!1,this.emit("pause")),this},b.prototype.wrap=function(t){var e=this,n=this._readableState,r=!1;for(var i in t.on("end",function(){if(p("wrapped end"),n.decoder&&!n.ended){var t=n.decoder.end();t&&t.length&&e.push(t)}e.push(null)}),t.on("data",function(i){(p("wrapped data"),n.decoder&&(i=n.decoder.write(i)),!n.objectMode||null!==i&&void 0!==i)&&((n.objectMode||i&&i.length)&&(e.push(i)||(r=!0,t.pause())))}),t)void 0===this[i]&&"function"==typeof t[i]&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i));for(var o=0;o<m.length;o++)t.on(m[o],this.emit.bind(this,m[o]));return this._read=function(e){p("wrapped _read",e),r&&(r=!1,t.resume())},this},Object.defineProperty(b.prototype,"readableHighWaterMark",{enumerable:!1,get:function(){return this._readableState.highWaterMark}}),b._fromList=C}).call(this,n(4),n(8))},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e){(function(){var e={}.hasOwnProperty;t.exports=function(){function t(t){var n,r,i,o,s,a,u,c,l;for(n in t||(t={}),this.pretty=t.pretty||!1,this.allowEmpty=null!=(r=t.allowEmpty)&&r,this.pretty?(this.indent=null!=(i=t.indent)?i:"  ",this.newline=null!=(o=t.newline)?o:"\n",this.offset=null!=(s=t.offset)?s:0,this.dontprettytextnodes=null!=(a=t.dontprettytextnodes)?a:0):(this.indent="",this.newline="",this.offset=0,this.dontprettytextnodes=0),this.spacebeforeslash=null!=(u=t.spacebeforeslash)?u:"",!0===this.spacebeforeslash&&(this.spacebeforeslash=" "),this.newlinedefault=this.newline,this.prettydefault=this.pretty,c=t.writer||{})e.call(c,n)&&(l=c[n],this[n]=l)}return t.prototype.set=function(t){var n,r,i;for(n in t||(t={}),"pretty"in t&&(this.pretty=t.pretty),"allowEmpty"in t&&(this.allowEmpty=t.allowEmpty),this.pretty?(this.indent="indent"in t?t.indent:"  ",this.newline="newline"in t?t.newline:"\n",this.offset="offset"in t?t.offset:0,this.dontprettytextnodes="dontprettytextnodes"in t?t.dontprettytextnodes:0):(this.indent="",this.newline="",this.offset=0,this.dontprettytextnodes=0),this.spacebeforeslash="spacebeforeslash"in t?t.spacebeforeslash:"",!0===this.spacebeforeslash&&(this.spacebeforeslash=" "),this.newlinedefault=this.newline,this.prettydefault=this.pretty,r=t.writer||{})e.call(r,n)&&(i=r[n],this[n]=i);return this},t.prototype.space=function(t){var e;return this.pretty&&(e=(t||0)+this.offset+1)>0?new Array(e).join(this.indent):""},t}()}).call(this)},function(t,e){(function(){var e=function(t,e){return function(){return t.apply(e,arguments)}},n={}.hasOwnProperty;t.exports=function(){function t(t){var r,i,o;for(r in this.assertLegalChar=e(this.assertLegalChar,this),t||(t={}),this.noDoubleEncoding=t.noDoubleEncoding,i=t.stringify||{})n.call(i,r)&&(o=i[r],this[r]=o)}return t.prototype.eleName=function(t){return t=""+t||"",this.assertLegalChar(t)},t.prototype.eleText=function(t){return t=""+t||"",this.assertLegalChar(this.elEscape(t))},t.prototype.cdata=function(t){return t=(t=""+t||"").replace("]]>","]]]]><![CDATA[>"),this.assertLegalChar(t)},t.prototype.comment=function(t){if((t=""+t||"").match(/--/))throw new Error("Comment text cannot contain double-hypen: "+t);return this.assertLegalChar(t)},t.prototype.raw=function(t){return""+t||""},t.prototype.attName=function(t){return""+t||""},t.prototype.attValue=function(t){return t=""+t||"",this.attEscape(t)},t.prototype.insTarget=function(t){return""+t||""},t.prototype.insValue=function(t){if((t=""+t||"").match(/\?>/))throw new Error("Invalid processing instruction value: "+t);return t},t.prototype.xmlVersion=function(t){if(!(t=""+t||"").match(/1\.[0-9]+/))throw new Error("Invalid version number: "+t);return t},t.prototype.xmlEncoding=function(t){if(!(t=""+t||"").match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/))throw new Error("Invalid encoding: "+t);return t},t.prototype.xmlStandalone=function(t){return t?"yes":"no"},t.prototype.dtdPubID=function(t){return""+t||""},t.prototype.dtdSysID=function(t){return""+t||""},t.prototype.dtdElementValue=function(t){return""+t||""},t.prototype.dtdAttType=function(t){return""+t||""},t.prototype.dtdAttDefault=function(t){return null!=t?""+t||"":t},t.prototype.dtdEntityValue=function(t){return""+t||""},t.prototype.dtdNData=function(t){return""+t||""},t.prototype.convertAttKey="@",t.prototype.convertPIKey="?",t.prototype.convertTextKey="#text",t.prototype.convertCDataKey="#cdata",t.prototype.convertCommentKey="#comment",t.prototype.convertRawKey="#raw",t.prototype.assertLegalChar=function(t){var e;if(e=t.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/))throw new Error("Invalid character in string: "+t+" at index "+e.index);return t},t.prototype.elEscape=function(t){var e;return e=this.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,t.replace(e,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\r/g,"&#xD;")},t.prototype.attEscape=function(t){var e;return e=this.noDoubleEncoding?/(?!&\S+;)&/g:/&/g,t.replace(e,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;").replace(/\t/g,"&#x9;").replace(/\n/g,"&#xA;").replace(/\r/g,"&#xD;")},t}()}).call(this)},function(t,e){(function(){t.exports=function(){function t(t,e,n){if(this.options=t.options,this.stringify=t.stringify,null==e)throw new Error("Missing attribute name of element "+t.name);if(null==n)throw new Error("Missing attribute value for attribute "+e+" of element "+t.name);this.name=this.stringify.attName(e),this.value=this.stringify.attValue(n)}return t.prototype.clone=function(){return Object.create(this)},t.prototype.toString=function(t){return this.options.writer.set(t).attribute(this)},t}()}).call(this)},function(t,e){(function(){"use strict";e.stripBOM=function(t){return"\ufeff"===t[0]?t.substring(1):t}}).call(this)},function(t,e,n){t.exports=n(24).PassThrough},function(t,e,n){t.exports=n(24).Transform},function(t,e,n){t.exports=n(2)},function(t,e,n){t.exports=n(23)},function(t,e,n){"use strict";t.exports=o;var r=n(29),i=n(5);function o(t){if(!(this instanceof o))return new o(t);r.call(this,t)}i.inherits=n(3),i.inherits(o,r),o.prototype._transform=function(t,e,n){n(null,t)}},function(t,e,n){(function(e){function n(t){try{if(!e.localStorage)return!1}catch(t){return!1}var n=e.localStorage[t];return null!=n&&"true"===String(n).toLowerCase()}t.exports=function(t,e){if(n("noDeprecation"))return t;var r=!1;return function(){if(!r){if(n("throwDeprecation"))throw new Error(e);n("traceDeprecation")?console.trace(e):console.warn(e),r=!0}return t.apply(this,arguments)}}}).call(this,n(4))},function(t,e,n){(function(t,e){!function(t,n){"use strict";if(!t.setImmediate){var r,i,o,s,a,u=1,c={},l=!1,h=t.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(t);f=f&&f.setTimeout?f:t,"[object process]"==={}.toString.call(t.process)?r=function(t){e.nextTick(function(){d(t)})}:!function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?t.MessageChannel?((o=new MessageChannel).port1.onmessage=function(t){d(t.data)},r=function(t){o.port2.postMessage(t)}):h&&"onreadystatechange"in h.createElement("script")?(i=h.documentElement,r=function(t){var e=h.createElement("script");e.onreadystatechange=function(){d(t),e.onreadystatechange=null,i.removeChild(e),e=null},i.appendChild(e)}):r=function(t){setTimeout(d,0,t)}:(s="setImmediate$"+Math.random()+"$",a=function(e){e.source===t&&"string"==typeof e.data&&0===e.data.indexOf(s)&&d(+e.data.slice(s.length))},t.addEventListener?t.addEventListener("message",a,!1):t.attachEvent("onmessage",a),r=function(e){t.postMessage(s+e,"*")}),f.setImmediate=function(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var i={callback:t,args:e};return c[u]=i,r(u),u++},f.clearImmediate=p}function p(t){delete c[t]}function d(t){if(l)setTimeout(d,0,t);else{var e=c[t];if(e){l=!0;try{!function(t){var e=t.callback,r=t.args;switch(r.length){case 0:e();break;case 1:e(r[0]);break;case 2:e(r[0],r[1]);break;case 3:e(r[0],r[1],r[2]);break;default:e.apply(n,r)}}(e)}finally{p(t),l=!1}}}}}("undefined"==typeof self?void 0===t?this:t:self)}).call(this,n(4),n(8))},function(t,e){},function(t,e,n){"use strict";var r=n(6).Buffer,i=n(46);t.exports=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.head=null,this.tail=null,this.length=0}return t.prototype.push=function(t){var e={data:t,next:null};this.length>0?this.tail.next=e:this.head=e,this.tail=e,++this.length},t.prototype.unshift=function(t){var e={data:t,next:this.head};0===this.length&&(this.tail=e),this.head=e,++this.length},t.prototype.shift=function(){if(0!==this.length){var t=this.head.data;return 1===this.length?this.head=this.tail=null:this.head=this.head.next,--this.length,t}},t.prototype.clear=function(){this.head=this.tail=null,this.length=0},t.prototype.join=function(t){if(0===this.length)return"";for(var e=this.head,n=""+e.data;e=e.next;)n+=t+e.data;return n},t.prototype.concat=function(t){if(0===this.length)return r.alloc(0);if(1===this.length)return this.head.data;for(var e,n,i,o=r.allocUnsafe(t>>>0),s=this.head,a=0;s;)e=s.data,n=o,i=a,e.copy(n,i),a+=s.data.length,s=s.next;return o},t}(),i&&i.inspect&&i.inspect.custom&&(t.exports.prototype[i.inspect.custom]=function(){var t=i.inspect({length:this.length});return this.constructor.name+" "+t})},function(t,e){},function(t,e,n){t.exports=i;var r=n(9).EventEmitter;function i(){r.call(this)}n(3)(i,r),i.Readable=n(24),i.Writable=n(42),i.Duplex=n(41),i.Transform=n(40),i.PassThrough=n(39),i.Stream=i,i.prototype.pipe=function(t,e){var n=this;function i(e){t.writable&&!1===t.write(e)&&n.pause&&n.pause()}function o(){n.readable&&n.resume&&n.resume()}n.on("data",i),t.on("drain",o),t._isStdio||e&&!1===e.end||(n.on("end",a),n.on("close",u));var s=!1;function a(){s||(s=!0,t.end())}function u(){s||(s=!0,"function"==typeof t.destroy&&t.destroy())}function c(t){if(l(),0===r.listenerCount(this,"error"))throw t}function l(){n.removeListener("data",i),t.removeListener("drain",o),n.removeListener("end",a),n.removeListener("close",u),n.removeListener("error",c),t.removeListener("error",c),n.removeListener("end",l),n.removeListener("close",l),t.removeListener("close",l)}return n.on("error",c),t.on("error",c),n.on("end",l),n.on("close",l),t.on("close",l),t.emit("pipe",n),t}},function(t,e){e.read=function(t,e,n,r,i){var o,s,a=8*i-r-1,u=(1<<a)-1,c=u>>1,l=-7,h=n?i-1:0,f=n?-1:1,p=t[e+h];for(h+=f,o=p&(1<<-l)-1,p>>=-l,l+=a;l>0;o=256*o+t[e+h],h+=f,l-=8);for(s=o&(1<<-l)-1,o>>=-l,l+=r;l>0;s=256*s+t[e+h],h+=f,l-=8);if(0===o)o=1-c;else{if(o===u)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,r),o-=c}return(p?-1:1)*s*Math.pow(2,o-r)},e.write=function(t,e,n,r,i,o){var s,a,u,c=8*o-i-1,l=(1<<c)-1,h=l>>1,f=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,d=r?1:-1,y=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=l):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),(e+=s+h>=1?f/u:f*Math.pow(2,1-h))*u>=2&&(s++,u/=2),s+h>=l?(a=0,s=l):s+h>=1?(a=(e*u-1)*Math.pow(2,i),s+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),s=0));i>=8;t[n+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;t[n+p]=255&s,p+=d,s/=256,c-=8);t[n+p-d]|=128*y}},function(t,e,n){"use strict";e.byteLength=function(t){var e=c(t),n=e[0],r=e[1];return 3*(n+r)/4-r},e.toByteArray=function(t){for(var e,n=c(t),r=n[0],s=n[1],a=new o(function(t,e,n){return 3*(e+n)/4-n}(0,r,s)),u=0,l=s>0?r-4:r,h=0;h<l;h+=4)e=i[t.charCodeAt(h)]<<18|i[t.charCodeAt(h+1)]<<12|i[t.charCodeAt(h+2)]<<6|i[t.charCodeAt(h+3)],a[u++]=e>>16&255,a[u++]=e>>8&255,a[u++]=255&e;2===s&&(e=i[t.charCodeAt(h)]<<2|i[t.charCodeAt(h+1)]>>4,a[u++]=255&e);1===s&&(e=i[t.charCodeAt(h)]<<10|i[t.charCodeAt(h+1)]<<4|i[t.charCodeAt(h+2)]>>2,a[u++]=e>>8&255,a[u++]=255&e);return a},e.fromByteArray=function(t){for(var e,n=t.length,i=n%3,o=[],s=0,a=n-i;s<a;s+=16383)o.push(l(t,s,s+16383>a?a:s+16383));1===i?(e=t[n-1],o.push(r[e>>2]+r[e<<4&63]+"==")):2===i&&(e=(t[n-2]<<8)+t[n-1],o.push(r[e>>10]+r[e>>4&63]+r[e<<2&63]+"="));return o.join("")};for(var r=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,u=s.length;a<u;++a)r[a]=s[a],i[s.charCodeAt(a)]=a;function c(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function l(t,e,n){for(var i,o,s=[],a=e;a<n;a+=3)i=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),s.push(r[(o=i)>>18&63]+r[o>>12&63]+r[o>>6&63]+r[63&o]);return s.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},function(t,e,n){(function(t){!function(e){e.parser=function(t,e){return new o(t,e)},e.SAXParser=o,e.SAXStream=a,e.createStream=function(t,e){return new a(t,e)},e.MAX_BUFFER_LENGTH=65536;var r,i=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];function o(t,n){if(!(this instanceof o))return new o(t,n);!function(t){for(var e=0,n=i.length;e<n;e++)t[i[e]]=""}(this),this.q=this.c="",this.bufferCheckPosition=e.MAX_BUFFER_LENGTH,this.opt=n||{},this.opt.lowercase=this.opt.lowercase||this.opt.lowercasetags,this.looseCase=this.opt.lowercase?"toLowerCase":"toUpperCase",this.tags=[],this.closed=this.closedRoot=this.sawRoot=!1,this.tag=this.error=null,this.strict=!!t,this.noscript=!(!t&&!this.opt.noscript),this.state=A.BEGIN,this.strictEntities=this.opt.strictEntities,this.ENTITIES=this.strictEntities?Object.create(e.XML_ENTITIES):Object.create(e.ENTITIES),this.attribList=[],this.opt.xmlns&&(this.ns=Object.create(f)),this.trackPosition=!1!==this.opt.position,this.trackPosition&&(this.position=this.line=this.column=0),I(this,"onready")}e.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"],Object.create||(Object.create=function(t){function e(){}return e.prototype=t,new e}),Object.keys||(Object.keys=function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n);return e}),o.prototype={end:function(){P(this)},write:function(t){if(this.error)throw this.error;if(this.closed)return C(this,"Cannot write after close. Assign an onready handler.");if(null===t)return P(this);"object"==typeof t&&(t=t.toString());var n=0,r="";for(;r=Y(t,n++),this.c=r,r;)switch(this.trackPosition&&(this.position++,"\n"===r?(this.line++,this.column=0):this.column++),this.state){case A.BEGIN:if(this.state=A.BEGIN_WHITESPACE,"\ufeff"===r)continue;j(this,r);continue;case A.BEGIN_WHITESPACE:j(this,r);continue;case A.TEXT:if(this.sawRoot&&!this.closedRoot){for(var o=n-1;r&&"<"!==r&&"&"!==r;)(r=Y(t,n++))&&this.trackPosition&&(this.position++,"\n"===r?(this.line++,this.column=0):this.column++);this.textNode+=t.substring(o,n-1)}"<"!==r||this.sawRoot&&this.closedRoot&&!this.strict?(m(r)||this.sawRoot&&!this.closedRoot||k(this,"Text data outside of root node."),"&"===r?this.state=A.TEXT_ENTITY:this.textNode+=r):(this.state=A.OPEN_WAKA,this.startTagPosition=this.position);continue;case A.SCRIPT:"<"===r?this.state=A.SCRIPT_ENDING:this.script+=r;continue;case A.SCRIPT_ENDING:"/"===r?this.state=A.CLOSE_TAG:(this.script+="<"+r,this.state=A.SCRIPT);continue;case A.OPEN_WAKA:if("!"===r)this.state=A.SGML_DECL,this.sgmlDecl="";else if(m(r));else if(w(p,r))this.state=A.OPEN_TAG,this.tagName=r;else if("/"===r)this.state=A.CLOSE_TAG,this.tagName="";else if("?"===r)this.state=A.PROC_INST,this.procInstName=this.procInstBody="";else{if(k(this,"Unencoded <"),this.startTagPosition+1<this.position){var s=this.position-this.startTagPosition;r=new Array(s).join(" ")+r}this.textNode+="<"+r,this.state=A.TEXT}continue;case A.SGML_DECL:(this.sgmlDecl+r).toUpperCase()===u?(N(this,"onopencdata"),this.state=A.CDATA,this.sgmlDecl="",this.cdata=""):this.sgmlDecl+r==="--"?(this.state=A.COMMENT,this.comment="",this.sgmlDecl=""):(this.sgmlDecl+r).toUpperCase()===c?(this.state=A.DOCTYPE,(this.doctype||this.sawRoot)&&k(this,"Inappropriately located doctype declaration"),this.doctype="",this.sgmlDecl=""):">"===r?(N(this,"onsgmldeclaration",this.sgmlDecl),this.sgmlDecl="",this.state=A.TEXT):_(r)?(this.state=A.SGML_DECL_QUOTED,this.sgmlDecl+=r):this.sgmlDecl+=r;continue;case A.SGML_DECL_QUOTED:r===this.q&&(this.state=A.SGML_DECL,this.q=""),this.sgmlDecl+=r;continue;case A.DOCTYPE:">"===r?(this.state=A.TEXT,N(this,"ondoctype",this.doctype),this.doctype=!0):(this.doctype+=r,"["===r?this.state=A.DOCTYPE_DTD:_(r)&&(this.state=A.DOCTYPE_QUOTED,this.q=r));continue;case A.DOCTYPE_QUOTED:this.doctype+=r,r===this.q&&(this.q="",this.state=A.DOCTYPE);continue;case A.DOCTYPE_DTD:this.doctype+=r,"]"===r?this.state=A.DOCTYPE:_(r)&&(this.state=A.DOCTYPE_DTD_QUOTED,this.q=r);continue;case A.DOCTYPE_DTD_QUOTED:this.doctype+=r,r===this.q&&(this.state=A.DOCTYPE_DTD,this.q="");continue;case A.COMMENT:"-"===r?this.state=A.COMMENT_ENDING:this.comment+=r;continue;case A.COMMENT_ENDING:"-"===r?(this.state=A.COMMENT_ENDED,this.comment=O(this.opt,this.comment),this.comment&&N(this,"oncomment",this.comment),this.comment=""):(this.comment+="-"+r,this.state=A.COMMENT);continue;case A.COMMENT_ENDED:">"!==r?(k(this,"Malformed comment"),this.comment+="--"+r,this.state=A.COMMENT):this.state=A.TEXT;continue;case A.CDATA:"]"===r?this.state=A.CDATA_ENDING:this.cdata+=r;continue;case A.CDATA_ENDING:"]"===r?this.state=A.CDATA_ENDING_2:(this.cdata+="]"+r,this.state=A.CDATA);continue;case A.CDATA_ENDING_2:">"===r?(this.cdata&&N(this,"oncdata",this.cdata),N(this,"onclosecdata"),this.cdata="",this.state=A.TEXT):"]"===r?this.cdata+="]":(this.cdata+="]]"+r,this.state=A.CDATA);continue;case A.PROC_INST:"?"===r?this.state=A.PROC_INST_ENDING:m(r)?this.state=A.PROC_INST_BODY:this.procInstName+=r;continue;case A.PROC_INST_BODY:if(!this.procInstBody&&m(r))continue;"?"===r?this.state=A.PROC_INST_ENDING:this.procInstBody+=r;continue;case A.PROC_INST_ENDING:">"===r?(N(this,"onprocessinginstruction",{name:this.procInstName,body:this.procInstBody}),this.procInstName=this.procInstBody="",this.state=A.TEXT):(this.procInstBody+="?"+r,this.state=A.PROC_INST_BODY);continue;case A.OPEN_TAG:w(d,r)?this.tagName+=r:(L(this),">"===r?B(this):"/"===r?this.state=A.OPEN_TAG_SLASH:(m(r)||k(this,"Invalid character in tag name"),this.state=A.ATTRIB));continue;case A.OPEN_TAG_SLASH:">"===r?(B(this,!0),U(this)):(k(this,"Forward-slash in opening tag not followed by >"),this.state=A.ATTRIB);continue;case A.ATTRIB:if(m(r))continue;">"===r?B(this):"/"===r?this.state=A.OPEN_TAG_SLASH:w(p,r)?(this.attribName=r,this.attribValue="",this.state=A.ATTRIB_NAME):k(this,"Invalid attribute name");continue;case A.ATTRIB_NAME:"="===r?this.state=A.ATTRIB_VALUE:">"===r?(k(this,"Attribute without value"),this.attribValue=this.attribName,M(this),B(this)):m(r)?this.state=A.ATTRIB_NAME_SAW_WHITE:w(d,r)?this.attribName+=r:k(this,"Invalid attribute name");continue;case A.ATTRIB_NAME_SAW_WHITE:if("="===r)this.state=A.ATTRIB_VALUE;else{if(m(r))continue;k(this,"Attribute without value"),this.tag.attributes[this.attribName]="",this.attribValue="",N(this,"onattribute",{name:this.attribName,value:""}),this.attribName="",">"===r?B(this):w(p,r)?(this.attribName=r,this.state=A.ATTRIB_NAME):(k(this,"Invalid attribute name"),this.state=A.ATTRIB)}continue;case A.ATTRIB_VALUE:if(m(r))continue;_(r)?(this.q=r,this.state=A.ATTRIB_VALUE_QUOTED):(k(this,"Unquoted attribute value"),this.state=A.ATTRIB_VALUE_UNQUOTED,this.attribValue=r);continue;case A.ATTRIB_VALUE_QUOTED:if(r!==this.q){"&"===r?this.state=A.ATTRIB_VALUE_ENTITY_Q:this.attribValue+=r;continue}M(this),this.q="",this.state=A.ATTRIB_VALUE_CLOSED;continue;case A.ATTRIB_VALUE_CLOSED:m(r)?this.state=A.ATTRIB:">"===r?B(this):"/"===r?this.state=A.OPEN_TAG_SLASH:w(p,r)?(k(this,"No whitespace between attributes"),this.attribName=r,this.attribValue="",this.state=A.ATTRIB_NAME):k(this,"Invalid attribute name");continue;case A.ATTRIB_VALUE_UNQUOTED:if(!b(r)){"&"===r?this.state=A.ATTRIB_VALUE_ENTITY_U:this.attribValue+=r;continue}M(this),">"===r?B(this):this.state=A.ATTRIB;continue;case A.CLOSE_TAG:if(this.tagName)">"===r?U(this):w(d,r)?this.tagName+=r:this.script?(this.script+="</"+this.tagName,this.tagName="",this.state=A.SCRIPT):(m(r)||k(this,"Invalid tagname in closing tag"),this.state=A.CLOSE_TAG_SAW_WHITE);else{if(m(r))continue;v(p,r)?this.script?(this.script+="</"+r,this.state=A.SCRIPT):k(this,"Invalid tagname in closing tag."):this.tagName=r}continue;case A.CLOSE_TAG_SAW_WHITE:if(m(r))continue;">"===r?U(this):k(this,"Invalid characters in closing tag");continue;case A.TEXT_ENTITY:case A.ATTRIB_VALUE_ENTITY_Q:case A.ATTRIB_VALUE_ENTITY_U:var a,l;switch(this.state){case A.TEXT_ENTITY:a=A.TEXT,l="textNode";break;case A.ATTRIB_VALUE_ENTITY_Q:a=A.ATTRIB_VALUE_QUOTED,l="attribValue";break;case A.ATTRIB_VALUE_ENTITY_U:a=A.ATTRIB_VALUE_UNQUOTED,l="attribValue"}";"===r?(this[l]+=F(this),this.entity="",this.state=a):w(this.entity.length?g:y,r)?this.entity+=r:(k(this,"Invalid character in entity name"),this[l]+="&"+this.entity+r,this.entity="",this.state=a);continue;default:throw new Error(this,"Unknown state: "+this.state)}this.position>=this.bufferCheckPosition&&function(t){for(var n=Math.max(e.MAX_BUFFER_LENGTH,10),r=0,o=0,s=i.length;o<s;o++){var a=t[i[o]].length;if(a>n)switch(i[o]){case"textNode":S(t);break;case"cdata":N(t,"oncdata",t.cdata),t.cdata="";break;case"script":N(t,"onscript",t.script),t.script="";break;default:C(t,"Max buffer length exceeded: "+i[o])}r=Math.max(r,a)}var u=e.MAX_BUFFER_LENGTH-r;t.bufferCheckPosition=u+t.position}(this);return this}
/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){var t;S(t=this),""!==t.cdata&&(N(t,"oncdata",t.cdata),t.cdata=""),""!==t.script&&(N(t,"onscript",t.script),t.script="")}};try{r=n(49).Stream}catch(t){r=function(){}}var s=e.EVENTS.filter(function(t){return"error"!==t&&"end"!==t});function a(t,e){if(!(this instanceof a))return new a(t,e);r.apply(this),this._parser=new o(t,e),this.writable=!0,this.readable=!0;var n=this;this._parser.onend=function(){n.emit("end")},this._parser.onerror=function(t){n.emit("error",t),n._parser.error=null},this._decoder=null,s.forEach(function(t){Object.defineProperty(n,"on"+t,{get:function(){return n._parser["on"+t]},set:function(e){if(!e)return n.removeAllListeners(t),n._parser["on"+t]=e,e;n.on(t,e)},enumerable:!0,configurable:!1})})}a.prototype=Object.create(r.prototype,{constructor:{value:a}}),a.prototype.write=function(e){if("function"==typeof t&&"function"==typeof t.isBuffer&&t.isBuffer(e)){if(!this._decoder){var r=n(22).StringDecoder;this._decoder=new r("utf8")}e=this._decoder.write(e)}return this._parser.write(e.toString()),this.emit("data",e),!0},a.prototype.end=function(t){return t&&t.length&&this.write(t),this._parser.end(),!0},a.prototype.on=function(t,e){var n=this;return n._parser["on"+t]||-1===s.indexOf(t)||(n._parser["on"+t]=function(){var e=1===arguments.length?[arguments[0]]:Array.apply(null,arguments);e.splice(0,0,t),n.emit.apply(n,e)}),r.prototype.on.call(n,t,e)};var u="[CDATA[",c="DOCTYPE",l="http://www.w3.org/XML/1998/namespace",h="http://www.w3.org/2000/xmlns/",f={xml:l,xmlns:h},p=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,d=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,y=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,g=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function m(t){return" "===t||"\n"===t||"\r"===t||"\t"===t}function _(t){return'"'===t||"'"===t}function b(t){return">"===t||m(t)}function w(t,e){return t.test(e)}function v(t,e){return!w(t,e)}var E,T,x,A=0;for(var D in e.STATE={BEGIN:A++,BEGIN_WHITESPACE:A++,TEXT:A++,TEXT_ENTITY:A++,OPEN_WAKA:A++,SGML_DECL:A++,SGML_DECL_QUOTED:A++,DOCTYPE:A++,DOCTYPE_QUOTED:A++,DOCTYPE_DTD:A++,DOCTYPE_DTD_QUOTED:A++,COMMENT_STARTING:A++,COMMENT:A++,COMMENT_ENDING:A++,COMMENT_ENDED:A++,CDATA:A++,CDATA_ENDING:A++,CDATA_ENDING_2:A++,PROC_INST:A++,PROC_INST_BODY:A++,PROC_INST_ENDING:A++,OPEN_TAG:A++,OPEN_TAG_SLASH:A++,ATTRIB:A++,ATTRIB_NAME:A++,ATTRIB_NAME_SAW_WHITE:A++,ATTRIB_VALUE:A++,ATTRIB_VALUE_QUOTED:A++,ATTRIB_VALUE_CLOSED:A++,ATTRIB_VALUE_UNQUOTED:A++,ATTRIB_VALUE_ENTITY_Q:A++,ATTRIB_VALUE_ENTITY_U:A++,CLOSE_TAG:A++,CLOSE_TAG_SAW_WHITE:A++,SCRIPT:A++,SCRIPT_ENDING:A++},e.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},e.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(e.ENTITIES).forEach(function(t){var n=e.ENTITIES[t],r="number"==typeof n?String.fromCharCode(n):n;e.ENTITIES[t]=r}),e.STATE)e.STATE[e.STATE[D]]=D;function I(t,e,n){t[e]&&t[e](n)}function N(t,e,n){t.textNode&&S(t),I(t,e,n)}function S(t){t.textNode=O(t.opt,t.textNode),t.textNode&&I(t,"ontext",t.textNode),t.textNode=""}function O(t,e){return t.trim&&(e=e.trim()),t.normalize&&(e=e.replace(/\s+/g," ")),e}function C(t,e){return S(t),t.trackPosition&&(e+="\nLine: "+t.line+"\nColumn: "+t.column+"\nChar: "+t.c),e=new Error(e),t.error=e,I(t,"onerror",e),t}function P(t){return t.sawRoot&&!t.closedRoot&&k(t,"Unclosed root tag"),t.state!==A.BEGIN&&t.state!==A.BEGIN_WHITESPACE&&t.state!==A.TEXT&&C(t,"Unexpected end"),S(t),t.c="",t.closed=!0,I(t,"onend"),o.call(t,t.strict,t.opt),t}function k(t,e){if("object"!=typeof t||!(t instanceof o))throw new Error("bad call to strictFail");t.strict&&C(t,e)}function L(t){t.strict||(t.tagName=t.tagName[t.looseCase]());var e=t.tags[t.tags.length-1]||t,n=t.tag={name:t.tagName,attributes:{}};t.opt.xmlns&&(n.ns=e.ns),t.attribList.length=0,N(t,"onopentagstart",n)}function R(t,e){var n=t.indexOf(":")<0?["",t]:t.split(":"),r=n[0],i=n[1];return e&&"xmlns"===t&&(r="xmlns",i=""),{prefix:r,local:i}}function M(t){if(t.strict||(t.attribName=t.attribName[t.looseCase]()),-1!==t.attribList.indexOf(t.attribName)||t.tag.attributes.hasOwnProperty(t.attribName))t.attribName=t.attribValue="";else{if(t.opt.xmlns){var e=R(t.attribName,!0),n=e.prefix,r=e.local;if("xmlns"===n)if("xml"===r&&t.attribValue!==l)k(t,"xml: prefix must be bound to "+l+"\nActual: "+t.attribValue);else if("xmlns"===r&&t.attribValue!==h)k(t,"xmlns: prefix must be bound to "+h+"\nActual: "+t.attribValue);else{var i=t.tag,o=t.tags[t.tags.length-1]||t;i.ns===o.ns&&(i.ns=Object.create(o.ns)),i.ns[r]=t.attribValue}t.attribList.push([t.attribName,t.attribValue])}else t.tag.attributes[t.attribName]=t.attribValue,N(t,"onattribute",{name:t.attribName,value:t.attribValue});t.attribName=t.attribValue=""}}function B(t,e){if(t.opt.xmlns){var n=t.tag,r=R(t.tagName);n.prefix=r.prefix,n.local=r.local,n.uri=n.ns[r.prefix]||"",n.prefix&&!n.uri&&(k(t,"Unbound namespace prefix: "+JSON.stringify(t.tagName)),n.uri=r.prefix);var i=t.tags[t.tags.length-1]||t;n.ns&&i.ns!==n.ns&&Object.keys(n.ns).forEach(function(e){N(t,"onopennamespace",{prefix:e,uri:n.ns[e]})});for(var o=0,s=t.attribList.length;o<s;o++){var a=t.attribList[o],u=a[0],c=a[1],l=R(u,!0),h=l.prefix,f=l.local,p=""===h?"":n.ns[h]||"",d={name:u,value:c,prefix:h,local:f,uri:p};h&&"xmlns"!==h&&!p&&(k(t,"Unbound namespace prefix: "+JSON.stringify(h)),d.uri=h),t.tag.attributes[u]=d,N(t,"onattribute",d)}t.attribList.length=0}t.tag.isSelfClosing=!!e,t.sawRoot=!0,t.tags.push(t.tag),N(t,"onopentag",t.tag),e||(t.noscript||"script"!==t.tagName.toLowerCase()?t.state=A.TEXT:t.state=A.SCRIPT,t.tag=null,t.tagName=""),t.attribName=t.attribValue="",t.attribList.length=0}function U(t){if(!t.tagName)return k(t,"Weird empty close tag."),t.textNode+="</>",void(t.state=A.TEXT);if(t.script){if("script"!==t.tagName)return t.script+="</"+t.tagName+">",t.tagName="",void(t.state=A.SCRIPT);N(t,"onscript",t.script),t.script=""}var e=t.tags.length,n=t.tagName;t.strict||(n=n[t.looseCase]());for(var r=n;e--;){if(t.tags[e].name===r)break;k(t,"Unexpected close tag")}if(e<0)return k(t,"Unmatched closing tag: "+t.tagName),t.textNode+="</"+t.tagName+">",void(t.state=A.TEXT);t.tagName=n;for(var i=t.tags.length;i-- >e;){var o=t.tag=t.tags.pop();t.tagName=t.tag.name,N(t,"onclosetag",t.tagName);var s={};for(var a in o.ns)s[a]=o.ns[a];var u=t.tags[t.tags.length-1]||t;t.opt.xmlns&&o.ns!==u.ns&&Object.keys(o.ns).forEach(function(e){var n=o.ns[e];N(t,"onclosenamespace",{prefix:e,uri:n})})}0===e&&(t.closedRoot=!0),t.tagName=t.attribValue=t.attribName="",t.attribList.length=0,t.state=A.TEXT}function F(t){var e,n=t.entity,r=n.toLowerCase(),i="";return t.ENTITIES[n]?t.ENTITIES[n]:t.ENTITIES[r]?t.ENTITIES[r]:("#"===(n=r).charAt(0)&&("x"===n.charAt(1)?(n=n.slice(2),i=(e=parseInt(n,16)).toString(16)):(n=n.slice(1),i=(e=parseInt(n,10)).toString(10))),n=n.replace(/^0+/,""),isNaN(e)||i.toLowerCase()!==n?(k(t,"Invalid character entity"),"&"+t.entity+";"):String.fromCodePoint(e))}function j(t,e){"<"===e?(t.state=A.OPEN_WAKA,t.startTagPosition=t.position):m(e)||(k(t,"Non-whitespace before first tag."),t.textNode=e,t.state=A.TEXT)}function Y(t,e){var n="";return e<t.length&&(n=t.charAt(e)),n}A=e.STATE,String.fromCodePoint||(E=String.fromCharCode,T=Math.floor,x=function(){var t,e,n=[],r=-1,i=arguments.length;if(!i)return"";for(var o="";++r<i;){var s=Number(arguments[r]);if(!isFinite(s)||s<0||s>1114111||T(s)!==s)throw RangeError("Invalid code point: "+s);s<=65535?n.push(s):(t=55296+((s-=65536)>>10),e=s%1024+56320,n.push(t,e)),(r+1===i||n.length>16384)&&(o+=E.apply(null,n),n.length=0)}return o},Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:x,configurable:!0,writable:!0}):String.fromCodePoint=x)}(e)}).call(this,n(25).Buffer)},function(t,e,n){(function(){"use strict";var t,r,i,o,s,a,u,c,l=function(t,e){return function(){return t.apply(e,arguments)}},h={}.hasOwnProperty;u=n(52),i=n(9),t=n(38),a=n(28),c=n(30).setImmediate,r=n(27).defaults,o=function(t){return"object"==typeof t&&null!=t&&0===Object.keys(t).length},s=function(t,e,n){var r,i;for(r=0,i=t.length;r<i;r++)e=(0,t[r])(e,n);return e},e.Parser=function(n){function f(t){var n,i,o;if(this.parseString=l(this.parseString,this),this.reset=l(this.reset,this),this.assignOrPush=l(this.assignOrPush,this),this.processAsync=l(this.processAsync,this),!(this instanceof e.Parser))return new e.Parser(t);for(n in this.options={},i=r[.2])h.call(i,n)&&(o=i[n],this.options[n]=o);for(n in t)h.call(t,n)&&(o=t[n],this.options[n]=o);this.options.xmlns&&(this.options.xmlnskey=this.options.attrkey+"ns"),this.options.normalizeTags&&(this.options.tagNameProcessors||(this.options.tagNameProcessors=[]),this.options.tagNameProcessors.unshift(a.normalize)),this.reset()}return function(t,e){for(var n in e)h.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(f,i.EventEmitter),f.prototype.processAsync=function(){var t,e;try{return this.remaining.length<=this.options.chunkSize?(t=this.remaining,this.remaining="",this.saxParser=this.saxParser.write(t),this.saxParser.close()):(t=this.remaining.substr(0,this.options.chunkSize),this.remaining=this.remaining.substr(this.options.chunkSize,this.remaining.length),this.saxParser=this.saxParser.write(t),c(this.processAsync))}catch(t){if(e=t,!this.saxParser.errThrown)return this.saxParser.errThrown=!0,this.emit(e)}},f.prototype.assignOrPush=function(t,e,n){return e in t?(t[e]instanceof Array||(t[e]=[t[e]]),t[e].push(n)):this.options.explicitArray?t[e]=[n]:t[e]=n},f.prototype.reset=function(){var t,e,n,r,i;return this.removeAllListeners(),this.saxParser=u.parser(this.options.strict,{trim:!1,normalize:!1,xmlns:this.options.xmlns}),this.saxParser.errThrown=!1,this.saxParser.onerror=(i=this,function(t){if(i.saxParser.resume(),!i.saxParser.errThrown)return i.saxParser.errThrown=!0,i.emit("error",t)}),this.saxParser.onend=function(t){return function(){if(!t.saxParser.ended)return t.saxParser.ended=!0,t.emit("end",t.resultObject)}}(this),this.saxParser.ended=!1,this.EXPLICIT_CHARKEY=this.options.explicitCharkey,this.resultObject=null,r=[],t=this.options.attrkey,e=this.options.charkey,this.saxParser.onopentag=function(n){return function(i){var o,a,u,c,l;if((u={})[e]="",!n.options.ignoreAttrs)for(o in l=i.attributes)h.call(l,o)&&(t in u||n.options.mergeAttrs||(u[t]={}),a=n.options.attrValueProcessors?s(n.options.attrValueProcessors,i.attributes[o],o):i.attributes[o],c=n.options.attrNameProcessors?s(n.options.attrNameProcessors,o):o,n.options.mergeAttrs?n.assignOrPush(u,c,a):u[t][c]=a);return u["#name"]=n.options.tagNameProcessors?s(n.options.tagNameProcessors,i.name):i.name,n.options.xmlns&&(u[n.options.xmlnskey]={uri:i.uri,local:i.local}),r.push(u)}}(this),this.saxParser.onclosetag=function(t){return function(){var n,i,a,u,c,l,f,p,d,y;if(l=r.pop(),c=l["#name"],t.options.explicitChildren&&t.options.preserveChildrenOrder||delete l["#name"],!0===l.cdata&&(n=l.cdata,delete l.cdata),d=r[r.length-1],l[e].match(/^\s*$/)&&!n?(i=l[e],delete l[e]):(t.options.trim&&(l[e]=l[e].trim()),t.options.normalize&&(l[e]=l[e].replace(/\s{2,}/g," ").trim()),l[e]=t.options.valueProcessors?s(t.options.valueProcessors,l[e],c):l[e],1===Object.keys(l).length&&e in l&&!t.EXPLICIT_CHARKEY&&(l=l[e])),o(l)&&(l=""!==t.options.emptyTag?t.options.emptyTag:i),null!=t.options.validator&&(y="/"+function(){var t,e,n;for(n=[],t=0,e=r.length;t<e;t++)u=r[t],n.push(u["#name"]);return n}().concat(c).join("/"),function(){var e;try{l=t.options.validator(y,d&&d[c],l)}catch(n){return e=n,t.emit("error",e)}}()),t.options.explicitChildren&&!t.options.mergeAttrs&&"object"==typeof l)if(t.options.preserveChildrenOrder){if(d){for(a in d[t.options.childkey]=d[t.options.childkey]||[],f={},l)h.call(l,a)&&(f[a]=l[a]);d[t.options.childkey].push(f),delete l["#name"],1===Object.keys(l).length&&e in l&&!t.EXPLICIT_CHARKEY&&(l=l[e])}}else u={},t.options.attrkey in l&&(u[t.options.attrkey]=l[t.options.attrkey],delete l[t.options.attrkey]),!t.options.charsAsChildren&&t.options.charkey in l&&(u[t.options.charkey]=l[t.options.charkey],delete l[t.options.charkey]),Object.getOwnPropertyNames(l).length>0&&(u[t.options.childkey]=l),l=u;return r.length>0?t.assignOrPush(d,c,l):(t.options.explicitRoot&&(p=l,(l={})[c]=p),t.resultObject=l,t.saxParser.ended=!0,t.emit("end",t.resultObject))}}(this),n=function(t){return function(n){var i,o;if(o=r[r.length-1])return o[e]+=n,t.options.explicitChildren&&t.options.preserveChildrenOrder&&t.options.charsAsChildren&&(t.options.includeWhiteChars||""!==n.replace(/\\n/g,"").trim())&&(o[t.options.childkey]=o[t.options.childkey]||[],(i={"#name":"__text__"})[e]=n,t.options.normalize&&(i[e]=i[e].replace(/\s{2,}/g," ").trim()),o[t.options.childkey].push(i)),o}}(this),this.saxParser.ontext=n,this.saxParser.oncdata=function(t){var e;if(e=n(t))return e.cdata=!0}},f.prototype.parseString=function(e,n){var r;null!=n&&"function"==typeof n&&(this.on("end",function(t){return this.reset(),n(null,t)}),this.on("error",function(t){return this.reset(),n(t)}));try{return""===(e=e.toString()).trim()?(this.emit("end",null),!0):(e=t.stripBOM(e),this.options.async?(this.remaining=e,c(this.processAsync),this.saxParser):this.saxParser.write(e).close())}catch(t){if(r=t,!this.saxParser.errThrown&&!this.saxParser.ended)return this.emit("error",r),this.saxParser.errThrown=!0;if(this.saxParser.ended)throw r}},f}(),e.parseString=function(t,n,r){var i,o;return null!=r?("function"==typeof r&&(i=r),"object"==typeof n&&(o=n)):("function"==typeof n&&(i=n),o={}),new e.Parser(o).parseString(t,i)}}).call(this)},function(t,e,n){(function(){var e,r,i,o,s,a,u,c,l,h,f,p,d,y={}.hasOwnProperty;u=n(18),c=n(17),e=n(20),r=n(19),l=n(21),f=n(12),p=n(11),h=n(10),i=n(16),o=n(14),s=n(15),a=n(13),d=n(35),t.exports=function(t){function n(t,e){n.__super__.constructor.call(this,e),this.stream=t}return function(t,e){for(var n in e)y.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(n,d),n.prototype.document=function(t){var e,n,i,o,s,a,l,f;for(n=0,o=(a=t.children).length;n<o;n++)(e=a[n]).isLastRootNode=!1;for(t.children[t.children.length-1].isLastRootNode=!0,f=[],i=0,s=(l=t.children).length;i<s;i++)switch(e=l[i],!1){case!(e instanceof u):f.push(this.declaration(e));break;case!(e instanceof c):f.push(this.docType(e));break;case!(e instanceof r):f.push(this.comment(e));break;case!(e instanceof h):f.push(this.processingInstruction(e));break;default:f.push(this.element(e))}return f},n.prototype.attribute=function(t){return this.stream.write(" "+t.name+'="'+t.value+'"')},n.prototype.cdata=function(t,e){return this.stream.write(this.space(e)+"<![CDATA["+t.text+"]]>"+this.endline(t))},n.prototype.comment=function(t,e){return this.stream.write(this.space(e)+"\x3c!-- "+t.text+" --\x3e"+this.endline(t))},n.prototype.declaration=function(t,e){return this.stream.write(this.space(e)),this.stream.write('<?xml version="'+t.version+'"'),null!=t.encoding&&this.stream.write(' encoding="'+t.encoding+'"'),null!=t.standalone&&this.stream.write(' standalone="'+t.standalone+'"'),this.stream.write(this.spacebeforeslash+"?>"),this.stream.write(this.endline(t))},n.prototype.docType=function(t,n){var u,c,l,f;if(n||(n=0),this.stream.write(this.space(n)),this.stream.write("<!DOCTYPE "+t.root().name),t.pubID&&t.sysID?this.stream.write(' PUBLIC "'+t.pubID+'" "'+t.sysID+'"'):t.sysID&&this.stream.write(' SYSTEM "'+t.sysID+'"'),t.children.length>0){for(this.stream.write(" ["),this.stream.write(this.endline(t)),c=0,l=(f=t.children).length;c<l;c++)switch(u=f[c],!1){case!(u instanceof i):this.dtdAttList(u,n+1);break;case!(u instanceof o):this.dtdElement(u,n+1);break;case!(u instanceof s):this.dtdEntity(u,n+1);break;case!(u instanceof a):this.dtdNotation(u,n+1);break;case!(u instanceof e):this.cdata(u,n+1);break;case!(u instanceof r):this.comment(u,n+1);break;case!(u instanceof h):this.processingInstruction(u,n+1);break;default:throw new Error("Unknown DTD node type: "+u.constructor.name)}this.stream.write("]")}return this.stream.write(this.spacebeforeslash+">"),this.stream.write(this.endline(t))},n.prototype.element=function(t,n){var i,o,s,a,u,c,d,g;for(u in n||(n=0),g=this.space(n),this.stream.write(g+"<"+t.name),c=t.attributes)y.call(c,u)&&(i=c[u],this.attribute(i));if(0===t.children.length||t.children.every(function(t){return""===t.value}))this.allowEmpty?this.stream.write("></"+t.name+">"):this.stream.write(this.spacebeforeslash+"/>");else if(this.pretty&&1===t.children.length&&null!=t.children[0].value)this.stream.write(">"),this.stream.write(t.children[0].value),this.stream.write("</"+t.name+">");else{for(this.stream.write(">"+this.newline),s=0,a=(d=t.children).length;s<a;s++)switch(o=d[s],!1){case!(o instanceof e):this.cdata(o,n+1);break;case!(o instanceof r):this.comment(o,n+1);break;case!(o instanceof l):this.element(o,n+1);break;case!(o instanceof f):this.raw(o,n+1);break;case!(o instanceof p):this.text(o,n+1);break;case!(o instanceof h):this.processingInstruction(o,n+1);break;default:throw new Error("Unknown XML node type: "+o.constructor.name)}this.stream.write(g+"</"+t.name+">")}return this.stream.write(this.endline(t))},n.prototype.processingInstruction=function(t,e){return this.stream.write(this.space(e)+"<?"+t.target),t.value&&this.stream.write(" "+t.value),this.stream.write(this.spacebeforeslash+"?>"+this.endline(t))},n.prototype.raw=function(t,e){return this.stream.write(this.space(e)+t.value+this.endline(t))},n.prototype.text=function(t,e){return this.stream.write(this.space(e)+t.value+this.endline(t))},n.prototype.dtdAttList=function(t,e){return this.stream.write(this.space(e)+"<!ATTLIST "+t.elementName+" "+t.attributeName+" "+t.attributeType),"#DEFAULT"!==t.defaultValueType&&this.stream.write(" "+t.defaultValueType),t.defaultValue&&this.stream.write(' "'+t.defaultValue+'"'),this.stream.write(this.spacebeforeslash+">"+this.endline(t))},n.prototype.dtdElement=function(t,e){return this.stream.write(this.space(e)+"<!ELEMENT "+t.name+" "+t.value),this.stream.write(this.spacebeforeslash+">"+this.endline(t))},n.prototype.dtdEntity=function(t,e){return this.stream.write(this.space(e)+"<!ENTITY"),t.pe&&this.stream.write(" %"),this.stream.write(" "+t.name),t.value?this.stream.write(' "'+t.value+'"'):(t.pubID&&t.sysID?this.stream.write(' PUBLIC "'+t.pubID+'" "'+t.sysID+'"'):t.sysID&&this.stream.write(' SYSTEM "'+t.sysID+'"'),t.nData&&this.stream.write(" NDATA "+t.nData)),this.stream.write(this.spacebeforeslash+">"+this.endline(t))},n.prototype.dtdNotation=function(t,e){return this.stream.write(this.space(e)+"<!NOTATION "+t.name),t.pubID&&t.sysID?this.stream.write(' PUBLIC "'+t.pubID+'" "'+t.sysID+'"'):t.pubID?this.stream.write(' PUBLIC "'+t.pubID+'"'):t.sysID&&this.stream.write(' SYSTEM "'+t.sysID+'"'),this.stream.write(this.spacebeforeslash+">"+this.endline(t))},n.prototype.endline=function(t){return t.isLastRootNode?"":this.newline},n}()}).call(this)},function(t,e,n){(function(){var e,r,i,o,s,a,u,c,l,h,f,p,d,y,g,m,_,b,w,v={}.hasOwnProperty;w=n(1),_=w.isObject,m=w.isFunction,b=w.isPlainObject,h=n(21),r=n(20),i=n(19),p=n(12),g=n(11),f=n(10),c=n(18),l=n(17),o=n(16),a=n(15),s=n(14),u=n(13),e=n(37),y=n(36),d=n(26),t.exports=function(){function t(t,e,n){var r;t||(t={}),t.writer?b(t.writer)&&(r=t.writer,t.writer=new d(r)):t.writer=new d(t),this.options=t,this.writer=t.writer,this.stringify=new y(t),this.onDataCallback=e||function(){},this.onEndCallback=n||function(){},this.currentNode=null,this.currentLevel=-1,this.openTags={},this.documentStarted=!1,this.documentCompleted=!1,this.root=null}return t.prototype.node=function(t,e,n){var r;if(null==t)throw new Error("Missing node name");if(this.root&&-1===this.currentLevel)throw new Error("Document can only have one root node");return this.openCurrent(),t=t.valueOf(),null==e&&(e={}),e=e.valueOf(),_(e)||(n=(r=[e,n])[0],e=r[1]),this.currentNode=new h(this,t,e),this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,null!=n&&this.text(n),this},t.prototype.element=function(t,e,n){return this.currentNode&&this.currentNode instanceof l?this.dtdElement.apply(this,arguments):this.node(t,e,n)},t.prototype.attribute=function(t,n){var r,i;if(!this.currentNode||this.currentNode.children)throw new Error("att() can only be used immediately after an ele() call in callback mode");if(null!=t&&(t=t.valueOf()),_(t))for(r in t)v.call(t,r)&&(i=t[r],this.attribute(r,i));else m(n)&&(n=n.apply()),this.options.skipNullAttributes&&null==n||(this.currentNode.attributes[t]=new e(this,t,n));return this},t.prototype.text=function(t){var e;return this.openCurrent(),e=new g(this,t),this.onData(this.writer.text(e,this.currentLevel+1)),this},t.prototype.cdata=function(t){var e;return this.openCurrent(),e=new r(this,t),this.onData(this.writer.cdata(e,this.currentLevel+1)),this},t.prototype.comment=function(t){var e;return this.openCurrent(),e=new i(this,t),this.onData(this.writer.comment(e,this.currentLevel+1)),this},t.prototype.raw=function(t){var e;return this.openCurrent(),e=new p(this,t),this.onData(this.writer.raw(e,this.currentLevel+1)),this},t.prototype.instruction=function(t,e){var n,r,i,o,s;if(this.openCurrent(),null!=t&&(t=t.valueOf()),null!=e&&(e=e.valueOf()),Array.isArray(t))for(n=0,o=t.length;n<o;n++)r=t[n],this.instruction(r);else if(_(t))for(r in t)v.call(t,r)&&(i=t[r],this.instruction(r,i));else m(e)&&(e=e.apply()),s=new f(this,t,e),this.onData(this.writer.processingInstruction(s,this.currentLevel+1));return this},t.prototype.declaration=function(t,e,n){var r;if(this.openCurrent(),this.documentStarted)throw new Error("declaration() must be the first node");return r=new c(this,t,e,n),this.onData(this.writer.declaration(r,this.currentLevel+1)),this},t.prototype.doctype=function(t,e,n){if(this.openCurrent(),null==t)throw new Error("Missing root node name");if(this.root)throw new Error("dtd() must come before the root node");return this.currentNode=new l(this,e,n),this.currentNode.rootNodeName=t,this.currentNode.children=!1,this.currentLevel++,this.openTags[this.currentLevel]=this.currentNode,this},t.prototype.dtdElement=function(t,e){var n;return this.openCurrent(),n=new s(this,t,e),this.onData(this.writer.dtdElement(n,this.currentLevel+1)),this},t.prototype.attList=function(t,e,n,r,i){var s;return this.openCurrent(),s=new o(this,t,e,n,r,i),this.onData(this.writer.dtdAttList(s,this.currentLevel+1)),this},t.prototype.entity=function(t,e){var n;return this.openCurrent(),n=new a(this,!1,t,e),this.onData(this.writer.dtdEntity(n,this.currentLevel+1)),this},t.prototype.pEntity=function(t,e){var n;return this.openCurrent(),n=new a(this,!0,t,e),this.onData(this.writer.dtdEntity(n,this.currentLevel+1)),this},t.prototype.notation=function(t,e){var n;return this.openCurrent(),n=new u(this,t,e),this.onData(this.writer.dtdNotation(n,this.currentLevel+1)),this},t.prototype.up=function(){if(this.currentLevel<0)throw new Error("The document node has no parent");return this.currentNode?(this.currentNode.children?this.closeNode(this.currentNode):this.openNode(this.currentNode),this.currentNode=null):this.closeNode(this.openTags[this.currentLevel]),delete this.openTags[this.currentLevel],this.currentLevel--,this},t.prototype.end=function(){for(;this.currentLevel>=0;)this.up();return this.onEnd()},t.prototype.openCurrent=function(){if(this.currentNode)return this.currentNode.children=!0,this.openNode(this.currentNode)},t.prototype.openNode=function(t){if(!t.isOpen)return!this.root&&0===this.currentLevel&&t instanceof h&&(this.root=t),this.onData(this.writer.openNode(t,this.currentLevel)),t.isOpen=!0},t.prototype.closeNode=function(t){if(!t.isClosed)return this.onData(this.writer.closeNode(t,this.currentLevel)),t.isClosed=!0},t.prototype.onData=function(t){return this.documentStarted=!0,this.onDataCallback(t)},t.prototype.onEnd=function(){return this.documentCompleted=!0,this.onEndCallback()},t.prototype.ele=function(){return this.element.apply(this,arguments)},t.prototype.nod=function(t,e,n){return this.node(t,e,n)},t.prototype.txt=function(t){return this.text(t)},t.prototype.dat=function(t){return this.cdata(t)},t.prototype.com=function(t){return this.comment(t)},t.prototype.ins=function(t,e){return this.instruction(t,e)},t.prototype.dec=function(t,e,n){return this.declaration(t,e,n)},t.prototype.dtd=function(t,e,n){return this.doctype(t,e,n)},t.prototype.e=function(t,e,n){return this.element(t,e,n)},t.prototype.n=function(t,e,n){return this.node(t,e,n)},t.prototype.t=function(t){return this.text(t)},t.prototype.d=function(t){return this.cdata(t)},t.prototype.c=function(t){return this.comment(t)},t.prototype.r=function(t){return this.raw(t)},t.prototype.i=function(t,e){return this.instruction(t,e)},t.prototype.att=function(){return this.currentNode&&this.currentNode instanceof l?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},t.prototype.a=function(){return this.currentNode&&this.currentNode instanceof l?this.attList.apply(this,arguments):this.attribute.apply(this,arguments)},t.prototype.ent=function(t,e){return this.entity(t,e)},t.prototype.pent=function(t,e){return this.pEntity(t,e)},t.prototype.not=function(t,e){return this.notation(t,e)},t}()}).call(this)},function(t,e,n){(function(){var e,r,i,o,s={}.hasOwnProperty;o=n(1).isPlainObject,e=n(0),i=n(36),r=n(26),t.exports=function(t){function n(t){n.__super__.constructor.call(this,null),t||(t={}),t.writer||(t.writer=new r),this.options=t,this.stringify=new i(t),this.isDocument=!0}return function(t,e){for(var n in e)s.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(n,e),n.prototype.end=function(t){var e;return t?o(t)&&(e=t,t=this.options.writer.set(e)):t=this.options.writer,t.document(this)},n.prototype.toString=function(t){return this.options.writer.set(t).document(this)},n}()}).call(this)},function(t,e,n){(function(){var e,r,i,o,s,a,u;u=n(1),s=u.assign,a=u.isFunction,e=n(56),r=n(55),o=n(26),i=n(54),t.exports.create=function(t,n,r,i){var o,a;if(null==t)throw new Error("Root element needs a name");return i=s({},n,r,i),a=(o=new e(i)).element(t),i.headless||(o.declaration(i),null==i.pubID&&null==i.sysID||o.doctype(i)),a},t.exports.begin=function(t,n,i){var o;return a(t)&&(n=(o=[t,n])[0],i=o[1],t={}),n?new r(t,n,i):new e(t)},t.exports.stringWriter=function(t){return new o(t)},t.exports.streamWriter=function(t,e){return new i(t,e)}}).call(this)},function(t,e,n){(function(){"use strict";var t,r,i,o,s,a={}.hasOwnProperty;t=n(57),r=n(27).defaults,o=function(t){return"string"==typeof t&&(t.indexOf("&")>=0||t.indexOf(">")>=0||t.indexOf("<")>=0)},s=function(t){return"<![CDATA["+i(t)+"]]>"},i=function(t){return t.replace("]]>","]]]]><![CDATA[>")},e.Builder=function(){function e(t){var e,n,i;for(e in this.options={},n=r[.2])a.call(n,e)&&(i=n[e],this.options[e]=i);for(e in t)a.call(t,e)&&(i=t[e],this.options[e]=i)}return e.prototype.buildObject=function(e){var n,i,u,c,l,h;return n=this.options.attrkey,i=this.options.charkey,1===Object.keys(e).length&&this.options.rootName===r[.2].rootName?e=e[l=Object.keys(e)[0]]:l=this.options.rootName,h=this,u=function(t,e){var r,c,l,f,p,d;if("object"!=typeof e)h.options.cdata&&o(e)?t.raw(s(e)):t.txt(e);else if(Array.isArray(e)){for(f in e)if(a.call(e,f))for(p in c=e[f])l=c[p],t=u(t.ele(p),l).up()}else for(p in e)if(a.call(e,p))if(c=e[p],p===n){if("object"==typeof c)for(r in c)d=c[r],t=t.att(r,d)}else if(p===i)t=h.options.cdata&&o(c)?t.raw(s(c)):t.txt(c);else if(Array.isArray(c))for(f in c)a.call(c,f)&&(t="string"==typeof(l=c[f])?h.options.cdata&&o(l)?t.ele(p).raw(s(l)).up():t.ele(p,l).up():u(t.ele(p),l).up());else"object"==typeof c?t=u(t.ele(p),c).up():"string"==typeof c&&h.options.cdata&&o(c)?t=t.ele(p).raw(s(c)).up():(null==c&&(c=""),t=t.ele(p,c.toString()).up());return t},c=t.create(l,this.options.xmldec,this.options.doctype,{headless:this.options.headless,allowSurrogateChars:this.options.allowSurrogateChars}),u(c,e).end(this.options.renderOpts)},e}()}).call(this)},function(t,e,n){(function(){"use strict";var t,r,i,o,s={}.hasOwnProperty;r=n(27),t=n(58),i=n(53),o=n(28),e.defaults=r.defaults,e.processors=o,e.ValidationError=function(t){function e(t){this.message=t}return function(t,e){for(var n in e)s.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(e,Error),e}(),e.Builder=t.Builder,e.Parser=i.Parser,e.parseString=i.parseString}).call(this)},function(t,e,n){const i=n(59).parseString;(function(){var t="d3.layout.phylotree.event";function e(t,e){return t[e]||!1}function n(t){return!(t.hidden||t.notshown)}function o(t){return t.notshown}function s(t){return!(t.target.hidden||t.target.notshown)}function u(t){return t.tag||!1}function c(t,e,n){var r=t.size();if(t.radial()){var i=t.pad_width(),o="fit-to-size"!=t.options()["top-bottom-spacing"]?t.pad_height():0;r=[r[1]+2*i,r[0]+2*i+o],e&&e.selectAll("."+t.css_classes()["tree-container"]).attr("transform","translate ("+i+","+(i+o)+")")}else r=[r[1]+("fit-to-size"!=t.options()["left-right-spacing"]?t.pad_width():0),r[0]+("fit-to-size"!=t.options()["top-bottom-spacing"]?t.pad_height():0)];return e&&(n&&(e=e.transition(100)),e.attr("height",r[1]).attr("width",r[0])),r}function l(t){return!(t.children&&t.children.length)}function h(t){return t.has_hidden_nodes||!1}function f(t){return t.collapsed||!1}function p(t){return[t.node,t["internal-node"],t["collapsed-node"],t["tagged-node"]].reduce(function(t,e,n,r){return t+"g."+e+(n<r.length-1?",":"")},"")}function d(t){return[t.branch,t["selected-branch"],t["tagged-branch"]].reduce(function(t,e,n,r){return t+"path."+e+(n<r.length-1?",":"")},"")}function y(t){return[t.clade].reduce(function(t,e,n,r){return t+"path."+e+(n<r.length-1?",":"")},"")}function g(t,e){var n=[];function r(){var t=n[n.length-1];"children"in t||(t.children=[]),n.push({name:null}),t.children.push(n[n.length-1]),n[n.length-1].original_child_order=t.children.length}function i(e){return{json:null,error:"Unexpected '"+t[e]+"' in '"+t.substring(e-20,e+1)+"[ERROR HERE]"+t.substring(e+1,e+20)+"'"}}var o=0,s="",a="",u="",c=null,l={"'":1,'"':1},h={name:"root"};n.push(h);for(var f,p=/\s/,d=0;d<t.length;d++)try{var y=t[d];switch(o){case 0:"("==y&&(r(),o=1);break;case 1:case 3:if(":"==y)o=3;else if(","==y||")"==y)try{f=void 0,f=n.pop(),e&&"children"in f?f.bootstrap_values=s:f.name=s,f.attribute=a,f.annotation=u,s="",a="",u="",o=1,","==y&&r()}catch(t){return i(d)}else if("("==y){if(s.length>0)return i(d);r()}else{if(y in l){if(1==o&&0===s.length&&0===a.length&&0===u.length){o=2,c=y;continue}return i(d)}if("["==y){if(u.length)return i(d);o=4}else if(3==o)a+=y;else{if(p.test(y))continue;if(";"==y){d=t.length;break}s+=y}}break;case 2:if(y==c){if(d<t.length-1&&t[d+1]==c){d++,s+=c;continue}c=0,o=1;continue}s+=y;break;case 4:if("]"==y)o=3;else{if("["==y)return i(d);u+=y}}}catch(t){return i(d)}return 1!=n.length?i(t.length-1):(s.length&&(h.name=s),{json:h,error:null})}function m(e){var n=new CustomEvent(t,{detail:["refresh",e]});document.dispatchEvent(n)}function b(e,n){var r=new CustomEvent(t,{detail:["count_update",n,e.count_handler()]});document.dispatchEvent(r)}function w(t){switch(t.detail[0]){case"refresh":t.detail[1].refresh();break;case"count_update":case"layout":t.detail[2](t.detail[1])}return!0}function v(){document.addEventListener(t,w,!1)}function E(t){return!t||null===t[0]&&null===t[1]?"":"translate ("+(null!==t[0]?t[0]:0)+","+(null!==t[1]?t[1]:0)+") "}function T(t){return null!==t?"rotate ("+t+") ":""}d3.layout.newick_parser=function(t,e){return g(t,e)},d3.layout.phylotree=function(w){var x=m,A={},D=d3.layout.hierarchy().sort(null).value(null),I=[1,1],N=[1,1],S=function(t,e){return 0},O=function(t){return 1},C=function(t){if("attribute"in t&&t.attribute&&t.attribute.length){var e=parseFloat(t.attribute);if(!isNaN(e))return Math.max(0,e)}},P=C,L=function(t){return(F["internal-names"]||l(t))&&t.name||""},R=L,M=!0,B=null,U=null,F={layout:"left-to-right",branches:"step",scaling:!0,bootstrap:!1,"color-fill":!0,"internal-names":!1,selectable:!0,"restricted-selectable":!1,collapsible:!0,"left-right-spacing":"fixed-step","top-bottom-spacing":"fixed-step","left-offset":0,"show-scale":"top","draw-size-bubbles":!1,"binary-selectable":!1,"is-radial":!1,"attribute-list":[],"max-radius":768,"annular-limit":.38196601125010515,compression:.2,"align-tips":!1,"maximum-per-node-spacing":100,"minimum-per-node-spacing":2,"maximum-per-level-spacing":100,"minimum-per-level-spacing":10,node_circle_size:d3.functor(3),transitions:null,brush:!0,reroot:!0,hide:!0,"label-nodes-with-name":!1,zoom:!1},j={"tree-container":"phylotree-container","tree-scale-bar":"tree-scale-bar",node:"node","internal-node":"internal-node","tagged-node":"node-tagged","selected-node":"node-selected","collapsed-node":"node-collapsed",branch:"branch","selected-branch":"branch-selected","tagged-branch":"branch-tagged","tree-selection-brush":"tree-selection-brush","branch-tracer":"branch-tracer",clade:"clade"},Y=[],z=[],V=[],q=function(t){return t.y},W=function(t){return t.x},G=[1,1],X=[15,20],H=12,K=12,Q=[0,H/2],Z=d3.svg.line().x(function(t){return q(t)}).y(function(t){return W(t)}).interpolate("step-before"),J=function(t){return"number"==typeof t?t+"px":t},tt=function(t){var e=radial_mapper(t[0].radius,t[0].angle),n=radial_mapper(t[0].radius,t[1].angle);return"M "+q(e)+","+W(e)+" A "+t[0].radius+","+t[0].radius+" 0,0, "+(t[1].angle>t[0].angle?1:0)+" "+q(n)+","+W(n)+" L "+q(t[1])+","+W(t[1])};function et(t,e){var n;if(v(),(n="root"==t.name?{json:t,error:null}:"string"!=typeof t?t:"<"==t[0]?function(t){function e(t,n){t.clade&&(t.clade.forEach(e),t.children=t.clade,delete t.clade),t.original_child_order=n+1,t.branch_length&&(t.attribute=t.branch_length[0]),t.taxonomy&&(t.name=t.taxonomy[0].scientific_name[0]),t.annotation=""}var n;return i(t,function(t,r){(n=r.phyloxml.phylogeny[0].clade[0]).name="root",e(n)}),{json:n,error:null}}(t):g(t,e)).json){t;var r={};(Y=D.call(this,n.json)).forEach(t=>{if(t.name){var e=t.name.indexOf("{");if(e>-1){var n=t.name.slice(e+1,t.name.length-1);t[n]=!0,r[n]=!0,t.name=t.name.slice(0,e)}}}),V=Object.keys(r)}else Y=[];return et.placenodes(),z=et.links(Y),et}return draw_branch=Z,draw_scale_bar=null,rescale_node_span=1,count_listener_handler=function(){},layout_listener_handler=function(){},node_styler=void 0,edge_styler=void 0,shown_font_size=H,selection_attribute_name="selected",popover_displayed=null,right_most_leaf=0,label_width=0,radial_center=0,radius=1,radius_pad_for_bubbles=0,radial_mapper=function(t,e){return{x:radial_center+t*Math.sin(e),y:radial_center+t*Math.cos(e)}},cartesian_mapper=function(t,e){return polar_to_cartesian(t-radial_center,e-radial_center)},cartesian_to_polar=function(t,e,n){t.radius=e*(t.radius+n),t.angle||(t.angle=2*Math.PI*t.x*G[0]/I[0]);var r=radial_mapper(t.radius,t.angle);return t.x=r.x,t.y=r.y,t},polar_to_cartesian=function(t,e){return r=Math.sqrt(Math.pow(t,2)+Math.pow(e,2)),a=Math.atan2(e,t),[r,a]},A.container=w||"body",et.placenodes=function(){var t=0,e=[[0,0],[0,0]],n=null,r=0,i=t,s=.5*r,a=F.scaling,u=!1,c=!1,h=1;function p(t){var e=0;if(t.x=t.children.map(d).reduce(function(t,n){return"number"==typeof n?t+n:(e+=1,t)},0),e==t.children.length)return t.notshown=!0,void(t.x=void 0);t.x/=t.children.length-e}function d(d){if(!o(d)){var y=l(d);if(d.text_angle=null,d.text_align=null,d.radius=null,d.angle=null,d.parent)if(a){if(u)return 0;if(d.y=P(d),void 0===d.y)return u=!0,0;d.y+=d.parent.y}else d.y=y?h:d.depth;else t=0,e=[[0,0],[0,0]],n=null,r=0,d.y=0;if(y){var g=O(d)/rescale_node_span;t=d.x=t+S(n,d)+.5*(r+g),e[1][1]=Math.max(e[1][1],d.y),e[1][0]=Math.min(e[1][0],d.y-.5*g),e[0][1]=c?Math.max(e[0][1],i+(d.x-i)*F.compression+s+(.5*g+S(n,d))*F.compression):Math.max(e[0][1],t+.5*g+S(n,d)),n=d,r=g}else{if(f(d)&&!c){if(i=t,s=.5*r,c=!0,p(d),c=!1,"number"==typeof d.x){d.x=i+(d.x-i)*F.compression+s,d.collapsed=[[d.x,d.y]];var m=function(e){e.hidden=!0,l(e)?(t=e.x=i+(e.x-i)*F.compression+s,d.collapsed.push([e.x,e.y])):e.children.map(m)};t=i,m(d),d.collapsed.splice(1,0,[i,d.y]),d.collapsed.push([t,d.y]),d.collapsed.push([d.x,d.y]),d.hidden=!1}}else p(d)}return d.x}}rescale_node_span=Y.map(function(t){return O(t)}).reduce(function(t,e){return Math.min(e,t||1e200)},null)||1,Y[0].x=d(Y[0]),h=d3.max(Y,function(t){return t.depth}),a&&u&&(a=!1,Y[0].x=d(Y[0]));var y=!1;function g(){if(et.radial()&&y&&(Q[1]=0),"fixed-step"==F["left-right-spacing"])I[1]=h*X[1],G[1]=(I[1]-Q[1]-F["left-offset"])/e[1][1],label_width=et._label_width(shown_font_size),et.radial();else{label_width=et._label_width(shown_font_size),y=!0;var t=I[1]-Q[1]-F["left-offset"];.5*t<label_width&&(shown_font_size*=.5*t/label_width,label_width=.5*t),G[1]=(I[1]-Q[1]-F["left-offset"]-label_width)/e[1][1]}}if(draw_scale_bar=F["show-scale"]&&a,"fixed-step"==F["top-bottom-spacing"]?(Q[1]=Math.max(H,-e[1][0]*X[0]),I[0]=e[0][1]*X[0],G[0]=X[0]):(G[0]=(I[0]-et.pad_height())/e[0][1],y=!0),shown_font_size=Math.min(H,G[0]),et.radial()){draw_branch=tt;var m=null,_=null,b=null,w=0,v=e[0][1]*G[0],E=0;Y.forEach(function(t){var e=t.x*G[0];t.angle=2*Math.PI*e/v,t.text_angle=t.angle-Math.PI/2,t.text_angle=t.text_angle>0&&t.text_angle<Math.PI,t.text_align=t.text_angle?"end":"start",t.text_angle=(t.text_angle?180:0)+180*t.angle/Math.PI}),g(),Y.forEach(function(t){t.radius=t.y*G[1]/I[1],E=Math.max(t.radius,E)});var T=0;et.align_tips()&&F["draw-size-bubbles"];Y.forEach(function(t){if(!t.children){var e=t.x*G[0];if(null!==m){var n=e-_,r=function(t,e,n,r,i){return i=i||0,Math.sqrt((e-t)*(e-t)+2*(t+i)*(e+i)*(1-Math.cos(n-r)))}(t.radius,b,t.angle,m,T),i=r>0?n/r:10*F["max-radius"];if(i>F["max-radius"]){var o=n/F["max-radius"],s=t.radius+b,a=t.radius*b-(o*o-(b-t.radius)*(b-t.radius))/2/(1-Math.cos(m-t.angle)),u=Math.sqrt(s*s-4*a);T=Math.min(F["annular-limit"]*E,(-s+u)/2),w=F["max-radius"]}else w=Math.max(w,i)}m=t.angle,_=e,b=t.radius}}),radius=Math.min(F["max-radius"],Math.max(v/2/Math.PI,w)),y&&(radius=Math.min(radius,.5*(Math.min(v,e[1][1]*G[1])-label_width)-radius*T)),radial_center=radius_pad_for_bubbles=radius;var x=1;T&&(x=E/(E+T),radius*=x),Y.forEach(function(t){if(cartesian_to_polar(t,radius,T),E=Math.max(E,t.radius),F["draw-size-bubbles"]?radius_pad_for_bubbles=Math.max(radius_pad_for_bubbles,t.radius+et.node_bubble_size(t)):radius_pad_for_bubbles=Math.max(radius_pad_for_bubbles,t.radius),t.collapsed){t.collapsed=t.collapsed.map(function(t){var e={};return e.x=t[0],e.y=t[1],[(e=cartesian_to_polar(e,radius,T)).x,e.y]});var e=t.collapsed[1];t.collapsed=t.collapsed.filter(function(n,r){return r<3||r>t.collapsed.length-4||Math.sqrt(Math.pow(n[0]-e[0],2)+Math.pow(n[1]-e[1],2))>3&&(e=n,!0)})}}),I[0]=radial_center+radius/x,I[1]=radial_center+radius/x}else g(),draw_branch=Z,right_most_leaf=0,Y.forEach(function(t){if(t.x*=G[0],t.y*=G[1],"right-to-left"==F.layout&&(t.y=e[1][1]*G[1]-t.y),l(t)&&(right_most_leaf=Math.max(right_most_leaf,t.y+et.node_bubble_size(t))),t.collapsed){t.collapsed.map(function(t){return[t[0]*=G[0],t[1]*=G[1]]});var n=t.collapsed[1][0];t.collapsed=t.collapsed.filter(function(e,r){return r<3||r>t.collapsed.length-4||e[0]-n>3&&(n=e[0],!0)})}});if(draw_scale_bar){var A,D;if(et.radial()){if(D=Math.min(radius/5,50),(D=(A=Math.pow(10,Math.ceil(Math.log(e[1][1]*D/radius)/Math.log(10))))*(radius/e[1][1]))<30){var N=Math.ceil(30/D);D*=N,A*=N}}else A=e[1][1],D=I[1]-Q[1]-F["left-offset"];var C=d3.scale.linear().domain([0,A]).range([shown_font_size,shown_font_size+D]),k=d3.format(".2g");if(draw_scale_bar=d3.svg.axis().scale(C).orient("top").tickFormat(function(t){return 0===t?"":k(t)}),et.radial())draw_scale_bar.tickValues([A]);else{var L=C.ticks();L=L.length>1?L[1]:L[0],draw_scale_bar.ticks(Math.min(10,d3.round(D/(shown_font_size*k(L).length*.8),0)))}}else draw_scale_bar=null;return et},et.size=function(t){return arguments.length&&(N=t),"fixed-step"!=F["top-bottom-spacing"]&&(I[0]=N[0]),"fixed-step"!=F["left-right-spacing"]&&(I[1]=N[1]),arguments.length?et:I},et.pad_height=function(){return draw_scale_bar?K+25:0},et.pad_width=function(){return Q[1]+F["left-offset"]+label_width},et.descendants=function(t){var e=[];return function t(n){l(n)?e.push(n):n.children.forEach(t)}(t),e},et.collapse_node=function(t){f(t)||(t.collapsed=!0)},et.separation=function(t){return arguments.length?(S=t,et):S},et.selection_label=function(t){return arguments.length?(selection_attribute_name=t,et.sync_edge_labels(),et):selection_attribute_name},et.handle_node_click=function(t){var e=d3.select(A.container).select("#d3_layout_phylotree_context_menu");if(e.empty()&&(e=d3.select(A.container).append("ul").attr("id","d3_layout_phylotree_context_menu").attr("class","dropdown-menu").attr("role","menu")),e.selectAll("li").remove(),t){l(t)||(F.collapsible&&(e.append("li").append("a").attr("tabindex","-1").attr("class","dropdown-item btn btn-sm ").text(f(t)?"Expand Subtree":"Collapse Subtree").on("click",function(n){e.style("display","none"),et.toggle_collapse(t).update()}),e.append("li").attr("class","divider"),e.append("li").attr("class","dropdown-item btn btn-sm ").text("Toggle selection")),F.selectable&&(e.append("li").append("a").attr("tabindex","-1").attr("class","dropdown-item btn btn-sm ").text("All descendant branches").on("click",function(n){e.style("display","none"),et.modify_selection(et.select_all_descendants(t,!0,!0))}),e.append("li").append("a").attr("tabindex","-1").attr("class","dropdown-item btn btn-sm ").text("All terminal branches").on("click",function(n){e.style("display","none"),et.modify_selection(et.select_all_descendants(t,!0,!1))}),e.append("li").append("a").attr("tabindex","-1").attr("class","dropdown-item btn btn-sm ").text("All internal branches").on("click",function(n){e.style("display","none"),et.modify_selection(et.select_all_descendants(t,!1,!0))}))),t.parent&&(F.selectable&&(e.append("li").append("a").attr("tabindex","-1").attr("class","dropdown-item btn btn-sm ").text("Incident branch").on("click",function(n){e.style("display","none"),et.modify_selection([t])}),e.append("li").append("a").attr("tabindex","-1").attr("class","dropdown-item btn btn-sm").text("Path to root").on("click",function(n){e.style("display","none"),et.modify_selection(et.path_to_root(t))}),(F.reroot||F.hide)&&e.append("li").attr("class","divider")),F.reroot&&e.append("li").append("a").attr("tabindex","-1").attr("class","dropdown-item btn btn-sm ").text("Reroot on this node").on("click",function(n){e.style("display","none"),et.reroot(t).update()}),F.hide&&e.append("li").append("a").attr("tabindex","-1").attr("class","dropdown-item btn btn-sm ").text("Hide this "+(l(t)?"node":"subtree")).on("click",function(n){e.style("display","none"),et.modify_selection([t],"notshown",!0,!0).update_has_hidden_nodes().update()})),h(t)&&e.append("li").append("a").attr("tabindex","-1").text("Show all descendant nodes").on("click",function(n){e.style("display","none"),et.modify_selection(et.select_all_descendants(t,!0,!0),"notshown",!0,!0,"false").update_has_hidden_nodes().update()});var n=[];"menu_items"in t&&"object"==typeof t.menu_items&&t.menu_items.forEach(function(e){3==e.length&&(e[2]&&!e[2](t)||n.push([e[0],e[1]]))}),n.length&&(e.append("li").attr("class","divider"),n.forEach(function(n){e.append("li").append("a").attr("tabindex","-1").text(n[0](t)).on("click",n[1])}));var r=$(A.container),i=d3.mouse(r[0]);e.style("position","absolute").style("left",i[0]+"px").style("top",i[1]+"px").style("display","block")}else e.style("display","none")},et.style_nodes=function(t){return arguments.length?(node_styler=t,et):node_styler},et.style_edges=function(t){return arguments.length?(edge_styler=t.bind(this),et):edge_styler},et.get_newick=function(t){t||(t=(t=>t.name));var e=[];return t=t||"",function n(r){var i;l(r)||(e.push("("),r.children.forEach(function(t,r){r&&e.push(","),n(t)}),e.push(")")),e.push((i=R(r),/[\s\[\]\,\)\(\:\'\"]/.test(i)?"'"+i.replace("'","''")+"'":i)),e.push(t(r));var o=P(r);void 0!==o&&e.push(":"+o)}(Y[0]),e.join("")},et.update_layout=function(e,n){var r,i;n&&(Y=D.call(this,e)).forEach(function(t){t.id=null}),et.placenodes(),z=et.links(Y),et.sync_edge_labels(),r=et,i=new CustomEvent(t,{detail:["layout",r,r.layout_handler()]}),document.dispatchEvent(i)},et.sync_edge_labels=function(){if(z.forEach(function(t){t[selection_attribute_name]=t.target[selection_attribute_name]||!1,t.tag=t.target.tag||!1}),m(et),et.count_handler()){var t={};t[selection_attribute_name]=z.reduce(function(t,e){return t+(e[selection_attribute_name]?1:0)},0),t.tagged=z.reduce(function(t,e){return t+(u(e)?1:0)},0),b(et,t,et.count_handler())}},et.predefined_selecters={all:t=>!0,none:t=>!1,"all-leaf-nodes":t=>l(t.target),"all-internal-nodes":t=>!l(t.target)},et.modify_selection=function(t,e,n,r,i){if(e=e||selection_attribute_name,i=i||"toggle",F["restricted-selectable"].length){if(!_.contains(_.keys(this.predefined_selecters),t))return;t=this.predefined_selecters[t]}if(!F["restricted-selectable"]&&!F.selectable||F["binary-selectable"]){if(F["binary-selectable"]&&("function"==typeof t?z.forEach(function(n){var r=t(n);n[e]=n[e]||!1,n[e]!=r&&(n[e]=r,o=!0,n.target[e]=r),F["attribute-list"].forEach(function(t){t!=e&&!0===n[e]&&(n[t]=!1,n.target[t]=!1)})}):(t.forEach(function(t){var n;n=!t[e],t[e]!=n&&(t[e]=n,o=!0)}),z.forEach(function(t){t[e]=t.target[e],F["attribute-list"].forEach(function(n){n!=e&&!0!==t[e]&&(t[n]=!1,t.target[n]=!1)})})),o)){if(r||m(et),et.count_handler())(s={})[e]=z.reduce(function(t,n){return t+(n[e]?1:0)},0),b(et,s,et.count_handler());n&&et.placenodes()}}else{var o=!1;if("function"==typeof t?z.forEach(function(n){var r=t(n);n[e]=n[e]||!1,n[e]!=r&&(n[e]=r,o=!0,n.target[e]=r)}):(t.forEach(function(t){var n;switch(i){case"true":n=!0;break;case"false":n=!1;break;default:n=!t[e]}t[e]!=n&&(t[e]=n,o=!0)}),z.forEach(function(t){t[e]=t.target[e]})),o){var s;if(r||m(et),et.count_handler())(s={})[e]=z.reduce(function(t,n){return t+(n[e]?1:0)},0),b(et,s,et.count_handler());n&&et.placenodes()}}return U&&"tag"!=e&&U(et.get_selection()),et},et.trigger_refresh=function(){x(et)},et.is_leafnode=l,et.radial=function(t){return arguments.length?(F["is-radial"]=t,et):F["is-radial"]},et.align_tips=function(t){return arguments.length?(F["align-tips"]=t,et):F["align-tips"]},et.node_bubble_size=function(t){return F["draw-size-bubbles"]?.5*(O(t)/rescale_node_span*G[0]):0},et.shift_tip=function(t){return F["is-radial"]?[("end"==t.text_align?-1:1)*(radius_pad_for_bubbles-t.radius),0]:(F["right-to-left"],[right_most_leaf-t.screen_x,0])},et.get_selection=function(){return Y.filter(function(t){return t[selection_attribute_name]})},et.count_handler=function(t){return arguments.length?(count_listener_handler=t,et):count_listener_handler},et.layout_handler=function(t){return arguments.length?(layout_listener_handler=t,et):layout_listener_handler},et.internal_label=function(t,n){et.clear_internal_nodes(n);for(var r=Y.length-1;r>=0;r--){var i=Y[r];l(i)||e(i,selection_attribute_name)||(i[selection_attribute_name]=t(i.children))}et.modify_selection(function(t,e){return l(t.target),t.target[selection_attribute_name]})},et.max_parsimony=function(t){et.clear_internal_nodes(t),function t(e){if(e.mp=[[0,0],[!1,!1]],l(e))e.mp[1][0]=e.mp[1][1]=e[selection_attribute_name]||!1,e.mp[0][0]=e.mp[1][0]?1:0,e.mp[0][1]=1-e.mp[0][0];else{e.children.forEach(t);var n=e.children.reduce(function(t,e){return e.mp[0][0]+t},0),r=e.children.reduce(function(t,e){return e.mp[0][1]+t},0);e[selection_attribute_name]?(e.mp[0][0]=r+1,e.mp[1][0]=!0,e.mp[0][1]=r,e.mp[1][1]=!0):(n<r+1?(e.mp[0][0]=n,e.mp[1][0]=!1):(e.mp[0][0]=r+1,e.mp[1][0]=!0),r<n+1?(e.mp[0][1]=r,e.mp[1][1]=!0):(e.mp[0][1]=n+1,e.mp[1][1]=!1))}}(Y[0]),Y.forEach(function(t){t.parent?t.mp=t.mp[1][t.parent.mp?1:0]:t.mp=t.mp[1][t.mp[0][0]<t.mp[0][1]?0:1]}),et.modify_selection(function(t,e){return l(t.target)?t.target[selection_attribute_name]:t.target.mp})},et.node_span=function(t){return arguments.length?(O="string"==typeof t&&"equal"==t?function(t){return 1}:t,et):O},et.resort_children=function(t){return function e(n){if(n.children){for(var r=0;r<n.children.length;r++)e(n.children[r]);n.children.sort(t)}}(Y[0]),et.update_layout(Y),et.update(),et},et.graft_a_node=function(t,e,n,r){if(t.parent&&Y.indexOf(t)>=0){var i=t.parent.children.indexOf(t),o={name:n,parent:t.parent,attribute:r?r[2]:null,original_child_order:t.original_child_order},s={name:e,parent:o,attribute:r?r[1]:null,original_child_order:2};o.children=[t,s],t.parent.children[i]=o,t.parent=o,t.attribute=r?r[0]:null,t.original_child_order=1,et.update_layout(Y[0],!0)}return et},et.delete_a_node=function(t){if("number"!=typeof t)return et.delete_a_node(Y.indexOf(t));if(t>0&&t<Y.length){var e=Y[t];if(e.parent){var n=e.parent.children.indexOf(e);n>=0&&(Y.splice(t,1),e.children&&e.children.forEach(function(t){t.original_child_order=e.parent.children.length,e.parent.children.push(t),t.parent=e.parent}),e.parent.children.length>2?e.parent.children.splice(n,1):e.parent.parent?(e.parent.parent.children[e.parent.parent.children.indexOf(e.parent)]=e.parent.children[1-n],e.parent.children[1-n].parent=e.parent.parent,Y.splice(Y.indexOf(e.parent),1)):(Y.splice(0,1),Y[0].parent=null,delete Y[0].attribute,delete Y[0].annotation,delete Y[0].original_child_order,Y[0].name="root"),et.update_layout(Y[0],!0))}}return et},et.traverse_and_compute=function(t,e){return"post-order"==(e=e||"post-order")&&(e=function e(n){if(n.children)for(var r=0;r<n.children.length;r++)e(n.children[r]);t(n)}),e(Y[0]),et},et.reroot=function(t){if(t.parent){new_json={name:"new_root",__mapped_bl:void 0,children:[t]},Y.forEach(function(t){t.__mapped_bl=P(t)}),et.branch_length(function(t){return t.__mapped_bl});var e=t,n=t.parent,r=(n.__mapped_bl,_.noop());if(n.parent){for(t.__mapped_bl=void 0===t.__mapped_bl?void 0:.5*t.__mapped_bl,r=n.__mapped_bl,n.__mapped_bl=t.__mapped_bl,new_json.children.push(n);n.parent;){var i=n.children.indexOf(e);n.parent.parent?n.children.splice(i,1,n.parent):n.children.splice(i,1);var o=n.parent.__mapped_bl;void 0!==o&&(n.parent.__mapped_bl=r,r=o),e=n,n=n.parent}i=n.children.indexOf(e);n.children.splice(i,1)}else{i=n.children.indexOf(e);n.children.splice(i,1),e=new_json}if(1==n.children.length)r&&(n.children[0].__mapped_bl+=r),e.children=e.children.concat(n.children);else{var s={name:"__reroot_top_clade"};s.__mapped_bl=r,s.children=n.children.map(function(t){return t}),e.children.push(s)}et.update_layout(new_json,!0)}return et},et.update_key_name=function(t,e){return Y.forEach(function(n){t in n&&(e&&(n[e]=n[t]),delete n[t])}),et.sync_edge_labels(),et},et.spacing_x=function(t,e){return arguments.length?(X[0]!=t&&t>=F["minimum-per-node-spacing"]&&t<=F["maximum-per-node-spacing"]&&(X[0]=t,e||et.placenodes()),et):X[0]},et.spacing_y=function(t,e){return arguments.length?(X[1]!=t&&t>=F["minimum-per-level-spacing"]&&t<=F["maximum-per-level-spacing"]&&(X[1]=t,e||et.placenodes()),et):X[1]},et.toggle_collapse=function(t){if(t.collapsed){t.collapsed=!1;var e=function(t){l(t)||t.collapsed||t.children.forEach(e),t.hidden=!1};e(t)}else t.collapsed=!0;return et.placenodes(),et},et.update_has_hidden_nodes=function(){for(k=Y.length-1;k>=0;k-=1)l(Y[k])?Y[k].has_hidden_nodes=Y[k].notshown:Y[k].has_hidden_nodes=Y[k].children.reduce(function(t,e){return e.notshown||t},!1);return et},et.branch_length=function(t){return arguments.length?(P=t||C,et):P},et.branch_name=function(t){return arguments.length?(R=t||L,et):R},et.length=function(t){return arguments.length?(default_length_attribute!=t&&(default_length_attribute=t,M=!0),et):default_length_attribute},et._label_width=function(t){t=t||shown_font_size;var e=0;return Y.filter(n).forEach(function(n){var r=R(n).length*t*.6;null!==n.angle&&(r*=Math.max(Math.abs(Math.cos(n.angle)),Math.abs(Math.sin(n.angle)))),e=Math.max(r,e)}),e},et.font_size=function(t){return arguments.length?(H=void 0===t?12:t,et):H},et.scale_bar_font_size=function(t){return arguments.length?(K=void 0===t?12:t,et):K},et.node_circle_size=function(t,e){return arguments.length?(F.node_circle_size=d3.functor(void 0===t?3:t),et):F.node_circle_size},et.needs_redraw=function(){return M},et.svg=function(t){return arguments.length?(B!==t&&(B=t,"phylotree-container"==j["tree-container"]&&(B.selectAll("*").remove(),svg_defs=B.append("defs")),d3.select(A.container).on("click",function(t){et.handle_node_click(null)},!0)),et):t},et.css=function(t){if(0===arguments.length)return j;if(arguments.length>2){var e={};return e[t[0]]=t[1],et.css(e)}for(var n in j)n in t&&t[n]!=j[n]&&(j[n]=t[n]);return et},et.options=function(t,e){if(!arguments.length)return F;var n=!1;for(var r in F)if(r in t&&t[r]!=F[r])switch(n=!0,F[r]=t[r],r){case"branches":switch(t[r]){case"straight":draw_branch.interpolate("linear");break;default:draw_branch.interpolate("step-before")}}return e&&n&&et.layout(),et},et.transitions=function(t){return void 0!==t?t:null!==F.transitions?F.transitions:Y.length<=300},et.update=function(t){if(!et.svg)return et;t=et.transitions(t);var e=0,r=B.selectAll("."+j["tree-container"]).data([0]);if(r.enter().append("g").attr("class",j["tree-container"]),r.attr("transform",function(t){return E([Q[1]+F["left-offset"],et.pad_height()])}),draw_scale_bar){var i=B.selectAll("."+j["tree-scale-bar"]).data([0]);i.enter().append("g"),i.attr("class",j["tree-scale-bar"]).style("font-size",J(K)).attr("transform",function(t){return E([Q[1]+F["left-offset"],et.pad_height()-10])}).call(draw_scale_bar),i.selectAll("text").style("text-anchor","end")}else B.selectAll("."+j["tree-scale-bar"]).remove();var o=r.selectAll(d(j)).data(z.filter(s),function(t){return t.target.id||(t.target.id=++e)});t?o.exit().transition().remove():o.exit().remove(),o.enter().insert("path",":first-child"),o.each(function(e){et.draw_edge(this,e,t)});var a=r.selectAll(y(j)).data(Y.filter(f),function(t){return t.id||(t.id=++e)}),u=function(){},h=_.noop();if(et.radial()){u=d3.svg.line().interpolate(function(t){t.pop();var e=t.shift(),n=t.join("L"),r=cartesian_mapper(e[0],e[1]),i=cartesian_mapper(t[0][0],t[0][1])[1],o=cartesian_mapper(t[t.length-1][0],t[t.length-1][1])[1];return n+"A "+r[0]+" "+r[0]+" "+(i>o?1:0)+" 0 0 "+t[0].join(",")}).y(function(t){return t[0]}).x(function(t){return t[1]}),h=function(t,e,n,r,i){return e?[n.screen_y+(t[0]-r)/50,n.screen_x+(t[1]-i)/50]:[n.screen_y,n.screen_x]}}else u=d3.svg.line().interpolate("basis").y(function(t){return t[0]}).x(function(t){return t[1]}),h=function(t,e,n,r,i){return e?[n.screen_y+(t[0]-r)/50,n.screen_x+(t[1]-i)/50]:[n.screen_y,n.screen_x]};a.exit().each(function(t){t.collapsed_clade=null}).remove();t?(a.enter().insert("path",":first-child"),a.attr("class",j.clade).attr("d",function(t){if(t.collapsed_clade)return t.collapsed_clade;var e=t.collapsed[0][0],n=t.collapsed[0][1];return u(t.collapsed.map(function(r,i){return h(r,i,t,e,n)}))}).transition().attr("d",function(t){return t.collapsed_clade=u(t.collapsed)})):(a.enter().insert("path",":first-child"),a.attr("class",j.clade).attr("d",function(t){return t.collapsed_clade=u(t.collapsed)}));var g=r.selectAll(p(j)).data(Y.filter(n),function(t){return t.id||(t.id=++e)});g.enter().append("g");t?(g.exit().transition().remove(),g=g.attr("transform",function(t){if(!_.isUndefined(t.screen_x)&&!_.isUndefined(t.screen_y))return"translate("+t.screen_x+","+t.screen_y+")"}).transition()):g.exit().remove(),g.attr("transform",function(t){const e="right-to-left"==F.layout&&l(t);return t.screen_x=q(t),t.screen_y=W(t),E([e?0:t.screen_x,t.screen_y])}).attr("class",et.reclass_node).each(function(e){et.draw_node(this,e,t)}),F["label-nodes-with-name"]&&g.attr("id",function(t){return"node-"+t.name});var m=c(et,B,t);if(F.brush){var b=r.selectAll("."+j["tree-selection-brush"]).data([0]);b.enter().insert("g",":first-child").attr("class",j["tree-selection-brush"]);var w=d3.svg.brush().x(d3.scale.identity().domain([0,m[0]-Q[1]-F["left-offset"]])).y(d3.scale.identity().domain([0,m[1]-et.pad_height()])).on("brush",function(){var t=d3.event.target.extent(),e=z.filter(s).filter(function(e,n){return e.source.screen_x>=t[0][0]&&e.source.screen_x<=t[1][0]&&e.source.screen_y>=t[0][1]&&e.source.screen_y<=t[1][1]&&e.target.screen_x>=t[0][0]&&e.target.screen_x<=t[1][0]&&e.target.screen_y>=t[0][1]&&e.target.screen_y<=t[1][1]}).map(function(t){return t.target});et.modify_selection(z.map(function(t){return t.target}),"tag",!1,e.length>0,"false"),et.modify_selection(e,"tag",!1,!1,"true")}).on("brushend",function(){b.call(d3.event.target.clear())});b.call(w)}if(et.sync_edge_labels(),F.zoom){var v=d3.behavior.zoom().scaleExtent([.1,10]).on("zoom",function(){var t=d3.event.translate;t[0]+=Q[1]+F["left-offset"],t[1]+=et.pad_height(),d3.select("."+j["tree-container"]).attr("transform","translate("+t+")scale("+d3.event.scale+")")});B.call(v)}return et},et.css_classes=function(t,e){if(!arguments.length)return j;var n=!1;for(var r in j)r in t&&t[r]!=j[r]&&(n=!0,j[r]=t[r]);return e&&n&&et.layout(),et},et.layout=function(t){return B?(B.selectAll("."+j["tree-container"]+",."+j["tree-scale-bar"]+",."+j["tree-selection-brush"]),et.update(t)):et},et.refresh=function(){var t=B.selectAll("."+j["tree-container"]),e=t.selectAll(d(j));e.attr("class",et.reclass_edge),edge_styler&&e.each(function(t){edge_styler(d3.select(this),t)});var n=t.selectAll(p(j));n.attr("class",et.reclass_node),node_styler&&n.each(function(t){node_styler(d3.select(this),t)})},et.reclass_edge=function(t){var n=j.branch;return u(t)&&(n+=" "+j["tagged-branch"]),e(t,selection_attribute_name)&&(n+=" "+j["selected-branch"]),n},et.reclass_node=function(t){var n=j[l(t)?"node":"internal-node"];return u(t)&&(n+=" "+j["tagged-node"]),e(t,selection_attribute_name)&&(n+=" "+j["selected-node"]),(f(t)||h(t))&&(n+=" "+j["collapsed-node"]),n},et.select_all_descendants=function(t,e,n){var r=[];return function i(o){l(o)?e&&o!=t&&r.push(o):(n&&o!=t&&r.push(o),o.children.forEach(i))}(t),r},et.path_to_root=function(t){for(var e=[];t;)e.push(t),t=t.parent;return e},et.draw_edge=function(t,e,n){(t=d3.select(t)).attr("class",et.reclass_edge).on("click",function(t){et.modify_selection([t.target],selection_attribute_name)});var r=draw_branch([e.source,e.target]);n?(t.datum().existing_path&&t.attr("d",function(t){return t.existing_path}),t.transition().attr("d",r)):t.attr("d",r),e.existing_path=r;var i=P(e.target);if(void 0!==i){var o=t.selectAll("title");o.empty()&&(o=t.append("title")),o.text("Length = "+i)}else t.selectAll("title").remove();return edge_styler&&edge_styler(t,e),et},et.clear_internal_nodes=function(t){t||Y.forEach(function(t){l(t)||(t[selection_attribute_name]=!1)})},et.draw_node=function(t,e,n){if(t=d3.select(t),l(e)){var r=t.selectAll("text").data([e]),i=t.selectAll("line");if(n?r.enter().append("text").style("opacity",0).transition().style("opacity",1):r.enter().append("text"),r.on("click",function(t,e){et.handle_node_click(t)}).attr("dy",function(t){return.33*shown_font_size}).text(function(t){return R(t)}).style("font-size",function(t){return J(shown_font_size)}),et.radial()?(n?r.transition():r).attr("transform",function(t){return T(t.text_angle)+E(et.align_tips()?et.shift_tip(t):null)}).attr("text-anchor",function(t){return t.text_align}):(n?r.transition():r).attr("text-anchor","start").attr("transform",function(t){return"right-to-left"==F.layout?E([-20,0]):E(et.align_tips()?et.shift_tip(t):null)}),et.align_tips()?(i=i.data([e]),n?(i.enter().append("line").style("opacity",0).transition().style("opacity",1),i.attr("x1",function(t){return("end"==t.text_align?-1:1)*et.node_bubble_size(e)}).attr("x2",0).attr("y1",0).attr("y2",0),i.transition().attr("x2",function(t){return"right-to-left"==F.layout?t.screen_x:et.shift_tip(t)[0]}).attr("transform",function(t){return T(t.text_angle)})):(i.enter().append("line"),i.attr("x1",function(t){return("end"==t.text_align?-1:1)*et.node_bubble_size(e)}).attr("y2",0).attr("y1",0).transition().attr("x2",function(t){return et.shift_tip(t)[0]}),i.attr("transform",function(t){return T(t.text_angle)})),i.classed(j["branch-tracer"],!0)):i.remove(),F["draw-size-bubbles"]){var o=et.node_bubble_size(e);(s=t.selectAll("circle").data([o])).enter().append("circle"),n&&(s=s.transition()),s.attr("r",function(t){return t}),shown_font_size>=5&&r.attr("dx",function(t){return("end"==t.text_align?-1:1)*((et.align_tips()?0:o)+.33*shown_font_size)})}else shown_font_size>=5&&r.attr("dx",function(t){return("end"==t.text_align?-1:1)*shown_font_size*.33})}else{var s=t.selectAll("circle").data([e]),a=et.node_circle_size()(e);a>0?(s.enter().append("circle"),s.attr("r",function(t){return Math.min(.75*shown_font_size,a)}).on("click",function(t){et.handle_node_click(t)})):s.remove()}return node_styler&&node_styler(t,e),e},et.get_nodes=function(){return Y},et.get_node_by_name=function(t){return _.findWhere(Y,{name:t})},et.assign_attributes=function(t){_.each(Y,function(e){_.indexOf(_.keys(t),e.name)>=0&&(e.annotations=t[e.name])})},et.set_partitions=function(t){this.partitions=t},et.get_partitions=function(t){return this.partitions},et.selection_callback=function(t){return t?(U=t,et):U},et.get_parsed_tags=function(){return V},d3.rebind(et,D,"sort","children","value"),et.nodes=et,et.links=d3.layout.cluster().links,et},d3.layout.phylotree.is_leafnode=l,d3.layout.phylotree.add_custom_menu=function(t,e,n,r){"menu_items"in t||(t.menu_items=[]),t.menu_items.some(function(t){return t[0]==e&&t[1]==n&&t[2]==r})||t.menu_items.push([e,n,r])},d3.layout.phylotree.trigger_refresh=m,d3.layout.phylotree.nexml_parser=function(t){var e;return i(t,function(t,n){e=n["nex:nexml"].trees[0].tree.map(function(t){var e=t.node.map(t=>t.$),n=e.reduce(function(t,e){return e.edges=[],e.name=e.id,t[e.id]=e,t},{}),r=e.filter(t=>t.root),i=r>0?r[0].id:e[0].id;return n[i].name="root",t.edge.map(t=>t.$).forEach(function(t){n[t.source].edges.push(t)}),function t(e,r){if(e.edges){var i=_.pluck(e.edges,"target");e.children=_.values(_.pick(n,i)),e.children.forEach(function(t,n){t.attribute=e.edges[n].length||""}),e.children.forEach(t),e.annotation=""}}(n[i]),n[i]})}),e}}).call(this)}]);

;let height = 600;
let width = 1200;
let tree;
let display_bootstrap = false;
let display_branch_length = false;


function my_menu_title(node) {
}

/**function validateTree(){
  $("#validate_newick").on("click", function (e) {
    var res = d3.layout.newick_parser($('textarea[id$="nwk_spec"]').val(), true);
    if (res["error"] || !res["json"]) {
      var warning_div = d3.select("#newick_body").selectAll("div  .alert-danger").data([res["error"]]);
      warning_div.enter().append("div");
      warning_div.html(function (d) {
        return d;
      }).attr("class", "alert-danger");
    } else {
      default_tree_settings();
      tree(res).svg(svg).layout();
      $('#newick_modal').modal('hide');
    }
  });
}**/


function my_style_nodes(element, node) {
  element.style("font-style", node['text-italic'] ? "italic" : "normal");
}

function patternChange(pattern) {
  if (tree.radial() !== (pattern === 'radial')) {
    tree.radial(!tree.radial()).placenodes().update();
  }
  if (pattern === 'straight') {
    tree.options({'branches': 'straight'}, true);
  } else if (pattern === 'linear') {
    tree.options({'branches': 'linear'}, true);
  }
}

function layoutChange(layout) {
  if (layout === 'phylogram') {
    tree.options({'align-tips': false}, true);

  }
  if (layout === 'cladogram') {
    tree.options({'align-tips': true}, true);
  }

}

function displayBranchLength(option) {
  display_branch_length = !!option;
  tree.style_nodes(annotate);
  tree.update();
}

function annotate(element, data) {
  if ("attribute" in data && data.attribute) {
    var branch_length = element.selectAll(".attribute");
    if (branch_length.empty() && display_branch_length) {
      if (data.attribute.length >= 4) {
        element.append("text").classed("attribute", true).text(data.attribute.substring(0, 4)).attr("dx", "-.6em").attr("text-anchor", "end").attr("alignment-baseline", "middle");
      } else {
        element.append("text").classed("attribute", true).text(data.attribute).attr("dx", "-.6em").attr("text-anchor", "end").attr("alignment-baseline", "middle");

      }
    } else if (!branch_length.empty() && (!display_branch_length)) {
      branch_length.remove();
    }
  }

}

function directionChange(direction, amount) {
  let which_function = direction === 'vertical' ? tree.spacing_x : tree.spacing_y;
  console.log(which_function);
  which_function(which_function() + amount).update();
}

function sort_nodes(asc) {
  tree.traverse_and_compute(function (n) {
    let d = 1;
    if (n.children && n.children.length) {

      d += d3.max(n.children, function (d) {
        return d["count_depth"];
      });
      console.log(d);
    }
    n["count_depth"] = d;
  });
  tree.resort_children(function (a, b) {
    return (a["count_depth"] - b["count_depth"]) * (asc ? 1 : -1);
  });
}

function sort(order) {

  if (order === 'sort_original') {
    tree.resort_children(function (a, b) {
      return a["original_child_order"] - b["original_child_order"];
    });
  }
  if (order === 'sort_ascending') {
    sort_nodes(true)
  } else if (order === 'sort_descending') {
    sort_nodes(false);
  }

}


function treeView(example_tree){
  tree = d3.layout.phylotree()
  // create a tree layout object
    .svg(d3.select("#tree_display"))
    .options({
      'left-right-spacing': 'fit-to-size',
      // fit to given size top-to-bottom
      'top-bottom-spacing': 'fit-to-size',
      // fit to given size left-to-right
      'selectable': true,
      // make nodes and branches not selectable
      'collapsible': true,
      // turn off the menu on internal nodes
      'transitions': true,
      // turn off d3 animations
      'zoom': true,
      'align-tips': false,
      'branches': 'linear'
    })
    .size([height, width])
    .node_circle_size(3);

  tree(d3.layout.newick_parser(example_tree))
    .style_nodes(my_style_nodes)
    .layout();

  tree.get_nodes()
    .filter(d3.layout.phylotree.is_leafnode)
    .forEach(function (tree_node) {
      d3.layout.phylotree.add_custom_menu(tree_node, // add to this node
        my_menu_title, // display this text for the menu
        function () {
          my_node_style_text(tree_node, tree);
        },
        // on-click callback include a reference to tree_node via transitive closure
        d3.layout.phylotree.is_leafnode // condition on when to display the menu
        // a function that takes node as an argument
      );
});


}

function validateTree(text) {
  let res = d3.layout.newick_parser(text, true);
  if (res['error'] || !res['json']) {

  } else {
    treeView(text);
  }
  return res['error'];
}





;/*!
 * jQuery JavaScript Library v1.11.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:42Z
 */

(function (global, factory) {

  if (typeof module === "object" && typeof module.exports === "object") {
    // For CommonJS and CommonJS-like environments where a proper window is present,
    // execute the factory and get jQuery
    // For environments that do not inherently posses a window with a document
    // (such as Node.js), expose a jQuery-making factory as module.exports
    // This accentuates the need for the creation of a real window
    // e.g. var jQuery = require("jquery")(window);
    // See ticket #14549 for more info
    module.exports = global.document ?
      factory(global, true) :
      function (w) {
        if (!w.document) {
          throw new Error("jQuery requires a window with a document");
        }
        return factory(w);
      };
  } else {
    factory(global);
  }

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//

  var deletedIds = [];

  var slice = deletedIds.slice;

  var concat = deletedIds.concat;

  var push = deletedIds.push;

  var indexOf = deletedIds.indexOf;

  var class2type = {};

  var toString = class2type.toString;

  var hasOwn = class2type.hasOwnProperty;

  var support = {};


  var
    version = "1.11.1",

    // Define a local copy of jQuery
    jQuery = function (selector, context) {
      // The jQuery object is actually just the init constructor 'enhanced'
      // Need init if jQuery is called (just allow error to be thrown if not included)
      return new jQuery.fn.init(selector, context);
    },

    // Support: Android<4.1, IE<9
    // Make sure we trim BOM and NBSP
    rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

    // Matches dashed string for camelizing
    rmsPrefix = /^-ms-/,
    rdashAlpha = /-([\da-z])/gi,

    // Used by jQuery.camelCase as callback to replace()
    fcamelCase = function (all, letter) {
      return letter.toUpperCase();
    };

  jQuery.fn = jQuery.prototype = {
    // The current version of jQuery being used
    jquery: version,

    constructor: jQuery,

    // Start with an empty selector
    selector: "",

    // The default length of a jQuery object is 0
    length: 0,

    toArray: function () {
      return slice.call(this);
    },

    // Get the Nth element in the matched element set OR
    // Get the whole matched element set as a clean array
    get: function (num) {
      return num != null ?

        // Return just the one element from the set
        (num < 0 ? this[num + this.length] : this[num]) :

        // Return all the elements in a clean array
        slice.call(this);
    },

    // Take an array of elements and push it onto the stack
    // (returning the new matched element set)
    pushStack: function (elems) {

      // Build a new jQuery matched element set
      var ret = jQuery.merge(this.constructor(), elems);

      // Add the old object onto the stack (as a reference)
      ret.prevObject = this;
      ret.context = this.context;

      // Return the newly-formed element set
      return ret;
    },

    // Execute a callback for every element in the matched set.
    // (You can seed the arguments with an array of args, but this is
    // only used internally.)
    each: function (callback, args) {
      return jQuery.each(this, callback, args);
    },

    map: function (callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },

    slice: function () {
      return this.pushStack(slice.apply(this, arguments));
    },

    first: function () {
      return this.eq(0);
    },

    last: function () {
      return this.eq(-1);
    },

    eq: function (i) {
      var len = this.length,
        j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },

    end: function () {
      return this.prevObject || this.constructor(null);
    },

    // For internal use only.
    // Behaves like an Array's method, not like a jQuery method.
    push: push,
    sort: deletedIds.sort,
    splice: deletedIds.splice
  };

  jQuery.extend = jQuery.fn.extend = function () {
    var src, copyIsArray, copy, name, options, clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;

    // Handle a deep copy situation
    if (typeof target === "boolean") {
      deep = target;

      // skip the boolean and the target
      target = arguments[i] || {};
      i++;
    }

    // Handle case when target is a string or something (possible in deep copy)
    if (typeof target !== "object" && !jQuery.isFunction(target)) {
      target = {};
    }

    // extend jQuery itself if only one argument is passed
    if (i === length) {
      target = this;
      i--;
    }

    for (; i < length; i++) {
      // Only deal with non-null/undefined values
      if ((options = arguments[i]) != null) {
        // Extend the base object
        for (name in options) {
          src = target[name];
          copy = options[name];

          // Prevent never-ending loop
          if (target === copy) {
            continue;
          }

          // Recurse if we're merging plain objects or arrays
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];

            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }

            // Never move original objects, clone them
            target[name] = jQuery.extend(deep, clone, copy);

            // Don't bring in undefined values
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }

    // Return the modified object
    return target;
  };

  jQuery.extend({
    // Unique for each copy of jQuery on the page
    expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

    // Assume jQuery is ready without the ready module
    isReady: true,

    error: function (msg) {
      throw new Error(msg);
    },

    noop: function () {
    },

    // See test/unit/core.js for details concerning isFunction.
    // Since version 1.3, DOM methods and functions like alert
    // aren't supported. They return false on IE (#2968).
    isFunction: function (obj) {
      return jQuery.type(obj) === "function";
    },

    isArray: Array.isArray || function (obj) {
      return jQuery.type(obj) === "array";
    },

    isWindow: function (obj) {
      /* jshint eqeqeq: false */
      return obj != null && obj == obj.window;
    },

    isNumeric: function (obj) {
      // parseFloat NaNs numeric-cast false positives (null|true|false|"")
      // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
      // subtraction forces infinities to NaN
      return !jQuery.isArray(obj) && obj - parseFloat(obj) >= 0;
    },

    isEmptyObject: function (obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },

    isPlainObject: function (obj) {
      var key;

      // Must be an Object.
      // Because of IE, we also have to check the presence of the constructor property.
      // Make sure that DOM nodes and window objects don't pass through, as well
      if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }

      try {
        // Not own constructor property must be Object
        if (obj.constructor &&
          !hasOwn.call(obj, "constructor") &&
          !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
          return false;
        }
      } catch (e) {
        // IE8,9 Will throw exceptions on certain host objects #9897
        return false;
      }

      // Support: IE<9
      // Handle iteration over inherited properties before own properties.
      if (support.ownLast) {
        for (key in obj) {
          return hasOwn.call(obj, key);
        }
      }

      // Own properties are enumerated firstly, so to speed up,
      // if last one is own, then all properties are own.
      for (key in obj) {
      }

      return key === undefined || hasOwn.call(obj, key);
    },

    type: function (obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ?
        class2type[toString.call(obj)] || "object" :
        typeof obj;
    },

    // Evaluates a script in a global context
    // Workarounds based on findings by Jim Driscoll
    // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
    globalEval: function (data) {
      if (data && jQuery.trim(data)) {
        // We use execScript on Internet Explorer
        // We use an anonymous function so that context is window
        // rather than jQuery in Firefox
        (window.execScript || function (data) {
          window["eval"].call(window, data);
        })(data);
      }
    },

    // Convert dashed to camelCase; used by the css and data modules
    // Microsoft forgot to hump their vendor prefix (#9572)
    camelCase: function (string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    },

    nodeName: function (elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },

    // args is for internal usage only
    each: function (obj, callback, args) {
      var value,
        i = 0,
        length = obj.length,
        isArray = isArraylike(obj);

      if (args) {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.apply(obj[i], args);

            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.apply(obj[i], args);

            if (value === false) {
              break;
            }
          }
        }

        // A special, fast, case for the most common use of each
      } else {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.call(obj[i], i, obj[i]);

            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.call(obj[i], i, obj[i]);

            if (value === false) {
              break;
            }
          }
        }
      }

      return obj;
    },

    // Support: Android<4.1, IE<9
    trim: function (text) {
      return text == null ?
        "" :
        (text + "").replace(rtrim, "");
    },

    // results is for internal usage only
    makeArray: function (arr, results) {
      var ret = results || [];

      if (arr != null) {
        if (isArraylike(Object(arr))) {
          jQuery.merge(ret,
            typeof arr === "string" ?
              [arr] : arr
          );
        } else {
          push.call(ret, arr);
        }
      }

      return ret;
    },

    inArray: function (elem, arr, i) {
      var len;

      if (arr) {
        if (indexOf) {
          return indexOf.call(arr, elem, i);
        }

        len = arr.length;
        i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

        for (; i < len; i++) {
          // Skip accessing in sparse arrays
          if (i in arr && arr[i] === elem) {
            return i;
          }
        }
      }

      return -1;
    },

    merge: function (first, second) {
      var len = +second.length,
        j = 0,
        i = first.length;

      while (j < len) {
        first[i++] = second[j++];
      }

      // Support: IE<9
      // Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
      if (len !== len) {
        while (second[j] !== undefined) {
          first[i++] = second[j++];
        }
      }

      first.length = i;

      return first;
    },

    grep: function (elems, callback, invert) {
      var callbackInverse,
        matches = [],
        i = 0,
        length = elems.length,
        callbackExpect = !invert;

      // Go through the array, only saving the items
      // that pass the validator function
      for (; i < length; i++) {
        callbackInverse = !callback(elems[i], i);
        if (callbackInverse !== callbackExpect) {
          matches.push(elems[i]);
        }
      }

      return matches;
    },

    // arg is for internal usage only
    map: function (elems, callback, arg) {
      var value,
        i = 0,
        length = elems.length,
        isArray = isArraylike(elems),
        ret = [];

      // Go through the array, translating each of the items to their new values
      if (isArray) {
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }

        // Go through every key on the object,
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);

          if (value != null) {
            ret.push(value);
          }
        }
      }

      // Flatten any nested arrays
      return concat.apply([], ret);
    },

    // A global GUID counter for objects
    guid: 1,

    // Bind a function to a context, optionally partially applying any
    // arguments.
    proxy: function (fn, context) {
      var args, proxy, tmp;

      if (typeof context === "string") {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }

      // Quick check to determine if target is callable, in the spec
      // this throws a TypeError, but we will just return undefined.
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }

      // Simulated bind
      args = slice.call(arguments, 2);
      proxy = function () {
        return fn.apply(context || this, args.concat(slice.call(arguments)));
      };

      // Set the guid of unique handler to the same of original handler, so it can be removed
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;

      return proxy;
    },

    now: function () {
      return +(new Date());
    },

    // jQuery.support is not used in Core but other projects attach their
    // properties to it so it needs to exist.
    support: support
  });

// Populate the class2type map
  jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
    class2type["[object " + name + "]"] = name.toLowerCase();
  });

  function isArraylike(obj) {
    var length = obj.length,
      type = jQuery.type(obj);

    if (type === "function" || jQuery.isWindow(obj)) {
      return false;
    }

    if (obj.nodeType === 1 && length) {
      return true;
    }

    return type === "array" || length === 0 ||
      typeof length === "number" && length > 0 && (length - 1) in obj;
  }

  var Sizzle =
    /*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
    (function (window) {

      var i,
        support,
        Expr,
        getText,
        isXML,
        tokenize,
        compile,
        select,
        outermostContext,
        sortInput,
        hasDuplicate,

        // Local document vars
        setDocument,
        document,
        docElem,
        documentIsHTML,
        rbuggyQSA,
        rbuggyMatches,
        matches,
        contains,

        // Instance-specific data
        expando = "sizzle" + -(new Date()),
        preferredDoc = window.document,
        dirruns = 0,
        done = 0,
        classCache = createCache(),
        tokenCache = createCache(),
        compilerCache = createCache(),
        sortOrder = function (a, b) {
          if (a === b) {
            hasDuplicate = true;
          }
          return 0;
        },

        // General-purpose constants
        strundefined = typeof undefined,
        MAX_NEGATIVE = 1 << 31,

        // Instance methods
        hasOwn = ({}).hasOwnProperty,
        arr = [],
        pop = arr.pop,
        push_native = arr.push,
        push = arr.push,
        slice = arr.slice,
        // Use a stripped-down indexOf if we can't use a native one
        indexOf = arr.indexOf || function (elem) {
          var i = 0,
            len = this.length;
          for (; i < len; i++) {
            if (this[i] === elem) {
              return i;
            }
          }
          return -1;
        },

        booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

        // Regular expressions

        // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
        whitespace = "[\\x20\\t\\r\\n\\f]",
        // http://www.w3.org/TR/css3-syntax/#characters
        characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

        // Loosely modeled on CSS identifier characters
        // An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
        // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
        identifier = characterEncoding.replace("w", "w#"),

        // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
        attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
          // Operator (capture 2)
          "*([*^$|!~]?=)" + whitespace +
          // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
          "*\\]",

        pseudos = ":(" + characterEncoding + ")(?:\\((" +
          // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
          // 1. quoted (capture 3; capture 4 or capture 5)
          "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
          // 2. simple (capture 6)
          "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
          // 3. anything else (capture 2)
          ".*" +
          ")\\)|)",

        // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
        rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),

        rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
        rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),

        rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),

        rpseudo = new RegExp(pseudos),
        ridentifier = new RegExp("^" + identifier + "$"),

        matchExpr = {
          "ID": new RegExp("^#(" + characterEncoding + ")"),
          "CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
          "TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
          "ATTR": new RegExp("^" + attributes),
          "PSEUDO": new RegExp("^" + pseudos),
          "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
            "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
            "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
          "bool": new RegExp("^(?:" + booleans + ")$", "i"),
          // For use in libraries implementing .is()
          // We use this for POS matching in `select`
          "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
        },

        rinputs = /^(?:input|select|textarea|button)$/i,
        rheader = /^h\d$/i,

        rnative = /^[^{]+\{\s*\[native \w/,

        // Easily-parseable/retrievable ID or TAG or CLASS selectors
        rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

        rsibling = /[+~]/,
        rescape = /'|\\/g,

        // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
        runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
        funescape = function (_, escaped, escapedWhitespace) {
          var high = "0x" + escaped - 0x10000;
          // NaN means non-codepoint
          // Support: Firefox<24
          // Workaround erroneous numeric interpretation of +"0x"
          return high !== high || escapedWhitespace ?
            escaped :
            high < 0 ?
              // BMP codepoint
              String.fromCharCode(high + 0x10000) :
              // Supplemental Plane codepoint (surrogate pair)
              String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
        };

// Optimize for push.apply( _, NodeList )
      try {
        push.apply(
          (arr = slice.call(preferredDoc.childNodes)),
          preferredDoc.childNodes
        );
        // Support: Android<4.0
        // Detect silently failing push.apply
        arr[preferredDoc.childNodes.length].nodeType;
      } catch (e) {
        push = {
          apply: arr.length ?

            // Leverage slice if possible
            function (target, els) {
              push_native.apply(target, slice.call(els));
            } :

            // Support: IE<9
            // Otherwise append directly
            function (target, els) {
              var j = target.length,
                i = 0;
              // Can't trust NodeList.length
              while ((target[j++] = els[i++])) {
              }
              target.length = j - 1;
            }
        };
      }

      function Sizzle(selector, context, results, seed) {
        var match, elem, m, nodeType,
          // QSA vars
          i, groups, old, nid, newContext, newSelector;

        if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
          setDocument(context);
        }

        context = context || document;
        results = results || [];

        if (!selector || typeof selector !== "string") {
          return results;
        }

        if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
          return [];
        }

        if (documentIsHTML && !seed) {

          // Shortcuts
          if ((match = rquickExpr.exec(selector))) {
            // Speed-up: Sizzle("#ID")
            if ((m = match[1])) {
              if (nodeType === 9) {
                elem = context.getElementById(m);
                // Check parentNode to catch when Blackberry 4.6 returns
                // nodes that are no longer in the document (jQuery #6963)
                if (elem && elem.parentNode) {
                  // Handle the case where IE, Opera, and Webkit return items
                  // by name instead of ID
                  if (elem.id === m) {
                    results.push(elem);
                    return results;
                  }
                } else {
                  return results;
                }
              } else {
                // Context is not a document
                if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) &&
                  contains(context, elem) && elem.id === m) {
                  results.push(elem);
                  return results;
                }
              }

              // Speed-up: Sizzle("TAG")
            } else if (match[2]) {
              push.apply(results, context.getElementsByTagName(selector));
              return results;

              // Speed-up: Sizzle(".CLASS")
            } else if ((m = match[3]) && support.getElementsByClassName && context.getElementsByClassName) {
              push.apply(results, context.getElementsByClassName(m));
              return results;
            }
          }

          // QSA path
          if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
            nid = old = expando;
            newContext = context;
            newSelector = nodeType === 9 && selector;

            // qSA works strangely on Element-rooted queries
            // We can work around this by specifying an extra ID on the root
            // and working up from there (Thanks to Andrew Dupont for the technique)
            // IE 8 doesn't work on object elements
            if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
              groups = tokenize(selector);

              if ((old = context.getAttribute("id"))) {
                nid = old.replace(rescape, "\\$&");
              } else {
                context.setAttribute("id", nid);
              }
              nid = "[id='" + nid + "'] ";

              i = groups.length;
              while (i--) {
                groups[i] = nid + toSelector(groups[i]);
              }
              newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
              newSelector = groups.join(",");
            }

            if (newSelector) {
              try {
                push.apply(results,
                  newContext.querySelectorAll(newSelector)
                );
                return results;
              } catch (qsaError) {
              } finally {
                if (!old) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }

        // All others
        return select(selector.replace(rtrim, "$1"), context, results, seed);
      }

      /**
       * Create key-value caches of limited size
       * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
       *  property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
       *  deleting the oldest entry
       */
      function createCache() {
        var keys = [];

        function cache(key, value) {
          // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
          if (keys.push(key + " ") > Expr.cacheLength) {
            // Only keep the most recent entries
            delete cache[keys.shift()];
          }
          return (cache[key + " "] = value);
        }

        return cache;
      }

      /**
       * Mark a function for special use by Sizzle
       * @param {Function} fn The function to mark
       */
      function markFunction(fn) {
        fn[expando] = true;
        return fn;
      }

      /**
       * Support testing using an element
       * @param {Function} fn Passed the created div and expects a boolean result
       */
      function assert(fn) {
        var div = document.createElement("div");

        try {
          return !!fn(div);
        } catch (e) {
          return false;
        } finally {
          // Remove from its parent by default
          if (div.parentNode) {
            div.parentNode.removeChild(div);
          }
          // release memory in IE
          div = null;
        }
      }

      /**
       * Adds the same handler for all of the specified attrs
       * @param {String} attrs Pipe-separated list of attributes
       * @param {Function} handler The method that will be applied
       */
      function addHandle(attrs, handler) {
        var arr = attrs.split("|"),
          i = attrs.length;

        while (i--) {
          Expr.attrHandle[arr[i]] = handler;
        }
      }

      /**
       * Checks document order of two siblings
       * @param {Element} a
       * @param {Element} b
       * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
       */
      function siblingCheck(a, b) {
        var cur = b && a,
          diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
            (~b.sourceIndex || MAX_NEGATIVE) -
            (~a.sourceIndex || MAX_NEGATIVE);

        // Use IE sourceIndex if available on both nodes
        if (diff) {
          return diff;
        }

        // Check if b follows a
        if (cur) {
          while ((cur = cur.nextSibling)) {
            if (cur === b) {
              return -1;
            }
          }
        }

        return a ? 1 : -1;
      }

      /**
       * Returns a function to use in pseudos for input types
       * @param {String} type
       */
      function createInputPseudo(type) {
        return function (elem) {
          var name = elem.nodeName.toLowerCase();
          return name === "input" && elem.type === type;
        };
      }

      /**
       * Returns a function to use in pseudos for buttons
       * @param {String} type
       */
      function createButtonPseudo(type) {
        return function (elem) {
          var name = elem.nodeName.toLowerCase();
          return (name === "input" || name === "button") && elem.type === type;
        };
      }

      /**
       * Returns a function to use in pseudos for positionals
       * @param {Function} fn
       */
      function createPositionalPseudo(fn) {
        return markFunction(function (argument) {
          argument = +argument;
          return markFunction(function (seed, matches) {
            var j,
              matchIndexes = fn([], seed.length, argument),
              i = matchIndexes.length;

            // Match elements found at the specified indexes
            while (i--) {
              if (seed[(j = matchIndexes[i])]) {
                seed[j] = !(matches[j] = seed[j]);
              }
            }
          });
        });
      }

      /**
       * Checks a node for validity as a Sizzle context
       * @param {Element|Object=} context
       * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
       */
      function testContext(context) {
        return context && typeof context.getElementsByTagName !== strundefined && context;
      }

// Expose support vars for convenience
      support = Sizzle.support = {};

      /**
       * Detects XML nodes
       * @param {Element|Object} elem An element or a document
       * @returns {Boolean} True iff elem is a non-HTML XML node
       */
      isXML = Sizzle.isXML = function (elem) {
        // documentElement is verified for cases where it doesn't yet exist
        // (such as loading iframes in IE - #4833)
        var documentElement = elem && (elem.ownerDocument || elem).documentElement;
        return documentElement ? documentElement.nodeName !== "HTML" : false;
      };

      /**
       * Sets document-related variables once based on the current document
       * @param {Element|Object} [doc] An element or document object to use to set the document
       * @returns {Object} Returns the current document
       */
      setDocument = Sizzle.setDocument = function (node) {
        var hasCompare,
          doc = node ? node.ownerDocument || node : preferredDoc,
          parent = doc.defaultView;

        // If no document and documentElement is available, return
        if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
          return document;
        }

        // Set our document
        document = doc;
        docElem = doc.documentElement;

        // Support tests
        documentIsHTML = !isXML(doc);

        // Support: IE>8
        // If iframe document is assigned to "document" variable and if iframe has been reloaded,
        // IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
        // IE6-8 do not support the defaultView property so parent will be undefined
        if (parent && parent !== parent.top) {
          // IE11 does not have attachEvent, so all must suffer
          if (parent.addEventListener) {
            parent.addEventListener("unload", function () {
              setDocument();
            }, false);
          } else if (parent.attachEvent) {
            parent.attachEvent("onunload", function () {
              setDocument();
            });
          }
        }

        /* Attributes
	---------------------------------------------------------------------- */

        // Support: IE<8
        // Verify that getAttribute really returns attributes and not properties (excepting IE8 booleans)
        support.attributes = assert(function (div) {
          div.className = "i";
          return !div.getAttribute("className");
        });

        /* getElement(s)By*
	---------------------------------------------------------------------- */

        // Check if getElementsByTagName("*") returns only elements
        support.getElementsByTagName = assert(function (div) {
          div.appendChild(doc.createComment(""));
          return !div.getElementsByTagName("*").length;
        });

        // Check if getElementsByClassName can be trusted
        support.getElementsByClassName = rnative.test(doc.getElementsByClassName) && assert(function (div) {
          div.innerHTML = "<div class='a'></div><div class='a i'></div>";

          // Support: Safari<4
          // Catch class over-caching
          div.firstChild.className = "i";
          // Support: Opera<10
          // Catch gEBCN failure to find non-leading classes
          return div.getElementsByClassName("i").length === 2;
        });

        // Support: IE<10
        // Check if getElementById returns elements by name
        // The broken getElementById methods don't pick up programatically-set names,
        // so use a roundabout getElementsByName test
        support.getById = assert(function (div) {
          docElem.appendChild(div).id = expando;
          return !doc.getElementsByName || !doc.getElementsByName(expando).length;
        });

        // ID find and filter
        if (support.getById) {
          Expr.find["ID"] = function (id, context) {
            if (typeof context.getElementById !== strundefined && documentIsHTML) {
              var m = context.getElementById(id);
              // Check parentNode to catch when Blackberry 4.6 returns
              // nodes that are no longer in the document #6963
              return m && m.parentNode ? [m] : [];
            }
          };
          Expr.filter["ID"] = function (id) {
            var attrId = id.replace(runescape, funescape);
            return function (elem) {
              return elem.getAttribute("id") === attrId;
            };
          };
        } else {
          // Support: IE6/7
          // getElementById is not reliable as a find shortcut
          delete Expr.find["ID"];

          Expr.filter["ID"] = function (id) {
            var attrId = id.replace(runescape, funescape);
            return function (elem) {
              var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
              return node && node.value === attrId;
            };
          };
        }

        // Tag
        Expr.find["TAG"] = support.getElementsByTagName ?
          function (tag, context) {
            if (typeof context.getElementsByTagName !== strundefined) {
              return context.getElementsByTagName(tag);
            }
          } :
          function (tag, context) {
            var elem,
              tmp = [],
              i = 0,
              results = context.getElementsByTagName(tag);

            // Filter out possible comments
            if (tag === "*") {
              while ((elem = results[i++])) {
                if (elem.nodeType === 1) {
                  tmp.push(elem);
                }
              }

              return tmp;
            }
            return results;
          };

        // Class
        Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
          if (typeof context.getElementsByClassName !== strundefined && documentIsHTML) {
            return context.getElementsByClassName(className);
          }
        };

        /* QSA/matchesSelector
	---------------------------------------------------------------------- */

        // QSA and matchesSelector support

        // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
        rbuggyMatches = [];

        // qSa(:focus) reports false when true (Chrome 21)
        // We allow this because of a bug in IE8/9 that throws an error
        // whenever `document.activeElement` is accessed on an iframe
        // So, we allow :focus to pass through QSA all the time to avoid the IE error
        // See http://bugs.jquery.com/ticket/13378
        rbuggyQSA = [];

        if ((support.qsa = rnative.test(doc.querySelectorAll))) {
          // Build QSA regex
          // Regex strategy adopted from Diego Perini
          assert(function (div) {
            // Select is set to empty string on purpose
            // This is to test IE's treatment of not explicitly
            // setting a boolean content attribute,
            // since its presence should be enough
            // http://bugs.jquery.com/ticket/12359
            div.innerHTML = "<select msallowclip=''><option selected=''></option></select>";

            // Support: IE8, Opera 11-12.16
            // Nothing should be selected when empty strings follow ^= or $= or *=
            // The test attribute must be unknown in Opera but "safe" for WinRT
            // http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
            if (div.querySelectorAll("[msallowclip^='']").length) {
              rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
            }

            // Support: IE8
            // Boolean attributes and "value" are not treated correctly
            if (!div.querySelectorAll("[selected]").length) {
              rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
            }

            // Webkit/Opera - :checked should return selected option elements
            // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
            // IE8 throws error here and will not see later tests
            if (!div.querySelectorAll(":checked").length) {
              rbuggyQSA.push(":checked");
            }
          });

          assert(function (div) {
            // Support: Windows 8 Native Apps
            // The type and name attributes are restricted during .innerHTML assignment
            var input = doc.createElement("input");
            input.setAttribute("type", "hidden");
            div.appendChild(input).setAttribute("name", "D");

            // Support: IE8
            // Enforce case-sensitivity of name attribute
            if (div.querySelectorAll("[name=d]").length) {
              rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
            }

            // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
            // IE8 throws error here and will not see later tests
            if (!div.querySelectorAll(":enabled").length) {
              rbuggyQSA.push(":enabled", ":disabled");
            }

            // Opera 10-11 does not throw on post-comma invalid pseudos
            div.querySelectorAll("*,:x");
            rbuggyQSA.push(",.*:");
          });
        }

        if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
          docElem.webkitMatchesSelector ||
          docElem.mozMatchesSelector ||
          docElem.oMatchesSelector ||
          docElem.msMatchesSelector)))) {

          assert(function (div) {
            // Check to see if it's possible to do matchesSelector
            // on a disconnected node (IE 9)
            support.disconnectedMatch = matches.call(div, "div");

            // This should fail with an exception
            // Gecko does not error, returns false instead
            matches.call(div, "[s!='']:x");
            rbuggyMatches.push("!=", pseudos);
          });
        }

        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
        rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

        /* Contains
	---------------------------------------------------------------------- */
        hasCompare = rnative.test(docElem.compareDocumentPosition);

        // Element contains another
        // Purposefully does not implement inclusive descendent
        // As in, an element does not contain itself
        contains = hasCompare || rnative.test(docElem.contains) ?
          function (a, b) {
            var adown = a.nodeType === 9 ? a.documentElement : a,
              bup = b && b.parentNode;
            return a === bup || !!(bup && bup.nodeType === 1 && (
              adown.contains ?
                adown.contains(bup) :
                a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
            ));
          } :
          function (a, b) {
            if (b) {
              while ((b = b.parentNode)) {
                if (b === a) {
                  return true;
                }
              }
            }
            return false;
          };

        /* Sorting
	---------------------------------------------------------------------- */

        // Document order sorting
        sortOrder = hasCompare ?
          function (a, b) {

            // Flag for duplicate removal
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }

            // Sort on method existence if only one input has compareDocumentPosition
            var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
            if (compare) {
              return compare;
            }

            // Calculate position if both inputs belong to the same document
            compare = (a.ownerDocument || a) === (b.ownerDocument || b) ?
              a.compareDocumentPosition(b) :

              // Otherwise we know they are disconnected
              1;

            // Disconnected nodes
            if (compare & 1 ||
              (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {

              // Choose the first element that is related to our preferred document
              if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                return -1;
              }
              if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                return 1;
              }

              // Maintain original order
              return sortInput ?
                (indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) :
                0;
            }

            return compare & 4 ? -1 : 1;
          } :
          function (a, b) {
            // Exit early if the nodes are identical
            if (a === b) {
              hasDuplicate = true;
              return 0;
            }

            var cur,
              i = 0,
              aup = a.parentNode,
              bup = b.parentNode,
              ap = [a],
              bp = [b];

            // Parentless nodes are either documents or disconnected
            if (!aup || !bup) {
              return a === doc ? -1 :
                b === doc ? 1 :
                  aup ? -1 :
                    bup ? 1 :
                      sortInput ?
                        (indexOf.call(sortInput, a) - indexOf.call(sortInput, b)) :
                        0;

              // If the nodes are siblings, we can do a quick check
            } else if (aup === bup) {
              return siblingCheck(a, b);
            }

            // Otherwise we need full lists of their ancestors for comparison
            cur = a;
            while ((cur = cur.parentNode)) {
              ap.unshift(cur);
            }
            cur = b;
            while ((cur = cur.parentNode)) {
              bp.unshift(cur);
            }

            // Walk down the tree looking for a discrepancy
            while (ap[i] === bp[i]) {
              i++;
            }

            return i ?
              // Do a sibling check if the nodes have a common ancestor
              siblingCheck(ap[i], bp[i]) :

              // Otherwise nodes in our document sort first
              ap[i] === preferredDoc ? -1 :
                bp[i] === preferredDoc ? 1 :
                  0;
          };

        return doc;
      };

      Sizzle.matches = function (expr, elements) {
        return Sizzle(expr, null, null, elements);
      };

      Sizzle.matchesSelector = function (elem, expr) {
        // Set document vars if needed
        if ((elem.ownerDocument || elem) !== document) {
          setDocument(elem);
        }

        // Make sure that attribute selectors are quoted
        expr = expr.replace(rattributeQuotes, "='$1']");

        if (support.matchesSelector && documentIsHTML &&
          (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
          (!rbuggyQSA || !rbuggyQSA.test(expr))) {

          try {
            var ret = matches.call(elem, expr);

            // IE 9's matchesSelector returns false on disconnected nodes
            if (ret || support.disconnectedMatch ||
              // As well, disconnected nodes are said to be in a document
              // fragment in IE 9
              elem.document && elem.document.nodeType !== 11) {
              return ret;
            }
          } catch (e) {
          }
        }

        return Sizzle(expr, document, null, [elem]).length > 0;
      };

      Sizzle.contains = function (context, elem) {
        // Set document vars if needed
        if ((context.ownerDocument || context) !== document) {
          setDocument(context);
        }
        return contains(context, elem);
      };

      Sizzle.attr = function (elem, name) {
        // Set document vars if needed
        if ((elem.ownerDocument || elem) !== document) {
          setDocument(elem);
        }

        var fn = Expr.attrHandle[name.toLowerCase()],
          // Don't get fooled by Object.prototype properties (jQuery #13807)
          val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
            fn(elem, name, !documentIsHTML) :
            undefined;

        return val !== undefined ?
          val :
          support.attributes || !documentIsHTML ?
            elem.getAttribute(name) :
            (val = elem.getAttributeNode(name)) && val.specified ?
              val.value :
              null;
      };

      Sizzle.error = function (msg) {
        throw new Error("Syntax error, unrecognized expression: " + msg);
      };

      /**
       * Document sorting and removing duplicates
       * @param {ArrayLike} results
       */
      Sizzle.uniqueSort = function (results) {
        var elem,
          duplicates = [],
          j = 0,
          i = 0;

        // Unless we *know* we can detect duplicates, assume their presence
        hasDuplicate = !support.detectDuplicates;
        sortInput = !support.sortStable && results.slice(0);
        results.sort(sortOrder);

        if (hasDuplicate) {
          while ((elem = results[i++])) {
            if (elem === results[i]) {
              j = duplicates.push(i);
            }
          }
          while (j--) {
            results.splice(duplicates[j], 1);
          }
        }

        // Clear input after sorting to release objects
        // See https://github.com/jquery/sizzle/pull/225
        sortInput = null;

        return results;
      };

      /**
       * Utility function for retrieving the text value of an array of DOM nodes
       * @param {Array|Element} elem
       */
      getText = Sizzle.getText = function (elem) {
        var node,
          ret = "",
          i = 0,
          nodeType = elem.nodeType;

        if (!nodeType) {
          // If no nodeType, this is expected to be an array
          while ((node = elem[i++])) {
            // Do not traverse comment nodes
            ret += getText(node);
          }
        } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
          // Use textContent for elements
          // innerText usage removed for consistency of new lines (jQuery #11153)
          if (typeof elem.textContent === "string") {
            return elem.textContent;
          } else {
            // Traverse its children
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              ret += getText(elem);
            }
          }
        } else if (nodeType === 3 || nodeType === 4) {
          return elem.nodeValue;
        }
        // Do not include comment or processing instruction nodes

        return ret;
      };

      Expr = Sizzle.selectors = {

        // Can be adjusted by the user
        cacheLength: 50,

        createPseudo: markFunction,

        match: matchExpr,

        attrHandle: {},

        find: {},

        relative: {
          ">": {dir: "parentNode", first: true},
          " ": {dir: "parentNode"},
          "+": {dir: "previousSibling", first: true},
          "~": {dir: "previousSibling"}
        },

        preFilter: {
          "ATTR": function (match) {
            match[1] = match[1].replace(runescape, funescape);

            // Move the given value to match[3] whether quoted or unquoted
            match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

            if (match[2] === "~=") {
              match[3] = " " + match[3] + " ";
            }

            return match.slice(0, 4);
          },

          "CHILD": function (match) {
            /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
            match[1] = match[1].toLowerCase();

            if (match[1].slice(0, 3) === "nth") {
              // nth-* requires argument
              if (!match[3]) {
                Sizzle.error(match[0]);
              }

              // numeric x and y parameters for Expr.filter.CHILD
              // remember that false/true cast respectively to 0/1
              match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
              match[5] = +((match[7] + match[8]) || match[3] === "odd");

              // other types prohibit arguments
            } else if (match[3]) {
              Sizzle.error(match[0]);
            }

            return match;
          },

          "PSEUDO": function (match) {
            var excess,
              unquoted = !match[6] && match[2];

            if (matchExpr["CHILD"].test(match[0])) {
              return null;
            }

            // Accept quoted arguments as-is
            if (match[3]) {
              match[2] = match[4] || match[5] || "";

              // Strip excess characters from unquoted arguments
            } else if (unquoted && rpseudo.test(unquoted) &&
              // Get excess from tokenize (recursively)
              (excess = tokenize(unquoted, true)) &&
              // advance to the next closing parenthesis
              (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

              // excess is a negative index
              match[0] = match[0].slice(0, excess);
              match[2] = unquoted.slice(0, excess);
            }

            // Return only captures needed by the pseudo filter method (type and argument)
            return match.slice(0, 3);
          }
        },

        filter: {

          "TAG": function (nodeNameSelector) {
            var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
            return nodeNameSelector === "*" ?
              function () {
                return true;
              } :
              function (elem) {
                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
              };
          },

          "CLASS": function (className) {
            var pattern = classCache[className + " "];

            return pattern ||
              (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
              classCache(className, function (elem) {
                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute("class") || "");
              });
          },

          "ATTR": function (name, operator, check) {
            return function (elem) {
              var result = Sizzle.attr(elem, name);

              if (result == null) {
                return operator === "!=";
              }
              if (!operator) {
                return true;
              }

              result += "";

              return operator === "=" ? result === check :
                operator === "!=" ? result !== check :
                  operator === "^=" ? check && result.indexOf(check) === 0 :
                    operator === "*=" ? check && result.indexOf(check) > -1 :
                      operator === "$=" ? check && result.slice(-check.length) === check :
                        operator === "~=" ? (" " + result + " ").indexOf(check) > -1 :
                          operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
                            false;
            };
          },

          "CHILD": function (type, what, argument, first, last) {
            var simple = type.slice(0, 3) !== "nth",
              forward = type.slice(-4) !== "last",
              ofType = what === "of-type";

            return first === 1 && last === 0 ?

              // Shortcut for :nth-*(n)
              function (elem) {
                return !!elem.parentNode;
              } :

              function (elem, context, xml) {
                var cache, outerCache, node, diff, nodeIndex, start,
                  dir = simple !== forward ? "nextSibling" : "previousSibling",
                  parent = elem.parentNode,
                  name = ofType && elem.nodeName.toLowerCase(),
                  useCache = !xml && !ofType;

                if (parent) {

                  // :(first|last|only)-(child|of-type)
                  if (simple) {
                    while (dir) {
                      node = elem;
                      while ((node = node[dir])) {
                        if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                          return false;
                        }
                      }
                      // Reverse direction for :only-* (if we haven't yet done so)
                      start = dir = type === "only" && !start && "nextSibling";
                    }
                    return true;
                  }

                  start = [forward ? parent.firstChild : parent.lastChild];

                  // non-xml :nth-child(...) stores cache data on `parent`
                  if (forward && useCache) {
                    // Seek `elem` from a previously-cached index
                    outerCache = parent[expando] || (parent[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = cache[0] === dirruns && cache[2];
                    node = nodeIndex && parent.childNodes[nodeIndex];

                    while ((node = ++nodeIndex && node && node[dir] ||

                      // Fallback to seeking `elem` from the start
                      (diff = nodeIndex = 0) || start.pop())) {

                      // When found, cache indexes on `parent` and break
                      if (node.nodeType === 1 && ++diff && node === elem) {
                        outerCache[type] = [dirruns, nodeIndex, diff];
                        break;
                      }
                    }

                    // Use previously-cached element index if available
                  } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                    diff = cache[1];

                    // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
                  } else {
                    // Use the same loop as above to seek `elem` from the start
                    while ((node = ++nodeIndex && node && node[dir] ||
                      (diff = nodeIndex = 0) || start.pop())) {

                      if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                        // Cache the index of each encountered element
                        if (useCache) {
                          (node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
                        }

                        if (node === elem) {
                          break;
                        }
                      }
                    }
                  }

                  // Incorporate the offset, then check against cycle size
                  diff -= last;
                  return diff === first || (diff % first === 0 && diff / first >= 0);
                }
              };
          },

          "PSEUDO": function (pseudo, argument) {
            // pseudo-class names are case-insensitive
            // http://www.w3.org/TR/selectors/#pseudo-classes
            // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
            // Remember that setFilters inherits from pseudos
            var args,
              fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
                Sizzle.error("unsupported pseudo: " + pseudo);

            // The user may use createPseudo to indicate that
            // arguments are needed to create the filter function
            // just as Sizzle does
            if (fn[expando]) {
              return fn(argument);
            }

            // But maintain support for old signatures
            if (fn.length > 1) {
              args = [pseudo, pseudo, "", argument];
              return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
                markFunction(function (seed, matches) {
                  var idx,
                    matched = fn(seed, argument),
                    i = matched.length;
                  while (i--) {
                    idx = indexOf.call(seed, matched[i]);
                    seed[idx] = !(matches[idx] = matched[i]);
                  }
                }) :
                function (elem) {
                  return fn(elem, 0, args);
                };
            }

            return fn;
          }
        },

        pseudos: {
          // Potentially complex pseudos
          "not": markFunction(function (selector) {
            // Trim the selector passed to compile
            // to avoid treating leading and trailing
            // spaces as combinators
            var input = [],
              results = [],
              matcher = compile(selector.replace(rtrim, "$1"));

            return matcher[expando] ?
              markFunction(function (seed, matches, context, xml) {
                var elem,
                  unmatched = matcher(seed, null, xml, []),
                  i = seed.length;

                // Match elements unmatched by `matcher`
                while (i--) {
                  if ((elem = unmatched[i])) {
                    seed[i] = !(matches[i] = elem);
                  }
                }
              }) :
              function (elem, context, xml) {
                input[0] = elem;
                matcher(input, null, xml, results);
                return !results.pop();
              };
          }),

          "has": markFunction(function (selector) {
            return function (elem) {
              return Sizzle(selector, elem).length > 0;
            };
          }),

          "contains": markFunction(function (text) {
            return function (elem) {
              return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
            };
          }),

          // "Whether an element is represented by a :lang() selector
          // is based solely on the element's language value
          // being equal to the identifier C,
          // or beginning with the identifier C immediately followed by "-".
          // The matching of C against the element's language value is performed case-insensitively.
          // The identifier C does not have to be a valid language name."
          // http://www.w3.org/TR/selectors/#lang-pseudo
          "lang": markFunction(function (lang) {
            // lang value must be a valid identifier
            if (!ridentifier.test(lang || "")) {
              Sizzle.error("unsupported lang: " + lang);
            }
            lang = lang.replace(runescape, funescape).toLowerCase();
            return function (elem) {
              var elemLang;
              do {
                if ((elemLang = documentIsHTML ?
                  elem.lang :
                  elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {

                  elemLang = elemLang.toLowerCase();
                  return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                }
              } while ((elem = elem.parentNode) && elem.nodeType === 1);
              return false;
            };
          }),

          // Miscellaneous
          "target": function (elem) {
            var hash = window.location && window.location.hash;
            return hash && hash.slice(1) === elem.id;
          },

          "root": function (elem) {
            return elem === docElem;
          },

          "focus": function (elem) {
            return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
          },

          // Boolean properties
          "enabled": function (elem) {
            return elem.disabled === false;
          },

          "disabled": function (elem) {
            return elem.disabled === true;
          },

          "checked": function (elem) {
            // In CSS3, :checked should return both checked and selected elements
            // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
            var nodeName = elem.nodeName.toLowerCase();
            return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
          },

          "selected": function (elem) {
            // Accessing this property makes selected-by-default
            // options in Safari work properly
            if (elem.parentNode) {
              elem.parentNode.selectedIndex;
            }

            return elem.selected === true;
          },

          // Contents
          "empty": function (elem) {
            // http://www.w3.org/TR/selectors/#empty-pseudo
            // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
            //   but not by others (comment: 8; processing instruction: 7; etc.)
            // nodeType < 6 works because attributes (2) do not appear as children
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              if (elem.nodeType < 6) {
                return false;
              }
            }
            return true;
          },

          "parent": function (elem) {
            return !Expr.pseudos["empty"](elem);
          },

          // Element/input types
          "header": function (elem) {
            return rheader.test(elem.nodeName);
          },

          "input": function (elem) {
            return rinputs.test(elem.nodeName);
          },

          "button": function (elem) {
            var name = elem.nodeName.toLowerCase();
            return name === "input" && elem.type === "button" || name === "button";
          },

          "text": function (elem) {
            var attr;
            return elem.nodeName.toLowerCase() === "input" &&
              elem.type === "text" &&

              // Support: IE<8
              // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
              ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
          },

          // Position-in-collection
          "first": createPositionalPseudo(function () {
            return [0];
          }),

          "last": createPositionalPseudo(function (matchIndexes, length) {
            return [length - 1];
          }),

          "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
            return [argument < 0 ? argument + length : argument];
          }),

          "even": createPositionalPseudo(function (matchIndexes, length) {
            var i = 0;
            for (; i < length; i += 2) {
              matchIndexes.push(i);
            }
            return matchIndexes;
          }),

          "odd": createPositionalPseudo(function (matchIndexes, length) {
            var i = 1;
            for (; i < length; i += 2) {
              matchIndexes.push(i);
            }
            return matchIndexes;
          }),

          "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
            var i = argument < 0 ? argument + length : argument;
            for (; --i >= 0;) {
              matchIndexes.push(i);
            }
            return matchIndexes;
          }),

          "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
            var i = argument < 0 ? argument + length : argument;
            for (; ++i < length;) {
              matchIndexes.push(i);
            }
            return matchIndexes;
          })
        }
      };

      Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
      for (i in {radio: true, checkbox: true, file: true, password: true, image: true}) {
        Expr.pseudos[i] = createInputPseudo(i);
      }
      for (i in {submit: true, reset: true}) {
        Expr.pseudos[i] = createButtonPseudo(i);
      }

// Easy API for creating new setFilters
      function setFilters() {
      }

      setFilters.prototype = Expr.filters = Expr.pseudos;
      Expr.setFilters = new setFilters();

      tokenize = Sizzle.tokenize = function (selector, parseOnly) {
        var matched, match, tokens, type,
          soFar, groups, preFilters,
          cached = tokenCache[selector + " "];

        if (cached) {
          return parseOnly ? 0 : cached.slice(0);
        }

        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;

        while (soFar) {

          // Comma and first run
          if (!matched || (match = rcomma.exec(soFar))) {
            if (match) {
              // Don't consume trailing commas as valid
              soFar = soFar.slice(match[0].length) || soFar;
            }
            groups.push((tokens = []));
          }

          matched = false;

          // Combinators
          if ((match = rcombinators.exec(soFar))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              // Cast descendant combinators to space
              type: match[0].replace(rtrim, " ")
            });
            soFar = soFar.slice(matched.length);
          }

          // Filters
          for (type in Expr.filter) {
            if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
              (match = preFilters[type](match)))) {
              matched = match.shift();
              tokens.push({
                value: matched,
                type: type,
                matches: match
              });
              soFar = soFar.slice(matched.length);
            }
          }

          if (!matched) {
            break;
          }
        }

        // Return the length of the invalid excess
        // if we're just parsing
        // Otherwise, throw an error or return tokens
        return parseOnly ?
          soFar.length :
          soFar ?
            Sizzle.error(selector) :
            // Cache the tokens
            tokenCache(selector, groups).slice(0);
      };

      function toSelector(tokens) {
        var i = 0,
          len = tokens.length,
          selector = "";
        for (; i < len; i++) {
          selector += tokens[i].value;
        }
        return selector;
      }

      function addCombinator(matcher, combinator, base) {
        var dir = combinator.dir,
          checkNonElements = base && dir === "parentNode",
          doneName = done++;

        return combinator.first ?
          // Check against closest ancestor/preceding element
          function (elem, context, xml) {
            while ((elem = elem[dir])) {
              if (elem.nodeType === 1 || checkNonElements) {
                return matcher(elem, context, xml);
              }
            }
          } :

          // Check against all ancestor/preceding elements
          function (elem, context, xml) {
            var oldCache, outerCache,
              newCache = [dirruns, doneName];

            // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
            if (xml) {
              while ((elem = elem[dir])) {
                if (elem.nodeType === 1 || checkNonElements) {
                  if (matcher(elem, context, xml)) {
                    return true;
                  }
                }
              }
            } else {
              while ((elem = elem[dir])) {
                if (elem.nodeType === 1 || checkNonElements) {
                  outerCache = elem[expando] || (elem[expando] = {});
                  if ((oldCache = outerCache[dir]) &&
                    oldCache[0] === dirruns && oldCache[1] === doneName) {

                    // Assign to newCache so results back-propagate to previous elements
                    return (newCache[2] = oldCache[2]);
                  } else {
                    // Reuse newcache so results back-propagate to previous elements
                    outerCache[dir] = newCache;

                    // A match means we're done; a fail means we have to keep checking
                    if ((newCache[2] = matcher(elem, context, xml))) {
                      return true;
                    }
                  }
                }
              }
            }
          };
      }

      function elementMatcher(matchers) {
        return matchers.length > 1 ?
          function (elem, context, xml) {
            var i = matchers.length;
            while (i--) {
              if (!matchers[i](elem, context, xml)) {
                return false;
              }
            }
            return true;
          } :
          matchers[0];
      }

      function multipleContexts(selector, contexts, results) {
        var i = 0,
          len = contexts.length;
        for (; i < len; i++) {
          Sizzle(selector, contexts[i], results);
        }
        return results;
      }

      function condense(unmatched, map, filter, context, xml) {
        var elem,
          newUnmatched = [],
          i = 0,
          len = unmatched.length,
          mapped = map != null;

        for (; i < len; i++) {
          if ((elem = unmatched[i])) {
            if (!filter || filter(elem, context, xml)) {
              newUnmatched.push(elem);
              if (mapped) {
                map.push(i);
              }
            }
          }
        }

        return newUnmatched;
      }

      function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
        if (postFilter && !postFilter[expando]) {
          postFilter = setMatcher(postFilter);
        }
        if (postFinder && !postFinder[expando]) {
          postFinder = setMatcher(postFinder, postSelector);
        }
        return markFunction(function (seed, results, context, xml) {
          var temp, i, elem,
            preMap = [],
            postMap = [],
            preexisting = results.length,

            // Get initial elements from seed or context
            elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),

            // Prefilter to get matcher input, preserving a map for seed-results synchronization
            matcherIn = preFilter && (seed || !selector) ?
              condense(elems, preMap, preFilter, context, xml) :
              elems,

            matcherOut = matcher ?
              // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
              postFinder || (seed ? preFilter : preexisting || postFilter) ?

                // ...intermediate processing is necessary
                [] :

                // ...otherwise use results directly
                results :
              matcherIn;

          // Find primary matches
          if (matcher) {
            matcher(matcherIn, matcherOut, context, xml);
          }

          // Apply postFilter
          if (postFilter) {
            temp = condense(matcherOut, postMap);
            postFilter(temp, [], context, xml);

            // Un-match failing elements by moving them back to matcherIn
            i = temp.length;
            while (i--) {
              if ((elem = temp[i])) {
                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
              }
            }
          }

          if (seed) {
            if (postFinder || preFilter) {
              if (postFinder) {
                // Get the final matcherOut by condensing this intermediate into postFinder contexts
                temp = [];
                i = matcherOut.length;
                while (i--) {
                  if ((elem = matcherOut[i])) {
                    // Restore matcherIn since elem is not yet a final match
                    temp.push((matcherIn[i] = elem));
                  }
                }
                postFinder(null, (matcherOut = []), temp, xml);
              }

              // Move matched elements from seed to results to keep them synchronized
              i = matcherOut.length;
              while (i--) {
                if ((elem = matcherOut[i]) &&
                  (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {

                  seed[temp] = !(results[temp] = elem);
                }
              }
            }

            // Add elements to results, through postFinder if defined
          } else {
            matcherOut = condense(
              matcherOut === results ?
                matcherOut.splice(preexisting, matcherOut.length) :
                matcherOut
            );
            if (postFinder) {
              postFinder(null, results, matcherOut, xml);
            } else {
              push.apply(results, matcherOut);
            }
          }
        });
      }

      function matcherFromTokens(tokens) {
        var checkContext, matcher, j,
          len = tokens.length,
          leadingRelative = Expr.relative[tokens[0].type],
          implicitRelative = leadingRelative || Expr.relative[" "],
          i = leadingRelative ? 1 : 0,

          // The foundational matcher ensures that elements are reachable from top-level context(s)
          matchContext = addCombinator(function (elem) {
            return elem === checkContext;
          }, implicitRelative, true),
          matchAnyContext = addCombinator(function (elem) {
            return indexOf.call(checkContext, elem) > -1;
          }, implicitRelative, true),
          matchers = [function (elem, context, xml) {
            return (!leadingRelative && (xml || context !== outermostContext)) || (
              (checkContext = context).nodeType ?
                matchContext(elem, context, xml) :
                matchAnyContext(elem, context, xml));
          }];

        for (; i < len; i++) {
          if ((matcher = Expr.relative[tokens[i].type])) {
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          } else {
            matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

            // Return special upon seeing a positional matcher
            if (matcher[expando]) {
              // Find the next relative operator (if any) for proper handling
              j = ++i;
              for (; j < len; j++) {
                if (Expr.relative[tokens[j].type]) {
                  break;
                }
              }
              return setMatcher(
                i > 1 && elementMatcher(matchers),
                i > 1 && toSelector(
                // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})
                ).replace(rtrim, "$1"),
                matcher,
                i < j && matcherFromTokens(tokens.slice(i, j)),
                j < len && matcherFromTokens((tokens = tokens.slice(j))),
                j < len && toSelector(tokens)
              );
            }
            matchers.push(matcher);
          }
        }

        return elementMatcher(matchers);
      }

      function matcherFromGroupMatchers(elementMatchers, setMatchers) {
        var bySet = setMatchers.length > 0,
          byElement = elementMatchers.length > 0,
          superMatcher = function (seed, context, xml, results, outermost) {
            var elem, j, matcher,
              matchedCount = 0,
              i = "0",
              unmatched = seed && [],
              setMatched = [],
              contextBackup = outermostContext,
              // We must always have either seed elements or outermost context
              elems = seed || byElement && Expr.find["TAG"]("*", outermost),
              // Use integer dirruns iff this is the outermost matcher
              dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
              len = elems.length;

            if (outermost) {
              outermostContext = context !== document && context;
            }

            // Add elements passing elementMatchers directly to results
            // Keep `i` a string if there are no elements so `matchedCount` will be "00" below
            // Support: IE<9, Safari
            // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
            for (; i !== len && (elem = elems[i]) != null; i++) {
              if (byElement && elem) {
                j = 0;
                while ((matcher = elementMatchers[j++])) {
                  if (matcher(elem, context, xml)) {
                    results.push(elem);
                    break;
                  }
                }
                if (outermost) {
                  dirruns = dirrunsUnique;
                }
              }

              // Track unmatched elements for set filters
              if (bySet) {
                // They will have gone through all possible matchers
                if ((elem = !matcher && elem)) {
                  matchedCount--;
                }

                // Lengthen the array for every element, matched or not
                if (seed) {
                  unmatched.push(elem);
                }
              }
            }

            // Apply set filters to unmatched elements
            matchedCount += i;
            if (bySet && i !== matchedCount) {
              j = 0;
              while ((matcher = setMatchers[j++])) {
                matcher(unmatched, setMatched, context, xml);
              }

              if (seed) {
                // Reintegrate element matches to eliminate the need for sorting
                if (matchedCount > 0) {
                  while (i--) {
                    if (!(unmatched[i] || setMatched[i])) {
                      setMatched[i] = pop.call(results);
                    }
                  }
                }

                // Discard index placeholder values to get only actual matches
                setMatched = condense(setMatched);
              }

              // Add matches to results
              push.apply(results, setMatched);

              // Seedless set matches succeeding multiple successful matchers stipulate sorting
              if (outermost && !seed && setMatched.length > 0 &&
                (matchedCount + setMatchers.length) > 1) {

                Sizzle.uniqueSort(results);
              }
            }

            // Override manipulation of globals by nested matchers
            if (outermost) {
              dirruns = dirrunsUnique;
              outermostContext = contextBackup;
            }

            return unmatched;
          };

        return bySet ?
          markFunction(superMatcher) :
          superMatcher;
      }

      compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
        var i,
          setMatchers = [],
          elementMatchers = [],
          cached = compilerCache[selector + " "];

        if (!cached) {
          // Generate a function of recursive functions that can be used to check each element
          if (!match) {
            match = tokenize(selector);
          }
          i = match.length;
          while (i--) {
            cached = matcherFromTokens(match[i]);
            if (cached[expando]) {
              setMatchers.push(cached);
            } else {
              elementMatchers.push(cached);
            }
          }

          // Cache the compiled function
          cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

          // Save selector and tokenization
          cached.selector = selector;
        }
        return cached;
      };

      /**
       * A low-level selection function that works with Sizzle's compiled
       *  selector functions
       * @param {String|Function} selector A selector or a pre-compiled
       *  selector function built with Sizzle.compile
       * @param {Element} context
       * @param {Array} [results]
       * @param {Array} [seed] A set of elements to match against
       */
      select = Sizzle.select = function (selector, context, results, seed) {
        var i, tokens, token, type, find,
          compiled = typeof selector === "function" && selector,
          match = !seed && tokenize((selector = compiled.selector || selector));

        results = results || [];

        // Try to minimize operations if there is no seed and only one group
        if (match.length === 1) {

          // Take a shortcut and set the context if the root selector is an ID
          tokens = match[0] = match[0].slice(0);
          if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
            support.getById && context.nodeType === 9 && documentIsHTML &&
            Expr.relative[tokens[1].type]) {

            context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
            if (!context) {
              return results;

              // Precompiled matchers will still verify ancestry, so step up a level
            } else if (compiled) {
              context = context.parentNode;
            }

            selector = selector.slice(tokens.shift().value.length);
          }

          // Fetch a seed set for right-to-left matching
          i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
          while (i--) {
            token = tokens[i];

            // Abort if we hit a combinator
            if (Expr.relative[(type = token.type)]) {
              break;
            }
            if ((find = Expr.find[type])) {
              // Search, expanding context for leading sibling combinators
              if ((seed = find(
                token.matches[0].replace(runescape, funescape),
                rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
              ))) {

                // If seed is empty or no tokens remain, we can return early
                tokens.splice(i, 1);
                selector = seed.length && toSelector(tokens);
                if (!selector) {
                  push.apply(results, seed);
                  return results;
                }

                break;
              }
            }
          }
        }

        // Compile and execute a filtering function if one is not provided
        // Provide `match` to avoid retokenization if we modified the selector above
        (compiled || compile(selector, match))(
          seed,
          context,
          !documentIsHTML,
          results,
          rsibling.test(selector) && testContext(context.parentNode) || context
        );
        return results;
      };

// One-time assignments

// Sort stability
      support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

// Support: Chrome<14
// Always assume duplicates if they aren't passed to the comparison function
      support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
      setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
      support.sortDetached = assert(function (div1) {
        // Should return 1, but returns 4 (following)
        return div1.compareDocumentPosition(document.createElement("div")) & 1;
      });

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
      if (!assert(function (div) {
        div.innerHTML = "<a href='#'></a>";
        return div.firstChild.getAttribute("href") === "#";
      })) {
        addHandle("type|href|height|width", function (elem, name, isXML) {
          if (!isXML) {
            return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
          }
        });
      }

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
      if (!support.attributes || !assert(function (div) {
        div.innerHTML = "<input/>";
        div.firstChild.setAttribute("value", "");
        return div.firstChild.getAttribute("value") === "";
      })) {
        addHandle("value", function (elem, name, isXML) {
          if (!isXML && elem.nodeName.toLowerCase() === "input") {
            return elem.defaultValue;
          }
        });
      }

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
      if (!assert(function (div) {
        return div.getAttribute("disabled") == null;
      })) {
        addHandle(booleans, function (elem, name, isXML) {
          var val;
          if (!isXML) {
            return elem[name] === true ? name.toLowerCase() :
              (val = elem.getAttributeNode(name)) && val.specified ?
                val.value :
                null;
          }
        });
      }

      return Sizzle;

    })(window);


  jQuery.find = Sizzle;
  jQuery.expr = Sizzle.selectors;
  jQuery.expr[":"] = jQuery.expr.pseudos;
  jQuery.unique = Sizzle.uniqueSort;
  jQuery.text = Sizzle.getText;
  jQuery.isXMLDoc = Sizzle.isXML;
  jQuery.contains = Sizzle.contains;


  var rneedsContext = jQuery.expr.match.needsContext;

  var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);


  var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
  function winnow(elements, qualifier, not) {
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        /* jshint -W018 */
        return !!qualifier.call(elem, i, elem) !== not;
      });

    }

    if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return (elem === qualifier) !== not;
      });

    }

    if (typeof qualifier === "string") {
      if (risSimple.test(qualifier)) {
        return jQuery.filter(qualifier, elements, not);
      }

      qualifier = jQuery.filter(qualifier, elements);
    }

    return jQuery.grep(elements, function (elem) {
      return (jQuery.inArray(elem, qualifier) >= 0) !== not;
    });
  }

  jQuery.filter = function (expr, elems, not) {
    var elem = elems[0];

    if (not) {
      expr = ":not(" + expr + ")";
    }

    return elems.length === 1 && elem.nodeType === 1 ?
      jQuery.find.matchesSelector(elem, expr) ? [elem] : [] :
      jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
        return elem.nodeType === 1;
      }));
  };

  jQuery.fn.extend({
    find: function (selector) {
      var i,
        ret = [],
        self = this,
        len = self.length;

      if (typeof selector !== "string") {
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }

      for (i = 0; i < len; i++) {
        jQuery.find(selector, self[i], ret);
      }

      // Needed because $( selector, context ) becomes $( context ).find( selector )
      ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
      ret.selector = this.selector ? this.selector + " " + selector : selector;
      return ret;
    },
    filter: function (selector) {
      return this.pushStack(winnow(this, selector || [], false));
    },
    not: function (selector) {
      return this.pushStack(winnow(this, selector || [], true));
    },
    is: function (selector) {
      return !!winnow(
        this,

        // If this is a positional/relative selector, check membership in the returned set
        // so $("p:first").is("p:last") won't return true for a doc with two "p".
        typeof selector === "string" && rneedsContext.test(selector) ?
          jQuery(selector) :
          selector || [],
        false
      ).length;
    }
  });


// Initialize a jQuery object


// A central reference to the root jQuery(document)
  var rootjQuery,

    // Use the correct document accordingly with window argument (sandbox)
    document = window.document,

    // A simple way to check for HTML strings
    // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
    // Strict HTML recognition (#11290: must start with <)
    rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

    init = jQuery.fn.init = function (selector, context) {
      var match, elem;

      // HANDLE: $(""), $(null), $(undefined), $(false)
      if (!selector) {
        return this;
      }

      // Handle HTML strings
      if (typeof selector === "string") {
        if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
          // Assume that strings that start and end with <> are HTML and skip the regex check
          match = [null, selector, null];

        } else {
          match = rquickExpr.exec(selector);
        }

        // Match html or make sure no context is specified for #id
        if (match && (match[1] || !context)) {

          // HANDLE: $(html) -> $(array)
          if (match[1]) {
            context = context instanceof jQuery ? context[0] : context;

            // scripts is true for back-compat
            // Intentionally let the error be thrown if parseHTML is not present
            jQuery.merge(this, jQuery.parseHTML(
              match[1],
              context && context.nodeType ? context.ownerDocument || context : document,
              true
            ));

            // HANDLE: $(html, props)
            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                // Properties of context are called as methods if possible
                if (jQuery.isFunction(this[match])) {
                  this[match](context[match]);

                  // ...and otherwise set as attributes
                } else {
                  this.attr(match, context[match]);
                }
              }
            }

            return this;

            // HANDLE: $(#id)
          } else {
            elem = document.getElementById(match[2]);

            // Check parentNode to catch when Blackberry 4.6 returns
            // nodes that are no longer in the document #6963
            if (elem && elem.parentNode) {
              // Handle the case where IE and Opera return items
              // by name instead of ID
              if (elem.id !== match[2]) {
                return rootjQuery.find(selector);
              }

              // Otherwise, we inject the element directly into the jQuery object
              this.length = 1;
              this[0] = elem;
            }

            this.context = document;
            this.selector = selector;
            return this;
          }

          // HANDLE: $(expr, $(...))
        } else if (!context || context.jquery) {
          return (context || rootjQuery).find(selector);

          // HANDLE: $(expr, context)
          // (which is just equivalent to: $(context).find(expr)
        } else {
          return this.constructor(context).find(selector);
        }

        // HANDLE: $(DOMElement)
      } else if (selector.nodeType) {
        this.context = this[0] = selector;
        this.length = 1;
        return this;

        // HANDLE: $(function)
        // Shortcut for document ready
      } else if (jQuery.isFunction(selector)) {
        return typeof rootjQuery.ready !== "undefined" ?
          rootjQuery.ready(selector) :
          // Execute immediately if ready is not present
          selector(jQuery);
      }

      if (selector.selector !== undefined) {
        this.selector = selector.selector;
        this.context = selector.context;
      }

      return jQuery.makeArray(selector, this);
    };

// Give the init function the jQuery prototype for later instantiation
  init.prototype = jQuery.fn;

// Initialize central reference
  rootjQuery = jQuery(document);


  var rparentsprev = /^(?:parents|prev(?:Until|All))/,
    // methods guaranteed to produce a unique set when starting from a unique set
    guaranteedUnique = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };

  jQuery.extend({
    dir: function (elem, dir, until) {
      var matched = [],
        cur = elem[dir];

      while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
        if (cur.nodeType === 1) {
          matched.push(cur);
        }
        cur = cur[dir];
      }
      return matched;
    },

    sibling: function (n, elem) {
      var r = [];

      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
          r.push(n);
        }
      }

      return r;
    }
  });

  jQuery.fn.extend({
    has: function (target) {
      var i,
        targets = jQuery(target, this),
        len = targets.length;

      return this.filter(function () {
        for (i = 0; i < len; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },

    closest: function (selectors, context) {
      var cur,
        i = 0,
        l = this.length,
        matched = [],
        pos = rneedsContext.test(selectors) || typeof selectors !== "string" ?
          jQuery(selectors, context || this.context) :
          0;

      for (; i < l; i++) {
        for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
          // Always skip document fragments
          if (cur.nodeType < 11 && (pos ?
            pos.index(cur) > -1 :

            // Don't pass non-elements to Sizzle
            cur.nodeType === 1 &&
            jQuery.find.matchesSelector(cur, selectors))) {

            matched.push(cur);
            break;
          }
        }
      }

      return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
    },

    // Determine the position of an element within
    // the matched set of elements
    index: function (elem) {

      // No argument, return index in parent
      if (!elem) {
        return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
      }

      // index in selector
      if (typeof elem === "string") {
        return jQuery.inArray(this[0], jQuery(elem));
      }

      // Locate the position of the desired element
      return jQuery.inArray(
        // If it receives a jQuery object, the first element is used
        elem.jquery ? elem[0] : elem, this);
    },

    add: function (selector, context) {
      return this.pushStack(
        jQuery.unique(
          jQuery.merge(this.get(), jQuery(selector, context))
        )
      );
    },

    addBack: function (selector) {
      return this.add(selector == null ?
        this.prevObject : this.prevObject.filter(selector)
      );
    }
  });

  function sibling(cur, dir) {
    do {
      cur = cur[dir];
    } while (cur && cur.nodeType !== 1);

    return cur;
  }

  jQuery.each({
    parent: function (elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function (elem) {
      return jQuery.dir(elem, "parentNode");
    },
    parentsUntil: function (elem, i, until) {
      return jQuery.dir(elem, "parentNode", until);
    },
    next: function (elem) {
      return sibling(elem, "nextSibling");
    },
    prev: function (elem) {
      return sibling(elem, "previousSibling");
    },
    nextAll: function (elem) {
      return jQuery.dir(elem, "nextSibling");
    },
    prevAll: function (elem) {
      return jQuery.dir(elem, "previousSibling");
    },
    nextUntil: function (elem, i, until) {
      return jQuery.dir(elem, "nextSibling", until);
    },
    prevUntil: function (elem, i, until) {
      return jQuery.dir(elem, "previousSibling", until);
    },
    siblings: function (elem) {
      return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
    },
    children: function (elem) {
      return jQuery.sibling(elem.firstChild);
    },
    contents: function (elem) {
      return jQuery.nodeName(elem, "iframe") ?
        elem.contentDocument || elem.contentWindow.document :
        jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var ret = jQuery.map(this, fn, until);

      if (name.slice(-5) !== "Until") {
        selector = until;
      }

      if (selector && typeof selector === "string") {
        ret = jQuery.filter(selector, ret);
      }

      if (this.length > 1) {
        // Remove duplicates
        if (!guaranteedUnique[name]) {
          ret = jQuery.unique(ret);
        }

        // Reverse order for parents* and prev-derivatives
        if (rparentsprev.test(name)) {
          ret = ret.reverse();
        }
      }

      return this.pushStack(ret);
    };
  });
  var rnotwhite = (/\S+/g);


// String to Object options format cache
  var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
  function createOptions(options) {
    var object = optionsCache[options] = {};
    jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }

  /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
  jQuery.Callbacks = function (options) {

    // Convert options from String-formatted to Object-formatted if needed
    // (we check in cache first)
    options = typeof options === "string" ?
      (optionsCache[options] || createOptions(options)) :
      jQuery.extend({}, options);

    var // Flag to know if list is currently firing
      firing,
      // Last fire value (for non-forgettable lists)
      memory,
      // Flag to know if list was already fired
      fired,
      // End of the loop when firing
      firingLength,
      // Index of currently firing callback (modified by remove if needed)
      firingIndex,
      // First callback to fire (used internally by add and fireWith)
      firingStart,
      // Actual callback list
      list = [],
      // Stack of fire calls for repeatable lists
      stack = !options.once && [],
      // Fire callbacks
      fire = function (data) {
        memory = options.memory && data;
        fired = true;
        firingIndex = firingStart || 0;
        firingStart = 0;
        firingLength = list.length;
        firing = true;
        for (; list && firingIndex < firingLength; firingIndex++) {
          if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
            memory = false; // To prevent further calls using add
            break;
          }
        }
        firing = false;
        if (list) {
          if (stack) {
            if (stack.length) {
              fire(stack.shift());
            }
          } else if (memory) {
            list = [];
          } else {
            self.disable();
          }
        }
      },
      // Actual Callbacks object
      self = {
        // Add a callback or a collection of callbacks to the list
        add: function () {
          if (list) {
            // First, we save the current length
            var start = list.length;
            (function add(args) {
              jQuery.each(args, function (_, arg) {
                var type = jQuery.type(arg);
                if (type === "function") {
                  if (!options.unique || !self.has(arg)) {
                    list.push(arg);
                  }
                } else if (arg && arg.length && type !== "string") {
                  // Inspect recursively
                  add(arg);
                }
              });
            })(arguments);
            // Do we need to add the callbacks to the
            // current firing batch?
            if (firing) {
              firingLength = list.length;
              // With memory, if we're not firing then
              // we should call right away
            } else if (memory) {
              firingStart = start;
              fire(memory);
            }
          }
          return this;
        },
        // Remove a callback from the list
        remove: function () {
          if (list) {
            jQuery.each(arguments, function (_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                // Handle firing indexes
                if (firing) {
                  if (index <= firingLength) {
                    firingLength--;
                  }
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              }
            });
          }
          return this;
        },
        // Check if a given callback is in the list.
        // If no argument is given, return whether or not list has callbacks attached.
        has: function (fn) {
          return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
        },
        // Remove all callbacks from the list
        empty: function () {
          list = [];
          firingLength = 0;
          return this;
        },
        // Have the list do nothing anymore
        disable: function () {
          list = stack = memory = undefined;
          return this;
        },
        // Is it disabled?
        disabled: function () {
          return !list;
        },
        // Lock the list in its current state
        lock: function () {
          stack = undefined;
          if (!memory) {
            self.disable();
          }
          return this;
        },
        // Is it locked?
        locked: function () {
          return !stack;
        },
        // Call all callbacks with the given context and arguments
        fireWith: function (context, args) {
          if (list && (!fired || stack)) {
            args = args || [];
            args = [context, args.slice ? args.slice() : args];
            if (firing) {
              stack.push(args);
            } else {
              fire(args);
            }
          }
          return this;
        },
        // Call all the callbacks with the given arguments
        fire: function () {
          self.fireWith(this, arguments);
          return this;
        },
        // To know if the callbacks have already been called at least once
        fired: function () {
          return !!fired;
        }
      };

    return self;
  };


  jQuery.extend({

    Deferred: function (func) {
      var tuples = [
          // action, add listener, listener list, final state
          ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
          ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
          ["notify", "progress", jQuery.Callbacks("memory")]
        ],
        state = "pending",
        promise = {
          state: function () {
            return state;
          },
          always: function () {
            deferred.done(arguments).fail(arguments);
            return this;
          },
          then: function ( /* fnDone, fnFail, fnProgress */) {
            var fns = arguments;
            return jQuery.Deferred(function (newDefer) {
              jQuery.each(tuples, function (i, tuple) {
                var fn = jQuery.isFunction(fns[i]) && fns[i];
                // deferred[ done | fail | progress ] for forwarding actions to newDefer
                deferred[tuple[1]](function () {
                  var returned = fn && fn.apply(this, arguments);
                  if (returned && jQuery.isFunction(returned.promise)) {
                    returned.promise()
                      .done(newDefer.resolve)
                      .fail(newDefer.reject)
                      .progress(newDefer.notify);
                  } else {
                    newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                  }
                });
              });
              fns = null;
            }).promise();
          },
          // Get a promise for this deferred
          // If obj is provided, the promise aspect is added to the object
          promise: function (obj) {
            return obj != null ? jQuery.extend(obj, promise) : promise;
          }
        },
        deferred = {};

      // Keep pipe for back-compat
      promise.pipe = promise.then;

      // Add list-specific methods
      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2],
          stateString = tuple[3];

        // promise[ done | fail | progress ] = list.add
        promise[tuple[1]] = list.add;

        // Handle state
        if (stateString) {
          list.add(function () {
            // state = [ resolved | rejected ]
            state = stateString;

            // [ reject_list | resolve_list ].disable; progress_list.lock
          }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
        }

        // deferred[ resolve | reject | notify ]
        deferred[tuple[0]] = function () {
          deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
          return this;
        };
        deferred[tuple[0] + "With"] = list.fireWith;
      });

      // Make the deferred a promise
      promise.promise(deferred);

      // Call given func if any
      if (func) {
        func.call(deferred, deferred);
      }

      // All done!
      return deferred;
    },

    // Deferred helper
    when: function (subordinate /* , ..., subordinateN */) {
      var i = 0,
        resolveValues = slice.call(arguments),
        length = resolveValues.length,

        // the count of uncompleted subordinates
        remaining = length !== 1 || (subordinate && jQuery.isFunction(subordinate.promise)) ? length : 0,

        // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
        deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

        // Update function for both resolve and progress values
        updateFunc = function (i, contexts, values) {
          return function (value) {
            contexts[i] = this;
            values[i] = arguments.length > 1 ? slice.call(arguments) : value;
            if (values === progressValues) {
              deferred.notifyWith(contexts, values);

            } else if (!(--remaining)) {
              deferred.resolveWith(contexts, values);
            }
          };
        },

        progressValues, progressContexts, resolveContexts;

      // add listeners to Deferred subordinates; treat others as resolved
      if (length > 1) {
        progressValues = new Array(length);
        progressContexts = new Array(length);
        resolveContexts = new Array(length);
        for (; i < length; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise()
              .done(updateFunc(i, resolveContexts, resolveValues))
              .fail(deferred.reject)
              .progress(updateFunc(i, progressContexts, progressValues));
          } else {
            --remaining;
          }
        }
      }

      // if we're not waiting on anything, resolve the master
      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }

      return deferred.promise();
    }
  });


// The deferred used on DOM ready
  var readyList;

  jQuery.fn.ready = function (fn) {
    // Add the callback
    jQuery.ready.promise().done(fn);

    return this;
  };

  jQuery.extend({
    // Is the DOM ready to be used? Set to true once it occurs.
    isReady: false,

    // A counter to track how many items to wait for before
    // the ready event fires. See #6781
    readyWait: 1,

    // Hold (or release) the ready event
    holdReady: function (hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },

    // Handle when the DOM is ready
    ready: function (wait) {

      // Abort if there are pending holds or we're already ready
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }

      // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
      if (!document.body) {
        return setTimeout(jQuery.ready);
      }

      // Remember that the DOM is ready
      jQuery.isReady = true;

      // If a normal DOM Ready event fired, decrement, and wait if need be
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }

      // If there are functions bound, to execute
      readyList.resolveWith(document, [jQuery]);

      // Trigger any bound ready events
      if (jQuery.fn.triggerHandler) {
        jQuery(document).triggerHandler("ready");
        jQuery(document).off("ready");
      }
    }
  });

  /**
   * Clean-up method for dom ready events
   */
  function detach() {
    if (document.addEventListener) {
      document.removeEventListener("DOMContentLoaded", completed, false);
      window.removeEventListener("load", completed, false);

    } else {
      document.detachEvent("onreadystatechange", completed);
      window.detachEvent("onload", completed);
    }
  }

  /**
   * The ready event handler and self cleanup method
   */
  function completed() {
    // readyState === "complete" is good enough for us to call the dom ready in oldIE
    if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
      detach();
      jQuery.ready();
    }
  }

  jQuery.ready.promise = function (obj) {
    if (!readyList) {

      readyList = jQuery.Deferred();

      // Catch cases where $(document).ready() is called after the browser event has already occurred.
      // we once tried to use readyState "interactive" here, but it caused issues like the one
      // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
      if (document.readyState === "complete") {
        // Handle it asynchronously to allow scripts the opportunity to delay ready
        setTimeout(jQuery.ready);

        // Standards-based browsers support DOMContentLoaded
      } else if (document.addEventListener) {
        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed, false);

        // A fallback to window.onload, that will always work
        window.addEventListener("load", completed, false);

        // If IE event model is used
      } else {
        // Ensure firing before onload, maybe late but safe also for iframes
        document.attachEvent("onreadystatechange", completed);

        // A fallback to window.onload, that will always work
        window.attachEvent("onload", completed);

        // If IE and not a frame
        // continually check to see if the document is ready
        var top = false;

        try {
          top = window.frameElement == null && document.documentElement;
        } catch (e) {
        }

        if (top && top.doScroll) {
          (function doScrollCheck() {
            if (!jQuery.isReady) {

              try {
                // Use the trick by Diego Perini
                // http://javascript.nwbox.com/IEContentLoaded/
                top.doScroll("left");
              } catch (e) {
                return setTimeout(doScrollCheck, 50);
              }

              // detach all dom ready events
              detach();

              // and execute any waiting functions
              jQuery.ready();
            }
          })();
        }
      }
    }
    return readyList.promise(obj);
  };


  var strundefined = typeof undefined;


// Support: IE<9
// Iteration over object's inherited properties before its own
  var i;
  for (i in jQuery(support)) {
    break;
  }
  support.ownLast = i !== "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
  support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
  jQuery(function () {
    // Minified: var a,b,c,d
    var val, div, body, container;

    body = document.getElementsByTagName("body")[0];
    if (!body || !body.style) {
      // Return for frameset docs that don't have a body
      return;
    }

    // Setup
    div = document.createElement("div");
    container = document.createElement("div");
    container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
    body.appendChild(container).appendChild(div);

    if (typeof div.style.zoom !== strundefined) {
      // Support: IE<8
      // Check if natively block-level elements act like inline-block
      // elements when setting their display to 'inline' and giving
      // them layout
      div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

      support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
      if (val) {
        // Prevent IE 6 from affecting layout for positioned elements #11048
        // Prevent IE from shrinking the body in IE 7 mode #12869
        // Support: IE<8
        body.style.zoom = 1;
      }
    }

    body.removeChild(container);
  });


  (function () {
    var div = document.createElement("div");

    // Execute the test only if not already executed in another module.
    if (support.deleteExpando == null) {
      // Support: IE<9
      support.deleteExpando = true;
      try {
        delete div.test;
      } catch (e) {
        support.deleteExpando = false;
      }
    }

    // Null elements to avoid leaks in IE.
    div = null;
  })();


  /**
   * Determines whether an object can have data
   */
  jQuery.acceptData = function (elem) {
    var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
      nodeType = +elem.nodeType || 1;

    // Do not set data on non-element DOM nodes because it will not be cleared (#8335).
    return nodeType !== 1 && nodeType !== 9 ?
      false :

      // Nodes accept data unless otherwise specified; rejection can be conditional
      !noData || noData !== true && elem.getAttribute("classid") === noData;
  };


  var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    rmultiDash = /([A-Z])/g;

  function dataAttr(elem, key, data) {
    // If nothing was found internally, try to fetch any
    // data from the HTML5 data-* attribute
    if (data === undefined && elem.nodeType === 1) {

      var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();

      data = elem.getAttribute(name);

      if (typeof data === "string") {
        try {
          data = data === "true" ? true :
            data === "false" ? false :
              data === "null" ? null :
                // Only convert to a number if it doesn't change the string
                +data + "" === data ? +data :
                  rbrace.test(data) ? jQuery.parseJSON(data) :
                    data;
        } catch (e) {
        }

        // Make sure we set the data so it isn't changed later
        jQuery.data(elem, key, data);

      } else {
        data = undefined;
      }
    }

    return data;
  }

// checks a cache object for emptiness
  function isEmptyDataObject(obj) {
    var name;
    for (name in obj) {

      // if the public data object is empty, the private is still empty
      if (name === "data" && jQuery.isEmptyObject(obj[name])) {
        continue;
      }
      if (name !== "toJSON") {
        return false;
      }
    }

    return true;
  }

  function internalData(elem, name, data, pvt /* Internal Use Only */) {
    if (!jQuery.acceptData(elem)) {
      return;
    }

    var ret, thisCache,
      internalKey = jQuery.expando,

      // We have to handle DOM nodes and JS objects differently because IE6-7
      // can't GC object references properly across the DOM-JS boundary
      isNode = elem.nodeType,

      // Only DOM nodes need the global jQuery cache; JS object data is
      // attached directly to the object so GC can occur automatically
      cache = isNode ? jQuery.cache : elem,

      // Only defining an ID for JS objects if its cache already exists allows
      // the code to shortcut on the same path as a DOM node with no cache
      id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;

    // Avoid doing any more work than we need to when trying to get data on an
    // object that has no data at all
    if ((!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string") {
      return;
    }

    if (!id) {
      // Only DOM nodes need a new unique ID for each element since their data
      // ends up in the global cache
      if (isNode) {
        id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
      } else {
        id = internalKey;
      }
    }

    if (!cache[id]) {
      // Avoid exposing jQuery metadata on plain JS objects when the object
      // is serialized using JSON.stringify
      cache[id] = isNode ? {} : {toJSON: jQuery.noop};
    }

    // An object can be passed to jQuery.data instead of a key/value pair; this gets
    // shallow copied over onto the existing cache
    if (typeof name === "object" || typeof name === "function") {
      if (pvt) {
        cache[id] = jQuery.extend(cache[id], name);
      } else {
        cache[id].data = jQuery.extend(cache[id].data, name);
      }
    }

    thisCache = cache[id];

    // jQuery data() is stored in a separate object inside the object's internal data
    // cache in order to avoid key collisions between internal data and user-defined
    // data.
    if (!pvt) {
      if (!thisCache.data) {
        thisCache.data = {};
      }

      thisCache = thisCache.data;
    }

    if (data !== undefined) {
      thisCache[jQuery.camelCase(name)] = data;
    }

    // Check for both converted-to-camel and non-converted data property names
    // If a data property was specified
    if (typeof name === "string") {

      // First Try to find as-is property data
      ret = thisCache[name];

      // Test for null|undefined property data
      if (ret == null) {

        // Try to find the camelCased property
        ret = thisCache[jQuery.camelCase(name)];
      }
    } else {
      ret = thisCache;
    }

    return ret;
  }

  function internalRemoveData(elem, name, pvt) {
    if (!jQuery.acceptData(elem)) {
      return;
    }

    var thisCache, i,
      isNode = elem.nodeType,

      // See jQuery.data for more information
      cache = isNode ? jQuery.cache : elem,
      id = isNode ? elem[jQuery.expando] : jQuery.expando;

    // If there is already no cache entry for this object, there is no
    // purpose in continuing
    if (!cache[id]) {
      return;
    }

    if (name) {

      thisCache = pvt ? cache[id] : cache[id].data;

      if (thisCache) {

        // Support array or space separated string names for data keys
        if (!jQuery.isArray(name)) {

          // try the string as a key before any manipulation
          if (name in thisCache) {
            name = [name];
          } else {

            // split the camel cased version by spaces unless a key with the spaces exists
            name = jQuery.camelCase(name);
            if (name in thisCache) {
              name = [name];
            } else {
              name = name.split(" ");
            }
          }
        } else {
          // If "name" is an array of keys...
          // When data is initially created, via ("key", "val") signature,
          // keys will be converted to camelCase.
          // Since there is no way to tell _how_ a key was added, remove
          // both plain key and camelCase key. #12786
          // This will only penalize the array argument path.
          name = name.concat(jQuery.map(name, jQuery.camelCase));
        }

        i = name.length;
        while (i--) {
          delete thisCache[name[i]];
        }

        // If there is no data left in the cache, we want to continue
        // and let the cache object itself get destroyed
        if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
          return;
        }
      }
    }

    // See jQuery.data for more information
    if (!pvt) {
      delete cache[id].data;

      // Don't destroy the parent cache unless the internal data object
      // had been the only thing left in it
      if (!isEmptyDataObject(cache[id])) {
        return;
      }
    }

    // Destroy the cache
    if (isNode) {
      jQuery.cleanData([elem], true);

      // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
      /* jshint eqeqeq: false */
    } else if (support.deleteExpando || cache != cache.window) {
      /* jshint eqeqeq: true */
      delete cache[id];

      // When all else fails, null
    } else {
      cache[id] = null;
    }
  }

  jQuery.extend({
    cache: {},

    // The following elements (space-suffixed to avoid Object.prototype collisions)
    // throw uncatchable exceptions if you attempt to set expando properties
    noData: {
      "applet ": true,
      "embed ": true,
      // ...but Flash objects (which have this classid) *can* handle expandos
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },

    hasData: function (elem) {
      elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
      return !!elem && !isEmptyDataObject(elem);
    },

    data: function (elem, name, data) {
      return internalData(elem, name, data);
    },

    removeData: function (elem, name) {
      return internalRemoveData(elem, name);
    },

    // For internal use only.
    _data: function (elem, name, data) {
      return internalData(elem, name, data, true);
    },

    _removeData: function (elem, name) {
      return internalRemoveData(elem, name, true);
    }
  });

  jQuery.fn.extend({
    data: function (key, value) {
      var i, name, data,
        elem = this[0],
        attrs = elem && elem.attributes;

      // Special expections of .data basically thwart jQuery.access,
      // so implement the relevant behavior ourselves

      // Gets all values
      if (key === undefined) {
        if (this.length) {
          data = jQuery.data(elem);

          if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
            i = attrs.length;
            while (i--) {

              // Support: IE11+
              // The attrs elements can be null (#14894)
              if (attrs[i]) {
                name = attrs[i].name;
                if (name.indexOf("data-") === 0) {
                  name = jQuery.camelCase(name.slice(5));
                  dataAttr(elem, name, data[name]);
                }
              }
            }
            jQuery._data(elem, "parsedAttrs", true);
          }
        }

        return data;
      }

      // Sets multiple values
      if (typeof key === "object") {
        return this.each(function () {
          jQuery.data(this, key);
        });
      }

      return arguments.length > 1 ?

        // Sets one value
        this.each(function () {
          jQuery.data(this, key, value);
        }) :

        // Gets one value
        // Try to fetch any internally stored data first
        elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
    },

    removeData: function (key) {
      return this.each(function () {
        jQuery.removeData(this, key);
      });
    }
  });


  jQuery.extend({
    queue: function (elem, type, data) {
      var queue;

      if (elem) {
        type = (type || "fx") + "queue";
        queue = jQuery._data(elem, type);

        // Speed up dequeue by getting out quickly if this is just a lookup
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = jQuery._data(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },

    dequeue: function (elem, type) {
      type = type || "fx";

      var queue = jQuery.queue(elem, type),
        startLength = queue.length,
        fn = queue.shift(),
        hooks = jQuery._queueHooks(elem, type),
        next = function () {
          jQuery.dequeue(elem, type);
        };

      // If the fx queue is dequeued, always remove the progress sentinel
      if (fn === "inprogress") {
        fn = queue.shift();
        startLength--;
      }

      if (fn) {

        // Add a progress sentinel to prevent the fx queue from being
        // automatically dequeued
        if (type === "fx") {
          queue.unshift("inprogress");
        }

        // clear up the last queue stop function
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }

      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },

    // not intended for public consumption - generates a queueHooks object, or returns the current one
    _queueHooks: function (elem, type) {
      var key = type + "queueHooks";
      return jQuery._data(elem, key) || jQuery._data(elem, key, {
        empty: jQuery.Callbacks("once memory").add(function () {
          jQuery._removeData(elem, type + "queue");
          jQuery._removeData(elem, key);
        })
      });
    }
  });

  jQuery.fn.extend({
    queue: function (type, data) {
      var setter = 2;

      if (typeof type !== "string") {
        data = type;
        type = "fx";
        setter--;
      }

      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }

      return data === undefined ?
        this :
        this.each(function () {
          var queue = jQuery.queue(this, type, data);

          // ensure a hooks for this queue
          jQuery._queueHooks(this, type);

          if (type === "fx" && queue[0] !== "inprogress") {
            jQuery.dequeue(this, type);
          }
        });
    },
    dequeue: function (type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    clearQueue: function (type) {
      return this.queue(type || "fx", []);
    },
    // Get a promise resolved when queues of a certain type
    // are emptied (fx is the type by default)
    promise: function (type, obj) {
      var tmp,
        count = 1,
        defer = jQuery.Deferred(),
        elements = this,
        i = this.length,
        resolve = function () {
          if (!(--count)) {
            defer.resolveWith(elements, [elements]);
          }
        };

      if (typeof type !== "string") {
        obj = type;
        type = undefined;
      }
      type = type || "fx";

      while (i--) {
        tmp = jQuery._data(elements[i], type + "queueHooks");
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

  var cssExpand = ["Top", "Right", "Bottom", "Left"];

  var isHidden = function (elem, el) {
    // isHidden might be called from jQuery#filter function;
    // in that case, element will be second argument
    elem = el || elem;
    return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
  };


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
  var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
    var i = 0,
      length = elems.length,
      bulk = key == null;

    // Sets many values
    if (jQuery.type(key) === "object") {
      chainable = true;
      for (i in key) {
        jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
      }

      // Sets one value
    } else if (value !== undefined) {
      chainable = true;

      if (!jQuery.isFunction(value)) {
        raw = true;
      }

      if (bulk) {
        // Bulk operations run against the entire set
        if (raw) {
          fn.call(elems, value);
          fn = null;

          // ...except when executing function values
        } else {
          bulk = fn;
          fn = function (elem, key, value) {
            return bulk.call(jQuery(elem), value);
          };
        }
      }

      if (fn) {
        for (; i < length; i++) {
          fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
        }
      }
    }

    return chainable ?
      elems :

      // Gets
      bulk ?
        fn.call(elems) :
        length ? fn(elems[0], key) : emptyGet;
  };
  var rcheckableType = (/^(?:checkbox|radio)$/i);


  (function () {
    // Minified: var a,b,c
    var input = document.createElement("input"),
      div = document.createElement("div"),
      fragment = document.createDocumentFragment();

    // Setup
    div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

    // IE strips leading whitespace when .innerHTML is used
    support.leadingWhitespace = div.firstChild.nodeType === 3;

    // Make sure that tbody elements aren't automatically inserted
    // IE will insert them into empty tables
    support.tbody = !div.getElementsByTagName("tbody").length;

    // Make sure that link elements get serialized correctly by innerHTML
    // This requires a wrapper element in IE
    support.htmlSerialize = !!div.getElementsByTagName("link").length;

    // Makes sure cloning an html5 element does not cause problems
    // Where outerHTML is undefined, this still works
    support.html5Clone =
      document.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";

    // Check if a disconnected checkbox will retain its checked
    // value of true after appended to the DOM (IE6/7)
    input.type = "checkbox";
    input.checked = true;
    fragment.appendChild(input);
    support.appendChecked = input.checked;

    // Make sure textarea (and checkbox) defaultValue is properly cloned
    // Support: IE6-IE11+
    div.innerHTML = "<textarea>x</textarea>";
    support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;

    // #11217 - WebKit loses check when the name is after the checked attribute
    fragment.appendChild(div);
    div.innerHTML = "<input type='radio' checked='checked' name='t'/>";

    // Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
    // old WebKit doesn't clone checked state correctly in fragments
    support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

    // Support: IE<9
    // Opera does not clone events (and typeof div.attachEvent === undefined).
    // IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
    support.noCloneEvent = true;
    if (div.attachEvent) {
      div.attachEvent("onclick", function () {
        support.noCloneEvent = false;
      });

      div.cloneNode(true).click();
    }

    // Execute the test only if not already executed in another module.
    if (support.deleteExpando == null) {
      // Support: IE<9
      support.deleteExpando = true;
      try {
        delete div.test;
      } catch (e) {
        support.deleteExpando = false;
      }
    }
  })();


  (function () {
    var i, eventName,
      div = document.createElement("div");

    // Support: IE<9 (lack submit/change bubble), Firefox 23+ (lack focusin event)
    for (i in {submit: true, change: true, focusin: true}) {
      eventName = "on" + i;

      if (!(support[i + "Bubbles"] = eventName in window)) {
        // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
        div.setAttribute(eventName, "t");
        support[i + "Bubbles"] = div.attributes[eventName].expando === false;
      }
    }

    // Null elements to avoid leaks in IE.
    div = null;
  })();


  var rformElems = /^(?:input|select|textarea)$/i,
    rkeyEvent = /^key/,
    rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
    rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

  function returnTrue() {
    return true;
  }

  function returnFalse() {
    return false;
  }

  function safeActiveElement() {
    try {
      return document.activeElement;
    } catch (err) {
    }
  }

  /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
  jQuery.event = {

    global: {},

    add: function (elem, types, handler, data, selector) {
      var tmp, events, t, handleObjIn,
        special, eventHandle, handleObj,
        handlers, type, namespaces, origType,
        elemData = jQuery._data(elem);

      // Don't attach events to noData or text/comment nodes (but allow plain objects)
      if (!elemData) {
        return;
      }

      // Caller can pass in an object of custom data in lieu of the handler
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }

      // Make sure that the handler has a unique ID, used to find/remove it later
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }

      // Init the element's event structure and main handler, if this is the first
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          // Discard the second event of a jQuery.event.trigger() and
          // when an event is called after a page has unloaded
          return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
            jQuery.event.dispatch.apply(eventHandle.elem, arguments) :
            undefined;
        };
        // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
        eventHandle.elem = elem;
      }

      // Handle multiple events separated by a space
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();

        // There *must* be a type, no attaching namespace-only handlers
        if (!type) {
          continue;
        }

        // If event changes its type, use the special event handlers for the changed type
        special = jQuery.event.special[type] || {};

        // If selector defined, determine special event api type, otherwise given type
        type = (selector ? special.delegateType : special.bindType) || type;

        // Update special based on newly reset type
        special = jQuery.event.special[type] || {};

        // handleObj is passed to all event handlers
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join(".")
        }, handleObjIn);

        // Init the event handler queue if we're the first
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;

          // Only use addEventListener/attachEvent if the special events handler returns false
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            // Bind the global event handler to the element
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle, false);

            } else if (elem.attachEvent) {
              elem.attachEvent("on" + type, eventHandle);
            }
          }
        }

        if (special.add) {
          special.add.call(elem, handleObj);

          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }

        // Add to the element's handler list, delegates in front
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }

        // Keep track of which events have ever been used, for event optimization
        jQuery.event.global[type] = true;
      }

      // Nullify elem to prevent memory leaks in IE
      elem = null;
    },

    // Detach an event or set of events from an element
    remove: function (elem, types, handler, selector, mappedTypes) {
      var j, handleObj, tmp,
        origCount, t, events,
        special, handlers, type,
        namespaces, origType,
        elemData = jQuery.hasData(elem) && jQuery._data(elem);

      if (!elemData || !(events = elemData.events)) {
        return;
      }

      // Once for each type.namespace in types; type may be omitted
      types = (types || "").match(rnotwhite) || [""];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || "").split(".").sort();

        // Unbind all events (on this namespace, if provided) for the element
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }

        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

        // Remove matching events
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];

          if ((mappedTypes || origType === handleObj.origType) &&
            (!handler || handler.guid === handleObj.guid) &&
            (!tmp || tmp.test(handleObj.namespace)) &&
            (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
            handlers.splice(j, 1);

            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }

        // Remove generic event handler if we removed something and no more handlers exist
        // (avoids potential for endless recursion during removal of special event handlers)
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }

          delete events[type];
        }
      }

      // Remove the expando if it's no longer used
      if (jQuery.isEmptyObject(events)) {
        delete elemData.handle;

        // removeData also checks for emptiness and clears the expando if empty
        // so use it instead of delete
        jQuery._removeData(elem, "events");
      }
    },

    trigger: function (event, data, elem, onlyHandlers) {
      var handle, ontype, cur,
        bubbleType, special, tmp, i,
        eventPath = [elem || document],
        type = hasOwn.call(event, "type") ? event.type : event,
        namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

      cur = tmp = elem = elem || document;

      // Don't do events on text and comment nodes
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }

      // focus/blur morphs to focusin/out; ensure we're not firing them right now
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }

      if (type.indexOf(".") >= 0) {
        // Namespaced trigger; create a regexp to match event type in handle()
        namespaces = type.split(".");
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(":") < 0 && "on" + type;

      // Caller can pass in a jQuery.Event object, Object, or just an event type string
      event = event[jQuery.expando] ?
        event :
        new jQuery.Event(type, typeof event === "object" && event);

      // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
      event.isTrigger = onlyHandlers ? 2 : 3;
      event.namespace = namespaces.join(".");
      event.namespace_re = event.namespace ?
        new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
        null;

      // Clean up the event in case it is being reused
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }

      // Clone any incoming data and prepend the event, creating the handler arg list
      data = data == null ?
        [event] :
        jQuery.makeArray(data, [event]);

      // Allow special events to draw outside the lines
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }

      // Determine event propagation path in advance, per W3C events spec (#9951)
      // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }

        // Only add window if we got to document (e.g., not plain obj or detached DOM)
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }

      // Fire handlers on the event path
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

        event.type = i > 1 ?
          bubbleType :
          special.bindType || type;

        // jQuery handler
        handle = (jQuery._data(cur, "events") || {})[event.type] && jQuery._data(cur, "handle");
        if (handle) {
          handle.apply(cur, data);
        }

        // Native handler
        handle = ontype && cur[ontype];
        if (handle && handle.apply && jQuery.acceptData(cur)) {
          event.result = handle.apply(cur, data);
          if (event.result === false) {
            event.preventDefault();
          }
        }
      }
      event.type = type;

      // If nobody prevented the default action, do it now
      if (!onlyHandlers && !event.isDefaultPrevented()) {

        if ((!special._default || special._default.apply(eventPath.pop(), data) === false) &&
          jQuery.acceptData(elem)) {

          // Call a native DOM method on the target with the same name name as the event.
          // Can't use an .isFunction() check here because IE6/7 fails that test.
          // Don't do default actions on window, that's where global variables be (#6170)
          if (ontype && elem[type] && !jQuery.isWindow(elem)) {

            // Don't re-trigger an onFOO event when we call its FOO() method
            tmp = elem[ontype];

            if (tmp) {
              elem[ontype] = null;
            }

            // Prevent re-triggering of the same event, since we already bubbled it above
            jQuery.event.triggered = type;
            try {
              elem[type]();
            } catch (e) {
              // IE<9 dies on focus/blur to hidden element (#1486,#12518)
              // only reproducible on winXP IE8 native, not IE9 in IE8 mode
            }
            jQuery.event.triggered = undefined;

            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }

      return event.result;
    },

    dispatch: function (event) {

      // Make a writable jQuery.Event from the native event object
      event = jQuery.event.fix(event);

      var i, ret, handleObj, matched, j,
        handlerQueue = [],
        args = slice.call(arguments),
        handlers = (jQuery._data(this, "events") || {})[event.type] || [],
        special = jQuery.event.special[event.type] || {};

      // Use the fix-ed jQuery.Event rather than the (read-only) native event
      args[0] = event;
      event.delegateTarget = this;

      // Call the preDispatch hook for the mapped type, and let it bail if desired
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }

      // Determine handlers
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);

      // Run delegates first; they may want to stop propagation beneath us
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;

        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

          // Triggered event must either 1) have no namespace, or
          // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
          if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {

            event.handleObj = handleObj;
            event.data = handleObj.data;

            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler)
              .apply(matched.elem, args);

            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }

      // Call the postDispatch hook for the mapped type
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }

      return event.result;
    },

    handlers: function (event, handlers) {
      var sel, handleObj, matches, i,
        handlerQueue = [],
        delegateCount = handlers.delegateCount,
        cur = event.target;

      // Find delegate handlers
      // Black-hole SVG <use> instance trees (#13180)
      // Avoid non-left-click bubbling in Firefox (#3861)
      if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {

        /* jshint eqeqeq: false */
        for (; cur != this; cur = cur.parentNode || this) {
          /* jshint eqeqeq: true */

          // Don't check non-elements (#13208)
          // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
          if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
            matches = [];
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];

              // Don't conflict with Object.prototype properties (#13203)
              sel = handleObj.selector + " ";

              if (matches[sel] === undefined) {
                matches[sel] = handleObj.needsContext ?
                  jQuery(sel, this).index(cur) >= 0 :
                  jQuery.find(sel, this, null, [cur]).length;
              }
              if (matches[sel]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({elem: cur, handlers: matches});
            }
          }
        }
      }

      // Add the remaining (directly-bound) handlers
      if (delegateCount < handlers.length) {
        handlerQueue.push({elem: this, handlers: handlers.slice(delegateCount)});
      }

      return handlerQueue;
    },

    fix: function (event) {
      if (event[jQuery.expando]) {
        return event;
      }

      // Create a writable copy of the event object and normalize some properties
      var i, prop, copy,
        type = event.type,
        originalEvent = event,
        fixHook = this.fixHooks[type];

      if (!fixHook) {
        this.fixHooks[type] = fixHook =
          rmouseEvent.test(type) ? this.mouseHooks :
            rkeyEvent.test(type) ? this.keyHooks :
              {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

      event = new jQuery.Event(originalEvent);

      i = copy.length;
      while (i--) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      }

      // Support: IE<9
      // Fix target property (#1925)
      if (!event.target) {
        event.target = originalEvent.srcElement || document;
      }

      // Support: Chrome 23+, Safari?
      // Target should not be a text node (#504, #13143)
      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      }

      // Support: IE<9
      // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
      event.metaKey = !!event.metaKey;

      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },

    // Includes some event props shared by KeyEvent and MouseEvent
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

    fixHooks: {},

    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (event, original) {

        // Add which for key events
        if (event.which == null) {
          event.which = original.charCode != null ? original.charCode : original.keyCode;
        }

        return event;
      }
    },

    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function (event, original) {
        var body, eventDoc, doc,
          button = original.button,
          fromElement = original.fromElement;

        // Calculate pageX/Y if missing and clientX/Y available
        if (event.pageX == null && original.clientX != null) {
          eventDoc = event.target.ownerDocument || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;

          event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }

        // Add relatedTarget, if necessary
        if (!event.relatedTarget && fromElement) {
          event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
        }

        // Add which for click: 1 === left; 2 === middle; 3 === right
        // Note: button is not normalized, so don't use it
        if (!event.which && button !== undefined) {
          event.which = (button & 1 ? 1 : (button & 2 ? 3 : (button & 4 ? 2 : 0)));
        }

        return event;
      }
    },

    special: {
      load: {
        // Prevent triggered image.load events from bubbling to window.load
        noBubble: true
      },
      focus: {
        // Fire native event if possible so blur/focus sequence is correct
        trigger: function () {
          if (this !== safeActiveElement() && this.focus) {
            try {
              this.focus();
              return false;
            } catch (e) {
              // Support: IE<9
              // If we error on focus to hidden element (#1486, #12518),
              // let .trigger() run the handlers
            }
          }
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function () {
          if (this === safeActiveElement() && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: "focusout"
      },
      click: {
        // For checkbox, fire native event so checked state will be right
        trigger: function () {
          if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
            this.click();
            return false;
          }
        },

        // For cross-browser consistency, don't fire native .click() on links
        _default: function (event) {
          return jQuery.nodeName(event.target, "a");
        }
      },

      beforeunload: {
        postDispatch: function (event) {

          // Support: Firefox 20+
          // Firefox doesn't alert if the returnValue field is not set.
          if (event.result !== undefined && event.originalEvent) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    },

    simulate: function (type, elem, event, bubble) {
      // Piggyback on a donor event to simulate a different one.
      // Fake originalEvent to avoid donor's stopPropagation, but if the
      // simulated event prevents default then we do the same on the donor.
      var e = jQuery.extend(
        new jQuery.Event(),
        event,
        {
          type: type,
          isSimulated: true,
          originalEvent: {}
        }
      );
      if (bubble) {
        jQuery.event.trigger(e, null, elem);
      } else {
        jQuery.event.dispatch.call(elem, e);
      }
      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  };

  jQuery.removeEvent = document.removeEventListener ?
    function (elem, type, handle) {
      if (elem.removeEventListener) {
        elem.removeEventListener(type, handle, false);
      }
    } :
    function (elem, type, handle) {
      var name = "on" + type;

      if (elem.detachEvent) {

        // #8545, #7054, preventing memory leaks for custom events in IE6-8
        // detachEvent needed property on element, by name of that event, to properly expose it to GC
        if (typeof elem[name] === strundefined) {
          elem[name] = null;
        }

        elem.detachEvent(name, handle);
      }
    };

  jQuery.Event = function (src, props) {
    // Allow instantiation without the 'new' keyword
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }

    // Event object
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;

      // Events bubbling up the document may have been marked as prevented
      // by a handler lower down the tree; reflect the correct value.
      this.isDefaultPrevented = src.defaultPrevented ||
      src.defaultPrevented === undefined &&
      // Support: IE < 9, Android < 4.0
      src.returnValue === false ?
        returnTrue :
        returnFalse;

      // Event type
    } else {
      this.type = src;
    }

    // Put explicitly provided properties onto the event object
    if (props) {
      jQuery.extend(this, props);
    }

    // Create a timestamp if incoming event doesn't have one
    this.timeStamp = src && src.timeStamp || jQuery.now();

    // Mark it as fixed
    this[jQuery.expando] = true;
  };

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
  jQuery.Event.prototype = {
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,

    preventDefault: function () {
      var e = this.originalEvent;

      this.isDefaultPrevented = returnTrue;
      if (!e) {
        return;
      }

      // If preventDefault exists, run it on the original event
      if (e.preventDefault) {
        e.preventDefault();

        // Support: IE
        // Otherwise set the returnValue property of the original event to false
      } else {
        e.returnValue = false;
      }
    },
    stopPropagation: function () {
      var e = this.originalEvent;

      this.isPropagationStopped = returnTrue;
      if (!e) {
        return;
      }
      // If stopPropagation exists, run it on the original event
      if (e.stopPropagation) {
        e.stopPropagation();
      }

      // Support: IE
      // Set the cancelBubble property of the original event to true
      e.cancelBubble = true;
    },
    stopImmediatePropagation: function () {
      var e = this.originalEvent;

      this.isImmediatePropagationStopped = returnTrue;

      if (e && e.stopImmediatePropagation) {
        e.stopImmediatePropagation();
      }

      this.stopPropagation();
    }
  };

// Create mouseenter/leave events using mouseover/out and event-time checks
  jQuery.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,

      handle: function (event) {
        var ret,
          target = this,
          related = event.relatedTarget,
          handleObj = event.handleObj;

        // For mousenter/leave call the handler if related is outside the target.
        // NB: No relatedTarget if the mouse left/entered the browser window
        if (!related || (related !== target && !jQuery.contains(target, related))) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });

// IE submit delegation
  if (!support.submitBubbles) {

    jQuery.event.special.submit = {
      setup: function () {
        // Only need this for delegated form submit events
        if (jQuery.nodeName(this, "form")) {
          return false;
        }

        // Lazy-add a submit handler when a descendant form may potentially be submitted
        jQuery.event.add(this, "click._submit keypress._submit", function (e) {
          // Node name check avoids a VML-related crash in IE (#9807)
          var elem = e.target,
            form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
          if (form && !jQuery._data(form, "submitBubbles")) {
            jQuery.event.add(form, "submit._submit", function (event) {
              event._submit_bubble = true;
            });
            jQuery._data(form, "submitBubbles", true);
          }
        });
        // return undefined since we don't need an event listener
      },

      postDispatch: function (event) {
        // If form was submitted by the user, bubble the event up the tree
        if (event._submit_bubble) {
          delete event._submit_bubble;
          if (this.parentNode && !event.isTrigger) {
            jQuery.event.simulate("submit", this.parentNode, event, true);
          }
        }
      },

      teardown: function () {
        // Only need this for delegated form submit events
        if (jQuery.nodeName(this, "form")) {
          return false;
        }

        // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
        jQuery.event.remove(this, "._submit");
      }
    };
  }

// IE change delegation and checkbox/radio fix
  if (!support.changeBubbles) {

    jQuery.event.special.change = {

      setup: function () {

        if (rformElems.test(this.nodeName)) {
          // IE doesn't fire change on a check/radio until blur; trigger it on click
          // after a propertychange. Eat the blur-change in special.change.handle.
          // This still fires onchange a second time for check/radio after blur.
          if (this.type === "checkbox" || this.type === "radio") {
            jQuery.event.add(this, "propertychange._change", function (event) {
              if (event.originalEvent.propertyName === "checked") {
                this._just_changed = true;
              }
            });
            jQuery.event.add(this, "click._change", function (event) {
              if (this._just_changed && !event.isTrigger) {
                this._just_changed = false;
              }
              // Allow triggered, simulated change events (#11500)
              jQuery.event.simulate("change", this, event, true);
            });
          }
          return false;
        }
        // Delegated event; lazy-add a change handler on descendant inputs
        jQuery.event.add(this, "beforeactivate._change", function (e) {
          var elem = e.target;

          if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
            jQuery.event.add(elem, "change._change", function (event) {
              if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                jQuery.event.simulate("change", this.parentNode, event, true);
              }
            });
            jQuery._data(elem, "changeBubbles", true);
          }
        });
      },

      handle: function (event) {
        var elem = event.target;

        // Swallow native change events from checkbox/radio, we already triggered them above
        if (this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox")) {
          return event.handleObj.handler.apply(this, arguments);
        }
      },

      teardown: function () {
        jQuery.event.remove(this, "._change");

        return !rformElems.test(this.nodeName);
      }
    };
  }

// Create "bubbling" focus and blur events
  if (!support.focusinBubbles) {
    jQuery.each({focus: "focusin", blur: "focusout"}, function (orig, fix) {

      // Attach a single capturing handler on the document while someone wants focusin/focusout
      var handler = function (event) {
        jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
      };

      jQuery.event.special[fix] = {
        setup: function () {
          var doc = this.ownerDocument || this,
            attaches = jQuery._data(doc, fix);

          if (!attaches) {
            doc.addEventListener(orig, handler, true);
          }
          jQuery._data(doc, fix, (attaches || 0) + 1);
        },
        teardown: function () {
          var doc = this.ownerDocument || this,
            attaches = jQuery._data(doc, fix) - 1;

          if (!attaches) {
            doc.removeEventListener(orig, handler, true);
            jQuery._removeData(doc, fix);
          } else {
            jQuery._data(doc, fix, attaches);
          }
        }
      };
    });
  }

  jQuery.fn.extend({

    on: function (types, selector, data, fn, /*INTERNAL*/ one) {
      var type, origFn;

      // Types can be a map of types/handlers
      if (typeof types === "object") {
        // ( types-Object, selector, data )
        if (typeof selector !== "string") {
          // ( types-Object, data )
          data = data || selector;
          selector = undefined;
        }
        for (type in types) {
          this.on(type, selector, data, types[type], one);
        }
        return this;
      }

      if (data == null && fn == null) {
        // ( types, fn )
        fn = selector;
        data = selector = undefined;
      } else if (fn == null) {
        if (typeof selector === "string") {
          // ( types, selector, fn )
          fn = data;
          data = undefined;
        } else {
          // ( types, data, fn )
          fn = data;
          data = selector;
          selector = undefined;
        }
      }
      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return this;
      }

      if (one === 1) {
        origFn = fn;
        fn = function (event) {
          // Can use an empty set, since event contains the info
          jQuery().off(event);
          return origFn.apply(this, arguments);
        };
        // Use same guid so caller can remove using origFn
        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
      }
      return this.each(function () {
        jQuery.event.add(this, types, fn, data, selector);
      });
    },
    one: function (types, selector, data, fn) {
      return this.on(types, selector, data, fn, 1);
    },
    off: function (types, selector, fn) {
      var handleObj, type;
      if (types && types.preventDefault && types.handleObj) {
        // ( event )  dispatched jQuery.Event
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(
          handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
          handleObj.selector,
          handleObj.handler
        );
        return this;
      }
      if (typeof types === "object") {
        // ( types-object [, selector] )
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === "function") {
        // ( types [, fn] )
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    },

    trigger: function (type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function (type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });


  function createSafeFragment(document) {
    var list = nodeNames.split("|"),
      safeFrag = document.createDocumentFragment();

    if (safeFrag.createElement) {
      while (list.length) {
        safeFrag.createElement(
          list.pop()
        );
      }
    }
    return safeFrag;
  }

  var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
    "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
    rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
    rleadingWhitespace = /^\s+/,
    rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    rtagName = /<([\w:]+)/,
    rtbody = /<tbody/i,
    rhtml = /<|&#?\w+;/,
    rnoInnerhtml = /<(?:script|style|link)/i,
    // checked="checked" or checked
    rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rscriptType = /^$|\/(?:java|ecma)script/i,
    rscriptTypeMasked = /^true\/(.*)/,
    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

    // We have to close these tags to support XHTML (#13200)
    wrapMap = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

      // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
      // unless wrapped in a div with non-breaking characters in front of it.
      _default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    safeFragment = createSafeFragment(document),
    fragmentDiv = safeFragment.appendChild(document.createElement("div"));

  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;

  function getAll(context, tag) {
    var elems, elem,
      i = 0,
      found = typeof context.getElementsByTagName !== strundefined ? context.getElementsByTagName(tag || "*") :
        typeof context.querySelectorAll !== strundefined ? context.querySelectorAll(tag || "*") :
          undefined;

    if (!found) {
      for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
        if (!tag || jQuery.nodeName(elem, tag)) {
          found.push(elem);
        } else {
          jQuery.merge(found, getAll(elem, tag));
        }
      }
    }

    return tag === undefined || tag && jQuery.nodeName(context, tag) ?
      jQuery.merge([context], found) :
      found;
  }

// Used in buildFragment, fixes the defaultChecked property
  function fixDefaultChecked(elem) {
    if (rcheckableType.test(elem.type)) {
      elem.defaultChecked = elem.checked;
    }
  }

// Support: IE<8
// Manipulating tables requires a tbody
  function manipulationTarget(elem, content) {
    return jQuery.nodeName(elem, "table") &&
    jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ?

      elem.getElementsByTagName("tbody")[0] ||
      elem.appendChild(elem.ownerDocument.createElement("tbody")) :
      elem;
  }

// Replace/restore the type attribute of script elements for safe DOM manipulation
  function disableScript(elem) {
    elem.type = (jQuery.find.attr(elem, "type") !== null) + "/" + elem.type;
    return elem;
  }

  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute("type");
    }
    return elem;
  }

// Mark scripts as having already been evaluated
  function setGlobalEval(elems, refElements) {
    var elem,
      i = 0;
    for (; (elem = elems[i]) != null; i++) {
      jQuery._data(elem, "globalEval", !refElements || jQuery._data(refElements[i], "globalEval"));
    }
  }

  function cloneCopyEvent(src, dest) {

    if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
      return;
    }

    var type, i, l,
      oldData = jQuery._data(src),
      curData = jQuery._data(dest, oldData),
      events = oldData.events;

    if (events) {
      delete curData.handle;
      curData.events = {};

      for (type in events) {
        for (i = 0, l = events[type].length; i < l; i++) {
          jQuery.event.add(dest, type, events[type][i]);
        }
      }
    }

    // make the cloned public data object a copy from the original
    if (curData.data) {
      curData.data = jQuery.extend({}, curData.data);
    }
  }

  function fixCloneNodeIssues(src, dest) {
    var nodeName, e, data;

    // We do not need to do anything for non-Elements
    if (dest.nodeType !== 1) {
      return;
    }

    nodeName = dest.nodeName.toLowerCase();

    // IE6-8 copies events bound via attachEvent when using cloneNode.
    if (!support.noCloneEvent && dest[jQuery.expando]) {
      data = jQuery._data(dest);

      for (e in data.events) {
        jQuery.removeEvent(dest, e, data.handle);
      }

      // Event data gets referenced instead of copied if the expando gets copied too
      dest.removeAttribute(jQuery.expando);
    }

    // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
    if (nodeName === "script" && dest.text !== src.text) {
      disableScript(dest).text = src.text;
      restoreScript(dest);

      // IE6-10 improperly clones children of object elements using classid.
      // IE10 throws NoModificationAllowedError if parent is null, #12132.
    } else if (nodeName === "object") {
      if (dest.parentNode) {
        dest.outerHTML = src.outerHTML;
      }

      // This path appears unavoidable for IE9. When cloning an object
      // element in IE9, the outerHTML strategy above is not sufficient.
      // If the src has innerHTML and the destination does not,
      // copy the src.innerHTML into the dest.innerHTML. #10324
      if (support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
        dest.innerHTML = src.innerHTML;
      }

    } else if (nodeName === "input" && rcheckableType.test(src.type)) {
      // IE6-8 fails to persist the checked state of a cloned checkbox
      // or radio button. Worse, IE6-7 fail to give the cloned element
      // a checked appearance if the defaultChecked value isn't also set

      dest.defaultChecked = dest.checked = src.checked;

      // IE6-7 get confused and end up setting the value of a cloned
      // checkbox/radio button to an empty string instead of "on"
      if (dest.value !== src.value) {
        dest.value = src.value;
      }

      // IE6-8 fails to return the selected option to the default selected
      // state when cloning options
    } else if (nodeName === "option") {
      dest.defaultSelected = dest.selected = src.defaultSelected;

      // IE6-8 fails to set the defaultValue to the correct value when
      // cloning other types of input fields
    } else if (nodeName === "input" || nodeName === "textarea") {
      dest.defaultValue = src.defaultValue;
    }
  }

  jQuery.extend({
    clone: function (elem, dataAndEvents, deepDataAndEvents) {
      var destElements, node, clone, i, srcElements,
        inPage = jQuery.contains(elem.ownerDocument, elem);

      if (support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test("<" + elem.nodeName + ">")) {
        clone = elem.cloneNode(true);

        // IE<=8 does not properly clone detached, unknown element nodes
      } else {
        fragmentDiv.innerHTML = elem.outerHTML;
        fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
      }

      if ((!support.noCloneEvent || !support.noCloneChecked) &&
        (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

        // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
        destElements = getAll(clone);
        srcElements = getAll(elem);

        // Fix all IE cloning issues
        for (i = 0; (node = srcElements[i]) != null; ++i) {
          // Ensure that the destination node is not null; Fixes #9587
          if (destElements[i]) {
            fixCloneNodeIssues(node, destElements[i]);
          }
        }
      }

      // Copy the events from the original to the clone
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);

          for (i = 0; (node = srcElements[i]) != null; i++) {
            cloneCopyEvent(node, destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }

      // Preserve script evaluation history
      destElements = getAll(clone, "script");
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, "script"));
      }

      destElements = srcElements = node = null;

      // Return the cloned set
      return clone;
    },

    buildFragment: function (elems, context, scripts, selection) {
      var j, elem, contains,
        tmp, tag, tbody, wrap,
        l = elems.length,

        // Ensure a safe fragment
        safe = createSafeFragment(context),

        nodes = [],
        i = 0;

      for (; i < l; i++) {
        elem = elems[i];

        if (elem || elem === 0) {

          // Add nodes directly
          if (jQuery.type(elem) === "object") {
            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

            // Convert non-html into a text node
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem));

            // Convert html into DOM nodes
          } else {
            tmp = tmp || safe.appendChild(context.createElement("div"));

            // Deserialize a standard representation
            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag] || wrapMap._default;

            tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];

            // Descend through wrappers to the right content
            j = wrap[0];
            while (j--) {
              tmp = tmp.lastChild;
            }

            // Manually add leading whitespace removed by IE
            if (!support.leadingWhitespace && rleadingWhitespace.test(elem)) {
              nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
            }

            // Remove IE's autoinserted <tbody> from table fragments
            if (!support.tbody) {

              // String was a <table>, *may* have spurious <tbody>
              elem = tag === "table" && !rtbody.test(elem) ?
                tmp.firstChild :

                // String was a bare <thead> or <tfoot>
                wrap[1] === "<table>" && !rtbody.test(elem) ?
                  tmp :
                  0;

              j = elem && elem.childNodes.length;
              while (j--) {
                if (jQuery.nodeName((tbody = elem.childNodes[j]), "tbody") && !tbody.childNodes.length) {
                  elem.removeChild(tbody);
                }
              }
            }

            jQuery.merge(nodes, tmp.childNodes);

            // Fix #12392 for WebKit and IE > 9
            tmp.textContent = "";

            // Fix #12392 for oldIE
            while (tmp.firstChild) {
              tmp.removeChild(tmp.firstChild);
            }

            // Remember the top-level container for proper cleanup
            tmp = safe.lastChild;
          }
        }
      }

      // Fix #11356: Clear elements from fragment
      if (tmp) {
        safe.removeChild(tmp);
      }

      // Reset defaultChecked for any radios and checkboxes
      // about to be appended to the DOM in IE 6/7 (#8060)
      if (!support.appendChecked) {
        jQuery.grep(getAll(nodes, "input"), fixDefaultChecked);
      }

      i = 0;
      while ((elem = nodes[i++])) {

        // #4087 - If origin and destination elements are the same, and this is
        // that element, do not do anything
        if (selection && jQuery.inArray(elem, selection) !== -1) {
          continue;
        }

        contains = jQuery.contains(elem.ownerDocument, elem);

        // Append to fragment
        tmp = getAll(safe.appendChild(elem), "script");

        // Preserve script evaluation history
        if (contains) {
          setGlobalEval(tmp);
        }

        // Capture executables
        if (scripts) {
          j = 0;
          while ((elem = tmp[j++])) {
            if (rscriptType.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }

      tmp = null;

      return safe;
    },

    cleanData: function (elems, /* internal */ acceptData) {
      var elem, type, id, data,
        i = 0,
        internalKey = jQuery.expando,
        cache = jQuery.cache,
        deleteExpando = support.deleteExpando,
        special = jQuery.event.special;

      for (; (elem = elems[i]) != null; i++) {
        if (acceptData || jQuery.acceptData(elem)) {

          id = elem[internalKey];
          data = id && cache[id];

          if (data) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);

                  // This is a shortcut to avoid jQuery.event.remove's overhead
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }

            // Remove cache only if it was not already removed by jQuery.event.remove
            if (cache[id]) {

              delete cache[id];

              // IE does not allow us to delete expando properties from nodes,
              // nor does it have a removeAttribute function on Document nodes;
              // we must handle all of these cases
              if (deleteExpando) {
                delete elem[internalKey];

              } else if (typeof elem.removeAttribute !== strundefined) {
                elem.removeAttribute(internalKey);

              } else {
                elem[internalKey] = null;
              }

              deletedIds.push(id);
            }
          }
        }
      }
    }
  });

  jQuery.fn.extend({
    text: function (value) {
      return access(this, function (value) {
        return value === undefined ?
          jQuery.text(this) :
          this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
      }, null, value, arguments.length);
    },

    append: function () {
      return this.domManip(arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.appendChild(elem);
        }
      });
    },

    prepend: function () {
      return this.domManip(arguments, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          var target = manipulationTarget(this, elem);
          target.insertBefore(elem, target.firstChild);
        }
      });
    },

    before: function () {
      return this.domManip(arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },

    after: function () {
      return this.domManip(arguments, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },

    remove: function (selector, keepData /* Internal Use Only */) {
      var elem,
        elems = selector ? jQuery.filter(selector, this) : this,
        i = 0;

      for (; (elem = elems[i]) != null; i++) {

        if (!keepData && elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem));
        }

        if (elem.parentNode) {
          if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
            setGlobalEval(getAll(elem, "script"));
          }
          elem.parentNode.removeChild(elem);
        }
      }

      return this;
    },

    empty: function () {
      var elem,
        i = 0;

      for (; (elem = this[i]) != null; i++) {
        // Remove element nodes and prevent memory leaks
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
        }

        // Remove any remaining nodes
        while (elem.firstChild) {
          elem.removeChild(elem.firstChild);
        }

        // If this is a select, ensure that it displays empty (#12336)
        // Support: IE<9
        if (elem.options && jQuery.nodeName(elem, "select")) {
          elem.options.length = 0;
        }
      }

      return this;
    },

    clone: function (dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },

    html: function (value) {
      return access(this, function (value) {
        var elem = this[0] || {},
          i = 0,
          l = this.length;

        if (value === undefined) {
          return elem.nodeType === 1 ?
            elem.innerHTML.replace(rinlinejQuery, "") :
            undefined;
        }

        // See if we can take a shortcut and just use innerHTML
        if (typeof value === "string" && !rnoInnerhtml.test(value) &&
          (support.htmlSerialize || !rnoshimcache.test(value)) &&
          (support.leadingWhitespace || !rleadingWhitespace.test(value)) &&
          !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

          value = value.replace(rxhtmlTag, "<$1></$2>");

          try {
            for (; i < l; i++) {
              // Remove element nodes and prevent memory leaks
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }

            elem = 0;

            // If using innerHTML throws an exception, use the fallback method
          } catch (e) {
          }
        }

        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },

    replaceWith: function () {
      var arg = arguments[0];

      // Make the changes, replacing each context element with the new content
      this.domManip(arguments, function (elem) {
        arg = this.parentNode;

        jQuery.cleanData(getAll(this));

        if (arg) {
          arg.replaceChild(elem, this);
        }
      });

      // Force removal if there was no new content (e.g., from empty arguments)
      return arg && (arg.length || arg.nodeType) ? this : this.remove();
    },

    detach: function (selector) {
      return this.remove(selector, true);
    },

    domManip: function (args, callback) {

      // Flatten any nested arrays
      args = concat.apply([], args);

      var first, node, hasScripts,
        scripts, doc, fragment,
        i = 0,
        l = this.length,
        set = this,
        iNoClone = l - 1,
        value = args[0],
        isFunction = jQuery.isFunction(value);

      // We can't cloneNode fragments that contain checked, in WebKit
      if (isFunction ||
        (l > 1 && typeof value === "string" &&
          !support.checkClone && rchecked.test(value))) {
        return this.each(function (index) {
          var self = set.eq(index);
          if (isFunction) {
            args[0] = value.call(this, index, self.html());
          }
          self.domManip(args, callback);
        });
      }

      if (l) {
        fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
        first = fragment.firstChild;

        if (fragment.childNodes.length === 1) {
          fragment = first;
        }

        if (first) {
          scripts = jQuery.map(getAll(fragment, "script"), disableScript);
          hasScripts = scripts.length;

          // Use the original fragment for the last item instead of the first because it can end up
          // being emptied incorrectly in certain situations (#8070).
          for (; i < l; i++) {
            node = fragment;

            if (i !== iNoClone) {
              node = jQuery.clone(node, true, true);

              // Keep references to cloned scripts for later restoration
              if (hasScripts) {
                jQuery.merge(scripts, getAll(node, "script"));
              }
            }

            callback.call(this[i], node, i);
          }

          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument;

            // Reenable scripts
            jQuery.map(scripts, restoreScript);

            // Evaluate executable scripts on first document insertion
            for (i = 0; i < hasScripts; i++) {
              node = scripts[i];
              if (rscriptType.test(node.type || "") &&
                !jQuery._data(node, "globalEval") && jQuery.contains(doc, node)) {

                if (node.src) {
                  // Optional AJAX dependency, but won't run scripts if not present
                  if (jQuery._evalUrl) {
                    jQuery._evalUrl(node.src);
                  }
                } else {
                  jQuery.globalEval((node.text || node.textContent || node.innerHTML || "").replace(rcleanScript, ""));
                }
              }
            }
          }

          // Fix #11809: Avoid leaking memory
          fragment = first = null;
        }
      }

      return this;
    }
  });

  jQuery.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems,
        i = 0,
        ret = [],
        insert = jQuery(selector),
        last = insert.length - 1;

      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems);

        // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
        push.apply(ret, elems.get());
      }

      return this.pushStack(ret);
    };
  });


  var iframe,
    elemdisplay = {};

  /**
   * Retrieve the actual display of a element
   * @param {String} name nodeName of the element
   * @param {Object} doc Document object
   */
// Called only from within defaultDisplay
  function actualDisplay(name, doc) {
    var style,
      elem = jQuery(doc.createElement(name)).appendTo(doc.body),

      // getDefaultComputedStyle might be reliably used only on attached element
      display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ?

        // Use of this method is a temporary fix (more like optmization) until something better comes along,
        // since it was removed from specification and supported only in FF
        style.display : jQuery.css(elem[0], "display");

    // We don't have any data stored on the element,
    // so use "detach" method as fast way to get rid of the element
    elem.detach();

    return display;
  }

  /**
   * Try to determine the default display value of an element
   * @param {String} nodeName
   */
  function defaultDisplay(nodeName) {
    var doc = document,
      display = elemdisplay[nodeName];

    if (!display) {
      display = actualDisplay(nodeName, doc);

      // If the simple way fails, read from inside an iframe
      if (display === "none" || !display) {

        // Use the already-created iframe if possible
        iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);

        // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
        doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;

        // Support: IE
        doc.write();
        doc.close();

        display = actualDisplay(nodeName, doc);
        iframe.detach();
      }

      // Store the correct default display
      elemdisplay[nodeName] = display;
    }

    return display;
  }


  (function () {
    var shrinkWrapBlocksVal;

    support.shrinkWrapBlocks = function () {
      if (shrinkWrapBlocksVal != null) {
        return shrinkWrapBlocksVal;
      }

      // Will be changed later if needed.
      shrinkWrapBlocksVal = false;

      // Minified: var b,c,d
      var div, body, container;

      body = document.getElementsByTagName("body")[0];
      if (!body || !body.style) {
        // Test fired too early or in an unsupported environment, exit.
        return;
      }

      // Setup
      div = document.createElement("div");
      container = document.createElement("div");
      container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
      body.appendChild(container).appendChild(div);

      // Support: IE6
      // Check if elements with layout shrink-wrap their children
      if (typeof div.style.zoom !== strundefined) {
        // Reset CSS: box-sizing; display; margin; border
        div.style.cssText =
          // Support: Firefox<29, Android 2.3
          // Vendor-prefix box-sizing
          "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
          "box-sizing:content-box;display:block;margin:0;border:0;" +
          "padding:1px;width:1px;zoom:1";
        div.appendChild(document.createElement("div")).style.width = "5px";
        shrinkWrapBlocksVal = div.offsetWidth !== 3;
      }

      body.removeChild(container);

      return shrinkWrapBlocksVal;
    };

  })();
  var rmargin = (/^margin/);

  var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");


  var getStyles, curCSS,
    rposition = /^(top|right|bottom|left)$/;

  if (window.getComputedStyle) {
    getStyles = function (elem) {
      return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
    };

    curCSS = function (elem, name, computed) {
      var width, minWidth, maxWidth, ret,
        style = elem.style;

      computed = computed || getStyles(elem);

      // getPropertyValue is only needed for .css('filter') in IE9, see #12537
      ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined;

      if (computed) {

        if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
          ret = jQuery.style(elem, name);
        }

        // A tribute to the "awesome hack by Dean Edwards"
        // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
        // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
        // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
        if (rnumnonpx.test(ret) && rmargin.test(name)) {

          // Remember the original values
          width = style.width;
          minWidth = style.minWidth;
          maxWidth = style.maxWidth;

          // Put in the new values to get a computed value out
          style.minWidth = style.maxWidth = style.width = ret;
          ret = computed.width;

          // Revert the changed values
          style.width = width;
          style.minWidth = minWidth;
          style.maxWidth = maxWidth;
        }
      }

      // Support: IE
      // IE returns zIndex value as an integer.
      return ret === undefined ?
        ret :
        ret + "";
    };
  } else if (document.documentElement.currentStyle) {
    getStyles = function (elem) {
      return elem.currentStyle;
    };

    curCSS = function (elem, name, computed) {
      var left, rs, rsLeft, ret,
        style = elem.style;

      computed = computed || getStyles(elem);
      ret = computed ? computed[name] : undefined;

      // Avoid setting ret to empty string here
      // so we don't default to auto
      if (ret == null && style && style[name]) {
        ret = style[name];
      }

      // From the awesome hack by Dean Edwards
      // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

      // If we're not dealing with a regular pixel number
      // but a number that has a weird ending, we need to convert it to pixels
      // but not position css attributes, as those are proportional to the parent element instead
      // and we can't measure the parent instead because it might trigger a "stacking dolls" problem
      if (rnumnonpx.test(ret) && !rposition.test(name)) {

        // Remember the original values
        left = style.left;
        rs = elem.runtimeStyle;
        rsLeft = rs && rs.left;

        // Put in the new values to get a computed value out
        if (rsLeft) {
          rs.left = elem.currentStyle.left;
        }
        style.left = name === "fontSize" ? "1em" : ret;
        ret = style.pixelLeft + "px";

        // Revert the changed values
        style.left = left;
        if (rsLeft) {
          rs.left = rsLeft;
        }
      }

      // Support: IE
      // IE returns zIndex value as an integer.
      return ret === undefined ?
        ret :
        ret + "" || "auto";
    };
  }


  function addGetHookIf(conditionFn, hookFn) {
    // Define the hook, we'll check on the first run if it's really needed.
    return {
      get: function () {
        var condition = conditionFn();

        if (condition == null) {
          // The test was not ready at this point; screw the hook this time
          // but check again when needed next time.
          return;
        }

        if (condition) {
          // Hook not needed (or it's not possible to use it due to missing dependency),
          // remove it.
          // Since there are no other hooks for marginRight, remove the whole object.
          delete this.get;
          return;
        }

        // Hook needed; redefine it so that the support test is not executed again.

        return (this.get = hookFn).apply(this, arguments);
      }
    };
  }


  (function () {
    // Minified: var b,c,d,e,f,g, h,i
    var div, style, a, pixelPositionVal, boxSizingReliableVal,
      reliableHiddenOffsetsVal, reliableMarginRightVal;

    // Setup
    div = document.createElement("div");
    div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    a = div.getElementsByTagName("a")[0];
    style = a && a.style;

    // Finish early in limited (non-browser) environments
    if (!style) {
      return;
    }

    style.cssText = "float:left;opacity:.5";

    // Support: IE<9
    // Make sure that element opacity exists (as opposed to filter)
    support.opacity = style.opacity === "0.5";

    // Verify style float existence
    // (IE uses styleFloat instead of cssFloat)
    support.cssFloat = !!style.cssFloat;

    div.style.backgroundClip = "content-box";
    div.cloneNode(true).style.backgroundClip = "";
    support.clearCloneStyle = div.style.backgroundClip === "content-box";

    // Support: Firefox<29, Android 2.3
    // Vendor-prefix box-sizing
    support.boxSizing = style.boxSizing === "" || style.MozBoxSizing === "" ||
      style.WebkitBoxSizing === "";

    jQuery.extend(support, {
      reliableHiddenOffsets: function () {
        if (reliableHiddenOffsetsVal == null) {
          computeStyleTests();
        }
        return reliableHiddenOffsetsVal;
      },

      boxSizingReliable: function () {
        if (boxSizingReliableVal == null) {
          computeStyleTests();
        }
        return boxSizingReliableVal;
      },

      pixelPosition: function () {
        if (pixelPositionVal == null) {
          computeStyleTests();
        }
        return pixelPositionVal;
      },

      // Support: Android 2.3
      reliableMarginRight: function () {
        if (reliableMarginRightVal == null) {
          computeStyleTests();
        }
        return reliableMarginRightVal;
      }
    });

    function computeStyleTests() {
      // Minified: var b,c,d,j
      var div, body, container, contents;

      body = document.getElementsByTagName("body")[0];
      if (!body || !body.style) {
        // Test fired too early or in an unsupported environment, exit.
        return;
      }

      // Setup
      div = document.createElement("div");
      container = document.createElement("div");
      container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
      body.appendChild(container).appendChild(div);

      div.style.cssText =
        // Support: Firefox<29, Android 2.3
        // Vendor-prefix box-sizing
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
        "box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
        "border:1px;padding:1px;width:4px;position:absolute";

      // Support: IE<9
      // Assume reasonable values in the absence of getComputedStyle
      pixelPositionVal = boxSizingReliableVal = false;
      reliableMarginRightVal = true;

      // Check for getComputedStyle so that this code is not run in IE<9.
      if (window.getComputedStyle) {
        pixelPositionVal = (window.getComputedStyle(div, null) || {}).top !== "1%";
        boxSizingReliableVal =
          (window.getComputedStyle(div, null) || {width: "4px"}).width === "4px";

        // Support: Android 2.3
        // Div with explicit width and no margin-right incorrectly
        // gets computed margin-right based on width of container (#3333)
        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
        contents = div.appendChild(document.createElement("div"));

        // Reset CSS: box-sizing; display; margin; border; padding
        contents.style.cssText = div.style.cssText =
          // Support: Firefox<29, Android 2.3
          // Vendor-prefix box-sizing
          "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
          "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
        contents.style.marginRight = contents.style.width = "0";
        div.style.width = "1px";

        reliableMarginRightVal =
          !parseFloat((window.getComputedStyle(contents, null) || {}).marginRight);
      }

      // Support: IE8
      // Check if table cells still have offsetWidth/Height when they are set
      // to display:none and there are still other visible table cells in a
      // table row; if so, offsetWidth/Height are not reliable for use when
      // determining if an element has been hidden directly using
      // display:none (it is still safe to use offsets if a parent element is
      // hidden; don safety goggles and see bug #4512 for more information).
      div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
      contents = div.getElementsByTagName("td");
      contents[0].style.cssText = "margin:0;border:0;padding:0;display:none";
      reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
      if (reliableHiddenOffsetsVal) {
        contents[0].style.display = "";
        contents[1].style.display = "none";
        reliableHiddenOffsetsVal = contents[0].offsetHeight === 0;
      }

      body.removeChild(container);
    }

  })();


// A method for quickly swapping in/out CSS properties to get correct calculations.
  jQuery.swap = function (elem, options, callback, args) {
    var ret, name,
      old = {};

    // Remember the old values, and insert the new ones
    for (name in options) {
      old[name] = elem.style[name];
      elem.style[name] = options[name];
    }

    ret = callback.apply(elem, args || []);

    // Revert the old values
    for (name in options) {
      elem.style[name] = old[name];
    }

    return ret;
  };


  var
    ralpha = /alpha\([^)]*\)/i,
    ropacity = /opacity\s*=\s*([^)]*)/,

    // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
    // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
    rdisplayswap = /^(none|table(?!-c[ea]).+)/,
    rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
    rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),

    cssShow = {position: "absolute", visibility: "hidden", display: "block"},
    cssNormalTransform = {
      letterSpacing: "0",
      fontWeight: "400"
    },

    cssPrefixes = ["Webkit", "O", "Moz", "ms"];


// return a css property mapped to a potentially vendor prefixed property
  function vendorPropName(style, name) {

    // shortcut for names that are not vendor prefixed
    if (name in style) {
      return name;
    }

    // check for vendor prefixed names
    var capName = name.charAt(0).toUpperCase() + name.slice(1),
      origName = name,
      i = cssPrefixes.length;

    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in style) {
        return name;
      }
    }

    return origName;
  }

  function showHide(elements, show) {
    var display, elem, hidden,
      values = [],
      index = 0,
      length = elements.length;

    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }

      values[index] = jQuery._data(elem, "olddisplay");
      display = elem.style.display;
      if (show) {
        // Reset the inline display of this element to learn if it is
        // being hidden by cascaded rules or not
        if (!values[index] && display === "none") {
          elem.style.display = "";
        }

        // Set elements which have been overridden with display: none
        // in a stylesheet to whatever the default browser style is
        // for such an element
        if (elem.style.display === "" && isHidden(elem)) {
          values[index] = jQuery._data(elem, "olddisplay", defaultDisplay(elem.nodeName));
        }
      } else {
        hidden = isHidden(elem);

        if (display && display !== "none" || !hidden) {
          jQuery._data(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
        }
      }
    }

    // Set the display of most of the elements in a second loop
    // to avoid the constant reflow
    for (index = 0; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      if (!show || elem.style.display === "none" || elem.style.display === "") {
        elem.style.display = show ? values[index] || "" : "none";
      }
    }

    return elements;
  }

  function setPositiveNumber(elem, value, subtract) {
    var matches = rnumsplit.exec(value);
    return matches ?
      // Guard against undefined "subtract", e.g., when used as in cssHooks
      Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") :
      value;
  }

  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i = extra === (isBorderBox ? "border" : "content") ?
      // If we already have the right measurement, avoid augmentation
      4 :
      // Otherwise initialize for horizontal or vertical properties
      name === "width" ? 1 : 0,

      val = 0;

    for (; i < 4; i += 2) {
      // both box models exclude margin, so add it if we want it
      if (extra === "margin") {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }

      if (isBorderBox) {
        // border-box includes padding, so remove it if we want content
        if (extra === "content") {
          val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
        }

        // at this point, extra isn't border nor margin, so remove border
        if (extra !== "margin") {
          val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      } else {
        // at this point, extra isn't content, so add padding
        val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

        // at this point, extra isn't content nor padding, so add border
        if (extra !== "padding") {
          val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
        }
      }
    }

    return val;
  }

  function getWidthOrHeight(elem, name, extra) {

    // Start with offset property, which is equivalent to the border-box value
    var valueIsBorderBox = true,
      val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
      styles = getStyles(elem),
      isBorderBox = support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box";

    // some non-html elements return undefined for offsetWidth, so check for null/undefined
    // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
    // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
    if (val <= 0 || val == null) {
      // Fall back to computed then uncomputed css if necessary
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }

      // Computed unit is not pixels. Stop here and return.
      if (rnumnonpx.test(val)) {
        return val;
      }

      // we need the check for style in case a browser which returns unreliable values
      // for getComputedStyle silently falls back to the reliable elem.style
      valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

      // Normalize "", auto, and prepare for extra
      val = parseFloat(val) || 0;
    }

    // use the active box-sizing model to add/subtract irrelevant styles
    return (val +
      augmentWidthOrHeight(
        elem,
        name,
        extra || (isBorderBox ? "border" : "content"),
        valueIsBorderBox,
        styles
      )
    ) + "px";
  }

  jQuery.extend({
    // Add in style property hooks for overriding the default
    // behavior of getting and setting a style property
    cssHooks: {
      opacity: {
        get: function (elem, computed) {
          if (computed) {
            // We should always get a number back from opacity
            var ret = curCSS(elem, "opacity");
            return ret === "" ? "1" : ret;
          }
        }
      }
    },

    // Don't automatically add "px" to these possibly-unitless properties
    cssNumber: {
      "columnCount": true,
      "fillOpacity": true,
      "flexGrow": true,
      "flexShrink": true,
      "fontWeight": true,
      "lineHeight": true,
      "opacity": true,
      "order": true,
      "orphans": true,
      "widows": true,
      "zIndex": true,
      "zoom": true
    },

    // Add in properties whose names you wish to fix before
    // setting or getting the value
    cssProps: {
      // normalize float css property
      "float": support.cssFloat ? "cssFloat" : "styleFloat"
    },

    // Get and set the style property on a DOM Node
    style: function (elem, name, value, extra) {
      // Don't set styles on text and comment nodes
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }

      // Make sure that we're working with the right name
      var ret, type, hooks,
        origName = jQuery.camelCase(name),
        style = elem.style;

      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));

      // gets hook for the prefixed version
      // followed by the unprefixed version
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

      // Check if we're setting a value
      if (value !== undefined) {
        type = typeof value;

        // convert relative number strings (+= or -=) to relative numbers. #7345
        if (type === "string" && (ret = rrelNum.exec(value))) {
          value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
          // Fixes bug #9237
          type = "number";
        }

        // Make sure that null and NaN values aren't set. See: #7116
        if (value == null || value !== value) {
          return;
        }

        // If a number was passed in, add 'px' to the (except for certain CSS properties)
        if (type === "number" && !jQuery.cssNumber[origName]) {
          value += "px";
        }

        // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
        // but it would mean to define eight (for every problematic property) identical functions
        if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
          style[name] = "inherit";
        }

        // If a hook was provided, use that value, otherwise just set the specified value
        if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {

          // Support: IE
          // Swallow errors from 'invalid' CSS values (#5509)
          try {
            style[name] = value;
          } catch (e) {
          }
        }

      } else {
        // If a hook was provided get the non-computed value from there
        if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }

        // Otherwise just get the value from the style object
        return style[name];
      }
    },

    css: function (elem, name, extra, styles) {
      var num, val, hooks,
        origName = jQuery.camelCase(name);

      // Make sure that we're working with the right name
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));

      // gets hook for the prefixed version
      // followed by the unprefixed version
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

      // If a hook was provided get the computed value from there
      if (hooks && "get" in hooks) {
        val = hooks.get(elem, true, extra);
      }

      // Otherwise, if a way to get the computed value exists, use that
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }

      //convert "normal" to computed value
      if (val === "normal" && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }

      // Return, converting to number if forced or a qualifier was provided and val looks numeric
      if (extra === "" || extra) {
        num = parseFloat(val);
        return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
      }
      return val;
    }
  });

  jQuery.each(["height", "width"], function (i, name) {
    jQuery.cssHooks[name] = {
      get: function (elem, computed, extra) {
        if (computed) {
          // certain elements can have dimension info if we invisibly show them
          // however, it must have a current display style that would benefit from this
          return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ?
            jQuery.swap(elem, cssShow, function () {
              return getWidthOrHeight(elem, name, extra);
            }) :
            getWidthOrHeight(elem, name, extra);
        }
      },

      set: function (elem, value, extra) {
        var styles = extra && getStyles(elem);
        return setPositiveNumber(elem, value, extra ?
          augmentWidthOrHeight(
            elem,
            name,
            extra,
            support.boxSizing && jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            styles
          ) : 0
        );
      }
    };
  });

  if (!support.opacity) {
    jQuery.cssHooks.opacity = {
      get: function (elem, computed) {
        // IE uses filters for opacity
        return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "") ?
          (0.01 * parseFloat(RegExp.$1)) + "" :
          computed ? "1" : "";
      },

      set: function (elem, value) {
        var style = elem.style,
          currentStyle = elem.currentStyle,
          opacity = jQuery.isNumeric(value) ? "alpha(opacity=" + value * 100 + ")" : "",
          filter = currentStyle && currentStyle.filter || style.filter || "";

        // IE has trouble with opacity if it does not have layout
        // Force it by setting the zoom level
        style.zoom = 1;

        // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
        // if value === "", then remove inline opacity #12685
        if ((value >= 1 || value === "") &&
          jQuery.trim(filter.replace(ralpha, "")) === "" &&
          style.removeAttribute) {

          // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
          // if "filter:" is present at all, clearType is disabled, we want to avoid this
          // style.removeAttribute is IE Only, but so apparently is this code path...
          style.removeAttribute("filter");

          // if there is no filter style applied in a css rule or unset inline opacity, we are done
          if (value === "" || currentStyle && !currentStyle.filter) {
            return;
          }
        }

        // otherwise, set new filter values
        style.filter = ralpha.test(filter) ?
          filter.replace(ralpha, opacity) :
          filter + " " + opacity;
      }
    };
  }

  jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight,
    function (elem, computed) {
      if (computed) {
        // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
        // Work around by temporarily setting element display to inline-block
        return jQuery.swap(elem, {"display": "inline-block"},
          curCSS, [elem, "marginRight"]);
      }
    }
  );

// These hooks are used by animate to expand properties
  jQuery.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function (value) {
        var i = 0,
          expanded = {},

          // assumes a single number if not a string
          parts = typeof value === "string" ? value.split(" ") : [value];

        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] =
            parts[i] || parts[i - 2] || parts[0];
        }

        return expanded;
      }
    };

    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });

  jQuery.fn.extend({
    css: function (name, value) {
      return access(this, function (elem, name, value) {
        var styles, len,
          map = {},
          i = 0;

        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;

          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }

          return map;
        }

        return value !== undefined ?
          jQuery.style(elem, name, value) :
          jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show: function () {
      return showHide(this, true);
    },
    hide: function () {
      return showHide(this);
    },
    toggle: function (state) {
      if (typeof state === "boolean") {
        return state ? this.show() : this.hide();
      }

      return this.each(function () {
        if (isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });


  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }

  jQuery.Tween = Tween;

  Tween.prototype = {
    constructor: Tween,
    init: function (elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || "swing";
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
    },
    cur: function () {
      var hooks = Tween.propHooks[this.prop];

      return hooks && hooks.get ?
        hooks.get(this) :
        Tween.propHooks._default.get(this);
    },
    run: function (percent) {
      var eased,
        hooks = Tween.propHooks[this.prop];

      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](
          percent, this.options.duration * percent, 0, 1, this.options.duration
        );
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;

      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }

      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };

  Tween.prototype.init.prototype = Tween.prototype;

  Tween.propHooks = {
    _default: {
      get: function (tween) {
        var result;

        if (tween.elem[tween.prop] != null &&
          (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
          return tween.elem[tween.prop];
        }

        // passing an empty string as a 3rd parameter to .css will automatically
        // attempt a parseFloat and fallback to a string if the parse fails
        // so, simple values such as "10px" are parsed to Float.
        // complex values such as "rotate(1rad)" are returned as is.
        result = jQuery.css(tween.elem, tween.prop, "");
        // Empty strings, null, undefined and "auto" are converted to 0.
        return !result || result === "auto" ? 0 : result;
      },
      set: function (tween) {
        // use step hook for back compat - use cssHook if its there - use .style if its
        // available and use plain properties where available
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  };

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function (tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };

  jQuery.easing = {
    linear: function (p) {
      return p;
    },
    swing: function (p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    }
  };

  jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
  jQuery.fx.step = {};


  var
    fxNow, timerId,
    rfxtypes = /^(?:toggle|show|hide)$/,
    rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
    rrun = /queueHooks$/,
    animationPrefilters = [defaultPrefilter],
    tweeners = {
      "*": [function (prop, value) {
        var tween = this.createTween(prop, value),
          target = tween.cur(),
          parts = rfxnum.exec(value),
          unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),

          // Starting value computation is required for potential unit mismatches
          start = (jQuery.cssNumber[prop] || unit !== "px" && +target) &&
            rfxnum.exec(jQuery.css(tween.elem, prop)),
          scale = 1,
          maxIterations = 20;

        if (start && start[3] !== unit) {
          // Trust units reported by jQuery.css
          unit = unit || start[3];

          // Make sure we update the tween properties later on
          parts = parts || [];

          // Iteratively approximate from a nonzero starting point
          start = +target || 1;

          do {
            // If previous iteration zeroed out, double until we get *something*
            // Use a string for doubling factor so we don't accidentally see scale as unchanged below
            scale = scale || ".5";

            // Adjust and apply
            start = start / scale;
            jQuery.style(tween.elem, prop, start + unit);

            // Update scale, tolerating zero or NaN from tween.cur()
            // And breaking the loop if scale is unchanged or perfect, or if we've just had enough
          } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
        }

        // Update tween properties
        if (parts) {
          start = tween.start = +start || +target || 0;
          tween.unit = unit;
          // If a +=/-= token was provided, we're doing a relative animation
          tween.end = parts[1] ?
            start + (parts[1] + 1) * parts[2] :
            +parts[2];
        }

        return tween;
      }]
    };

// Animations created synchronously will run synchronously
  function createFxNow() {
    setTimeout(function () {
      fxNow = undefined;
    });
    return (fxNow = jQuery.now());
  }

// Generate parameters to create a standard animation
  function genFx(type, includeWidth) {
    var which,
      attrs = {height: type},
      i = 0;

    // if we include width, step value is 1 to do all cssExpand values,
    // if we don't include width, step value is 2 to skip over Left and Right
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs["margin" + which] = attrs["padding" + which] = type;
    }

    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }

    return attrs;
  }

  function createTween(value, prop, animation) {
    var tween,
      collection = (tweeners[prop] || []).concat(tweeners["*"]),
      index = 0,
      length = collection.length;
    for (; index < length; index++) {
      if ((tween = collection[index].call(animation, prop, value))) {

        // we're done with this property
        return tween;
      }
    }
  }

  function defaultPrefilter(elem, props, opts) {
    /* jshint validthis: true */
    var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
      anim = this,
      orig = {},
      style = elem.style,
      hidden = elem.nodeType && isHidden(elem),
      dataShow = jQuery._data(elem, "fxshow");

    // handle queue: false promises
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, "fx");
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;

      anim.always(function () {
        // doing this makes sure that the complete handler will be called
        // before this completes
        anim.always(function () {
          hooks.unqueued--;
          if (!jQuery.queue(elem, "fx").length) {
            hooks.empty.fire();
          }
        });
      });
    }

    // height/width overflow pass
    if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
      // Make sure that nothing sneaks out
      // Record all 3 overflow attributes because IE does not
      // change the overflow attribute when overflowX and
      // overflowY are set to the same value
      opts.overflow = [style.overflow, style.overflowX, style.overflowY];

      // Set display property to inline-block for height/width
      // animations on inline elements that are having width/height animated
      display = jQuery.css(elem, "display");

      // Test default display if display is currently "none"
      checkDisplay = display === "none" ?
        jQuery._data(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

      if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {

        // inline-level elements accept inline-block;
        // block-level elements need to be inline with layout
        if (!support.inlineBlockNeedsLayout || defaultDisplay(elem.nodeName) === "inline") {
          style.display = "inline-block";
        } else {
          style.zoom = 1;
        }
      }
    }

    if (opts.overflow) {
      style.overflow = "hidden";
      if (!support.shrinkWrapBlocks()) {
        anim.always(function () {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      }
    }

    // show/hide pass
    for (prop in props) {
      value = props[prop];
      if (rfxtypes.exec(value)) {
        delete props[prop];
        toggle = toggle || value === "toggle";
        if (value === (hidden ? "hide" : "show")) {

          // If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
          if (value === "show" && dataShow && dataShow[prop] !== undefined) {
            hidden = true;
          } else {
            continue;
          }
        }
        orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);

        // Any non-fx value stops us from restoring the original display value
      } else {
        display = undefined;
      }
    }

    if (!jQuery.isEmptyObject(orig)) {
      if (dataShow) {
        if ("hidden" in dataShow) {
          hidden = dataShow.hidden;
        }
      } else {
        dataShow = jQuery._data(elem, "fxshow", {});
      }

      // store state if its toggle - enables .stop().toggle() to "reverse"
      if (toggle) {
        dataShow.hidden = !hidden;
      }
      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function () {
          jQuery(elem).hide();
        });
      }
      anim.done(function () {
        var prop;
        jQuery._removeData(elem, "fxshow");
        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });
      for (prop in orig) {
        tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;
          if (hidden) {
            tween.end = tween.start;
            tween.start = prop === "width" || prop === "height" ? 1 : 0;
          }
        }
      }

      // If this is a noop like .hide().hide(), restore an overwritten display value
    } else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
      style.display = display;
    }
  }

  function propFilter(props, specialEasing) {
    var index, name, easing, value, hooks;

    // camelCase, specialEasing and expand cssHook pass
    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }

      if (index !== name) {
        props[name] = value;
        delete props[index];
      }

      hooks = jQuery.cssHooks[name];
      if (hooks && "expand" in hooks) {
        value = hooks.expand(value);
        delete props[name];

        // not quite $.extend, this wont overwrite keys already present.
        // also - reusing 'index' from above because we have the correct "name"
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }

  function Animation(elem, properties, options) {
    var result,
      stopped,
      index = 0,
      length = animationPrefilters.length,
      deferred = jQuery.Deferred().always(function () {
        // don't match elem in the :animated selector
        delete tick.elem;
      }),
      tick = function () {
        if (stopped) {
          return false;
        }
        var currentTime = fxNow || createFxNow(),
          remaining = Math.max(0, animation.startTime + animation.duration - currentTime),
          // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
          temp = remaining / animation.duration || 0,
          percent = 1 - temp,
          index = 0,
          length = animation.tweens.length;

        for (; index < length; index++) {
          animation.tweens[index].run(percent);
        }

        deferred.notifyWith(elem, [animation, percent, remaining]);

        if (percent < 1 && length) {
          return remaining;
        } else {
          deferred.resolveWith(elem, [animation]);
          return false;
        }
      },
      animation = deferred.promise({
        elem: elem,
        props: jQuery.extend({}, properties),
        opts: jQuery.extend(true, {specialEasing: {}}, options),
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(),
        duration: options.duration,
        tweens: [],
        createTween: function (prop, end) {
          var tween = jQuery.Tween(elem, animation.opts, prop, end,
            animation.opts.specialEasing[prop] || animation.opts.easing);
          animation.tweens.push(tween);
          return tween;
        },
        stop: function (gotoEnd) {
          var index = 0,
            // if we are going to the end, we want to run all the tweens
            // otherwise we skip this part
            length = gotoEnd ? animation.tweens.length : 0;
          if (stopped) {
            return this;
          }
          stopped = true;
          for (; index < length; index++) {
            animation.tweens[index].run(1);
          }

          // resolve when we played the last frame
          // otherwise, reject
          if (gotoEnd) {
            deferred.resolveWith(elem, [animation, gotoEnd]);
          } else {
            deferred.rejectWith(elem, [animation, gotoEnd]);
          }
          return this;
        }
      }),
      props = animation.props;

    propFilter(props, animation.opts.specialEasing);

    for (; index < length; index++) {
      result = animationPrefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        return result;
      }
    }

    jQuery.map(props, createTween, animation);

    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }

    jQuery.fx.timer(
      jQuery.extend(tick, {
        elem: elem,
        anim: animation,
        queue: animation.opts.queue
      })
    );

    // attach callbacks from options
    return animation.progress(animation.opts.progress)
      .done(animation.opts.done, animation.opts.complete)
      .fail(animation.opts.fail)
      .always(animation.opts.always);
  }

  jQuery.Animation = jQuery.extend(Animation, {
    tweener: function (props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ["*"];
      } else {
        props = props.split(" ");
      }

      var prop,
        index = 0,
        length = props.length;

      for (; index < length; index++) {
        prop = props[index];
        tweeners[prop] = tweeners[prop] || [];
        tweeners[prop].unshift(callback);
      }
    },

    prefilter: function (callback, prepend) {
      if (prepend) {
        animationPrefilters.unshift(callback);
      } else {
        animationPrefilters.push(callback);
      }
    }
  });

  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
      complete: fn || !fn && easing ||
        jQuery.isFunction(speed) && speed,
      duration: speed,
      easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
    };

    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
      opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

    // normalize opt.queue - true/undefined/null -> "fx"
    if (opt.queue == null || opt.queue === true) {
      opt.queue = "fx";
    }

    // Queueing
    opt.old = opt.complete;

    opt.complete = function () {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }

      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };

    return opt;
  };

  jQuery.fn.extend({
    fadeTo: function (speed, to, easing, callback) {

      // show any hidden elements after setting opacity to 0
      return this.filter(isHidden).css("opacity", 0).show()

      // animate to the value specified
        .end().animate({opacity: to}, speed, easing, callback);
    },
    animate: function (prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop),
        optall = jQuery.speed(speed, easing, callback),
        doAnimation = function () {
          // Operate on a copy of prop so per-property easing won't be lost
          var anim = Animation(this, jQuery.extend({}, prop), optall);

          // Empty animations, or finishing resolves immediately
          if (empty || jQuery._data(this, "finish")) {
            anim.stop(true);
          }
        };
      doAnimation.finish = doAnimation;

      return empty || optall.queue === false ?
        this.each(doAnimation) :
        this.queue(optall.queue, doAnimation);
    },
    stop: function (type, clearQueue, gotoEnd) {
      var stopQueue = function (hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };

      if (typeof type !== "string") {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue && type !== false) {
        this.queue(type || "fx", []);
      }

      return this.each(function () {
        var dequeue = true,
          index = type != null && type + "queueHooks",
          timers = jQuery.timers,
          data = jQuery._data(this);

        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }

        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }

        // start the next in the queue if the last step wasn't forced
        // timers currently will call their complete callbacks, which will dequeue
        // but only if they were gotoEnd
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function (type) {
      if (type !== false) {
        type = type || "fx";
      }
      return this.each(function () {
        var index,
          data = jQuery._data(this),
          queue = data[type + "queue"],
          hooks = data[type + "queueHooks"],
          timers = jQuery.timers,
          length = queue ? queue.length : 0;

        // enable finishing flag on private data
        data.finish = true;

        // empty the queue first
        jQuery.queue(this, type, []);

        if (hooks && hooks.stop) {
          hooks.stop.call(this, true);
        }

        // look for any active animations, and finish them
        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }

        // look for any animations in the old queue and finish them
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }

        // turn off finishing flag
        delete data.finish;
      });
    }
  });

  jQuery.each(["toggle", "show", "hide"], function (i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === "boolean" ?
        cssFn.apply(this, arguments) :
        this.animate(genFx(name, true), speed, easing, callback);
    };
  });

// Generate shortcuts for custom animations
  jQuery.each({
    slideDown: genFx("show"),
    slideUp: genFx("hide"),
    slideToggle: genFx("toggle"),
    fadeIn: {opacity: "show"},
    fadeOut: {opacity: "hide"},
    fadeToggle: {opacity: "toggle"}
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });

  jQuery.timers = [];
  jQuery.fx.tick = function () {
    var timer,
      timers = jQuery.timers,
      i = 0;

    fxNow = jQuery.now();

    for (; i < timers.length; i++) {
      timer = timers[i];
      // Checks the timer has not already been removed
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }

    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };

  jQuery.fx.timer = function (timer) {
    jQuery.timers.push(timer);
    if (timer()) {
      jQuery.fx.start();
    } else {
      jQuery.timers.pop();
    }
  };

  jQuery.fx.interval = 13;

  jQuery.fx.start = function () {
    if (!timerId) {
      timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };

  jQuery.fx.stop = function () {
    clearInterval(timerId);
    timerId = null;
  };

  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    // Default speed
    _default: 400
  };


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
  jQuery.fn.delay = function (time, type) {
    time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
    type = type || "fx";

    return this.queue(type, function (next, hooks) {
      var timeout = setTimeout(next, time);
      hooks.stop = function () {
        clearTimeout(timeout);
      };
    });
  };


  (function () {
    // Minified: var a,b,c,d,e
    var input, div, select, a, opt;

    // Setup
    div = document.createElement("div");
    div.setAttribute("className", "t");
    div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    a = div.getElementsByTagName("a")[0];

    // First batch of tests.
    select = document.createElement("select");
    opt = select.appendChild(document.createElement("option"));
    input = div.getElementsByTagName("input")[0];

    a.style.cssText = "top:1px";

    // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
    support.getSetAttribute = div.className !== "t";

    // Get the style information from getAttribute
    // (IE uses .cssText instead)
    support.style = /top/.test(a.getAttribute("style"));

    // Make sure that URLs aren't manipulated
    // (IE normalizes it by default)
    support.hrefNormalized = a.getAttribute("href") === "/a";

    // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
    support.checkOn = !!input.value;

    // Make sure that a selected-by-default option has a working selected property.
    // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
    support.optSelected = opt.selected;

    // Tests for enctype support on a form (#6743)
    support.enctype = !!document.createElement("form").enctype;

    // Make sure that the options inside disabled selects aren't marked as disabled
    // (WebKit marks them as disabled)
    select.disabled = true;
    support.optDisabled = !opt.disabled;

    // Support: IE8 only
    // Check if we can trust getAttribute("value")
    input = document.createElement("input");
    input.setAttribute("value", "");
    support.input = input.getAttribute("value") === "";

    // Check if an input maintains its value after becoming a radio
    input.value = "t";
    input.setAttribute("type", "radio");
    support.radioValue = input.value === "t";
  })();


  var rreturn = /\r/g;

  jQuery.fn.extend({
    val: function (value) {
      var hooks, ret, isFunction,
        elem = this[0];

      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

          if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
            return ret;
          }

          ret = elem.value;

          return typeof ret === "string" ?
            // handle most common string cases
            ret.replace(rreturn, "") :
            // handle cases where value is null/undef or number
            ret == null ? "" : ret;
        }

        return;
      }

      isFunction = jQuery.isFunction(value);

      return this.each(function (i) {
        var val;

        if (this.nodeType !== 1) {
          return;
        }

        if (isFunction) {
          val = value.call(this, i, jQuery(this).val());
        } else {
          val = value;
        }

        // Treat null/undefined as ""; convert numbers to string
        if (val == null) {
          val = "";
        } else if (typeof val === "number") {
          val += "";
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? "" : value + "";
          });
        }

        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

        // If set returns undefined, fall back to normal setting
        if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
          this.value = val;
        }
      });
    }
  });

  jQuery.extend({
    valHooks: {
      option: {
        get: function (elem) {
          var val = jQuery.find.attr(elem, "value");
          return val != null ?
            val :
            // Support: IE10-11+
            // option.text throws exceptions (#14686, #14858)
            jQuery.trim(jQuery.text(elem));
        }
      },
      select: {
        get: function (elem) {
          var value, option,
            options = elem.options,
            index = elem.selectedIndex,
            one = elem.type === "select-one" || index < 0,
            values = one ? null : [],
            max = one ? index + 1 : options.length,
            i = index < 0 ?
              max :
              one ? index : 0;

          // Loop through all the selected options
          for (; i < max; i++) {
            option = options[i];

            // oldIE doesn't update selected after form reset (#2551)
            if ((option.selected || i === index) &&
              // Don't return options that are disabled or in a disabled optgroup
              (support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) &&
              (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

              // Get the specific value for the option
              value = jQuery(option).val();

              // We don't need an array for one selects
              if (one) {
                return value;
              }

              // Multi-Selects return an array
              values.push(value);
            }
          }

          return values;
        },

        set: function (elem, value) {
          var optionSet, option,
            options = elem.options,
            values = jQuery.makeArray(value),
            i = options.length;

          while (i--) {
            option = options[i];

            if (jQuery.inArray(jQuery.valHooks.option.get(option), values) >= 0) {

              // Support: IE6
              // When new option element is added to select box we need to
              // force reflow of newly added node in order to workaround delay
              // of initialization properties
              try {
                option.selected = optionSet = true;

              } catch (_) {

                // Will be executed only in IE6
                option.scrollHeight;
              }

            } else {
              option.selected = false;
            }
          }

          // Force browsers to behave consistently when non-matching value is set
          if (!optionSet) {
            elem.selectedIndex = -1;
          }

          return options;
        }
      }
    }
  });

// Radios and checkboxes getter/setter
  jQuery.each(["radio", "checkbox"], function () {
    jQuery.valHooks[this] = {
      set: function (elem, value) {
        if (jQuery.isArray(value)) {
          return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0);
        }
      }
    };
    if (!support.checkOn) {
      jQuery.valHooks[this].get = function (elem) {
        // Support: Webkit
        // "" is returned instead of "on" if a value isn't specified
        return elem.getAttribute("value") === null ? "on" : elem.value;
      };
    }
  });


  var nodeHook, boolHook,
    attrHandle = jQuery.expr.attrHandle,
    ruseDefault = /^(?:checked|selected)$/i,
    getSetAttribute = support.getSetAttribute,
    getSetInput = support.input;

  jQuery.fn.extend({
    attr: function (name, value) {
      return access(this, jQuery.attr, name, value, arguments.length > 1);
    },

    removeAttr: function (name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    }
  });

  jQuery.extend({
    attr: function (elem, name, value) {
      var hooks, ret,
        nType = elem.nodeType;

      // don't get/set attributes on text, comment and attribute nodes
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      // Fallback to prop when attributes are not supported
      if (typeof elem.getAttribute === strundefined) {
        return jQuery.prop(elem, name, value);
      }

      // All attributes are lowercase
      // Grab necessary hook if one is defined
      if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
        name = name.toLowerCase();
        hooks = jQuery.attrHooks[name] ||
          (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
      }

      if (value !== undefined) {

        if (value === null) {
          jQuery.removeAttr(elem, name);

        } else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;

        } else {
          elem.setAttribute(name, value + "");
          return value;
        }

      } else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;

      } else {
        ret = jQuery.find.attr(elem, name);

        // Non-existent attributes return null, we normalize to undefined
        return ret == null ?
          undefined :
          ret;
      }
    },

    removeAttr: function (elem, value) {
      var name, propName,
        i = 0,
        attrNames = value && value.match(rnotwhite);

      if (attrNames && elem.nodeType === 1) {
        while ((name = attrNames[i++])) {
          propName = jQuery.propFix[name] || name;

          // Boolean attributes get special treatment (#10870)
          if (jQuery.expr.match.bool.test(name)) {
            // Set corresponding property to false
            if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
              elem[propName] = false;
              // Support: IE<9
              // Also clear defaultChecked/defaultSelected (if appropriate)
            } else {
              elem[jQuery.camelCase("default-" + name)] =
                elem[propName] = false;
            }

            // See #9699 for explanation of this approach (setting first, then removal)
          } else {
            jQuery.attr(elem, name, "");
          }

          elem.removeAttribute(getSetAttribute ? name : propName);
        }
      }
    },

    attrHooks: {
      type: {
        set: function (elem, value) {
          if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
            // Setting the type on a radio button after the value resets the value in IE6-9
            // Reset value to default in case type is set after value during creation
            var val = elem.value;
            elem.setAttribute("type", value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }
      }
    }
  });

// Hook for boolean attributes
  boolHook = {
    set: function (elem, value, name) {
      if (value === false) {
        // Remove boolean attributes when set to false
        jQuery.removeAttr(elem, name);
      } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
        // IE<8 needs the *property* name
        elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);

        // Use defaultChecked and defaultSelected for oldIE
      } else {
        elem[jQuery.camelCase("default-" + name)] = elem[name] = true;
      }

      return name;
    }
  };

// Retrieve booleans specially
  jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {

    var getter = attrHandle[name] || jQuery.find.attr;

    attrHandle[name] = getSetInput && getSetAttribute || !ruseDefault.test(name) ?
      function (elem, name, isXML) {
        var ret, handle;
        if (!isXML) {
          // Avoid an infinite loop by temporarily removing this function from the getter
          handle = attrHandle[name];
          attrHandle[name] = ret;
          ret = getter(elem, name, isXML) != null ?
            name.toLowerCase() :
            null;
          attrHandle[name] = handle;
        }
        return ret;
      } :
      function (elem, name, isXML) {
        if (!isXML) {
          return elem[jQuery.camelCase("default-" + name)] ?
            name.toLowerCase() :
            null;
        }
      };
  });

// fix oldIE attroperties
  if (!getSetInput || !getSetAttribute) {
    jQuery.attrHooks.value = {
      set: function (elem, value, name) {
        if (jQuery.nodeName(elem, "input")) {
          // Does not return so that setAttribute is also used
          elem.defaultValue = value;
        } else {
          // Use nodeHook if defined (#1954); otherwise setAttribute is fine
          return nodeHook && nodeHook.set(elem, value, name);
        }
      }
    };
  }

// IE6/7 do not support getting/setting some attributes with get/setAttribute
  if (!getSetAttribute) {

    // Use this for any attribute in IE6/7
    // This fixes almost every IE6/7 issue
    nodeHook = {
      set: function (elem, value, name) {
        // Set the existing or create a new attribute node
        var ret = elem.getAttributeNode(name);
        if (!ret) {
          elem.setAttributeNode(
            (ret = elem.ownerDocument.createAttribute(name))
          );
        }

        ret.value = value += "";

        // Break association with cloned elements by also using setAttribute (#9646)
        if (name === "value" || value === elem.getAttribute(name)) {
          return value;
        }
      }
    };

    // Some attributes are constructed with empty-string values when not defined
    attrHandle.id = attrHandle.name = attrHandle.coords =
      function (elem, name, isXML) {
        var ret;
        if (!isXML) {
          return (ret = elem.getAttributeNode(name)) && ret.value !== "" ?
            ret.value :
            null;
        }
      };

    // Fixing value retrieval on a button requires this module
    jQuery.valHooks.button = {
      get: function (elem, name) {
        var ret = elem.getAttributeNode(name);
        if (ret && ret.specified) {
          return ret.value;
        }
      },
      set: nodeHook.set
    };

    // Set contenteditable to false on removals(#10429)
    // Setting to empty string throws an error as an invalid value
    jQuery.attrHooks.contenteditable = {
      set: function (elem, value, name) {
        nodeHook.set(elem, value === "" ? false : value, name);
      }
    };

    // Set width and height to auto instead of 0 on empty string( Bug #8150 )
    // This is for removals
    jQuery.each(["width", "height"], function (i, name) {
      jQuery.attrHooks[name] = {
        set: function (elem, value) {
          if (value === "") {
            elem.setAttribute(name, "auto");
            return value;
          }
        }
      };
    });
  }

  if (!support.style) {
    jQuery.attrHooks.style = {
      get: function (elem) {
        // Return undefined in the case of empty string
        // Note: IE uppercases css property names, but if we were to .toLowerCase()
        // .cssText, that would destroy case senstitivity in URL's, like in "background"
        return elem.style.cssText || undefined;
      },
      set: function (elem, value) {
        return (elem.style.cssText = value + "");
      }
    };
  }


  var rfocusable = /^(?:input|select|textarea|button|object)$/i,
    rclickable = /^(?:a|area)$/i;

  jQuery.fn.extend({
    prop: function (name, value) {
      return access(this, jQuery.prop, name, value, arguments.length > 1);
    },

    removeProp: function (name) {
      name = jQuery.propFix[name] || name;
      return this.each(function () {
        // try/catch handles cases where IE balks (such as removing a property on window)
        try {
          this[name] = undefined;
          delete this[name];
        } catch (e) {
        }
      });
    }
  });

  jQuery.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },

    prop: function (elem, name, value) {
      var ret, hooks, notxml,
        nType = elem.nodeType;

      // don't get/set properties on text, comment and attribute nodes
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }

      notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

      if (notxml) {
        // Fix name and attach hooks
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }

      if (value !== undefined) {
        return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ?
          ret :
          (elem[name] = value);

      } else {
        return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ?
          ret :
          elem[name];
      }
    },

    propHooks: {
      tabIndex: {
        get: function (elem) {
          // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
          // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
          // Use proper attribute retrieval(#12072)
          var tabindex = jQuery.find.attr(elem, "tabindex");

          return tabindex ?
            parseInt(tabindex, 10) :
            rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ?
              0 :
              -1;
        }
      }
    }
  });

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
  if (!support.hrefNormalized) {
    // href/src property should get the full normalized URL (#10299/#12915)
    jQuery.each(["href", "src"], function (i, name) {
      jQuery.propHooks[name] = {
        get: function (elem) {
          return elem.getAttribute(name, 4);
        }
      };
    });
  }

// Support: Safari, IE9+
// mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
  if (!support.optSelected) {
    jQuery.propHooks.selected = {
      get: function (elem) {
        var parent = elem.parentNode;

        if (parent) {
          parent.selectedIndex;

          // Make sure that it also works with optgroups, see #5701
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
        return null;
      }
    };
  }

  jQuery.each([
    "tabIndex",
    "readOnly",
    "maxLength",
    "cellSpacing",
    "cellPadding",
    "rowSpan",
    "colSpan",
    "useMap",
    "frameBorder",
    "contentEditable"
  ], function () {
    jQuery.propFix[this.toLowerCase()] = this;
  });

// IE6/7 call enctype encoding
  if (!support.enctype) {
    jQuery.propFix.enctype = "encoding";
  }


  var rclass = /[\t\r\n\f]/g;

  jQuery.fn.extend({
    addClass: function (value) {
      var classes, elem, cur, clazz, j, finalValue,
        i = 0,
        len = this.length,
        proceed = typeof value === "string" && value;

      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, this.className));
        });
      }

      if (proceed) {
        // The disjunction here is for better compressibility (see removeClass)
        classes = (value || "").match(rnotwhite) || [];

        for (; i < len; i++) {
          elem = this[i];
          cur = elem.nodeType === 1 && (elem.className ?
              (" " + elem.className + " ").replace(rclass, " ") :
              " "
          );

          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              if (cur.indexOf(" " + clazz + " ") < 0) {
                cur += clazz + " ";
              }
            }

            // only assign if different to avoid unneeded rendering.
            finalValue = jQuery.trim(cur);
            if (elem.className !== finalValue) {
              elem.className = finalValue;
            }
          }
        }
      }

      return this;
    },

    removeClass: function (value) {
      var classes, elem, cur, clazz, j, finalValue,
        i = 0,
        len = this.length,
        proceed = arguments.length === 0 || typeof value === "string" && value;

      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, this.className));
        });
      }
      if (proceed) {
        classes = (value || "").match(rnotwhite) || [];

        for (; i < len; i++) {
          elem = this[i];
          // This expression is here for better compressibility (see addClass)
          cur = elem.nodeType === 1 && (elem.className ?
              (" " + elem.className + " ").replace(rclass, " ") :
              ""
          );

          if (cur) {
            j = 0;
            while ((clazz = classes[j++])) {
              // Remove *all* instances
              while (cur.indexOf(" " + clazz + " ") >= 0) {
                cur = cur.replace(" " + clazz + " ", " ");
              }
            }

            // only assign if different to avoid unneeded rendering.
            finalValue = value ? jQuery.trim(cur) : "";
            if (elem.className !== finalValue) {
              elem.className = finalValue;
            }
          }
        }
      }

      return this;
    },

    toggleClass: function (value, stateVal) {
      var type = typeof value;

      if (typeof stateVal === "boolean" && type === "string") {
        return stateVal ? this.addClass(value) : this.removeClass(value);
      }

      if (jQuery.isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
        });
      }

      return this.each(function () {
        if (type === "string") {
          // toggle individual class names
          var className,
            i = 0,
            self = jQuery(this),
            classNames = value.match(rnotwhite) || [];

          while ((className = classNames[i++])) {
            // check each className given, space separated list
            if (self.hasClass(className)) {
              self.removeClass(className);
            } else {
              self.addClass(className);
            }
          }

          // Toggle whole class name
        } else if (type === strundefined || type === "boolean") {
          if (this.className) {
            // store className if set
            jQuery._data(this, "__className__", this.className);
          }

          // If the element has a class name or if we're passed "false",
          // then remove the whole classname (if there was one, the above saved it).
          // Otherwise bring back whatever was previously saved (if anything),
          // falling back to the empty string if nothing was stored.
          this.className = this.className || value === false ? "" : jQuery._data(this, "__className__") || "";
        }
      });
    },

    hasClass: function (selector) {
      var className = " " + selector + " ",
        i = 0,
        l = this.length;
      for (; i < l; i++) {
        if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
          return true;
        }
      }

      return false;
    }
  });


// Return jQuery for attributes-only inclusion


  jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " +
    "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
    "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

    // Handle event binding
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ?
        this.on(name, null, data, fn) :
        this.trigger(name);
    };
  });

  jQuery.fn.extend({
    hover: function (fnOver, fnOut) {
      return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
    },

    bind: function (types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function (types, fn) {
      return this.off(types, null, fn);
    },

    delegate: function (selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function (selector, types, fn) {
      // ( namespace ) or ( selector, types [, fn] )
      return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
    }
  });


  var nonce = jQuery.now();

  var rquery = (/\?/);


  var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

  jQuery.parseJSON = function (data) {
    // Attempt to parse using the native JSON parser first
    if (window.JSON && window.JSON.parse) {
      // Support: Android 2.3
      // Workaround failure to string-cast null input
      return window.JSON.parse(data + "");
    }

    var requireNonComma,
      depth = null,
      str = jQuery.trim(data + "");

    // Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
    // after removing valid tokens
    return str && !jQuery.trim(str.replace(rvalidtokens, function (token, comma, open, close) {

      // Force termination if we see a misplaced comma
      if (requireNonComma && comma) {
        depth = 0;
      }

      // Perform no more replacements after returning to outermost depth
      if (depth === 0) {
        return token;
      }

      // Commas must not follow "[", "{", or ","
      requireNonComma = open || comma;

      // Determine new depth
      // array/object open ("[" or "{"): depth += true - false (increment)
      // array/object close ("]" or "}"): depth += false - true (decrement)
      // other cases ("," or primitive): depth += true - true (numeric cast)
      depth += !close - !open;

      // Remove this token
      return "";
    })) ?
      (Function("return " + str))() :
      jQuery.error("Invalid JSON: " + data);
  };


// Cross-browser xml parsing
  jQuery.parseXML = function (data) {
    var xml, tmp;
    if (!data || typeof data !== "string") {
      return null;
    }
    try {
      if (window.DOMParser) { // Standard
        tmp = new DOMParser();
        xml = tmp.parseFromString(data, "text/xml");
      } else { // IE
        xml = new ActiveXObject("Microsoft.XMLDOM");
        xml.async = "false";
        xml.loadXML(data);
      }
    } catch (e) {
      xml = undefined;
    }
    if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
      jQuery.error("Invalid XML: " + data);
    }
    return xml;
  };


  var
    // Document location
    ajaxLocParts,
    ajaxLocation,

    rhash = /#.*$/,
    rts = /([?&])_=[^&]*/,
    rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
    // #7653, #8125, #8152: local protocol detection
    rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    rnoContent = /^(?:GET|HEAD)$/,
    rprotocol = /^\/\//,
    rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

    /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
    prefilters = {},

    /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
    transports = {},

    // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
    allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
  try {
    ajaxLocation = location.href;
  } catch (e) {
    // Use the href attribute of an A element
    // since IE will modify it given document.location
    ajaxLocation = document.createElement("a");
    ajaxLocation.href = "";
    ajaxLocation = ajaxLocation.href;
  }

// Segment location into parts
  ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
  function addToPrefiltersOrTransports(structure) {

    // dataTypeExpression is optional and defaults to "*"
    return function (dataTypeExpression, func) {

      if (typeof dataTypeExpression !== "string") {
        func = dataTypeExpression;
        dataTypeExpression = "*";
      }

      var dataType,
        i = 0,
        dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

      if (jQuery.isFunction(func)) {
        // For each dataType in the dataTypeExpression
        while ((dataType = dataTypes[i++])) {
          // Prepend if requested
          if (dataType.charAt(0) === "+") {
            dataType = dataType.slice(1) || "*";
            (structure[dataType] = structure[dataType] || []).unshift(func);

            // Otherwise append
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }

// Base inspection function for prefilters and transports
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

    var inspected = {},
      seekingTransport = (structure === transports);

    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }

    return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
  }

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
  function ajaxExtend(target, src) {
    var deep, key,
      flatOptions = jQuery.ajaxSettings.flatOptions || {};

    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }

    return target;
  }

  /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
  function ajaxHandleResponses(s, jqXHR, responses) {
    var firstDataType, ct, finalDataType, type,
      contents = s.contents,
      dataTypes = s.dataTypes;

    // Remove auto dataType and get content-type in the process
    while (dataTypes[0] === "*") {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
      }
    }

    // Check if we're dealing with a known content-type
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }

    // Check to see if we have a response for the expected dataType
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      // Try convertible dataTypes
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      // Or just use first one
      finalDataType = finalDataType || firstDataType;
    }

    // If we found a dataType
    // We add the dataType to the list if needed
    // and return the corresponding response
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }

  /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
  function ajaxConvert(s, response, jqXHR, isSuccess) {
    var conv2, current, conv, tmp, prev,
      converters = {},
      // Work with a copy of dataTypes in case we need to modify it for conversion
      dataTypes = s.dataTypes.slice();

    // Create converters map with lowercased keys
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }

    current = dataTypes.shift();

    // Convert to each sequential dataType
    while (current) {

      if (s.responseFields[current]) {
        jqXHR[s.responseFields[current]] = response;
      }

      // Apply the dataFilter if provided
      if (!prev && isSuccess && s.dataFilter) {
        response = s.dataFilter(response, s.dataType);
      }

      prev = current;
      current = dataTypes.shift();

      if (current) {

        // There's only work to do if current dataType is non-auto
        if (current === "*") {

          current = prev;

          // Convert response if prev dataType is non-auto and differs from current
        } else if (prev !== "*" && prev !== current) {

          // Seek a direct converter
          conv = converters[prev + " " + current] || converters["* " + current];

          // If none found, seek a pair
          if (!conv) {
            for (conv2 in converters) {

              // If conv2 outputs current
              tmp = conv2.split(" ");
              if (tmp[1] === current) {

                // If prev can be converted to accepted input
                conv = converters[prev + " " + tmp[0]] ||
                  converters["* " + tmp[0]];
                if (conv) {
                  // Condense equivalence converters
                  if (conv === true) {
                    conv = converters[conv2];

                    // Otherwise, insert the intermediate dataType
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.unshift(tmp[1]);
                  }
                  break;
                }
              }
            }
          }

          // Apply converter (if not an equivalence)
          if (conv !== true) {

            // Unless errors are allowed to bubble, catch and return them
            if (conv && s["throws"]) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current};
              }
            }
          }
        }
      }
    }

    return {state: "success", data: response};
  }

  jQuery.extend({

    // Counter for holding the number of active queries
    active: 0,

    // Last-Modified header cache for next request
    lastModified: {},
    etag: {},

    ajaxSettings: {
      url: ajaxLocation,
      type: "GET",
      isLocal: rlocalProtocol.test(ajaxLocParts[1]),
      global: true,
      processData: true,
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

      accepts: {
        "*": allTypes,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },

      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },

      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },

      // Data converters
      // Keys separate source (or catchall "*") and destination types with a single space
      converters: {

        // Convert anything to text
        "* text": String,

        // Text to html (true = no transformation)
        "text html": true,

        // Evaluate text as a json expression
        "text json": jQuery.parseJSON,

        // Parse text as xml
        "text xml": jQuery.parseXML
      },

      // For options that shouldn't be deep extended:
      // you can add your own custom options here if
      // and when you create one that shouldn't be
      // deep extended (see ajaxExtend)
      flatOptions: {
        url: true,
        context: true
      }
    },

    // Creates a full fledged settings object into target
    // with both ajaxSettings and settings fields.
    // If target is omitted, writes into ajaxSettings.
    ajaxSetup: function (target, settings) {
      return settings ?

        // Building a settings object
        ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

        // Extending ajaxSettings
        ajaxExtend(jQuery.ajaxSettings, target);
    },

    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),

    // Main method
    ajax: function (url, options) {

      // If url is an object, simulate pre-1.5 signature
      if (typeof url === "object") {
        options = url;
        url = undefined;
      }

      // Force options to be an object
      options = options || {};

      var // Cross-domain detection vars
        parts,
        // Loop variable
        i,
        // URL without anti-cache param
        cacheURL,
        // Response headers as string
        responseHeadersString,
        // timeout handle
        timeoutTimer,

        // To know if global events are to be dispatched
        fireGlobals,

        transport,
        // Response headers
        responseHeaders,
        // Create the final options object
        s = jQuery.ajaxSetup({}, options),
        // Callbacks context
        callbackContext = s.context || s,
        // Context for global events is callbackContext if it is a DOM node or jQuery collection
        globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ?
          jQuery(callbackContext) :
          jQuery.event,
        // Deferreds
        deferred = jQuery.Deferred(),
        completeDeferred = jQuery.Callbacks("once memory"),
        // Status-dependent callbacks
        statusCode = s.statusCode || {},
        // Headers (they are sent all at once)
        requestHeaders = {},
        requestHeadersNames = {},
        // The jqXHR state
        state = 0,
        // Default abort message
        strAbort = "canceled",
        // Fake xhr
        jqXHR = {
          readyState: 0,

          // Builds headers hashtable if needed
          getResponseHeader: function (key) {
            var match;
            if (state === 2) {
              if (!responseHeaders) {
                responseHeaders = {};
                while ((match = rheaders.exec(responseHeadersString))) {
                  responseHeaders[match[1].toLowerCase()] = match[2];
                }
              }
              match = responseHeaders[key.toLowerCase()];
            }
            return match == null ? null : match;
          },

          // Raw string
          getAllResponseHeaders: function () {
            return state === 2 ? responseHeadersString : null;
          },

          // Caches the header
          setRequestHeader: function (name, value) {
            var lname = name.toLowerCase();
            if (!state) {
              name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
              requestHeaders[name] = value;
            }
            return this;
          },

          // Overrides response content-type header
          overrideMimeType: function (type) {
            if (!state) {
              s.mimeType = type;
            }
            return this;
          },

          // Status-dependent callbacks
          statusCode: function (map) {
            var code;
            if (map) {
              if (state < 2) {
                for (code in map) {
                  // Lazy-add the new callback in a way that preserves old ones
                  statusCode[code] = [statusCode[code], map[code]];
                }
              } else {
                // Execute the appropriate callbacks
                jqXHR.always(map[jqXHR.status]);
              }
            }
            return this;
          },

          // Cancel the request
          abort: function (statusText) {
            var finalText = statusText || strAbort;
            if (transport) {
              transport.abort(finalText);
            }
            done(0, finalText);
            return this;
          }
        };

      // Attach deferreds
      deferred.promise(jqXHR).complete = completeDeferred.add;
      jqXHR.success = jqXHR.done;
      jqXHR.error = jqXHR.fail;

      // Remove hash character (#7531: and string promotion)
      // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
      // Handle falsy url in the settings object (#10093: consistency with old signature)
      // We also use the url parameter if available
      s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

      // Alias method option to type as per ticket #12004
      s.type = options.method || options.type || s.method || s.type;

      // Extract dataTypes list
      s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

      // A cross-domain request is in order when we have a protocol:host:port mismatch
      if (s.crossDomain == null) {
        parts = rurl.exec(s.url.toLowerCase());
        s.crossDomain = !!(parts &&
          (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] ||
            (parts[3] || (parts[1] === "http:" ? "80" : "443")) !==
            (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443")))
        );
      }

      // Convert data if not already a string
      if (s.data && s.processData && typeof s.data !== "string") {
        s.data = jQuery.param(s.data, s.traditional);
      }

      // Apply prefilters
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

      // If request was aborted inside a prefilter, stop there
      if (state === 2) {
        return jqXHR;
      }

      // We can fire global events as of now if asked to
      fireGlobals = s.global;

      // Watch for a new set of requests
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger("ajaxStart");
      }

      // Uppercase the type
      s.type = s.type.toUpperCase();

      // Determine if request has content
      s.hasContent = !rnoContent.test(s.type);

      // Save the URL in case we're toying with the If-Modified-Since
      // and/or If-None-Match header later on
      cacheURL = s.url;

      // More options handling for requests with no content
      if (!s.hasContent) {

        // If data is available, append data to url
        if (s.data) {
          cacheURL = (s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data);
          // #9682: remove data so that it's not used in an eventual retry
          delete s.data;
        }

        // Add anti-cache in url if needed
        if (s.cache === false) {
          s.url = rts.test(cacheURL) ?

            // If there is already a '_' parameter, set its value
            cacheURL.replace(rts, "$1_=" + nonce++) :

            // Otherwise add one to the end
            cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
        }
      }

      // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
        }
      }

      // Set the correct header, if data is being sent
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader("Content-Type", s.contentType);
      }

      // Set the Accepts header for the server, depending on the dataType
      jqXHR.setRequestHeader(
        "Accept",
        s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
          s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
          s.accepts["*"]
      );

      // Check for headers option
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }

      // Allow custom headers/mimetypes and early abort
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
        // Abort if not done already and return
        return jqXHR.abort();
      }

      // aborting is no longer a cancellation
      strAbort = "abort";

      // Install callbacks on deferreds
      for (i in {success: 1, error: 1, complete: 1}) {
        jqXHR[i](s[i]);
      }

      // Get transport
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

      // If no transport, we auto-abort
      if (!transport) {
        done(-1, "No Transport");
      } else {
        jqXHR.readyState = 1;

        // Send global event
        if (fireGlobals) {
          globalEventContext.trigger("ajaxSend", [jqXHR, s]);
        }
        // Timeout
        if (s.async && s.timeout > 0) {
          timeoutTimer = setTimeout(function () {
            jqXHR.abort("timeout");
          }, s.timeout);
        }

        try {
          state = 1;
          transport.send(requestHeaders, done);
        } catch (e) {
          // Propagate exception as error if not done
          if (state < 2) {
            done(-1, e);
            // Simply rethrow otherwise
          } else {
            throw e;
          }
        }
      }

      // Callback for when everything is done
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess, success, error, response, modified,
          statusText = nativeStatusText;

        // Called once
        if (state === 2) {
          return;
        }

        // State is "done" now
        state = 2;

        // Clear timeout if it exists
        if (timeoutTimer) {
          clearTimeout(timeoutTimer);
        }

        // Dereference transport for early garbage collection
        // (no matter how long the jqXHR object will be used)
        transport = undefined;

        // Cache response headers
        responseHeadersString = headers || "";

        // Set readyState
        jqXHR.readyState = status > 0 ? 4 : 0;

        // Determine if successful
        isSuccess = status >= 200 && status < 300 || status === 304;

        // Get response data
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }

        // Convert no matter what (that way responseXXX fields are always set)
        response = ajaxConvert(s, response, jqXHR, isSuccess);

        // If successful, handle type chaining
        if (isSuccess) {

          // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader("Last-Modified");
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader("etag");
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }

          // if no content
          if (status === 204 || s.type === "HEAD") {
            statusText = "nocontent";

            // if not modified
          } else if (status === 304) {
            statusText = "notmodified";

            // If we have data, let's convert it
          } else {
            statusText = response.state;
            success = response.data;
            error = response.error;
            isSuccess = !error;
          }
        } else {
          // We extract error from statusText
          // then normalize statusText and status for non-aborts
          error = statusText;
          if (status || !statusText) {
            statusText = "error";
            if (status < 0) {
              status = 0;
            }
          }
        }

        // Set data for the fake xhr object
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + "";

        // Success/Error
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
        } else {
          deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
        }

        // Status-dependent callbacks
        jqXHR.statusCode(statusCode);
        statusCode = undefined;

        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError",
            [jqXHR, s, isSuccess ? success : error]);
        }

        // Complete
        completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

        if (fireGlobals) {
          globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
          // Handle the global AJAX counter
          if (!(--jQuery.active)) {
            jQuery.event.trigger("ajaxStop");
          }
        }
      }

      return jqXHR;
    },

    getJSON: function (url, data, callback) {
      return jQuery.get(url, data, callback, "json");
    },

    getScript: function (url, callback) {
      return jQuery.get(url, undefined, callback, "script");
    }
  });

  jQuery.each(["get", "post"], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
      // shift arguments if data argument was omitted
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }

      return jQuery.ajax({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      });
    };
  });

// Attach a bunch of functions for handling common AJAX events
  jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });


  jQuery._evalUrl = function (url) {
    return jQuery.ajax({
      url: url,
      type: "GET",
      dataType: "script",
      async: false,
      global: false,
      "throws": true
    });
  };


  jQuery.fn.extend({
    wrapAll: function (html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapAll(html.call(this, i));
        });
      }

      if (this[0]) {
        // The elements to wrap the target around
        var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }

        wrap.map(function () {
          var elem = this;

          while (elem.firstChild && elem.firstChild.nodeType === 1) {
            elem = elem.firstChild;
          }

          return elem;
        }).append(this);
      }

      return this;
    },

    wrapInner: function (html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }

      return this.each(function () {
        var self = jQuery(this),
          contents = self.contents();

        if (contents.length) {
          contents.wrapAll(html);

        } else {
          self.append(html);
        }
      });
    },

    wrap: function (html) {
      var isFunction = jQuery.isFunction(html);

      return this.each(function (i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },

    unwrap: function () {
      return this.parent().each(function () {
        if (!jQuery.nodeName(this, "body")) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    }
  });


  jQuery.expr.filters.hidden = function (elem) {
    // Support: Opera <= 12.12
    // Opera reports offsetWidths and offsetHeights less than zero on some elements
    return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
      (!support.reliableHiddenOffsets() &&
        ((elem.style && elem.style.display) || jQuery.css(elem, "display")) === "none");
  };

  jQuery.expr.filters.visible = function (elem) {
    return !jQuery.expr.filters.hidden(elem);
  };


  var r20 = /%20/g,
    rbracket = /\[\]$/,
    rCRLF = /\r?\n/g,
    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
    rsubmittable = /^(?:input|select|textarea|keygen)/i;

  function buildParams(prefix, obj, traditional, add) {
    var name;

    if (jQuery.isArray(obj)) {
      // Serialize array item.
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          // Treat each array item as a scalar.
          add(prefix, v);

        } else {
          // Item is non-scalar (array or object), encode its numeric index.
          buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
        }
      });

    } else if (!traditional && jQuery.type(obj) === "object") {
      // Serialize object item.
      for (name in obj) {
        buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
      }

    } else {
      // Serialize scalar item.
      add(prefix, obj);
    }
  }

// Serialize an array of form elements or a set of
// key/values into a query string
  jQuery.param = function (a, traditional) {
    var prefix,
      s = [],
      add = function (key, value) {
        // If value is a function, invoke it and return its value
        value = jQuery.isFunction(value) ? value() : (value == null ? "" : value);
        s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
      };

    // Set traditional to true for jQuery <= 1.3.2 behavior.
    if (traditional === undefined) {
      traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
    }

    // If an array was passed in, assume that it is an array of form elements.
    if (jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
      // Serialize the form elements
      jQuery.each(a, function () {
        add(this.name, this.value);
      });

    } else {
      // If traditional, encode the "old" way (the way 1.3.2 or older
      // did it), otherwise encode params recursively.
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }

    // Return the resulting serialization
    return s.join("&").replace(r20, "+");
  };

  jQuery.fn.extend({
    serialize: function () {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        // Can add propHook for "elements" to filter or add form elements
        var elements = jQuery.prop(this, "elements");
        return elements ? jQuery.makeArray(elements) : this;
      })
        .filter(function () {
          var type = this.type;
          // Use .is(":disabled") so that fieldset[disabled] works
          return this.name && !jQuery(this).is(":disabled") &&
            rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
            (this.checked || !rcheckableType.test(type));
        })
        .map(function (i, elem) {
          var val = jQuery(this).val();

          return val == null ?
            null :
            jQuery.isArray(val) ?
              jQuery.map(val, function (val) {
                return {name: elem.name, value: val.replace(rCRLF, "\r\n")};
              }) :
              {name: elem.name, value: val.replace(rCRLF, "\r\n")};
        }).get();
    }
  });


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
  jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
    // Support: IE6+
    function () {

      // XHR cannot access local files, always use ActiveX for that case
      return !this.isLocal &&

        // Support: IE7-8
        // oldIE XHR does not support non-RFC2616 methods (#13240)
        // See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
        // and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
        // Although this check for six methods instead of eight
        // since IE also does not support "trace" and "connect"
        /^(get|post|head|put|delete|options)$/i.test(this.type) &&

        createStandardXHR() || createActiveXHR();
    } :
    // For all other browsers, use the standard XMLHttpRequest object
    createStandardXHR;

  var xhrId = 0,
    xhrCallbacks = {},
    xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
  if (window.ActiveXObject) {
    jQuery(window).on("unload", function () {
      for (var key in xhrCallbacks) {
        xhrCallbacks[key](undefined, true);
      }
    });
  }

// Determine support properties
  support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
  xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
  if (xhrSupported) {

    jQuery.ajaxTransport(function (options) {
      // Cross domain only allowed if supported through XMLHttpRequest
      if (!options.crossDomain || support.cors) {

        var callback;

        return {
          send: function (headers, complete) {
            var i,
              xhr = options.xhr(),
              id = ++xhrId;

            // Open the socket
            xhr.open(options.type, options.url, options.async, options.username, options.password);

            // Apply custom fields if provided
            if (options.xhrFields) {
              for (i in options.xhrFields) {
                xhr[i] = options.xhrFields[i];
              }
            }

            // Override mime type if needed
            if (options.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(options.mimeType);
            }

            // X-Requested-With header
            // For cross-domain requests, seeing as conditions for a preflight are
            // akin to a jigsaw puzzle, we simply never set it to be sure.
            // (it can always be set on a per-request basis or even using ajaxSetup)
            // For same-domain requests, won't change header if already provided.
            if (!options.crossDomain && !headers["X-Requested-With"]) {
              headers["X-Requested-With"] = "XMLHttpRequest";
            }

            // Set headers
            for (i in headers) {
              // Support: IE<9
              // IE's ActiveXObject throws a 'Type Mismatch' exception when setting
              // request header to a null-value.
              //
              // To keep consistent with other XHR implementations, cast the value
              // to string and ignore `undefined`.
              if (headers[i] !== undefined) {
                xhr.setRequestHeader(i, headers[i] + "");
              }
            }

            // Do send the request
            // This may raise an exception which is actually
            // handled in jQuery.ajax (so no try/catch here)
            xhr.send((options.hasContent && options.data) || null);

            // Listener
            callback = function (_, isAbort) {
              var status, statusText, responses;

              // Was never called and is aborted or complete
              if (callback && (isAbort || xhr.readyState === 4)) {
                // Clean up
                delete xhrCallbacks[id];
                callback = undefined;
                xhr.onreadystatechange = jQuery.noop;

                // Abort manually if needed
                if (isAbort) {
                  if (xhr.readyState !== 4) {
                    xhr.abort();
                  }
                } else {
                  responses = {};
                  status = xhr.status;

                  // Support: IE<10
                  // Accessing binary-data responseText throws an exception
                  // (#11426)
                  if (typeof xhr.responseText === "string") {
                    responses.text = xhr.responseText;
                  }

                  // Firefox throws an exception when accessing
                  // statusText for faulty cross-domain requests
                  try {
                    statusText = xhr.statusText;
                  } catch (e) {
                    // We normalize with Webkit giving an empty statusText
                    statusText = "";
                  }

                  // Filter status for non standard behaviors

                  // If the request is local and we have data: assume a success
                  // (success with no data won't get notified, that's the best we
                  // can do given current implementations)
                  if (!status && options.isLocal && !options.crossDomain) {
                    status = responses.text ? 200 : 404;
                    // IE - #1450: sometimes returns 1223 when it should be 204
                  } else if (status === 1223) {
                    status = 204;
                  }
                }
              }

              // Call complete if needed
              if (responses) {
                complete(status, statusText, responses, xhr.getAllResponseHeaders());
              }
            };

            if (!options.async) {
              // if we're in sync mode we fire the callback
              callback();
            } else if (xhr.readyState === 4) {
              // (IE6 & IE7) if it's in cache and has been
              // retrieved directly we need to fire the callback
              setTimeout(callback);
            } else {
              // Add to the list of active xhr callbacks
              xhr.onreadystatechange = xhrCallbacks[id] = callback;
            }
          },

          abort: function () {
            if (callback) {
              callback(undefined, true);
            }
          }
        };
      }
    });
  }

// Functions to create xhrs
  function createStandardXHR() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {
    }
  }

  function createActiveXHR() {
    try {
      return new window.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
    }
  }


// Install script dataType
  jQuery.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function (text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  });

// Handle cache's special case and global
  jQuery.ajaxPrefilter("script", function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = "GET";
      s.global = false;
    }
  });

// Bind script tag hack transport
  jQuery.ajaxTransport("script", function (s) {

    // This transport only deals with cross domain requests
    if (s.crossDomain) {

      var script,
        head = document.head || jQuery("head")[0] || document.documentElement;

      return {

        send: function (_, callback) {

          script = document.createElement("script");

          script.async = true;

          if (s.scriptCharset) {
            script.charset = s.scriptCharset;
          }

          script.src = s.url;

          // Attach handlers for all browsers
          script.onload = script.onreadystatechange = function (_, isAbort) {

            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {

              // Handle memory leak in IE
              script.onload = script.onreadystatechange = null;

              // Remove the script
              if (script.parentNode) {
                script.parentNode.removeChild(script);
              }

              // Dereference the script
              script = null;

              // Callback if not abort
              if (!isAbort) {
                callback(200, "success");
              }
            }
          };

          // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
          // Use native DOM manipulation to avoid our domManip AJAX trickery
          head.insertBefore(script, head.firstChild);
        },

        abort: function () {
          if (script) {
            script.onload(undefined, true);
          }
        }
      };
    }
  });


  var oldCallbacks = [],
    rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
  jQuery.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
      this[callback] = true;
      return callback;
    }
  });

// Detect, normalize options and install callbacks for jsonp requests
  jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

    var callbackName, overwritten, responseContainer,
      jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
          "url" :
          typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data"
      );

    // Handle iff the expected data type is "jsonp" or we have a parameter to set
    if (jsonProp || s.dataTypes[0] === "jsonp") {

      // Get callback name, remembering preexisting value associated with it
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ?
        s.jsonpCallback() :
        s.jsonpCallback;

      // Insert callback into url or form data
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
      }

      // Use data converter to retrieve json after script execution
      s.converters["script json"] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + " was not called");
        }
        return responseContainer[0];
      };

      // force json dataType
      s.dataTypes[0] = "json";

      // Install callback
      overwritten = window[callbackName];
      window[callbackName] = function () {
        responseContainer = arguments;
      };

      // Clean-up function (fires after converters)
      jqXHR.always(function () {
        // Restore preexisting value
        window[callbackName] = overwritten;

        // Save back as free
        if (s[callbackName]) {
          // make sure that re-using the options doesn't screw things around
          s.jsonpCallback = originalSettings.jsonpCallback;

          // save the callback name for future use
          oldCallbacks.push(callbackName);
        }

        // Call if it was a function and we have a response
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }

        responseContainer = overwritten = undefined;
      });

      // Delegate to script
      return "script";
    }
  });


// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
  jQuery.parseHTML = function (data, context, keepScripts) {
    if (!data || typeof data !== "string") {
      return null;
    }
    if (typeof context === "boolean") {
      keepScripts = context;
      context = false;
    }
    context = context || document;

    var parsed = rsingleTag.exec(data),
      scripts = !keepScripts && [];

    // Single tag
    if (parsed) {
      return [context.createElement(parsed[1])];
    }

    parsed = jQuery.buildFragment([data], context, scripts);

    if (scripts && scripts.length) {
      jQuery(scripts).remove();
    }

    return jQuery.merge([], parsed.childNodes);
  };


// Keep a copy of the old load method
  var _load = jQuery.fn.load;

  /**
   * Load a url into a page
   */
  jQuery.fn.load = function (url, params, callback) {
    if (typeof url !== "string" && _load) {
      return _load.apply(this, arguments);
    }

    var selector, response, type,
      self = this,
      off = url.indexOf(" ");

    if (off >= 0) {
      selector = jQuery.trim(url.slice(off, url.length));
      url = url.slice(0, off);
    }

    // If it's a function
    if (jQuery.isFunction(params)) {

      // We assume that it's the callback
      callback = params;
      params = undefined;

      // Otherwise, build a param string
    } else if (params && typeof params === "object") {
      type = "POST";
    }

    // If we have elements to modify, make the request
    if (self.length > 0) {
      jQuery.ajax({
        url: url,

        // if "type" variable is undefined, then "GET" method will be used
        type: type,
        dataType: "html",
        data: params
      }).done(function (responseText) {

        // Save response for use in complete callback
        response = arguments;

        self.html(selector ?

          // If a selector was specified, locate the right elements in a dummy div
          // Exclude scripts to avoid IE 'Permission Denied' errors
          jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

          // Otherwise use the full result
          responseText);

      }).complete(callback && function (jqXHR, status) {
        self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
      });
    }

    return this;
  };


  jQuery.expr.filters.animated = function (elem) {
    return jQuery.grep(jQuery.timers, function (fn) {
      return elem === fn.elem;
    }).length;
  };


  var docElem = window.document.documentElement;

  /**
   * Gets a window from an element
   */
  function getWindow(elem) {
    return jQuery.isWindow(elem) ?
      elem :
      elem.nodeType === 9 ?
        elem.defaultView || elem.parentWindow :
        false;
  }

  jQuery.offset = {
    setOffset: function (elem, options, i) {
      var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
        position = jQuery.css(elem, "position"),
        curElem = jQuery(elem),
        props = {};

      // set position first, in-case top/left are set even on static elem
      if (position === "static") {
        elem.style.position = "relative";
      }

      curOffset = curElem.offset();
      curCSSTop = jQuery.css(elem, "top");
      curCSSLeft = jQuery.css(elem, "left");
      calculatePosition = (position === "absolute" || position === "fixed") &&
        jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1;

      // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }

      if (jQuery.isFunction(options)) {
        options = options.call(elem, i, curOffset);
      }

      if (options.top != null) {
        props.top = (options.top - curOffset.top) + curTop;
      }
      if (options.left != null) {
        props.left = (options.left - curOffset.left) + curLeft;
      }

      if ("using" in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };

  jQuery.fn.extend({
    offset: function (options) {
      if (arguments.length) {
        return options === undefined ?
          this :
          this.each(function (i) {
            jQuery.offset.setOffset(this, options, i);
          });
      }

      var docElem, win,
        box = {top: 0, left: 0},
        elem = this[0],
        doc = elem && elem.ownerDocument;

      if (!doc) {
        return;
      }

      docElem = doc.documentElement;

      // Make sure it's not a disconnected DOM node
      if (!jQuery.contains(docElem, elem)) {
        return box;
      }

      // If we don't have gBCR, just use 0,0 rather than error
      // BlackBerry 5, iOS 3 (original iPhone)
      if (typeof elem.getBoundingClientRect !== strundefined) {
        box = elem.getBoundingClientRect();
      }
      win = getWindow(doc);
      return {
        top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
        left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
      };
    },

    position: function () {
      if (!this[0]) {
        return;
      }

      var offsetParent, offset,
        parentOffset = {top: 0, left: 0},
        elem = this[0];

      // fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
      if (jQuery.css(elem, "position") === "fixed") {
        // we assume that getBoundingClientRect is available when computed position is fixed
        offset = elem.getBoundingClientRect();
      } else {
        // Get *real* offsetParent
        offsetParent = this.offsetParent();

        // Get correct offsets
        offset = this.offset();
        if (!jQuery.nodeName(offsetParent[0], "html")) {
          parentOffset = offsetParent.offset();
        }

        // Add offsetParent borders
        parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
        parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
      }

      // Subtract parent offsets and element margins
      // note: when an element has margin: auto the offsetLeft and marginLeft
      // are the same in Safari causing offset.left to incorrectly be 0
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
        left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
      };
    },

    offsetParent: function () {
      return this.map(function () {
        var offsetParent = this.offsetParent || docElem;

        while (offsetParent && (!jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static")) {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || docElem;
      });
    }
  });

// Create scrollLeft and scrollTop methods
  jQuery.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (method, prop) {
    var top = /Y/.test(prop);

    jQuery.fn[method] = function (val) {
      return access(this, function (elem, method, val) {
        var win = getWindow(elem);

        if (val === undefined) {
          return win ? (prop in win) ? win[prop] :
            win.document.documentElement[method] :
            elem[method];
        }

        if (win) {
          win.scrollTo(
            !top ? val : jQuery(win).scrollLeft(),
            top ? val : jQuery(win).scrollTop()
          );

        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length, null);
    };
  });

// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
  jQuery.each(["top", "left"], function (i, prop) {
    jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
      function (elem, computed) {
        if (computed) {
          computed = curCSS(elem, prop);
          // if curCSS returns percentage, fallback to offset
          return rnumnonpx.test(computed) ?
            jQuery(elem).position()[prop] + "px" :
            computed;
        }
      }
    );
  });


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
  jQuery.each({Height: "height", Width: "width"}, function (name, type) {
    jQuery.each({padding: "inner" + name, content: type, "": "outer" + name}, function (defaultExtra, funcName) {
      // margin is only for outerHeight, outerWidth
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
          extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

        return access(this, function (elem, type, value) {
          var doc;

          if (jQuery.isWindow(elem)) {
            // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
            // isn't a whole lot we can do. See pull request at this URL for discussion:
            // https://github.com/jquery/jquery/pull/764
            return elem.document.documentElement["client" + name];
          }

          // Get document width or height
          if (elem.nodeType === 9) {
            doc = elem.documentElement;

            // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
            // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
            return Math.max(
              elem.body["scroll" + name], doc["scroll" + name],
              elem.body["offset" + name], doc["offset" + name],
              doc["client" + name]
            );
          }

          return value === undefined ?
            // Get width or height on the element, requesting but not forcing parseFloat
            jQuery.css(elem, type, extra) :

            // Set width or height on the element
            jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable, null);
      };
    });
  });


// The number of elements contained in the matched element set
  jQuery.fn.size = function () {
    return this.length;
  };

  jQuery.fn.andSelf = jQuery.fn.addBack;


// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

  if (typeof define === "function" && define.amd) {
    define("jquery", [], function () {
      return jQuery;
    });
  }


  var
    // Map over jQuery in case of overwrite
    _jQuery = window.jQuery,

    // Map over the $ in case of overwrite
    _$ = window.$;

  jQuery.noConflict = function (deep) {
    if (window.$ === jQuery) {
      window.$ = _$;
    }

    if (deep && window.jQuery === jQuery) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  };

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
  if (typeof noGlobal === strundefined) {
    window.jQuery = window.$ = jQuery;
  }


  return jQuery;

}));

;//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (typeof define === 'function' && define.amd) {
    define('underscore', [], function() {
      return _;
    });
  }
}.call(this));

;//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
;/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);
;
//# sourceMappingURL=scripts.js.map