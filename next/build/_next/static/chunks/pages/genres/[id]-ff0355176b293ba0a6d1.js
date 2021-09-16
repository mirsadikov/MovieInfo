(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650,179],{5211:function(e,n,r){"use strict";r.d(n,{Z:function(){return p}});var t=r(5893);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}var a=r(4036),s=r.n(a),o=r(7294),c=o.createContext({});c.Consumer,c.Provider;function u(e,n){var r=(0,o.useContext)(c);return e||r[n]||n}var l=["bsPrefix","variant","animation","size","children","as","className"],f=o.forwardRef((function(e,n){var r=e.bsPrefix,t=e.variant,a=e.animation,c=e.size,f=e.children,d=e.as,p=void 0===d?"div":d,h=e.className,m=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,l),v=(r=u(r,"spinner"))+"-"+a;return o.createElement(p,i({ref:n},m,{className:s()(h,v,c&&v+"-"+c,t&&"text-"+t)}),f)}));f.displayName="Spinner";var d=f;function p(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{id:"emptySpace"}),(0,t.jsx)("div",{id:"loadinggg",children:(0,t.jsx)(d,{id:"spinner",animation:"border",role:"status",style:{width:"100px",height:"100px",margin:"auto",display:"block"}})})]})}},383:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return v}});var t=r(5893),i=r(7757),a=r.n(i);function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function o(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"===typeof e)return s(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=r(2137),u=r(1664),l=r(9008),f=r(1163),d=r(7294),p=r(9669),h=r.n(p),m=r(5211);function v(){var e=(0,f.useRouter)().query.id,n=(0,d.useState)(1),r=n[0],i=n[1],s=(0,d.useState)(""),p=s[0],v=s[1],g=(0,d.useState)([]),x=g[0],y=g[1],j=e;(0,d.useEffect)((function(){1===r&&window.scrollTo(0,0),function(){var e=(0,c.Z)(a().mark((function e(){var n,t,i,s,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h().get("https://api.themoviedb.org/3/genre/movie/list?api_key=2050ac8db077eda8b90b74a0f1423975");case 2:return n=e.sent,t=n.data,e.next=6,t.genres.filter((function(e){return e.id===parseInt(j)}))[0];case 6:return i=e.sent,e.next=9,h().get("https://api.themoviedb.org/3/discover/movie?api_key=2050ac8db077eda8b90b74a0f1423975&sort_by=popularity.desc&include_adult=false&page=".concat(r,"&with_genres=").concat(j));case 9:s=e.sent,c=s.data,v(i.name),y((function(e){return[].concat(o(e),o(c.results))}));case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[j,r]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.default,{children:(0,t.jsxs)("title",{children:["MovieInfo | ",""===p?"Genres":p]})}),x.length>0?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("main",{className:"genre",children:(0,t.jsxs)("section",{children:[(0,t.jsxs)("p",{children:[(0,t.jsx)(u.default,{href:"/",children:"Home"})," /"," ",(0,t.jsx)(u.default,{href:"/genres/".concat(j),children:"Genres"})]}),(0,t.jsx)("h2",{id:"genrename",children:p})]})}),(0,t.jsxs)("section",{className:"content",children:[(0,t.jsx)("section",{id:"resultContainer",children:(0,t.jsx)("section",{className:"figuresContainer",children:x?x.map((function(e){return(0,t.jsx)(u.default,{href:"/details/movie/".concat(e.id),children:(0,t.jsxs)("figure",{children:[(0,t.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:e.id}),(0,t.jsx)("figcaption",{children:e.original_title||e.original_name})]})},e.id)})):(0,t.jsx)("h1",{children:"No movies"})})}),(0,t.jsx)("button",{id:"more",onClick:function(){i(r+1)},children:"MORE"})]})]}):(0,t.jsx)(m.Z,{})]})}},497:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/genres/[id]",function(){return r(383)}])},4036:function(e,n){var r;!function(){"use strict";var t={}.hasOwnProperty;function i(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var s=i.apply(null,r);s&&e.push(s)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var o in r)t.call(r,o)&&r[o]&&e.push(o);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(n,[]))||(e.exports=r)}()},4453:function(){}},function(e){e.O(0,[774,282,996,34],(function(){return n=497,e(e.s=n);var n}));var n=e.O();_N_E=n}]);