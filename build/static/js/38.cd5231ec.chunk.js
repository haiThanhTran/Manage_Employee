(this["webpackJsonpglobits-react"]=this["webpackJsonpglobits-react"]||[]).push([[38],{1901:function(e,a,t){"use strict";t.r(a);var s=t(3),r=t(0),i=t.n(r),l=t(1),n=t.n(l),m=t(1349),c=t(1348),o=t(1333),d=t(1394),p=t(120),h=t(8),g=t(40),u=t(213);class v extends r.Component{constructor(e){super(e),this.state={email:""},this.handleChange=e=>{e.persist(),this.setState({[e.target.name]:e.target.value})},this.handleFormSubmit=()=>{this.props.resetPassword(Object(s.a)({},this.state))}}render(){const{t:e,i18n:a}=this.props;let{email:t}=this.state;return i.a.createElement("div",{className:"signup flex flex-center w-100 h-100vh"},i.a.createElement("div",{className:"p-8"},i.a.createElement(m.a,{className:"signup-card position-relative y-center"},i.a.createElement(c.a,{container:!0},i.a.createElement(c.a,{item:!0,lg:5,md:5,sm:5,xs:12},i.a.createElement("div",{className:"p-32 flex flex-center flex-middle h-100"},i.a.createElement("img",{src:"/assets/images/illustrations/dreamer.svg",alt:""}))),i.a.createElement(c.a,{item:!0,lg:7,md:7,sm:7,xs:12},i.a.createElement("div",{className:"p-36 h-100 bg-light-gray position-relative"},i.a.createElement(d.ValidatorForm,{ref:"form",onSubmit:this.handleFormSubmit},i.a.createElement(d.TextValidator,{className:"mb-24 w-100",variant:"outlined",label:"Email",onChange:this.handleChange,type:"email",name:"email",value:t,validators:["required","isEmail"],errorMessages:[e("general.errorMessages_required"),e("general.errorMessages_email_valid")]}),i.a.createElement("div",{className:"flex flex-middle"},i.a.createElement(o.a,{variant:"contained",color:"primary",type:"submit"},e("resetPassword")),i.a.createElement("span",{className:"ml-16 mr-16"},e("or")),i.a.createElement(o.a,{className:"capitalize",variant:"contained",onClick:()=>this.props.history.push(n.a.ROOT_PATH+"session/signin")},e("sign_in.title"))))))))))}}a.default=Object(g.g)(Object(p.b)(e=>({resetPassword:h.PropTypes.func.isRequired,login:e.login}),{resetPassword:u.f})(v))}}]);
//# sourceMappingURL=38.cd5231ec.chunk.js.map