/*
YUI 3.17.1 (build 0eb5a52)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("base-build",function(e,t){function f(e,t,n){n[e]&&(t[e]=(t[e]||[]).concat(n[e]))}function l(e,t,n){n._ATTR_CFG&&(t._ATTR_CFG_HASH=null,f.apply(null,arguments))}function c(e,t,r){n.modifyAttrs(t,r.ATTRS)}var n=e.BaseCore,r=e.Base,i=e.Lang,s="initializer",o="destructor",u=["_PLUG","_UNPLUG"],a;r._build=function(t,n,i,u,a,f){var l=r._build,c=l._ctor(n,f),h=l._cfg(n,f,i),p=l._mixCust,d=c._yuibuild.dynamic,v,m,g,y,b,w;for(v=0,m=i.length;v<m;v++)g=i[v],y=g.prototype,b=y[s],w=y[o],delete y[s],delete y[o],e.mix(c,g,!0,null,1),p(c,g,h),b&&(y[s]=b),w&&(y[o]=w),c._yuibuild.exts.push(g);return u&&e.mix(c.prototype,u,!0),a&&(e.mix(c,l._clean(a,h),!0),p(c,a,h)),c.prototype.hasImpl=l._impl,d&&(c.NAME=t,c.prototype.constructor=c,c.modifyAttrs=n.modifyAttrs),c},a=r._build,e.mix(a,{_mixCust:function(t,n,r){var s,o,u,a,f,l;r&&(s=r.aggregates,o=r.custom,u=r.statics),u&&e.mix(t,n,!0,u);if(s)for(l=0,f=s.length;l<f;l++)a=s[l],!t.hasOwnProperty(a)&&n.hasOwnProperty(a)&&(t[a]=i.isArray(n[a])?[]:{}),e.aggregate(t,n,!0,[a]);if(o)for(l in o)o.hasOwnProperty(l)&&o[l](l,t,n)},_tmpl:function(t){function n(){n.superclass.constructor.apply(this,arguments)}return e.extend(n,t),n},_impl:function(e){var t=this._getClasses(),n,r,i,s,o,u;for(n=0,r=t.length;n<r;n++){i=t[n];if(i._yuibuild){s=i._yuibuild.exts,o=s.length;for(u=0;u<o;u++)if(s[u]===e)return!0}}return!1},_ctor:function(e,t){var n=t&&!1===t.dynamic?!1:!0,r=n?a._tmpl(e):e,i=r._yuibuild;return i||(i=r._yuibuild={}),i.id=i.id||null,i.exts=i.exts||[],i.dynamic=n,r},_cfg:function(t,n,r){var i=[],s={},o=[],u,a=n&&n.aggregates,f=n&&n.custom,l=n&&n.statics,c=t,h,p;while(c&&c.prototype)u=c._buildCfg,u&&(u.aggregates&&(i=i.concat(u.aggregates)),u.custom&&e.mix(s,u.custom,!0),u.statics&&(o=o.concat(u.statics))),c=c.superclass?c.superclass.constructor:null;if(r)for(h=0,p=r.length;h<p;h++)c=r[h],u=c._buildCfg,u&&(u.aggregates&&(i=i.concat(u.aggregates)),u.custom&&e.mix(s,u.custom,!0),u.statics&&(o=o.concat(u.statics)));return a&&(i=i.concat(a)),f&&e.mix(s,n.cfgBuild,!0),l&&(o=o.concat(l)),{aggregates:i,custom:s,statics:o}},_clean:function(t,n){var r,i,s,o=e.merge(t),u=n.aggregates,a=n.custom;for(r in a)o.hasOwnProperty(r)&&delete o[r];for(i=0,s=u.length;i<s;i++)r=u[i],o.hasOwnProperty(r)&&delete o[r];return o}}),r.build=function(e,t,n,r){return a(e,t,n,null,null,r)},r.create=function(e,t,n,r,i){return a(e,t,n,r,i)},r.mix=function(e,t){return e._CACHED_CLASS_DATA&&(e._CACHED_CLASS_DATA=null),a(null,e,t,null,null,{dynamic:!1})},n._buildCfg={aggregates:u.concat(),custom:{ATTRS:c,_ATTR_CFG:l,_NON_ATTRS_CFG:f}},r._buildCfg={aggregates:u.concat(),custom:{ATTRS:c,_ATTR_CFG:l,_NON_ATTRS_CFG:f}}},"3.17.1",{requires:["base-base"]});
