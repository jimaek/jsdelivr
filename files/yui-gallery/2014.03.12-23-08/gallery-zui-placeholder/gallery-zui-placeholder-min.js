YUI.add("gallery-zui-placeholder",function(e,t){var n="placeholder"in document.createElement("input"),r="data-phok",i="zui-phblur",s,o=function(){},u={},a=function(e){e.currentTarget.removeClass(i),e.currentTarget.get("value")===e.currentTarget.getAttribute("placeholder")&&e.currentTarget.set("value","")},f=function(e){var t=e.currentTarget.get("value"),n=e.currentTarget.getAttribute("placeholder");if(n==="")return;t===""&&e.currentTarget.set("value",n),(t===n||t==="")&&e.currentTarget.addClass(i)},l=function(e,t){if(e.getAttribute(r)==="1")return t&&e.setAttribute(r,""),!0;e.setAttribute(r,"1")},c=function(e){e.compareTo(document.activeElement)?a({currentTarget:e}):f({currentTarget:e}),s+=1},h=function(e){if(l(e))return;if(!e.getAttribute("placeholder"))return;e.on("focus",a),e.on("blur",f),c(e)},p=function(e){if(!l(e,1))return;if(!e.getAttribute("placeholder"))return;e.detach("focus",a),e.detach("blur",f),a({currentTarget:e}),s+=1};e.namespace("zui").placeholder={isNative:n,txtInstalled:r,clsBlur:i,install:n?o:function(t){var n=t&&t.each?t:e.all(t||"input, textarea");return s=0,n?(n.each(h),[n.size(),s]):[0,0]},uninstall:n?o:function(t){var n=t&&t.each?t:e.all(t||"input, textarea");return s=0,n?(n.each(p),[n.size(),s]):[0,0]},installDelegate:n?o:function(t,n){var r=t?e.one(t):e.one("body"),i=n||"input, textarea";return s=0,r?r.delegate?l(r)?[1,0]:(u[r.get("id")]=[r.delegate("focus",a,i),r.delegate("blur",a,i)],r.all(i).each(c),[1,s]):[-1,-1]:[0,0]},uninstallDelegate:n?o:function(t,n){var r=t?e.one(t):e.one("body"),i=r?r.get("id"):0,s=n||"input, textarea",o=0;return r?r.delegate?l(r,1)?u[i]?(r.detach(u[i][0]),r.detach(u[i][1]),delete u[i],r.all(s).each(function(e){o+=1,a({currentTarget:e})}),[1,o]):[1,-1]:[1,0]:[-1,-1]:[0,0]}}},"gallery-2013.02.07-15-27",{requires:["node-base","event-focus"],optional:["node-event-delegate"]});
