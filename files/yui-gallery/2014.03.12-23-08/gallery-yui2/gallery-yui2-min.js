YUI.add("gallery-yui2",function(A){var E=A.Env,D="undefined",G=((typeof YAHOO_config===D||!YAHOO_config)?{}:YAHOO_config),H=G.base||"http://yui.yahooapis.com/2.8.0r4/build/",B=G.seed||"yuiloader/yuiloader-min.js",L=!(typeof YAHOO===D||!YAHOO),C,F;function I(M){if(typeof M.combine===D){M.combine=true;}M.filter=M.filter||"min";C=new YAHOO.util.YUILoader(M);return C;}function K(N,M){if(A.Lang.isObject(M)){M.name=M.name||N;M.type=M.type||((M.fullpath||M.path).indexOf(".css")>=0?"css":"js");E._legacy._useQueue.add({fn:function(){C.addModule(M);},autoContinue:true});}}function J(O){O=O||{};var M=O.modules||{},N;for(N in M){if(M.hasOwnProperty(N)){K(N,M[N]);}}return O;}if(!E._legacy){F=new A.AsyncQueue();E._legacy={_useQueue:F};if(L){E._legacy._loader=E._legacy._loader||I(G);}else{F.add({fn:function(){YUI({modules:{"yui2-yuiloader":{fullpath:H+B}}}).use("yui2-yuiloader",function(N,M){if(M.success){E._legacy._loader=I(G);F.run();}else{}});},autoContinue:false});}G=J(G);F.run();}F=E._legacy._useQueue;C=E._legacy._loader;A.yui2=function(M){M=J(M);return{use:function(){var N=Array.prototype.slice.call(arguments,0),P=N.pop(),O=E._legacy._useQueue;O.add({fn:function(){C.require(N);C.insert({onSuccess:function(Q){O.run();P.apply(A,[A,{success:Q}]);},onFailure:function(Q){O.run();P.apply(A,[A,{failure:Q}]);},onTimeout:function(){O.run();P.apply(A,[A,{failure:{timeout:true}}]);}},M.type);},autoContinue:false});if(!O.isRunning()&&O.size()===1){O.run();}}};};},"gallery-2009.12.08-22",{requires:["node-base","get","async-queue"]});