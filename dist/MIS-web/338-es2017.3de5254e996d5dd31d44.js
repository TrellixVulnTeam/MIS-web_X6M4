(self.webpackChunkmis_web=self.webpackChunkmis_web||[]).push([[338],{7338:function(t,n,o){"use strict";o.r(n),o.d(n,{LoginFormModule:function(){return Z}});var e=o(3464),i=o(1462),r=o(7436),a=o(5366),s=o(7004),l=o(6911),c=o(6484),g=o(1524),d=o(1843),h=o(4897),m=o(3776),u=o(5095),f=o(5728);const p=function(){return["/login/register-form"]},C=[{path:"",data:{key:"login-form",shouldDetach:"no"},component:(()=>{class t{constructor(t,n,o,e,r){this.fb=t,this.service=n,this.msg=o,this.router=e,this.localStorageService=r,this.identifyCode="",this.getidentifyCode="",this.contentWidth=100,this.contentHeight=30,this.fontSizeMin=25,this.fontSizeMax=30,this.backgroundColorMin=255,this.backgroundColorMax=255,this.colorMin=0,this.colorMax=160,this.lineColorMin=100,this.lineColorMax=255,this.dotColorMin=0,this.dotColorMax=255,this.canvasWidth=110,this.canvasHeight=35,this.validateForm=this.fb.group({username:[null,[i.kI.required]],password:[null,[i.kI.required]],verifyCode:[null,[i.kI.required]]})}ngAfterViewInit(){this.createdCode()}ngOnInit(){}submitForm(){this.validateForm.value.verifyCode!=this.getidentifyCode&&this.msg.create("error","\u9a8c\u8bc1\u7801\u9519\u8bef"),this.validateForm.valid&&this.validateForm.value.verifyCode==this.getidentifyCode?this.service.login({username:this.validateForm.value.username,password:this.validateForm.value.password}).subscribe({next:t=>{console.log("next",t),this.localStorageService.setItem("username",t.data.username),this.localStorageService.setItem(r.d,t.data.access),this.localStorageService.setItem(r.T,t.data.refresh),0==t.code?(this.msg.create("success","\u767b\u5f55\u6210\u529f"),this.router.navigateByUrl("layout"),this.validateForm.reset()):(this.msg.create("error",t.message),this.validateForm.reset())},error:t=>{console.log("error",t)}}):Object.values(this.validateForm.controls).forEach(t=>{t.invalid&&(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})}createdCode(){const t=[],n="ABCDEFGHJKMNPQRSTWXYZ123456789",o=n.length;for(let e=0;e<4;e++)t.push(n.charAt(Math.floor(Math.random()*o)));this.identifyCode=t.join(""),this.getidentifyCode=this.identifyCode.toLowerCase(),this.drawPic()}drawPic(){const t=document.getElementById("verify-code").getContext("2d");if(!(t&&t instanceof CanvasRenderingContext2D))throw new Error("Failed to get 2D context");const n=t;n.textBaseline="bottom",n.fillStyle=this.randomColor(this.backgroundColorMin,this.backgroundColorMax),n.fillRect(0,0,this.contentWidth,this.contentHeight);for(let o=0;o<this.identifyCode.length;o++)this.drawText(n,this.identifyCode[o],o);this.drawLine(n),this.drawDot(n)}randomColor(t,n){return"rgb("+this.randomNum(t,n)+","+this.randomNum(t,n)+","+this.randomNum(t,n)+")"}randomNum(t,n){return Math.floor(Math.random()*(n-t)+t)}drawLine(t){for(let n=0;n<5;n++)t.strokeStyle=this.randomColor(this.lineColorMin,this.lineColorMax),t.beginPath(),t.moveTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.lineTo(this.randomNum(0,this.contentWidth),this.randomNum(0,this.contentHeight)),t.stroke()}drawText(t,n,o){t.fillStyle=this.randomColor(this.colorMin,this.colorMax),t.font=this.randomNum(this.fontSizeMin,this.fontSizeMax)+"px SimHei";const e=(o+1)*(this.contentWidth/(this.identifyCode.length+1)),i=this.randomNum(this.fontSizeMax,this.contentHeight-5);var r=this.randomNum(-45,45);t.translate(e,i),t.rotate(r*Math.PI/180),t.fillText(n,0,0),t.rotate(-r*Math.PI/180),t.translate(-e,-i)}drawDot(t){for(let n=0;n<80;n++)t.fillStyle=this.randomColor(0,255),t.beginPath(),t.arc(this.randomNum(0,this.canvasWidth),this.randomNum(0,this.canvasHeight),1,0,2*Math.PI),t.fill()}}return t.\u0275fac=function(n){return new(n||t)(a.Y36(i.qu),a.Y36(s.r),a.Y36(l.dD),a.Y36(e.F0),a.Y36(c.n))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-login-form"]],decls:28,vars:8,consts:[[1,"login-card"],[1,"login-background"],[1,"login-content"],[1,"login-text"],["nz-form","",1,"login-form",3,"formGroup","ngSubmit"],["nzErrorTip","\u8bf7\u8f93\u5165\u7528\u6237\u540d!"],["nzPrefixIcon","user"],["type","text","nz-input","","formControlName","username","placeholder","\u7528\u6237\u540d"],["nzErrorTip","\u8bf7\u8f93\u5165\u5bc6\u7801!"],["nzPrefixIcon","lock"],["type","password","nz-input","","formControlName","password","placeholder","\u5bc6\u7801"],["nzErrorTip","\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801!"],["type","text","nz-input","","formControlName","verifyCode","placeholder","\u8bf7\u8f93\u5165\u9a8c\u8bc1\u7801",2,"max-width","170px"],["id","verify-code",3,"width","height","click"],["nz-row","",1,"login-form-margin"],["nz-col","",3,"nzSpan"],[1,"login-form-forgot"],[1,"register",3,"routerLink"],["nz-button","",1,"login-form-button","login-form-margin",3,"nzType"]],template:function(t,n){1&t&&(a.TgZ(0,"div",0),a._UZ(1,"div",1),a.TgZ(2,"div",2),a.TgZ(3,"h2",3),a._uU(4,"\u767b \u5f55"),a.qZA(),a.TgZ(5,"form",4),a.NdJ("ngSubmit",function(){return n.submitForm()}),a.TgZ(6,"nz-form-item"),a.TgZ(7,"nz-form-control",5),a.TgZ(8,"nz-input-group",6),a._UZ(9,"input",7),a.qZA(),a.qZA(),a.qZA(),a.TgZ(10,"nz-form-item"),a.TgZ(11,"nz-form-control",8),a.TgZ(12,"nz-input-group",9),a._UZ(13,"input",10),a.qZA(),a.qZA(),a.qZA(),a.TgZ(14,"nz-form-item"),a.TgZ(15,"nz-form-control",11),a.TgZ(16,"nz-input-group"),a._UZ(17,"input",12),a.qZA(),a.qZA(),a.TgZ(18,"canvas",13),a.NdJ("click",function(){return n.createdCode()}),a.qZA(),a.qZA(),a.TgZ(19,"div",14),a.TgZ(20,"div",15),a.TgZ(21,"a",16),a._uU(22,"\u5fd8\u8bb0\u5bc6\u7801"),a.qZA(),a.qZA(),a.TgZ(23,"div",15),a.TgZ(24,"a",17),a._uU(25,"\u6ce8\u518c"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(26,"button",18),a._uU(27," \u767b \u5f55 "),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(5),a.Q6J("formGroup",n.validateForm),a.xp6(13),a.Q6J("width",n.contentWidth)("height",n.contentHeight),a.xp6(2),a.Q6J("nzSpan",12),a.xp6(3),a.Q6J("nzSpan",12),a.xp6(1),a.Q6J("routerLink",a.DdM(7,p)),a.xp6(2),a.Q6J("nzType","primary"))},directives:[i._Y,i.JL,g.Lr,i.sg,d.SK,g.Nx,d.t3,g.Fd,h.w,m.gB,m.Zp,i.Fj,i.JJ,i.u,e.yS,u.ix,f.dQ],styles:[".login-card[_ngcontent-%COMP%]{margin-left:38%;margin-top:14%;position:relative;width:380px;height:340px}.login-card[_ngcontent-%COMP%]   .login-background[_ngcontent-%COMP%]{top:0;left:0;right:0;bottom:0;background-color:#fff;opacity:.8;position:absolute}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]{position:absolute;padding:36px;top:0;left:0;right:0;bottom:0}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-text[_ngcontent-%COMP%]{font-family:Myriad Pro,Helvetica Neue,Arial,Helvetica,sans-serif;text-align:center}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{max-width:300px}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-form-margin[_ngcontent-%COMP%]{margin-top:-10px;margin-bottom:15px}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-form-forgot[_ngcontent-%COMP%]{margin-bottom:10px}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .register[_ngcontent-%COMP%]{float:right}.login-card[_ngcontent-%COMP%]   .login-content[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .login-form-button[_ngcontent-%COMP%]{width:100%}"]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[e.Bz.forChild(C)],e.Bz]}),t})();var v=o(3121);let Z=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[v.m,M]]}),t})()}}]);