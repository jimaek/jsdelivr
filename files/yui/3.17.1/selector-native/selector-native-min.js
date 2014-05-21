/*
YUI 3.17.1 (build 0eb5a52)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("selector-native",function(e,t){(function(e){e.namespace("Selector");var t="compareDocumentPosition",n="ownerDocument",r={_types:{esc:{token:"\ue000",re:/\\[:\[\]\(\)#\.\'\>+~"]/gi},attr:{token:"\ue001",re:/(\[[^\]]*\])/g},pseudo:{token:"\ue002",re:/(\([^\)]*\))/g}},useNative:!0,_escapeId:function(e){return e&&(e=e.replace(/([:\[\]\(\)#\.'<>+~"])/g,"\\$1")),e},_compare:"sourceIndex"in e.config.doc.documentElement?function(e,t){var n=e.sourceIndex,r=t.sourceIndex;return n===r?0:n>r?1:-1}:e.config.doc.documentElement[t]?function(e,n){return e[t](n)&4?-1:1}:function(e,t){var r,i,s;return e&&t&&(r=e[n].createRange(),r.setStart(e,0),i=t[n].createRange(),i.setStart(t,0),s=r.compareBoundaryPoints(1,i)),s},_sort:function(t){return t&&(t=e.Array(t,0,!0),t.sort&&t.sort(r._compare)),t},_deDupe:function(e){var t=[],n,r;for(n=0;r=e[n++];)r._found||(t[t.length]=r,r._found=!0);for(n=0;r=t[n++];)r._found=null,r.removeAttribute("_found");return t},query:function(t,n,i,s){n=n||e.config.doc;var o=[],u=e.Selector.useNative&&e.config.doc.querySelector&&!s,a=[[t,n]],f,l,c,h=u?e.Selector._nativeQuery:e.Selector._bruteQuery;if(t&&h){!s&&(!u||n.tagName)&&(a=r._splitQueries(t,n));for(c=0;f=a[c++];)l=h(f[0],f[1],i),i||(l=e.Array(l,0,!0)),l&&(o=o.concat(l));a.length>1&&(o=r._sort(r._deDupe(o)))}return i?o[0]||null:o},_replaceSelector:function(t){var n=e.Selector._parse("esc",t),i,s;return t=e.Selector._replace("esc",t),s=e.Selector._parse("pseudo",t),t=r._replace("pseudo",t),i=e.Selector._parse("attr",t),t=e.Selector._replace("attr",t),{esc:n,attrs:i,pseudos:s,selector:t}},_restoreSelector:function(t){var n=t.selector;return n=e.Selector._restore("attr",n,t.attrs),n=e.Selector._restore("pseudo",n,t.pseudos),n=e.Selector._restore("esc",n,t.esc),n},_replaceCommas:function(t){var n=e.Selector._replaceSelector(t),t=n.selector;return t&&(t=t.replace(/,/g,"\ue007"),n.selector=t,t=e.Selector._restoreSelector(n)),t},_splitQueries:function(t,n){t.indexOf(",")>-1&&(t=e.Selector._replaceCommas(t));var r=t.split("\ue007"),i=[],s="",o,u,a;if(n){n.nodeType===1&&(o=e.Selector._escapeId(e.DOM.getId(n)),o||(o=e.guid(),e.DOM.setId(n,o)),s='[id="'+o+'"] ');for(u=0,a=r.length;u<a;++u)t=s+r[u],i.push([t,n])}return i},_nativeQuery:function(t,n,r){if((e.UA.webkit||e.UA.opera)&&t.indexOf(":checked")>-1&&e.Selector.pseudos&&e.Selector.pseudos.checked)return e.Selector.query(t,n,r,!0);try{return n["querySelector"+(r?"":"All")](t)}catch(i){return e.Selector.query(t,n,r,!0)}},filter:function(t,n){var r=[],i,s;if(t&&n)for(i=0;s=t[i++];)e.Selector.test(s,n)&&(r[r.length]=s);return r},test:function(t,r,i){var s=!1,o=!1,u,a,f,l,c,h,p,d,v;if(t&&t.tagName)if(typeof r=="function")s=r.call(t,t);else{u=r.split(","),!i&&!e.DOM.inDoc(t)&&(a=t.parentNode,a?i=a:(c=t[n].createDocumentFragment(),c.appendChild(t),i=c,o=!0)),i=i||t[n],h=e.Selector._escapeId(e.DOM.getId(t)),h||(h=e.guid(),e.DOM.setId(t,h));for(p=0;v=u[p++];){v+='[id="'+h+'"]',l=e.Selector.query(v,i);for(d=0;f=l[d++];)if(f===t){s=!0;break}if(s)break}o&&c.removeChild(t)}return s},ancestor:function(t,n,r){return e.DOM.ancestor(t,function(t){return e.Selector.test(t,n)},r)},_parse:function(t,n){return n.match(e.Selector._types[t].re)},_replace:function(t,n){var r=e.Selector._types[t];return n.replace(r.re,r.token)},_restore:function(t,n,r){if(r){var i=e.Selector._types[t].token,s,o;for(s=0,o=r.length;s<o;++s)n=n.replace(i,r[s])}return n}};e.mix(e.Selector,r,!0)})(e)},"3.17.1",{requires:["dom-base"]});
