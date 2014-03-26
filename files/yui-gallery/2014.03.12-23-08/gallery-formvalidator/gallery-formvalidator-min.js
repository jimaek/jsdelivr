YUI.add("gallery-formvalidator",function(A){var K=A.Lang,C=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1);},L=function(){return(C()+C()+"-"+C()+"-"+C()+"-"+C()+"-"+C()+C()+C());},D=function(W){var V=[],U,T;if((W.tagName!==null&&W.tagName!==undefined)&&(W.tagName.toLowerCase()=="input")&&(W.type=="submit")){return[W];}U=W.children;if(U===null||U===undefined){U=W.childNodes;}for(T=0;T<U.length;++T){V=V.concat(D(U[T]));}return V;},G=function(U){var T;if(U.getAttribute===null||U.getAttribute===undefined){return false;}T=U.getAttribute("formvalidator:Form");if(T===null||T===undefined){return false;}T=T.toLowerCase();return(T=="yes")||(T=="true");},M=function(X){var W=[],Z=false,V=null,U=0,T,Y;if(X.getAttribute!==null&&X.getAttribute!==undefined){T=X.getAttribute("formvalidator:FormField");Y=X.getAttribute("formvalidator:FormGroup");if((T!==null&&T!==undefined)&&((T.toLowerCase()=="true")||(T.toLowerCase()=="yes"))){W[0]=X;}if((Y!==null&&Y!==undefined)&&((Y.toLowerCase()=="true")||(Y.toLowerCase()=="yes"))){Z=true;}}V=X.children;if(V===null||V===undefined){V=X.childNodes;}for(U=0;U<V.length;++U){if(!G(V[U])){W=W.concat(M(V[U]));}}if(Z){return[{isGroup:true,groupDOM:X,members:W}];}else{return W;}};function O(T){O.superclass.constructor.apply(this,arguments);this._initializeEvents();this.initializeInputs();this.initializeButtons();this.checkFormValues();this.on("inputfield:onchanged",this.onFormValueChanged);if(this.get("checkOnSubmit")){this.enableButtons();}this.publish(O.CE_ONSUBMIT);}O.staticFunctions={BOOLEANSETTER:function(T){if(K.isBoolean(T)){return T;}else{if(K.isString(T)){return T.toLowerCase()=="true";}else{return T!==null&&T!==undefined;}}}};A.augment(O,A.EventTarget);O.ATTRS={customGlobal:{value:{}},form:{setter:function(U){var T=U;if(K.isString(U)){T=A.DOM.byId(U);}if(T===null||T===undefined){throw"Invalid form: Form with id "+U+" does not exist";}return T;},value:null},checkOnSubmit:{value:false,setter:O.staticFunctions.BOOLEANSETTER},onSubmit:{value:null},onSubmitScope:{value:null},createIncorrectIndicator:{value:false},createCorrectIndicator:{value:false},defaultIndicatorDomType:{value:"SPAN"},defaultIncorrectIndicatorCss:{value:""},defaultCorrectIndicatorCss:{value:""},correctIndicatorText:{value:"&nbsp;"},incorrectIndicatorText:{value:"&nbsp;"},fieldJSON:{value:[]},buttonJSON:{value:[]},inputFields:{value:[]},buttons:{value:[]},excludedButtons:{value:[]}};O.NAME="Validator";O.CE_ONSUBMIT="form:onsubmit";A.extend(O,A.Base,{initializeInputs:function(){var T=this.get("fieldJSON"),V,W,U;for(V=0;V<T.length;++V){W=new T[V].type(T[V].atts,false);U=W.getInputDOM();if(U!==null&&U!==undefined){W.synchronize(U);}this.addInput(W);}this.initializeInlineInputs();},getInput:function(W){if(W===null||W===undefined){return null;}var V=this.get("inputFields"),T,U;for(T=0;T<V.length;++T){if(V[T].getId()==W){return V[T];}if(V[T].isGroup()){U=V[T].getInput(W);if(U!==null&&U!==undefined){return U;}}}return null;},clear:function(T){var V=this.get("inputFields"),U;for(U=0;U<V.length;++U){V[U].clear(T);}},setupInput:function(T){T.set("createIncorrectIndicator",this.get("createIncorrectIndicator"));T.set("createCorrectIndicator",this.get("createCorrectIndicator"));this.checkAttribute(T,"defaultIncorrectIndicatorCss","incorrectIndicatorCss");this.checkAttribute(T,"defaultCorrectIndicatorCss","correctIndicatorCss");this.checkAttribute(T,"defaultIndicatorDomType","indicatorType");this.checkAttribute(T,"correctIndicatorText","correctIndicatorText");this.checkAttribute(T,"incorrectIndicatorText","incorrectIndicatorText");T.initializeInput(this);if(!this.get("checkOnSubmit")){T.initializeEvents();}T.addTarget(this);},addInput:function(U){this.setupInput(U);var T=this.get("inputFields");T[T.length]=U;},initializeInlineInputs:function(){var T=M(this.get("form")),U;for(U=0;U<T.length;++U){this.addInlineInput(T[U]);}},constructInlineGroup:function(Z){var Y=Z.members,U=this.getInput(Z.groupDOM.id),V=false,W,T,X,a;if(U===null||U===undefined){V=true;U=new A.GroupBaseField({groupDOM:Z.groupDOM},false);U.synchronize(Z.groupDOM);}for(W=0;W<Y.length;++W){T=this.getInput(Y[W].id);if(Y[W].isGroup){U.addInput(this.constructInlineGroup(Y[W]));}else{if(T===null||T===undefined){X=A[Y[W].getAttribute("formvalidator:type")];a=new X({inputDOM:Y[W]},false);this.setupInput(a);U.addInput(a,this);a.synchronize(Y[W]);}}}if(V){this.setupInput(U);}return U;},addInlineInput:function(V){var W=null,T,U;if(V.isGroup){W=this.constructInlineGroup(V);this.addInput(W);}else{T=this.getInput(V.id);if(T!==null&&T!==undefined){V.id="formvalidator:"+L();}U=A[V.getAttribute("formvalidator:type")];W=new U({inputDOM:V},false);this.addInput(W);W.synchronize(V);}},checkAttribute:function(U,V,T){var W=U.get(T);if(W===null||W===undefined){U.set(T,this.get(V));}},initializeButtons:function(){var a=this.get("buttonJSON"),Y=this.get("buttons"),U=this.get("excludedButtons"),W,V,X,Z,T;for(W=0;W<a.length;++W){Y[W]=new A.Button(a[W]);T=Y[W].get("buttonEl");if(T.type=="button"){A.Event.attach("click",this.submitForm,T,this,true);}}X=D(this.get("form"));for(W=0;W<X.length;++W){Z=false;for(V=0;V<U.length;++V){if(U[V]==X[W].id){Z=true;break;}}if(!Z){Y[Y.length]=new A.Button({buttonEl:X[W]});}}},submitForm:function(){var T=this.get("form");if(T.submit!==null&&T.submit!==undefined){T.submit();}},_initializeEvents:function(){A.Event.attach("submit",this._onFormSubmit,this.get("form"),this,true);A.Event.attach("reset",this._onFormReset,this.get("form"),this,true);},_onFormSubmit:function(V){var U=this.get("onSubmit"),W=this.get("onSubmitScope"),T=true;if(U!==null&&U!==undefined){if(W!==null&&W!==undefined){W.anonymousCall=U;T=W.anonymousCall();W.anonymousCall=null;}else{T=U();}}if(!this.checkFormValues()){V.preventDefault();return;}else{if(!T){V.preventDefault();}}this.fire(O.CE_ONSUBMIT);},_onFormReset:function(U){var T=this;setTimeout(function(){T.checkFormValues();},100);this.checkFormValues();},onFormValueChanged:function(){var V=this.get("inputFields"),U=true,T;
for(T=0;T<V.length;++T){U=U&&V[T].isValid();}if(U){this.enableButtons();}else{this.disableButtons();}return U;},checkFormValues:function(){var V=this.get("inputFields"),U=true,T;for(T=0;T<V.length;++T){U=V[T].checkIndicators()&&U;}if(U){this.enableButtons();}else{this.disableButtons();}return U;},disableButtons:function(){if(this.get("checkOnSubmit")){return;}var U=this.get("buttons"),T;for(T=0;T<U.length;++T){U[T].disable();}},enableButtons:function(){var U=this.get("buttons"),T;for(T=0;T<U.length;++T){U[T].enable();}}});A.Validator=O;function F(T){F.superclass.constructor.apply(this,arguments);}F.ATTRS={buttonEl:{value:null,setter:function(U){var T=U;if(K.isString(U)){T=A.DOM.byId(U);}if(T===null||T===undefined){throw"Invalid button: Button with id "+U+" does not exist";}return T;}}};F.NAME="Button";A.extend(F,A.Base,{enable:function(){this.get("buttonEl").disabled=false;},disable:function(){this.get("buttonEl").disabled=true;}});A.Button=F;function E(){E.superclass.constructor.apply(this,arguments);this.publish(E.CE_ONCHANGE);this.checkPrompt();}A.augment(E,A.EventTarget);E.staticVariables={MAX_INTEGER:2147483647,INTEGERREGEX:/(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/,DOUBLEREGEX:/(^-?\d\d*\.\d+$)|(^-?\d\d*$)|(^-?\.\d\d*$)/,EMAILREGEX:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/};E.staticFunctions={standardRegexSetter:function(U){if(K.isString(U)){var T=U;if(T.indexOf("/")===0){T=T.substring(1);}if(T.charAt(T.length-1)=="/"){T=T.substring(0,T.length-1);}return new RegExp(T);}else{return U;}},standardElSetter:function(U){if(U===null||U===undefined){return null;}var T=U;if(K.isString(U)){T=A.DOM.byId(U);}if(T===null||T===undefined){return U;}else{return T;}},BOOLEANSETTER:function(T){if(K.isBoolean(T)){return T;}else{if(K.isString(T)){return T.toLowerCase()=="true";}else{return T!==null&&T!==undefined;}}}};E.ATTRS={createIncorrectIndicator:{value:false},createCorrectIndicator:{value:false},indicatorType:{value:null},correctIndicatorCss:{value:null},incorrectIndicatorCss:{value:null},correctIndicator:{value:null,setter:E.staticFunctions.standardElSetter},incorrectIndicatorText:{value:null},correctIndicatorText:{value:null},incorrectIndicator:{value:null,setter:E.staticFunctions.standardElSetter},correctCss:{value:null},incorrectCss:{value:null},disabled:{value:false},isOn:{value:true},optional:{value:false},validationPrompt:{value:null,setter:function(T){if(!K.isObject(T)){return null;}else{if(!T.el){return null;}else{if(!T.fn){T.fn=function(U,V){if(!V.isValid()&&!V.isEmpty()){U.style.display="";}else{U.style.display="none";}};}}}T.el=E.staticFunctions.standardElSetter(T.el);T.el.style.display="none";return T;}}};E.NAME="BaseInputField";E.CE_ONCHANGE="inputfield:onchanged";A.extend(E,A.Base,{initializeInput:function(T){},getInputDOM:function(){return null;},inputIsOn:function(){return this.get("isOn");},clear:function(T){},isGroup:function(){return false;},enable:function(){this.set("disabled",false);},disable:function(){this.set("disabled",true);},synchronize:function(V){var T=this.getAttrs(false),W,U;for(U in T){if(true){W=V.getAttribute("formvalidator:"+U);if(W!==null&&W!==undefined){this.set(U,W);}}}},isValid:function(){throw"Plesae override the isValid function";},turnOff:function(){this.set("isOn",false);this._evtOnChange();},turnOn:function(){this.set("isOn",true);this._evtOnChange();},checkIndicators:function(){},checkPrompt:function(){var T=this.get("validationPrompt"),V,U;if(!T){return;}if(!this.inputIsOn()){T.el.style.display="none";return;}V=T.scope||{};U=T.fn||function(){};U.call(V,T.el,this);},showCorrectIndicator:function(){},showIncorrectIndicator:function(){},showNoIndicators:function(){},setupIndicators:function(){var U=this.get("correctIndicator"),T=this.get("incorrectIndicator");if(this.get("createCorrectIndicator")){this.set("correctIndicator",this.setupDomItem(U,this.get("correctIndicatorText"),this.get("correctIndicatorCss")));}if(this.get("createIncorrectIndicator")){this.set("incorrectIndicator",this.setupDomItem(T,this.get("incorrectIndicatorText"),this.get("incorrectIndicatorCss")));}},setupDomItem:function(W,U,V){var T=W;if((T===null||T===undefined)||K.isString(T)){T=document.createElement(this.get("indicatorType"));if(W!==null&&W!==undefined){T.id=W;}this.insertBeside(T);T.innerHTML=U;}if((T.className===""||T.className===null||T.className===undefined)&&(V!==null&&V!==undefined)){T.className=V;}return T;},getId:function(){return null;},isEmpty:function(){throw"Plesae override the isEmpty function";},initializeEvents:function(T){},_evtOnChange:function(T){this.checkPrompt();this.checkIndicators();this.fire(E.CE_ONCHANGE);},insertBeside:function(T){},initializer:function(){},destructor:function(){}});A.BaseInputField=E;function Q(U,T){Q.superclass.constructor.apply(this,arguments);if(T){this.initializeInput();}this.get("textType");}Q.ATTRS={maxLength:{value:255,setter:function(T){if(T<0){return 255;}else{return T;}}},formatter:{value:null,setter:function(T){if(T===null||T===undefined){return null;}if(K.isFunction(T)){return T;}else{if(K.isObject(T)){if(T.format===null||T===undefined){throw"Formatter object must have a formatter function";}return T;}else{throw"Formatter must be an object or a function";}}}},regex:{value:null,setter:A.BaseInputField.staticFunctions.standardRegexSetter},textType:{lazy:false,value:null,setter:function(T){if(T===null||T===undefined){return null;}else{if(T.toLowerCase()=="email"){this.set("regex",A.BaseInputField.staticVariables.EMAILREGEX);}else{if(T.toLowerCase()=="phone"){this.set("regex",/^([(]?[2-9]\d{2}[)]?)[ ]*-?[ ]*(\d{3})[ ]*-?[ ]*(\d{4})$/);}else{if(T.toLowerCase()=="creditcard"){this.set("regex",/[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4} {0,1}[0-9]{4}/);}else{if(T.toLowerCase()=="zipcode"){this.set("regex",/^(\d{5})([\s]*-[\s]*\d{4})?$/);}else{if(T.toLowerCase()=="postalcode"){this.set("regex",/^[a-zA-Z]{1}[0-9]{1}[a-zA-Z]{1}[\s]*[0-9]{1}[a-zA-Z]{1}[0-9]{1}$/);}}}}}}return T;}},inputDOM:{value:null,setter:A.BaseInputField.staticFunctions.standardElSetter}};
Q.NAME="TextBaseField";A.extend(Q,A.BaseInputField,{initializeInput:function(){this.setupIndicators();},clear:function(T){this.get("inputDOM").value="";if(T!==true){this._evtOnChange();}},getInputDOM:function(){return this.get("inputDOM");},disable:function(){Q.superclass.disable.call(this);this.get("inputDOM").disabled=true;},enable:function(){Q.superclass.enable.call(this);this.get("inputDOM").disabled=false;},isValid:function(){if(!this.get("isOn")){return true;}if(this.get("optional")&&this.isEmpty()){return true;}var T=this.get("regex"),U=this.get("inputDOM").value;if((T!==null&&T!==undefined)&&(!T.test(U))){return false;}return !this.isEmpty()&&U.length<=this.get("maxLength");},getId:function(){return this.get("inputDOM").id;},isEmpty:function(){return(this.get("inputDOM").value==="");},checkFormat:function(){if(!this.isValid()){return;}if(!this.inputIsOn()){return;}var T=this.get("formatter"),U;if(T===null||T===undefined){return;}U=this.get("inputDOM");if(K.isFunction(T)){U.value=T(U.value);}else{U.value=T.format(U.value);}},checkIndicators:function(){if(!this.inputIsOn()){this.showNoIndicators();return true;}else{if(this.get("optional")&&this.isEmpty()){this.showNoIndicators();return true;}else{if(this.isValid()){this.showCorrectIndicator();this.checkFormat();return true;}else{this.showIncorrectIndicator();return false;}}}},showCorrectIndicator:function(){var T=this.get("inputDOM"),V=this.get("correctIndicator"),U=this.get("incorrectIndicator");this.checkFormat();A.DOM.removeClass(T,this.get("incorrectCss"));A.DOM.addClass(T,this.get("correctCss"));if(V!==null&&V!==undefined){V.style.display="";}if(U!==null&&U!==undefined){U.style.display="none";}},showIncorrectIndicator:function(){var T=this.get("inputDOM"),V=this.get("correctIndicator"),U=this.get("incorrectIndicator");A.DOM.addClass(T,this.get("incorrectCss"));A.DOM.removeClass(T,this.get("correctCss"));if(V!==null&&V!==undefined){V.style.display="none";}if(U!==null&&U!==undefined){U.style.display="";}},showNoIndicators:function(){var T=this.get("inputDOM"),V=this.get("correctIndicator"),U=this.get("incorrectIndicator");A.DOM.removeClass(T,this.get("incorrectCss"));A.DOM.removeClass(T,this.get("correctCss"));if(V!==null&&V!==undefined){V.style.display="none";}if(U!==null&&U!==undefined){U.style.display="none";}},insertBeside:function(T){if(A.DOM.insertAfter){A.DOM.insertAfter(T,this.get("inputDOM"));}else{A.DOM.addHTML(this.get("inputDOM"),T,"after");}},initializeEvents:function(U){var T=U;if(T===null||T===undefined){T=this;}A.Event.attach("keyup",T._evtOnChange,this.get("inputDOM"),T,true);A.Event.attach("blur",T._evtOnChange,this.get("inputDOM"),T,true);}});A.TextBaseField=Q;function N(T){N.superclass.constructor.apply(this,arguments);}N.ATTRS={inputDOM:{value:null,setter:A.BaseInputField.staticFunctions.standardElSetter},validWhenChecked:{value:true}};N.NAME="CheckboxField";A.extend(N,A.BaseInputField,{initializeInput:function(){this.setupIndicators();},getInputDOM:function(){return this.get("inputDOM");},clear:function(T){this.get("inputDOM").checked=!this.get("validWhenChecked");if(T!==true){this._evtOnChange();}},disable:function(){N.superclass.disable.call(this);this.get("inputDOM").disabled=true;},enable:function(){N.superclass.enable.call(this);this.get("inputDOM").disabled=false;},isValid:function(){if(!this.get("isOn")){return true;}var U=this.get("validWhenChecked"),T=this.get("inputDOM").checked;return(U&&T)||(!U&&!T);},getId:function(){return this.get("inputDOM").id;},isEmpty:function(){return !this.isValid();},showNoIndicators:function(){var V=this.get("inputDOM"),U=this.get("correctIndicator"),T=this.get("incorrectIndicator");A.DOM.removeClass(V,this.get("incorrectCss"));A.DOM.removeClass(V,this.get("correctCss"));if(U!==null&&U!==undefined){U.style.display="none";}if(T!==null&&T!==undefined){T.style.display="none";}},checkIndicators:function(){var V=this.get("inputDOM"),U=this.get("correctIndicator"),T=this.get("incorrectIndicator");if(!this.get("isOn")){this.showNoIndicators();return this.isValid();}else{if(this.isValid()){if(V!==null&&V!==undefined){A.DOM.removeClass(V,this.get("incorrectCss"));A.DOM.addClass(V,this.get("correctCss"));}if(U!==null&&U!==undefined){U.style.display="";}if(T!==null&&T!==undefined){T.style.display="none";}return true;}else{if(V!==null&&V!==undefined){A.DOM.addClass(V,this.get("incorrectCss"));A.DOM.removeClass(V,this.get("correctCss"));}if(U!==null&&U!==undefined){U.style.display="none";}if(T!==null&&T!==undefined){T.style.display="";}return false;}}},insertBeside:function(T){},initializeEvents:function(U){var T=U;if(T===null||T===undefined){T=this;}A.Event.attach("click",T._evtOnChange,this.get("inputDOM"),T,true);}});A.CheckboxField=N;function P(T){P.superclass.constructor.apply(this,arguments);}P.ATTRS={validatorObject:{setter:function(U){if(U===null||U===undefined){throw"You must provide a validator object to the custom input";}var T=null;if(K.isString(U)){T=validatorGlobal[U];}else{if(K.isFunction(U)){T=U();}else{if(K.isObject(U)){T=U;}}}if(T===null||T===undefined){throw"Your validator object must be a object";}else{return T;}}},id:{value:null}};P.NAME="CustomField";A.extend(P,A.BaseInputField,{checkIndicators:function(){var U=this.get("correctIndicator"),T=this.get("incorrectIndicator");if(this.isValid()){if(U!==null&&U!==undefined){U.style.display="";}if(T!==null&&T!==undefined){T.style.display="none";}return true;}else{if(U!==null&&U!==undefined){U.style.display="none";}if(T!==null&&T!==undefined){T.style.display="";}return false;}},getId:function(){var T=this.get("id");if(T===null||T===undefined){T=this.executeFunction("getId",null);}return T;},executeFunction:function(U,T){var V=this.get("validatorObject");if(K.isFunction(V[U])){return V[U]();}return T;},executeVoidFunction:function(T){var U=this.get("validatorObject");if(K.isFunction(U[T])){U[T]();}},disable:function(){P.superclass.disable.call(this);this.executeVoidFunction("disable");},enable:function(){P.superclass.enable.call(this);
this.executeVoidFunction("enable");},turnOff:function(){P.superclass.turnOff.call(this);this.executeVoidFunction("turnOff");},turnOn:function(){P.superclass.turnOn.call(this);this.executeVoidFunction("turnOn");},clear:function(T){var U=this.get("validatorObject");if(K.isFunction(U.clear)){U.clear(T);}if(T!==true){this._evtOnChange();}},isEmpty:function(){return this.executeFunction("isEmpty",false);},isValid:function(){return this.executeFunction("isValid",false);},insertBeside:function(T){var U=this.get("validatorObject");if(K.isFunction(U.insertBeside)){U.insertBeside(T);}}});A.CustomField=P;function B(T){B.superclass.constructor.apply(this,arguments);this.set("regex",A.BaseInputField.staticVariables.DOUBLEREGEX);}B.ATTRS={minInclusive:{value:true,setter:A.BaseInputField.staticFunctions.BOOLEANSETTER},maxInclusive:{value:true,setter:A.BaseInputField.staticFunctions.BOOLEANSETTER},min:{value:0,setter:function(U){var T=U;if(!K.isNumber(T)){T=parseFloat(T);}if(!K.isNumber(T)){throw"Invalid value given for min: "+U;}if(T<(-1)*A.BaseInputField.staticVariables.MAX_INTEGER){return(-1)*A.BaseInputField.staticVariables.MAX_INTEGER;}return T;}},max:{value:A.BaseInputField.staticVariables.MAX_INTEGER,setter:function(U){var T=U;if(!K.isNumber(T)){T=parseFloat(T);}if(!K.isNumber(T)){throw"Invalid value given for max: "+U;}if(T>A.BaseInputField.staticVariables.MAX_INTEGER){return A.BaseInputField.staticVariables.MAX_INTEGER;}return T;}},maxDecimalPlaces:{value:-1,setter:function(U){var T=U;if(!K.isNumber(T)){T=parseInt(T,10);}if(!K.isNumber(T)){throw"Invalid value given for decimal places: "+U;}else{return U;}}}};B.NAME="DoubleField";A.extend(B,A.TextBaseField,{isValid:function(){if(!B.superclass.isValid.call(this)){return false;}else{if(this.get("optional")&&this.isEmpty()){return true;}}var a=this.get("inputDOM").value,W=0,b,V,X,Z,U,T=this.get("maxDecimalPlaces");if((T!=-1)&&(a.indexOf(".")!=-1)){U=a.split(".")[1];if(U.length>T){return false;}}try{W=parseFloat(a,10);}catch(Y){return false;}if(W.toString()===null||W.toString()===undefined){return false;}if(W.toString().toLowerCase()=="nan"){return false;}b=this.get("minInclusive");V=this.get("maxInclusive");X=this.get("min");Z=this.get("max");if(b&&(X>W)){return false;}else{if(!b&&(X>=W)){return false;}else{if(V&&(Z<W)){return false;}else{if(!V&&(Z<=W)){return false;}else{return true;}}}}}});A.DoubleField=B;function R(T){R.superclass.constructor.apply(this,arguments);this.set("regex",A.BaseInputField.staticVariables.INTEGERREGEX);}R.ATTRS={};R.NAME="IntegerField";A.extend(R,A.DoubleField,{isValid:function(){if(!R.superclass.isValid.call(this)){return false;}else{if(this.get("optional")&&this.isEmpty()){return true;}}var U=this.get("inputDOM").value,T=0;if(U.indexOf(".")!=-1){return false;}try{T=parseInt(U,10);}catch(V){return false;}if(T.toString().toLowerCase()=="nan"){return false;}else{return true;}}});A.IntegerField=R;function J(T){J.superclass.constructor.apply(this,arguments);}J.ATTRS={groupDOM:{value:null,setter:A.BaseInputField.staticFunctions.standardElSetter},membersJSON:{value:[]},members:{value:[],setter:function(T){if(K.isArray(T)){return T;}else{throw"The members property of a group must be an array";}}},minValid:{value:null,setter:function(V){if(V===null||V===undefined){return null;}var U=V,T;if(!K.isNumber(U)){U=parseInt(U,10);}if(U<1){throw"The minimum must be greater than 1";}T=this.get("maxValid");if((T!==null&&T!==undefined)&&(U>T)){throw"Minimum must be less than or equal to maximum";}else{return U;}}},maxValid:{value:null,setter:function(U){if(U===null||U===undefined){return null;}if(U<1){throw"The maximum must be greater than 1";}var T=this.get("minValid");if((T!==null&&T!==undefined)&&(U<T)){throw"Maximum must be greater than or equal to minimum";}else{return U;}}},id:{value:null}};J.NAME="GroupBaseField";A.extend(J,A.BaseInputField,{isGroup:function(){return true;},getInputDOM:function(){return this.get("groupDOM");},getInput:function(W){var T=this.get("members"),V,U;for(U=0;U<T.length;++U){if(T[U].getId()==W){return T[U];}if(T[U].isGroup()){V=T[U].getInput(W);if(V!==null&&V!==undefined){return V;}}}return null;},clear:function(U){var T=this.get("members"),V;for(V=0;V<T.length;++V){T[V].clear(true);}if(U!==true){this._evtOnChange();}},disable:function(){J.superclass.disable.call(this);var T=this.get("members"),U;for(U=0;U<T.length;++U){T[U].disable();}},enable:function(){J.superclass.enable.call(this);var T=this.get("members"),U;for(U=0;U<T.length;++U){T[U].enable();}},turnOn:function(){J.superclass.turnOn.call(this);var T=this.get("members"),U;for(U=0;U<T.length;++U){T[U].turnOn();}this.checkIndicators();},turnOff:function(){J.superclass.turnOff.call(this);var T=this.get("members"),U;for(U=0;U<T.length;++U){T[U].turnOff();}},initializeInput:function(V){var W=this.get("membersJSON"),T=this.get("members"),X,U;for(U=0;U<W.length;++U){X=new W[U].type(W[U].atts,false);V.setupInput(X);T[T.length]=X;}this.setupIndicators();this.checkIndicators();},addInput:function(U){var T=this.get("members");T[T.length]=U;},isValid:function(){if(this.get("optional")&&this.isEmpty()){return true;}var V=this.get("members"),U=0,Z=this.get("isOn"),a=true,X,T,b,Y,W;for(W=0;W<V.length;++W){X=V[W].isEmpty();T=V[W].isValid();if(!X&&T){U++;}else{if(!X){return !Z;}}}if(Z){b=this.get("minValid");Y=this.get("maxValid");if(b!==null&&b!==undefined){a=b<=U;}if(Y!==null&&Y!==undefined){a=(Y>=U)&&a;}}return a;},getId:function(){var U=this.get("id"),T;if(U!==null&&U!==undefined){return U;}T=this.get("groupDOM");if(T!==null&&T!==undefined){return T.id;}else{return null;}},isEmpty:function(){var T=this.get("members"),U;for(U=0;U<T.length;++U){if(!T[U].isEmpty()){return false;}}return true;},showCorrectIndicator:function(){var U=this.get("groupDOM"),V=this.get("correctIndicator"),T=this.get("incorrectIndicator");if(U!==null&&U!==undefined){A.DOM.removeClass(U,this.get("incorrectCss"));A.DOM.addClass(U,this.get("correctCss"));}if(V!==null&&V!==undefined){V.style.display="";
}if(T!==null&&T!==undefined){T.style.display="none";}},showIncorrectIndicator:function(){var U=this.get("groupDOM"),V=this.get("correctIndicator"),T=this.get("incorrectIndicator");if(U!==null&&U!==undefined){A.DOM.addClass(U,this.get("incorrectCss"));A.DOM.removeClass(U,this.get("correctCss"));}if(V!==null&&V!==undefined){V.style.display="none";}if(T!==null&&T!==undefined){T.style.display="";}},showNoIndicators:function(){var U=this.get("groupDOM"),V=this.get("correctIndicator"),T=this.get("incorrectIndicator");if(U!==null&&U!==undefined){A.DOM.removeClass(U,this.get("incorrectCss"));A.DOM.removeClass(U,this.get("correctCss"));}if(V!==null&&V!==undefined){V.style.display="none";}if(T!==null&&T!==undefined){T.style.display="none";}},checkIndicators:function(){var W=this.get("members"),U=0,V=false,a=this.get("isOn"),Y,X,T,b=true,c,Z;for(X=0;X<W.length;++X){Y=W[X].isEmpty();T=W[X].isValid();if(!a){W[X].showNoIndicators();}else{if(this.get("optional")&&this.isEmpty()){W[X].showNoIndicators();}else{if(!Y&&T){U++;W[X].showCorrectIndicator();}else{if(!Y){W[X].showIncorrectIndicator();V=true;}else{W[X].showNoIndicators();}}}}}if(!V){c=this.get("minValid");Z=this.get("maxValid");if(c!==null&&c!==undefined){b=c<=U;}if(Z!==null&&Z!==undefined){b=(Z>=U)&&b;}}else{b=false;}if(!a){this.showNoIndicators();return true;}else{if(this.get("optional")&&this.isEmpty()){this.showNoIndicators();return true;}else{if(b){this.showCorrectIndicator();return true;}else{this.showIncorrectIndicator();return false;}}}},insertBeside:function(T){},initializeEvents:function(W){var V=W,T=this.get("members"),U;if(V===null||V===undefined){V=this;}for(U=0;U<T.length;++U){T[U].initializeEvents(V);}}});A.GroupBaseField=J;function S(T){S.superclass.constructor.apply(this,arguments);}S.staticVariables={StrongPassword:/^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\W).*$/,MediumPassword:/^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$/,MinimumPassword:/(?=.{6,}).*/};S.ATTRS={requiredLevel:{value:2,setter:function(T){if(T===null||T===undefined){return"med";}if(K.isNumber(T)){return T;}else{if(K.isString(T)){if(T!="min"&&T!="med"&&T!="max"){throw"Invalid level requirement, please use min, med or max";}if(T=="min"){return 1;}else{if(T=="med"){return 2;}else{if(T=="max"){return 3;}else{return 2;}}}}}throw"Invalid level requirement, please use min, med or max";}},minIndicator:{value:null,setter:A.BaseInputField.staticFunctions.standardElSetter},medIndicator:{value:null,setter:A.BaseInputField.staticFunctions.standardElSetter},maxIndicator:{value:null,setter:A.BaseInputField.staticFunctions.standardElSetter},min:{value:S.staticVariables.MinimumPassword,setter:A.BaseInputField.staticFunctions.standardRegexSetter},med:{value:S.staticVariables.MediumPassword,setter:A.BaseInputField.staticFunctions.standardRegexSetter},max:{value:S.staticVariables.StrongPassword,setter:A.BaseInputField.staticFunctions.standardRegexSetter}};S.NAME="PasswordField";A.extend(S,A.TextBaseField,{isValid:function(){if(!this.get("isOn")){return true;}else{if(this.get("optional")&&this.isEmpty()){return true;}}var U=this.get("requiredLevel"),T=this.getMatchedLevel();return U<=T;},getMatchedLevel:function(){var T=this.get("inputDOM").value;if(this.get("max").test(T)){return 3;}else{if(this.get("med").test(T)){return 2;}else{if(this.get("min").test(T)){return 1;}else{return 0;}}}},showPasswordIndicator:function(){var T=this.get("maxIndicator"),W=this.get("medIndicator"),V=this.get("minIndicator"),U=this.getMatchedLevel();if(T!==null&&T!==undefined){T.style.display="none";}if(W!==null&&W!==undefined){W.style.display="none";}if(V!==null&&V!==undefined){V.style.display="none";}if(!this.get("isOn")){return;}else{if(this.get("optional")&&this.isEmpty()){return;}}if((U==3)&&(T!==null&&T!==undefined)){T.style.display="";}else{if((U==2)&&(W!==null&&W!==undefined)){W.style.display="";}else{if((U==1)&&(V!==null&&V!==undefined)){V.style.display="";}}}},checkIndicators:function(){var T=S.superclass.checkIndicators.call(this);this.showPasswordIndicator();return T;},showCorrectIndicator:function(){S.superclass.showCorrectIndicator.call(this);this.showPasswordIndicator();},showIncorrectIndicator:function(){S.superclass.showIncorrectIndicator.call(this);this.showPasswordIndicator();},showNoIndicators:function(){S.superclass.showNoIndicators.call(this);this.showPasswordIndicator();}});A.PasswordField=S;function I(T){I.superclass.constructor.apply(this,arguments);}I.ATTRS={matchDOM:{value:null,setter:A.BaseInputField.staticFunctions.standardElSetter},caseSensitive:{value:true,setter:A.BaseInputField.staticFunctions.BOOLEANSETTER}};I.NAME="MatchField";A.extend(I,A.TextBaseField,{isValid:function(){if(!this.get("isOn")){return true;}else{if(this.get("optional")&&this.isEmpty()){return true;}}var T=this.get("matchDOM"),U=this.get("inputDOM");if(this.isEmpty()){return false;}if(this.get("caseSensitive")){return T.value==U.value;}else{return T.value.toLowerCase()==U.value.toLowerCase();}}});A.MatchField=I;function H(T){H.superclass.constructor.apply(this,arguments);}H.ATTRS={emptyValue:{value:"",setter:function(T){if(T===null||T===undefined){return"";}else{return T;}}}};H.NAME="SelectField";A.extend(H,A.TextBaseField,{isEmpty:function(){var T=this.get("inputDOM").value;return T==this.get("emptyValue");},clear:function(T){this.get("inputDOM").value=this.get("emptyValue");if(T!==true){this._evtOnChange();}},isValid:function(){if(!this.get("isOn")){return true;}else{if(this.get("optional")&&this.isEmpty()){return true;}}var T=this.get("inputDOM").value;return T!=this.get("emptyValue");},initializeEvents:function(U){var T=U;if(T===null||T===undefined){T=this;}A.Event.attach("change",T._evtOnChange,this.get("inputDOM"),T,true);}});A.SelectField=H;},"gallery-2010.06.09-20-45",{requires:["node","event","dom","base"]});