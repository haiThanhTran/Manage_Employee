(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1650:function(e,t,a){"use strict";var n=a(0),s=a.n(n),l=a(138);t.a=class extends n.Component{constructor(){super(...arguments),this.state={},this.appContainer=document.querySelector(".scrollable-content")}render(){let{to:e,onScroll:t}=this.props;return s.a.createElement("a",{href:"#".concat(e),onClick:a=>{Object(l.f)(this.appContainer?this.appContainer:window,e),t&&(a.preventDefault(),t(a))}},this.props.children)}}},1651:function(e,t,a){"use strict";var n=a(3),s=a(0),l=a.n(s),r=a(1512),i=a(1513),c=a(1343),o=a(1345),m=a(1527),d=a(1346),u=a(1526),h=a(1341);t.a=class extends s.Component{constructor(){super(...arguments),this.pricingList=[{title:"Developer",subtitle:"For New Developer",price:"Free",allowedOfferIndexList:[0,1,2]},{title:"Starter",subtitle:"For Professional Developer",price:30,allowedOfferIndexList:[0,1,2,3]},{title:"Business",subtitle:"For Small Businesses",price:60,allowedOfferIndexList:[0,1,2,3,4]},{title:"Enterprise",subtitle:"For Large companies",price:160,allowedOfferIndexList:[0,1,2,3,4,5]}],this.offerList=["10GB of Bandwidth","Max 50 connection","512MB RAM","Unlimited access","Unlimited User","Data analytics"],this.state={switchToggled:!1,plan:"Mo",off:10},this.handleSwitchChange=(()=>{let{switchToggled:e,plan:t}=this.state;t=(e=!e)?"Yr":"Mo",this.setState({switchToggled:e,plan:t})})}getPriceList(){let{switchToggled:e,off:t}=this.state;return e?[...this.pricingList].map(e=>{let a=Object(n.a)({},e),{price:s}=a;return"Free"!==s&&(s*=12,s=Math.round(s-s*t/100)),a.price=s,a}):this.pricingList}render(){return l.a.createElement("div",{className:"section section-pricing1",id:"pricing1"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"section__header"},l.a.createElement("h2",null,"Choose a Plan"),l.a.createElement(r.a,{control:l.a.createElement(i.a,{color:"primary",checked:this.state.switchState,onChange:this.handleSwitchChange}),label:"Get up to 10% discount annually"})),l.a.createElement(c.a,{container:!0,spacing:2},this.getPriceList().map(e=>{let{title:t,subtitle:a,price:n,allowedOfferIndexList:s}=e;return l.a.createElement(c.a,{item:!0,lg:3,md:3,sm:6,xs:12,key:t},l.a.createElement(o.a,{className:"text-center card"},l.a.createElement(m.a,{className:"Starter"===t?"pricing1__card-header pricing1__highlighted":"pricing1__card-header",title:t,subheader:a}),l.a.createElement(d.a,null),l.a.createElement(u.a,{className:"pricing1__card-content"},l.a.createElement("h1",null,"number"==typeof n?"$ ".concat(n," /").concat(this.state.plan):"Free"),this.offerList.map((e,t)=>l.a.createElement("div",{key:t,className:s.includes(t)?"":"text-muted"},e)),l.a.createElement("div",{className:"text-center"},l.a.createElement(h.a,{color:"secondary",variant:"contained"},"Choose")))))}))))}}},1652:function(e,t,a){"use strict";var n=a(0),s=a.n(n),l=a(1400),r=a(1510),i=a(1331);t.a=class extends n.Component{constructor(){super(...arguments),this.state={name:"",email:"",subject:"",message:""},this.handleSubmit=(e=>{}),this.handleChange=(e=>{e.persist(),this.setState({[e.target.name]:e.target.value})})}render(){let{name:e,email:t,subject:a,message:n}=this.state;return s.a.createElement("div",{className:"section section-contact1 light-gray",id:"contact1"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"section__header"},s.a.createElement("h2",null,"Send Us an Email"),s.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, error.")),s.a.createElement(l.ValidatorForm,{ref:"form",onSubmit:this.handleSubmit,onError:e=>null},s.a.createElement(l.TextValidator,{className:"mb-16 w-100",label:"Name",onChange:this.handleChange,name:"name",value:e,validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(l.TextValidator,{className:"my-16 w-100",label:"Email",onChange:this.handleChange,name:"email",multiline:!0,value:t,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),s.a.createElement(l.TextValidator,{className:"my-16 w-100",label:"Subject",onChange:this.handleChange,name:"subject",value:a,validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(l.TextValidator,{className:"my-16 mb-32 w-100",label:"Message",onChange:this.handleChange,name:"message",multiline:!0,value:n,validators:["required"],errorMessages:["this field is required"]}),s.a.createElement(r.a,{color:"primary",type:"submit"},s.a.createElement(i.a,null,"send")))))}}},1653:function(e,t,a){"use strict";var n=a(0),s=a.n(n),l=a(1343),r=a(1341),i=a(1331);t.a=class extends n.Component{constructor(){super(...arguments),this.state={}}render(){return s.a.createElement("div",{className:"section-footer1 bg-light-dark",id:"footer1"},s.a.createElement("div",{className:"container"},s.a.createElement(l.a,{container:!0},s.a.createElement(l.a,{item:!0,lg:6,md:6,sm:12},s.a.createElement("div",{className:"footer1__about"},s.a.createElement("h4",null,"About Us"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit. Officiis perferendis rem, aut aliquam."),s.a.createElement(r.a,{variant:"contained",color:"secondary"},"Contact Us"))),s.a.createElement(l.a,{item:!0,lg:3,md:3,sm:12},s.a.createElement("div",{className:"footer1__contact"},s.a.createElement("h4",null,"Contact"),s.a.createElement("div",{className:"px-16 my-32"},s.a.createElement(i.a,{className:"footer1__contact__icon"},"mail"),s.a.createElement("div",{className:"pl-16"},s.a.createElement("h5",{className:"m-0 p-0"},"Email"),s.a.createElement("p",{className:"m-0 p-0"},"email@abc.com"))),s.a.createElement("div",{className:"px-16 mt-32"},s.a.createElement(i.a,{className:"footer1__contact__icon"},"location_on"),s.a.createElement("div",{className:"pl-16"},s.a.createElement("h5",{className:"m-0 p-0"},"Adress"),s.a.createElement("p",{className:"m-0 p-0"},"Topoban, Akhalia Sylhet 3114, BD"))))),s.a.createElement(l.a,{item:!0,lg:3,md:3,sm:12},s.a.createElement("div",{className:"footer1__disclaimer"},s.a.createElement("h4",null,"Disclaimer"),s.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam?"),s.a.createElement("div",{className:"mt-32 footer1__disclaimer__link"},s.a.createElement("a",{href:"#linkedin",className:"px-8"},s.a.createElement("img",{src:"./assets/images/social-linkedin.png",alt:""})),s.a.createElement("a",{href:"#twitter",className:"px-8"},s.a.createElement("img",{src:"./assets/images/social-twitter.png",alt:""})),s.a.createElement("a",{href:"#facebook",className:"px-8"},s.a.createElement("img",{src:"./assets/images/social-facebook.png",alt:""}))))))))}}},1847:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(138),r=a(1343),i=(a(1345),a(1331));a(1341);a(1481),a(1470);var c=a(1510),o=a(1),m=a.n(o),d=a(13),u=a.n(d);const h=m.a.API_ENPOINT+"/public",p=h+"/EQARound",E=()=>{var e=p+"/getCurrent";return u.a.get(e)};var g=a(285),f=a.n(g),_=a(118),v=a(116),N=a(8);var b=Object(_.b)(e=>({logoutUser:N.PropTypes.func.isRequired}),{logoutUser:v.d})(class extends n.Component{constructor(e){super(e),this.handleSignOut=(()=>{this.props.logoutUser()}),this.state={currentEQARound:null},E().then(e=>{let t=e.data;this.setState({currentEQARound:t})})}render(){const{t:e,i18n:t}=this.props;let{currentEQARound:a}=this.state;return s.a.createElement("section",{className:"section section-intro1 section-intro3",id:"intro3"},s.a.createElement("div",{className:"container"},s.a.createElement(r.a,{container:!0,spacing:3,justify:"center"},a&&a.id&&a.eqaPlanning?s.a.createElement(r.a,{item:!0,md:6},s.a.createElement("h1",{className:"section-intro1__title"},e("landing_page.noti")," ",a.name),s.a.createElement("div",{className:"section-intro1__subtitle"},e("landing_page.eqaPlanning")," ",a.eqaPlanning.name),s.a.createElement("div",{className:"section-intro1__list"},s.a.createElement("div",{className:"section-intro1__list__item text-muted"},s.a.createElement(i.a,{color:"secondary"},"alarm_on")," ",e("landing_page.startDate")," ",f()(a.startDate).format("DD/MM/YYYY")),s.a.createElement("div",{className:"section-intro1__list__item text-muted"},s.a.createElement(i.a,{color:"secondary"},"alarm_off")," ",e("landing_page.endDate")," ",f()(a.endDate).format("DD/MM/YYYY"))),s.a.createElement("div",null,s.a.createElement(c.a,{variant:"extended",size:"large",color:"primary","aria-label":"Buy",className:"btn-action m-8",href:m.a.ROOT_PATH+"session/signup-register-account"},s.a.createElement(i.a,{className:"mr-16"},"person_add"),e("sign_up.title")),s.a.createElement(c.a,{variant:"extended",size:"large",color:"primary","aria-label":"Buy",className:"btn-action m-8",onClick:this.handleSignOut},s.a.createElement(i.a,{className:"mr-16"},"person_pin"),e("sign_in.title")))):s.a.createElement(r.a,{item:!0,md:6},s.a.createElement("h1",{className:"section-intro1__title"},e("landing_page.noti")," ",e("landing_page.no_eqaRound"))),s.a.createElement(r.a,{item:!0,md:6},s.a.createElement("div",{className:"intro3__product"},s.a.createElement("img",{src:"./assets/images/illustrations/2.svg",alt:""}))))))}}),C=a(1335),x=a(91);a(1650);var y=Object(_.b)(e=>({logoutUser:N.PropTypes.func.isRequired}),{logoutUser:v.d})(class extends n.Component{constructor(){super(...arguments),this.handleSignOut=(()=>{this.props.logoutUser()}),this.state={isTop:!0,isClosed:!0},this.close=(()=>{this.setState({isClosed:!0})})}componentDidMount(){this.scrollableElement=document.querySelector(".scrollable-content"),this.scrollableElement||(this.scrollableElement=window),this.scrollableElement&&(this.handleScrollRef=this.handleScroll(),this.scrollableElement.addEventListener("scroll",this.handleScrollRef))}componentWillUnmount(){this.scrollableElement&&this.scrollableElement.removeEventListener("scroll",this.handleScrollRef)}handleScroll(){return Object(l.b)(()=>{if(this.scrollableElement){let e=this.scrollableElement.scrollY<100;e!==this.state.isTop&&this.setState({isTop:e})}},20)}render(){const{t:e,i18n:t}=this.props;let a=this.state.isClosed?"menu":"close";return s.a.createElement("section",{className:Object(l.a)({header:!0,"header-fixed":!this.state.isTop,closed:this.state.isClosed})},s.a.createElement("div",{className:"container header-container"},s.a.createElement("div",{className:"brand"},s.a.createElement("img",{src:"./assets/images/logo-full.png",alt:""})),s.a.createElement("ul",{className:"navigation"},s.a.createElement("li",null,s.a.createElement(x.b,{to:"/"},"Trang ch\u1ee7"))),s.a.createElement("div",{className:"m-auto"}),s.a.createElement(c.a,{variant:"extended",size:"medium",color:"secondary","aria-label":"Buy",className:"mr-16",href:m.a.ROOT_PATH+"session/signup-register-account"},s.a.createElement(i.a,{className:"mr-16"},"person_add"),e("sign_up.title")),s.a.createElement(c.a,{variant:"extended",size:"medium",color:"secondary","aria-label":"Buy",className:"",onClick:this.handleSignOut},s.a.createElement(i.a,{className:"mr-16"},"person_pin"),e("sign_in.title")),s.a.createElement(C.a,{className:"header__toggle",onClick:()=>{this.setState({isClosed:!this.state.isClosed})}},s.a.createElement(i.a,null,a))))}});a(1651);var w=a(1653);a(1652);t.default=class extends n.Component{constructor(){super(...arguments),this.state={}}componentWillUnmount(){Object(l.f)("root")}render(){const{t:e,i18n:t}=this.props;return s.a.createElement("div",{className:"landing"},s.a.createElement(y,{t:e,i18n:t}),s.a.createElement(b,{t:e,i18n:t}),s.a.createElement(w.a,{t:e,i18n:t}))}}}}]);
//# sourceMappingURL=35.7602ebbc.chunk.js.map