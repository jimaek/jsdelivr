/*
YUI 3.17.1 (build 0eb5a52)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("datatable-body",function(e,t){var n=e.Lang,r=n.isArray,i=n.isNumber,s=n.isString,o=n.sub,u=e.Escape.html,a=e.Array,f=e.bind,l=e.Object,c=/\{value\}/g,h="contentUpdate",p={above:[-1,0],below:[1,0],next:[0,1],prev:[0,-1],previous:[0,-1]};e.namespace("DataTable").BodyView=e.Base.create("tableBody",e.View,[],{CELL_TEMPLATE:'<td {headers} class="{className}">{content}</td>',ROW_TEMPLATE:'<tr id="{rowId}" data-yui3-record="{clientId}" class="{rowClass}">{content}</tr>',TBODY_TEMPLATE:'<tbody class="{className}"></tbody>',getCell:function(t,n){var i=this.tbodyNode,o,u,a,f;return t&&i&&(r(t)?(o=i.get("children").item(t[0]),u=o&&o.get("children").item(t[1])):t._node&&(u=t.ancestor("."+this.getClassName("cell"),!0)),u&&n&&(f=i.get("firstChild.rowIndex"),s(n)&&(p[n]||e.error("Unrecognized shift: "+n,null,"datatable-body"),n=p[n]),r(n)&&(a=u.get("parentNode.rowIndex")+n[0]-f,o=i.get("children").item(a),a=u.get("cellIndex")+n[1],u=o&&o.get("children").item(a)))),u||null},getClassName:function(){var t=this.host,n;return t&&t.getClassName?t.getClassName.apply(t,arguments):(n=a(arguments),n.unshift(this.constructor.NAME),e.ClassNameManager.getClassName.apply(e.ClassNameManager,n))},getRecord:function(e){var t=this.get("modelList"),n=this.tbodyNode,r=null,i;return n&&(s(e)&&(e=n.one("#"+e)),e&&e._node&&(r=e.ancestor(function(e){return e.get("parentNode").compareTo(n)},!0),i=r&&t.getByClientId(r.getData("yui3-record")))),i||null},getRow:function(e){var t=this.tbodyNode,n=null;return t&&(e&&(e=this._idMap[e.get?e.get("clientId"):e]||e),n=i(e)?t.get("children").item(e):t.one("#"+e)),n},render:function(){var e=this.get("container"),t=this.get("modelList"),n=this.get("columns"),r=this.tbodyNode||(this.tbodyNode=this._createTBodyNode());return this._createRowTemplate(n),t&&(r.setHTML(this._createDataHTML(n)),this._applyNodeFormatters(r,n)),r.get("parentNode")!==e&&e.appendChild(r),this.bindUI(),this},refreshRow:function(e,t,n){var r,i,s=n.length,o;for(o=0;o<s;o++)r=this.getColumn(n[o]),r!==null&&(i=e.one("."+this.getClassName("col",r._id||r.key)),this.refreshCell(i,t));return this},refreshCell:function(t,n,r){var i,s,o,u=n.toJSON();t=this.getCell(t),n||(n=this.getRecord(t)),r||(r=this.getColumn(t));if(r.nodeFormatter)o={cell:t.one("."+this.getClassName("liner"))||t,column:r,data:u,record:n,rowIndex:this._getRowIndex(t.ancestor("tr")),td:t,value:u[r.key]},keep=r.nodeFormatter.call(host,o),keep===!1&&t.destroy(!0);else if(r.formatter){r._formatterFn||(r=this._setColumnsFormatterFn([r])[0]),s=r._formatterFn||null,s&&(o={value:u[r.key],data:u,column:r,record:n,className:"",rowClass:"",rowIndex:this._getRowIndex(t.ancestor("tr"))},i=s.call(this.get("host"),o),i===undefined&&(i=o.value));if(i===undefined||i===null||i==="")i=r.emptyCellValue||""}else i=u[r.key]||r.emptyCellValue||"";return t.setHTML(r.allowHTML?i:e.Escape.html(i)),this},getColumn:function(t){t&&t._node&&(t=t.get("className").match(new RegExp(this.getClassName("col")+"-([^ ]*)"))[1]);if(this.host)return this.host._columnMap[t]||null;var n=this.get("columns"),r=null;return e.Array.some(n,function(e){if((e._id||e.key)===t)return r=e,!0}),r},_afterColumnsChange:function(){this.render()},_afterDataChange:function(t){var n=(t.type.match(/:(add|change|remove)$/)||[])[1],r=t.index,i=this.get("columns"),s,o=t.changed&&e.Object.keys(t.changed),u,a,f,l;for(f=0,l=i.length;f<l;f++){s=i[f];if(s.hasOwnProperty("nodeFormatter")){this.render(),this.fire(h);return}}switch(n){case"change":for(f=0,l=i.length;f<l;f++)s=i[f],u=s.key,s.formatter&&!t.changed[u]&&o.push(u);this.refreshRow(this.getRow(t.target),t.target,o);break;case"add":r=Math.min(r,this.get("modelList").size()-1),this._setColumnsFormatterFn(i),a=e.Node.create(this._createRowHTML(t.model,r,i)),this.tbodyNode.insert(a,r),this._restripe(r);break;case"remove":this.getRow(r).remove(!0),this._restripe(r-1);break;default:this.render()}this.fire(h)},_restripe:function(e){var t=this._restripeTask,n;e=Math.max(e|0,0),t?t.index=Math.min(t.index,e):(n=this,this._restripeTask={timer:setTimeout(function(){if(!n||n.get("destroy")||!n.tbodyNode||!n.tbodyNode.inDoc()){n._restripeTask=null;return}var e=[n.CLASS_ODD,n.CLASS_EVEN],t=[n.CLASS_EVEN,n.CLASS_ODD],r=n._restripeTask.index;n.tbodyNode.get("childNodes").slice(r).each(function(n,i){n.replaceClass.apply(n,(r+i)%2?t:e)}),n._restripeTask=null},0),index:e})},_afterModelListChange:function(){var e=this._eventHandles;e.dataChange&&(e.dataChange.detach(),delete e.dataChange,this.bindUI()),this.tbodyNode&&this.render()},_applyNodeFormatters:function(e,t){var n=this.host||this,r=this.get("modelList"),i=[],s="."+this.getClassName("liner"),o,u,a;for(u=0,a=t.length;u<a;++u)t[u].nodeFormatter&&i.push(u);r&&i.length&&(o=e.get("childNodes"),r.each(function(e,r){var u={data:e.toJSON(),record:e,rowIndex:r},a=o.item(r),f,l,c,h,p,d,v;if(a){p=a.get("childNodes");for(f=0,l=i.length;f<l;++f)d=p.item(i[f]),d&&(c=u.column=t[i[f]],h=c.key||c.id,u.value=e.get(h),u.td=d,u.cell=d.one(s)||d,v=c.nodeFormatter.call(n,u),v===!1&&d.destroy(!0))}}))},bindUI:function(){var e=this._eventHandles,t=this.get("modelList"),n=t.model.NAME+":change";e.columnsChange||(e.columnsChange=this.after("columnsChange",f("_afterColumnsChange",this))),t&&!e.dataChange&&(e.dataChange=t.after(["add","remove","reset",n],f("_afterDataChange",this)))},_createDataHTML:function(e){var t=this.get("modelList"),n="";return t&&t.each(function(t,r){n+=this._createRowHTML(t,r,e)},this),n},_createRowHTML:function(e,t,n){var r=e.toJSON(),i=e.get("clientId"),s={rowId:this._getRowId(i),clientId:i,rowClass:t%2?this.CLASS_ODD:this.CLASS_EVEN},a=this.host||this,f,l,c,h,p,d;for(f=0,l=n.length;f<l;++f){c=n[f],p=r[c.key],h=c._id||c.key,s[h+"-className"]="",c._formatterFn&&(d={value:p,data:r,column:c,record:e,className:"",rowClass:"",rowIndex:t},p=c._formatterFn.call(a,d),p===undefined&&(p=d.value),s[h+"-className"]=d.className,s.rowClass+=" "+d.rowClass);if(!s.hasOwnProperty(h)||r.hasOwnProperty(c.key)){if(p===undefined||p===null||p===""
)p=c.emptyCellValue||"";s[h]=c.allowHTML?p:u(p)}}return s.rowClass=s.rowClass.replace(/\s+/g," "),o(this._rowTemplate,s)},_getRowIndex:function(e){var t=this.tbodyNode,n=1;if(t&&e){if(e.ancestor("tbody")!==t)return null;while(e=e.previous())n++}return n},_createRowTemplate:function(e){var t="",n=this.CELL_TEMPLATE,r,i,s,u,a,f,l,h;this._setColumnsFormatterFn(e);for(r=0,i=e.length;r<i;++r)s=e[r],u=s.key,a=s._id||u,h=s._formatterFn,f=(s._headers||[]).length>1?'headers="'+s._headers.join(" ")+'"':"",l={content:"{"+a+"}",headers:f,className:this.getClassName("col",a)+" "+(s.className||"")+" "+this.getClassName("cell")+" {"+a+"-className}"},!h&&s.formatter&&(l.content=s.formatter.replace(c,l.content)),s.nodeFormatter&&(l.content=""),t+=o(s.cellTemplate||n,l);this._rowTemplate=o(this.ROW_TEMPLATE,{content:t})},_setColumnsFormatterFn:function(t){var r=e.DataTable.BodyView.Formatters,i,s,o,u;for(o=0,u=t.length;o<u;o++)s=t[o],i=s.formatter,!s._formatterFn&&i&&(n.isFunction(i)?s._formatterFn=i:i in r&&(s._formatterFn=r[i].call(this.host||this,s)));return t},_createTBodyNode:function(){return e.Node.create(o(this.TBODY_TEMPLATE,{className:this.getClassName("data")}))},destructor:function(){(new e.EventHandle(l.values(this._eventHandles))).detach()},_getRowId:function(t){return this._idMap[t]||(this._idMap[t]=e.guid())},initializer:function(e){this.host=e.host,this._eventHandles={modelListChange:this.after("modelListChange",f("_afterModelListChange",this))},this._idMap={},this.CLASS_ODD=this.getClassName("odd"),this.CLASS_EVEN=this.getClassName("even")}},{Formatters:{}})},"3.17.1",{requires:["datatable-core","view","classnamemanager"]});
