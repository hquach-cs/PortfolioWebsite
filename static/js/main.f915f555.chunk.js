(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/hquachResume.be0cd826.pdf"},function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),l=a(2),c=a(4),i=a(3),r=a(0),s=a.n(r),o=a(9),m=a.n(o),d=a(5),u=(a(16),function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={menu_open:l.props.show},l.handleClick=l.handleClick.bind(Object(d.a)(l)),l}return Object(l.a)(a,[{key:"handleClick",value:function(e){this.props.parentCallback(!0)}},{key:"render",value:function(){return s.a.createElement("div",{class:this.props.show?"menu-btn open":"menu-btn",onClick:this.handleClick},s.a.createElement("div",{class:"menu-btn_burger"}))}}]),a}(s.a.Component)),p=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("li",{class:this.props.active?"navbarLink active":"navbarLink"},s.a.createElement("a",{href:"#"+this.props.link.toLowerCase()},this.props.link))}}]),a}(s.a.Component),v=(a(17),a(10)),h=a.n(v),E=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var l;Object(n.a)(this,a),(l=t.call(this,e)).callbackFunction=function(e){l.setState({menuShow:!l.state.menuShow})},l.state={show:!0,scrollPos:0,menuShow:!1,startActive:!0,aboutActive:!1,projectActive:!1,contactActive:!1},l.handleScroll=l.handleScroll.bind(Object(d.a)(l));var c=window.pageYOffset;return c<window.innerHeight-window.innerHeight*(1/3)&&(l.setState({startActive:!0,aboutActive:!1,projectActive:!1,contactActive:!1}),l.props.DetectSection("start")),c>=window.innerHeight-window.innerHeight*(1/3)&&c<2*window.innerHeight-window.innerHeight*(1/3)&&(l.setState({startActive:!1,aboutActive:!0,projectActive:!1,contactActive:!1}),l.props.DetectSection("about")),c>=2*window.innerHeight-window.innerHeight*(1/3)&&c<3*window.innerHeight-window.innerHeight*(1/3)&&(l.setState({startActive:!1,aboutActive:!1,projectActive:!0,contactActive:!1}),l.props.DetectSection("project")),c>=3*window.innerHeight-window.innerHeight*(1/3)&&(l.setState({startActive:!1,aboutActive:!1,projectActive:!1,contactActive:!0}),l.props.DetectSection("contact")),l}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=this.state.scrollPos;this.setState({scrollPos:document.body.getBoundingClientRect().top,show:document.body.getBoundingClientRect().top>e,menuShow:!1});var t=window.pageYOffset;t<window.innerHeight-window.innerHeight*(1/3)&&(this.setState({startActive:!0,aboutActive:!1,projectActive:!1,contactActive:!1}),this.props.DetectSection("start")),t>=window.innerHeight-window.innerHeight*(1/3)&&t<2*window.innerHeight-window.innerHeight*(1/3)&&(this.setState({startActive:!1,aboutActive:!0,projectActive:!1,contactActive:!1}),this.props.DetectSection("about")),t>=2*window.innerHeight-window.innerHeight*(1/3)&&t<3*window.innerHeight-window.innerHeight*(1/3)&&(this.setState({startActive:!1,aboutActive:!1,projectActive:!0,contactActive:!1}),this.props.DetectSection("project")),t>=3*window.innerHeight-window.innerHeight*(1/3)&&(this.setState({startActive:!1,aboutActive:!1,projectActive:!1,contactActive:!0}),this.props.DetectSection("contact"))}},{key:"render",value:function(){return s.a.createElement("header",{class:this.state.show?"navbarHeader":"navbarHeader animate"},s.a.createElement("div",{class:"navbarlogo_button"},s.a.createElement("div",{style:{display:"flex"}},s.a.createElement("a",{href:"#start",class:"navbarLogo typewriter"},"Henry Quach")),s.a.createElement("div",{class:"burgerMenu"},s.a.createElement(u,{parentCallback:this.callbackFunction,show:this.state.menuShow}))),s.a.createElement("nav",{class:this.state.menuShow?"navbarNAV open":"navbarNAV close"},s.a.createElement("ul",{class:"navbarUL"},s.a.createElement(p,{link:"Start",active:this.state.startActive}),s.a.createElement(p,{link:"About",active:this.state.aboutActive}),s.a.createElement(p,{link:"Projects",active:this.state.projectActive}),s.a.createElement(p,{link:"Contact",active:this.state.contactActive}),s.a.createElement("li",null,s.a.createElement("a",{href:h.a,target:"_blank",type:"pdf"},"Resume")))))}}]),a}(s.a.Component),y=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,"\xa0\xa0\xa0\xa0")}}]),a}(s.a.Component),f=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{style:{display:"block",width:"40px",borderRight:"solid black 2px",marginRight:"8px",fontStyle:"italic"}},this.props.num," ",s.a.createElement(y,null))}}]),a}(s.a.Component),b=(a(18),function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:"codeContainer"},s.a.createElement("div",{class:"codeWrapper"},s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft"},s.a.createElement(f,{num:"01"}),s.a.createElement("div",{style:{color:"darkgreen"}},"class"),"\xa0",s.a.createElement("div",{class:"codeClass"},"Henry"),"\xa0",s.a.createElement("div",{style:{color:"cyan"}},"extends"),"\xa0",s.a.createElement("div",{class:"codeClass"},"Person"),"\xa0{")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft",style:{animationDelay:"1s"}},s.a.createElement(f,{num:"02"}),s.a.createElement(y,null),s.a.createElement("div",{style:{color:"darkgreen"}},"public\xa0"),s.a.createElement("div",{class:"codeClass"},"Henry"),"()\xa0{")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft",style:{animationDelay:"2s"}},s.a.createElement(f,{num:"03"}),s.a.createElement(y,null),s.a.createElement(y,null),s.a.createElement("div",{style:{color:"cyan"}},"this"),".",s.a.createElement("div",null,"name"),"\xa0=\xa0",s.a.createElement("div",{style:{color:"lightgreen"}},'"Henry Quach"'),";")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft",style:{animationDelay:"3s"}},s.a.createElement(f,{num:"04"}),s.a.createElement(y,null),s.a.createElement(y,null),s.a.createElement("div",{style:{color:"cyan"}},"this"),".",s.a.createElement("div",null,"location"),"\xa0=\xa0",s.a.createElement("div",{style:{color:"lightgreen"}},'"Nashville,TN"'),";")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft",style:{animationDelay:"4s"}},s.a.createElement(f,{num:"05"}),s.a.createElement(y,null),s.a.createElement(y,null),s.a.createElement("div",{style:{color:"cyan"}},"this"),".",s.a.createElement("div",null,"email"),"\xa0=\xa0",s.a.createElement("div",{style:{color:"orange",textDecoration:"underline"}},s.a.createElement("a",{href:"mailto:hquach.cs@gmail.com"},"hquach.cs@gmail.com")),";")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft",style:{animationDelay:"5s"}},s.a.createElement(f,{num:"06"}),s.a.createElement(y,null),"}")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterskip",style:{animationDelay:"6s"}},s.a.createElement(f,{num:"07"}))),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft",style:{animationDelay:"6.25s"}},s.a.createElement(f,{num:"08"}),s.a.createElement(y,null),s.a.createElement("div",{style:{color:"darkgreen"}},"public\xa0"),s.a.createElement("div",null,"Education"),"\xa0",s.a.createElement("div",{class:"codeClass"},"getEducation"),"()\xa0{")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft",style:{animationDelay:"7.25s"}},s.a.createElement(f,{num:"09"}),s.a.createElement(y,null),s.a.createElement(y,null),s.a.createElement("div",{style:{color:"cyan"}},"this"),".",s.a.createElement("div",null,"schoolName"),"\xa0=\xa0",s.a.createElement("div",{style:{color:"orange"}},"University of Tennesse, Knoxville (UTK)"),";")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft",style:{animationDelay:"8.25s"}},s.a.createElement(f,{num:"10"}),s.a.createElement(y,null),s.a.createElement(y,null),s.a.createElement("div",{style:{color:"cyan"}},"this"),".",s.a.createElement("div",null,"degree"),"\xa0=\xa0",s.a.createElement("div",null,'"BS in ',s.a.createElement("div",{style:{color:"red"}},"Computer Science"),'";'))),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft",style:{animationDelay:"9.25s"}},s.a.createElement(f,{num:"11"}),s.a.createElement(y,null),s.a.createElement(y,null)," ",s.a.createElement("div",{style:{color:"cyan"}},"this"),".",s.a.createElement("div",null,"gradDate"),'\xa0=\xa0 "',s.a.createElement("div",{style:{color:"red"}},"12/2019"),'";')),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft",style:{animationDelay:"10.25s"}},s.a.createElement(f,{num:"12"}),s.a.createElement(y,null),s.a.createElement(y,null),s.a.createElement("div",{style:{color:"purple"}},"return"),"\xa0",s.a.createElement("div",{style:{color:"cyan"}},"new"),"\xa0",s.a.createElement("div",null,"Education(",s.a.createElement("div",{style:{color:"cyan"}},"this"),".",s.a.createElement("div",null,"schoolName"),",",s.a.createElement("div",{style:{color:"cyan"}},"this"),".",s.a.createElement("div",null,"degree"),",",s.a.createElement("div",{style:{color:"cyan"}},"this"),".",s.a.createElement("div",null,"gradDate"),")"),";")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft",style:{animationDelay:"11.25s"}},s.a.createElement(f,{num:"13"}),s.a.createElement(y,null),"}")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft",style:{animationDelay:"11.5s"}},s.a.createElement(f,{num:"14"})))))}}]),a}(s.a.Component)),g=(a(19),function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:"starterContainer",id:"start"},s.a.createElement(b,null),s.a.createElement("div",{class:"starterTitle"},s.a.createElement("h1",null,"Henry ",s.a.createElement("span",null,"Quach")),s.a.createElement("div",{class:"bars"},s.a.createElement("div",{class:"bar"}),s.a.createElement("div",{class:"bar2"})),s.a.createElement("p",null,"Software engineer residing in Nashville, TN.",s.a.createElement("span",null,"Looking for a job opportunity to express"),s.a.createElement("span",null," my creative ideas."))))}}]),a}(s.a.Component)),w=(a(6),function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:this.props.active?"aboutCodeContainer":"notactive"},s.a.createElement("div",{class:"aboutCodeWrapper"},s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft"},s.a.createElement(f,{num:"01"}),s.a.createElement("div",{style:{color:"purple"}},"if"),"\xa0",s.a.createElement("div",{style:{color:"yellow"}},"num"),"\xa0",s.a.createElement("div",null,"<"),"\xa0",s.a.createElement("div",{style:{color:"green"}},"0"),":")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterskip",style:{animationDelay:"1s"}},s.a.createElement(f,{num:"02"}),s.a.createElement(y,null)))))}}]),a}(s.a.Component)),j=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:this.props.active?"aboutCodeContainer":"notactive"},s.a.createElement("div",{class:"aboutCodeWrapper"},s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft"},s.a.createElement(f,{num:"01"}),s.a.createElement("div",{style:{color:"darkgreen"}},"class"),"\xa0",s.a.createElement("div",{class:"codeClass"},"Henry"),"\xa0",s.a.createElement("div",{style:{color:"cyan"}},"extends"),"\xa0",s.a.createElement("div",{class:"codeClass"},"Person"),"\xa0{")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterskip",style:{animationDelay:"1s"}},s.a.createElement(f,{num:"02"}),s.a.createElement(y,null)))))}}]),a}(s.a.Component),k=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:this.props.active?"aboutCodeContainer":"notactive"},s.a.createElement("div",{class:"aboutCodeWrapper"},s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft"},s.a.createElement(f,{num:"01"}),s.a.createElement("div",{style:{color:"yellow"}},"Henry"),"\xa0=\xa0",s.a.createElement("div",{style:{color:"blue"}},"Person"),"(",s.a.createElement("div",{style:{color:"green"}},'Henry Quach"'),",",s.a.createElement("div",{style:{color:"green"}},'"23""'),",...);")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterskip",style:{animationDelay:"1s"}},s.a.createElement(f,{num:"02"}),s.a.createElement(y,null)))))}}]),a}(s.a.Component),C=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:this.props.active?"aboutCodeContainer":"notactive"},s.a.createElement("div",{class:"aboutCodeWrapper"},s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft"},s.a.createElement(f,{num:"01"}),s.a.createElement("div",{style:{color:"yellow"}},"<div>"),"\xa0",s.a.createElement("div",{style:{color:"pink"}},"<h1>"),"\xa0",s.a.createElement("div",{style:{color:"lightgreen"}},"Henry Quach"),s.a.createElement("div",{style:{color:"pink"}},"</h1>"),"\xa0",s.a.createElement("div",{style:{color:"yellow"}},"</div>"),"\xa0")),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterskip",style:{animationDelay:"1s"}},s.a.createElement(f,{num:"02"}),s.a.createElement(y,null)))))}}]),a}(s.a.Component),L=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:this.props.active?"aboutCodeContainer":"notactive"},s.a.createElement("div",{class:"aboutCodeWrapper"},s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterleft"},s.a.createElement(f,{num:"01"}),"<",s.a.createElement("div",{style:{color:"green"}},"Person"),"\xa0",s.a.createElement("div",{style:{color:"blue"}},"name"),'="',s.a.createElement("div",{style:{color:"lightgreen"}},"Henry Quach"),'" />')),s.a.createElement("div",{class:"codeLineWrapper"},s.a.createElement("div",{class:"codeLine typewriterskip",style:{animationDelay:"1s"}},s.a.createElement(f,{num:"02"}),s.a.createElement(y,null)))))}}]),a}(s.a.Component),S=(a(20),function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).handleCodeClick=function(e){return function(){l.setState({codeLang:e})}},l.state={codeLang:"python"},l.handleCodeClick=l.handleCodeClick.bind(Object(d.a)(l)),l}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:this.props.active?"":"about",id:"about"},s.a.createElement("div",{class:this.props.active?"aboutContainer":"dontshow"},s.a.createElement("div",{class:"aboutWrapper"},s.a.createElement("div",{class:"aboutTitle"},s.a.createElement("div",{class:"aboutName"},s.a.createElement("h1",{style:{animationDelay:"0.9s"}},"About"),s.a.createElement("div",{class:"aboutEducName",style:{animationDelay:"1.2s"}},s.a.createElement("h2",null,"More about me"),s.a.createElement("p",null,"Hello my name is"," ",s.a.createElement("div",{style:{fontFamily:"Montserrat, sans-serif",display:"inline",color:"cyan"}}," ","Henry Quach"," ")," ","and I am an aspiring software developer that loves to program multiple interesting apps to showcase to users. My goal is to become a reliable programmer that create multiple things that users/consumers enjoy.")),s.a.createElement("div",{class:"aboutSkillsList",style:{animationDelay:"1.5s"}},s.a.createElement("h2",null,"Skills"),s.a.createElement("div",{class:"aboutSkills"},s.a.createElement("a",{style:{color:"cyan",textDecoration:"underline",paddingBottom:"10px"},href:"#softSkills"},"Languages Below"),s.a.createElement("h4",null,"Technical Skills:"),s.a.createElement("ul",{style:{columnCount:"2",listStyleType:"none"}},s.a.createElement("li",null,"Database (MySQL,MongoDB)"),s.a.createElement("li",null,"Version Control (Git,Github)"),s.a.createElement("li",null,"AGILE / SCRUM"),s.a.createElement("li",null,"Machine Learning"),s.a.createElement("li",null,"Data Handling"),s.a.createElement("li",null,"Data Visualization"))))),s.a.createElement("div",{class:"aboutDesc"},s.a.createElement("div",{style:{animationDelay:"0s"}},s.a.createElement("h2",null,"Education"),s.a.createElement("p",null,"I recieve my associate and bachelor's degree in"," ",s.a.createElement("div",{style:{fontFamily:"Montserrat, sans-serif",display:"inline",color:"yellow"}},"Computer Science"),". I graduated from"," ",s.a.createElement("div",{style:{fontFamily:"Montserrat, sans-serif",display:"inline",color:"orange"}},"The University of Tennessee, Knoxville"," "),"in December of 2019. Go Vols!")),s.a.createElement("div",{style:{animationDelay:"0.3s"}},s.a.createElement("h2",null,"Design"),s.a.createElement("p",null,"Users comes first when designing any application. Without a good design, application will break apart and be forgotten. That's why I dedicate a lot of time to designing my projects for the user's experience.")),s.a.createElement("div",{style:{animationDelay:".6s"},id:"softSkills"},s.a.createElement("h2",null,"Soft-Skills"),s.a.createElement("p",null,"I believe my soft skills such as"," ",s.a.createElement("div",{style:{fontFamily:"Montserrat, sans-serif",display:"inline",color:"yellow"}},"Organization"," ")," ",","," ",s.a.createElement("div",{style:{fontFamily:"Montserrat, sans-serif",display:"inline",color:"orange"}},"Responsibility"," ")," ",", and"," ",s.a.createElement("div",{style:{fontFamily:"Montserrat, sans-serif",display:"inline",color:"cyan"}},"Leadership"," ")," ","are most important when working in a professional environment. These skills allow me to connect with my peers.")))),s.a.createElement("div",{class:"aboutLang",id:"aboutLang"},s.a.createElement("h2",{style:{paddingRight:"20px"}},"Languages:"),s.a.createElement("div",{class:"python"===this.state.codeLang?"activeSkill":"skillsItem",onClick:this.handleCodeClick("python"),style:{animationDelay:"0s"}},"Python"),s.a.createElement("div",{class:"java"===this.state.codeLang?"activeSkill":"skillsItem",onClick:this.handleCodeClick("java"),style:{animationDelay:"0.25s"}},"Java"),s.a.createElement("div",{class:"cplus"===this.state.codeLang?"activeSkill":"skillsItem",onClick:this.handleCodeClick("cplus"),style:{animationDelay:"0.5s"}},"C/C++"),s.a.createElement("div",{class:"html"===this.state.codeLang?"activeSkill":"skillsItem",onClick:this.handleCodeClick("html"),style:{animationDelay:"0.75s"}},"HTML5/CSS"),s.a.createElement("div",{class:"react"===this.state.codeLang?"activeSkill":"skillsItem",onClick:this.handleCodeClick("react"),style:{animationDelay:"1s"}},"React.js"))),s.a.createElement(w,{active:"python"===this.state.codeLang}),s.a.createElement(j,{active:"java"===this.state.codeLang}),s.a.createElement(k,{active:"cplus"===this.state.codeLang}),s.a.createElement(C,{active:"html"===this.state.codeLang}),s.a.createElement(L,{active:"react"===this.state.codeLang})))}}]),a}(s.a.Component)),O=(a(8),function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:this.props.active?"":"contact",id:"contact"},s.a.createElement("div",{class:this.props.active?"contactContainer":"dontshow"},s.a.createElement("div",{class:"contactTitle"},s.a.createElement("h1",null,"Contact"),s.a.createElement("p",null,"If you like what you see, lets chat! Other stuff"," ",s.a.createElement("span",{style:{display:"block"}},"that you can check out is my github:",s.a.createElement("a",{class:"githubLink",href:"https://github.com/hquach-cs"},"https://github.com/hquach-cs")))),s.a.createElement("div",{class:"contactList"},s.a.createElement("h3",null,"You can find me at:"),s.a.createElement("ul",null,s.a.createElement("li",{style:{animationDelay:"1.25s"}},s.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"linkedin-in",class:"svg-inline--fa fa-linkedin-in fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},s.a.createElement("path",{fill:"currentColor",d:"M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"})),s.a.createElement("a",{href:"https://www.linkedin.com/in/henryquach0821/"},"LinkedIn")),s.a.createElement("li",{style:{animationDelay:"1.5s"}},s.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",class:"svg-inline--fa fa-github fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},s.a.createElement("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),s.a.createElement("a",{href:"https://github.com/hquach-cs"},"Github")),s.a.createElement("li",{style:{animationDelay:"1.75s"}},s.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"medium",class:"svg-inline--fa fa-medium fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},s.a.createElement("path",{fill:"currentColor",d:"M0 32v448h448V32H0zm372.2 106.1l-24 23c-2.1 1.6-3.1 4.2-2.7 6.7v169.3c-.4 2.6.6 5.2 2.7 6.7l23.5 23v5.1h-118V367l24.3-23.6c2.4-2.4 2.4-3.1 2.4-6.7V199.8l-67.6 171.6h-9.1L125 199.8v115c-.7 4.8 1 9.7 4.4 13.2l31.6 38.3v5.1H71.2v-5.1l31.6-38.3c3.4-3.5 4.9-8.4 4.1-13.2v-133c.4-3.7-1-7.3-3.8-9.8L75 138.1V133h87.3l67.4 148L289 133.1h83.2v5z"})),s.a.createElement("a",{href:"https://medium.com/@hquach.cs"},"Medium")),s.a.createElement("li",{style:{animationDelay:"2s"}},s.a.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"envelope",class:"svg-inline--fa fa-envelope fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},s.a.createElement("path",{fill:"currentColor",d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"})),s.a.createElement("a",{href:"mailto:hquach.cs@gmail.com"},"Email")))),s.a.createElement("div",{class:"getintouch"},s.a.createElement("a",{href:"mailto:hquach.cs@gmail.com"},"Lets get in touch!"))))}}]),a}(s.a.Component)),D=(a(21),function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:this.props.active?"":"contact",id:"projects"},s.a.createElement("div",{class:this.props.active?"projectContainer":"dontshow"},s.a.createElement("div",{class:"projectTitle"},s.a.createElement("h1",null,"Projects")),s.a.createElement("ul",{class:"projectListUL"},s.a.createElement("li",{class:"projectItem"},s.a.createElement("a",{class:"projectImg",href:"https://github.com/hquach-cs/PortfolioWebsite"}),s.a.createElement("div",{class:"projectName"},s.a.createElement("ul",null,s.a.createElement("li",{class:"projectItemTitle",style:{animationDelay:"1.4s"}},"Portfolio Website"),s.a.createElement("li",{class:"projectItemSkill",style:{animationDelay:"1s"}},"Web Dev."),s.a.createElement("li",{class:"projectItemSkill",style:{animationDelay:".6s"}},"React.js"),s.a.createElement("li",{class:"projectItemSkill ",style:{animationDelay:"0.2s"}},"HTML5/CSS"))),s.a.createElement("div",{class:"projectDesc"},s.a.createElement("p",null,"This project is my second version of my website. The first version can be found"," ",s.a.createElement("a",{style:{textDecoration:"underline",color:"cyan"},href:"https://github.com/hquach-cs/HQPortfolio"},"here"),". This website showcase my projects and my interest for future job recruiters."," ",s.a.createElement("a",{style:{textDecoration:"underline",color:"cyan"},href:"https://github.com/hquach-cs/PortfolioWebsite"},"Source")," ",s.a.createElement("a",{style:{textDecoration:"underline",color:"cyan"},href:"https://hquach-cs.github.io/HQPortfolio/"},"Site")))),s.a.createElement("li",{class:"projectItem"},s.a.createElement("a",{href:"https://github.com/hquach-cs/JournalingApp",class:"projectImg"}),s.a.createElement("div",{class:"projectName"},s.a.createElement("ul",null,s.a.createElement("li",{class:"projectItemTitle",style:{animationDelay:"1.4s"}},"Better Calendar App."),s.a.createElement("li",{class:"projectItemSkill",style:{animationDelay:"1s"}},"Mobile Dev."),s.a.createElement("li",{class:"projectItemSkill",style:{animationDelay:"0.6s"}},"Java"),s.a.createElement("li",{class:"projectItemSkill",style:{animationDelay:"0.2s"}},"Mobile Design"))),s.a.createElement("div",{class:"projectDesc"},s.a.createElement("p",null,"After gaining inspiration from lack of features in other calendar apps , I decided to create my own calendar app since I can use this app for my daily event list."," ",s.a.createElement("a",{style:{textDecoration:"underline",color:"cyan"},href:"https://github.com/hquach-cs/JournalingApp"},"Source")))))))}}]),a}(s.a.Component)),A=(a(22),function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:"footer"},s.a.createElement("div",null,"Thanks for visiting!"),s.a.createElement("div",null,"Created and Designed by"," ",s.a.createElement("div",{style:{fontFamily:"Montserrat, sans-serif",display:"inline",color:"cyan"}},"Henry Quach"),"."))}}]),a}(s.a.Component)),H=(a(23),function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).handleSection=function(e){"about"===e&&l.setState({aboutSection:!0}),"project"===e&&l.setState({projectSection:!0}),"contact"===e&&l.setState({contactSection:!0})},l.state={startSection:!0,aboutSection:!1,projectSection:!1,contactSection:!1},l}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(E,{DetectSection:this.handleSection}),s.a.createElement(g,null),s.a.createElement(S,{active:this.state.aboutSection}),s.a.createElement(D,{active:this.state.projectSection}),s.a.createElement(O,{active:this.state.contactSection}),s.a.createElement(A,null))}}]),a}(s.a.Component));m.a.render(s.a.createElement(H,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.f915f555.chunk.js.map