(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},104:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},105:function(e,t,a){},119:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a.n(i),c=(a(103),a(104),a(105),a(84)),o=a.n(c),s=a(85),u=a(188),m=a(60),d=a(31),h=a(44),p=a(24),f=a(87),b=a(78),y=a(86),g=a(120),v=a(168),E=a(169),k=a(41),C=a(170),j=Object(g.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,color:e.palette.primary.contrastText}}});function O(e){var t=j();return r.a.createElement("div",{className:t.root},r.a.createElement(v.a,{position:"static"},r.a.createElement(E.a,null,r.a.createElement(k.a,{edge:"start",variant:"h6",className:t.title},e.title),r.a.createElement(C.a,{color:"inherit"},"Login"))))}var w=a(46),N=a(172),x=a(173),T=a(174),L=a(177),A=a(176),S=a(192),D=a(175),M=a(67),F=a.n(M),P=a(179),B=a(180),H=a(181),I=a(182),R=a(193),q=a(178),G=a(171),J=Object(g.a)(function(e){return{root:{width:"100%"},selectedLabel:{width:"100%",paddingTop:20}}});function W(e){var t=J(),a=e.checked,n=e.handleToggle,i=e.handleDelete,l=r.a.useState(!1),c=Object(w.a)(l,2),o=c[0],s=c[1],u=r.a.useState({player:{name:"ds"}}),m=Object(w.a)(u,2),d=m[0],h=m[1];function p(e){return-1!==a.indexOf(e)}return r.a.createElement("div",null,r.a.createElement(G.a,null),r.a.createElement(k.a,{variant:"h6",gutterBottom:!0,className:t.selectedLabel},"Seleccione los jugadores "),r.a.createElement(z,{playersNumber:a.length}),r.a.createElement(N.a,{className:t.root},e.players.map(function(e){var t=e.player.name,a=e.player.ability;t=t.size<2?t:t.charAt(0).toUpperCase()+t.slice(1);var i="checkbox-list-label-".concat(t);return r.a.createElement(x.a,{key:t,role:void 0,dense:!0,button:!0,onClick:function(){return n(e)}},r.a.createElement(T.a,null,r.a.createElement(S.a,{edge:"start",checked:p(e.player),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":i}})),r.a.createElement(A.a,{id:i,primary:" ".concat(t),secondary:a}),r.a.createElement(L.a,null,r.a.createElement(D.a,{edge:"end","aria-label":"delete",onClick:function(){return function(e){s(!0),console.log(e),h(e)}(e)}},r.a.createElement(F.a,{color:"secondary"}))))})),r.a.createElement(V,{open:o,setOpen:s,handleClose:function(){s(!1)},playerToDelete:d,confirm:i}))}var U=r.a.forwardRef(function(e,t){return r.a.createElement(q.a,Object.assign({direction:"up",ref:t},e))});function z(e){var t=e.playersNumber+" jugadores seleccionados",a=J();return r.a.createElement(k.a,{variant:"caption",display:"block",gutterBottom:!0,className:a.selectedLabel},t)}function V(e){var t=e.open,a=(e.setOpen,e.handleClose),n=e.playerToDelete,i=e.confirm;return r.a.createElement("div",null,r.a.createElement(R.a,{open:t,TransitionComponent:U,keepMounted:!0,onClose:a,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},r.a.createElement(P.a,{id:"alert-dialog-slide-title"},"Eliminar al jugador"),r.a.createElement(B.a,null,r.a.createElement(H.a,{id:"alert-dialog-slide-description"},"\xbfDesea eliminar a ",n.player.name," ?")),r.a.createElement(I.a,null,r.a.createElement(C.a,{onClick:a,color:"secondary"},"Cancelar"),r.a.createElement(C.a,{onClick:function(){i(n),a()},variant:"outlined",color:"secondary"},"Eliminar"))))}var $=a(83),K=a.n($),Q=a(183),X=Object(g.a)(function(e){return{root:{width:"100%",position:"relative",overflow:"auto",maxHeight:600},listSection:{backgroundColor:"inherit"},ul:{backgroundColor:"inherit",padding:0},listHeader:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText}}});function Y(e){var t=X();return r.a.createElement(N.a,{className:t.root,subheader:r.a.createElement("li",null)},e.teams.map(function(e,a){return r.a.createElement("li",{key:"section-".concat(a),className:t.listSection},r.a.createElement("ul",{className:t.ul},r.a.createElement(Q.a,{className:t.listHeader},"Equipo ".concat(a+1,"  - Habilidad ").concat(e.ability())),e.players.map(function(e){return r.a.createElement(x.a,{key:"".concat(a,"-").concat(e.name)},r.a.createElement(A.a,{primary:"".concat(e.name)}))})))}))}var Z=a(190);function _(e,t){var a,n;arguments.length>2&&void 0!==arguments[2]&&arguments[2];return(a=e,function(){return function(a){n="undefined"!==typeof n&&n;for(var i,l=a.length+1,c=a.slice(),o=[],s=[];l--;){for(;c.length;)i=c.shift(),s=e(a.slice(),i),r(o,t(s,l,n));c=a.slice()}return o=(o=function(e,t){return e.filter(function(e,t,a){return a.indexOf(e)==t})}(o)).filter(function(e){return e.length==a.length})}(a);function e(e,t){for(var a=[],n=e.indexOf(t),r=0;r<n;r++)a.push(e[r]);for(;n--;)e.shift();return e.concat(a)}function t(e,t,a){for(var n=[],r=t,i=e.shift();t--;)n.push([i].concat(e.slice(0,r-1))),e.push(e.shift());return a&&n.map(function(e){return e.sort()}),n}function r(e,t){for(var a=0,n=t.length;a<n;a++)e.push(t[a]);return e}}()).map(function(e){return function(e,t,a){for(var n=[],r=Math.trunc(e.length/t),i=0,l=0;l<t;l++)i+=r,n.push(new ee(e.slice(l*r,i)));var c=e.length%t;return 0!=c&&n[0].addPlayers(e.slice(e.length-c)),new te(n)}(e,t)}).sort(function(e,t){return e.abilityDifference()<t.abilityDifference()?-1:1})[0].teams}var ee=function(){function e(t){Object(h.a)(this,e),this.players=t}return Object(p.a)(e,[{key:"ability",value:function(){return this.players.map(function(e){return e.ability}).reduce(function(e,t){return e+t},0)}},{key:"addPlayers",value:function(e){this.players=this.players.concat(e)}}]),e}(),te=function(){function e(t){Object(h.a)(this,e),this.teams=t}return Object(p.a)(e,[{key:"abilityDifference",value:function(){return function(e){var t=0;if(null!=e){for(var a=e.length,n=0,r=0,i=e,l=0;l<a;l++)n+=Math.pow(parseFloat(i[l]),2),r+=parseFloat(i[l]);t=(n-Math.pow(r,2)/a)/a,t=Math.round(t*Math.pow(10,4))/Math.pow(10,4)}return t}(this.teams.map(function(e){return e.ability()}))}},{key:"teams",value:function(){return this.teams}}]),e}(),ae=a(49),ne=(a(3),a(189)),re=a(184),ie=a(81),le=a.n(ie),ce=Object(g.a)(function(e){return{fab:{margin:e.spacing(1),backgroundColor:e.palette.primary.dark},extendedIcon:{marginRight:e.spacing(1)}}});function oe(e){var t=ce();return r.a.createElement("div",null,r.a.createElement(re.a,{type:"submit","aria-label":"Add",className:t.fab,onClick:e.onClick,disabled:e.disabled},r.a.createElement(le.a,null)))}var se=Object(g.a)(function(e){return{container:{display:"flex",flexWrap:"wrap",flexDirection:"column"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},dense:{marginTop:19},menu:{width:200}}});function ue(e){var t=e.handleAdd,a=se(),n=r.a.useState({name:"Juan",ability:10}),i=Object(w.a)(n,2),l=i[0],c=i[1],o=function(e){return function(t){c(Object(d.a)({},l,Object(ae.a)({},e,t.target.value)))}},s={name:l.name,ability:parseFloat(l.ability)};function u(){return""==l.name||""==l.ability}return r.a.createElement("div",null,r.a.createElement("form",{className:a.container,noValidate:!0,autoComplete:"off"},r.a.createElement(k.a,{variant:"h6",gutterBottom:!0},"Agregar Jugadores "),r.a.createElement(ne.a,{id:"standard-name",label:"Nombre",className:a.textField,value:l.name,onChange:o("name"),margin:"normal"}),r.a.createElement(ne.a,{id:"standard-number",label:"Habilidad",value:l.ability,onChange:function(e){e.target.value<100&&o("ability")(e)},type:"number",className:a.textField,InputLabelProps:{shrink:!0},margin:"normal"}),r.a.createElement(oe,{onClick:function(){if(!u()){var e=s.name;s.name=e.size<2?e:e.charAt(0).toUpperCase()+e.slice(1),t(s),c({name:"",ability:""})}},disabled:u()})))}var me=a(187),de=a(186),he=a(185);function pe(){return r.a.createElement("div",null,r.a.createElement(k.a,{variant:"body2",color:"inherit"},"Copyright  \xa9Arm\xe1 tu equipo 2019"),r.a.createElement(k.a,{variant:"body2",color:"inherit"}," Built with \u2764 with",r.a.createElement(he.a,{color:"inherit",href:"https://material-ui.com/"},"Material-UI")))}var fe=Object(g.a)(function(e){return{root:{display:"flex",flexDirection:"column",marginTop:e.spacing(8),minHeight:"15vh"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3),marginTop:"auto",backgroundColor:e.palette.primary.dark,color:e.palette.primary.contrastText}}});function be(){var e=fe();return r.a.createElement("div",{className:e.root},r.a.createElement("footer",{className:e.footer},r.a.createElement(de.a,{maxWidth:"sm"},r.a.createElement(k.a,{variant:"body1"},r.a.createElement(he.a,{color:"inherit",href:"#teams"},"Arm\xe1 tu equipo.")),r.a.createElement(Z.a,{mt:4},r.a.createElement(pe,{className:e.main})))))}function ye(e){var t=Object(g.a)(function(e){return{textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}});return n.createElement(ne.a,{id:"teamsNumber",label:"Cantidad de Equipos",type:"number",value:e.teamsNumber,onChange:e.handleChange,className:t().textField,InputLabelProps:{shrink:!0},margin:"normal"})}var ge=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(b.a)(t).call(this,e))).getAll=function(){console.log(1),new Promise(function(e,t){e({json:function(){return[{name:"leo",ability:10},{name:"facu",ability:9},{name:"nico",ability:7},{name:"juancito",ability:7},{name:"Cris",ability:3},{name:"Fede",ability:4},{name:"Edu",ability:7}]}})}).then(function(e){return a.state.playersCheckList=e.json()}).then(function(e){return a.setState({data:e,playersCheckList:e.map(function(e){return{player:e,checked:!0}})})})},a.state={data:[],playersCheckList:[],teams:[],teamsNumber:2},a}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getAll()}},{key:"handleChangeTeamsNumber",value:function(e){var t=e.target.value;(""==t||t<20&&t>0)&&this.setState(Object(d.a)({},this.state,{teamsNumber:t}))}},{key:"handleToggle",value:function(e){var t=this.state.playersCheckList.map(function(e){return e.player}).indexOf(e.player);e.checked=!e.checked;var a=Object(m.a)(this.state.playersCheckList);a[t]=e,this.setState(Object(d.a)({},this.state,{playersCheckList:a}))}},{key:"handleAdd",value:function(e){var t=this.state.playersCheckList.slice(0);t.push({player:e,checked:!1}),this.setState(Object(d.a)({},this.state,{playersCheckList:t}))}},{key:"handleDelete",value:function(e){var t=this.state.playersCheckList.slice(0);t.splice(t.indexOf(e),1),this.setState(Object(d.a)({},this.state,{playersCheckList:t}))}},{key:"generateTeams",value:function(){var e=this.getSelectedPlayers();e.sort(function(){return.5-Math.random()});var t=_(e,this.state.teamsNumber);this.setState(Object(d.a)({},this.state,{teams:t})),console.log(this.state)}},{key:"render",value:function(){var e=this,t=this.state.playersCheckList,a=this.getSelectedPlayers(),r=this.state.teams;return n.createElement("div",{className:"App"},n.createElement("header",{className:"App-header-a"},n.createElement(O,{title:"Arma tu Team"})),n.createElement(Z.a,{ml:4,mr:4},n.createElement(ue,{handleAdd:function(t){return e.handleAdd.bind(e)(t)}}),n.createElement(W,{players:t,checked:a,handleDelete:this.handleDelete.bind(this),handleToggle:function(t){return e.handleToggle.bind(e)(t)}}),n.createElement(ye,{teamsNumber:this.state.teamsNumber,handleChange:this.handleChangeTeamsNumber.bind(this)}),n.createElement(C.a,{variant:"contained",color:"primary",onClick:this.generateTeams.bind(this),href:"#teams"},n.createElement(Z.a,null,n.createElement(me.a,{className:"play-arrow",edge:"start",color:"inherit","aria-label":"Generar"},n.createElement(K.a,null))),"Generar"),n.createElement(Z.a,{justifyContent:"center",display:"flex",ml:6,mr:6,id:"teams"},n.createElement(Y,{teams:r}))),n.createElement(be,null))}},{key:"getSelectedPlayers",value:function(){return this.state.playersCheckList.filter(function(e){return e.checked}).map(function(e){return e.player})}}]),t}(n.Component),ve=Object(s.a)({palette:{primary:o.a,secondary:{main:"#00685b"},contrastThreshold:3},status:{danger:"orange"}});var Ee=function(){return r.a.createElement(u.a,{theme:ve},r.a.createElement(ge,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},98:function(e,t,a){e.exports=a(119)}},[[98,1,2]]]);
//# sourceMappingURL=main.1bf0e61a.chunk.js.map