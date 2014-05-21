/*
YUI 3.17.1 (build 0eb5a52)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/yui-later/yui-later.js']) {
   __coverage__['build/yui-later/yui-later.js'] = {"path":"build/yui-later/yui-later.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":40}}},"2":{"name":"(anonymous_2)","line":38,"loc":{"start":{"line":38,"column":10},"end":{"line":38,"column":48}}},"3":{"name":"(anonymous_3)","line":45,"loc":{"start":{"line":45,"column":18},"end":{"line":45,"column":29}}},"4":{"name":"(anonymous_4)","line":63,"loc":{"start":{"line":63,"column":16},"end":{"line":63,"column":27}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":78,"column":41}},"2":{"start":{"line":11,"column":0},"end":{"line":11,"column":17}},"3":{"start":{"line":38,"column":0},"end":{"line":72,"column":2}},"4":{"start":{"line":39,"column":4},"end":{"line":39,"column":21}},"5":{"start":{"line":40,"column":4},"end":{"line":40,"column":65}},"6":{"start":{"line":41,"column":4},"end":{"line":41,"column":31}},"7":{"start":{"line":43,"column":4},"end":{"line":58,"column":81}},"8":{"start":{"line":50,"column":12},"end":{"line":56,"column":13}},"9":{"start":{"line":51,"column":16},"end":{"line":55,"column":17}},"10":{"start":{"line":52,"column":20},"end":{"line":52,"column":63}},"11":{"start":{"line":54,"column":20},"end":{"line":54,"column":53}},"12":{"start":{"line":60,"column":4},"end":{"line":71,"column":6}},"13":{"start":{"line":64,"column":12},"end":{"line":64,"column":29}},"14":{"start":{"line":65,"column":12},"end":{"line":69,"column":13}},"15":{"start":{"line":66,"column":16},"end":{"line":66,"column":34}},"16":{"start":{"line":68,"column":16},"end":{"line":68,"column":33}},"17":{"start":{"line":74,"column":0},"end":{"line":74,"column":23}}},"branchMap":{"1":{"line":39,"type":"binary-expr","locations":[{"start":{"line":39,"column":11},"end":{"line":39,"column":15}},{"start":{"line":39,"column":19},"end":{"line":39,"column":20}}]},"2":{"line":40,"type":"cond-expr","locations":[{"start":{"line":40,"column":41},"end":{"line":40,"column":54}},{"start":{"line":40,"column":57},"end":{"line":40,"column":64}}]},"3":{"line":41,"type":"binary-expr","locations":[{"start":{"line":41,"column":8},"end":{"line":41,"column":9}},{"start":{"line":41,"column":13},"end":{"line":41,"column":25}},{"start":{"line":41,"column":29},"end":{"line":41,"column":30}}]},"4":{"line":44,"type":"cond-expr","locations":[{"start":{"line":44,"column":46},"end":{"line":44,"column":51}},{"start":{"line":44,"column":54},"end":{"line":44,"column":56}}]},"5":{"line":44,"type":"binary-expr","locations":[{"start":{"line":44,"column":18},"end":{"line":44,"column":19}},{"start":{"line":44,"column":23},"end":{"line":44,"column":42}}]},"6":{"line":50,"type":"if","locations":[{"start":{"line":50,"column":12},"end":{"line":50,"column":12}},{"start":{"line":50,"column":12},"end":{"line":50,"column":12}}]},"7":{"line":51,"type":"if","locations":[{"start":{"line":51,"column":16},"end":{"line":51,"column":16}},{"start":{"line":51,"column":16},"end":{"line":51,"column":16}}]},"8":{"line":54,"type":"binary-expr","locations":[{"start":{"line":54,"column":36},"end":{"line":54,"column":40}},{"start":{"line":54,"column":44},"end":{"line":54,"column":51}}]},"9":{"line":58,"type":"cond-expr","locations":[{"start":{"line":58,"column":26},"end":{"line":58,"column":52}},{"start":{"line":58,"column":55},"end":{"line":58,"column":80}}]},"10":{"line":65,"type":"if","locations":[{"start":{"line":65,"column":12},"end":{"line":65,"column":12}},{"start":{"line":65,"column":12},"end":{"line":65,"column":12}}]}},"code":["(function () { YUI.add('yui-later', function (Y, NAME) {","","/**"," * Provides a setTimeout/setInterval wrapper. This module is a `core` YUI module,"," * <a href=\"../classes/YUI.html#method_later\">it's documentation is located under the YUI class</a>."," *"," * @module yui"," * @submodule yui-later"," */","","var NO_ARGS = [];","","/**"," * Executes the supplied function in the context of the supplied"," * object 'when' milliseconds later.  Executes the function a"," * single time unless periodic is set to true."," * @for YUI"," * @method later"," * @param when {Number} the number of milliseconds to wait until the fn"," * is executed."," * @param o the context object."," * @param fn {Function|String} the function to execute or the name of"," * the method in the 'o' object to execute."," * @param data [Array] data that is provided to the function.  This"," * accepts either a single item or an array.  If an array is provided,"," * the function is executed with one parameter for each array item."," * If you need to pass a single array parameter, it needs to be wrapped"," * in an array [myarray]."," *"," * Note: native methods in IE may not have the call and apply methods."," * In this case, it will work, but you are limited to four arguments."," *"," * @param periodic {boolean} if true, executes continuously at supplied"," * interval until canceled."," * @return {object} a timer object. Call the cancel() method on this"," * object to stop the timer."," */","Y.later = function(when, o, fn, data, periodic) {","    when = when || 0;","    data = (!Y.Lang.isUndefined(data)) ? Y.Array(data) : NO_ARGS;","    o = o || Y.config.win || Y;","","    var cancelled = false,","        method = (o && Y.Lang.isString(fn)) ? o[fn] : fn,","        wrapper = function() {","            // IE 8- may execute a setInterval callback one last time","            // after clearInterval was called, so in order to preserve","            // the cancel() === no more runny-run, we have to jump through","            // an extra hoop.","            if (!cancelled) {","                if (!method.apply) {","                    method(data[0], data[1], data[2], data[3]);","                } else {","                    method.apply(o, data || NO_ARGS);","                }","            }","        },","        id = (periodic) ? setInterval(wrapper, when) : setTimeout(wrapper, when);","","    return {","        id: id,","        interval: periodic,","        cancel: function() {","            cancelled = true;","            if (this.interval) {","                clearInterval(id);","            } else {","                clearTimeout(id);","            }","        }","    };","};","","Y.Lang.later = Y.later;","","","","}, '3.17.1', {\"requires\": [\"yui-base\"]});","","}());"]};
}
var __cov_8hw$PoKdNxUpqcYWk0bvmQ = __coverage__['build/yui-later/yui-later.js'];
__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['1']++;YUI.add('yui-later',function(Y,NAME){__cov_8hw$PoKdNxUpqcYWk0bvmQ.f['1']++;__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['2']++;var NO_ARGS=[];__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['3']++;Y.later=function(when,o,fn,data,periodic){__cov_8hw$PoKdNxUpqcYWk0bvmQ.f['2']++;__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['4']++;when=(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['1'][0]++,when)||(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['1'][1]++,0);__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['5']++;data=!Y.Lang.isUndefined(data)?(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['2'][0]++,Y.Array(data)):(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['2'][1]++,NO_ARGS);__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['6']++;o=(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['3'][0]++,o)||(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['3'][1]++,Y.config.win)||(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['3'][2]++,Y);__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['7']++;var cancelled=false,method=(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['5'][0]++,o)&&(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['5'][1]++,Y.Lang.isString(fn))?(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['4'][0]++,o[fn]):(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['4'][1]++,fn),wrapper=function(){__cov_8hw$PoKdNxUpqcYWk0bvmQ.f['3']++;__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['8']++;if(!cancelled){__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['6'][0]++;__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['9']++;if(!method.apply){__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['7'][0]++;__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['10']++;method(data[0],data[1],data[2],data[3]);}else{__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['7'][1]++;__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['11']++;method.apply(o,(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['8'][0]++,data)||(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['8'][1]++,NO_ARGS));}}else{__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['6'][1]++;}},id=periodic?(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['9'][0]++,setInterval(wrapper,when)):(__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['9'][1]++,setTimeout(wrapper,when));__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['12']++;return{id:id,interval:periodic,cancel:function(){__cov_8hw$PoKdNxUpqcYWk0bvmQ.f['4']++;__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['13']++;cancelled=true;__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['14']++;if(this.interval){__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['10'][0]++;__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['15']++;clearInterval(id);}else{__cov_8hw$PoKdNxUpqcYWk0bvmQ.b['10'][1]++;__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['16']++;clearTimeout(id);}}};};__cov_8hw$PoKdNxUpqcYWk0bvmQ.s['17']++;Y.Lang.later=Y.later;},'3.17.1',{'requires':['yui-base']});
