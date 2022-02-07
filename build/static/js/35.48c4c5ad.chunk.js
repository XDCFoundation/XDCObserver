(this["webpackJsonpxinfin-observatory-web-app"]=this["webpackJsonpxinfin-observatory-web-app"]||[]).push([[35],{1378:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var r=a(19),n=a.n(r),s=a(28),o=a(10),c=a(0),i=a.n(c),u=a(399),p=a(270),l=a(48),d=a(80),m=a(20),h=a(2238),f=a(2247),x=a(2222),g=a(2221),b=a(775),w=a(40),v=a(406),y=a(407),P=a(11),j=Object(p.a)((function(e){return{add:{backgroundColor:"#2149b9",marginLeft:"90px"},btn:{textAlign:"start",padding:"0px",border:"none !important",background:"none","&:hover":{background:"none"}},value:{width:"400px !important"},main_div:{marginTop:"4px"},createWatchlistMobile:{paddingLeft:"2em",paddingRight:"2em",marginTop:"14px"},radio:{},cross:{marginTop:"25px",marginLeft:"40px",fontWeight:"500"},dialog:{marginLeft:"10%",marginTop:"-30px",width:"80% !important",height:"90% !important",borderRadius:"50px !important",padding:"15px"},input:{width:"503px",height:"3px",border:"solid 1px #c6c8ce",backgroundColor:"#ffffff",borderRadius:"7px",padding:"20px",marginBottom:"20px",outline:"none"},addbtn:{width:"78px",height:"34px",margin:"14px -8px 15px 2px",borderRadius:"4px",backgroundColor:"#3763dd",color:"white"},cnlbtn:{width:"78px",height:"34px",borderRadius:"4px",backgroundColor:"#9fa9ba",color:"white",margin:"14px 8px 15px 2px"},buttons:{padding:"15px 35px 20px 0px"},subCategory:{marginTop:"-12px",marginBottom:"2px",fontFamily:"Inter",fontSize:"14px",color:"#2a2a2a",fontWeight:"500",border:"none !important"},forgotpass:{color:"#2149b9",marginLeft:"123px"},createaccount:{color:"#2149b9",marginLeft:"32px",fontfamily:"Inter",fontsize:"14px"},icon:{marginLeft:"-30px"},xdc:{color:"#2a2a2a",marginLeft:"30px",fontfamily:"Inter",fontsize:"5px"},error:{color:"red",marginLeft:"2px",marginTop:"-20px"},error1:{color:"red",marginBottom:"8px",marginTop:"-20px"},heading:{marginTop:"30px",marginBottom:"30px",fontFamily:"Inter",fontWeight:"600",fontSize:"18px",color:"#2a2a2a"},dialogBox:{width:"553px",position:"absolute",top:"111px",borderRadius:"12px"},notifyLabel:{fontSize:"14px",color:"#2a2a2a"},lastContainer:{maxWidth:"343px",width:"100%",padding:"11px 12px 10px 13px",borderRadius:"6px",backgroundColor:"#fff3f3",marginLeft:"auto",marginRight:"auto",marginBottom:"25px"},lastContainerText:{fontSize:"12px",fontFamily:"Inter !important",color:"#ff0202",lineHeight:"1.58"},"@media (max-width: 714px)":{heading:{fontSize:"16px"},dialogBox:{width:"362px",top:"95px"},input:{maxWidth:"503px",width:"100%"},notifyLabel:{fontSize:"13px",width:"250px"},subCategory1:{marginTop:"0px",marginBottom:"2px",fontFamily:"Inter",fontSize:"14px",color:"#2a2a2a",fontWeight:"500",border:"none !important"}},"@media (max-width: 900px)":{}}}));function O(){var e=i.a.useState(!1),t=Object(o.a)(e,2),a=(t[0],t[1]),r=i.a.useState(""),c=Object(o.a)(r,2),p=c[0],O=c[1],z=i.a.useState(""),E=Object(o.a)(z,2),T=E[0],D=E[1],C=i.a.useState(""),k=Object(o.a)(C,2),S=k[0],N=k[1],q=i.a.useState(""),L=Object(o.a)(q,2),A=L[0],I=L[1],W=i.a.useState(""),R=Object(o.a)(W,2),U=R[0],_=R[1],F=i.a.useState(!1),H=Object(o.a)(F,2),B=(H[0],H[1]),J=i.a.useState(!1),Y=Object(o.a)(J,2),M=(Y[0],Y[1],i.a.useState("female")),G=Object(o.a)(M,2),X=G[0],Q=G[1],K=i.a.useState(!1),Z=Object(o.a)(K,2),V=(Z[0],Z[1],window.innerHeight,function(){var e=Object(s.a)(n.a.mark((function e(){var t,r,s,c,i,u;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N(""),I(""),_(""),p||T){e.next=6;break}return _("Please enter required fields"),e.abrupt("return");case 6:if(t={userId:m.a.getDataFromCookies("userId"),address:p,description:T,type:X,isEnabled:!0},p){e.next=11;break}N("Please enter required field"),e.next=46;break;case 11:if(T){e.next=15;break}I("Please enter description"),e.next=46;break;case 15:if(p&&43===p.length&&"xdc"===p.slice(0,3)){e.next=19;break}N("Address should start with xdc and consist of 43 characters"),e.next=46;break;case 19:return"NO"===X&&(t.isEnabled=!1),e.next=22,w.a.parseResponse(b.a.addWatchlist(t));case 22:if(r=e.sent,s=Object(o.a)(r,2),c=s[0],i=s[1],!c&&i){e.next=29;break}return I("Address already exist in table"),e.abrupt("return");case 29:if(!(u=localStorage.getItem(P.c.USER_ADDRESS_WATCHLIST))){e.next=38;break}if(u=JSON.parse(u),!u.find((function(e){return e.address==t.address&&e.userId==t.userId}))){e.next=36;break}return w.a.apiFailureToast("Address already exists"),e.abrupt("return");case 36:e.next=39;break;case 38:u=[];case 39:u.push(t),localStorage.setItem(P.c.USER_ADDRESS_WATCHLIST,JSON.stringify(u)),w.a.apiSuccessToast("Address added to watchlist"),window.location.href="loginprofile",O(""),D(""),a(!1);case 46:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),$=j();function ee(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var te=i.a.useState(ee()),ae=Object(o.a)(te,2),re=ae[0],ne=ae[1];return i.a.useEffect((function(){function e(){ne(ee())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),re.width>=760&&d.a.push("/loginprofile"),i.a.createElement("div",null,i.a.createElement(v.a,null),i.a.createElement("div",{className:$.createWatchlistMobile},i.a.createElement(l.Row,null,i.a.createElement("div",{className:$.heading,id:"form-dialog-title"},"Add a New Address to your Watchlist")),U?i.a.createElement("div",{className:$.error1},U):i.a.createElement(i.a.Fragment,null),i.a.createElement("div",null,i.a.createElement("p",{className:$.subCategory},"Address"),i.a.createElement("input",{className:$.input,onChange:function(e){O(e.target.value),N("")}}),S?i.a.createElement("div",{className:$.error},S):i.a.createElement(i.a.Fragment,null)),i.a.createElement("p",null,i.a.createElement("p",{className:$.subCategory1},"Description"),i.a.createElement("input",{type:"text",className:$.input,onChange:function(e){D(e.target.value),I("")}}),A?i.a.createElement("div",{className:$.error},A):i.a.createElement(i.a.Fragment,null)),i.a.createElement("p",null,i.a.createElement("p",{className:$.subCategory},"Notifications"),i.a.createElement(g.a,{component:"fieldset",style:{backgoundColor:"red !important"},className:$.main_div},i.a.createElement(f.a,{className:$.radio,style:{margin:"-5px 28px -3px --5px"},value:X,onChange:function(e){Q(e.target.value)}},i.a.createElement(x.a,{className:"radio-inside-dot",value:"NO",control:i.a.createElement(h.a,{style:{color:"#979797"}}),style:{margin:"5px 2px -5px -9px"},classes:{label:$.notifyLabel},label:"No Notifications",onClick:function(e){return B(e.target.value)}}),i.a.createElement(x.a,{className:"radio-inside-dot",value:"INOUT",control:i.a.createElement(h.a,{style:{color:"#979797"}}),style:{margin:"-5px 26px -5px -9px"},classes:{label:$.notifyLabel},label:"Notify on Incoming & Outgoing Txns",onClick:function(e){return B(e.target.value)}}),i.a.createElement(x.a,{className:"radio-inside-dot",value:"IN",control:i.a.createElement(h.a,{style:{color:"#979797"}}),style:{margin:"-5px 26px -5px -9px"},classes:{label:$.notifyLabel},label:"Notify on Incoming (Recieve) Txns Only",onClick:function(e){return B(e.target.value)}}),i.a.createElement(x.a,{className:"radio-inside-dot",value:"OUT",control:i.a.createElement(h.a,{style:{color:"#979797"}}),style:{margin:"-5px 26px -5px -9px"},classes:{label:$.notifyLabel},label:"Notify on Outgoing (Sent) Txns Only",onClick:function(e){return B(e.target.value)}})))),i.a.createElement(u.a,null,i.a.createElement("span",{onClick:function(){a(!1),O(""),D(""),N(""),I("")}},i.a.createElement("button",{className:$.cnlbtn,onClick:function(){d.a.push("/loginprofile"),N("")}},"Cancel")),i.a.createElement("span",null,i.a.createElement("button",{className:$.addbtn,onClick:V},"Add"))),i.a.createElement("div",{className:$.lastContainer},i.a.createElement("div",{className:$.lastContainerText},"Privacy is very important to us. To protect sensitive information, all custom tags and data related to the Watchlists are saved on your local device. Clearing the browsing history or cookies will remove the watchlist data saved in your profile."))),i.a.createElement(y.a,null))}},775:function(e,t,a){"use strict";var r=a(19),n=a.n(r),s=a(28),o=a(117),c=a(11);function i(){return{"Content-Type":c.g.CONTENT_TYPE.APPLICATION_JSON,"X-API-key":"UYIQSLAYpd1i6aOAXL1okajcWJhoDQJr5KX82Zlu"}}function u(){return(u=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/transaction-private-note/"+t,e.abrupt("return",Object(o.a)("GET",i(),{},a).then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject()})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/add-transaction-label",e.abrupt("return",Object(o.a)("POST",i(),t,"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/add-transaction-label").then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject()})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/getAddress/"+t,e.abrupt("return",Object(o.a)("GET",i(),{},a).then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject()})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/add-address-tag",e.abrupt("return",Object(o.a)("POST",i(),t,"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/add-address-tag").then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject()})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/get-address-tag/"+t,e.abrupt("return",Object(o.a)("GET",i(),{},a).then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject()})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/add-watchlist",e.abrupt("return",Object(o.a)("POST",i(),t,"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/add-watchlist").then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject()})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(){return(f=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/edit-watchlist",e.abrupt("return",Object(o.a)("PUT",i(),t,"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/edit-watchlist").then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject()})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/edit-address-tag",e.abrupt("return",Object(o.a)("PUT",i(),t,"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/edit-address-tag").then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject()})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/edit-transaction-Private-note",e.abrupt("return",Object(o.a)("PUT",i(),t,"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/edit-transaction-Private-note").then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject()})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(){return(b=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/search",e.abrupt("return",Object(o.a)("POST",i(),t,"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/search").then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject()})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return(w=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/get-content-watchlist",a=i(),e.abrupt("return",Object(o.a)(c.g.METHOD_TYPE.POST,a,t,"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/get-content-watchlist").then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject(e)})).catch((function(e){return Promise.reject(e)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(){return(v=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/get-content-txn-label",a=i(),e.abrupt("return",Object(o.a)(c.g.METHOD_TYPE.POST,a,t,"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/get-content-txn-label").then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject(e)})).catch((function(e){return Promise.reject(e)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(s.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/get-content-tag-address",a=i(),e.abrupt("return",Object(o.a)(c.g.METHOD_TYPE.POST,a,t,"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/watchlist-srv/get-content-tag-address").then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject(e)})).catch((function(e){return Promise.reject(e)})));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(){return(P=Object(s.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/auth-srv/privacy-consent",e.abrupt("return",Object(o.a)(c.g.METHOD_TYPE.POST,i(),t,"https://1lzur2qul1.execute-api.us-east-2.amazonaws.com/prod/auth-srv/privacy-consent").then((function(e){return e.success&&200===e.responseCode&&e.responseData&&0!==e.responseData.length?Promise.resolve(e.responseData):Promise.reject()})).catch((function(e){return Promise.reject(e)})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.a={getUserPrivateNote:function(e){return u.apply(this,arguments)},postUserPrivateNote:function(e){return p.apply(this,arguments)},getUserWatchlist:function(e){return l.apply(this,arguments)},addPrivateTagToAddress:function(e){return d.apply(this,arguments)},getPrivateTagToAddress:function(e){return m.apply(this,arguments)},addWatchlist:function(e){return h.apply(this,arguments)},putWatchlist:function(e){return f.apply(this,arguments)},putTaggedAddress:function(e){return x.apply(this,arguments)},editUserPrivateNote:function(e){return g.apply(this,arguments)},getWatchlistList:function(e){return w.apply(this,arguments)},getTxnLabelList:function(e){return v.apply(this,arguments)},getTagAddresstList:function(e){return y.apply(this,arguments)},Search:function(e){return b.apply(this,arguments)},privacyConsent:function(e){return P.apply(this,arguments)}}}}]);
//# sourceMappingURL=35.48c4c5ad.chunk.js.map