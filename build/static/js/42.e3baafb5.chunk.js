(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{1614:function(e,t,n){e.exports=function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e,r,o){return(n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=Function.bind.apply(e,o),i=new a;return r&&t(i,r.prototype),i}).apply(null,arguments)}function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=Object.hasOwnProperty,i=Object.setPrototypeOf,l=Object.isFrozen,c=Object.getPrototypeOf,s=Object.getOwnPropertyDescriptor,u=Object.freeze,m=Object.seal,f=Object.create,p="undefined"!==typeof Reflect&&Reflect,d=p.apply,h=p.construct;d||(d=function(e,t,n){return e.apply(t,n)}),u||(u=function(e){return e}),m||(m=function(e){return e}),h||(h=function(e,t){return n(e,r(t))});var g,y=k(Array.prototype.forEach),b=k(Array.prototype.pop),T=k(Array.prototype.push),v=k(String.prototype.toLowerCase),N=k(String.prototype.toString),E=k(String.prototype.match),A=k(String.prototype.replace),w=k(String.prototype.indexOf),S=k(String.prototype.trim),_=k(RegExp.prototype.test),x=(g=TypeError,function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return h(g,t)});function k(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return d(e,t,r)}}function O(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:v,i&&i(e,null);for(var o=t.length;o--;){var a=t[o];if("string"===typeof a){var c=n(a);c!==a&&(l(t)||(t[o]=c),a=c)}e[a]=!0}return e}function L(e){var t,n=f(null);for(t in e)!0===d(a,e,[t])&&(n[t]=e[t]);return n}function C(e,t){for(;null!==e;){var n=s(e,t);if(n){if(n.get)return k(n.get);if("function"===typeof n.value)return k(n.value)}e=c(e)}return function(e){return console.warn("fallback value for",e),null}}var R=u(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),D=u(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),M=u(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),I=u(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),F=u(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),U=u(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),H=u(["#text"]),z=u(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),P=u(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),B=u(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),j=u(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),G=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),W=m(/<%[\w\W]*|[\w\W]*%>/gm),q=m(/\${[\w\W]*}/gm),$=m(/^data-[\-\w.\u00B7-\uFFFF]+$/),Y=m(/^aria-[\-\w]+$/),K=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),V=m(/^(?:\w+script|data):/i),X=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),J=m(/^html$/i),Z=m(/^[a-z][.\w]*(-[.\w]+)+$/i),Q=function(){return"undefined"===typeof window?null:window},ee=function(t,n){if("object"!==e(t)||"function"!==typeof t.createPolicy)return null;var r=null;n.currentScript&&n.currentScript.hasAttribute("data-tt-policy-suffix")&&(r=n.currentScript.getAttribute("data-tt-policy-suffix"));var o="dompurify"+(r?"#"+r:"");try{return t.createPolicy(o,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(a){return console.warn("TrustedTypes policy "+o+" could not be created."),null}};return function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q(),o=function(e){return t(e)};if(o.version="2.5.8",o.removed=[],!n||!n.document||9!==n.document.nodeType)return o.isSupported=!1,o;var a=n.document,i=n.document,l=n.DocumentFragment,c=n.HTMLTemplateElement,s=n.Node,m=n.Element,f=n.NodeFilter,p=n.NamedNodeMap,d=void 0===p?n.NamedNodeMap||n.MozNamedAttrMap:p,h=n.HTMLFormElement,g=n.DOMParser,k=n.trustedTypes,te=m.prototype,ne=C(te,"cloneNode"),re=C(te,"nextSibling"),oe=C(te,"childNodes"),ae=C(te,"parentNode");if("function"===typeof c){var ie=i.createElement("template");ie.content&&ie.content.ownerDocument&&(i=ie.content.ownerDocument)}var le=ee(k,a),ce=le?le.createHTML(""):"",se=i,ue=se.implementation,me=se.createNodeIterator,fe=se.createDocumentFragment,pe=se.getElementsByTagName,de=a.importNode,he={};try{he=L(i).documentMode?i.documentMode:{}}catch(Dt){}var ge={};o.isSupported="function"===typeof ae&&ue&&void 0!==ue.createHTMLDocument&&9!==he;var ye,be,Te=G,ve=W,Ne=q,Ee=$,Ae=Y,we=V,Se=X,_e=Z,xe=K,ke=null,Oe=O({},[].concat(r(R),r(D),r(M),r(F),r(H))),Le=null,Ce=O({},[].concat(r(z),r(P),r(B),r(j))),Re=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,Me=null,Ie=!0,Fe=!0,Ue=!1,He=!0,ze=!1,Pe=!0,Be=!1,je=!1,Ge=!1,We=!1,qe=!1,$e=!1,Ye=!0,Ke=!1,Ve=!0,Xe=!1,Je={},Ze=null,Qe=O({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),et=null,tt=O({},["audio","video","img","source","image","track"]),nt=null,rt=O({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ot="http://www.w3.org/1998/Math/MathML",at="http://www.w3.org/2000/svg",it="http://www.w3.org/1999/xhtml",lt=it,ct=!1,st=null,ut=O({},[ot,at,it],N),mt=["application/xhtml+xml","text/html"],ft=null,pt=i.createElement("form"),dt=function(e){return e instanceof RegExp||e instanceof Function},ht=function(t){ft&&ft===t||(t&&"object"===e(t)||(t={}),t=L(t),ye=ye=-1===mt.indexOf(t.PARSER_MEDIA_TYPE)?"text/html":t.PARSER_MEDIA_TYPE,be="application/xhtml+xml"===ye?N:v,ke="ALLOWED_TAGS"in t?O({},t.ALLOWED_TAGS,be):Oe,Le="ALLOWED_ATTR"in t?O({},t.ALLOWED_ATTR,be):Ce,st="ALLOWED_NAMESPACES"in t?O({},t.ALLOWED_NAMESPACES,N):ut,nt="ADD_URI_SAFE_ATTR"in t?O(L(rt),t.ADD_URI_SAFE_ATTR,be):rt,et="ADD_DATA_URI_TAGS"in t?O(L(tt),t.ADD_DATA_URI_TAGS,be):tt,Ze="FORBID_CONTENTS"in t?O({},t.FORBID_CONTENTS,be):Qe,De="FORBID_TAGS"in t?O({},t.FORBID_TAGS,be):{},Me="FORBID_ATTR"in t?O({},t.FORBID_ATTR,be):{},Je="USE_PROFILES"in t&&t.USE_PROFILES,Ie=!1!==t.ALLOW_ARIA_ATTR,Fe=!1!==t.ALLOW_DATA_ATTR,Ue=t.ALLOW_UNKNOWN_PROTOCOLS||!1,He=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,ze=t.SAFE_FOR_TEMPLATES||!1,Pe=!1!==t.SAFE_FOR_XML,Be=t.WHOLE_DOCUMENT||!1,We=t.RETURN_DOM||!1,qe=t.RETURN_DOM_FRAGMENT||!1,$e=t.RETURN_TRUSTED_TYPE||!1,Ge=t.FORCE_BODY||!1,Ye=!1!==t.SANITIZE_DOM,Ke=t.SANITIZE_NAMED_PROPS||!1,Ve=!1!==t.KEEP_CONTENT,Xe=t.IN_PLACE||!1,xe=t.ALLOWED_URI_REGEXP||xe,lt=t.NAMESPACE||it,Re=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&dt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Re.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&dt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Re.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"===typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Re.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ze&&(Fe=!1),qe&&(We=!0),Je&&(ke=O({},r(H)),Le=[],!0===Je.html&&(O(ke,R),O(Le,z)),!0===Je.svg&&(O(ke,D),O(Le,P),O(Le,j)),!0===Je.svgFilters&&(O(ke,M),O(Le,P),O(Le,j)),!0===Je.mathMl&&(O(ke,F),O(Le,B),O(Le,j))),t.ADD_TAGS&&(ke===Oe&&(ke=L(ke)),O(ke,t.ADD_TAGS,be)),t.ADD_ATTR&&(Le===Ce&&(Le=L(Le)),O(Le,t.ADD_ATTR,be)),t.ADD_URI_SAFE_ATTR&&O(nt,t.ADD_URI_SAFE_ATTR,be),t.FORBID_CONTENTS&&(Ze===Qe&&(Ze=L(Ze)),O(Ze,t.FORBID_CONTENTS,be)),Ve&&(ke["#text"]=!0),Be&&O(ke,["html","head","body"]),ke.table&&(O(ke,["tbody"]),delete De.tbody),u&&u(t),ft=t)},gt=O({},["mi","mo","mn","ms","mtext"]),yt=O({},["annotation-xml"]),bt=O({},["title","style","font","a","script"]),Tt=O({},D);O(Tt,M),O(Tt,I);var vt=O({},F);O(vt,U);var Nt=function(e){T(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch(Dt){try{e.outerHTML=ce}catch(Dt){e.remove()}}},Et=function(e,t){try{T(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch(Dt){T(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Le[e])if(We||qe)try{Nt(t)}catch(Dt){}else try{t.setAttribute(e,"")}catch(Dt){}},At=function(e){var t,n;if(Ge)e="<remove></remove>"+e;else{var r=E(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ye&&lt===it&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=le?le.createHTML(e):e;if(lt===it)try{t=(new g).parseFromString(o,ye)}catch(Dt){}if(!t||!t.documentElement){t=ue.createDocument(lt,"template",null);try{t.documentElement.innerHTML=ct?ce:o}catch(Dt){}}var a=t.body||t.documentElement;return e&&n&&a.insertBefore(i.createTextNode(n),a.childNodes[0]||null),lt===it?pe.call(t,Be?"html":"body")[0]:Be?t.documentElement:a},wt=function(e){return me.call(e.ownerDocument||e,e,f.SHOW_ELEMENT|f.SHOW_COMMENT|f.SHOW_TEXT|f.SHOW_PROCESSING_INSTRUCTION|f.SHOW_CDATA_SECTION,null,!1)},St=function(e){return e instanceof h&&("string"!==typeof e.nodeName||"string"!==typeof e.textContent||"function"!==typeof e.removeChild||!(e.attributes instanceof d)||"function"!==typeof e.removeAttribute||"function"!==typeof e.setAttribute||"string"!==typeof e.namespaceURI||"function"!==typeof e.insertBefore||"function"!==typeof e.hasChildNodes)},_t=function(t){return"object"===e(s)?t instanceof s:t&&"object"===e(t)&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName},xt=function(e,t,n){ge[e]&&y(ge[e],function(e){e.call(o,t,n,ft)})},kt=function(e){var t;if(xt("beforeSanitizeElements",e,null),St(e))return Nt(e),!0;if(_(/[\u0080-\uFFFF]/,e.nodeName))return Nt(e),!0;var n=be(e.nodeName);if(xt("uponSanitizeElement",e,{tagName:n,allowedTags:ke}),e.hasChildNodes()&&!_t(e.firstElementChild)&&(!_t(e.content)||!_t(e.content.firstElementChild))&&_(/<[/\w]/g,e.innerHTML)&&_(/<[/\w]/g,e.textContent))return Nt(e),!0;if("select"===n&&_(/<template/i,e.innerHTML))return Nt(e),!0;if(7===e.nodeType)return Nt(e),!0;if(Pe&&8===e.nodeType&&_(/<[/\w]/g,e.data))return Nt(e),!0;if(!ke[n]||De[n]){if(!De[n]&&Lt(n)){if(Re.tagNameCheck instanceof RegExp&&_(Re.tagNameCheck,n))return!1;if(Re.tagNameCheck instanceof Function&&Re.tagNameCheck(n))return!1}if(Ve&&!Ze[n]){var r=ae(e)||e.parentNode,a=oe(e)||e.childNodes;if(a&&r)for(var i=a.length,l=i-1;l>=0;--l){var c=ne(a[l],!0);c.__removalCount=(e.__removalCount||0)+1,r.insertBefore(c,re(e))}}return Nt(e),!0}return e instanceof m&&!function(e){var t=ae(e);t&&t.tagName||(t={namespaceURI:lt,tagName:"template"});var n=v(e.tagName),r=v(t.tagName);return!!st[e.namespaceURI]&&(e.namespaceURI===at?t.namespaceURI===it?"svg"===n:t.namespaceURI===ot?"svg"===n&&("annotation-xml"===r||gt[r]):Boolean(Tt[n]):e.namespaceURI===ot?t.namespaceURI===it?"math"===n:t.namespaceURI===at?"math"===n&&yt[r]:Boolean(vt[n]):e.namespaceURI===it?!(t.namespaceURI===at&&!yt[r])&&!(t.namespaceURI===ot&&!gt[r])&&!vt[n]&&(bt[n]||!Tt[n]):!("application/xhtml+xml"!==ye||!st[e.namespaceURI]))}(e)?(Nt(e),!0):"noscript"!==n&&"noembed"!==n&&"noframes"!==n||!_(/<\/no(script|embed|frames)/i,e.innerHTML)?(ze&&3===e.nodeType&&(t=e.textContent,t=A(t,Te," "),t=A(t,ve," "),t=A(t,Ne," "),e.textContent!==t&&(T(o.removed,{element:e.cloneNode()}),e.textContent=t)),xt("afterSanitizeElements",e,null),!1):(Nt(e),!0)},Ot=function(e,t,n){if(Ye&&("id"===t||"name"===t)&&(n in i||n in pt))return!1;if(Fe&&!Me[t]&&_(Ee,t));else if(Ie&&_(Ae,t));else if(!Le[t]||Me[t]){if(!(Lt(e)&&(Re.tagNameCheck instanceof RegExp&&_(Re.tagNameCheck,e)||Re.tagNameCheck instanceof Function&&Re.tagNameCheck(e))&&(Re.attributeNameCheck instanceof RegExp&&_(Re.attributeNameCheck,t)||Re.attributeNameCheck instanceof Function&&Re.attributeNameCheck(t))||"is"===t&&Re.allowCustomizedBuiltInElements&&(Re.tagNameCheck instanceof RegExp&&_(Re.tagNameCheck,n)||Re.tagNameCheck instanceof Function&&Re.tagNameCheck(n))))return!1}else if(nt[t]);else if(_(xe,A(n,Se,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==w(n,"data:")||!et[e])if(Ue&&!_(we,A(n,Se,"")));else if(n)return!1;return!0},Lt=function(e){return"annotation-xml"!==e&&E(e,_e)},Ct=function(t){var n,r,a,i;xt("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l&&!St(t)){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Le};for(i=l.length;i--;){var s=n=l[i],u=s.name,m=s.namespaceURI;if(r="value"===u?n.value:S(n.value),a=be(u),c.attrName=a,c.attrValue=r,c.keepAttr=!0,c.forceKeepAttr=void 0,xt("uponSanitizeAttribute",t,c),r=c.attrValue,!c.forceKeepAttr&&(Et(u,t),c.keepAttr))if(He||!_(/\/>/i,r)){ze&&(r=A(r,Te," "),r=A(r,ve," "),r=A(r,Ne," "));var f=be(t.nodeName);if(Ot(f,a,r))if(!Ke||"id"!==a&&"name"!==a||(Et(u,t),r="user-content-"+r),Pe&&_(/((--!?|])>)|<\/(style|title)/i,r))Et(u,t);else{if(le&&"object"===e(k)&&"function"===typeof k.getAttributeType)if(m);else switch(k.getAttributeType(f,a)){case"TrustedHTML":r=le.createHTML(r);break;case"TrustedScriptURL":r=le.createScriptURL(r)}try{m?t.setAttributeNS(m,u,r):t.setAttribute(u,r),St(t)?Nt(t):b(o.removed)}catch(Dt){}}}else Et(u,t)}xt("afterSanitizeAttributes",t,null)}},Rt=function e(t){var n,r=wt(t);for(xt("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)xt("uponSanitizeShadowNode",n,null),kt(n),Ct(n),n.content instanceof l&&e(n.content);xt("afterSanitizeShadowDOM",t,null)};return o.sanitize=function(t){var r,i,c,u,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ct=!t)&&(t="\x3c!--\x3e"),"string"!==typeof t&&!_t(t)){if("function"!==typeof t.toString)throw x("toString is not a function");if("string"!==typeof(t=t.toString()))throw x("dirty is not a string, aborting")}if(!o.isSupported){if("object"===e(n.toStaticHTML)||"function"===typeof n.toStaticHTML){if("string"===typeof t)return n.toStaticHTML(t);if(_t(t))return n.toStaticHTML(t.outerHTML)}return t}if(je||ht(f),o.removed=[],"string"===typeof t&&(Xe=!1),Xe){if(t.nodeName){var p=be(t.nodeName);if(!ke[p]||De[p])throw x("root node is forbidden and cannot be sanitized in-place")}}else if(t instanceof s)r=At("\x3c!----\x3e"),1===(i=r.ownerDocument.importNode(t,!0)).nodeType&&"BODY"===i.nodeName?r=i:"HTML"===i.nodeName?r=i:r.appendChild(i);else{if(!We&&!ze&&!Be&&-1===t.indexOf("<"))return le&&$e?le.createHTML(t):t;if(!(r=At(t)))return We?null:$e?ce:""}r&&Ge&&Nt(r.firstChild);for(var d=wt(Xe?t:r);c=d.nextNode();)3===c.nodeType&&c===u||(kt(c),Ct(c),c.content instanceof l&&Rt(c.content),u=c);if(u=null,Xe)return t;if(We){if(qe)for(m=fe.call(r.ownerDocument);r.firstChild;)m.appendChild(r.firstChild);else m=r;return(Le.shadowroot||Le.shadowrootmod)&&(m=de.call(a,m,!0)),m}var h=Be?r.outerHTML:r.innerHTML;return Be&&ke["!doctype"]&&r.ownerDocument&&r.ownerDocument.doctype&&r.ownerDocument.doctype.name&&_(J,r.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+r.ownerDocument.doctype.name+">\n"+h),ze&&(h=A(h,Te," "),h=A(h,ve," "),h=A(h,Ne," ")),le&&$e?le.createHTML(h):h},o.setConfig=function(e){ht(e),je=!0},o.clearConfig=function(){ft=null,je=!1},o.isValidAttribute=function(e,t,n){ft||ht({});var r=be(e),o=be(t);return Ot(r,o,n)},o.addHook=function(e,t){"function"===typeof t&&(ge[e]=ge[e]||[],T(ge[e],t))},o.removeHook=function(e){if(ge[e])return b(ge[e])},o.removeHooks=function(e){ge[e]&&(ge[e]=[])},o.removeAllHooks=function(){ge={}},o}()}()}}]);
//# sourceMappingURL=42.e3baafb5.chunk.js.map