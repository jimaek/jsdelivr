YUI.add("gallery-bitly",function(e,t){var n=function(e){n.superclass.constructor.call(this,e)};n.NAME="bitly",n.ATTRS={username:{value:""},key:{value:""}},e.extend(n,e.Base,{api:"http://api.bit.ly/",initializer:function(){(!this.get("key")||!this.get("username"))&&e.error("You must give a username and an API key. If you do not have an apiKey, sign up for a bitly account and go to your Account page to get your apiKey. (http://bit.ly/)")},destructor:function(){},_buildURL:function(e,t){return this.api+e+"?version=2.0.1&login="+this.get("username")+"&apiKey="+this.get("key")+"&"+t},_handleAPI:function(t,n,r){var i=e.guid().replace(/-/g,"_");YUI[i]=e.bind(function(n){n.results&&(t==="stats"?(this.fire(t,n.results),r&&(r=e.bind(r,this),r(n.results))):e.each(n.results,function(n){this.fire(t,n),r&&(r=e.bind(r,this),r(n))},this)),delete YUI[i]},this),e.Get.script(n+"&callback=YUI."+i)},shorten:function(e,t){var n=this._buildURL("shorten","longUrl="+encodeURIComponent(e));this._handleAPI("shorten",n,t)},expand:function(e,t){var n=e.url?"shortUrl="+encodeURIComponent(e.url):"hash="+e.hash,r=this._buildURL("expand",n);this._handleAPI("expand",r,t)},expandByURL:function(e,t){return this.expand({url:e},t)},expandByHash:function(e,t){return this.expand({hash:e},t)},info:function(e,t){var n=e.url?"shortUrl="+encodeURIComponent(e.url):"hash="+e.hash,r=this._buildURL("info",n);this._handleAPI("info",r,t)},infoByURL:function(e,t){return this.info({url:e},t)},infoByHash:function(e,t){return this.info({hash:e},t)},stats:function(e,t){var n=e.url?"shortUrl="+encodeURIComponent(e.url):"hash="+e.hash,r=this._buildURL("stats",n);this._handleAPI("stats",r,t)},statsByURL:function(e,t){return this.stats({url:e},t)},statsByHash:function(e,t){return this.stats({hash:e},t)}}),e.bitly=n},"gallery-2012.12.05-21-01",{requires:["base","get"],supersedes:[],optional:[],skinnable:!1});
