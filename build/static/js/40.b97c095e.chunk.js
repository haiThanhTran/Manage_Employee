(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{1839:function(e,a,t){"use strict";t.r(a);var s=t(3),r=t(0),i=t.n(r),l=t(1345),n=t(1343),o=t(1341),m=t(1337),c=t(19),d=t(1400),p=t(118),g=t(8),h=t(40),u=t(211),w=t(385);a.default=Object(c.a)(e=>({wrapper:{position:"relative"},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}}),{withTheme:!0})(Object(h.g)(Object(p.b)(e=>({loginWithEmailAndPassword:g.PropTypes.func.isRequired,login:e.login}),{loginWithEmailAndPassword:u.e})(class extends r.Component{constructor(){super(...arguments),this.state={email:"",password:"",agreement:""},this.handleChange=(e=>{e.persist(),this.setState({[e.target.name]:e.target.value})}),this.handleFormSubmit=(e=>{this.props.loginWithEmailAndPassword(Object(s.a)({},this.state))})}render(){const{t:e,i18n:a}=this.props;let{email:t,password:s}=this.state,{classes:r}=this.props;return i.a.createElement("div",{className:"signup flex flex-center w-100 h-100vh"},i.a.createElement("div",{className:"p-8"},i.a.createElement(w.Helmet,null,i.a.createElement("title",null,e("Dashboard.login")," | ",e("web_site"))),i.a.createElement(l.a,{className:"signup-card position-relative y-center"},i.a.createElement(n.a,{container:!0},i.a.createElement(n.a,{item:!0,lg:5,md:5,sm:5,xs:12},i.a.createElement("div",{className:"p-32 flex flex-center flex-middle h-100"},i.a.createElement("img",{src:"/assets/images/logos/fashion_store.jpg",alt:""}))),i.a.createElement(n.a,{item:!0,lg:7,md:7,sm:7,xs:12},i.a.createElement("div",{className:"p-36 h-100 bg-light-gray position-relative"},i.a.createElement(d.ValidatorForm,{ref:"form",onSubmit:this.handleFormSubmit},i.a.createElement(d.TextValidator,{className:"mb-24 w-100",variant:"outlined",label:e("username"),onChange:this.handleChange,type:"text",name:"email",value:t.trim(),validators:["required"],errorMessages:[e("general.errorMessages_required")]}),i.a.createElement(d.TextValidator,{className:"mb-16 w-100",label:e("password"),variant:"outlined",onChange:this.handleChange,name:"password",type:"password",value:s.trim(),validators:["required"],errorMessages:[e("general.errorMessages_required")]}),i.a.createElement("div",{className:"flex flex-center mb-8"},i.a.createElement("div",{className:r.wrapper,style:{width:"100%"}},i.a.createElement(o.a,{variant:"contained",color:"primary",disabled:this.props.login.loading,type:"submit",style:{width:"100%"}},e("sign_in.title")),this.props.login.loading&&i.a.createElement(m.a,{size:24,className:r.buttonProgress}))),i.a.createElement("div",{className:"flex flex-center"},i.a.createElement(o.a,{className:"text-primary",onClick:()=>this.props.history.push("/session/forgot-password")},e("forgot_password"))))))))))}})))}}]);
//# sourceMappingURL=40.b97c095e.chunk.js.map