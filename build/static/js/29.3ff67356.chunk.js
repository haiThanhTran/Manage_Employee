(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1710:function(e,a,t){"use strict";var n=t(33),i=t(36),r=t(51),l=t(50),s=t(0),c=t.n(s),o=t(138),m=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e.appContainer=document.querySelector(".scrollable-content"),e}return Object(i.a)(t,[{key:"render",value:function(){var e=this,a=this.props,t=a.to,n=a.onScroll;return c.a.createElement("a",{href:"#".concat(t),onClick:function(a){Object(o.f)(e.appContainer?e.appContainer:window,t),n&&(a.preventDefault(),n(a))}},this.props.children)}}]),t}(s.Component);a.a=m},1711:function(e,a,t){"use strict";var n=t(4),i=t(17),r=t(33),l=t(36),s=t(51),c=t(50),o=t(0),m=t.n(o),u=t(1518),d=t(1519),p=t(1345),E=t(1347),g=t(1527),h=t(1348),v=t(1526),f=t(1343),b=function(e){Object(s.a)(t,e);var a=Object(c.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).pricingList=[{title:"Developer",subtitle:"For New Developer",price:"Free",allowedOfferIndexList:[0,1,2]},{title:"Starter",subtitle:"For Professional Developer",price:30,allowedOfferIndexList:[0,1,2,3]},{title:"Business",subtitle:"For Small Businesses",price:60,allowedOfferIndexList:[0,1,2,3,4]},{title:"Enterprise",subtitle:"For Large companies",price:160,allowedOfferIndexList:[0,1,2,3,4,5]}],e.offerList=["10GB of Bandwidth","Max 50 connection","512MB RAM","Unlimited access","Unlimited User","Data analytics"],e.state={switchToggled:!1,plan:"Mo",off:10},e.handleSwitchChange=function(){var a=e.state,t=a.switchToggled,n=a.plan;n=(t=!t)?"Yr":"Mo",e.setState({switchToggled:t,plan:n})},e}return Object(l.a)(t,[{key:"getPriceList",value:function(){var e=this.state,a=e.switchToggled,t=e.off;return a?Object(i.a)(this.pricingList).map(function(e){var a=Object(n.a)({},e),i=a.price;return"Free"!==i&&(i*=12,i=Math.round(i-i*t/100)),a.price=i,a}):this.pricingList}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"section section-pricing1",id:"pricing1"},m.a.createElement("div",{className:"container"},m.a.createElement("div",{className:"section__header"},m.a.createElement("h2",null,"Choose a Plan"),m.a.createElement(u.a,{control:m.a.createElement(d.a,{color:"primary",checked:this.state.switchState,onChange:this.handleSwitchChange}),label:"Get up to 10% discount annually"})),m.a.createElement(p.a,{container:!0,spacing:2},this.getPriceList().map(function(a){var t=a.title,n=a.subtitle,i=a.price,r=a.allowedOfferIndexList;return m.a.createElement(p.a,{item:!0,lg:3,md:3,sm:6,xs:12,key:t},m.a.createElement(E.a,{className:"text-center card"},m.a.createElement(g.a,{className:"Starter"===t?"pricing1__card-header pricing1__highlighted":"pricing1__card-header",title:t,subheader:n}),m.a.createElement(h.a,null),m.a.createElement(v.a,{className:"pricing1__card-content"},m.a.createElement("h1",null,"number"==typeof i?"$ ".concat(i," /").concat(e.state.plan):"Free"),e.offerList.map(function(e,a){return m.a.createElement("div",{key:a,className:r.includes(a)?"":"text-muted"},e)}),m.a.createElement("div",{className:"text-center"},m.a.createElement(f.a,{color:"secondary",variant:"contained"},"Choose")))))}))))}}]),t}(o.Component);a.a=b},1712:function(e,a,t){"use strict";var n=t(33),i=t(36),r=t(51),l=t(50),s=t(0),c=t.n(s),o=t(1463),m=t(1515),u=t(1333),d=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={name:"",email:"",subject:"",message:""},e.handleSubmit=function(e){},e.handleChange=function(a){a.persist(),e.setState({[a.target.name]:a.target.value})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,a=e.name,t=e.email,n=e.subject,i=e.message;return c.a.createElement("div",{className:"section section-contact1 light-gray",id:"contact1"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"section__header"},c.a.createElement("h2",null,"Send Us an Email"),c.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, error.")),c.a.createElement(o.ValidatorForm,{ref:"form",onSubmit:this.handleSubmit,onError:function(e){return null}},c.a.createElement(o.TextValidator,{className:"mb-16 w-100",label:"Name",onChange:this.handleChange,name:"name",value:a,validators:["required"],errorMessages:["this field is required"]}),c.a.createElement(o.TextValidator,{className:"my-16 w-100",label:"Email",onChange:this.handleChange,name:"email",multiline:!0,value:t,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"]}),c.a.createElement(o.TextValidator,{className:"my-16 w-100",label:"Subject",onChange:this.handleChange,name:"subject",value:n,validators:["required"],errorMessages:["this field is required"]}),c.a.createElement(o.TextValidator,{className:"my-16 mb-32 w-100",label:"Message",onChange:this.handleChange,name:"message",multiline:!0,value:i,validators:["required"],errorMessages:["this field is required"]}),c.a.createElement(m.a,{color:"primary",type:"submit"},c.a.createElement(u.a,null,"send")))))}}]),t}(s.Component);a.a=d},1713:function(e,a,t){"use strict";var n=t(33),i=t(36),r=t(51),l=t(50),s=t(0),c=t.n(s),o=t(1345),m=t(1343),u=t(1333),d=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"section-footer1 bg-light-dark",id:"footer1"},c.a.createElement("div",{className:"container"},c.a.createElement(o.a,{container:!0},c.a.createElement(o.a,{item:!0,lg:6,md:6,sm:12},c.a.createElement("div",{className:"footer1__about"},c.a.createElement("h4",null,"About Us"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit. Officiis perferendis rem, aut aliquam."),c.a.createElement(m.a,{variant:"contained",color:"secondary"},"Contact Us"))),c.a.createElement(o.a,{item:!0,lg:3,md:3,sm:12},c.a.createElement("div",{className:"footer1__contact"},c.a.createElement("h4",null,"Contact"),c.a.createElement("div",{className:"px-16 my-32"},c.a.createElement(u.a,{className:"footer1__contact__icon"},"mail"),c.a.createElement("div",{className:"pl-16"},c.a.createElement("h5",{className:"m-0 p-0"},"Email"),c.a.createElement("p",{className:"m-0 p-0"},"email@abc.com"))),c.a.createElement("div",{className:"px-16 mt-32"},c.a.createElement(u.a,{className:"footer1__contact__icon"},"location_on"),c.a.createElement("div",{className:"pl-16"},c.a.createElement("h5",{className:"m-0 p-0"},"Adress"),c.a.createElement("p",{className:"m-0 p-0"},"Topoban, Akhalia Sylhet 3114, BD"))))),c.a.createElement(o.a,{item:!0,lg:3,md:3,sm:12},c.a.createElement("div",{className:"footer1__disclaimer"},c.a.createElement("h4",null,"Disclaimer"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam?"),c.a.createElement("div",{className:"mt-32 footer1__disclaimer__link"},c.a.createElement("a",{href:"#linkedin",className:"px-8"},c.a.createElement("img",{src:"./assets/images/social-linkedin.png",alt:""})),c.a.createElement("a",{href:"#twitter",className:"px-8"},c.a.createElement("img",{src:"./assets/images/social-twitter.png",alt:""})),c.a.createElement("a",{href:"#facebook",className:"px-8"},c.a.createElement("img",{src:"./assets/images/social-facebook.png",alt:""}))))))))}}]),t}(s.Component);a.a=d},1724:function(e,a,t){"use strict";var n=t(33),i=t(36),r=t(51),l=t(50),s=t(0),c=t.n(s),o=t(1835),m=t(1515),u=t(1767),d=t.n(u),p=t(1766),E=t.n(p),g=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).swiperOptions={direction:"horizontal",allowSlideNext:!0,allowSlidePrev:!0,slidesPerView:3,spaceBetween:32,autoplay:{delay:5e3,disableOnInteraction:!1},breakpoints:{480:{slidesPerView:1,spaceBetween:0},768:{slidesPerView:2}},pagination:{el:".swiper-pagination",type:"bullets",bulletActiveClass:"bullet-active",clickable:!0},navigation:{nextEl:".carousel__button-next",prevEl:".carousel__button-prev"}},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){new o.a(".swiper-container",this.swiperOptions)}},{key:"render",value:function(){var e=this.props.children;return c.a.createElement("div",{className:"relative w-100"},c.a.createElement("div",{className:"swiper-container mx-28"},c.a.createElement("div",{className:"swiper-wrapper"},s.Children.map(e,function(e,a){return c.a.createElement("div",{className:"swiper-slide p-4 pb-24"},e)})),c.a.createElement("div",{className:"swiper-pagination relative mt-24"})),c.a.createElement(m.a,{className:"carousel__button-prev bg-white"},c.a.createElement(E.a,null)),c.a.createElement(m.a,{className:"carousel__button-next bg-white"},c.a.createElement(d.a,null)))}}]),t}(s.Component);a.a=g},1735:function(e,a,t){"use strict";var n=t(33),i=t(36),r=t(51),l=t(50),s=t(0),c=t.n(s),o=t(1345),m=t(1343),u=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props.bg;return c.a.createElement("div",{className:"section section-cta1",id:"cta1",style:{background:"url(".concat(e||"./assets/images/home-bg.jpg",") center center/cover no-repeat")}},c.a.createElement("div",{className:"container"},c.a.createElement(o.a,{container:!0,spacing:3,direction:"row",alignItems:"center",justify:"flex-start"},c.a.createElement(o.a,{item:!0,lg:8,md:8,sm:12,xs:12},c.a.createElement("h2",null,"Dont miss the best management tool of the world"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam, illum et quis officiis beatae.")),c.a.createElement(o.a,{item:!0,lg:4,md:4,sm:12,xs:12,className:"text-center"},c.a.createElement(m.a,{size:"large",color:"secondary",variant:"contained"},"Start 14 days Trial")))))}}]),t}(s.Component);a.a=u},2140:function(e,a,t){"use strict";t.r(a);var n=t(33),i=t(36),r=t(51),l=t(50),s=t(0),c=t.n(s),o=t(138),m=t(1345),u=t(1333),d=t(1515),p=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"section section-intro1",id:"intro1",style:{background:"url(./assets/images/home-bg.jpg) center center/cover no-repeat"}},c.a.createElement("div",{className:"container"},c.a.createElement(m.a,{container:!0,spacing:3,justify:"center"},c.a.createElement(m.a,{item:!0,md:6},c.a.createElement("h1",{className:"section-intro1__title"},"Better Management; Less Expense"),c.a.createElement("div",{className:"section-intro1__subtitle"},"Not sure about Pro? Try trial first!"),c.a.createElement("div",{className:"section-intro1__list"},c.a.createElement("div",{className:"section-intro1__list__item"},c.a.createElement(u.a,{color:"secondary"},"check")," Unlimited Projects."),c.a.createElement("div",{className:"section-intro1__list__item"},c.a.createElement(u.a,{color:"secondary"},"check")," Unlimited Team Members."),c.a.createElement("div",{className:"section-intro1__list__item"},c.a.createElement(u.a,{color:"secondary"},"check")," Unlimited Disk Space.")),c.a.createElement("div",null,c.a.createElement(d.a,{variant:"extended",size:"large",color:"primary","aria-label":"Buy",className:"btn-action m-8"},c.a.createElement(u.a,{className:"mr-16"},"flight_takeoff"),"Take off"),c.a.createElement(d.a,{variant:"extended",size:"large","aria-label":"Download",className:"btn-action btn-white m-8"},c.a.createElement(u.a,{className:"mr-16"},"alarm_on"),"14 days free trial"))),c.a.createElement(m.a,{item:!0,md:6},c.a.createElement("div",{className:"section-intro1__product"},c.a.createElement("a",{href:"https://themeforest.net/user/mh_rafi/portfolio",className:"section-intro1__product__link",target:"_blank",rel:"noopener noreferrer"},c.a.createElement("div",{className:"price"},"$16"),c.a.createElement("span",{className:"price__text"},"Buy On ThemeForest")),c.a.createElement("img",{src:"./assets/images/screenshots/landing-intro.png",alt:""}))))))}}]),t}(s.Component),E=t(1337),g=t(91),h=t(1710),v=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={isTop:!0,isClosed:!0},e.close=function(){e.setState({isClosed:!0})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.scrollableElement=document.querySelector(".scrollable-content"),this.scrollableElement||(this.scrollableElement=window),this.scrollableElement&&(this.handleScrollRef=this.handleScroll(),this.scrollableElement.addEventListener("scroll",this.handleScrollRef))}},{key:"componentWillUnmount",value:function(){this.scrollableElement&&this.scrollableElement.removeEventListener("scroll",this.handleScrollRef)}},{key:"handleScroll",value:function(){var e=this;return Object(o.b)(function(){if(e.scrollableElement){var a=e.scrollableElement.scrollY<100;a!==e.state.isTop&&e.setState({isTop:a})}},20)}},{key:"render",value:function(){var e=this,a=this.state.isClosed?"menu":"close";return c.a.createElement("section",{className:Object(o.a)({header:!0,"header-fixed":!this.state.isTop,closed:this.state.isClosed})},c.a.createElement("div",{className:"container header-container"},c.a.createElement("div",{className:"brand"},c.a.createElement("img",{src:"./assets/images/logo-full.png",alt:""})),c.a.createElement("ul",{className:"navigation"},c.a.createElement("li",null,c.a.createElement(g.b,{to:"/"},"Demos")),c.a.createElement("li",null,c.a.createElement(h.a,{to:"intro1",onScroll:this.close},"Home")),c.a.createElement("li",null,c.a.createElement(h.a,{to:"portfolio1",onScroll:this.close},"Works")),c.a.createElement("li",null,c.a.createElement(h.a,{to:"service1",onScroll:this.close},"Service")),c.a.createElement("li",null,c.a.createElement(h.a,{to:"pricing1",onScroll:this.close},"Pricing")),c.a.createElement("li",null,c.a.createElement(h.a,{to:"contact1",onScroll:this.close},"Contact"))),c.a.createElement("div",{className:"m-auto"}),c.a.createElement("ul",{className:"navigation"},c.a.createElement("li",null,c.a.createElement("a",{href:"/dashboard"},c.a.createElement(u.a,{className:"mr-16"},"person")," My Account"))),c.a.createElement(E.a,{className:"header__toggle",onClick:function(){e.setState({isClosed:!e.state.isClosed})}},c.a.createElement(u.a,null,a))))}}]),t}(s.Component),f=t(1347),b=t(1526),N=t(1343),_=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e.serviceList=[{icon:"dashboard",title:"Business Application",text:"Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis."},{icon:"perm_data_setting",title:"Custom System Integration",text:"Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis."},{icon:"storage",title:"Database Administration",text:"Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis."},{icon:"stay_primary_portrait",title:"Custom Mobile Application",text:"Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis."}],e}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"section section-service1 light-gray",id:"service1"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"section__header"},c.a.createElement("h2",null,"Our Services"),c.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.")),c.a.createElement(m.a,{container:!0,spacing:3,alignContent:"stretch"},this.serviceList.map(function(e){return c.a.createElement(m.a,{item:!0,md:3,sm:6,key:e.title},c.a.createElement(f.a,{className:"service1__card service__card card"},c.a.createElement(b.a,{className:"service1__card__content"},c.a.createElement("div",null,c.a.createElement("div",{className:"text-center mb-16"},c.a.createElement(u.a,{className:"card__icon-64"},e.icon)),c.a.createElement("h3",{className:"font-light"},e.title),c.a.createElement("p",null,e.text)),c.a.createElement("div",{className:"pt-16"},c.a.createElement(N.a,null,"READ MORE")))))}))))}}]),t}(s.Component),y=t(1348),j=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e.portfoioList=[{imageUrl:"./assets/images/sq-12.jpg",name:"Project One",description:"Adipisci quas repellat sed. Quasi quaerat aut nam\n      possimus vitae dignissimos, sapiente est atque tenetur."},{imageUrl:"./assets/images/sq-10.jpg",name:"Project Two",description:"Adipisci quas repellat sed. Quasi quaerat aut nam\n      possimus vitae dignissimos, sapiente est atque tenetur."},{imageUrl:"./assets/images/sq-9.jpg",name:"Project Three",description:"Adipisci quas repellat sed. Quasi quaerat aut nam\n      possimus vitae dignissimos, sapiente est atque tenetur."}],e}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("section",{className:"section section-portfolio1",id:"portfolio1"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"section__header"},c.a.createElement("h2",null,"Works & Case studies"),c.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.")),c.a.createElement(m.a,{container:!0,spacing:3},this.portfoioList.map(function(e,a){return c.a.createElement(m.a,{item:!0,md:4,sm:4,key:a},c.a.createElement(f.a,{className:"portfolio1__card card"},c.a.createElement("img",{src:e.imageUrl,alt:"portfolio"}),c.a.createElement(b.a,{className:"portfolio1__card__content"},c.a.createElement("div",null,c.a.createElement("h5",null,e.name),c.a.createElement("p",null,e.description),c.a.createElement(y.a,null)),c.a.createElement("div",{className:"pt-16"},c.a.createElement(E.a,null,c.a.createElement(u.a,null,"link")),c.a.createElement(E.a,null,c.a.createElement(u.a,null,"share"))))))})),c.a.createElement("div",{className:"text-center pt-40"},c.a.createElement(N.a,{variant:"contained",size:"large",color:"secondary"},"load more"))))}}]),t}(s.Component),O=t(1724),w=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e.testimonialList=[{companyLogoUrl:"./assets/images/mock-logo-1.png",comment:'"Lorem ipsum dolor sit amet consectetur adipisicing\n      elit. Fugit modi voluptas vero iusto fuga quos totam\n      eius, atis magnam tempora doloribus ducimus dolorem\n      culpa animi beatae tenetur! Sapiente, quia tempora."',user:{imageUrl:"./assets/images/face-1.jpg",name:"John Doe",designation:"Product Manager"}},{companyLogoUrl:"./assets/images/mock-logo-2.png",comment:'"Lorem ipsum dolor sit amet consectetur adipisicing\n      elit. Fugit modi voluptas vero iusto fuga quos totam\n      eius, atis magnam tempora doloribus ducimus dolorem\n      culpa animi beatae tenetur! Sapiente, quia tempora."',user:{imageUrl:"./assets/images/face-2.jpg",name:"Adam Smith",designation:"CEO"}},{companyLogoUrl:"./assets/images/mock-logo-3.png",comment:'"Lorem ipsum dolor sit amet consectetur adipisicing\n      elit. Fugit modi voluptas vero iusto fuga quos totam\n      eius, atis magnam tempora doloribus ducimus dolorem\n      culpa animi beatae tenetur! Sapiente, quia tempora."',user:{imageUrl:"./assets/images/face-3.jpg",name:"John White",designation:"Software Engineer"}},{companyLogoUrl:"./assets/images/mock-logo-4.png",comment:'"Lorem ipsum dolor sit amet consectetur adipisicing\n      elit. Fugit modi voluptas vero iusto fuga quos totam\n      eius, atis magnam tempora doloribus ducimus dolorem\n      culpa animi beatae tenetur! Sapiente, quia tempora."',user:{imageUrl:"./assets/images/face-4.jpg",name:"Jessica Hiche",designation:"CEO"}}],e}return Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"section section-testimonial1",id:"testimonial1"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"section__header"},c.a.createElement("h2",null,"What our customers says"),c.a.createElement("p",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat at.")),c.a.createElement(O.a,null,this.testimonialList.map(function(e,a){return c.a.createElement(f.a,{className:"h-100 px-24 card",key:a},c.a.createElement(b.a,{className:"testimonial1__card-content"},c.a.createElement("div",{className:"pb-16"},c.a.createElement("img",{className:"p-0 m-0 pb-24 pt-16",src:e.companyLogoUrl,alt:"logo"}),c.a.createElement("p",{className:"m-0"},e.comment)),c.a.createElement("div",{className:"card__user"},c.a.createElement("img",{className:"p-0 m-0",src:e.user.imageUrl,alt:"user"}),c.a.createElement("div",{className:"pl-16"},c.a.createElement("p",{className:"m-0"},c.a.createElement("strong",null,e.user.name)),c.a.createElement("p",{className:"m-0"},e.user.designation)))))}))))}}]),t}(s.Component),k=t(1735),C=t(1711),q=t(1712),S=t(1713),L=function(e){Object(r.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={},e}return Object(i.a)(t,[{key:"componentWillUnmount",value:function(){Object(o.f)("root")}},{key:"render",value:function(){return c.a.createElement("div",{className:"landing"},c.a.createElement(v,null),c.a.createElement(p,null),c.a.createElement(j,null),c.a.createElement(_,null),c.a.createElement(w,null),c.a.createElement(k.a,null),c.a.createElement(C.a,null),c.a.createElement(q.a,null),c.a.createElement(S.a,null))}}]),t}(s.Component);a.default=L}}]);
//# sourceMappingURL=29.3ff67356.chunk.js.map