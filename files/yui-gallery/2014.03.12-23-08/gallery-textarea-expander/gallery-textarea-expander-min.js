YUI.add("gallery-textarea-expander",function(b){var a=function(c){a.superclass.constructor.apply(this,arguments);};a.NAME="textareaExpander";a.NS="textarea-expander";b.extend(a,b.Plugin.Base,{initializer:function(d){var c=d.host,e,f=parseInt(c.getStyle("maxHeight"),10),g=false;c.wrap('<div class="textarea-expander"></div>');c.ancestor().prepend("<pre><span></span><br/></pre>");e=c.ancestor().one("span");c.setStyle("height","100%");if(b.UA.opera&&b.UA.os==="macintosh"){e.append("<br/>");}this.handle=c.on(["keyup","scroll"],function(h){if(!isNaN(f)){if(!g&&c.get("scrollHeight")>f){g=true;c.setStyle("overflowY","auto");}else{if(g&&c.get("scrollHeight")<f){g=false;c.setStyle("overflowY","none");}}}if(!g){e.set("text",c.get("value"));}});e.set("text",c.get("value"));c.ancestor().addClass("active");},destructor:function(){this.handle.detach();}});b.TextareaExpander=a;},"gallery-2012.11.07-21-32",{skinnable:true,requires:["plugin","node-style"]});