(this["webpackJsonpglobits-react"]=this["webpackJsonpglobits-react"]||[]).push([[35],{1915:function(e,t,a){"use strict";a.r(t);var l=a(3),s=a(0),n=a.n(s),r=a(121),o=a(8),i=a.n(o),c=a(125),m=a(19),d=(a(1703),a(140)),u=a(389),h=a(40),g=a(1),p=a.n(g),b=a(1339),E=a(1329),f=a(1328),S=a(1459),O=a(118),y=a(20),N=a(1755),j=a(93),v=a(1721),x=a(1343),T=a(1756),w=a(112);const C=Object(x.a)()(T.a);class P extends s.Component{constructor(){super(...arguments),this.state={},this.updateSidebarMode=e=>{let{settings:t,setLayoutSettings:a}=this.props;a(Object(l.a)(Object(l.a)({},t),{},{layout1Settings:Object(l.a)(Object(l.a)({},t.layout1Settings),{},{leftSidebar:Object(l.a)(Object(l.a)({},t.layout1Settings.leftSidebar),e)})}))},this.handleSidebarToggle=()=>{let e,{settings:t}=this.props,{layout1Settings:a}=t;e=Object(d.d)()?"close"===a.leftSidebar.mode?"mobile":"close":"full"===a.leftSidebar.mode?"close":"full",this.updateSidebarMode({mode:e})},this.handleSignOut=()=>{this.props.logoutUser()}}render(){let e=p.a.ROOT_PATH+"assets/images/avatar.jpg",t=w.a.getLoginUser();null!=t&&null!=t.imagePath&&(e=p.a.API_ENPOINT+t.imagePath);const{t:a,i18n:l}=this.props;let{theme:s,settings:r}=this.props;const o=r.themes[r.layout1Settings.topbar.theme]||s;return n.a.createElement(b.a,{theme:o},n.a.createElement("div",{className:"topbar"},n.a.createElement("div",{className:"topbar-hold",style:{backgroundColor:o.palette.primary.main}},n.a.createElement("div",{className:"flex flex-space-between flex-middle h-100"},n.a.createElement("div",{className:"flex"},n.a.createElement(E.a,{onClick:this.handleSidebarToggle},n.a.createElement(f.a,null,"menu")),n.a.createElement("div",{className:"hide-on-mobile"})),n.a.createElement("div",{className:"flex flex-middle"},n.a.createElement(y.k,null),n.a.createElement(C,null),n.a.createElement(N.a,null),n.a.createElement(v.a,null),n.a.createElement(y.i,{menuButton:n.a.createElement("img",{className:"mx-8 text-middle circular-image-small cursor-pointer",src:e,alt:"user"})},n.a.createElement(S.a,{style:{minWidth:185}},n.a.createElement(j.a,{className:"flex flex-middle",to:"/"},n.a.createElement(f.a,null," home "),n.a.createElement("span",{className:"pl-16"}," ",a("Dashboard.dashboard")," "))),n.a.createElement(S.a,{style:{minWidth:185}},n.a.createElement(j.a,{className:"flex flex-middle",to:"/page-layouts/user-profile"},n.a.createElement(f.a,null," person "),n.a.createElement("span",{className:"pl-16"}," ",a("Dashboard.profile")," "))),n.a.createElement(S.a,{onClick:this.handleSignOut,className:"flex flex-middle",style:{minWidth:185}},n.a.createElement(f.a,null," power_settings_new "),n.a.createElement("span",{className:"pl-16"}," ",a("Dashboard.logout")," "))))))))}}var _=Object(m.a)(e=>({root:{backgroundColor:e.palette.primary.main}}),{withTheme:!0})(Object(h.g)(Object(r.b)(e=>({setLayoutSettings:o.PropTypes.func.isRequired,logoutUser:o.PropTypes.func.isRequired,settings:e.layout.settings}),{setLayoutSettings:c.d,logoutUser:O.d})(P))),k=a(1781),L=a(1560),U=a(1757),D=a(1759),R=a(1760);const M=Object(m.a)(e=>({root:{backgroundColor:"transparent",padding:"5px"}}))(E.a),W=Object(m.a)(()=>({root:{fontSize:"1rem"}}))(f.a);class q extends s.Component{constructor(){super(...arguments),this.state={sidenavToggleChecked:!1,hidden:!0},this.updateSidebarMode=e=>{let{settings:t,setLayoutSettings:a,setDefaultSettings:s}=this.props;const n=Object(l.a)(Object(l.a)({},t),{},{layout1Settings:Object(l.a)(Object(l.a)({},t.layout1Settings),{},{leftSidebar:Object(l.a)(Object(l.a)({},t.layout1Settings.leftSidebar),e)})});a(n),s(n)},this.handleSidenavToggle=()=>{let{sidenavToggleChecked:e}=this.state,t=e?"full":"compact";this.updateSidebarMode({mode:t}),this.setState({sidenavToggleChecked:!e})},this.handleSignOut=()=>{this.props.logoutUser()},this.renderLogoSwitch=()=>n.a.createElement(D.a,null,n.a.createElement(k.a,{className:"sidenav__toggle hide-on-mobile",onChange:this.handleSidenavToggle,checked:this.state.sidenavToggleChecked,color:"secondary"})),this.renderUser=()=>{const{t:e,i18n:t}=this.props;let a=p.a.ROOT_PATH+"assets/images/avatar.jpg",l=w.a.getLoginUser();return null!=l&&null!=l.imagePath&&(a=p.a.API_ENPOINT+l.imagePath),null!=l&&null!=l.imagePath&&(a=p.a.API_ENPOINT+l.imagePath),n.a.createElement("div",{className:"sidenav__user"},n.a.createElement("div",{className:"username-photo"},n.a.createElement("img",{src:a,alt:"user"}),n.a.createElement("span",{className:"username text-center"},l?l.displayName:"",n.a.createElement("br",null),l?l.username:"")),n.a.createElement("div",{className:"user__menu"},n.a.createElement(y.i,null,n.a.createElement(S.a,{className:"flex flex-middle",style:{minWidth:185}},n.a.createElement(f.a,null," home "),n.a.createElement("span",{className:"pl-16"}," ",e("Dashboard.dashboard")," "))),n.a.createElement(L.a,{title:e("Dashboard.profile")},n.a.createElement(j.a,{className:"flex flex-middle",to:"/page-layouts/user-profile"},n.a.createElement(M,{"aria-label":"Delete",className:"",size:"small"},n.a.createElement(W,null,"person")))),n.a.createElement(L.a,{title:e("Dashboard.logout")},n.a.createElement(M,{"aria-label":"Delete",className:"",size:"small",onClick:this.handleSignOut},n.a.createElement(W,null,"exit_to_app")))))}}componentWillMount(){this.unlistenRouteChange=this.props.history.listen((e,t)=>{Object(d.d)()&&this.updateSidebarMode({mode:"close"})}),setTimeout(()=>{this.setState({hidden:!1})},400)}componentWillUnmount(){this.unlistenRouteChange()}render(){let{theme:e,settings:t}=this.props;const a=t.themes[t.layout1Settings.leftSidebar.theme]||e;return n.a.createElement(b.a,{theme:a},n.a.createElement(R.a,{theme:a,settings:t}),n.a.createElement("div",{className:"sidenav"},n.a.createElement("div",{className:"sidenav__hold"},!this.state.hidden&&n.a.createElement(s.Fragment,null,this.renderLogoSwitch(),n.a.createElement(U.a,null,this.renderUser())))))}}var I=Object(m.a)(e=>({}),{withTheme:!0})(Object(h.g)(Object(r.b)(e=>({setDefaultSettings:i.a.func.isRequired,setLayoutSettings:i.a.func.isRequired,logoutUser:i.a.func.isRequired,user:e.user,settings:e.layout.settings}),{setLayoutSettings:c.d,setDefaultSettings:c.c,logoutUser:O.d})(q))),A=a(1761),z=(a(1777),a(246));const H=Object(x.a)()(I),J=Object(x.a)()(_);class B extends s.Component{constructor(){super(...arguments),this.updateSidebarMode=e=>{let{settings:t,setLayoutSettings:a}=this.props;a(Object(l.a)(Object(l.a)({},t),{},{layout1Settings:Object(l.a)(Object(l.a)({},t.layout1Settings),{},{leftSidebar:Object(l.a)(Object(l.a)({},t.layout1Settings.leftSidebar),e)})}))}}componentWillMount(){Object(d.d)()&&this.updateSidebarMode({mode:"close"})}componentWillUnmount(){}render(){let{settings:e,classes:t,theme:a}=this.props,{layout1Settings:l}=e,s={[t.layout]:!0,["".concat(e.activeLayout," sidenav-").concat(l.leftSidebar.mode)]:!0,"topbar-fixed":l.topbar.fixed};return n.a.createElement(z.a.Consumer,null,t=>{let{routes:a}=t;return n.a.createElement("div",{className:Object(d.a)(s)},l.leftSidebar.show&&n.a.createElement(H,null),n.a.createElement("div",{className:"content-wrap position-relative"},l.topbar.show&&l.topbar.fixed&&n.a.createElement(J,null),e.perfectScrollbar&&n.a.createElement("div",{className:"scrollable-content"},l.topbar.show&&!l.topbar.fixed&&n.a.createElement(_,null),n.a.createElement("div",{className:"content"},Object(u.b)(a)),n.a.createElement("div",{className:"my-auto"}),e.footer.show&&!e.footer.fixed&&n.a.createElement(A.a,null)),!e.perfectScrollbar&&n.a.createElement("div",{className:"scrollable-content"},l.topbar.show&&!l.topbar.fixed&&n.a.createElement(_,null),n.a.createElement("div",{className:"content"},Object(u.b)(a)),n.a.createElement("div",{className:"my-auto"}),e.footer.show&&!e.footer.fixed&&n.a.createElement(A.a,null)),e.footer.show&&e.footer.fixed&&n.a.createElement(A.a,null)))})}}t.default=Object(m.a)(e=>({layout:{backgroundColor:e.palette.background.default}}),{withTheme:!0})(Object(r.b)(e=>({setLayoutSettings:o.PropTypes.func.isRequired,settings:e.layout.settings}),{setLayoutSettings:c.d})(B))}}]);
//# sourceMappingURL=35.379cc026.chunk.js.map