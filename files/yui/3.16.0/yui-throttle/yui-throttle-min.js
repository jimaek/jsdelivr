/*
YUI 3.16.0 (build 76f0e08)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("yui-throttle",function(e,t){
/*! Based on work by Simon Willison: http://gist.github.com/292562 */
;e.throttle=function(t,n){n=n?n:e.config.throttleTime||150;if(n===-1)return function(){t.apply(this,arguments)};var r=e.Lang.now();return function(){var i=e.Lang.now();i-r>n&&(r=i,t.apply(this,arguments))}}},"3.16.0",{requires:["yui-base"]});
