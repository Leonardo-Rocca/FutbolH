(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{137:function(e,a,t){e.exports=t(159)},143:function(e,a,t){},144:function(e,a,t){e.exports=t.p+"static/media/logo.ee7cd8ed.svg"},145:function(e,a,t){},159:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(9),i=t.n(l),c=(t(143),t(144),t(145),t(113)),o=t.n(c),s=t(114),u=t(234),m=t(19),d=t(89),p=t(43),h=t(30),f=t(72),g=t(60),y=t(73),b=t(17),E=t(160),v=t(209),k=t(210),C=t(26),O=t(212),w=t(87),j=t.n(w),N=t(213),S=t(165),x=t(235),T=t(211),L=t(76),P=t(42),A=t(3),I=t(238),D=t(207),R=t(201),B=t(206),M=t(202),U=t(204),W=t(205),q=t(102),F=t.n(q),J=t(103),H=t.n(J),G=Object(E.a)({list:{width:250},fullList:{width:"auto"}});function z(e){var a=e.trigger,t=e.logOut,n=e.savePlayersLocal,l=G(),i=r.a.useState({top:!1,left:!1,bottom:!1,right:!1}),c=Object(b.a)(i,2),o=c[0],s=c[1],u=function(e,a){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&s(Object(m.a)({},o,Object(P.a)({},e,a)))}};return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,{key:"right"},r.a.createElement(D.a,{onClick:u("right",!0)},a),r.a.createElement(I.a,{anchor:"right",open:o.right,onClose:u("right",!1),onOpen:u("right",!0)},function(e){return r.a.createElement("div",{className:Object(A.a)(l.list,Object(P.a)({},l.fullList,"top"===e||"bottom"===e)),role:"presentation",onClick:u(e,!1),onKeyDown:u(e,!1)},r.a.createElement(R.a,null,[{name:"Log out",icon:r.a.createElement(F.a,null),action:t}].map(function(e){return r.a.createElement(M.a,{button:!0,key:e.name,onClick:e.action},r.a.createElement(U.a,null,e.icon),r.a.createElement(W.a,{primary:e.name}))})),r.a.createElement(B.a,null),r.a.createElement(R.a,null,[{name:"Guardar jugadores localmente",icon:r.a.createElement(H.a,null),action:n}].map(function(e){return r.a.createElement(M.a,{button:!0,key:e.name,onClick:e.action},r.a.createElement(U.a,null,e.icon),r.a.createElement(W.a,{primary:e.name}))})))}("right"))))}var Q=Object(E.a)(function(e){return{root:{flexGrow:1,marginBottom:e.spacing(2)},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,color:e.palette.primary.contrastText},userName:{marginRight:e.spacing(2)},loginModal:{paddingTop:"10%",paddingLeft:"20%",paddingRight:"20%",outline:0},loginPaper:{padding:e.spacing(1)}}});function V(e){var a=Q(),t=r.a.useState(!1),l=Object(b.a)(t,2),i=l[0],c=l[1],o=Object(n.useState)(!1),s=Object(b.a)(o,2),u=s[0],m=s[1];return r.a.createElement("div",{className:a.root},r.a.createElement(v.a,{position:"static"},r.a.createElement(k.a,null,r.a.createElement(C.a,{edge:"start",variant:"h6",className:a.title},e.title),i?r.a.createElement($,{user:i,logOut:function(){return c(!1)},savePlayersLocal:e.savePlayersLocal}):r.a.createElement(K,{setOpen:m}))),r.a.createElement(S.a,{className:a.loginModal,open:u,onClose:function(){return m(!1)},"aria-labelledby":"select login mode","aria-describedby":"modal-description"},r.a.createElement(x.a,{alignContent:"center"},r.a.createElement(T.a,{maxWidth:"xs"},r.a.createElement(L.a,{className:a.loginPaper},r.a.createElement(C.a,{edge:"start",variant:"subtitle1",align:"center"},"Ingres\xe1 para guardar y acceder a tus listas"),r.a.createElement(x.a,{alignContent:"center",p:"100"},r.a.createElement(j.a,{appId:"369937723697248",fields:"name,picture",callback:function(a){console.log(a),c(a),e.onUpdateUserId(a.userID),m(!1)},icon:"fa-facebook"})))))))}function K(e){var a=e.setOpen;return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{edge:"end","aria-label":"delete",onClick:function(){return a(!0)}},r.a.createElement(N.a,{color:"secondary"})))}var $=function(e){var a=e.user,t=e.logOut,n=e.savePlayersLocal,l=a.picture,i=Q();return l?r.a.createElement(r.a.Fragment,null,r.a.createElement("h5",{className:i.userName}," ",a.name,"  "),r.a.createElement(z,{logOut:t,savePlayersLocal:n,trigger:r.a.createElement("img",{src:a.picture.data.url,height:a.picture.height,width:a.picture.width,alt:"avatar"})})):r.a.createElement("div",null)},_=t(225),X=t(237),Y=t(75),Z=t.n(Y),ee=t(86),ae=t.n(ee),te=t(227),ne=t(228),re=t(229),le=t(230),ie=t(226),ce=t(208),oe=t(224),se=t(104),ue=t(105),me=t.n(ue),de=t(107),pe=t.n(de),he=t(108),fe=t.n(he),ge=t(109),ye=t.n(ge),be=t(214),Ee=t(215),ve=t(216),ke=t(239),Ce=t(217),Oe=t(106),we=t.n(Oe),je={success:me.a,warning:we.a,error:pe.a,info:fe.a},Ne=Object(E.a)(function(e){return{success:{backgroundColor:be.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:Ee.a[900]},warning:{backgroundColor:ve.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}});function Se(e){var a=Ne(),t=e.className,n=e.message,l=e.onClose,i=e.variant,c=Object(se.a)(e,["className","message","onClose","variant"]),o=je[i];return r.a.createElement(Ce.a,Object.assign({className:Object(A.a)(a[i],t),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:a.message},r.a.createElement(o,{className:Object(A.a)(a.icon,a.iconVariant)}),n),action:[r.a.createElement(O.a,{key:"close","aria-label":"close",color:"inherit",onClick:l},r.a.createElement(ye.a,{className:a.icon}))]},c))}var xe=Object(E.a)(function(e){return{margin:{margin:e.spacing(1)}}});function Te(e){xe();return r.a.createElement("div",null,r.a.createElement(ke.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:e.open,autoHideDuration:2e3,onClose:e.handleCloseSnackBar},r.a.createElement(Se,{onClose:e.handleCloseSnackBar,variant:e.type,message:e.message})))}var Le=t(219),Pe=t(110),Ae=Object(E.a)(function(e){return{root:{display:"flex",flexWrap:"wrap"},formControl:{margin:e.spacing(1),minWidth:12},selectEmpty:{marginTop:e.spacing(2)},hide:{display:"none"}}});function Ie(e){var a=e.record,t=Ae(),n=new Array(e.teamsQuantity).fill(0).map(function(e,a){return a+1}),l=a.checked?t.formControl:t.hide,i=a.player,c=a.teamNumber;return r.a.createElement(Le.a,{className:l},r.a.createElement(Pe.a,{value:c,onChange:e.handleTeamSelectionChange(i),name:"age",className:t.selectEmpty,inputProps:{"aria-label":"age"}},r.a.createElement("option",{value:0},"Sin equipo"),n.map(function(e){return r.a.createElement("option",{key:i.name+e,value:e},e)})))}var De=t(222),Re=t(221),Be=t(236),Me=t(220),Ue=t(85),We=t.n(Ue),qe=Object(E.a)(function(e){return{fab:{margin:e.spacing(1),backgroundColor:e.palette.primary.dark},extendedIcon:{marginRight:e.spacing(1)}}});function Fe(e){var a=qe();return r.a.createElement("div",null,r.a.createElement(Me.a,{type:"submit","aria-label":"Add",className:a.fab,onClick:e.onClick,disabled:e.disabled},r.a.createElement(We.a,null)))}n.Component;var Je=t(223),He=Object(E.a)(function(e){return{container:{backgroundColor:e.palette.background.paper,paddingTop:e.spacing(1),minWidth:280},form:{display:"flex",flexWrap:"wrap",flexDirection:"column"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200},plusBtn:{marginBottom:5}}});function Ge(e){var a=r.a.useState(e.player),t=Object(b.a)(a,2),n=t[0],l=t[1];return console.log("addpanel"),ze(Object(m.a)({},e,{player:n,setPlayer:l}))}function ze(e){var a=e.content,t=e.handleAdd,n=He(),l=e.player,i=e.setPlayer,c=function(e){return function(a){i(Object(m.a)({},l,Object(P.a)({},e,a.target.value)))}};console.log(e.names.map(function(e){return e.toUpperCase()})),console.log(l.name.toUpperCase());var o=function(){return e.names.map(function(e){return e.toUpperCase()}).includes(l.name.toUpperCase())},s={name:l.name,ability:parseFloat(l.ability)};function u(){return""==l.name||""==l.ability||o()}var d=r.a.useState(!1),p=Object(b.a)(d,2),h=p[0],f=p[1];function g(){f(!0)}var y=o()?"El nombre ya existe":"";return r.a.createElement("div",{className:n.container},r.a.createElement(Re.a,{color:"primary"},r.a.createElement(De.a,{title:a.title}),r.a.createElement("form",{className:n.form,noValidate:!0,autoComplete:"off"},r.a.createElement(Be.a,{required:!0,error:o(),helperText:y,id:"standard-name",label:"Nombre",className:n.textField,value:l.name,onChange:c("name"),margin:"normal"}),r.a.createElement(Be.a,{id:"standard-number",label:"Habilidad",value:l.ability,onChange:function(e){e.target.value<101&&c("ability")(e)},type:"number",placeholder:"Puntaje del 1 al 10",className:n.textField,InputLabelProps:{shrink:!0},margin:"normal"}),r.a.createElement(x.a,{ml:4,mr:4},r.a.createElement(D.a,{variant:"contained",color:"primary",type:"submit",onClick:function(){!function(){if(!u()){var e=s.name;s.name=e.size<2?e:e.charAt(0).toUpperCase()+e.slice(1),t(s),i({name:"",ability:""})}}(),g()},disabled:u()},r.a.createElement(Je.a,{className:n.plusBtn,color:"inherit","aria-label":"OK"},a.icon),a.actionLabel)),r.a.createElement(Te,{type:"success",message:a.successMsg,open:h,handleCloseSnackBar:function(e,a){"clickaway"!==a&&f(!1)},handleClickSnackBar:g}),r.a.createElement(x.a,{mb:4}))))}var Qe=Object(E.a)(function(e){return{root:{width:"100%"},selectedLabel:{width:"100%",paddingTop:20},selectAll:{paddingLeft:4,paddingTop:1},panel:{paddingTop:e.spacing(1)}}});function Ve(e){var a=Qe(),t=e.checked,n=e.players,l=e.handleToggle,i=e.handleDelete,c=r.a.useState(!1),o=Object(b.a)(c,2),s=o[0],u=o[1],d=r.a.useState(!1),p=Object(b.a)(d,2),h=p[0],f=p[1],g=r.a.useState({player:{name:"ds"}}),y=Object(b.a)(g,2),E=y[0],v=y[1],k=r.a.useState({name:"ed",ability:0,index:-1}),w=Object(b.a)(k,2),j=w[0],N=w[1],S=r.a.useState(""),x=Object(b.a)(S,2),T=x[0],L=x[1];var P=function(e){return-1!==t.indexOf(e)},A=r.a.useState(!1),I=Object(b.a)(A,2),D=I[0],q=I[1],F=function(){return q(!0)};r.a.createElement(Z.a,null);var J=t.length,H=n.length;return r.a.createElement("div",{className:a.panel},r.a.createElement(Re.a,null,r.a.createElement(oe.a,null),r.a.createElement(C.a,{variant:"h6",gutterBottom:!0,className:a.selectedLabel},"Seleccione los jugadores "),r.a.createElement(De.a,{className:a.selectAll,avatar:r.a.createElement(X.a,{onClick:e.handleToggleAll,checked:J===H&&0!==H,indeterminate:J!==H&&0!==J,disabled:0===H,inputProps:{"aria-label":"all items selected"}}),title:" ".concat(J,"/").concat(H," jugadores seleccionados")})," ",r.a.createElement(B.a,null),r.a.createElement(R.a,null,n.map(function(a){var t=a.player,i=t.name,c=t.ability;i=i.size<2?i:i.charAt(0).toUpperCase()+i.slice(1);var o="checkbox-list-label-".concat(i);return r.a.createElement(M.a,{key:i,role:void 0,dense:!0,button:!0,onClick:function(){return l(a)}},r.a.createElement(U.a,null,r.a.createElement(X.a,{edge:"start",checked:P(t),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":o}})),r.a.createElement(W.a,{id:o,primary:" ".concat(i),secondary:c}),r.a.createElement(_.a,null,r.a.createElement(Ie,{record:a,teamsQuantity:e.teamsQuantity,handleTeamSelectionChange:e.handleTeamSelectionChange}),r.a.createElement(O.a,{edge:"end","aria-label":"Comments",onClick:function(){return e=t,f(!0),N(Object(m.a)({},e,{index:n.map(function(e){return e.player.name}).indexOf(e.name)})),void L(e.name);var e}},r.a.createElement(Z.a,{color:"secondary"})),r.a.createElement(O.a,{edge:"end","aria-label":"delete",onClick:function(){return function(e){u(!0),v(e)}(a)}},r.a.createElement(ae.a,{color:"secondary"}))))})),r.a.createElement(_e,{open:s,setOpen:u,handleClose:function(){return u(!1)},playerToDelete:E,confirm:function(e){i(e),F()}}),r.a.createElement(Xe,{open:h,setOpen:f,handleEdit:function(a){console.log(a),f(!1),e.handleEdit(j)},forbiddenNames:n.map(function(e){return e.player.name}).filter(function(e){return e!==T}),playerToEdit:j,setPlayerToEdit:N}),r.a.createElement(Te,{type:"info",message:"Jugador Eliminado!",open:D,handleCloseSnackBar:function(e,a){"clickaway"!==a&&q(!1)},handleClickSnackBar:F})))}var Ke={title:"Editar Jugador ",actionLabel:"Editar",successMsg:"Jugador Editado!",icon:r.a.createElement(Z.a,null)},$e=r.a.forwardRef(function(e,a){return r.a.createElement(ce.a,Object.assign({direction:"up",ref:a},e))});function _e(e){var a=e.open,t=(e.setOpen,e.handleClose),n=e.playerToDelete,l=e.confirm;return r.a.createElement("div",null,r.a.createElement(ie.a,{open:a,TransitionComponent:$e,keepMounted:!0,onClose:t,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(te.a,{id:"alert-dialog-slide-title"},"Eliminar al jugador"),r.a.createElement(ne.a,null,r.a.createElement(re.a,{id:"alert-dialog-slide-description"},"\xbfDesea eliminar a ",n.player.name," ?")),r.a.createElement(le.a,null,r.a.createElement(D.a,{onClick:t,color:"secondary"},"Cancelar"),r.a.createElement(D.a,{onClick:function(){l(n),t()},variant:"outlined",color:"secondary"},"Eliminar"))))}function Xe(e){return r.a.createElement(ie.a,{open:e.open,TransitionComponent:$e,keepMounted:!0,onClose:function(){return e.setOpen(!1)},"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(ze,{handleAdd:e.handleEdit,names:e.forbiddenNames,content:Ke,player:e.playerToEdit,setPlayer:e.setPlayerToEdit}))}var Ye=t(112),Ze=t.n(Ye),ea=t(231),aa=Object(E.a)(function(e){return{root:{width:"100%",position:"relative",overflow:"auto",maxHeight:600},listSection:{backgroundColor:"inherit",paddingTop:2},ul:{backgroundColor:"inherit",padding:0},listHeader:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},teamsTitle:{paddingTop:15}}});function ta(e){var a=aa(),t=e.teams&&e.teams.length?"Equipos ":"";return r.a.createElement("div",null,r.a.createElement(C.a,{variant:"h6",gutterBottom:!0,className:a.teamsTitle,id:"teams"},t),r.a.createElement(R.a,{className:a.root,subheader:r.a.createElement("li",null)},e.teams.map(function(e,t){return r.a.createElement("li",{key:"section-".concat(t),className:a.listSection},r.a.createElement(Re.a,null,r.a.createElement("ul",{className:a.ul},r.a.createElement(ea.a,{className:a.listHeader},"Equipo ".concat(t+1,"  - Habilidad ").concat(e.ability())),e.players.map(function(e){return r.a.createElement(M.a,{key:"".concat(t,"-").concat(e.name)},r.a.createElement(W.a,{primary:"".concat(e.name)}))}))))})))}function na(e,a){return function(){return function(e){a="undefined"!==typeof a&&a;var l,i=e.length+1,c=e.slice(),o=[],s=[];for(;i--;){for(;c.length;)l=c.shift(),s=t(e.slice(),l),r(o,n(s,i,a));c=e.slice()}return o=(o=function(e,a){return e.filter(function(e,a,t){return t.indexOf(e)==a})}(o)).filter(function(a){return a.length==e.length})}(e);function t(e,a){for(var t=[],n=e.indexOf(a),r=0;r<n;r++)t.push(e[r]);for(;n--;)e.shift();return e.concat(t)}function n(e,a,t){for(var n=[],r=a,l=e.shift();a--;)n.push([l].concat(e.slice(0,r-1))),e.push(e.shift());return t&&n.map(function(e){return e.sort()}),n}function r(e,a){for(var t=0,n=a.length;t<n;t++)e.push(a[t]);return e}}()}function ra(e,a){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];var n=function(e){var a=e.slice(0);return a.reverse(),na(a).concat(na(e))}(e).map(function(e){return function(e,a,t){for(var n=[],r=Math.trunc(e.length/a),l=0,i=0;i<a;i++)l+=r,n.push(new la(e.slice(i*r,l)));var c=e.length%a;return 0!=c&&n[0].addPlayers(e.slice(e.length-c)),new ia(n)}(e,a)}).filter(function(e){return e.contains(t)}).sort(function(e,a){return e.abilityDifference()<a.abilityDifference()?-1:1});return n.length>0?n[0].teams:[]}var la=function(){function e(a){Object(p.a)(this,e),this.players=a}return Object(h.a)(e,[{key:"ability",value:function(){return this.players.map(function(e){return e.ability}).reduce(function(e,a){return e+a},0)}},{key:"addPlayers",value:function(e){this.players=this.players.concat(e)}},{key:"containsAll",value:function(e){var a=this;return!e||!e.length||e.every(function(e){return a.players.includes(e)})}}]),e}(),ia=function(){function e(a){Object(p.a)(this,e),this.teams=a}return Object(h.a)(e,[{key:"abilityDifference",value:function(){return function(e){var a=0;if(null!=e){for(var t=e.length,n=0,r=0,l=e,i=0;i<t;i++)n+=Math.pow(parseFloat(l[i]),2),r+=parseFloat(l[i]);a=(n-Math.pow(r,2)/t)/t,a=Math.round(a*Math.pow(10,4))/Math.pow(10,4)}return a}(this.teams.map(function(e){return e.ability()}))}},{key:"teams",value:function(){return this.teams}},{key:"contains",value:function(e){var a=this;return!e||!e.length||e.every(function(e,t){return a.teams[t].containsAll(e)})}}]),e}(),ca=t(232);function oa(){return r.a.createElement("div",null,r.a.createElement(C.a,{variant:"body2",color:"inherit"},"Copyright  \xa9Arm\xe1 tu equipo 2020"),r.a.createElement(C.a,{variant:"body2",color:"inherit"}," Creado por Leonardo R. con \u2764 usando",r.a.createElement(ca.a,{color:"inherit",href:"https://material-ui.com/"},"Material-UI")))}var sa=Object(E.a)(function(e){return{root:{display:"flex",flexDirection:"column",marginTop:e.spacing(8),minHeight:"15vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3),marginTop:"auto",backgroundColor:e.palette.primary.dark,color:e.palette.primary.contrastText}}});function ua(){var e=sa();return r.a.createElement("div",{className:e.root},r.a.createElement("footer",{className:e.footer},r.a.createElement(T.a,{maxWidth:"sm"},r.a.createElement(C.a,{variant:"body1"},r.a.createElement(ca.a,{color:"inherit",href:"#teams"},"Arm\xe1 tu equipo.")),r.a.createElement(x.a,{mt:4},r.a.createElement(oa,{className:e.main})))))}var ma=t(233);function da(e){var a=Object(E.a)(function(e){return{textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}});return n.createElement(Be.a,{id:"teamsNumber",label:"Cantidad de Equipos",type:"number",value:e.teamsNumber,onChange:e.handleChange,className:a().textField,InputLabelProps:{shrink:!0},margin:"normal"})}var pa=function(e){function a(e){var t;return Object(p.a)(this,a),(t=Object(f.a)(this,Object(g.a)(a).call(this,e))).getAll=function(){new Promise(function(e,a){e({json:function(){return[]}})}).then(function(e){return t.state.playersCheckList=e.json()}).then(function(e){return t.setState({data:e,playersCheckList:e.map(function(e){return{player:e,checked:!0,teamNumber:0}})})}).then(function(){var e=localStorage.getItem("players");e&&t.setState({playersCheckList:JSON.parse(e)})})},t.handleToggleAll=function(){t.getSelectedRecords().length===t.state.playersCheckList.length?t.setChecked(t.state.playersCheckList.map(function(e){return e.checked=!1,e})):t.setChecked(t.state.playersCheckList.map(function(e){return e.checked=!0,e}))},t.handleTeamSelectionChange=function(e){return function(a){var n=t.getPlayers().indexOf(e),r=Object(d.a)(t.state.playersCheckList);r[n].teamNumber=parseInt(a.target.value),t.updatePlayersChecklist(r)}},t.state={data:[],playersCheckList:[],teams:[],teamsNumber:2,userId:null},t}return Object(y.a)(a,e),Object(h.a)(a,[{key:"updateUserId",value:function(e){this.setState(Object(m.a)({},this.state,{userId:e}))}},{key:"componentDidMount",value:function(){this.getAll()}},{key:"handleChangeTeamsNumber",value:function(e){var a=e.target.value;(""==a||a<20&&a>0)&&(a=""==a?a:parseInt(a),this.setState(Object(m.a)({},this.state,{teamsNumber:a})))}},{key:"getPlayers",value:function(){return this.state.playersCheckList.map(function(e){return e.player})}},{key:"handleAdd",value:function(e){var a=this.state.playersCheckList.slice(0);a.push({player:e,checked:!0}),this.updatePlayersChecklist(a)}},{key:"handleDelete",value:function(e){var a=this.state.playersCheckList.slice(0);a.splice(a.indexOf(e),1),this.updatePlayersChecklist(a)}},{key:"handleEdit",value:function(e){var a=this.state.playersCheckList.slice(0);a[e.index].player={name:e.name,ability:parseFloat(e.ability)},this.updatePlayersChecklist(a)}},{key:"handleToggle",value:function(e){var a=this.getPlayers().indexOf(e.player);e.checked=!e.checked;var t=Object(d.a)(this.state.playersCheckList);t[a]=e,this.updatePlayersChecklist(t)}},{key:"setChecked",value:function(e){this.setState(Object(m.a)({},this.state,{playersCheckList:e}))}},{key:"updatePlayersChecklist",value:function(e){e.sort(function(e,a){return e.name<a.name?-1:1}),this.setState(Object(m.a)({},this.state,{playersCheckList:e})),localStorage.setItem("players",JSON.stringify(e))}},{key:"generateTeams",value:function(){var e=this,a=this.getSelectedPlayers();a.sort(function(){return.5-Math.random()});var t=this.state.teamsNumber,n=ra(a,t,new Array(t).fill(0).map(function(a,t){return e.getSelectedRecords().filter(function(e){return e.teamNumber==t+1}).map(function(e){return e.player})}));this.setState(Object(m.a)({},this.state,{teams:n}))}},{key:"render",value:function(){var e=this,a=this.state.playersCheckList,t=this.getSelectedPlayers(),r=this.state.teams,l=this.state.teamsNumber,i={title:"Agregar Jugadores ",actionLabel:"Agregar",successMsg:"Jugador Agregado!",icon:n.createElement(ma.a,null)};return n.createElement(x.a,{className:"App",display:"flex",flexDirection:"column",minHeight:"100vh"},n.createElement("header",{className:"App-header-a"},n.createElement(V,{title:"Arma tu Equipo",onUpdateUserId:this.updateUserId.bind(this),savePlayersLocal:function(){localStorage.setItem("players",JSON.stringify(a)),e.props.useSnackbar("Jugadores guardados localmente")}})),n.createElement(x.a,{ml:3,mr:3,flexGrow:1},n.createElement(oe.a,null),n.createElement(C.a,{variant:"subtitle1",ml:2},"Crea equipos f\xe1cil y r\xe1pido"),n.createElement(x.a,{display:"flex",flexWrap:"wrap",justifyContent:"center"},n.createElement(Ge,{handleAdd:function(a){return e.handleAdd.bind(e)(a)},names:a.map(function(e){return e.player.name}),content:i,player:{name:"",ability:""}}),n.createElement(x.a,{flexGrow:1,ml:1,mr:1},n.createElement(Ve,{players:a,checked:t,teamsQuantity:l,handleEdit:this.handleEdit.bind(this),handleDelete:this.handleDelete.bind(this),handleToggle:function(a){return e.handleToggle.bind(e)(a)},handleToggleAll:this.handleToggleAll.bind(this),handleTeamSelectionChange:this.handleTeamSelectionChange.bind(this)}))),n.createElement("br",null),n.createElement("br",null),n.createElement(da,{teamsNumber:l,handleChange:this.handleChangeTeamsNumber.bind(this)}),n.createElement(D.a,{variant:"contained",color:"primary",onClick:this.generateTeams.bind(this),href:"#teams",disabled:t.length<1},n.createElement(x.a,null,n.createElement(Je.a,{className:"play-arrow",edge:"start",color:"inherit","aria-label":"Generar"},n.createElement(Ze.a,null))),"Generar Equipos"),n.createElement(ta,{teams:r})),n.createElement(ua,null))}},{key:"getSelectedPlayers",value:function(){return this.getSelectedRecords().map(function(e){return e.player})}},{key:"getSelectedRecords",value:function(){return this.state.playersCheckList.filter(function(e){return e.checked})}}]),a}(n.Component),ha=t(88),fa=Object(s.a)({palette:{primary:o.a,secondary:{main:"#00685b"},contrastThreshold:3},status:{danger:"orange"}});var ga=function(){var e=Object(ha.b)().enqueueSnackbar;return r.a.createElement(pa,{useSnackbar:e})},ya=function(){return r.a.createElement(u.a,{theme:fa},r.a.createElement(ha.a,{maxSnack:3},r.a.createElement(ga,null)))},ba=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ea(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(ya,null),document.getElementById("root"));var va=window.location.href;-1!==va.search("https")&&-1===va.search("index.html?utm_source=homescreen")||-1!==va.search("localhost")||window.location.replace("https://arma-tu-equipo.herokuapp.com/"),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("","/service-worker.js");ba?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Ea(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Ea(a,e)})}}()}},[[137,1,2]]]);
//# sourceMappingURL=main.9282fec2.chunk.js.map