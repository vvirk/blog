(window.webpackJsonpblog=window.webpackJsonpblog||[]).push([[0],{21:function(e,t,n){e.exports={wrap:"Preloader_wrap__1sVqL",inner:"Preloader_inner__2VW6Y"}},29:function(e,t,n){e.exports=n.p+"static/media/Spinner.315ddeed.svg"},30:function(e,t,n){e.exports={post:"post_post__O9m6l"}},34:function(e,t,n){e.exports=n(47)},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(17),c=n.n(o),u=n(1),s=n(16),i=n(27),l=n(33),p=n(28);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(n,!0).forEach(function(t){Object(p.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f={isFetching:!1,posts:!1,post:!1,comment:"",done:!1,postInfo:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_IS_FETSHING":return d({},e,{isFetching:t.isFetching});case"ADD_POSTS":return d({},e,{posts:t.posts});case"ADD_POST":return d({},e,{post:t.post});case"ADD_COMMENT_VALUE":return d({},e,{comment:t.commentValue});case"ADD_COMMENT_TO_POST":return d({},e,{post:d({},e.post,{comments:[].concat(Object(l.a)(e.post.comments),[t.comment])})});case"CHANGE_AUTHOR":return d({},e,{postInfo:d({},e.postInfo,{author:t.author})});case"CHANGE_TITLE":return d({},e,{postInfo:d({},e.postInfo,{title:t.title})});case"CHANGE_BODY":return d({},e,{postInfo:d({},e.postInfo,{body:t.body})});case"EDIT_POST_INFO":return d({},e,{postInfo:d({},e.postInfo,{author:t.author,title:t.title,body:t.body})});case"CLEAR_POST_INFO":return d({},e,{postInfo:t.clear});case"DONE":return d({},e,{done:t.done});default:return e}},b=n(2),O=n(8),E=n(9),y=n(10),v=n(12),g=n(11),j=n(13),w=n(21),_=n.n(w),T=n(29),I=n.n(T),P=function(){return a.a.createElement("div",{className:_.a.wrap},a.a.createElement("div",{className:_.a.inner},a.a.createElement("img",{src:I.a,alt:"Spinner"})))},D=n(30),x=n.n(D),C=function(e){var t=e.id,n=e.title,r=e.body,o=e.author,c=e.data;return a.a.createElement("li",{className:x.a.post,key:t},a.a.createElement("p",null,n),a.a.createElement("p",null,r),a.a.createElement("p",null,o),a.a.createElement("p",null,c),a.a.createElement(b.b,{to:"/details/".concat(t)},"read more"))},N=function(e){var t=e.posts;return a.a.createElement("div",null,a.a.createElement(b.b,{to:"/new"},"ADD POST"),a.a.createElement("ul",null,t?t.map(function(e){return a.a.createElement(C,{id:e.id,title:e.title,body:e.body,author:e.author,data:e.data})}):null))},S=n(6),k=n.n(S),A=n(14),F=function(e){return{type:"TOGGLE_IS_FETSHING",isFetching:e}},M=function(e){return{type:"ADD_COMMENT_VALUE",commentValue:e}},G=function(e){return{type:"ADD_COMMENT_TO_POST",comment:e}},H=function(e){return{type:"DONE",done:e}},V="https://simple-blog-api.crew.red/posts/",L={toggleIsFetching:F},R=Object(u.b)(function(e){return{isFetching:e.isFetching,posts:e.posts}},L)(N),Y=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.getPosts()}},{key:"render",value:function(){var e=this.props.isFetching;return a.a.createElement("div",{className:"blog-wrap"},e?a.a.createElement(P,null):null,a.a.createElement(R,null))}}]),t}(a.a.Component),B={getPosts:function(){return function(){var e=Object(A.a)(k.a.mark(function e(t){var n,r;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F(!0)),e.next=4,fetch(V);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,t({type:"ADD_POSTS",posts:r}),t(F(!1)),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()},toggleIsFetching:F},U=Object(u.b)(function(e){return{isFetching:e.isFetching,posts:e.posts}},B)(Y),J=function(e){var t=e.body,n=e.postId,r=e.id;return a.a.createElement("li",{key:r,id:n},t)},W=function(e){var t=e.addCommentValue,n=e.commentValue,r=e.postComment,o=e.match;return a.a.createElement("div",null,a.a.createElement("input",{onChange:function(e){return t(e.target.value)},onKeyUp:function(e){return 13===e.keyCode&&n?r(n,o.params.id):null},value:n}),a.a.createElement("button",{type:"button",onClick:function(){return r(n,o.params.id)}},"add comment"))},q={addCommentValue:M,postComment:function(e,t){return function(){var n=Object(A.a)(k.a.mark(function n(r){var a,o;return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,r(M("")),a={postId:+t,body:e},n.next=5,fetch("https://simple-blog-api.crew.red/comments",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}});case 5:return o=n.sent,n.next=8,o.json();case 8:r(G(a)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:case"end":return n.stop()}},n,null,[[0,11]])}));return function(e){return n.apply(this,arguments)}}()}},K=Object(O.f)(Object(u.b)(function(e){return{commentValue:e.comment}},q)(W)),$=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.getPost(this.props.match.params.id)}},{key:"render",value:function(){var e=this.props,t=e.isFetching,n=e.post,r=e.match;return console.log(n),a.a.createElement("div",{className:"wrap"},t?a.a.createElement(P,null):null,a.a.createElement("h2",null,n.title),a.a.createElement("p",null,n.body),a.a.createElement("p",null,n.author),a.a.createElement("p",null,n.date),a.a.createElement(b.b,{to:"/details/".concat(r.params.id,"/edit")},"edit"),a.a.createElement("p",null,"comments:"),a.a.createElement(K,null),a.a.createElement("ul",null,n.comments?n.comments.map(function(e){return a.a.createElement(J,{body:e.body,postId:e.postId,id:e.id})}):null))}}]),t}(a.a.Component),z={toggleIsFetching:F,getPost:function(e){return function(){var t=Object(A.a)(k.a.mark(function t(n){var r,a,o;return k.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(F(!0)),r="".concat(V).concat(e,"?_embed=comments"),t.next=5,fetch(r);case 5:return a=t.sent,t.next=8,a.json();case 8:o=t.sent,n({type:"ADD_POST",post:o}),n(F(!1)),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),console.log(t.t0);case 16:case"end":return t.stop()}},t,null,[[0,13]])}));return function(e){return t.apply(this,arguments)}}()}},Q=Object(O.f)(Object(u.b)(function(e){return{isFetching:e.isFetching,post:e.post}},z)($)),X=n(32),Z=function(e){var t=e.addNewPost,n=e.posts,o=e.done,c=Object(r.useRef)(),u=Object(r.useRef)(),s=Object(r.useRef)(),i=n[n.length-1].id+1;return a.a.createElement("div",null,a.a.createElement("h2",null,"Create new post"),a.a.createElement("input",{type:"text",placeholder:"author",ref:c}),a.a.createElement("input",{type:"text",placeholder:"title",ref:u}),a.a.createElement("textarea",{placeholder:"post body",ref:s}),a.a.createElement("button",{type:"button",onClick:function(){return t(i,c.current.value,u.current.value,s.current.value,X().format("YYYY-MM-D HH:mm:ss"))}},"ADD POST"),o?a.a.createElement(O.a,{to:"/"}):null)},ee={addNewPost:function(e,t,n,r,a){return function(){var o=Object(A.a)(k.a.mark(function o(c){var u,s;return k.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,u={title:n,body:r,id:+e,author:t,date:a},o.next=4,fetch(V,{method:"POST",body:JSON.stringify(u),headers:{"Content-Type":"application/json"}});case 4:return s=o.sent,o.next=7,s.json();case 7:c(H(!0)),o.next=13;break;case 10:o.prev=10,o.t0=o.catch(0),console.log(o.t0);case 13:case"end":return o.stop()}},o,null,[[0,10]])}));return function(e){return o.apply(this,arguments)}}()}},te=Object(O.f)(Object(u.b)(function(e){return{posts:e.posts,done:e.done}},ee)(Z)),ne=function(e){function t(){return Object(E.a)(this,t),Object(v.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.editPostInfo(this.props.post.author,this.props.post.title,this.props.post.body)}},{key:"render",value:function(){var e=this.props,t=e.done,n=e.id,r=e.postInfo,o=e.changeAuthor,c=e.changeTitle,u=e.changeBody,s=e.editPost;return a.a.createElement("div",null,a.a.createElement("h2",null,"Create new post"),a.a.createElement("input",{value:r.author,onChange:function(e){return o(e.target.value)},type:"text",placeholder:"author"}),a.a.createElement("input",{value:r.title,onChange:function(e){return c(e.target.value)},type:"text",placeholder:"title"}),a.a.createElement("textarea",{value:r.body,onChange:function(e){return u(e.target.value)},placeholder:"post body"}),a.a.createElement("button",{type:"button",onClick:function(){return s(n,r.author,r.title,r.body)}},"EDIT POST"),t?a.a.createElement(O.a,{to:"/"}):null)}}]),t}(a.a.Component),re={editPost:function(e,t,n,r){return function(){var a=Object(A.a)(k.a.mark(function a(o){var c,u,s;return k.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,c={title:n,body:r,id:+e,author:t},u="".concat(V).concat(e),a.next=5,fetch(u,{method:"PUT",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}});case 5:return s=a.sent,a.next=8,s.json();case 8:o(H(!0)),o({type:"CLEAR_POST_INFO",clear:!1}),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(0),console.log(a.t0);case 15:case"end":return a.stop()}},a,null,[[0,12]])}));return function(e){return a.apply(this,arguments)}}()},changeAuthor:function(e){return{type:"CHANGE_AUTHOR",author:e}},changeTitle:function(e){return{type:"CHANGE_TITLE",title:e}},changeBody:function(e){return{type:"CHANGE_BODY",body:e}},editPostInfo:function(e,t,n){return{type:"EDIT_POST_INFO",author:e,title:t,body:n}}},ae=Object(u.b)(function(e){return{done:e.done,id:e.post.id,postInfo:e.postInfo,post:e.post}},re)(ne),oe=function(){return a.a.createElement("div",{className:"content"},a.a.createElement(b.a,null,a.a.createElement(O.b,{path:"/",exact:!0,component:U}),a.a.createElement(O.b,{path:"/new",exact:!0,component:te}),a.a.createElement(O.b,{path:"/details/:id",exact:!0,component:Q}),a.a.createElement(O.b,{path:"/details/:id/edit",exact:!0,component:ae})))};n(46);var ce=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(oe,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(){return Object(s.c)(h,f,Object(s.a)(i.a))}n.d(t,"configureStore",function(){return ue}),n.d(t,"store",function(){return se});var se=ue();c.a.render(a.a.createElement(u.a,{store:se},a.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[34,1,2]]]);
//# sourceMappingURL=main.ad337026.chunk.js.map