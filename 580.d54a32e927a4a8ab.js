"use strict";(self.webpackChunkdgutoryan=self.webpackChunkdgutoryan||[]).push([[580],{580:($e,A,a)=>{a.r(A),a.d(A,{CvModule:()=>Ve});var r=a(6895),e=a(1571),i=a(2233);a(2722),a(1481);let S=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.IR]}),t})();var f=a(4195);let B=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.IR]}),t})(),we=(()=>{class t{constructor(n,s){(0,r.PM)(s)&&!n&&console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule")}static withConfig(n,s=[]){return{ngModule:t,providers:n.serverLoaded?[{provide:i.WU,useValue:{...i.g5,...n}},{provide:i.Bs,useValue:s,multi:!0},{provide:i.wY,useValue:!0}]:[{provide:i.WU,useValue:{...i.g5,...n}},{provide:i.Bs,useValue:s,multi:!0}]}}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(i.wY),e.LFG(e.Lbi))},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[f.ae,S,B,f.ae,S,B]}),t})();var F=a(365),ve=a(9646),Se=a(4004);const De=[{companyName:"Itransition",role:"QA Engineer",from:"November 2013",to:"August 2016",responsibilities:["Evaluating and testing new features according to business and functional requirements","Performing system testing, black box functional testing, UI testing","Performing quality engineering reviews of documentation for compliance with stated requirements","Keeping up to date and expanding existing test documentation","Maintaining test environments, where testing can be carried out"],order:1},{companyName:"Intellectsoft",role:"QA Engineer",from:"August 2016",to:"March 2017",responsibilities:["Evaluating and testing new features according to business and functional requirements","Performing API level testing, black box functional testing, UI testing","Applying test methodology, engineering and product knowledge in the design of tests and testing strategies for the analysis","Performing quality engineering reviews of documentation for compliance with stated requirements","Investigation of significant issues identified during quality assurance activities and providing recommended process improvements to management"],order:2},{companyName:"Intellectsoft",role:"Automation QA Engineer",from:"March 2017",to:"May 2018",responsibilities:["Creation UI auto tests","Creation API auto tests","Support existing auto tests","Code review","Architecting UI and API auto tests","Grooming and planning new stories","Preparing and teaching automation courses in the company"],order:3},{companyName:"Intellectsoft",role:"Front-End developer",from:"May 2018",to:"April 2019",responsibilities:["Building and maintenance application","Implementation of various features and business rules","Development of page components","Architecting of page components","Bugs fixing","Code review","Grooming and planning new stories","Task estimation"],order:4},{companyName:"Cactussoft",role:"Front-End developer",from:"April 2019",to:"April 2021",responsibilities:["Development and maintenance projects from scratch","Creation of projects architecture","Implementation of various features and business rules","Development of page components","Bugs fixing","Code review","Grooming and planning new stories","Task estimation","Working at DDT"],order:5},{companyName:"Cortlex",role:"Front-End developer",from:"April 2021",to:"Present",responsibilities:[],order:6}];let Ge=(()=>{class t{experience(){return(0,ve.of)(De).pipe((0,Se.U)(n=>n.sort((s,g)=>g.order-s.order)))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function Re(t,l){if(1&t&&e._UZ(0,"span",5),2&t){const n=e.oxw();e.Udp("left",n.leftShift,"px")}}function _e(t,l){if(1&t&&e._UZ(0,"span",5),2&t){const n=e.oxw();e.Udp("left",n.leftShift,"px")}}let Fe=(()=>{class t{constructor(){this.realEmail="",this.realphone="",this.email="email@example.com",this.phoneWithMask="+111 (11) 111-11-11",this.phoneHref="",this.isEmailShown=!1,this.isPhoneShown=!1,this.leftShift=42.5}showEmail(n){this.isEmailShown||(n.preventDefault(),this.isEmailShown=!0,this.email=this.realEmail)}showPhone(n){this.isPhoneShown||(n.preventDefault(),this.isPhoneShown=!0,this.phoneWithMask=this.realphone,this.phoneHref="tel:+"+this.realphone.replace(/\D/g,""))}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["dg-cv-header"]],inputs:{realEmail:"realEmail",realphone:"realphone"},decls:13,vars:10,consts:[["fxLayout","row","fxLayoutAlign","space-between center"],[1,"dg-primary-text"],["fxLayout","column","fxLayoutAlign","start end"],[3,"href","click"],[3,"ngIf"],[1,"cv-header-skeleton"]],template:function(n,s){1&n&&(e.TgZ(0,"header",0)(1,"div")(2,"h2",1),e._uU(3,"Dzmitry Hutaryan"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Front-end developer"),e.qZA()(),e.TgZ(6,"div",2)(7,"a",3),e.NdJ("click",function(d){return s.showEmail(d)}),e._uU(8),e.YNc(9,Re,1,2,"ng-template",4),e.qZA(),e.TgZ(10,"a",3),e.NdJ("click",function(d){return s.showPhone(d)}),e._uU(11),e.YNc(12,_e,1,2,"ng-template",4),e.qZA()()()),2&n&&(e.xp6(7),e.ekj("cv-header-hidden-link",!s.isEmailShown),e.Q6J("href","mailto:"+s.email,e.LSH),e.xp6(1),e.hij(" ",s.email," "),e.xp6(1),e.Q6J("ngIf",!s.isEmailShown),e.xp6(1),e.ekj("cv-header-hidden-link",!s.isPhoneShown),e.Q6J("href",s.phoneHref,e.LSH),e.xp6(1),e.hij(" ",s.phoneWithMask," "),e.xp6(1),e.Q6J("ngIf",!s.isPhoneShown))},dependencies:[r.O5,f.xw,f.Wh],styles:["header[_ngcontent-%COMP%]{padding-bottom:1rem;border-bottom:1px solid var(--dg-divider)}h6[_ngcontent-%COMP%]{text-transform:uppercase}a[_ngcontent-%COMP%]{position:relative;line-height:1.5rem}.cv-header-hidden-link[_ngcontent-%COMP%]{text-decoration:none}.cv-header-skeleton[_ngcontent-%COMP%]{display:block;position:absolute;top:2px;right:0;bottom:2px;background-color:var(--dg-divider);border-radius:.5rem}"],changeDetection:0}),t})();function Ye(t,l){if(1&t&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&t){const n=l.$implicit;e.xp6(1),e.Oqu(n)}}function He(t,l){if(1&t&&(e.TgZ(0,"div",2)(1,"h6"),e._uU(2),e.TgZ(3,"span",3),e._uU(4),e.qZA()(),e.TgZ(5,"span",4),e._uU(6),e.qZA(),e.TgZ(7,"ul"),e.YNc(8,Ye,2,1,"ng-template",1),e.qZA()()),2&t){const n=l.$implicit;e.xp6(2),e.hij(" ",n.companyName," / "),e.xp6(2),e.Oqu(n.role),e.xp6(2),e.AsE("",n.from," - ",n.to,""),e.xp6(2),e.Q6J("ngForOf",n.responsibilities)}}let be=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["dg-cv-experience"]],inputs:{experience:"experience"},decls:3,vars:1,consts:[[1,"dg-section-header"],["ngFor","",3,"ngForOf"],[1,"company-block"],[1,"position"],[1,"work-dates"]],template:function(n,s){1&n&&(e.TgZ(0,"h6",0),e._uU(1,"Experience"),e.qZA(),e.YNc(2,He,9,5,"ng-template",1)),2&n&&(e.xp6(2),e.Q6J("ngForOf",s.experience))},dependencies:[r.sg],styles:["[_nghost-%COMP%]{display:block;padding:1rem 0}.company-block[_ngcontent-%COMP%]:not(:last-child){margin-bottom:1rem}.company-block[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:.5rem 0 0;padding-left:1rem;line-height:1.25}.position[_ngcontent-%COMP%], .work-dates[_ngcontent-%COMP%]{color:var(--dg-secondary)}.position[_ngcontent-%COMP%]{font-weight:400}.work-dates[_ngcontent-%COMP%]{font-size:.875rem}"],changeDetection:0}),t})();const ke=[{path:"",component:(()=>{class t{constructor(n){this.cvService=n,this.email="dmitry@example.com",this.phone="+222 (22) 222-22-22",this.experience$=this.cvService.experience()}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(Ge))},t.\u0275cmp=e.Xpm({type:t,selectors:[["dg-cv"]],decls:3,vars:5,consts:[[3,"realEmail","realphone"],[3,"experience"]],template:function(n,s){1&n&&(e._UZ(0,"dg-cv-header",0)(1,"dg-cv-experience",1),e.ALo(2,"async")),2&n&&(e.Q6J("realEmail",s.email)("realphone",s.phone),e.xp6(1),e.Q6J("experience",e.lcZ(2,3,s.experience$)))},dependencies:[Fe,be,r.Ov],changeDetection:0}),t})()}];let Te=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[F.Bz.forChild(ke),F.Bz]}),t})(),Ve=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,we,Te]}),t})()}}]);