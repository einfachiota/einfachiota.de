import{S as s,i as t,s as e,a,e as o,t as r,c as n,b as l,d as c,f as p,h,j as i,l as f,n as v,m}from"./client.3962a8ed.js";function u(s,t,e){const a=Object.create(s);return a.post=t[e],a.index=e,a}function d(s){var t;return{c(){t=o("hr"),this.h()},l(s){t=l(s,"HR",{class:!0},!1),c(t).forEach(p),this.h()},h(){t.className="svelte-6benpv"},m(s,e){h(s,t,e)},d(s){s&&p(t)}}}function g(s){var t,e,v,m,u,g,b,E,N,x,j,D,B,H,I,V=s.post.title,A=s.post.excerpt,P=s.post.printDate,S=s.index&&d();return{c(){S&&S.c(),t=a(),e=o("div"),v=o("h2"),m=o("a"),u=r(V),b=a(),E=o("p"),N=r(A),x=a(),j=o("div"),D=o("span"),B=r("— "),H=r(P),I=a(),this.h()},l(s){S&&S.l(s),t=n(s,"\n    "),e=l(s,"DIV",{class:!0},!1);var a=c(e);v=l(a,"H2",{class:!0},!1);var o=c(v);m=l(o,"A",{rel:!0,href:!0},!1);var r=c(m);u=n(r,V),r.forEach(p),o.forEach(p),b=n(a,"\n      "),E=l(a,"P",{},!1);var h=c(E);N=n(h,A),h.forEach(p),x=n(a,"\n      "),j=l(a,"DIV",{class:!0},!1);var i=c(j);D=l(i,"SPAN",{class:!0},!1);var f=c(D);B=n(f,"— "),H=n(f,P),f.forEach(p),i.forEach(p),I=n(a,"\n    "),a.forEach(p),this.h()},h(){m.rel="prefetch",m.href=g="blog/"+s.post.slug,v.className="svelte-6benpv",D.className="post-item-date svelte-6benpv",j.className="post-item-footer svelte-6benpv",e.className="post-item"},m(s,a){S&&S.m(s,a),h(s,t,a),h(s,e,a),i(e,v),i(v,m),i(m,u),i(e,b),i(e,E),i(E,N),i(e,x),i(e,j),i(j,D),i(D,B),i(D,H),i(e,I)},p(s,e){e.index?S||((S=d()).c(),S.m(t.parentNode,t)):S&&(S.d(1),S=null),s.posts&&V!==(V=e.post.title)&&f(u,V),s.posts&&g!==(g="blog/"+e.post.slug)&&(m.href=g),s.posts&&A!==(A=e.post.excerpt)&&f(N,A),s.posts&&P!==(P=e.post.printDate)&&f(H,P)},d(s){S&&S.d(s),s&&(p(t),p(e))}}}function b(s){for(var t,e,f,d,b,E=s.posts,N=[],x=0;x<E.length;x+=1)N[x]=g(u(s,E,x));return{c(){t=a(),e=o("div"),f=o("h1"),d=r("Blog"),b=a();for(var s=0;s<N.length;s+=1)N[s].c();this.h()},l(s){t=n(s,"\n\n"),e=l(s,"DIV",{class:!0},!1);var a=c(e);f=l(a,"H1",{class:!0},!1);var o=c(f);d=n(o,"Blog"),o.forEach(p),b=n(a,"\n  ");for(var r=0;r<N.length;r+=1)N[r].l(a);a.forEach(p),this.h()},h(){document.title="Blog",f.className="blog svelte-6benpv",e.className="container svelte-6benpv"},m(s,a){h(s,t,a),h(s,e,a),i(e,f),i(f,d),i(e,b);for(var o=0;o<N.length;o+=1)N[o].m(e,null)},p(s,t){if(s.posts){E=t.posts;for(var a=0;a<E.length;a+=1){const o=u(t,E,a);N[a]?N[a].p(s,o):(N[a]=g(o),N[a].c(),N[a].m(e,null))}for(;a<N.length;a+=1)N[a].d(1);N.length=E.length}},i:v,o:v,d(s){s&&(p(t),p(e)),m(N,s)}}}function E({params:s,query:t}){return this.fetch("blog.json").then(s=>s.json()).then(s=>({posts:s}))}function N(s,t,e){let{posts:a}=t;return s.$set=s=>{"posts"in s&&e("posts",a=s.posts)},{posts:a}}export default class extends s{constructor(s){super(),t(this,s,N,b,e,["posts"])}}export{E as preload};
