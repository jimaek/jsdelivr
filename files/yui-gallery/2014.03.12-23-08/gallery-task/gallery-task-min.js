YUI.add("gallery-task",function(Y,NAME){function Task(e){var t=this;this.promise=new Y.Promise(function(e,n){t.resolve=function(t){Y.Promise.isPromise(t)?t.then(e,n):e(t)},t.reject=n}),this.accept=function(e){t.next(null,e)},this.fail=function(e){t.next(e)};try{this.thread=e.call(this),this.next()}catch(n){this.reject(n)}}var supportsES6Syntax=!1,isPromise=Y.Promise.isPromise;try{eval("function* f(){}"),supportsES6Syntax=!0}catch(e){}Y.task=function(e){return(new Task(e)).promise},Task.prototype.next=supportsES6Syntax?function(e,t){var n,r;try{n=arguments.length===1?this.thread.throw(e):this.thread.send(t)}catch(i){return this.reject(i)}r=n.value,n.done?this.resolve(r):isPromise(r)?r.then(this.accept,this.fail):this.accept(r)}:function(e,t){var n;try{n=arguments.length===1?this.thread.throw(e):this.thread.send(t)}catch(r){r instanceof StopIteration?this.resolve(this.result):this.reject(r);return}this.result=n,isPromise(n)?n.then(this.accept,this.fail):this.accept(n)},Y.task.Task=Task},"gallery-2013.05.15-21-12",{requires:["promise"]});
