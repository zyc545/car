(function(){var h={},mt={},c={id:"3d7f6839f5a39e141432b11842e73e26",dm:["1hai.cn","my.1hai.cn","booking.1hai.cn","m.1hai.cn"],js:"tongji.baidu.com/hm-web/js/",etrk:[],cetrk:[],icon:'',ctrk:false,align:-1,nv:1,vdur:1800000,age:31536000000,rec:0,rp:[],trust:1,vcard:184791,qiao:184791,lxb:0,kbtrk:0,pt:0,spa:0,aet:'',hca:'AB0B1D03E45F1DA6',conv:0,med:0,cvcc:'',cvcf:[],apps:''};var s=void 0,u=!0,v=null,w=!1;mt.cookie={};mt.cookie.set=function(b,a,f){var d;f.K&&(d=new Date,d.setTime(d.getTime()+f.K));document.cookie=b+"="+a+(f.domain?"; domain="+f.domain:"")+(f.path?"; path="+f.path:"")+(d?"; expires="+d.toGMTString():"")+(f.$b?"; secure":"")};mt.cookie.get=function(b){return(b=RegExp("(^| )"+b+"=([^;]*)(;|$)").exec(document.cookie))?b[2]:v};
mt.cookie.yb=function(b,a){try{var f="Hm_ck_"+ +new Date;mt.cookie.set(f,"is-cookie-enabled",{domain:b,path:a,K:s});var d="is-cookie-enabled"===mt.cookie.get(f)?"1":"0";mt.cookie.set(f,"",{domain:b,path:a,K:-1});return d}catch(g){return"0"}};mt.lang={};mt.lang.e=function(b,a){return"[object "+a+"]"==={}.toString.call(b)};mt.lang.Ea=function(b){return mt.lang.e(b,"Number")&&isFinite(b)};mt.lang.ka=function(){return mt.lang.e(c.aet,"String")};
mt.lang.h=function(b){return b.replace?b.replace(/'/g,"'0").replace(/\*/g,"'1").replace(/!/g,"'2"):b};mt.lang.trim=function(b){return b.replace(/^\s+|\s+$/g,"")};mt.lang.H=function(b,a){var f=w;if(b==v||!mt.lang.e(b,"Array")||a===s)return f;if(Array.prototype.indexOf)f=-1!==b.indexOf(a);else for(var d=0;d<b.length;d++)if(b[d]===a){f=u;break}return f};
(function(){var b=mt.lang;mt.f={};mt.f.ea=function(a){return document.getElementById(a)};mt.f.fb=function(a){if(!a)return v;try{for(var b=a.split(">"),d=document.body,g=b.length-1;0<=g;g--)if(-1<b[g].indexOf("#")){var e=b[g].split("#")[1];(d=document.getElementById(e))||(d=document.getElementById(decodeURIComponent(e)));b=b.splice(g+1,b.length-(g+1));break}for(a=0;d&&a<b.length;){var l=String(b[a]).toLowerCase();if(!("html"===l||"body"===l)){var g=0,p=b[a].match(/\[(\d+)\]/i),e=[];if(p)g=p[1]-1,l=
l.split("[")[0];else if(1!==d.childNodes.length){for(var n=0,t=0,m=d.childNodes.length;t<m;t++){var k=d.childNodes[t];1===k.nodeType&&k.nodeName.toLowerCase()===l&&n++;if(1<n)return v}if(1!==n)return v}for(n=0;n<d.childNodes.length;n++)1===d.childNodes[n].nodeType&&d.childNodes[n].nodeName.toLowerCase()===l&&e.push(d.childNodes[n]);if(!e[g])return v;d=e[g]}a++}return d}catch(r){return v}};mt.f.ha=function(a,b){var d=[],g=[];if(!a)return g;for(;a.parentNode!=v;){for(var e=0,l=0,p=a.parentNode.childNodes.length,
n=0;n<p;n++){var t=a.parentNode.childNodes[n];if(t.nodeName===a.nodeName&&(e++,t===a&&(l=e),0<l&&1<e))break}if((p=""!==a.id)&&b){d.unshift("#"+encodeURIComponent(a.id));break}else p&&(p="#"+encodeURIComponent(a.id),p=0<d.length?p+">"+d.join(">"):p,g.push(p)),d.unshift(encodeURIComponent(String(a.nodeName).toLowerCase())+(1<e?"["+l+"]":""));a=a.parentNode}g.push(d.join(">"));return g};mt.f.lb=function(a){return(a=mt.f.ha(a,u))&&a.length?String(a[0]):""};mt.f.jb=function(a){return mt.f.ha(a,w)};mt.f.Ub=
function(a,b){for(b=b.toUpperCase();(a=a.parentNode)&&1==a.nodeType;)if(a.tagName==b)return a;return v};mt.f.eb=function(a){return 9===a.nodeType?a:a.ownerDocument||a.document};mt.f.Vb=function(a){var b={top:0,left:0};if(!a)return b;var d=mt.f.eb(a).documentElement;"undefined"!==typeof a.getBoundingClientRect&&(b=a.getBoundingClientRect());return{top:b.top+(window.pageYOffset||d.scrollTop)-(d.clientTop||0),left:b.left+(window.pageXOffset||d.scrollLeft)-(d.clientLeft||0)}};mt.f.getAttribute=function(a,
b){var d=a.getAttribute&&a.getAttribute(b)||v;if(!d&&a.attributes&&a.attributes.length)for(var g=a.attributes,e=g.length,l=0;l<e;l++)g[l].nodeName===b&&(d=g[l].nodeValue);return d};mt.f.S=function(a){var b="document";a.tagName!==s&&(b=a.tagName);return b.toLowerCase()};mt.f.nb=function(a){var f="";a.textContent?f=b.trim(a.textContent):a.innerText&&(f=b.trim(a.innerText));f&&(f=f.replace(/\s+/g," ").substring(0,255));return f};mt.f.za=function(a,b){var d=mt.f.S(a);"input"===d&&b&&("button"===a.type||
"submit"===a.type)?d=a.value||"":"input"===d&&!b&&"password"!==a.type?d=a.value||"":"img"===d?(d=mt.f.getAttribute,d=d(a,"alt")||d(a,"title")||d(a,"src")):d="body"===d||"html"===d?["(hm-default-content-for-",d,")"].join(""):mt.f.nb(a);return String(d).substring(0,255)};(function(){(mt.f.Ja=function(){function a(){if(!a.V){a.V=u;for(var d=0,b=g.length;d<b;d++)g[d]()}}function b(){try{document.documentElement.doScroll("left")}catch(d){setTimeout(b,1);return}a()}var d=w,g=[],e;document.addEventListener?
e=function(){document.removeEventListener("DOMContentLoaded",e,w);a()}:document.attachEvent&&(e=function(){"complete"===document.readyState&&(document.detachEvent("onreadystatechange",e),a())});(function(){if(!d)if(d=u,"complete"===document.readyState)a.V=u;else if(document.addEventListener)document.addEventListener("DOMContentLoaded",e,w),window.addEventListener("load",a,w);else if(document.attachEvent){document.attachEvent("onreadystatechange",e);window.attachEvent("onload",a);var g=w;try{g=window.frameElement==
v}catch(p){}document.documentElement.doScroll&&g&&b()}})();return function(d){a.V?d():g.push(d)}}()).V=w})();return mt.f})();mt.event={};mt.event.d=function(b,a,f){b.attachEvent?b.attachEvent("on"+a,function(a){f.call(b,a)}):b.addEventListener&&b.addEventListener(a,f,w)};mt.event.preventDefault=function(b){b.preventDefault?b.preventDefault():b.returnValue=w};
(function(){var b=mt.event;mt.i={};mt.i.Da=/msie (\d+\.\d+)/i.test(navigator.userAgent);mt.i.wb=/msie (\d+\.\d+)/i.test(navigator.userAgent)?document.documentMode||+RegExp.$1:s;mt.i.cookieEnabled=navigator.cookieEnabled;mt.i.javaEnabled=navigator.javaEnabled();mt.i.language=navigator.language||navigator.browserLanguage||navigator.systemLanguage||navigator.userLanguage||"";mt.i.Db=(window.screen.width||0)+"x"+(window.screen.height||0);mt.i.colorDepth=window.screen.colorDepth||0;mt.i.T=function(){var a;
a=a||document;return parseInt(window.pageYOffset||a.documentElement.scrollTop||a.body&&a.body.scrollTop||0,10)};mt.i.M=function(){var a=document;return parseInt(window.innerHeight||a.documentElement.clientHeight||a.body&&a.body.clientHeight||0,10)};mt.i.orientation=0;(function(){function a(){var a=0;window.orientation!==s&&(a=window.orientation);screen&&(screen.orientation&&screen.orientation.angle!==s)&&(a=screen.orientation.angle);mt.i.orientation=a}a();b.d(window,"orientationchange",a)})();return mt.i})();
mt.r={};mt.r.parse=function(b){return(new Function("return ("+b+")"))()};
mt.r.stringify=function(){function b(a){/["\\\x00-\x1f]/.test(a)&&(a=a.replace(/["\\\x00-\x1f]/g,function(a){var d=f[a];if(d)return d;d=a.charCodeAt();return"\\u00"+Math.floor(d/16).toString(16)+(d%16).toString(16)}));return'"'+a+'"'}function a(a){return 10>a?"0"+a:a}var f={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};return function(d){switch(typeof d){case "undefined":return"undefined";case "number":return isFinite(d)?String(d):"null";case "string":return b(d);case "boolean":return String(d);
default:if(d===v)return"null";if(d instanceof Array){var g=["["],e=d.length,l,f,n;for(f=0;f<e;f++)switch(n=d[f],typeof n){case "undefined":case "function":case "unknown":break;default:l&&g.push(","),g.push(mt.r.stringify(n)),l=1}g.push("]");return g.join("")}if(d instanceof Date)return'"'+d.getFullYear()+"-"+a(d.getMonth()+1)+"-"+a(d.getDate())+"T"+a(d.getHours())+":"+a(d.getMinutes())+":"+a(d.getSeconds())+'"';l=["{"];f=mt.r.stringify;for(e in d)if(Object.prototype.hasOwnProperty.call(d,e))switch(n=
d[e],typeof n){case "undefined":case "unknown":case "function":break;default:g&&l.push(","),g=1,l.push(f(e)+":"+f(n))}l.push("}");return l.join("")}}}();mt.localStorage={};mt.localStorage.Y=function(){if(!mt.localStorage.l)try{mt.localStorage.l=document.createElement("input"),mt.localStorage.l.type="hidden",mt.localStorage.l.style.display="none",mt.localStorage.l.addBehavior("#default#userData"),document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)}catch(b){return w}return u};
mt.localStorage.set=function(b,a,f){var d=new Date;d.setTime(d.getTime()+f||31536E6);try{window.localStorage?(a=d.getTime()+"|"+a,window.localStorage.setItem(b,a)):mt.localStorage.Y()&&(mt.localStorage.l.expires=d.toUTCString(),mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.setAttribute(b,a),mt.localStorage.l.save(document.location.hostname))}catch(g){}};
mt.localStorage.get=function(b){if(window.localStorage){if(b=window.localStorage.getItem(b)){var a=b.indexOf("|"),f=b.substring(0,a)-0;if(f&&f>(new Date).getTime())return b.substring(a+1)}}else if(mt.localStorage.Y())try{return mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.getAttribute(b)}catch(d){}return v};
mt.localStorage.remove=function(b){if(window.localStorage)window.localStorage.removeItem(b);else if(mt.localStorage.Y())try{mt.localStorage.l.load(document.location.hostname),mt.localStorage.l.removeAttribute(b),mt.localStorage.l.save(document.location.hostname)}catch(a){}};mt.sessionStorage={};mt.sessionStorage.set=function(b,a){try{window.sessionStorage&&window.sessionStorage.setItem(b,a)}catch(f){}};
mt.sessionStorage.get=function(b){try{return window.sessionStorage?window.sessionStorage.getItem(b):v}catch(a){return v}};mt.sessionStorage.remove=function(b){try{window.sessionStorage&&window.sessionStorage.removeItem(b)}catch(a){}};mt.Ma={};mt.Ma.log=function(b,a){var f=new Image,d="mini_tangram_log_"+Math.floor(2147483648*Math.random()).toString(36);window[d]=f;f.onload=function(){f.onload=v;f=window[d]=v;a&&a(b)};f.src=b};mt.pa={};
mt.pa.ob=function(){var b="";if(navigator.plugins&&navigator.mimeTypes.length){var a=navigator.plugins["Shockwave Flash"];a&&a.description&&(b=a.description.replace(/^.*\s+(\S+)\s+\S+$/,"$1"))}else if(window.ActiveXObject)try{if(a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))(b=a.GetVariable("$version"))&&(b=b.replace(/^.*\s+(\d+),(\d+).*$/,"$1.$2"))}catch(f){}return b};
mt.pa.Tb=function(b,a,f,d,g){return'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="'+b+'" width="'+f+'" height="'+d+'"><param name="movie" value="'+a+'" /><param name="flashvars" value="'+(g||"")+'" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="'+b+'" width="'+f+'" height="'+d+'" src="'+a+'" flashvars="'+(g||"")+'" allowscriptaccess="always" /></object>'};mt.url={};
mt.url.o=function(b,a){var f=b.match(RegExp("(^|&|\\?|#)("+a+")=([^&#]*)(&|$|#)",""));return f?f[3]:v};mt.url.Wb=function(b){return(b=b.match(/^(https?:)\/\//))?b[1]:v};mt.url.hb=function(b){return(b=b.match(/^(https?:\/\/)?([^\/\?#]*)/))?b[2].replace(/.*@/,""):v};mt.url.L=function(b){return(b=mt.url.hb(b))?b.replace(/:\d+$/,""):b};mt.url.ha=function(b){return(b=b.match(/^(https?:\/\/)?[^\/]*(.*)/))?b[2].replace(/[\?#].*/,"").replace(/^$/,"/"):v};
(function(){function b(){for(var a=w,b=document.getElementsByTagName("script"),d=b.length,d=100<d?100:d,g=0;g<d;g++){var e=b[g].src;if(e&&0===e.indexOf("https://hm.baidu.com/h")){a=u;break}}return a}return h.cb=b})();var A=h.cb;
h.m={Xb:"http://tongji.baidu.com/hm-web/welcome/ico",Ia:"hm.baidu.com/hm.gif",Ta:/^(tongji|hmcdn).baidu.com$/,Oa:"tongji.baidu.com",tb:"hmmd",ub:"hmpl",Nb:"utm_medium",rb:"hmkw",Pb:"utm_term",pb:"hmci",Mb:"utm_content",vb:"hmsr",Ob:"utm_source",qb:"hmcu",Lb:"utm_campaign",I:0,F:Math.round(+new Date/1E3),protocol:"https:"===document.location.protocol?"https:":"http:",ma:A()||"https:"===document.location.protocol?"https:":"http:",Yb:0,Rb:6E5,zb:6E5,Zb:5E3,Sb:5,ba:1024,Qb:1,J:2147483647,Na:"hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn ct u tt hh".split(" "),
N:u,va:["a","input","button"],Va:{id:"data-hm-id",aa:"data-hm-class",sa:"data-hm-xpath",content:"data-hm-content",qa:"data-hm-tag",link:"data-hm-link"},ua:"data-hm-enabled",ta:"data-hm-disabled",Ab:"https://hmcdn.baidu.com/static/tongji/plugins/",Ha:["UrlChangeTracker"]};(function(){var b={B:{},d:function(a,b){this.B[a]=this.B[a]||[];this.B[a].push(b)},G:function(a,b){this.B[a]=this.B[a]||[];for(var d=this.B[a].length,g=0;g<d;g++)this.B[a][g](b)}};return h.w=b})();
(function(){function b(b,d){var g=document.createElement("script");g.charset="utf-8";a.e(d,"Function")&&(g.readyState?g.onreadystatechange=function(){if("loaded"===g.readyState||"complete"===g.readyState)g.onreadystatechange=v,d()}:g.onload=function(){d()});g.src=b;var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(g,e)}var a=mt.lang;return h.load=b})();
(function(){function b(){var b="";if(h.c.b.nv){b=encodeURIComponent(document.referrer);try{window.sessionStorage?f.set("Hm_from_"+c.id,b):a.set("Hm_from_"+c.id,b,864E5)}catch(g){}}else try{b=(window.sessionStorage?f.get("Hm_from_"+c.id):a.get("Hm_from_"+c.id))||""}catch(e){}return b}var a=mt.localStorage,f=mt.sessionStorage;return h.ya=b})();
(function(){var b=mt.lang,a=mt.f,f={Q:function(b,g){return function(e){var l=e.target||e.srcElement;if(l){var p=l.getAttribute(b.X);e=e.clientX+":"+e.clientY;if(p&&p===e)l.removeAttribute(b.X);else if(g&&0<g.length&&(l=a.jb(l))&&l.length)if(p=l.length,e=l[l.length-1],1E4>p*e.split(">").length)for(e=0;e<p;e++)f.La(b,l[e]);else f.La(b,e)}}},La:function(a,g){for(var e={},l=String(g).split(">").length,f=0;f<l;f++)e[g]="",g=g.substring(0,g.lastIndexOf(">"));a&&(b.e(a,"Object")&&a.wa)&&a.wa(e)},Bb:function(a,
b){return function(e){(e.target||e.srcElement).setAttribute(a.X,e.clientX+":"+e.clientY);a&&a.s&&(b?a.s(b):a.s("#"+encodeURIComponent(this.id),e.type))}}};return h.da=f})();
(function(){var b=mt.f,a=mt.r,f=mt.event,d=mt.lang,g=h.da,e={X:"HM_ce",Pa:function(){if(c.cetrk&&c.cetrk.length){f.d(document,"click",g.Q(e,c.cetrk));for(var d=0,p=c.cetrk.length;d<p;d++){var n;try{n=a.parse(decodeURIComponent(String(c.cetrk[d])))}catch(t){n={}}var m=n.p||"";-1===m.indexOf(">")&&(0===m.indexOf("#")&&(m=m.substring(1)),(m=b.ea(m))&&f.d(m,"click",g.Bb(e,n)))}}},wa:function(b){if(c.cetrk&&c.cetrk.length)for(var d=0,g=c.cetrk.length;d<g;d++){var f;try{f=a.parse(decodeURIComponent(String(c.cetrk[d])))}catch(m){f=
{}}b.hasOwnProperty(f.p)&&e.s(f)}},s:function(a){h.c.b.et=7;var g=a&&a.k||"",g=d.h(g),e=[];if(a&&a.a&&d.e(a.a,"Object"))for(var f in a.a)if(a.a.hasOwnProperty(f)){e.push(d.h(f));var m=b.fb(a.a[f]||""),m=m?b.za(m,w):"";e.push(d.h(m))}a="";e.length&&(a="*"+e.join("*"));h.c.b.ep="ce!_iden*"+g+a;h.c.j()}};h.w.d("pv-b",e.Pa);return e})();
(function(){var b=mt.lang,a=mt.f,f=mt.event,d=mt.i,g=h.m,e=h.w,l=+new Date,p=[],n={Q:function(){return function(d){if(h.c&&h.c.N&&c.aet&&c.aet.length){var e=d.target||d.srcElement;if(e){var k=h.c.va,r=a.getAttribute(e,g.ua)!=v?u:w;if(a.getAttribute(e,g.ta)==v)if(r)n.Z(n.ga(e,d));else{var f=a.S(e);if(b.H(k,"*")||b.H(k,f))n.Z(n.ga(e,d));else for(;e.parentNode!=v;){var r=e.parentNode,f=a.S(r),q="a"===f&&b.H(k,"a")?u:w,f="button"===f&&b.H(k,"button")?u:w,x=a.getAttribute(r,g.ua)!=v?u:w;if(a.getAttribute(r,
g.ta)==v&&(q||f||x)){n.Z(n.ga(r,d));break}e=e.parentNode}}}}}},ga:function(e,f){var k={},r=g.Va;k.id=a.getAttribute(e,r.id)||a.getAttribute(e,"id")||"";k.aa=a.getAttribute(e,r.aa)||a.getAttribute(e,"class")||"";k.sa=a.getAttribute(e,r.sa)||a.lb(e);k.content=a.getAttribute(e,r.content)||a.za(e,u);k.qa=a.getAttribute(e,r.qa)||a.S(e);k.link=a.getAttribute(e,r.link)||a.getAttribute(e,"href")||"";k.type=f.type||"click";r=b.Ea(e.offsetTop)?e.offsetTop:0;"click"===f.type?r=d.Da?f.clientY+Math.max(document.documentElement.scrollTop,
document.body.scrollTop):f.pageY:"touchend"===f.type&&(f.na&&b.e(f.na.changedTouches,"Array")&&f.na.changedTouches.length)&&(r=f.na.changedTouches[0].pageY);k.Kb=r;return k},Z:function(a){var d=b.h;a=[+new Date-(h.c.C!==s?h.c.C:l),d(a.id),d(a.aa),d(a.qa),d(a.sa),d(a.link),d(a.content),a.type,a.Kb].join("*");n.$(a);b.e(this.P(),"Function")&&this.P()()},$:function(a){a.length>g.ba||(encodeURIComponent(p.join("!")+a).length>g.ba&&(n.s(p.join("!")),p=[]),p.push(a))},s:function(a){h.c.b.et=5;h.c.b.ep=
a;h.c.j()},P:function(){return function(){p&&p.length&&(n.s(p.join("!")),p=[])}}};b.ka()&&""!==c.aet&&e.d("pv-b",function(){f.d(document,"click",n.Q());"ontouchend"in document&&f.d(window,"touchend",n.Q());f.d(window,"unload",n.P())});return n})();
(function(){var b=mt.event,a=mt.i,f=h.m,d=h.w,g=+new Date,e=[],l=v,p={$a:function(){return function(){h.c&&(h.c.N&&c.aet&&c.aet.length)&&(window.clearTimeout(l),l=window.setTimeout(function(){p.Ra(a.T()+a.M())},150))}},Ra:function(a){p.$([+new Date-(h.c.C!==s?h.c.C:g),a].join("*"))},$:function(a){if(encodeURIComponent(e.join("!")+a).length>f.ba||3<e.length)p.s(e.join("!")),e=[];e.push(a)},s:function(b){h.c.b.et=6;h.c.b.vh=a.M();h.c.b.ep=b;h.c.j()},P:function(){return function(){e&&e.length&&(p.s(e.join("!")),
e=[])}}};mt.lang.ka()&&""!==c.aet&&d.d("pv-b",function(){b.d(window,"scroll",p.$a());b.d(window,"unload",p.P())});return p})();
(function(){var b=mt.f,a=h.m,f=h.load,d=h.ya;h.w.d("pv-b",function(){var g=a.protocol+"//crs.baidu.com/";c.rec&&b.Ja(function(){for(var e=0,l=c.rp.length;e<l;e++){var p=c.rp[e][0],n=c.rp[e][1],t=b.ea("hm_t_"+p);if(n&&!(2==n&&!t||t&&""!==t.innerHTML))t="",t=Math.round(Math.random()*a.J),t=4==n?g+"hl.js?"+["siteId="+c.id,"planId="+p,"rnd="+t].join("&"):g+"t.js?"+["siteId="+c.id,"planId="+p,"from="+d(),"referer="+encodeURIComponent(document.referrer),"title="+encodeURIComponent(document.title),"rnd="+
t].join("&"),f(t)}})})})();(function(){var b=h.m,a=h.load,f=h.ya;h.w.d("pv-b",function(){if(c.trust&&c.vcard){var d="https://tag.baidu.com/vcard/v.js?"+["siteid="+c.vcard,"url="+encodeURIComponent(document.location.href),"source="+f(),"rnd="+Math.round(Math.random()*b.J),"hm=1"].join("&");a(d)}})})();
(function(){function b(){return function(){h.c.b.nv=0;h.c.b.st=4;h.c.b.et=3;h.c.b.ep=h.ca.ib()+","+h.ca.gb();h.c.j()}}function a(){clearTimeout(z);var b;q&&(b="visible"==document[q]);x&&(b=!document[x]);p="undefined"==typeof b?u:b;if((!l||!n)&&p&&t)y=u,k=+new Date;else if(l&&n&&(!p||!t))y=w,r+=+new Date-k;l=p;n=t;z=setTimeout(a,100)}function f(a){var k=document,b="";if(a in k)b=a;else for(var d=["webkit","ms","moz","o"],q=0;q<d.length;q++){var x=d[q]+a.charAt(0).toUpperCase()+a.slice(1);if(x in k){b=
x;break}}return b}function d(k){if(!("focus"==k.type||"blur"==k.type)||!(k.target&&k.target!=window))t="focus"==k.type||"focusin"==k.type?u:w,a()}var g=mt.event,e=h.w,l=u,p=u,n=u,t=u,m=+new Date,k=m,r=0,y=u,q=f("visibilityState"),x=f("hidden"),z;a();(function(){var k=q.replace(/[vV]isibilityState/,"visibilitychange");g.d(document,k,a);g.d(window,"pageshow",a);g.d(window,"pagehide",a);"object"==typeof document.onfocusin?(g.d(document,"focusin",d),g.d(document,"focusout",d)):(g.d(window,"focus",d),
g.d(window,"blur",d))})();h.ca={ib:function(){return+new Date-m},gb:function(){return y?+new Date-k+r:r}};e.d("pv-b",function(){g.d(window,"unload",b())});e.d("duration-send",b());e.d("duration-done",function(){k=m=+new Date;r=0});return h.ca})();
(function(){var b=mt.lang,a=h.m,f=h.load,d={xb:function(d){if((window._dxt===s||b.e(window._dxt,"Array"))&&"undefined"!==typeof h.c){var e=h.c.R();f([a.protocol,"//datax.baidu.com/x.js?si=",c.id,"&dm=",encodeURIComponent(e)].join(""),d)}},Jb:function(a){if(b.e(a,"String")||b.e(a,"Number"))window._dxt=window._dxt||[],window._dxt.push(["_setUserId",a])}};return h.Ya=d})();
(function(){function b(a,b,d,q){if(!(a===s||b===s||q===s)){if(""===a)return[b,d,q].join("*");a=String(a).split("!");for(var x,e=w,f=0;f<a.length;f++)if(x=a[f].split("*"),String(b)===x[0]){x[1]=d;x[2]=q;a[f]=x.join("*");e=u;break}e||a.push([b,d,q].join("*"));return a.join("!")}}function a(k){for(var b in k)if({}.hasOwnProperty.call(k,b)){var e=k[b];d.e(e,"Object")||d.e(e,"Array")?a(e):k[b]=String(e)}}var f=mt.url,d=mt.lang,g=mt.r,e=mt.i,l=h.m,p=h.w,n=h.Ya,t=h.load,m={O:[],W:0,Fa:w,A:{ra:"",page:""},
init:function(){m.g=0;p.d("pv-b",function(){m.Za();m.ab()});p.d("pv-d",function(){m.bb();m.A.page=""});p.d("stag-b",function(){h.c.b.api=m.g||m.W?m.g+"_"+m.W:"";h.c.b.ct=[decodeURIComponent(h.c.getData("Hm_ct_"+c.id)||""),m.A.ra,m.A.page].join("!")});p.d("stag-d",function(){h.c.b.api=0;m.g=0;m.W=0})},Za:function(){var a=window._hmt||[];if(!a||d.e(a,"Array"))window._hmt={id:c.id,cmd:{},push:function(){for(var a=window._hmt,k=0;k<arguments.length;k++){var b=arguments[k];d.e(b,"Array")&&(a.cmd[a.id].push(b),
"_setAccount"===b[0]&&(1<b.length&&/^[0-9a-f]{32}$/.test(b[1]))&&(b=b[1],a.id=b,a.cmd[b]=a.cmd[b]||[]))}}},window._hmt.cmd[c.id]=[],window._hmt.push.apply(window._hmt,a)},ab:function(){var a=window._hmt;if(a&&a.cmd&&a.cmd[c.id])for(var b=a.cmd[c.id],d=/^_track(Event|MobConv|Order|RTEvent)$/,q=0,e=b.length;q<e;q++){var f=b[q];d.test(f[0])?m.O.push(f):m.oa(f)}a.cmd[c.id]={push:m.oa}},bb:function(){if(0<m.O.length)for(var a=0,b=m.O.length;a<b;a++)m.oa(m.O[a]);m.O=v},oa:function(a){var b=a[0];if(m.hasOwnProperty(b)&&
d.e(m[b],"Function"))m[b](a)},_setAccount:function(a){1<a.length&&/^[0-9a-f]{32}$/.test(a[1])&&(m.g|=1)},_setAutoPageview:function(a){if(1<a.length&&(a=a[1],w===a||u===a))m.g|=2,h.c.Ba=a},_trackPageview:function(a){if(1<a.length&&a[1].charAt&&"/"===a[1].charAt(0)){m.g|=4;h.c.b.sn=h.c.Aa();h.c.b.et=0;h.c.b.ep="";h.c.b.vl=e.T()+e.M();h.c.b.kb=0;h.c.ia?(h.c.b.nv=0,h.c.b.st=4):h.c.ia=u;var b=h.c.b.u,d=h.c.b.su;h.c.b.u=l.protocol+"//"+document.location.host+a[1];m.Fa||(h.c.b.su=document.location.href);
h.c.j();h.c.b.u=b;h.c.b.su=d;h.c.C=+new Date}},_trackEvent:function(a){2<a.length&&(m.g|=8,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=4,h.c.b.ep=d.h(a[1])+"*"+d.h(a[2])+(a[3]?"*"+d.h(a[3]):"")+(a[4]?"*"+d.h(a[4]):""),h.c.j())},_setCustomVar:function(a){if(!(4>a.length)){var b=a[1],e=a[4]||3;if(0<b&&6>b&&0<e&&4>e){m.W++;for(var q=(h.c.b.cv||"*").split("!"),x=q.length;x<b-1;x++)q.push("*");q[b-1]=e+"*"+d.h(a[2])+"*"+d.h(a[3]);h.c.b.cv=q.join("!");a=h.c.b.cv.replace(/[^1](\*[^!]*){2}/g,"*").replace(/((^|!)\*)+$/g,
"");""!==a?h.c.setData("Hm_cv_"+c.id,encodeURIComponent(a),c.age):h.c.Cb("Hm_cv_"+c.id)}}},_setUserTag:function(a){if(!(3>a.length)){var e=d.h(a[1]);a=d.h(a[2]);if(e!==s&&a!==s){var f=decodeURIComponent(h.c.getData("Hm_ct_"+c.id)||""),f=b(f,e,1,a);h.c.setData("Hm_ct_"+c.id,encodeURIComponent(f),c.age)}}},_setVisitTag:function(a){if(!(3>a.length)){var e=d.h(a[1]);a=d.h(a[2]);if(e!==s&&a!==s){var f=m.A.ra,f=b(f,e,2,a);m.A.ra=f}}},_setPageTag:function(a){if(!(3>a.length)){var e=d.h(a[1]);a=d.h(a[2]);
if(e!==s&&a!==s){var f=m.A.page,f=b(f,e,3,a);m.A.page=f}}},_setReferrerOverride:function(a){1<a.length&&(h.c.b.su=a[1].charAt&&"/"===a[1].charAt(0)?l.protocol+"//"+window.location.host+a[1]:a[1],m.Fa=u)},_trackOrder:function(b){b=b[1];d.e(b,"Object")&&(a(b),m.g|=16,h.c.b.nv=0,h.c.b.st=4,h.c.b.et=94,h.c.b.ep=g.stringify(b),h.c.j())},_trackMobConv:function(a){if(a={webim:1,tel:2,map:3,sms:4,callback:5,share:6}[a[1]])m.g|=32,h.c.b.et=93,h.c.b.ep=a,h.c.j()},_trackRTPageview:function(b){b=b[1];d.e(b,"Object")&&
(a(b),b=g.stringify(b),512>=encodeURIComponent(b).length&&(m.g|=64,h.c.b.rt=b))},_trackRTEvent:function(b){b=b[1];if(d.e(b,"Object")){a(b);b=encodeURIComponent(g.stringify(b));var e=function(a){var b=h.c.b.rt;m.g|=128;h.c.b.et=90;h.c.b.rt=a;h.c.j();h.c.b.rt=b},f=b.length;if(900>=f)e.call(this,b);else for(var f=Math.ceil(f/900),q="block|"+Math.round(Math.random()*l.J).toString(16)+"|"+f+"|",x=[],z=0;z<f;z++)x.push(z),x.push(b.substring(900*z,900*z+900)),e.call(this,q+x.join("|")),x=[]}},_setUserId:function(a){a=
a[1];n.xb();n.Jb(a)},_setAutoTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.Ca=a},_setAutoEventTracking:function(a){if(1<a.length&&(a=a[1],w===a||u===a))h.c.N=a},_trackPageDuration:function(a){1<a.length?(a=a[1],2===String(a).split(",").length&&(h.c.b.et=3,h.c.b.ep=a,h.c.j())):p.G("duration-send");p.G("duration-done")},_require:function(a){1<a.length&&(a=a[1],l.Ta.test(f.L(a))&&t(a))},_providePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1];a=a[2];if(d.H(l.Ha,e)&&d.e(a,"Function")&&
(b.plugins=b.plugins||{},b.D=b.D||{},b.plugins[e]=a,b.z=b.z||[],a=b.z.slice(),e&&a.length&&a[0][1]===e))for(var q=0,f=a.length;q<f;q++){var g=a[q][2]||{};if(b.plugins[e]&&!b.D[e])b.D[e]=new b.plugins[e](g),b.z.shift();else break}}},_requirePlugin:function(a){if(1<a.length){var b=window._hmt,e=a[1],q=a[2]||{};if(d.H(l.Ha,e))if(b.plugins=b.plugins||{},b.D=b.D||{},b.plugins[e]&&!b.D[e])b.D[e]=new b.plugins[e](q);else{b.z=b.z||[];for(var q=0,f=b.z.length;q<f;q++)if(b.z[q][1]===e)return;b.z.push(a);m._require([v,
l.Ab+e+".js"])}}},_trackCustomEvent:function(a){if(1<a.length){var b=d.h(a[1]),e="";a=a[2];if(d.e(a,"Object")){var e=[],q;for(q in a)a.hasOwnProperty(q)&&(e.push(d.h(q)),e.push(d.h(a[q])));e="*"+e.join("*")}h.c.b.et=7;h.c.b.ep="ce!_iden*"+b+e;h.c.j()}}};m.init();h.Ua=m;return h.Ua})();
(function(){function b(){"undefined"===typeof window["_bdhm_loaded_"+c.id]&&(window["_bdhm_loaded_"+c.id]=u,this.b={},this.Ca=this.Ba=u,this.N=k.N,this.va=g.ka()&&0<c.aet.length?c.aet.split(","):"",this.ia=w,this.init())}var a=mt.url,f=mt.Ma,d=mt.pa,g=mt.lang,e=mt.cookie,l=mt.i,p=mt.localStorage,n=mt.sessionStorage,t=mt.r,m=mt.event,k=h.m,r=h.load,y=h.w;b.prototype={la:function(a,b){a="."+a.replace(/:\d+/,"");b="."+b.replace(/:\d+/,"");var d=a.indexOf(b);return-1<d&&d+b.length===a.length},Ga:function(a,
b){a=a.replace(/^https?:\/\//,"");return 0===a.indexOf(b)},U:function(b){for(var d=0;d<c.dm.length;d++)if(-1<c.dm[d].indexOf("/")){if(this.Ga(b,c.dm[d]))return u}else{var e=a.L(b);if(e&&this.la(e,c.dm[d]))return u}return w},R:function(){for(var a=document.location.hostname,b=0,d=c.dm.length;b<d;b++)if(this.la(a,c.dm[b]))return c.dm[b].replace(/(:\d+)?[/?#].*/,"");return a},fa:function(){for(var a=0,b=c.dm.length;a<b;a++){var d=c.dm[a];if(-1<d.indexOf("/")&&this.Ga(document.location.href,d))return d.replace(/^[^/]+(\/.*)/,
"$1")+"/"}return"/"},mb:function(){if(!document.referrer)return k.F-k.I>c.vdur?1:4;var b=w;this.U(document.referrer)&&this.U(document.location.href)?b=u:(b=a.L(document.referrer),b=this.la(b||"",document.location.hostname));return b?k.F-k.I>c.vdur?1:4:3},getData:function(a){try{return e.get(a)||n.get(a)||p.get(a)}catch(b){}},setData:function(a,b,d){try{e.set(a,b,{domain:this.R(),path:this.fa(),K:d}),d?p.set(a,b,d):n.set(a,b)}catch(f){}},Cb:function(a){try{e.set(a,"",{domain:this.R(),path:this.fa(),
K:-1}),n.remove(a),p.remove(a)}catch(b){}},Hb:function(){var a,b,d,f,g;k.I=this.getData("Hm_lpvt_"+c.id)||0;13===k.I.length&&(k.I=Math.round(k.I/1E3));b=this.mb();a=4!==b?1:0;if(d=this.getData("Hm_lvt_"+c.id)){f=d.split(",");for(g=f.length-1;0<=g;g--)13===f[g].length&&(f[g]=""+Math.round(f[g]/1E3));for(;2592E3<k.F-f[0];)f.shift();g=4>f.length?2:3;for(1===a&&f.push(k.F);4<f.length;)f.shift();d=f.join(",");f=f[f.length-1]}else d=k.F,f="",g=1;this.setData("Hm_lvt_"+c.id,d,c.age);this.setData("Hm_lpvt_"+
c.id,k.F);d=e.yb(this.R(),this.fa());if(0===c.nv&&this.U(document.location.href)&&(""===document.referrer||this.U(document.referrer)))a=0,b=4;this.b.nv=a;this.b.st=b;this.b.cc=d;this.b.lt=f;this.b.lv=g},Gb:function(){for(var a=[],b=this.b.et,d=+new Date,e=0,f=k.Na.length;e<f;e++){var g=k.Na[e],l=this.b[g];"undefined"!==typeof l&&""!==l&&("tt"!==g||"tt"===g&&0===b)&&(("ct"!==g||"ct"===g&&0===b)&&("kb"!==g||"kb"===g&&3===b))&&a.push(g+"="+encodeURIComponent(l))}switch(b){case 0:this.b.rt&&a.push("rt="+
encodeURIComponent(this.b.rt));break;case 5:a.push("_lpt="+this.C);a.push("_ct="+d);break;case 6:a.push("_lpt="+this.C);a.push("_ct="+d);break;case 90:this.b.rt&&a.push("rt="+this.b.rt)}return a.join("&")},Ib:function(){this.Hb();this.b.si=c.id;this.b.sn=this.Aa();this.b.su=document.referrer;this.b.hh=window.location.hash;this.b.ds=l.Db;this.b.cl=l.colorDepth+"-bit";this.b.ln=String(l.language).toLowerCase();this.b.ja=l.javaEnabled?1:0;this.b.ck=l.cookieEnabled?1:0;this.b.lo="number"===typeof _bdhm_top?
1:0;this.b.fl=d.ob();this.b.v="1.2.51";this.b.cv=decodeURIComponent(this.getData("Hm_cv_"+c.id)||"");this.b.tt=document.title||"";this.b.vl=l.T()+l.M();var b=document.location.href;this.b.cm=a.o(b,k.tb)||"";this.b.cp=a.o(b,k.ub)||a.o(b,k.Nb)||"";this.b.cw=a.o(b,k.rb)||a.o(b,k.Pb)||"";this.b.ci=a.o(b,k.pb)||a.o(b,k.Mb)||"";this.b.cf=a.o(b,k.vb)||a.o(b,k.Ob)||"";this.b.cu=a.o(b,k.qb)||a.o(b,k.Lb)||""},init:function(){try{this.Ib(),0===this.b.nv?this.Fb():this.xa(),h.c=this,this.Xa(),this.Wa(),y.G("pv-b"),
this.Eb()}catch(a){var b=[];b.push("si="+c.id);b.push("n="+encodeURIComponent(a.name));b.push("m="+encodeURIComponent(a.message));b.push("r="+encodeURIComponent(document.referrer));f.log(k.ma+"//"+k.Ia+"?"+b.join("&"))}},Eb:function(){function a(){y.G("pv-d")}this.Ba?(this.ia=u,this.b.et=0,this.b.ep="",this.b.vl=l.T()+l.M(),this.j(a)):a();this.C=+new Date},j:function(a){if(this.Ca){var b=this;b.b.rnd=Math.round(Math.random()*k.J);y.G("stag-b");var d=k.ma+"//"+k.Ia+"?"+b.Gb();y.G("stag-d");b.Sa(d);
f.log(d,function(d){b.Ka(d);g.e(a,"Function")&&a.call(b)})}},Xa:function(){var b=document.location.hash.substring(1),d=RegExp(c.id),e=a.L(document.referrer)===k.Oa?1:0,f=a.o(b,"jn"),g=/^heatlink$|^select$|^pageclick$/.test(f);b&&(d.test(b)&&e&&g)&&(this.b.rnd=Math.round(Math.random()*k.J),b=document.createElement("script"),b.setAttribute("type","text/javascript"),b.setAttribute("charset","utf-8"),b.setAttribute("src",k.protocol+"//"+c.js+f+".js?"+this.b.rnd),f=document.getElementsByTagName("script")[0],
f.parentNode.insertBefore(b,f))},Wa:function(){if(window.postMessage&&window.self!==window.parent){var b=this;m.d(window,"message",function(d){if(a.L(d.origin)===k.Oa){var e=d.data||{};d=e.sd||"";var e=e.jn||"",f=/^customevent$/.test(e);RegExp(c.id).test(d)&&f&&(b.b.rnd=Math.round(Math.random()*k.J),r(k.protocol+"//"+c.js+e+".js?"+b.b.rnd))}});window.parent.postMessage({id:c.id,url:document.location.href,status:"__Messenger__hmLoaded"},"*")}},Sa:function(a){var b;try{b=t.parse(n.get("Hm_unsent_"+
c.id)||"[]")}catch(d){b=[]}var e=this.b.u?"":"&u="+encodeURIComponent(document.location.href);b.push(a.replace(/^https?:\/\//,"")+e);n.set("Hm_unsent_"+c.id,t.stringify(b))},Ka:function(a){var b;try{b=t.parse(n.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length){a=a.replace(/^https?:\/\//,"");for(var e=0;e<b.length;e++)if(a.replace(/&u=[^&]*/,"")===b[e].replace(/&u=[^&]*/,"")){b.splice(e,1);break}b.length?n.set("Hm_unsent_"+c.id,t.stringify(b)):this.xa()}},xa:function(){n.remove("Hm_unsent_"+
c.id)},Fb:function(){var a=this,b;try{b=t.parse(n.get("Hm_unsent_"+c.id)||"[]")}catch(d){b=[]}if(b.length)for(var e=function(b){f.log(k.ma+"//"+b,function(b){a.Ka(b)})},g=0;g<b.length;g++)e(b[g])},Aa:function(){return Math.round(+new Date/1E3)%65535}};return new b})();var B=h.m,C=h.load;if(c.apps){var D=[B.protocol,"//ers.baidu.com/app/s.js?"];D.push(c.apps);C(D.join(""))}
(function(){var b=mt.event,a=mt.lang,f=h.m;if(c.kbtrk&&"undefined"!==typeof h.c){h.c.b.kb=a.Ea(h.c.b.kb)?h.c.b.kb:0;var d=function(){h.c.b.et=85;h.c.b.ep=h.c.b.kb;h.c.j()};b.d(document,"keyup",function(){h.c.b.kb++});b.d(window,"unload",function(){d()});setInterval(d,f.zb)}})();var E=h.m,F=h.load;c.pt&&F([E.protocol,"//ada.baidu.com/phone-tracker/insert_bdtj?sid=",c.pt].join(""));var G=h.m,H=h.load;c.lxb&&H([G.protocol,"//lxbjs.baidu.com/lxb.js?sid=",c.lxb].join(""));var I=h.load,J=h.m.protocol;
if(c.qiao){for(var K=[J+"//goutong.baidu.com/site/"],L=c.id,M=5381,N=L.length,O=0;O<N;O++)M=(33*M+Number(L.charCodeAt(O)))%4294967296;2147483648<M&&(M-=2147483648);K.push(M%1E3+"/");K.push(c.id+"/b.js");K.push("?siteId="+c.qiao);I(K.join(""))}
(function(){var b=mt.i,a=mt.lang,f=mt.event,d=mt.r;if("undefined"!==typeof h.c&&(c.med||(!b.Da||7<b.wb)&&c.cvcc)){var g,e,l,p,n=function(a){if(a.item){for(var b=a.length,d=Array(b);b--;)d[b]=a[b];return d}return[].slice.call(a)},t=function(a,b){for(var d in a)if(a.hasOwnProperty(d)&&b.call(a,d,a[d])===w)return w},m=function(b,e){var f={};f.n=g;f.t="clk";f.v=b;if(e){var k=e.getAttribute("href"),m=e.getAttribute("onclick")?""+e.getAttribute("onclick"):v,n=e.getAttribute("id")||"";l.test(k)?(f.sn="mediate",
f.snv=k):a.e(m,"String")&&l.test(m)&&(f.sn="wrap",f.snv=m);f.id=n}h.c.b.et=86;h.c.b.ep=d.stringify(f);h.c.j();for(f=+new Date;400>=+new Date-f;);};if(c.med)e="/zoosnet",g="swt",l=/swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i,p={click:function(){for(var a=[],b=n(document.getElementsByTagName("a")),b=[].concat.apply(b,n(document.getElementsByTagName("area"))),b=[].concat.apply(b,n(document.getElementsByTagName("img"))),d,e,f=0,g=b.length;f<g;f++)d=b[f],e=d.getAttribute("onclick"),
d=d.getAttribute("href"),(l.test(e)||l.test(d))&&a.push(b[f]);return a}};else if(c.cvcc){e="/other-comm";g="other";l=c.cvcc.q||s;var k=c.cvcc.id||s;p={click:function(){for(var a=[],b=n(document.getElementsByTagName("a")),b=[].concat.apply(b,n(document.getElementsByTagName("area"))),b=[].concat.apply(b,n(document.getElementsByTagName("img"))),d,e,f,g=0,m=b.length;g<m;g++)d=b[g],l!==s?(e=d.getAttribute("onclick"),f=d.getAttribute("href"),k?(d=d.getAttribute("id"),(l.test(e)||l.test(f)||k.test(d))&&
a.push(b[g])):(l.test(e)||l.test(f))&&a.push(b[g])):k!==s&&(d=d.getAttribute("id"),k.test(d)&&a.push(b[g]));return a}}}if("undefined"!==typeof p&&"undefined"!==typeof l){var r;e+=/\/$/.test(e)?"":"/";var y=function(b,d){if(r===d)return m(e+b,d),w;if(a.e(d,"Array")||a.e(d,"NodeList"))for(var f=0,g=d.length;f<g;f++)if(r===d[f])return m(e+b+"/"+(f+1),d[f]),w};f.d(document,"mousedown",function(b){b=b||window.event;r=b.target||b.srcElement;var d={};for(t(p,function(b,e){d[b]=a.e(e,"Function")?e():document.getElementById(e)});r&&
r!==document&&t(d,y)!==w;)r=r.parentNode})}}})();(function(){var b=mt.f,a=mt.lang,f=mt.event,d=mt.r;if("undefined"!==typeof h.c&&a.e(c.cvcf,"Array")&&0<c.cvcf.length){var g={Qa:function(){for(var a=c.cvcf.length,d,p=0;p<a;p++)(d=b.ea(decodeURIComponent(c.cvcf[p])))&&f.d(d,"click",g.da())},da:function(){return function(){h.c.b.et=86;var a={n:"form",t:"clk"};a.id=this.id;h.c.b.ep=d.stringify(a);h.c.j()}}};b.Ja(function(){g.Qa()})}})();
(function(){var b=mt.event,a=mt.r;if(c.med&&"undefined"!==typeof h.c){var f=+new Date,d={n:"anti",sb:0,kb:0,clk:0},g=function(){h.c.b.et=86;h.c.b.ep=a.stringify(d);h.c.j()};b.d(document,"click",function(){d.clk++});b.d(document,"keyup",function(){d.kb=1});b.d(window,"scroll",function(){d.sb++});b.d(window,"unload",function(){d.t=+new Date-f;g()});b.d(window,"load",function(){setTimeout(g,5E3)})}})();c.spa!==s&&"1"===String(c.spa)&&(window._hmt=window._hmt||[],window._hmt.push(["_requirePlugin","UrlChangeTracker"]));})();
