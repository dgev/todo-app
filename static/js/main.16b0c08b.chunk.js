(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{47:function(e,t,n){e.exports=n(56)},52:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(7),r=n.n(o),c=(n(52),n(13)),s=n(16),l=n(12),u=n(26),m=n(27),p=n(28),h=n(100),d=n(89),b=n(93),g=n(95),f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleSubmit=function(){n.props.submit()},n.handleChange=function(e){n.props.change(e.target.value)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(d.a,{container:!0,spacing:1,alignItems:"flex-end"},i.a.createElement(d.a,{item:!0},i.a.createElement(b.a,null,"create")),i.a.createElement(d.a,{item:!0},i.a.createElement(h.a,{id:"input-with-icon-grid",label:"Write your task here",value:this.props.value,onChange:this.handleChange})),i.a.createElement(d.a,{item:!0},i.a.createElement("label",{htmlFor:"contained-button-file"},i.a.createElement(g.a,{variant:"contained",color:"primary",component:"span",onClick:this.handleSubmit},"Submit")))))}}]),t}(i.a.Component),k=n(94),v=n(96),y=n(97),E=n(99),w=n(102),j=n(101),O=n(98),C={width:"100%",maxWidth:"360"},x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleUpdate=function(){n.props.updateChecked(n.props.completed,n.props.id)},n.handleDelete=function(){n.props.deleteTask(n.props.id)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement(k.a,{style:C},i.a.createElement(v.a,{key:this.props.id,dense:!0,button:!0},i.a.createElement(y.a,null,i.a.createElement(j.a,{edge:"start",checked:this.props.completed,onChange:this.handleUpdate,inputProps:{"aria-labelledby":"checkbox-list-label-".concat(this.props.task)}})),i.a.createElement(w.a,{style:this.props.styling,id:"checkbox-list-label-".concat(this.props.task),primary:this.props.task}),i.a.createElement(E.a,null,i.a.createElement(O.a,{edge:"end","aria-label":"comments",onClick:this.handleDelete},i.a.createElement(b.a,null,"delete")))))}}]),t}(i.a.Component),D=[{task:"something new 0",completed:!1,styling:{textDecoration:"none"}},{task:"something new 1",completed:!1,styling:{textDecoration:"none"}},{task:"something new 2",completed:!1,styling:{textDecoration:"none"}},{task:"something new 3",completed:!1,styling:{textDecoration:"none"}},{task:"something new 4",completed:!1,styling:{textDecoration:"none"}}],S={position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",backgroundColor:"white",border:"20px solid white"},T=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).updateChecked=function(e,t){n.setState((function(e){return{items:e.items.map((function(e,n){return n===t?Object.assign(e,{completed:!e.completed}):e}))}})),n.drawLine(!e,t)},n.drawLine=function(e,t){n.setState((function(n){return{items:n.items.map((function(n,a){return a===t?Object.assign(n,{styling:{textDecoration:e?"line-through":"none"}}):n}))}}))},n.deleteTask=function(e){n.state.items.splice(e,1),n.setState((function(e){return{items:e.items}}))},n.submit=function(){n.state.value&&n.setState((function(e){return{items:[].concat(Object(c.a)(e.items),[{task:e.value,completed:!1,styling:{textDecoration:"none"}}]),value:""}}))},n.change=function(e){n.setState((function(t){return{value:t.value.replace(t.value,e)}}))},n.state={items:D,value:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.items.map((function(t,n){return i.a.createElement(x,{items:D,task:t.task,key:n,completed:t.completed,id:n,styling:t.styling,deleteTask:e.deleteTask,updateChecked:e.updateChecked})}));return i.a.createElement("div",{style:S},i.a.createElement(f,{items:this.state.items,value:this.state.value,change:this.change,submit:this.submit}),t)}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.16b0c08b.chunk.js.map