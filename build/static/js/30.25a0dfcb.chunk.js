(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1383:function(e,a,t){"use strict";var n=t(0),l=n.createContext();a.a=l},1454:function(e,a,t){"use strict";var n=t(0),l=n.createContext();a.a=l},1459:function(e,a,t){"use strict";var n=t(11),l=t(4),r=t(0),c=t(14),s=t(19),i=t(29),o=t(48),m=t(1454),d=t(1383),p=r.forwardRef(function(e,a){var t,s,o=e.align,p=void 0===o?"inherit":o,u=e.classes,h=e.className,g=e.component,y=e.padding,b=e.scope,E=e.size,f=e.sortDirection,x=e.variant,v=Object(n.a)(e,["align","classes","className","component","padding","scope","size","sortDirection","variant"]),N=r.useContext(m.a),O=r.useContext(d.a),j=O&&"head"===O.variant;g?(s=g,t=j?"columnheader":"cell"):s=j?"th":"td";var w=b;!w&&j&&(w="col");var T=y||(N&&N.padding?N.padding:"normal"),A=E||(N&&N.size?N.size:"medium"),C=x||O&&O.variant,S=null;return f&&(S="asc"===f?"ascending":"descending"),r.createElement(s,Object(l.a)({ref:a,className:Object(c.default)(u.root,u[C],h,"inherit"!==p&&u["align".concat(Object(i.a)(p))],"normal"!==T&&u["padding".concat(Object(i.a)(T))],"medium"!==A&&u["size".concat(Object(i.a)(A))],"head"===C&&N&&N.stickyHeader&&u.stickyHeader),"aria-sort":S,role:t,scope:w},v))});a.a=Object(s.a)(function(e){return{root:Object(l.a)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:"1px solid\n    ".concat("light"===e.palette.type?Object(o.j)(Object(o.a)(e.palette.divider,1),.88):Object(o.b)(Object(o.a)(e.palette.divider,1),.68)),textAlign:"left",padding:16}),head:{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},body:{color:e.palette.text.primary},footer:{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},sizeSmall:{padding:"6px 24px 6px 16px","&:last-child":{paddingRight:16},"&$paddingCheckbox":{width:24,padding:"0 12px 0 16px","&:last-child":{paddingLeft:12,paddingRight:16},"& > *":{padding:0}}},paddingCheckbox:{width:48,padding:"0 0 0 4px","&:last-child":{paddingLeft:0,paddingRight:4}},paddingNone:{padding:0,"&:last-child":{padding:0}},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right",flexDirection:"row-reverse"},alignJustify:{textAlign:"justify"},stickyHeader:{position:"sticky",top:0,left:0,zIndex:2,backgroundColor:e.palette.background.default}}},{name:"MuiTableCell"})(p)},1460:function(e,a,t){"use strict";var n=t(11),l=t(4),r=t(0),c=t(14),s=t(19),i=t(1454),o=r.forwardRef(function(e,a){var t=e.classes,s=e.className,o=e.component,m=void 0===o?"table":o,d=e.padding,p=void 0===d?"normal":d,u=e.size,h=void 0===u?"medium":u,g=e.stickyHeader,y=void 0!==g&&g,b=Object(n.a)(e,["classes","className","component","padding","size","stickyHeader"]),E=r.useMemo(function(){return{padding:p,size:h,stickyHeader:y}},[p,h,y]);return r.createElement(i.a.Provider,{value:E},r.createElement(m,Object(l.a)({role:"table"===m?null:"table",ref:a,className:Object(c.default)(t.root,s,y&&t.stickyHeader)},b)))});a.a=Object(s.a)(function(e){return{root:{display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":Object(l.a)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},stickyHeader:{borderCollapse:"separate"}}},{name:"MuiTable"})(o)},1461:function(e,a,t){"use strict";var n=t(4),l=t(11),r=t(0),c=t(14),s=t(19),i=t(1383),o={variant:"head"},m=r.forwardRef(function(e,a){var t=e.classes,s=e.className,m=e.component,d=void 0===m?"thead":m,p=Object(l.a)(e,["classes","className","component"]);return r.createElement(i.a.Provider,{value:o},r.createElement(d,Object(n.a)({className:Object(c.default)(t.root,s),ref:a,role:"thead"===d?null:"rowgroup"},p)))});a.a=Object(s.a)({root:{display:"table-header-group"}},{name:"MuiTableHead"})(m)},1462:function(e,a,t){"use strict";var n=t(4),l=t(11),r=t(0),c=t(14),s=t(19),i=t(1383),o=t(48),m=r.forwardRef(function(e,a){var t=e.classes,s=e.className,o=e.component,m=void 0===o?"tr":o,d=e.hover,p=void 0!==d&&d,u=e.selected,h=void 0!==u&&u,g=Object(l.a)(e,["classes","className","component","hover","selected"]),y=r.useContext(i.a);return r.createElement(m,Object(n.a)({ref:a,className:Object(c.default)(t.root,s,y&&{head:t.head,footer:t.footer}[y.variant],p&&t.hover,h&&t.selected),role:"tr"===m?null:"row"},g))});a.a=Object(s.a)(function(e){return{root:{color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,"&$hover:hover":{backgroundColor:e.palette.action.hover},"&$selected, &$selected:hover":{backgroundColor:Object(o.a)(e.palette.secondary.main,e.palette.action.selectedOpacity)}},selected:{},hover:{},head:{},footer:{}}},{name:"MuiTableRow"})(m)},1463:function(e,a,t){"use strict";var n=t(4),l=t(11),r=t(0),c=t(14),s=t(19),i=t(1383),o={variant:"body"},m=r.forwardRef(function(e,a){var t=e.classes,s=e.className,m=e.component,d=void 0===m?"tbody":m,p=Object(l.a)(e,["classes","className","component"]);return r.createElement(i.a.Provider,{value:o},r.createElement(d,Object(n.a)({className:Object(c.default)(t.root,s),ref:a,role:"tbody"===d?null:"rowgroup"},p)))});a.a=Object(s.a)({root:{display:"table-row-group"}},{name:"MuiTableBody"})(m)},1675:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(1),c=t.n(r),s=t(1343),i=t(1345),o=t(19);const m={fontSize:"40px"},d={fontSize:"20px"};a.a=Object(o.a)(e=>({root:{background:'url("/assets/images/dots.png"),\n    linear-gradient(90deg, '.concat(e.palette.primary.main," -19.83%, ").concat(e.palette.primary.light," 189.85%)"),backgroundRepeat:"no-repeat",backgroundSize:"100%"}}),{withTheme:!0})(e=>{let{classes:a,analytics:t,t:n,data:r}=e;return l.a.createElement(s.a,{container:!0,spacing:3},l.a.createElement(s.a,{item:!0,lg:3,md:3,sm:6,xs:12},l.a.createElement(i.a,{elevation:3,className:"p-16 py-28 text-center h-100 w-100 ".concat(a.root)},l.a.createElement("a",{href:c.a.ROOT_PATH+"register/eqa_health_org_round_register"},l.a.createElement("div",{className:"font-weight-300 px-80 flex flex-center"},l.a.createElement("div",{className:"text-white margin-auto",style:{width:"100%"}},l.a.createElement("div",{style:m},l.a.createElement("b",null,r.numberOfHealthOrgEQARound.toLocaleString("en-US"))),l.a.createElement("p",{className:"m-0",style:d},l.a.createElement("b",null,n("Analytics.registered_units")))))))),l.a.createElement(s.a,{item:!0,lg:3,md:3,sm:6,xs:12},l.a.createElement(i.a,{elevation:3,className:"p-16 py-28 text-center h-100 w-100 ".concat(a.root)},l.a.createElement("a",{href:c.a.ROOT_PATH+"dashboard/eqaround"},l.a.createElement("div",{className:"font-weight-300 px-80 flex flex-center"},l.a.createElement("div",{className:"text-white margin-auto",style:{width:"100%"}},l.a.createElement("div",{style:m},l.a.createElement("b",null,r.numberOfEQARound.toLocaleString("en-US"))),l.a.createElement("p",{className:"m-0",style:d},l.a.createElement("b",null,n("Analytics.eqa_round_hosted")))))))),l.a.createElement(s.a,{item:!0,lg:3,md:3,sm:6,xs:12},l.a.createElement(i.a,{elevation:3,className:"p-16 py-28 text-center h-100 w-100 ".concat(a.root)},l.a.createElement("div",{className:"font-weight-300 px-80 flex flex-center"},l.a.createElement("div",{className:"text-white margin-auto",style:{width:"100%"}},l.a.createElement("div",{style:m},l.a.createElement("b",null,r.numberOfCorrectSampleTube.toLocaleString("en-US"))),l.a.createElement("p",{className:"m-0",style:d},l.a.createElement("b",null,n("Analytics.correct_sample"))))))),l.a.createElement(s.a,{item:!0,lg:3,md:3,sm:6,xs:12},l.a.createElement(i.a,{elevation:3,className:"p-16 py-28 text-center h-100 w-100 ".concat(a.root)},l.a.createElement("div",{className:"font-weight-300 px-80 flex flex-center"},l.a.createElement("div",{className:"text-white margin-auto",style:{width:"100%"}},l.a.createElement("div",{style:m},l.a.createElement("b",null,(r.numberOfIncorrectSampleTube+r.numberOfNotSubmittedSampleTube).toLocaleString("en-US"))),l.a.createElement("p",{className:"m-0",style:d},l.a.createElement("b",null,n("Analytics.incorrect_sample"))))))))})},1865:function(e,a,t){"use strict";t.r(a);var n=t(3),l=t(0),r=t.n(l),c=t(1343),s=t(1345),i=t(1341),o=t(1335),m=t(1331),d=t(18),p=t(1675),u=t(1460),h=t(1461),g=t(1462),y=t(1459),b=t(1463);const E=[{name:"john doe",date:"18 january, 2019",amount:1e3,status:"close",company:"ABC Fintech LTD."},{name:"kessy bryan",date:"10 january, 2019",amount:9e3,status:"open",company:"My Fintech LTD."},{name:"james cassegne",date:"8 january, 2019",amount:5e3,status:"close",company:"Collboy Tech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."},{name:"lucy brown",date:"1 january, 2019",amount:89e3,status:"open",company:"ABC Fintech LTD."}];var f=()=>r.a.createElement("div",{className:"w-100 overflow-auto"},r.a.createElement(u.a,{style:{whiteSpace:"pre"}},r.a.createElement(h.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,{className:"px-0"},"Name"),r.a.createElement(y.a,{className:"px-0"},"Company"),r.a.createElement(y.a,{className:"px-0"},"Start Date"),r.a.createElement(y.a,{className:"px-0"},"Status"),r.a.createElement(y.a,{className:"px-0"},"Amount"),r.a.createElement(y.a,{className:"px-0"},"Action"))),r.a.createElement(b.a,null,E.map((e,a)=>r.a.createElement(g.a,{key:a},r.a.createElement(y.a,{className:"px-0 capitalize",align:"left"},e.name),r.a.createElement(y.a,{className:"px-0 capitalize",align:"left"},e.company),r.a.createElement(y.a,{className:"px-0 capitalize",align:"left"},e.date),r.a.createElement(y.a,{className:"px-0 capitalize"},e.status),r.a.createElement(y.a,{className:"px-0 capitalize"},"$",e.amount),r.a.createElement(y.a,{className:"px-0"},r.a.createElement(o.a,null,r.a.createElement(m.a,{color:"error"},"close")))))))),x=t(390),v=t.n(x),N=t(571),O=t(1),j=t.n(O);a.default=Object(N.a)({},{withTheme:!0})(class extends l.Component{constructor(){super(...arguments),this.state={},this.recenBuyerList=[{imgUrl:j.a.ROOT_PATH+"assets/images/face-1.jpg",name:"john doe",date:"18 january, 2019"},{imgUrl:j.a.ROOT_PATH+"assets/images/face-2.jpg",name:"kessy bryan",date:"10 january, 2019"},{imgUrl:j.a.ROOT_PATH+"assets/images/face-3.jpg",name:"james cassegne",date:"8 january, 2019"},{imgUrl:j.a.ROOT_PATH+"assets/images/face-4.jpg",name:"lucy brown",date:"1 january, 2019"}],this.areaCommonOptions={grid:{left:0,top:0,right:0,bottom:0},legend:{},tooltip:{},xAxis:{show:!1,type:"category",showGrid:!1,boundaryGap:!1},yAxis:{show:!1,type:"value",splitLine:{show:!1}}},this.areaChart1Option={series:[{data:[25,18,20,30,40,43],type:"line",areaStyle:{},smooth:!0}]},this.areaChart2Option={series:[{data:[15,20,20,19,20,28],type:"line",areaStyle:{},smooth:!0}]},this.lineChartOption={grid:{top:"10%",bottom:"10%",left:"5%",right:"5%"},legend:{show:!1,itemGap:20,icon:"circle"},tooltip:{},xAxis:{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLine:{show:!1}},yAxis:{type:"value",axisLine:{show:!1}},series:[{data:[30,40,20,50,40,80,90],type:"line",stack:"This month",name:"This month",smooth:!0,symbolSize:4,lineStyle:{width:4}},{data:[20,50,15,50,30,70,95],type:"line",stack:"Last month",name:"Last month",smooth:!0,symbolSize:4,lineStyle:{width:4}}]}}render(){let{theme:e}=this.props;return r.a.createElement("div",{className:"analytics m-sm-30"},r.a.createElement("div",{className:"mb-sm-30"},r.a.createElement(d.a,{routeSegments:[{name:"Dashboard",path:"/dashboard"},{name:"Analytics"}]})),r.a.createElement(c.a,{container:!0,spacing:3},r.a.createElement(c.a,{item:!0,lg:6,md:6,sm:12,xs:12},r.a.createElement(p.a,null)),r.a.createElement(c.a,{item:!0,lg:3,md:3,sm:12,xs:12},r.a.createElement(s.a,{elevation:3,className:"h-100"},r.a.createElement("div",{className:"px-24 pt-20"},r.a.createElement("div",{className:"card-title"},"total revenue"),r.a.createElement("div",{className:"card-subtitle mb-24"},"$10345"),r.a.createElement(i.a,{variant:"contained",color:"primary"},"+ 180 sales")),r.a.createElement(v.a,{style:{height:"158px"},option:Object(n.a)(Object(n.a)(Object(n.a)({},this.areaCommonOptions),this.areaChart1Option),{},{color:[e.palette.primary.main]})}))),r.a.createElement(c.a,{item:!0,lg:3,md:3,sm:12,xs:12},r.a.createElement(s.a,{elevation:3,className:"h-100"},r.a.createElement("div",{className:"px-24 pt-20"},r.a.createElement("div",{className:"card-title"},"todays traffic"),r.a.createElement("div",{className:"card-subtitle mb-24"},"500"),r.a.createElement(i.a,{className:"text-white",variant:"contained",color:"secondary"},"+ 300 new")),r.a.createElement(v.a,{style:{height:"158px"},option:Object(n.a)(Object(n.a)(Object(n.a)({},this.areaCommonOptions),this.areaChart2Option),{},{color:[e.palette.secondary.main]})}))),r.a.createElement(c.a,{item:!0,lg:8,md:8,sm:12,xs:12},r.a.createElement(d.r,{title:"sales"},r.a.createElement("div",{className:"flex py-20"},r.a.createElement("div",null,r.a.createElement("p",{className:"m-0 mb-4 text-muted capitalize"},"this month"),r.a.createElement("h3",{className:"m-0 text-secondary font-weight-600"},"$180")),r.a.createElement("div",{className:"ml-30"},r.a.createElement("p",{className:"m-0 mb-4 text-muted capitalize"},"last month"),r.a.createElement("h3",{className:"m-0 font-weight-600"},"$160"))),r.a.createElement(v.a,{style:{height:"250px"},option:Object(n.a)(Object(n.a)({},this.lineChartOption),{},{color:[e.palette.primary.main,e.palette.primary.light]})}))),r.a.createElement(c.a,{item:!0,lg:4,md:4,sm:12,xs:12},r.a.createElement(d.r,{title:"top selling products",subtitle:"Updated Today"},r.a.createElement("div",{className:"mt-24"},this.recenBuyerList.map((e,a)=>r.a.createElement("div",{className:"flex flex-middle flex-space-between py-8",key:a},r.a.createElement("div",{className:"flex flex-middle"},r.a.createElement("img",{className:"circular-image-small",src:e.imgUrl,alt:"user"}),r.a.createElement("div",{className:"pl-8 capitalize"},r.a.createElement("p",{className:"m-0"},e.name),r.a.createElement("p",{className:"m-0"},e.date))),r.a.createElement(o.a,null,r.a.createElement(m.a,{color:"primary"},"more_vert"))))))),r.a.createElement(c.a,{item:!0,lg:12,md:12,sm:12,xs:12},r.a.createElement(d.r,{title:"subscriber list"},r.a.createElement(f,null)))))}})}}]);
//# sourceMappingURL=30.25a0dfcb.chunk.js.map