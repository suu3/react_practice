(this.webpackJsonpreact_practice=this.webpackJsonpreact_practice||[]).push([[0],{102:function(e,t,n){e.exports={boardOrange:"rgb(255, 194, 64)",menus:"menuBoard_menus__1I8f9"}},103:function(e,t,n){e.exports={boardOrange:"rgb(255, 194, 64)",header:"header_header__3iaTi"}},108:function(e,t,n){},117:function(e,t,n){},119:function(e,t,n){},121:function(e,t,n){},133:function(e,t,n){},14:function(e,t,n){e.exports={menuBackground:"rgb(255, 249, 242)",buttonSalmon:"rgb(255, 155, 88)",row:"menuRow_row__yJaJi",name:"menuRow_name__fdZNb",price:"menuRow_price__2KC_D",quantity:"menuRow_quantity__2sQoG",button_row:"menuRow_button_row__2fSlA",trash:"menuRow_trash__3CkWl",minus:"menuRow_minus__3PJ1q",plus:"menuRow_plus__oJSRe"}},151:function(e,t,n){},155:function(e,t,n){},180:function(e,t){},198:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a,c,s,i,r,o,l,d,j,b,u,h,m,O,x,p,f,v,g,N,_=n(2),y=n.n(_),w=n(88),k=n.n(w),S=n(7),C=n(5),D=n(30),I=n(31),R=n(32),q=n(36),A=(n(108),n(1)),B=function(e){Object(R.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(D.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(I.a)(n,[{key:"render",value:function(){return Object(A.jsx)("div",{className:"home-body",children:Object(A.jsxs)("section",{className:"home-border",children:[Object(A.jsx)("div",{className:"introduce",children:Object(A.jsx)("h1",{children:"Content"})}),Object(A.jsx)("div",{className:"linkList",children:Object(A.jsxs)("ul",{children:[Object(A.jsx)("li",{className:"menu",children:Object(A.jsx)(S.b,{to:"/ToDo",children:"\u2705 ToDo"})}),Object(A.jsx)("li",{className:"menu",children:Object(A.jsx)(S.b,{to:"/Chat",children:"\ud83d\udcac Chat"})}),Object(A.jsx)("li",{className:"menu",children:Object(A.jsx)(S.b,{to:"/Search",children:"\u2753 Search"})}),Object(A.jsx)("li",{className:"menu",children:Object(A.jsx)(S.b,{to:"/Board/postList",children:"\ud83d\udcc4 Board"})}),Object(A.jsx)("li",{className:"menu",children:Object(A.jsx)(S.b,{to:"/menu",children:"\ud83c\udf54 Menu"})})]})})]})})}}]),n}(y.a.Component),L=B,E=n(34),P=n(15),J=n(3),F=(n(117),n(4)),M=n(37),T=F.b.button(a||(a=Object(J.a)(["\n  width: 30px;\n  height: 30px;\n  border-radius: 25px;\n  border: 3px solid rgba(1,1,1,0.8);\n  background-color: white;\n  cursor: pointer;\n  display: flex;\n  color: rgb(48, 79, 255);\n  align-items: center;\n  padding: 0;\n  justify-content: center;\n  ","\n\n  @media screen and (max-width:767px){ \n    transform: translateX(-20%);\n\n    }\n\n"])),(function(e){return e.isDone&&Object(F.a)(c||(c=Object(J.a)(["\n      background-color: rgb(255, 159, 188);\n    "])))})),z=F.b.button(s||(s=Object(J.a)(["\n    border-radius: 25px;\n    border: none;\n    height: 30px;\n    font-size: large;\n    font-weight: 600;\n    color: white;\n    text-align: center;\n    width: 30px;\n    margin-left: 80px;\n    background-color: rgb(255, 75, 105);\n    ","\n"])),(function(e){return e.isDone&&Object(F.a)(i||(i=Object(J.a)(["\n          background-color: rgb(255, 75, 105, 0.2);\n    "])))})),K=F.b.p(r||(r=Object(J.a)(["\n    margin: 0;\n    padding: 0;\n    ","\n    ","\n    ","\n"])),(function(e){return e.isImportant&&Object(F.a)(o||(o=Object(J.a)(["\n        color: red;\n        font-weight: 900;\n    "])))}),(function(e){return e.isDone&&Object(F.a)(l||(l=Object(J.a)(["\n          color: rgba(1,1,1,0.2);\n    "])))}),(function(e){return e.isImportant&&e.isDone&&Object(F.a)(d||(d=Object(J.a)(["\n            color: red;\n            opacity: 0.2;\n            font-weight: 900;\n    "])))})),W=function(e){Object(R.a)(n,e);var t=Object(q.a)(n);function n(e){var a;return Object(D.a)(this,n),(a=t.call(this,e)).state={day:new Date,newItem:"",list:[],totalNum:0},a}return Object(I.a)(n,[{key:"checkActive",value:function(e){var t=Object(P.a)(this.state.list),n=t.find((function(t){return t===e}));!0===n.isDone?this.setState({totalNum:this.state.totalNum+1}):!1===n.isDone&&this.setState({totalNum:this.state.totalNum-1}),n.isDone=!n.isDone,this.setState({list:t})}},{key:"importantActive",value:function(e){var t=Object(P.a)(this.state.list),n=t.find((function(t){return t===e}));n.isImportant=!n.isImportant,this.setState({list:t})}},{key:"updateInput",value:function(e,t){this.setState(Object(E.a)({},e,t))}},{key:"addItem",value:function(){var e={id:1+Math.random(),value:this.state.newItem.slice(),isDone:!1,isImportant:!1},t=Object(P.a)(this.state.list);t.push(e),this.setState({list:t,newItem:"",totalNum:this.state.totalNum+1})}},{key:"deleteItem",value:function(e){var t=Object(P.a)(this.state.list).filter((function(t){return t.id!==e}));this.setState({list:t,totalNum:this.state.totalNum-1})}},{key:"preventEmpty",value:function(){""!==this.state.newItem&&this.addItem()}},{key:"render",value:function(){var e=this;return Object(A.jsx)("div",{className:"todo-body",children:Object(A.jsxs)("div",{className:"todo-border",children:[Object(A.jsxs)("div",{className:"date",children:[Object(A.jsxs)("div",{children:[this.state.day.getMonth()+1,"\uc6d4 ",this.state.day.getDate(),"\uc77c ",["\uc77c","\uc6d4","\ud654","\uc218","\ubaa9","\uae08","\ud1a0"][this.state.day.getDay()],"\uc694\uc77c"]}),Object(A.jsxs)("div",{children:["\ud83d\udd37 \uc624\ub298\uc758 \ud560 \uc77c ",this.state.totalNum,"\uac1c \ud83d\udd37"]})]}),Object(A.jsx)("div",{className:"todoList",children:Object(A.jsx)("ul",{children:this.state.list.map((function(t){return Object(A.jsx)("li",{children:Object(A.jsxs)("div",{className:"todo",children:[Object(A.jsxs)("div",{className:"important_check",children:[!t.isImportant&&Object(A.jsx)(M.c,{onClick:function(){return e.importantActive(t)},style:{marginLeft:10,marginRight:7},color:"orange"}),t.isImportant&&Object(A.jsx)(M.a,{onClick:function(){return e.importantActive(t)},style:{marginLeft:10,marginRight:7},color:"orange"}),Object(A.jsxs)(T,{isDone:t.isDone,onClick:function(){return e.checkActive(t)},children:[console.log("isDone?"+t.isDone),t.isDone&&Object(A.jsx)(M.b,{})]})]}),Object(A.jsx)(K,{isDone:t.isDone,isImportant:t.isImportant,children:t.value}),Object(A.jsx)(z,{isDone:t.isDone,onClick:function(){return e.deleteItem(t.id)},children:"X"})]})},t.id)}))})}),Object(A.jsxs)("div",{className:"plusBox",children:[Object(A.jsx)("button",{className:"plusBox_button",onClick:function(){return e.preventEmpty()},children:"+"}),Object(A.jsx)("input",{className:"plusBox_text",onKeyPress:function(t){"Enter"===t.key&&e.preventEmpty()},type:"text",placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694. ",value:this.state.newItem,onChange:function(t){return e.updateInput("newItem",t.target.value)}})]})]})})}}]),n}(y.a.Component),H=n(6),X=(n(119),n(93)),Q=n(94),Y=(n(120),F.b.body(j||(j=Object(J.a)(["\n    width 100vw;\n    height: 100vh;\n    background: linear-gradient(to bottom, #e96443, #904e95);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"])))),Z=F.b.div(b||(b=Object(J.a)(["\n    background-color: white;\n    border-radius: 25px;\n    margin: 50px 50px;\n    width: 50vw;\n    height: 70vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;    \n    box-shadow:  5px 5px 5px rgba(1, 1, 1, 0.5);\n    @media screen and (max-width:767px){ \n        width: 100%;\n        margin: 20px;\n    }\n"]))),G=F.b.div(u||(u=Object(J.a)(["\n    background-color: #FFC371;\n    height: 15%;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    font-size: x-large;\n    font-weight: 900;\n    border-top-left-radius: 25px;\n    border-top-right-radius: 25px;\n"]))),U=F.b.div(h||(h=Object(J.a)(["\n    height: 12%;\n    border-bottom-left-radius: 25px;\n    border-bottom-right-radius: 25px;    \n    background-color: rgba(244, 247, 249);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 30px;\n"]))),V=F.b.input(m||(m=Object(J.a)(['\n    font-family: "Cafe24SsurroundAir";\n    font-size: 18px;\n    border: none;\n    background-color: rgba(244, 247, 249);\n    &:focus {\n        outline: none;\n    }\n']))),$=F.b.div(O||(O=Object(J.a)(['\n    overflow: auto;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    font-family: "Cafe24SsurroundAir";\n']))),ee=F.b.div(x||(x=Object(J.a)(["\n    margin: 0px 12px;\n    margin-top: 10px;\n"]))),te=F.b.div(p||(p=Object(J.a)(["\n    background-color: rgba(244, 247, 249);\n    padding: 15px 15px;\n    margin-left: 4px;\n    width: 22vw;\n    border-radius: 25px;\n"]))),ne=F.b.div(f||(f=Object(J.a)(["\n    font-size: x-small;\n    margin-top: 3px;\n"]))),ae=F.b.div(v||(v=Object(J.a)(["\n    margin: 0px 12px;\n    margin-top: 10px;\n    display: flex;\n    flex-direction: row-reverse;\n"]))),ce=F.b.div(g||(g=Object(J.a)(["\n    width:22px;\n    height:22px;\n    background-color: red;\n    border-radius:25px;\n    color: white;\n    font-size:small;\n    text-align: center;\n    margin-left: 8px;\n"]))),se=F.b.div(N||(N=Object(J.a)(["\n    margin-top: 4px;\n"]))),ie=new Date;function re(e){return e<10?"0"+e:e}var oe=[];var le=function(){var e=Object(_.useState)(""),t=Object(H.a)(e,2),n=t[0],a=t[1],c=function(){a(""),oe.push(n)};return Object(A.jsx)(Y,{children:Object(A.jsxs)(Z,{children:[Object(A.jsxs)(G,{children:[Object(A.jsx)(X.a,{style:{fontSize:"xx-large",marginRight:10,marginTop:3}}),"Someone",Object(A.jsx)(ce,{children:Object(A.jsx)(se,{children:"2"})})]}),Object(A.jsx)($,{children:Object(A.jsxs)("ul",{children:[Object(A.jsxs)(ee,{children:[Object(A.jsx)(te,{children:"\uc548\ub155!"}),Object(A.jsx)(ne,{children:"13:11"})]}),Object(A.jsxs)(ee,{children:[Object(A.jsx)(te,{children:"\uc2dc\uac04 \uc788\uc5b4?"}),Object(A.jsx)(ne,{children:"13:11"})]}),oe.map((function(e){return Object(A.jsx)("li",{children:Object(A.jsx)(ae,{children:Object(A.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(A.jsx)(te,{children:e}),Object(A.jsxs)(ne,{style:{display:"flex",justifyContent:"flex-end"},children:[re((ie.getHours()+24)%12||12),":",re(ie.getMinutes())]})]})})})}))]})}),Object(A.jsxs)(U,{children:[Object(A.jsx)(V,{onChange:function(e){a(e.target.value)},value:n,onKeyPress:function(e){"Enter"===e.key&&c()},placeholder:"\uba54\uc138\uc9c0\ub97c \uc785\ub825\ud558\uc138\uc694..."}),Object(A.jsx)(Q.a,{onClick:c,size:20})]})]})})};n(121);function de(e){var t=e.history,n=Object(_.useState)(""),a=Object(H.a)(n,2),c=a[0],s=a[1];return Object(A.jsxs)("div",{className:"search-wrap",children:[Object(A.jsx)("h2",{children:"\ucc45 \uc815\ubcf4 \uac80\uc0c9"}),Object(A.jsxs)("section",{className:"search-container",children:[Object(A.jsx)("input",{onKeyPress:function(e){"Enter"===e.key&&t.push("../SearchResult?title=".concat(e.target.value.replace(" ","+")))},onChange:function(e){s(e.target.value)},className:"book-input",type:"text",placeholder:"\ucc45 \uc81c\ubaa9\uc744 \uc785\ub825\ud558\uc138\uc694"}),""===c?Object(A.jsx)("button",{onClick:function(){""===c&&alert("\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")},className:"search-btn",children:"\uac80\uc0c9"}):Object(A.jsx)(S.b,{to:"/SearchResult?title=".concat(c.replace(" ","+")),children:Object(A.jsx)("button",{className:"search-btn",children:"\uac80\uc0c9"})})]})]})}var je=n(95),be=n(21),ue=n.n(be),he=n(96),me=n.n(he),Oe=(n(133),n(97)),xe=n.n(Oe);function pe(e){var t=e.location,n=Object(_.useState)(!0),a=Object(H.a)(n,2),c=a[0],s=a[1],i=me.a.parse(t.search),r=Object(_.useState)(0),o=Object(H.a)(r,2),l=o[0],d=o[1],j=Object(_.useState)([]),b=Object(H.a)(j,2),u=b[0],h=b[1],m=function(){var e=Object(je.a)(ue.a.mark((function e(){var t,n;return ue.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(i.title),e.prev=1,e.next=4,xe.a.get("https://www.googleapis.com/books/v1/volumes?q=intitle:".concat(i.title));case 4:t=e.sent,n=t.data,h(n.items),d(n.totalItems),s(!1),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}();return Object(_.useEffect)((function(){m()}),[]),Object(A.jsx)(A.Fragment,{children:c?Object(A.jsx)("div",{className:"loarder",children:Object(A.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(A.jsxs)("section",{className:"search-result",children:[u?Object(A.jsxs)("div",{className:"result-container",children:[Object(A.jsxs)("h2",{children:["\ud83d\udcda \uac80\uc0c9 \uacb0\uacfc ",l,"\uac74 \uc911 9\uac74\ub9cc \ucd9c\ub825\ub429\ub2c8\ub2e4."]}),Object(A.jsx)("ul",{className:"bookList",children:u.slice(0,9).map((function(e){return Object(A.jsxs)("li",{className:"book",children:[Object(A.jsx)("h2",{className:"bookList__title",children:e.volumeInfo.title}),Object(A.jsx)("h2",{className:"bookList__author",children:e.volumeInfo.authors}),e.volumeInfo.description?Object(A.jsx)("div",{className:"bookList__description",children:e.volumeInfo.description}):Object(A.jsx)("div",{className:"bookList__description",children:"\ub4f1\ub85d\ub41c \uc815\ubcf4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})]})}))})]}):Object(A.jsx)("div",{className:"loarder",children:Object(A.jsx)("span",{className:"loader__text",children:"\uac80\uc0c9 \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."})}),Object(A.jsx)(S.b,{to:"/",children:Object(A.jsx)("button",{className:"home-list-btn",children:"\ud648\uc73c\ub85c \ub3cc\uc544\uac00\uae30"})})]})})}var fe=[{no:1,title:"\uccab\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\uccab\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2022-02-26",readCount:6},{no:2,title:"\ub450\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\ub450\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2022-02-26",readCount:5},{no:3,title:"\uc138\ubc88\uc9f8 \uac8c\uc2dc\uae00\uc785\ub2c8\ub2e4.",content:"\uc138\ubc88\uc9f8 \uac8c\uc2dc\uae00 \ub0b4\uc6a9\uc785\ub2c8\ub2e4.",createDate:"2022-02-26",readCount:1}],ve=function(e){var t=e.item;return Object(A.jsxs)("div",{className:"table-row",children:[Object(A.jsx)("span",{className:"table-number",children:t.no}),Object(A.jsxs)("span",{className:"table-title",children:[" ",Object(A.jsx)(S.b,{to:"/Board/postDetail/".concat(t.no),children:t.title})]}),Object(A.jsx)("span",{className:"table-enrol",children:t.createDate}),Object(A.jsx)("span",{className:"table-view",children:t.readCount})]},t.no)},ge=(n(151),n(98)),Ne=n.n(ge),_e=function(e){return Object(A.jsx)(Ne.a,{activePage:e.page,itemsCountPerPage:5,totalItemsCount:e.postList.length,pageRangeDisplayed:5,prevPageText:"\u2039",nextPageText:"\u203a",onChange:e.handlePageChange})},ye=function(e){var t=Object(_.useState)([]),n=Object(H.a)(t,2),a=n[0],c=n[1],s=Object(_.useState)(1),i=Object(H.a)(s,2),r=i[0],o=i[1];return Object(_.useEffect)((function(){localStorage.getItem("data")?c(JSON.parse(localStorage.getItem("data"))):c(fe)}),[]),Object(A.jsxs)("section",{className:"post-section",children:[Object(A.jsx)("div",{className:"post-title",children:"\uac8c\uc2dc\ud310"}),Object(A.jsxs)("div",{className:"table",children:[Object(A.jsx)("div",{children:Object(A.jsxs)("div",{className:"table-head",children:[Object(A.jsx)("span",{className:"table-number",children:"\uae00\ubc88\ud638"}),Object(A.jsx)("span",{className:"table-title",children:"\uc81c\ubaa9"}),Object(A.jsx)("span",{className:"table-enrol",children:"\ub4f1\ub85d\uc77c"}),Object(A.jsx)("span",{className:"table-view",children:"\uc870\ud68c\uc218"})]})}),Object(A.jsx)("div",{className:"table-body",children:a.slice(5*(r-1),5*r).map((function(e){return Object(A.jsx)(ve,{item:e},e.id)}))})]}),Object(A.jsx)(_e,{page:r,handlePageChange:function(e){o(e),console.log(e)},postList:a}),Object(A.jsx)("button",{className:"post-add-btn",children:Object(A.jsx)(S.b,{to:"/Board/postAdd",children:"\uac8c\uc2dc\uae00 \ucd94\uac00"})})]})},we=(n(155),n(99)),ke=n.n(we),Se=function(e){var t=e.history,n=(e.location,e.match),a=Object(_.useState)({}),c=Object(H.a)(a,2),s=c[0],i=c[1],r=n.params.no,o=Object(_.useRef)(fe);Object(_.useEffect)((function(){localStorage.getItem("data")&&(o.current=JSON.parse(localStorage.getItem("data")));var e=o.current.filter((function(e){return e.no==r}));1===e.length&&i(e[0])}),[r]);return Object(A.jsxs)("section",{className:"detail-section",children:[Object(A.jsx)("div",{children:"\uac8c\uc2dc\uae00 \uc0c1\uc138\uc815\ubcf4"}),Object(A.jsxs)("div",{className:"detail-container",children:[s?Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("div",{className:"detail-row",children:[Object(A.jsx)("label",{children:"\uac8c\uc2dc\uae00 \ubc88\ud638"}),Object(A.jsx)("div",{children:s.no})]}),Object(A.jsxs)("div",{className:"detail-row",children:[Object(A.jsx)("label",{children:"\uc81c\ubaa9"}),Object(A.jsx)("div",{children:s.title})]}),Object(A.jsxs)("div",{className:"detail-row",children:[Object(A.jsx)("label",{children:"\uc791\uc131\uc77c"}),Object(A.jsx)("div",{children:s.createDate})]}),Object(A.jsxs)("div",{className:"detail-row",children:[Object(A.jsx)("label",{children:"\uc870\ud68c\uc218"}),Object(A.jsx)("div",{children:s.readCount})]}),Object(A.jsx)("div",{className:"detail-row",children:Object(A.jsx)("label",{children:"\ub0b4\uc6a9"})}),Object(A.jsx)("div",{className:"detail-content",children:ke()(s.content)})]}):"\ud574\ub2f9 \uac8c\uc2dc\uae00\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",Object(A.jsx)("button",{className:"detail-list-btn",onClick:function(){return t.goBack()},children:"\ubaa9\ub85d\uc73c\ub85c \ub3cc\uc544\uac00\uae30"}),Object(A.jsx)("button",{className:"post-delete-btn",onClick:function(){return function(){var e=o.current.filter((function(e){return e.no!=r}));console.log(e),localStorage.setItem("data",JSON.stringify(e)),t.goBack()}()},children:"\uc0ad\uc81c"})]})]})},Ce=(n(198),n(100)),De=n(101),Ie=n.n(De),Re=function(){var e=Object(_.useState)(),t=Object(H.a)(e,2),n=t[0],a=t[1];Object(_.useEffect)((function(){localStorage.getItem("data")?a(JSON.parse(localStorage.getItem("data"))):a(fe)}),[]);var c=Object(_.useState)(""),s=Object(H.a)(c,2),i=s[0],r=s[1],o=Object(_.useState)("<p>Hello from CKEditor 5!</p>"),l=Object(H.a)(o,2),d=l[0],j=l[1],b=function(){if(""!==i&&""!==d){var e=new Date(+new Date+324e5).toISOString().split("T")[0],t={no:n.length+1,title:i,content:d,createDate:e,readCount:Math.floor(10*Math.random())};a([].concat(Object(P.a)(n),[t])),localStorage.setItem("data",JSON.stringify([].concat(Object(P.a)(n),[t])))}else alert("\ud3fc\uc744 \ub9c8\uc800 \ucc44\uc6cc\uc8fc\uc138\uc694.")};return Object(A.jsxs)("section",{className:"post-add-section",children:[Object(A.jsx)("h2",{children:"\uac8c\uc2dc\uae00 \uc4f0\uae30"}),Object(A.jsxs)("div",{className:"editor-container",children:[Object(A.jsx)("input",{onChange:function(e){r(e.target.value)},className:"title-input",type:"text",placeholder:"\uc81c\ubaa9"}),Object(A.jsx)(Ce.CKEditor,{editor:Ie.a,data:"<p>Hello from CKEditor 5!</p>",onReady:function(e){},onChange:function(e,t){var n=t.getData();j(n)},onBlur:function(e,t){},onFocus:function(e,t){}})]}),""===i||""===d?Object(A.jsx)("button",{onClick:b,className:"add-submit-button",children:"\uc785\ub825"}):Object(A.jsx)(S.b,{to:"/Board/postList",children:Object(A.jsx)("button",{className:"add-submit-button",onClick:b,children:"\uc785\ub825"})})]})};var qe=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(C.a,{path:"/Board/postDetail/:no",exact:!0,component:Se}),Object(A.jsx)(C.a,{path:"/Board/postList",exact:!0,component:ye}),Object(A.jsx)(C.a,{path:"/Board/postAdd",exact:!0,component:Re})]})},Ae=n(11),Be=n(49),Le=n.n(Be),Ee=n(14),Pe=n.n(Ee),Je=Object(_.memo)((function(e){var t=e.menu,n=e.onDelete,a=e.onIncrease,c=e.onDecrease;return Object(A.jsxs)("div",{className:Pe.a.row,children:[Object(A.jsxs)("div",{children:[Object(A.jsx)("span",{className:Pe.a.name,children:t.name}),Object(A.jsxs)("span",{className:Pe.a.price,children:[t.price," Won"]}),Object(A.jsx)("span",{className:Pe.a.quantity,children:t.quantity})]}),Object(A.jsxs)("div",{className:Pe.a.button_row,children:[Object(A.jsx)("span",{onClick:function(){a(t)},children:Object(A.jsx)("i",{className:"fas fa-plus plus ".concat(Pe.a.plus)})}),Object(A.jsx)("span",{onClick:function(){c(t)},children:Object(A.jsx)("i",{className:"fas fa-minus minus ".concat(Pe.a.minus)})}),Object(A.jsx)("span",{onClick:function(){n(t)},children:Object(A.jsx)("i",{className:"fas fa-trash ".concat(Pe.a.trash)})})]})]})})),Fe=n(102),Me=n.n(Fe),Te=function(e){var t=function(t){e.onDelete(t)},n=function(t){e.onIncrease(t)},a=function(t){e.onDecrease(t)};return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("ul",{className:Me.a.menus,children:Object.keys(e.menus).map((function(c){return Object(A.jsx)(Je,{menu:e.menus[c],onDelete:t,onIncrease:n,onDecrease:a},c)}))})})},ze=n(24),Ke=n.n(ze),We=Object(_.memo)((function(e){var t=y.a.createRef(),n=y.a.createRef(),a=y.a.createRef();return Object(A.jsxs)("form",{ref:a,className:Ke.a.add_form,onSubmit:function(c){c.preventDefault();var s=t.current.value,i=n.current.value,r={id:Date.now(),name:s,price:i,quantity:0};""!==s&&""!==i||alert("Please Fill All Input"),e.onAdd(r),a.current.reset()},children:[Object(A.jsx)("input",{ref:t,type:"text",className:Ke.a.add_input,placeholder:"Name"}),Object(A.jsx)("input",{ref:n,type:"text",className:Ke.a.add_input,placeholder:"Price"}),Object(A.jsx)("button",{className:Ke.a.add_button,children:"Add"})]})})),He=n(103),Xe=n.n(He),Qe=Object(_.memo)((function(e){return Object(A.jsxs)("div",{className:Xe.a.header,children:[Object(A.jsx)("i",{className:"fas fa-utensils"}),Object(A.jsx)("span",{children:"Menu"})]})})),Ye=n(25),Ze=n.n(Ye),Ge=function(e){var t=e.selectedMenus;return Object(A.jsxs)("div",{className:Ze.a.footer,children:[Object(A.jsx)("span",{className:Ze.a.title,children:"Selected List"}),Object.keys(t).map((function(e){return Object(A.jsxs)("p",{className:Ze.a.row,children:[Object(A.jsx)("span",{children:t[e].name}),Object(A.jsxs)("span",{children:[t[e].quantity*t[e].price," Won"]})]},e)})),Object(A.jsxs)("div",{className:Ze.a.total,children:[Object(A.jsx)("span",{children:"Total Count"}),Object(A.jsxs)("span",{children:[Object.values(t).reduce((function(e,t){return e+t.quantity*t.price}),0)," ","Won"]})]})]})},Ue=(n(204),function(e){var t=Object(_.useState)({}),n=Object(H.a)(t,2),a=n[0],c=n[1],s=Object(_.useState)({1:{id:1,name:"hamburger",price:"5000",quantity:0},2:{id:2,name:"coke",price:"2000",quantity:0}}),i=Object(H.a)(s,2),r=i[0],o=i[1],l=function(e){o((function(t){var n=Object(Ae.a)({},t);return n[e.id]=e,n}))};return Object(A.jsx)("div",{className:Le.a.menu_body,children:Object(A.jsxs)("div",{className:Le.a.container,children:[Object(A.jsx)(Qe,{}),Object(A.jsx)(We,{onAdd:l}),Object(A.jsx)(Te,{menus:r,onAdd:l,onDelete:function(e){o((function(t){var n=Object(Ae.a)({},t);return delete n[e.id],n})),c((function(t){var n=Object(Ae.a)({},t);return delete n[e.id],n}))},onIncrease:function(e){var t=Object(Ae.a)({},r),n=t[e.id].quantity,s=Object(Ae.a)(Object(Ae.a)({},r[e.id]),{},{quantity:n+1});if(t[e.id]=s,o(t),s.quantity>0){var i=Object(Ae.a)({},a);i[e.id]=s,c(i)}},onDecrease:function(e){var t=Object(Ae.a)({},r),n=t[e.id].quantity,s=Object(Ae.a)(Object(Ae.a)({},r[e.id]),{},{quantity:0===n?0:n-1});t[e.id]=s,o(t);var i=Object(Ae.a)({},a);if(0===s.quantity)delete i[e.id];else{var l=Object(Ae.a)(Object(Ae.a)({},r[e.id]),{},{quantity:0===n?0:n-1});i[e.id]=l}c(i)}}),Object(A.jsx)(Ge,{selectedMenus:a})]})})});var Ve=function(){return Object(A.jsxs)(S.a,{children:[Object(A.jsx)(C.a,{path:"/",exact:!0,component:L}),Object(A.jsx)(C.a,{path:"/ToDo",component:W}),Object(A.jsx)(C.a,{path:"/Chat",component:le}),Object(A.jsx)(C.a,{path:"/Search",component:de}),Object(A.jsx)(C.a,{path:"/SearchResult",component:pe}),Object(A.jsx)(C.a,{path:"/Board",component:qe}),Object(A.jsx)(C.a,{path:"/menu",component:Ue})]})};k.a.render(Object(A.jsx)(y.a.StrictMode,{children:Object(A.jsx)(Ve,{})}),document.getElementById("root"))},24:function(e,t,n){e.exports={boardOrange:"rgb(255, 194, 64)",buttonSalmon:"rgb(255, 155, 88)",add_form:"menuAddForm_add_form__1UbZX",add_input:"menuAddForm_add_input__1-qMp",add_button:"menuAddForm_add_button__2CqzE"}},25:function(e,t,n){e.exports={boardOrange:"rgb(255, 194, 64)",buttonSalmon:"rgb(255, 155, 88)",footer:"totalCount_footer__3Iw9r",title:"totalCount_title__15W-Y",row:"totalCount_row__3H993",total:"totalCount_total__1v0a3"}},49:function(e,t,n){e.exports={menu_body:"menu_menu_body__3QJOY",container:"menu_container__jy2d4"}}},[[205,1,2]]]);
//# sourceMappingURL=main.37e259c3.chunk.js.map