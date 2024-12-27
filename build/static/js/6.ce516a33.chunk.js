(this["webpackJsonpglobits-react"]=this["webpackJsonpglobits-react"]||[]).push([[6],{1721:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(1339),s=a(1473),o=a(1328),c=a(1329),i=a(1294),m=a(8),d=a(121),u=a(119);let p=!1;t.a=Object(i.a)({},{withTheme:!0})(Object(d.b)(e=>({settings:e.layout.settings,getCartList:m.PropTypes.func.isRequired,deleteProductFromCart:m.PropTypes.func.isRequired,updateCartAmount:m.PropTypes.func.isRequired,cartList:e.ecommerce.cartList,user:e.user}),{getCartList:u.j,deleteProductFromCart:u.i,updateCartAmount:u.k})((function(e){const{container:t,theme:a,settings:n,cartList:i=[],getCartList:m,deleteProductFromCart:d,updateCartAmount:u,user:h}=e,[g,b]=l.a.useState(!1);return p||(m(h.userId),p=!0),a.palette,l.a.createElement(r.a,{theme:n.themes[n.activeTheme]},l.a.createElement(s.a,{container:t,variant:"temporary",anchor:"right",open:g,onClose:function(){b(!g)},ModalProps:{keepMounted:!0}},l.a.createElement("div",{className:"mini-cart"},l.a.createElement("div",{className:"cart__topbar flex flex-middle p-16 mb-24"},l.a.createElement(o.a,{color:"primary"},"shopping_cart"),l.a.createElement("h5",{className:"ml-8 my-0 font-weight-500"},"Cart")),i.map(e=>l.a.createElement("div",{key:e.id,className:"mini-cart__item flex flex-middle flex-space-between py-16 px-8"},l.a.createElement("div",{className:"flex flex-column mr-8"},l.a.createElement(c.a,{size:"small",onClick:()=>u(h.userId,e.id,e.amount+1)},l.a.createElement(o.a,{className:"cursor-pointer"},"keyboard_arrow_up")),l.a.createElement(c.a,{disabled:!(e.amount-1),size:"small",onClick:()=>u(h.userId,e.id,e.amount-1)},l.a.createElement(o.a,{className:"cursor-pointer"},"keyboard_arrow_down"))),l.a.createElement("div",{className:"mr-8"},l.a.createElement("img",{src:e.imgUrl,alt:e.title})),l.a.createElement("div",{className:"mr-8 text-center"},l.a.createElement("h6",{className:"m-0 mb-4"},e.title),l.a.createElement("small",{className:"text-muted"},"$",e.price," x ",e.amount)),l.a.createElement(c.a,{size:"small",onClick:()=>d(h.userId,e.id)},l.a.createElement(o.a,{fontSize:"small"},"clear")))))))})))},1755:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(1339),s=a(1294),o=(a(140),a(8)),c=a(121),i=a(215);t.a=Object(s.a)({},{withTheme:!0})(Object(c.b)(e=>({getNotification:o.PropTypes.func.isRequired,deleteNotification:o.PropTypes.func.isRequired,deleteAllNotification:o.PropTypes.func.isRequired,notification:e.notification,settings:e.layout.settings}),{getNotification:i.g,deleteNotification:i.f,deleteAllNotification:i.e})((function(e){const{container:t,theme:a,settings:n,notification:s=[],getNotification:o,deleteAllNotification:c,deleteNotification:i}=e,[m,d]=l.a.useState(!1);return a.palette,l.a.createElement(r.a,{theme:n.themes[n.activeTheme]})})))},1756:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(19),s=a(1556),o=a(1558),c=a(1459),i=a(1559),m=a(1557),d=a(1561);class u extends l.a.Component{constructor(){super(...arguments),this.state={selected:"vi",hasError:!1}}handleChange(e){const{t:t,i18n:a,classes:n}=this.props;a.changeLanguage(e),this.setState({selected:e})}render(){const{t:e,i18n:t,classes:a}=this.props,{selected:n,hasError:r}=this.state;return l.a.createElement("form",{className:a.root,autoComplete:"off"},l.a.createElement(m.a,{className:a.formControl,error:r},l.a.createElement(o.a,{htmlFor:"name"},e("general.language")),l.a.createElement(d.a,{name:"name",value:n,onChange:e=>this.handleChange(e.target.value),input:l.a.createElement(s.a,{id:"name"})},l.a.createElement(c.a,{value:"vi"},"Ti\u1ebfng Vi\u1ec7t")),r&&l.a.createElement(i.a,null,"This is required!")))}}t.a=Object(r.a)(e=>({root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing.unit,minWidth:120},selectEmpty:{marginTop:2*e.spacing.unit}}))(u)},1757:function(e,t,a){"use strict";var n=a(3),l=a(0),r=a.n(l),s=a(1703),o=a.n(s),c=a(40),i=a(121),m=a(8),d=a.n(m),u=a(1758),p=a(20),h=a(125),g=(a(1),a(1343)),b=(a(112),a(62));const E=Object(g.a)()(p.p);class y extends l.Component{constructor(){super(...arguments),this.state={},this.updateSidebarMode=e=>{let{settings:t,setLayoutSettings:a}=this.props,l=t.activeLayout+"Settings",r=t[l];a(Object(n.a)(Object(n.a)({},t),{},{[l]:Object(n.a)(Object(n.a)({},r),{},{leftSidebar:Object(n.a)(Object(n.a)({},r.leftSidebar),e)})}))},this.renderOverlay=()=>r.a.createElement("div",{onClick:()=>this.updateSidebarMode({mode:"close"}),className:"sidenav__overlay"})}getNavigation(){let e=b.a.getLocalStorageItem("navigations");return e&&e.length>0?e:u.a}render(){return r.a.createElement(l.Fragment,null,r.a.createElement(o.a,{option:{suppressScrollX:!0},className:"scrollable position-relative"},this.props.children,r.a.createElement(E,{navigation:this.getNavigation()})),this.renderOverlay())}}t.a=Object(c.g)(Object(i.b)(e=>({setLayoutSettings:d.a.func.isRequired,settings:e.layout.settings}),{setLayoutSettings:h.d})(y))},1758:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(1),l=a.n(n);const r=[{name:"Dashboard.manage",isVisible:!0,icon:"engineering",children:[{name:"Th\xeam Nh\xe2n Vi\xean",isVisible:!0,path:l.a.ROOT_PATH+"add_employee",icon:"keyboard_arrow_right"},{name:"Qu\u1ea3n L\xfd Nh\xe2n Vi\xean",isVisible:!0,path:l.a.ROOT_PATH+"manage_employee",icon:"keyboard_arrow_right"},{name:"K\u1ebft Th\xfac Nh\xe2n Vi\xean",isVisible:!0,path:l.a.ROOT_PATH+"end_employee",icon:"keyboard_arrow_right"}]}]},1759:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(1),s=a.n(r),o=a(93);a(382);class c extends n.Component{constructor(){super(...arguments),this.state={}}render(){return l.a.createElement("div",{className:"flex flex-middle flex-space-between brand-area"},l.a.createElement("div",{className:"flex flex-middle brand logo-menu"},l.a.createElement(o.a,{to:s.a.HOME_PAGE},l.a.createElement("span",{className:"brand__text"},"Fashion Store"))),this.props.children)}}t.a=c},1760:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(382);t.a=e=>{let{theme:t,settings:a}=e;return l.a.createElement(r.Helmet,null,l.a.createElement("style",null,"\n        \n        ".concat("dark"===t.palette.type?".sidenav {\n          color: ".concat(t.palette.text.secondary,";\n        }"):" ","\n\n        .sidenav__hold {\n          background-image: url(").concat(a.layout1Settings.leftSidebar.bgImgURL,");\n          opacity: 1 !important;\n        }\n        .sidenav__hold::after {\n          background: ").concat(t.palette.primary.main,";\n          opacity: ").concat(a.layout1Settings.leftSidebar.bgOpacity,";\n        }\n\n        ").concat("light"===t.palette.type?".navigation .nav-item:hover,\n        .navigation .nav-item.active,\n        .navigation .submenu {\n          background: rgba(0, 0, 0, .08);\n        }":"","\n        ").concat("dark"===t.palette.type?".navigation .nav-item:hover,\n        .navigation .nav-item.active {\n          color: ".concat(t.palette.text.primary,";\n        }"):"","\n        \n      ")))}},1761:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(1339),s=a(1332),o=a(19),c=a(121),i=a(382);t.a=Object(o.a)({},{withTheme:!0})(Object(c.b)(e=>({settings:e.layout.settings}),{})(e=>{let{theme:t,settings:a}=e;const n=a.themes[a.footer.theme]||t;return l.a.createElement(r.a,{theme:n},l.a.createElement(i.Helmet,null,l.a.createElement("style",null,"\n              .footer {\n                background: ".concat(n.palette.primary.main,";\n                color: ").concat(n.palette.primary.contrastText,";\n              }\n            "))),l.a.createElement("div",{className:"footer flex flex-middle"},l.a.createElement("div",{className:"flex flex-middle container px-sm-30 w-100"},l.a.createElement("a",{href:"#"},l.a.createElement(s.a,{variant:"contained",color:"secondary"},"Hotline: 0349655473")),l.a.createElement("span",{className:"m-auto"}))))}))},1777:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(1339),s=a(1329),o=a(1328),c=a(1740),i=a(382),m=a(40),d=a(121),u=a(140),p=a(3),h=a(125),g=a(8),b=a(1560),E=a(228),y=a(1557),v=a(1891),f=a(1472),N=a(1553),x=a(1781),C=a(19),S=a(1703),k=a.n(S),w=a(69),O=a(1474),j=a(1652),T=a(1653),_=a(388),L=a(1645);var R=Object(C.a)(e=>({badge:{top:"100%",right:"90%",height:"32px",width:"32px",borderRadius:"50%"}}))(L.a);const z=["purple1","purple2","blue","purpleDark1","purpleDark2","blueDark"],P=["white","slateDark1","slateDark2","purpleDark1","purpleDark2","blueDark"],D=["white","slateDark1","slateDark2","purpleDark1","purpleDark2","blueDark"],F=["/assets/images/sidebar/sidebar-bg-dark.jpg","/assets/images/sidebar/sidebar-bg-light.jpg"];var A=e=>{let{settings:t,handleChange:a,handleControlChange:r}=e;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"mb-16 mx-12"},l.a.createElement("div",{className:"text-muted mb-4"},"Sidebar theme"),l.a.createElement("div",{className:"colors"},P.map((e,n)=>l.a.createElement(b.a,{key:n,title:e,placement:"top"},l.a.createElement("div",{className:"color",onClick:()=>a("layout1Settings.leftSidebar.theme",e),style:{backgroundColor:_.a[e].palette.primary.main}},t.layout1Settings.leftSidebar.theme===e&&l.a.createElement(o.a,null,"done"),l.a.createElement("div",{className:t.themes[e].palette.type})))))),l.a.createElement("div",{className:"mb-32 mx-12"},l.a.createElement("div",{className:"text-muted mb-4"},"Topbar theme"),l.a.createElement("div",{className:"colors"},D.map((e,n)=>l.a.createElement(b.a,{key:n,title:e,placement:"top"},l.a.createElement("div",{className:"color",onClick:()=>a("layout1Settings.topbar.theme",e),style:{backgroundColor:_.a[e].palette.primary.main}},t.layout1Settings.topbar.theme===e&&l.a.createElement(o.a,null,"done"),l.a.createElement("div",{className:t.themes[e].palette.type})))))),l.a.createElement("div",{className:"mx-12 mb-24"},l.a.createElement(y.a,{component:"fieldset"},l.a.createElement(v.a,{component:"legend"},"Sidebar mode"),l.a.createElement(O.a,{"aria-label":"Sidebar",name:"leftSidebar",value:t.layout1Settings.leftSidebar.mode,onChange:r("layout1Settings.leftSidebar.mode")},l.a.createElement(N.a,{value:"full",control:l.a.createElement(j.a,null),label:"Full"}),l.a.createElement(N.a,{value:"close",control:l.a.createElement(j.a,null),label:"Close"}),l.a.createElement(N.a,{value:"compact",control:l.a.createElement(j.a,null),label:"Compact"})))),l.a.createElement("div",{className:"mb-32 mx-12"},l.a.createElement("div",{className:"text-muted"},"Sidebar background image"),l.a.createElement("div",{className:"layout-boxes"},F.map((e,n)=>l.a.createElement(R,{key:n,color:"primary",className:"layout-box",style:{width:"calc(25% - 8px)"},badgeContent:l.a.createElement(o.a,null,"done"),invisible:t.layout1Settings.leftSidebar.bgImgURL!==e},l.a.createElement(E.a,{onClick:()=>a("layout1Settings.leftSidebar.bgImgURL",e),style:{height:"160px"}},l.a.createElement("img",{src:e,alt:""})))))),l.a.createElement("div",{className:"mb-32 mx-12"},l.a.createElement("div",{className:"text-muted"},"Sidebar background opacity"),l.a.createElement(T.a,{value:t.layout1Settings.leftSidebar.bgOpacity,onChange:(e,t)=>a("layout1Settings.leftSidebar.bgOpacity",t),marks:!0,step:.02,max:1,min:.5,valueLabelDisplay:"auto","aria-labelledby":"sidebar-bgOpacity"})),l.a.createElement("div",{className:"mx-12 mb-24"},l.a.createElement(y.a,{component:"fieldset"},l.a.createElement(v.a,{component:"legend"},"Topbar"),l.a.createElement(f.a,null,l.a.createElement(N.a,{control:l.a.createElement(x.a,{checked:Object(w.get)(t.layout1Settings.topbar,"show"),onChange:r("layout1Settings.topbar.show")}),label:"Show"}),l.a.createElement(N.a,{control:l.a.createElement(x.a,{checked:Object(w.get)(t.layout1Settings.topbar,"fixed"),onChange:r("layout1Settings.topbar.fixed")}),label:"Fixed"})))))};var H=e=>{let{settings:t,handleChange:a,handleControlChange:r}=e;return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"mb-16 mx-12"},l.a.createElement("div",{className:"text-muted mb-4"},"Topbar theme"),l.a.createElement("div",{className:"colors"},Object.keys(_.a).map((e,n)=>l.a.createElement(b.a,{key:n,title:e,placement:"top"},l.a.createElement("div",{className:"color",onClick:()=>a("layout2Settings.topbar.theme",e),style:{backgroundColor:_.a[e].palette.primary.main}},t.layout2Settings.topbar.theme===e&&l.a.createElement(o.a,null,"done"),l.a.createElement("div",{className:t.themes[e].palette.type})))))),l.a.createElement("div",{className:"mb-16 mx-12"},l.a.createElement("div",{className:"text-muted mb-4"},"Navbar theme"),l.a.createElement("div",{className:"colors"},Object.keys(_.a).map((e,n)=>l.a.createElement(b.a,{key:n,title:e,placement:"top"},l.a.createElement("div",{className:"color",onClick:()=>a("layout2Settings.navbar.theme",e),style:{backgroundColor:_.a[e].palette.primary.main}},t.layout2Settings.navbar.theme===e&&l.a.createElement(o.a,null,"done"),l.a.createElement("div",{className:t.themes[e].palette.type})))))),l.a.createElement("div",{className:"mx-12 mb-24"},l.a.createElement(y.a,{component:"fieldset"},l.a.createElement(v.a,{component:"legend"},"Layout mode"),l.a.createElement(O.a,{"aria-label":"layout-mode",name:"layoutMode",value:t.layout2Settings.mode,onChange:r("layout2Settings.mode")},l.a.createElement(N.a,{value:"full",control:l.a.createElement(j.a,null),label:"Full"}),l.a.createElement(N.a,{value:"contained",control:l.a.createElement(j.a,null),label:"Contained"}),l.a.createElement(N.a,{value:"boxed",control:l.a.createElement(j.a,null),label:"Boxed"})))))},q=a(1),I=a.n(q);class W extends n.Component{constructor(){super(...arguments),this.state={open:!1},this.updateSettings=e=>{let{settings:t,setLayoutSettings:a,setDefaultSettings:n}=this.props,l=Object(w.merge)({},t,e);a(l),n(l)},this.selectLayout=e=>{this.updateSettings({activeLayout:e})},this.handleChange=(e,t)=>{let{settings:a}=this.props,n=Object(w.set)(a,e,t);this.updateSettings(n)},this.handleControlChange=e=>t=>{let a="checkbox"===t.target.type?t.target.checked:t.target.value;this.handleChange(e,a)},this.tooglePanel=()=>{this.setState({open:!this.state.open})}}render(){let{settings:e,classes:t}=this.props,a=Object(p.a)({},e.themes[e.activeTheme]);return l.a.createElement(n.Fragment,null,l.a.createElement(b.a,{title:"Theme Settings",placement:"left"},l.a.createElement(s.a,{size:"small","aria-label":"delete",className:"my-12",onClick:this.tooglePanel},l.a.createElement(o.a,{className:"spin"},"settings"))),this.state.open&&l.a.createElement(r.a,{theme:a},l.a.createElement("div",{className:"egret-customizer pb-8 ".concat(t.root),style:{backgroundColor:a.palette.background.default}},l.a.createElement("div",{className:"flex felx-row flex-middle p-16 mb-16 elevation-z6",style:{minHeight:"64px"}},l.a.createElement(o.a,{color:"primary"},"settings"),l.a.createElement("h5",{className:"mb-0 ml-8"},"Theme Settings"),l.a.createElement(s.a,{onClick:this.tooglePanel,className:"customizer-close"},l.a.createElement(o.a,null,"close"))),l.a.createElement(k.a,{options:{suppressScrollX:!0},className:"px-16"},l.a.createElement("div",{className:"mt-8 mb-32 mx-12"},l.a.createElement("div",{className:"text-muted"},"Layouts"),l.a.createElement("div",{className:"layout-boxes"},l.a.createElement(R,{color:"secondary",className:"layout-box",badgeContent:l.a.createElement(o.a,null,"done"),invisible:"layout1"!==e.activeLayout},l.a.createElement(E.a,{onClick:()=>this.selectLayout("layout1"),elevation:4},l.a.createElement("img",{src:I.a.ROOT_PATH+"assets/images/screenshots/layout1-customizer.png",alt:""}))),l.a.createElement(R,{color:"secondary",className:"layout-box",badgeContent:l.a.createElement(o.a,null,"done"),invisible:"layout2"!==e.activeLayout},l.a.createElement(E.a,{onClick:()=>this.selectLayout("layout2"),elevation:4},l.a.createElement("img",{src:I.a.ROOT_PATH+"assets/images/screenshots/layout2-customizer.png",alt:""}))))),l.a.createElement("div",{className:"mb-16 mx-12"},l.a.createElement("div",{className:"text-muted mb-4"},"Main theme"),l.a.createElement("div",{className:"colors"},z.map((t,a)=>l.a.createElement(b.a,{key:a,title:t,placement:"top"},l.a.createElement("div",{className:"color",onClick:()=>this.updateSettings({activeTheme:t}),style:{backgroundColor:_.a[t].palette.primary.main}},e.activeTheme===t&&l.a.createElement(o.a,null,"done"),l.a.createElement("div",{className:e.themes[t].palette.type})))))),"layout1"===e.activeLayout&&l.a.createElement(A,{settings:e,handleChange:this.handleChange,handleControlChange:this.handleControlChange}),"layout2"===e.activeLayout&&l.a.createElement(H,{settings:e,handleChange:this.handleChange,handleControlChange:this.handleControlChange}),l.a.createElement("div",{className:"mx-12 mb-24"},l.a.createElement(y.a,{component:"fieldset"},l.a.createElement(v.a,{component:"legend"},"Footer"),l.a.createElement(f.a,null,l.a.createElement(N.a,{control:l.a.createElement(x.a,{checked:Object(w.get)(e.footer,"show"),onChange:this.handleControlChange("footer.show")}),label:"Show"}),l.a.createElement(N.a,{control:l.a.createElement(x.a,{checked:Object(w.get)(e.layout1Settings.footer,"fixed"),onChange:this.handleControlChange("footer.fixed")}),label:"Fixed"})))),l.a.createElement("div",{className:"mx-12 mb-24"},l.a.createElement(y.a,{component:"fieldset"},l.a.createElement(v.a,{component:"legend"},"Secondary sidebar"),l.a.createElement(f.a,null,l.a.createElement(N.a,{control:l.a.createElement(x.a,{checked:Object(w.get)(e.secondarySidebar,"show"),onChange:this.handleControlChange("secondarySidebar.show")}),label:"Show"})))),l.a.createElement("div",{className:"mb-16 mx-12"},l.a.createElement("div",{className:"text-muted mb-4"},"Secondary sidebar theme"),l.a.createElement("div",{className:"colors"},D.map((t,a)=>l.a.createElement(b.a,{key:a,title:t,placement:"top"},l.a.createElement("div",{className:"color",onClick:()=>this.handleChange("secondarySidebar.theme",t),style:{backgroundColor:_.a[t].palette.primary.main}},e.secondarySidebar.theme===t&&l.a.createElement(o.a,null,"done"),l.a.createElement("div",{className:e.themes[t].palette.type})))))),l.a.createElement("div",{className:"mb-16 mx-12"},l.a.createElement("div",{className:"text-muted mb-4"},"Footer theme"),l.a.createElement("div",{className:"colors"},D.map((t,a)=>l.a.createElement(b.a,{key:a,title:t,placement:"top"},l.a.createElement("div",{className:"color",onClick:()=>this.handleChange("footer.theme",t),style:{backgroundColor:_.a[t].palette.primary.main}},e.footer.theme===t&&l.a.createElement(o.a,null,"done"),l.a.createElement("div",{className:e.themes[t].palette.type}))))))))))}}var M=Object(C.a)(e=>({root:{},paper:{display:"inherit"}}),{withTheme:!0})(Object(d.b)(e=>({settings:e.layout.settings,setLayoutSettings:g.PropTypes.func.isRequired,setDefaultSettings:g.PropTypes.func.isRequired}),{setLayoutSettings:h.d,setDefaultSettings:h.c})(W)),V=a(1294),U=a(1721);class J extends n.Component{constructor(){super(...arguments),this.state={open:!0},this.toggle=()=>{this.setState({open:!this.state.open})},this.listenWindowResize=()=>Object(u.b)(()=>{this.setState({open:!Object(u.e)()})},100)}componentWillMount(){this.setState({open:!Object(u.e)()}),window&&(this.listenWindowResizeRef=this.listenWindowResize(),window.addEventListener("resize",this.listenWindowResizeRef))}componentWillUnmount(){window&&window.removeEventListener("resize",this.listenWindowResizeRef)}render(){let{settings:e,classes:t,theme:a}=this.props;const n=e.themes[e.secondarySidebar.theme]||a;return l.a.createElement(r.a,{theme:n},this.state.open&&!Object(u.e)()&&l.a.createElement(i.Helmet,null,l.a.createElement("style",null,"\n              .content-wrap, \n              .layout2.layout-contained, \n              .layout2.layout-full {\n                margin-right: ".concat("50px",";\n              }\n              @media screen and (max-width: 959px) {\n                .toolbar-menu-wrap .menu-area {\n                  width: calc(100% - ").concat("50px",");\n                }\n              }\n              .egret-customizer {\n                right: ").concat("50px",";\n              }\n            "))),l.a.createElement("div",{className:t.root+" "+Object(u.a)({open:this.state.open,"secondary-sidebar":!0}),style:{backgroundColor:n.palette.primary.main}},l.a.createElement("span",{className:"m-auto"}),l.a.createElement(M,null),l.a.createElement(U.a,null),l.a.createElement(s.a,{size:"small","aria-label":"delete",className:"my-12"},l.a.createElement(o.a,null,"comments")),l.a.createElement("span",{className:"m-auto"}),l.a.createElement("div",{className:"toggle"},this.state.open&&l.a.createElement(s.a,{onClick:this.toggle,size:"small","aria-label":"toggle"},l.a.createElement(o.a,null,"arrow_right")),!this.state.open&&l.a.createElement(c.a,{variant:"extended",size:"small",color:"primary","aria-label":"add",className:"pr-36",onClick:this.toggle},l.a.createElement(o.a,null,"arrow_left")))))}}t.a=Object(V.a)(e=>({root:{position:"fixed",height:"100vh",width:"50px",right:"-".concat("50px"),bottom:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",boxShadow:e.shadows[8],zIndex:98,transition:"all 0.15s ease","&.open":{right:0,"& .toggle":{left:0}},"& .toggle":{position:"relative",left:"-28px",bottom:"20px",transition:"all 0.15s ease"}}}),{withTheme:!0})(Object(m.g)(Object(d.b)(e=>({settings:e.layout.settings}),{})(J)))}}]);
//# sourceMappingURL=6.ce516a33.chunk.js.map