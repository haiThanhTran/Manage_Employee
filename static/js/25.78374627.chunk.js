(this["webpackJsonpglobits-react"]=this["webpackJsonpglobits-react"]||[]).push([[25],{1648:function(e,t,a){},1766:function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"e",(function(){return c})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return d})),a.d(t,"f",(function(){return m}));var n=a(13),i=a.n(n),o=a(1),r=a.n(o),l=function(e){var t=r.a.API_ENPOINT+"/api/AdministrativeUnit/searchByDto";return i.a.post(t,e)},s=function(e,t){var a={params:{id:e,code:t}},n=r.a.API_ENPOINT+"/api/AdministrativeUnit/checkCode";return i.a.get(n,a)},c=function(e){var t=r.a.API_ENPOINT+"/api/administrativeunit/"+e;return i.a.get(t)},u=function(e){return i.a.delete(r.a.API_ENPOINT+"/api/administrativeunit/"+e)},d=function(e){return i.a.post(r.a.API_ENPOINT+"/api/administrativeunit",e)},m=function(e){return i.a.post(r.a.API_ENPOINT+"/api/administrativeunit",e)}},1767:function(e,t,a){},1793:function(e,t,a){"use strict";var n=a(12),i=a.n(n),o=a(3),r=a(128),l=a(36),s=a(38),c=a(55),u=a(54),d=a(56),m=a(0),g=a.n(m),f=a(1353),h=a(1650),p=a(1337),v=a(1336),b=a(1651),C=a(1355),E=a(1354),P=a(1340),w=a(1456),O=a(1766),D=(a(143),a(1560)),S=a.n(D),N=a(234),A=a(29),j=(a(605),a(1767),a(1648),a(14)),k=a(1339);function y(e){return g.a.createElement(S.a,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]'},g.a.createElement(N.a,e))}A.a.configure({autoClose:1e3,draggable:!1,limit:3});var x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),d=0;d<n;d++)s[d]=arguments[d];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={name:"",code:"",level:0,isActive:!1,loading:!1},a.handleChange=function(e,t){e.persist(),"switch"!==t?a.setState({[e.target.name]:e.target.value}):a.setState({isActive:e.target.checked})},a.openCircularProgress=function(){a.setState({loading:!0})},a.handleFormSubmit=Object(r.a)(i.a.mark((function e(){var t,n,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.openCircularProgress();case 2:t=a.state,n=t.id,r=t.code,l=a.props.t,Object(O.b)(n,r).then((function(e){e.data?(console.log("Code \u0111\xe3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng"),A.a.warning(l("mess_code")),a.setState({loading:!1})):n?Object(O.f)(Object(o.a)({},a.state)).then((function(){A.a.success(l("mess_edit")),a.setState({loading:!1})})):Object(O.a)(Object(o.a)({},a.state)).then((function(e){null!=e.data&&200==e.status&&(a.state.id=e.data.id,a.setState(Object(o.a)(Object(o.a)({},a.state),{},{loading:!1})),A.a.success(l("mess_add")))}))}));case 5:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this.props,t=(e.open,e.handleClose,e.item);this.setState(t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.open,n=t.handleClose,i=(t.handleOKEditClose,t.t),o=(t.i18n,this.state),r=o.id,l=o.name,s=o.code,c=(o.level,o.isActive,o.loading);return g.a.createElement(f.a,{open:a,PaperComponent:y,maxWidth:"sm",fullWidth:!0},g.a.createElement("div",{className:Object(j.a)("wrapperButton",!c&&"hidden")},g.a.createElement(k.a,{className:"buttonProgress",size:24})),g.a.createElement(h.a,{style:{cursor:"move"},id:"draggable-dialog-title"},g.a.createElement("span",{className:"mb-20 styleColor"}," ",i(r?"update":"Add")+" "+i("AdministrativeUnit.title")," "),g.a.createElement(p.a,{style:{position:"absolute",right:"10px",top:"10px"},onClick:function(){return n()}},g.a.createElement(v.a,{color:"error",title:i("close")},"close"))),g.a.createElement(w.ValidatorForm,{ref:"form",onSubmit:this.handleFormSubmit,style:{overflowY:"auto",display:"flex",flexDirection:"column"}},g.a.createElement(b.a,{dividers:!0},g.a.createElement(C.a,{className:"",container:!0,spacing:4},g.a.createElement(C.a,{item:!0,sm:12,xs:12},g.a.createElement(w.TextValidator,{className:"w-100 mb-16",label:g.a.createElement("span",{className:"font"},g.a.createElement("span",{style:{color:"red"}}," *"),i("AdministrativeUnit.code")),onChange:this.handleChange,type:"text",name:"code",value:s,validators:["required"],errorMessages:[i("general.errorMessages_required")],variant:"outlined",size:"small"}),g.a.createElement(w.TextValidator,{className:"w-100 mb-16",label:g.a.createElement("span",{className:"font"},g.a.createElement("span",{style:{color:"red"}}," *"),i("AdministrativeUnit.name")),onChange:this.handleChange,type:"text",name:"name",value:l,validators:["required"],errorMessages:[i("general.errorMessages_required")],variant:"outlined",size:"small"})))),g.a.createElement(E.a,{spacing:4,className:"flex flex-end flex-middle"},g.a.createElement(P.a,{variant:"contained",color:"secondary",onClick:function(){return e.props.handleClose()}},i("Cancel")),g.a.createElement(P.a,{variant:"contained",color:"primary",type:"submit"},i("Save")))))}}]),t}(m.Component);t.a=x},1920:function(e,t,a){},2210:function(e,t,a){"use strict";a.r(t);var n=a(18),i=a(36),o=a(38),r=a(55),l=a(54),s=a(56),c=a(0),u=a.n(c),d=(a(1920),a(1921),a(1922)),m=a(1686),g=a(1766),f=a(1793),h=a(24),p=(a(1),a(582)),v=a(1340),b=a(1487);function C(e){var t=Object(p.a)(),a=t.t,n=(t.i18n,e.cell._cell.row.data);return u.a.createElement("div",null,u.a.createElement("button",{onClick:function(){return e.onSelect(n,0)}},a("Edit")),u.a.createElement("button",{onClick:function(){return e.onSelect(n,1)}},a("Delete")))}var E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).ref=null,a.state={rowsPerPage:3,page:0,data:[],totalElements:0,administrativeList:[],shouldOpenEditorDialog:!1,shouldOpenConfirmationDialog:!1},a.SimpleButton=function(e){var t=e.cell._cell.row.data;return u.a.createElement("div",null,u.a.createElement("button",{onClick:function(){return e.onSelect(t,0)}},"Edit"),u.a.createElement("button",{onClick:function(){return e.onSelect(t,1)}},"Delete"))},a.setPage=function(e){a.setState({page:e})},a.setRowsPerPage=function(e){a.setState({rowsPerPage:e.target.value,page:0}),a.updatePageData(0,e.target.value)},a.handleChangePage=function(e,t){a.setPage(t),a.updatePageData(t,a.state.rowsPerPage)},a.handleDownload=function(){var e=new Blob(["Hello, world!"],{type:"text/plain;charset=utf-8"});Object(m.saveAs)(e,"hello world.txt")},a.handleDialogClose=function(){a.setState({shouldOpenEditorDialog:!1,shouldOpenConfirmationDialog:!1}),a.setPage(0),a.updatePageData(a.state.page,a.state.rowsPerPage)},a.handleDeleteAdministrativeUnit=function(e){a.setState({id:e,shouldOpenConfirmationDialog:!0})},a.handleConfirmationResponse=function(){Object(g.c)(a.state.id).then((function(){a.handleDialogClose()}))},a.handleEditItem=function(e){a.setState({item:e,shouldOpenEditorDialog:!0})},a.updatePageData=function(e,t){Object(g.d)(e,t).then((function(e){var t=e.data;return a.setState({administrativeList:Object(n.a)(t.content),totalElements:t.totalElements})}))},a.rowClick=function(e,t){console.log("ref table: ",a.ref.table),console.log("rowClick id: ${row.getData().id}",t,e)},a.setData=function(){a.setState({data:a.state.administrativeList})},a.clearData=function(){a.setState({data:[]})},a.GetColumns=function(e){return e},a.rowClick=function(e,t){a.setState({item:t.getData()}),console.log("ref table: ",a.ref.table),console.log("rowClick id: ${row.getData().id}",t,e),a.setState({selectedName:t.getData().name})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updatePageData(this.state.page,this.state.rowsPerPage)}},{key:"render",value:function(){var e=this,t=this.props,a=t.t,n=(t.i18n,[{title:a("Name"),field:"name",width:"150"},{title:a("Code"),field:"code",align:"left",width:"150"},{title:a("Level"),field:"level",width:"150"},{title:a("IsActive"),field:"isActive",width:"20%"},{title:a("Action"),field:"custom",align:"left",width:"250",formatter:Object(d.reactFormatter)(u.a.createElement(C,{onSelect:function(t,a){0===a?e.setState({selectedItem:t,shouldOpenEditorDialog:!0}):e.handleDeleteAdministrativeUnit(t.id)}}))}]),i=this.state,o=(i.rowsPerPage,i.page,i.administrativeList),r=i.shouldOpenConfirmationDialog,l=i.shouldOpenEditorDialog;return u.a.createElement("div",null,u.a.createElement(v.a,{className:"mb-16",variant:"contained",color:"primary",onClick:function(){return e.setState({shouldOpenEditorDialog:!0,item:{}})}},a("AdministrativeUnitTable.AddNew")),l&&u.a.createElement(f.a,{handleClose:this.handleDialogClose,open:this.state.shouldOpenEditorDialog,item:this.state.item}),r&&u.a.createElement(h.c,{open:r,onConfirmDialogClose:this.handleDialogClose,onYesClick:this.handleConfirmationResponse,text:"Are you sure to delete?"}),u.a.createElement(d.React15Tabulator,{ref:function(t){return e.ref=t},columns:n,data:o,rowClick:this.rowClick,options:{height:"90%",movableRows:!1},"data-custom-attr":"test-custom-attribute",className:"custom-css-class",resizableColumns:"false",movableColumns:"false",scrollToColumnIfVisible:"true",selectableRollingSelection:"false"}),u.a.createElement(b.a,{align:"left",className:"px-16",rowsPerPageOptions:[1,2,3,5,10,25],component:"div",count:this.state.totalElements,rowsPerPage:this.state.rowsPerPage,page:this.state.page,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.setRowsPerPage}))}}]),t}(u.a.Component);t.default=E}}]);
//# sourceMappingURL=25.78374627.chunk.js.map