/*
YUI 3.17.1 (build 0eb5a52)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("editor-para",function(e,t){var n=function(){n.superclass.constructor.apply(this,arguments)},r="host",i="nodeChange",s="parentNode",o="> p",u="p",a="<br>",f="firstChild",l="li";e.extend(n,e.Plugin.EditorParaBase,{_getRoot:function(){return this.get(r).getInstance().EditorSelection.ROOT},_onNodeChange:function(t){var n=this.get(r),i=n.getInstance(),c,h,p,d,v,m=i.EditorSelection.DEFAULT_BLOCK_TAG,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D=":last-child",H,B,j,F,I,q=!1,R=this._getRoot(),U;switch(t.changedType){case"enter-up":H=this._lastPara?this._lastPara:t.changedNode,B=H.one("br.yui-cursor"),this._lastPara&&delete this._lastPara,B&&(B.previous()||B.next())&&B.ancestor(u)&&B.remove(),H.test(m)||(N=H.ancestor(m),N&&(H=N,N=null));if(H.test(m)){C=H.previous();if(C){F=C.one(D);while(!q)F?(I=F.one(D),I?F=I:q=!0):q=!0;F&&n.copyStyles(F,H)}}break;case"enter":e.UA.webkit&&t.changedEvent.shiftKey&&(n.execCommand("insertbr"),t.changedEvent.preventDefault()),t.changedNode.test("li")&&!e.UA.ie&&(c=i.EditorSelection.getText(t.changedNode),c===""&&(p=t.changedNode.ancestor("ol,ul"),j=p.getAttribute("dir"),j!==""&&(j=' dir = "'+j+'"'),p=t.changedNode.ancestor(i.EditorSelection.BLOCKS),d=i.Node.create("<p"+j+">"+i.EditorSelection.CURSOR+"</p>"),p.insert(d,"after"),t.changedNode.remove(),t.changedEvent.halt(),v=new i.EditorSelection,v.selectNode(d,!0,!1)));if(e.UA.gecko&&n.get("defaultblock")!=="p"){p=t.changedNode;if(!p.test(l)&&!p.ancestor(l)){p.test(m)||(p=p.ancestor(m)),d=i.Node.create("<"+m+"></"+m+">"),p.insert(d,"after"),v=new i.EditorSelection;if(v.anchorOffset){g=v.anchorNode.get("textContent"),h=i.one(i.config.doc.createTextNode(g.substr(0,v.anchorOffset))),y=i.one(i.config.doc.createTextNode(g.substr(v.anchorOffset))),w=v.anchorNode,w.setContent(""),E=w.cloneNode(),E.append(y),S=!1,T=w;while(!S)T=T.get(s),T&&!T.test(m)?(x=T.cloneNode(),x.set("innerHTML",""),x.append(E),b=T.get("childNodes"),U=!1,b.each(function(e){U&&x.append(e),e===w&&(U=!0)}),w=T,E=x):S=!0;y=E,v.anchorNode.append(h),y&&d.append(y)}d.get(f)&&(d=d.get(f)),d.prepend(i.EditorSelection.CURSOR),v.focusCursor(!0,!0),c=i.EditorSelection.getText(d),c!==""&&i.EditorSelection.cleanCursor(),t.changedEvent.preventDefault()}}break;case"keyup":e.UA.gecko&&R&&R.getHTML().length<20&&(R.one(o)||this._fixFirstPara());break;case"backspace-up":case"backspace-down":case"delete-up":e.UA.ie||(k=R.all(o),A=R,k.item(0)&&(A=k.item(0)),L=A.one("br"),L&&(L.removeAttribute("id"),L.removeAttribute("class")),h=i.EditorSelection.getText(A),h=h.replace(/ /g,"").replace(/\n/g,""),M=A.all("img"),h.length===0&&!M.size()&&(A.test(u)||this._fixFirstPara(),O=null,t.changedNode&&t.changedNode.test(u)&&(O=t.changedNode),!O&&n._lastPara&&n._lastPara.inDoc()&&(O=n._lastPara),O&&!O.test(u)&&(O=O.ancestor(u)),O&&!O.previous()&&O.get(s)&&O.get(s).compareTo(R)&&(t.changedEvent.frameEvent.halt(),t.preventDefault())),e.UA.webkit&&t.changedNode&&(t.preventDefault(),A=t.changedNode,A.test("li")&&!A.previous()&&!A.next()&&(c=A.get("innerHTML").replace(a,""),c===""&&A.get(s)&&(A.get(s).replace(i.Node.create(a)),t.changedEvent.frameEvent.halt(),i.EditorSelection.filterBlocks())))),e.UA.gecko&&this._fixGeckoOnBackspace(i)}e.UA.gecko&&t.changedNode&&!t.changedNode.test(m)&&(O=t.changedNode.ancestor(m),O&&(this._lastPara=O))},_fixGeckoOnBackspace:function(e){var t=new e.EditorSelection,n,r;if(!t.isCollapsed||t.anchorNode.get("nodeName")!=="P"||t.anchorOffset===0)return;r=t.anchorNode.get("childNodes"),n=t.anchorNode.get("lastChild");if(t.anchorOffset!==r.size()||n.get("nodeName")!=="BR")return;if(t.anchorOffset===1){t.selectNode(t.anchorNode,!0);return}n=n.get("previousSibling");if(n.get("nodeType")!==Node.TEXT_NODE)return;offset=n.get("length"),t.getEditorOffset()===offset&&t.selectNode(n,!0,offset)},initializer:function(){var t=this.get(r);if(t.editorBR){e.error("Can not plug EditorPara and EditorBR at the same time.");return}t.on(i,e.bind(this._onNodeChange,this))}},{NAME:"editorPara",NS:"editorPara",ATTRS:{host:{value:!1}}}),e.namespace("Plugin"),e.Plugin.EditorPara=n},"3.17.1",{requires:["editor-para-base"]});
