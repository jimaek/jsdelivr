YUI.add("gallery-input-calendar-sync",function(e,t){"use strict";function n(e){n.superclass.constructor.call(this,e)}function r(){if(this.ignore_value_change)return;var t=this.get("host"),n=this.get("calendar"),r=e.Lang.trim(t.get("value"));if(r.length>0){try{this.ignore_selection_change=!0;var i=e.DateTimeUtils.normalize(e.DateTimeUtils.parseDate(r),{hour:0,minute:0});n.deselectDates(),n.selectDates(i.date),n.set("date",i.date)}catch(o){}finally{this.ignore_selection_change=!1}s.call(this)}else this.get("allowBlank")?n.deselectDates():s.call(this)}function i(){this.ignore_selection_change||(this.get("host").focus(),s.call(this))}function s(){this.ignore_value_change=!0;var t=this.get("calendar").get("selectedDates")[0];this.get("host").set("value",e.DateTimeUtils.formatDate(t)),this.ignore_value_change=!1}n.NAME="InputCalendarSyncPlugin",n.NS="calendarSync",n.ATTRS={calendar:{validator:function(t){return t instanceof e.Calendar}},allowBlank:{value:!0,validator:e.Lang.isBoolean}},e.extend(n,e.Plugin.Base,{initializer:function(e){var t=this.get("host");this.handle_list=[t.on("change",r,this),t.on("valueSet",r,this),this.get("calendar").on("selectionChange",i,this)],this.get("calendar").set("selectionMode","single"),r.call(this)},destructor:function(){e.Array.invoke(this.handle_list,"detach")}}),e.namespace("Plugin"),e.Plugin.InputCalendarSync=n},"gallery-2013.06.26-23-09",{requires:["node-pluginhost","plugin","gallery-datetime-utils","calendar","gallery-node-event-set"]});
