/*
YUI 3.17.1 (build 0eb5a52)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("series-column-stacked",function(e,t){var n=e.Lang;e.StackedColumnSeries=e.Base.create("stackedColumnSeries",e.ColumnSeries,[e.StackingUtil],{drawSeries:function(){if(this.get("xcoords").length<1)return;var e=n.isNumber,t=this._copyObject(this.get("styles").marker),r=t.width,i=t.height,s=this.get("xcoords"),o=this.get("ycoords"),u=0,a=s.length,f=o[0],l=this.get("seriesTypeCollection"),c,h=this.get("order"),p=this.get("graphOrder"),d,v,m,g,y,b,w,E=h===0,S=a*r,x={width:[],height:[]},T=[],N=[],C=this.get("groupMarkers");n.isArray(t.fill.color)&&(m=t.fill.color.concat()),n.isArray(t.border.color)&&(g=t.border.color.concat()),this._createMarkerCache(),S>this.get("width")&&(c=this.get("width")/S,r*=c,r=Math.max(r,1));if(!E){y=l[h-1],b=y.get("negativeBaseValues"),w=y.get("positiveBaseValues");if(!b||!w)E=!0,w=[],b=[]}else b=[],w=[];this.set("negativeBaseValues",b),this.set("positiveBaseValues",w);for(u=0;u<a;++u){d=s[u],f=o[u];if(!e(f)||!e(d)){E&&(b[u]=this._bottomOrigin,w[u]=this._bottomOrigin),this._markers.push(null);continue}E?(i=Math.abs(this._bottomOrigin-f),f<this._bottomOrigin?(w[u]=f,b[u]=this._bottomOrigin):f>this._bottomOrigin?(w[u]=this._bottomOrigin,b[u]=f,f-=i):(w[u]=f,b[u]=f)):f>this._bottomOrigin?(f+=b[u]-this._bottomOrigin,i=f-b[u],b[u]=f,f-=i):f<=this._bottomOrigin&&(f=w[u]-(this._bottomOrigin-f),i=w[u]-f,w[u]=f),!isNaN(i)&&i>0?(d-=r/2,C?(x.width[u]=r,x.height[u]=i,T.push(d),N.push(f)):(t.width=r,t.height=i,t.x=d,t.y=f,m&&(t.fill.color=m[u%m.length]),g&&(t.border.color=g[u%g.length]),v=this.getMarker(t,p,u))):C||this._markers.push(null)}C?this._createGroupMarker({fill:t.fill,border:t.border,dimensions:x,xvalues:T,yvalues:N,shape:t.shape}):this._clearMarkerCache()},updateMarkerState:function(e,t){if(this._markers&&this._markers[t]){var r,i,s=this._getState(e),o=this.get("xcoords"),u=this._markers[t],a=0,f,l;r=this.get("styles").marker,a=r.width*.5,i=s==="off"||!r[s]?this._copyObject(r):this._copyObject(r[s]),i.height=u.get("height"),i.x=o[t]-a,i.y=u.get("y"),i.id=u.get("id"),f=i.fill.color,l=i.border.color,n.isArray(f)?i.fill.color=f[t%f.length]:i.fill.color=this._getItemColor(i.fill.color,t),n.isArray(l)?i.border.color=l[t%l.length]:i.border.color=this._getItemColor(i.border.color,t),u.set(i)}},_getPlotDefaults:function(){var e={fill:{type:"solid",alpha:1,colors:null,alphas:null,ratios:null},border:{weight:0,alpha:1},width:24,height:24,shape:"rect",padding:{top:0,left:0,right:0,bottom:0}};return e.fill.color=this._getDefaultColor(this.get("graphOrder"),"fill"),e.border.color=this._getDefaultColor(this.get("graphOrder"),"border"),e}},{ATTRS:{type:{value:"stackedColumn"},negativeBaseValues:{value:null},positiveBaseValues:{value:null}}})},"3.17.1",{requires:["series-stacked","series-column"]});
