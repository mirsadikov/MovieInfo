(this["webpackJsonpmovieinfo-react"]=this["webpackJsonpmovieinfo-react"]||[]).push([[0],{38:function(e,t,c){},68:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),n=c(30),a=c.n(n),r=c(2),o=c(4),d=(c(38),c(0)),l=function(){return Object(d.jsxs)("header",{children:[Object(d.jsx)("a",{className:"brand",href:"/",children:Object(d.jsx)("h1",{children:"MovieInfo"})}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{className:"about",children:Object(d.jsx)(r.b,{to:"/about",children:"About"})}),Object(d.jsx)("li",{className:"signIn",children:Object(d.jsx)(r.b,{to:"/login",className:"signIn",children:"Sign in"})})]})})]})},j=c.p+"static/media/github.692a737a.svg",b=function(){return Object(d.jsxs)("footer",{children:[Object(d.jsxs)("div",{children:["Copyright \xa9",(new Date).getFullYear()]}),Object(d.jsxs)("div",{children:["Links:",Object(d.jsx)("a",{href:"https://github.com/mirsadikov",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("img",{className:"networks",src:j,alt:"github icon"})}),Object(d.jsx)("a",{href:"mailto:mirabror.dev@gmail.com",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("span",{className:"networks",children:"@"})})]}),Object(d.jsx)("div",{children:"This is a simple movie info website."})]})},h=c(6),m=c.n(h),p=c(12),O=c(5),u=c(11),x=c.n(u),g=function(e){var t=e.history,c=Object(s.useState)(),i=Object(O.a)(c,2),n=i[0],a=i[1],o=Object(s.useState)(),l=Object(O.a)(o,2),j=l[0],b=l[1],h=Object(s.useState)(""),u=Object(O.a)(h,2),g=u[0],v=u[1];Object(s.useEffect)((function(){var e=function(){var e=Object(p.a)(m.a.mark((function e(){var t,c,s,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=2050ac8db077eda8b90b74a0f1423975");case 2:return t=e.sent,c=t.data,e.next=6,x.a.get("https://api.themoviedb.org/3/movie/now_playing?api_key=2050ac8db077eda8b90b74a0f1423975&language=en-US&page=1");case 6:s=e.sent,i=s.data,a(c),b(i);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("main",{className:"home",children:Object(d.jsxs)("section",{children:[Object(d.jsxs)("p",{children:["1 000 000+",Object(d.jsx)("br",{}),"Movies, TV shows, and more"]}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{id:"homeForm",children:[Object(d.jsx)("input",{type:"text",placeholder:"Search by name...",id:"movieNameInputHome",onChange:function(e){return v(e.target.value)}}),Object(d.jsx)("button",{type:"submit",id:"homeSearchButton",onClick:function(e){e.preventDefault(),t.push("/search?q=".concat(g))},children:"Search"})]})})]})}),Object(d.jsxs)("section",{className:"home movieType",children:[Object(d.jsx)("h2",{children:"Trending today:"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"containerPopular figureContainer",children:Object(d.jsx)("section",{className:"figuresContainer",children:n&&n.results.map((function(e){return Object(d.jsx)(r.b,{to:"/details/movie/".concat(e.id),children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.original_title}),Object(d.jsx)("figcaption",{children:e.original_title||e.original_name})]})},e.id)}))})})}),Object(d.jsx)("h2",{children:"Now playing:"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"containerNowplaying figureContainer",children:Object(d.jsx)("section",{className:"figuresContainer",children:j&&j.results.map((function(e){return Object(d.jsx)(r.b,{to:"/details/movie/".concat(e.id),children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.original_title}),Object(d.jsx)("figcaption",{children:e.original_title||e.original_name})]})},e.id)}))})})}),Object(d.jsx)("h2",{id:"genre",children:"By category:"}),Object(d.jsxs)("div",{className:"container genres",children:[Object(d.jsx)(r.b,{to:"/genres/28",children:"Action"}),Object(d.jsx)(r.b,{to:"/genres/35",children:"Comedy"}),Object(d.jsx)(r.b,{to:"/genres/18",children:"Drama"}),Object(d.jsx)(r.b,{to:"/genres/27",children:"Horror"}),Object(d.jsx)(r.b,{to:"/genres/16",children:"Animation"}),Object(d.jsx)(r.b,{to:"/genres/878",children:"Science Fiction"})]})]})]})},v=function(){return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("main",{className:"about",children:Object(d.jsxs)("section",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)(r.b,{to:"/",children:"Home"})," / ",Object(d.jsx)(r.b,{to:"/about",children:"About"})]}),Object(d.jsx)("h2",{children:"ABOUT"})]})}),Object(d.jsxs)("article",{className:"about",children:[Object(d.jsx)("i",{children:"\u201cThis website was created to fulfill Web Technology module\u2019s requirements and does not represent an actual company or service\u201d."}),Object(d.jsxs)("section",{children:[Object(d.jsx)("div",{children:"This website is created by the student of the Westminster University in Tashkent to fulfill Web Technology module\u2019s requirements. Website contains six responsive pages. This website is designed according a movie hosting platform Netflix.com and written from a scratch. Some contents borrowed from Netflix.com. Informations about movies and TV shows are borrowed from TheMovieDB.org using API."}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("ul",{children:[Object(d.jsx)("h3",{children:"Tools used:"}),Object(d.jsx)("li",{children:"React"}),Object(d.jsx)("li",{children:"CSS"}),Object(d.jsx)("li",{children:"JavaScript"})]}),Object(d.jsx)("p",{children:"This website is React version of MovieInfo."})]})]})]})]})},f=function(){Object(s.useEffect)((function(){window.scrollTo(0,0)}),[]);return Object(d.jsx)("section",{className:"signin",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Sign in"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"Email"}),Object(d.jsx)("input",{type:"email",name:"userLogin",placeholder:"example@mail.com",id:"userLogin"})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("p",{children:"Password"}),Object(d.jsx)("input",{type:"password",name:"userPassword",placeholder:"At least 8 characters",id:"userPassword"})]}),Object(d.jsx)("button",{type:"submit",id:"submit",className:"signinBtn",children:"Sign in"})]})]})})},w=c.p+"static/media/netflix.774e8c16.png",A=c(70),y=function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{id:"emptySpace"}),Object(d.jsx)("div",{id:"loadinggg",children:Object(d.jsx)(A.a,{id:"spinner",animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"}})})]})},N="data:image/png;base64,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",k=function(e){var t=e.match,c=e.history,i=t.params.id,n=Object(s.useState)(),a=Object(O.a)(n,2),o=a[0],l=a[1];return Object(s.useEffect)((function(){window.scrollTo(0,0);var e=function(){var e=Object(p.a)(m.a.mark((function e(){var t,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.themoviedb.org/3/movie/".concat(i,"?api_key=2050ac8db077eda8b90b74a0f1423975&append_to_response=videos%2Cimages"));case 3:t=e.sent,s=t.data,l(s),console.log(s),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.stack),c.push("/");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[i,c]),o?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("main",{className:"details",children:Object(d.jsxs)("section",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)(r.b,{to:"/",children:"Home"})," /"," ",Object(d.jsx)(r.b,{id:"details",to:"/details/movie/".concat(i),children:"Details"})]}),Object(d.jsx)("h2",{id:"moviename",children:o.original_title||o.original_name})]})}),Object(d.jsxs)("section",{className:"details",children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"poster_wrapper",children:Object(d.jsx)("img",{id:"poster",alt:"poster",src:o.poster_path?"https://image.tmdb.org/t/p/w500".concat(o.poster_path):N})}),Object(d.jsx)("div",{className:"details-wrapper",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{id:"movietitle",children:o.original_title||o.original_name}),Object(d.jsx)("span",{id:"year",children:" (".concat(o.release_date&&o.release_date.split("-")[0],")")}),Object(d.jsx)("p",{id:"movieGenres",children:o.genres&&o.genres.map((function(e){return e.name})).join(" \u25cf ")}),Object(d.jsxs)("div",{className:"rating",children:["Rating: ",Object(d.jsxs)("span",{id:"score",children:[" ",o.vote_average]})]}),Object(d.jsx)("i",{id:"tagline",children:o.tagline}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"overview",children:"Overview"}),Object(d.jsx)("p",{id:"overview",children:o.overview})]})]})})]}),Object(d.jsxs)("div",{className:"sources",children:[Object(d.jsx)("span",{children:"Watch on:"}),Object(d.jsx)("a",{href:"https://netflix.com",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("button",{children:Object(d.jsx)("img",{src:w,alt:"netflix"})})})]})]}),(o.videos&&o.videos.results.length>0||o.backdrop_path||o.poster_path)&&Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{className:"media-wrapper",children:[Object(d.jsx)("h2",{children:"Most popular"}),Object(d.jsx)("div",{className:"media container",children:Object(d.jsxs)("div",{className:"mediacontainer",id:"mediacontainer",children:[o.videos&&o.videos.results.length>0&&Object(d.jsx)("iframe",{title:o.videos.results[0].name,width:"600",src:"https://www.youtube-nocookie.com/embed/".concat(o.videos.results[0].key,"?controls=1"),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),o.poster_path&&Object(d.jsx)("img",{alt:"poster",src:"https://image.tmdb.org/t/p/w500".concat(o.poster_path)}),o.backdrop_path&&Object(d.jsx)("img",{alt:"backdrop",src:"https://image.tmdb.org/t/p/w500".concat(o.backdrop_path)})]})})]})}),o.images&&0!==o.images.backdrops.slice(1,51).length&&Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{className:"media-wrapper",children:[Object(d.jsx)("h2",{children:"Backdrops:"}),Object(d.jsx)("div",{className:"media container",children:Object(d.jsx)("div",{className:"mediacontainer",id:"media2",children:o.images.backdrops.slice(1,51).map((function(e){return Object(d.jsx)("img",{alt:"Backdrop",src:"https://image.tmdb.org/t/p/w500".concat(e.file_path)},e.file_path)}))})})]})}),o.videos&&0!==o.videos.results.slice(1,11).length&&Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{className:"media-wrapper",children:[Object(d.jsx)("h2",{children:"Videos:"}),Object(d.jsx)("div",{className:"media container",children:Object(d.jsx)("div",{className:"mediacontainer",id:"media3",children:o.videos.results.slice(1,11).map((function(e){return Object(d.jsx)("iframe",{title:e.name,width:"600",src:"https://www.youtube-nocookie.com/embed/".concat(e.key,"?controls=1"),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},e.id)}))})})]})}),o.images&&0!==o.images.posters.slice(1,50).length&&Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{className:"media-wrapper",children:[Object(d.jsx)("h2",{children:"Posters:"}),Object(d.jsx)("div",{className:"media container",children:Object(d.jsx)("div",{className:"mediacontainer",id:"media4",children:o.images.posters.slice(1,50).map((function(e){return Object(d.jsx)("img",{alt:"Backdrop",src:"https://image.tmdb.org/t/p/w500".concat(e.file_path)},e.file_path)}))})})]})})]}):Object(d.jsx)(y,{})},_=c.p+"static/media/duck.c2a3ec53.gif",q=function(e){var t=e.location,c=Object(s.useState)(),i=Object(O.a)(c,2),n=i[0],a=i[1],o=Object(s.useState)(),l=Object(O.a)(o,2),j=l[0],b=l[1],h=Object(s.useState)(!0),u=Object(O.a)(h,2),g=u[0],v=u[1],f=Object(s.useState)([]),w=Object(O.a)(f,2),A=w[0],k=w[1],q=Object(s.useRef)();var X=Object(s.useReducer)((function(e,c){switch(c.type){case"input":var s=new URLSearchParams(t.search).get("q");return a(j||s),{loading:!0};case"finish":return{loading:!1};default:throw new Error}}),{loading:!1}),S=Object(O.a)(X,2),T=S[0],F=S[1];Object(s.useEffect)((function(){window.scrollTo(0,0),F({type:"input"});var e=function(){var e=Object(p.a)(m.a.mark((function e(t,c){var s,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,x.a.get("https://api.themoviedb.org/3/search/".concat(t,"?api_key=2050ac8db077eda8b90b74a0f1423975&query=").concat(c,"&include_adult=false"));case 3:s=e.sent,i=s.data,console.log(i),k(i.results),F({type:"finish"}),window.scrollBy({top:q.current.offsetTop-window.scrollY-100,behavior:"smooth"});case 9:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}();g&&n?e("movie",n):!g&&n?e("tv",n):F({type:"finish"})}),[t,g,n]);var B=function(){v(!g)};return T.loading?Object(d.jsx)(y,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("main",{className:"result",children:Object(d.jsxs)("section",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)(r.b,{to:"/",children:"Home"})," / ",Object(d.jsx)(r.b,{to:"/search",children:"Search"})]}),Object(d.jsx)("h2",{id:"resultpath",children:"Search"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{type:"text",placeholder:"Search by name...",id:"movieNameInput",onChange:function(e){return b(e.target.value)}}),Object(d.jsx)("button",{type:"submit",id:"searchButton",onClick:function(e){e.preventDefault(),a(j)},children:"Search"})]})})]})}),Object(d.jsxs)("section",{className:"content",children:[Object(d.jsxs)("div",{id:"content-type",ref:q,children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",hidden:!0,checked:g,id:"type-movie",className:"type-input",name:"type",readOnly:!0}),Object(d.jsx)("div",{id:"typemovie",className:"movieType",onClick:B,children:"Movies"})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("input",{type:"radio",hidden:!0,id:"type-serie",className:"type-input",name:"type",checked:!g,readOnly:!0}),Object(d.jsx)("div",{id:"typeserie",className:"movieType",onClick:B,children:"TV shows"})]})]}),Object(d.jsx)("section",{id:"resultContainer",children:n?0!==A.length?Object(d.jsx)("section",{className:"figuresContainer",children:A.map((function(e){return Object(d.jsx)(r.b,{to:g?"/details/movie/".concat(e.id):"/details/tv/".concat(e.id),children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("img",{src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):e.backdrop_path?"https://image.tmdb.org/t/p/w500".concat(e.backdrop_path):N,alt:e.id}),Object(d.jsx)("figcaption",{children:e.original_title||e.original_name})]})},e.id)}))}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{children:"No movies"}),Object(d.jsx)("img",{className:"duck",src:_,alt:"duck"})]}):Object(d.jsx)("h1",{children:"Search something"})})]})]})},X=c(21),S=function(e){var t=e.match,c=Object(s.useState)(1),i=Object(O.a)(c,2),n=i[0],a=i[1],o=Object(s.useState)(""),l=Object(O.a)(o,2),j=l[0],b=l[1],h=Object(s.useState)([]),u=Object(O.a)(h,2),g=u[0],v=u[1],f=t.params.genre;Object(s.useEffect)((function(){1===n&&window.scrollTo(0,0);var e=function(){var e=Object(p.a)(m.a.mark((function e(){var t,c,s,i,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=2050ac8db077eda8b90b74a0f1423975");case 2:return t=e.sent,c=t.data,s=c.genres.filter((function(e){return e.id===parseInt(f)}))[0],e.next=7,x.a.get("https://api.themoviedb.org/3/discover/movie?api_key=2050ac8db077eda8b90b74a0f1423975&sort_by=popularity.desc&include_adult=false&page=".concat(n,"&with_genres=").concat(f));case 7:i=e.sent,a=i.data,b(s.name),v((function(e){return[].concat(Object(X.a)(e),Object(X.a)(a.results))}));case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[f,n]);return g.length>0?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("main",{className:"genre",children:Object(d.jsxs)("section",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)(r.b,{to:"/",children:"Home"})," /"," ",Object(d.jsx)(r.b,{to:"/genres/".concat(f),children:"Genres"})]}),Object(d.jsx)("h2",{id:"genrename",children:j})]})}),Object(d.jsxs)("section",{className:"content",children:[Object(d.jsx)("section",{id:"resultContainer",children:Object(d.jsx)("section",{className:"figuresContainer",children:g?g.map((function(e){return Object(d.jsx)(r.b,{to:"/details/movie/".concat(e.id),children:Object(d.jsxs)("figure",{children:[Object(d.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.id}),Object(d.jsx)("figcaption",{children:e.original_title||e.original_name})]})},e.id)})):Object(d.jsx)("h1",{children:"No movies"})})}),Object(d.jsx)("button",{id:"more",onClick:function(){a(n+1)},children:"MORE"})]})]}):Object(d.jsx)(y,{})},T=function(e){var t=e.match,c=e.history,i=t.params.id,n=Object(s.useState)(),a=Object(O.a)(n,2),o=a[0],l=a[1];return Object(s.useEffect)((function(){window.scrollTo(0,0);var e=function(){var e=Object(p.a)(m.a.mark((function e(){var t,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("https://api.themoviedb.org/3/tv/".concat(i,"?api_key=2050ac8db077eda8b90b74a0f1423975&append_to_response=videos%2Cimages"));case 3:t=e.sent,s=t.data,l(s),console.log(s),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.stack),c.push("/");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[i,c]),o?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("main",{className:"details",children:Object(d.jsxs)("section",{children:[Object(d.jsxs)("p",{children:[Object(d.jsx)(r.b,{to:"/",children:"Home"})," /"," ",Object(d.jsx)(r.b,{id:"details",to:"/details/tv/".concat(i),children:"Details"})]}),Object(d.jsx)("h2",{id:"moviename",children:o.original_title||o.original_name})]})}),Object(d.jsxs)("section",{className:"details",children:[Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"poster_wrapper",children:Object(d.jsx)("img",{id:"poster",alt:"poster",src:o.poster_path?"https://image.tmdb.org/t/p/w500".concat(o.poster_path):N})}),Object(d.jsx)("div",{className:"details-wrapper",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{id:"movietitle",children:o.original_title||o.original_name}),Object(d.jsx)("span",{id:"year",children:" (".concat(o.first_air_date&&o.first_air_date.split("-")[0],")")}),Object(d.jsx)("p",{id:"movieGenres",children:o.genres&&o.genres.map((function(e){return e.name})).join(" \u25cf ")}),Object(d.jsxs)("div",{className:"rating",children:["Rating: ",Object(d.jsxs)("span",{id:"score",children:[" ",o.vote_average]})]}),Object(d.jsx)("i",{id:"tagline",children:o.tagline}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"overview",children:"Overview"}),Object(d.jsx)("p",{id:"overview",children:o.overview})]})]})})]}),Object(d.jsxs)("div",{className:"sources",children:[Object(d.jsx)("span",{children:"Watch on:"}),Object(d.jsx)("a",{href:"https://netflix.com",target:"_blank",rel:"noreferrer",children:Object(d.jsx)("button",{children:Object(d.jsx)("img",{src:w,alt:"netflix"})})})]})]}),(o.videos&&o.videos.results.length>0||o.backdrop_path||o.poster_path)&&Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{className:"media-wrapper",children:[Object(d.jsx)("h2",{children:"Most popular"}),Object(d.jsx)("div",{className:"media container",children:Object(d.jsxs)("div",{className:"mediacontainer",id:"mediacontainer",children:[o.videos&&o.videos.results.length>0&&Object(d.jsx)("iframe",{title:o.videos.results[0].name,width:"600",src:"https://www.youtube-nocookie.com/embed/".concat(o.videos.results[0].key,"?controls=1"),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),o.poster_path&&Object(d.jsx)("img",{alt:"poster",src:"https://image.tmdb.org/t/p/w500".concat(o.poster_path)}),o.backdrop_path&&Object(d.jsx)("img",{alt:"backdrop",src:"https://image.tmdb.org/t/p/w500".concat(o.backdrop_path)})]})})]})}),o.images&&0!==o.images.backdrops.slice(1,51).length&&Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{className:"media-wrapper",children:[Object(d.jsx)("h2",{children:"Backdrops:"}),Object(d.jsx)("div",{className:"media container",children:Object(d.jsx)("div",{className:"mediacontainer",id:"media2",children:o.images.backdrops.slice(1,51).map((function(e){return Object(d.jsx)("img",{alt:"Backdrop",src:"https://image.tmdb.org/t/p/w500".concat(e.file_path)},e.file_path)}))})})]})}),o.videos&&0!==o.videos.results.slice(1,11).length&&Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{className:"media-wrapper",children:[Object(d.jsx)("h2",{children:"Videos:"}),Object(d.jsx)("div",{className:"media container",children:Object(d.jsx)("div",{className:"mediacontainer",id:"media3",children:o.videos.results.slice(1,11).map((function(e){return Object(d.jsx)("iframe",{title:e.name,width:"600",src:"https://www.youtube-nocookie.com/embed/".concat(e.key,"?controls=1"),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0},e.id)}))})})]})}),o.images&&0!==o.images.posters.slice(1,50).length&&Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("section",{className:"media-wrapper",children:[Object(d.jsx)("h2",{children:"Posters:"}),Object(d.jsx)("div",{className:"media container",children:Object(d.jsx)("div",{className:"mediacontainer",id:"media4",children:o.images.posters.slice(1,50).map((function(e){return Object(d.jsx)("img",{alt:"Backdrop",src:"https://image.tmdb.org/t/p/w500".concat(e.file_path)},e.file_path)}))})})]})})]}):Object(d.jsx)(y,{})};var F=function(){return Object(d.jsxs)(r.a,{children:[Object(d.jsx)(l,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/about",component:v}),Object(d.jsx)(o.a,{path:"/login",component:f}),Object(d.jsx)(o.a,{path:"/details/movie/:id",component:k}),Object(d.jsx)(o.a,{path:"/details/tv/:id",component:T}),Object(d.jsx)(o.a,{path:"/search",component:q}),Object(d.jsx)(o.a,{path:"/genres/:genre",component:S}),Object(d.jsx)(o.a,{path:"/",component:g,exact:!0}),Object(d.jsx)(o.a,{path:"*",component:g})]}),Object(d.jsx)(b,{})]})};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(F,{})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.2092a11e.chunk.js.map