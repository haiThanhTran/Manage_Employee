(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1611:function(e,t,a){},1714:function(e,t,a){"use strict";a.d(t,"d",function(){return l}),a.d(t,"b",function(){return s}),a.d(t,"e",function(){return c}),a.d(t,"c",function(){return d}),a.d(t,"a",function(){return u}),a.d(t,"f",function(){return m});var n=a(15),i=a.n(n),o=a(1),r=a.n(o),l=function(e){var t=r.a.API_ENPOINT+"/api/AdministrativeUnit/searchByDto";return i.a.post(t,e)},s=function(e,t){var a={params:{id:e,code:t}},n=r.a.API_ENPOINT+"/api/AdministrativeUnit/checkCode";return i.a.get(n,a)},c=function(e){var t=r.a.API_ENPOINT+"/api/administrativeunit/"+e;return i.a.get(t)},d=function(e){return i.a.delete(r.a.API_ENPOINT+"/api/administrativeunit/"+e)},u=function(e){return i.a.post(r.a.API_ENPOINT+"/api/administrativeunit",e)},m=function(e){return i.a.post(r.a.API_ENPOINT+"/api/administrativeunit",e)}},1715:function(e,t,a){},1740:function(e,t,a){"use strict";var n=a(28),i=a.n(n),o=a(4),r=a(124),l=a(33),s=a(36),c=a(51),d=a(50),u=a(0),m=a.n(u),g=a(1341),f=a(1471),p=a(1337),h=a(1333),v=a(1472),b=a(1345),C=a(1342),E=a(1343),P=a(1463),w=a(1714),O=(a(138),a(1516)),D=a.n(O),S=a(230),N=a(99),A=(a(1461),a(1715),a(1611),a(11)),k=a(1339);function y(e){return m.a.createElement(D.a,{handle:"#draggable-dialog-title",cancel:'[class*="MuiDialogContent-root"]'},m.a.createElement(S.a,e))}N.a.configure({autoClose:1e3,draggable:!1,limit:3});var j=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={name:"",code:"",level:0,isActive:!1,loading:!1},e.handleChange=function(t,a){t.persist(),"switch"!==a?e.setState({[t.target.name]:t.target.value}):e.setState({isActive:t.target.checked})},e.openCircularProgress=function(){e.setState({loading:!0})},e.handleFormSubmit=Object(r.a)(i.a.mark(function t(){var a,n,r,l;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.openCircularProgress();case 2:a=e.state,n=a.id,r=a.code,l=e.props.t,Object(w.b)(n,r).then(function(t){t.data?(console.log("Code \u0111\xe3 \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng"),N.a.warning(l("mess_code")),e.setState({loading:!1})):n?Object(w.f)(Object(o.a)({},e.state)).then(function(){N.a.success(l("mess_edit")),e.setState({loading:!1})}):Object(w.a)(Object(o.a)({},e.state)).then(function(t){null!=t.data&&200==t.status&&(e.state.id=t.data.id,e.setState(Object(o.a)(Object(o.a)({},e.state),{},{loading:!1})),N.a.success(l("mess_add")))})});case 5:case"end":return t.stop()}},t)})),e}return Object(s.a)(a,[{key:"componentWillMount",value:function(){var e=this.props,t=(e.open,e.handleClose,e.item);this.setState(t)}},{key:"render",value:function(){var e=this,t=this.props,a=t.open,n=t.handleClose,i=(t.handleOKEditClose,t.t),o=(t.i18n,this.state),r=o.id,l=o.name,s=o.code,c=(o.level,o.isActive,o.loading);return m.a.createElement(g.a,{open:a,PaperComponent:y,maxWidth:"sm",fullWidth:!0},m.a.createElement("div",{className:Object(A.a)("wrapperButton",!c&&"hidden")},m.a.createElement(k.a,{className:"buttonProgress",size:24})),m.a.createElement(f.a,{style:{cursor:"move"},id:"draggable-dialog-title"},m.a.createElement("span",{className:"mb-20 styleColor"}," ",i(r?"update":"Add")+" "+i("AdministrativeUnit.title")," "),m.a.createElement(p.a,{style:{position:"absolute",right:"10px",top:"10px"},onClick:function(){return n()}},m.a.createElement(h.a,{color:"error",title:i("close")},"close"))),m.a.createElement(P.ValidatorForm,{ref:"form",onSubmit:this.handleFormSubmit,style:{overflowY:"auto",display:"flex",flexDirection:"column"}},m.a.createElement(v.a,{dividers:!0},m.a.createElement(b.a,{className:"",container:!0,spacing:4},m.a.createElement(b.a,{item:!0,sm:12,xs:12},m.a.createElement(P.TextValidator,{className:"w-100 mb-16",label:m.a.createElement("span",{className:"font"},m.a.createElement("span",{style:{color:"red"}}," *"),i("AdministrativeUnit.code")),onChange:this.handleChange,type:"text",name:"code",value:s,validators:["required"],errorMessages:[i("general.errorMessages_required")],variant:"outlined",size:"small"}),m.a.createElement(P.TextValidator,{className:"w-100 mb-16",label:m.a.createElement("span",{className:"font"},m.a.createElement("span",{style:{color:"red"}}," *"),i("AdministrativeUnit.name")),onChange:this.handleChange,type:"text",name:"name",value:l,validators:["required"],errorMessages:[i("general.errorMessages_required")],variant:"outlined",size:"small"})))),m.a.createElement(C.a,{spacing:4,className:"flex flex-end flex-middle"},m.a.createElement(E.a,{variant:"contained",color:"secondary",onClick:function(){return e.props.handleClose()}},i("Cancel")),m.a.createElement(E.a,{variant:"contained",color:"primary",type:"submit"},i("Save")))))}}]),a}(u.Component);t.a=j},1863:function(e,t,a){},2135:function(e,t,a){"use strict";a.r(t);var n=a(17),i=a(33),o=a(36),r=a(51),l=a(50),s=a(0),c=a.n(s),d=(a(1863),a(1864),a(1865)),u=a(1635),m=a(1714),g=a(1740),f=a(22),p=(a(1),a(584)),h=a(1343),v=a(1489);function b(e){var t=Object(p.a)(),a=t.t,n=(t.i18n,e.cell._cell.row.data);return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.onSelect(n,0)}},a("Edit")),c.a.createElement("button",{onClick:function(){return e.onSelect(n,1)}},a("Delete")))}var C=function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(i.a)(this,a);for(var o=arguments.length,r=new Array(o),l=0;l<o;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).ref=null,e.state={rowsPerPage:3,page:0,data:[],totalElements:0,administrativeList:[],shouldOpenEditorDialog:!1,shouldOpenConfirmationDialog:!1},e.SimpleButton=function(e){var t=e.cell._cell.row.data;return c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.onSelect(t,0)}},"Edit"),c.a.createElement("button",{onClick:function(){return e.onSelect(t,1)}},"Delete"))},e.setPage=function(t){e.setState({page:t})},e.setRowsPerPage=function(t){e.setState({rowsPerPage:t.target.value,page:0}),e.updatePageData(0,t.target.value)},e.handleChangePage=function(t,a){e.setPage(a),e.updatePageData(a,e.state.rowsPerPage)},e.handleDownload=function(){var e=new Blob(["Hello, world!"],{type:"text/plain;charset=utf-8"});Object(u.saveAs)(e,"hello world.txt")},e.handleDialogClose=function(){e.setState({shouldOpenEditorDialog:!1,shouldOpenConfirmationDialog:!1}),e.setPage(0),e.updatePageData(e.state.page,e.state.rowsPerPage)},e.handleDeleteAdministrativeUnit=function(t){e.setState({id:t,shouldOpenConfirmationDialog:!0})},e.handleConfirmationResponse=function(){Object(m.c)(e.state.id).then(function(){e.handleDialogClose()})},e.handleEditItem=function(t){e.setState({item:t,shouldOpenEditorDialog:!0})},e.updatePageData=function(t,a){Object(m.d)(t,a).then(function(t){var a=t.data;return e.setState({administrativeList:Object(n.a)(a.content),totalElements:a.totalElements})})},e.rowClick=function(t,a){console.log("ref table: ",e.ref.table),console.log("rowClick id: ${row.getData().id}",a,t)},e.setData=function(){e.setState({data:e.state.administrativeList})},e.clearData=function(){e.setState({data:[]})},e.GetColumns=function(e){return e},e.rowClick=function(t,a){e.setState({item:a.getData()}),console.log("ref table: ",e.ref.table),console.log("rowClick id: ${row.getData().id}",a,t),e.setState({selectedName:a.getData().name})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.updatePageData(this.state.page,this.state.rowsPerPage)}},{key:"render",value:function(){var e=this,t=this.props,a=t.t,n=(t.i18n,[{title:a("Name"),field:"name",width:"150"},{title:a("Code"),field:"code",align:"left",width:"150"},{title:a("Level"),field:"level",width:"150"},{title:a("IsActive"),field:"isActive",width:"20%"},{title:a("Action"),field:"custom",align:"left",width:"250",formatter:Object(d.reactFormatter)(c.a.createElement(b,{onSelect:function(t,a){0===a?e.setState({selectedItem:t,shouldOpenEditorDialog:!0}):e.handleDeleteAdministrativeUnit(t.id)}}))}]),i=this.state,o=(i.rowsPerPage,i.page,i.administrativeList),r=i.shouldOpenConfirmationDialog,l=i.shouldOpenEditorDialog;return c.a.createElement("div",null,c.a.createElement(h.a,{className:"mb-16",variant:"contained",color:"primary",onClick:function(){return e.setState({shouldOpenEditorDialog:!0,item:{}})}},a("AdministrativeUnitTable.AddNew")),l&&c.a.createElement(g.a,{handleClose:this.handleDialogClose,open:this.state.shouldOpenEditorDialog,item:this.state.item}),r&&c.a.createElement(f.c,{open:r,onConfirmDialogClose:this.handleDialogClose,onYesClick:this.handleConfirmationResponse,text:"Are you sure to delete?"}),c.a.createElement(d.React15Tabulator,{ref:function(t){return e.ref=t},columns:n,data:o,rowClick:this.rowClick,options:{height:"90%",movableRows:!1},"data-custom-attr":"test-custom-attribute",className:"custom-css-class",resizableColumns:"false",movableColumns:"false",scrollToColumnIfVisible:"true",selectableRollingSelection:"false"}),c.a.createElement(v.a,{align:"left",className:"px-16",rowsPerPageOptions:[1,2,3,5,10,25],component:"div",count:this.state.totalElements,rowsPerPage:this.state.rowsPerPage,page:this.state.page,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.setRowsPerPage}))}}]),a}(c.a.Component);t.default=C}}]);
//# sourceMappingURL=25.36f07e90.chunk.js.map