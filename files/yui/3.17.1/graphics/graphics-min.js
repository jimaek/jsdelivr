/*
YUI 3.17.1 (build 0eb5a52)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("graphics",function(e,t){var n="setter",r=e.Plugin.Host,i="value",s="valueFn",o="readOnly",u=e.Lang,a="string",f="writeOnce",l,c;c=function(){var t=this;t._ATTR_E_FACADE={},e.EventTarget.call(this,{emitFacade:!0}),t._state={},t.prototype=e.mix(c.prototype,t.prototype)},c.prototype={addAttrs:function(e){var t=this,r=this.constructor.ATTRS,a,l,c,h=t._state;for(l in r)r.hasOwnProperty(l)&&(a=r[l],a.hasOwnProperty(i)?h[l]=a.value:a.hasOwnProperty(s)&&(c=a.valueFn,u.isString(c)?h[l]=t[c].apply(t):h[l]=c.apply(t)));t._state=h;for(l in r)if(r.hasOwnProperty(l)){a=r[l];if(a.hasOwnProperty(o)&&a.readOnly)continue;a.hasOwnProperty(f)&&a.writeOnce&&(a.readOnly=!0),e&&e.hasOwnProperty(l)&&(a.hasOwnProperty(n)?t._state[l]=a.setter.apply(t,[e[l]]):t._state[l]=e[l])}},get:function(e){var t=this,n,r=t.constructor.ATTRS;if(r&&r[e])return n=r[e].getter,n?typeof n===a?t[n].apply(t):r[e].getter.apply(t):t._state[e];return null},set:function(){var e=arguments[0],t;if(u.isObject(e))for(t in e)e.hasOwnProperty(t)&&this._set(t,e[t]);else this._set.apply(this,arguments)},_set:function(e,t){var n=this,r,i,s=n.constructor.ATTRS;s&&s.hasOwnProperty(e)&&(r=s[e].setter,r&&(i=[t],typeof r===a?t=n[r].apply(n,i):t=s[e].setter.apply(n,i)),n._state[e]=t)}},e.mix(c,e.EventTarget,!1,null,1),e.AttributeLite=c,l=function(t){var n=this,r=e.Plugin&&e.Plugin.Host;n._initPlugins&&r&&r.call(n),n.name=n.constructor.NAME,n._eventPrefix=n.constructor.EVENT_PREFIX||n.constructor.NAME,c.call(n),n.addAttrs(t),n.init.apply(this,arguments),n._initPlugins&&n._initPlugins(t),n.initialized=!0},l.NAME="baseGraphic",l.prototype={init:function(){this.publish("init",{fireOnce:!0}),this.initializer.apply(this,arguments),this.fire("init",{cfg:arguments[0]})},_camelCaseConcat:function(e,t){return e+t.charAt(0).toUpperCase()+t.slice(1)}},e.mix(l,e.AttributeLite,!1,null,1),e.mix(l,r,!1,null,1),l.prototype.constructor=l,l.plug=r.plug,l.unplug=r.unplug,e.GraphicBase=l},"3.17.1",{requires:["node","event-custom","pluginhost","matrix","classnamemanager"]});
