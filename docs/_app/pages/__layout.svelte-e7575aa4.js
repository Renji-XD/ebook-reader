import{S as Lt,i as St,n as Dt,e as T,c as w,b as s,f as k,d as b,k as N,G as K,j as y,l as L,H as z,z as R,I as Ct,J as G,E as X,C as Y,K as Pt,a as B,L as Gt,q as V,A as Kt,o as q,p as F,w as H,y as O,B as J,x as It,M as Vt,N as qt,O as Ut,m as Q}from"../chunks/index-200ea95d.js";import{p as zt}from"../chunks/stores-2840616d.js";import{d as Z}from"../chunks/dialog-manager-f50f3d91.js";import"../chunks/store-9e108e48.js";function $(f,t,i){const e=f.slice();return e[16]=t[i],e}function x(f,t,i){const e=f.slice();return e[16]=t[i],e}function ee(f,t,i){const e=f.slice();return e[21]=t[i],e}function te(f,t,i){const e=f.slice();return e[24]=t[i],e}function le(f,t,i){const e=f.slice();return e[16]=t[i],e}function ie(f,t,i){const e=f.slice();return e[38]=t[i],e}function fe(f,t,i){const e=f.slice();return e[41]=t[i],e}function ne(f,t,i){const e=f.slice();return e[44]=t[i],e}function oe(f,t,i){const e=f.slice();return e[16]=t[i],e}function re(f,t,i){const e=f.slice();return e[29]=t[i],e}function _e(f,t,i){const e=f.slice();return e[16]=t[i],e}function ae(f,t,i){const e=f.slice();return e[29]=t[i],e}function ce(f,t,i){const e=f.slice();return e[47]=t[i],e}function ue(f){let t;return{c(){t=T("meta"),this.h()},l(i){t=w(i,"META",{name:!0,content:!0}),this.h()},h(){s(t,"name","description"),s(t,"content",f[2])},m(i,e){k(i,t,e)},p(i,e){e[0]&4&&s(t,"content",i[2])},d(i){i&&b(t)}}}function me(f){let t;return{c(){t=T("link"),this.h()},l(i){t=w(i,"LINK",{rel:!0,href:!0}),this.h()},h(){s(t,"rel","canonical"),s(t,"href",f[8])},m(i,e){k(i,t,e)},p(i,e){e[0]&256&&s(t,"href",i[8])},d(i){i&&b(t)}}}function se(f){let t,i,e;return{c(){t=T("link"),this.h()},l(l){t=w(l,"LINK",{rel:!0,media:!0,href:!0}),this.h()},h(){s(t,"rel","alternate"),s(t,"media",i=f[3].media),s(t,"href",e=f[3].href)},m(l,o){k(l,t,o)},p(l,o){o[0]&8&&i!==(i=l[3].media)&&s(t,"media",i),o[0]&8&&e!==(e=l[3].href)&&s(t,"href",e)},d(l){l&&b(t)}}}function pe(f){let t,i=f[4],e=[];for(let l=0;l<i.length;l+=1)e[l]=he(ce(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=N()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&16){i=l[4];let n;for(n=0;n<i.length;n+=1){const a=ce(l,i,n);e[n]?e[n].p(a,o):(e[n]=he(a),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){K(e,l),l&&b(t)}}}function he(f){let t,i,e;return{c(){t=T("link"),this.h()},l(l){t=w(l,"LINK",{rel:!0,hreflang:!0,href:!0}),this.h()},h(){s(t,"rel","alternate"),s(t,"hreflang",i=f[47].hrefLang),s(t,"href",e=f[47].href)},m(l,o){k(l,t,o)},p(l,o){o[0]&16&&i!==(i=l[47].hrefLang)&&s(t,"hreflang",i),o[0]&16&&e!==(e=l[47].href)&&s(t,"href",e)},d(l){l&&b(t)}}}function de(f){let t,i,e,l,o,n,a,u=f[5].cardType&&be(f),r=f[5].site&&ke(f),c=f[5].handle&&ve(f),p=f[5].title&&ge(f),h=f[5].description&&Ne(f),m=f[5].image&&Te(f),d=f[5].imageAlt&&we(f);return{c(){u&&u.c(),t=y(),r&&r.c(),i=y(),c&&c.c(),e=y(),p&&p.c(),l=y(),h&&h.c(),o=y(),m&&m.c(),n=y(),d&&d.c(),a=N()},l(_){u&&u.l(_),t=L(_),r&&r.l(_),i=L(_),c&&c.l(_),e=L(_),p&&p.l(_),l=L(_),h&&h.l(_),o=L(_),m&&m.l(_),n=L(_),d&&d.l(_),a=N()},m(_,g){u&&u.m(_,g),k(_,t,g),r&&r.m(_,g),k(_,i,g),c&&c.m(_,g),k(_,e,g),p&&p.m(_,g),k(_,l,g),h&&h.m(_,g),k(_,o,g),m&&m.m(_,g),k(_,n,g),d&&d.m(_,g),k(_,a,g)},p(_,g){_[5].cardType?u?u.p(_,g):(u=be(_),u.c(),u.m(t.parentNode,t)):u&&(u.d(1),u=null),_[5].site?r?r.p(_,g):(r=ke(_),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null),_[5].handle?c?c.p(_,g):(c=ve(_),c.c(),c.m(e.parentNode,e)):c&&(c.d(1),c=null),_[5].title?p?p.p(_,g):(p=ge(_),p.c(),p.m(l.parentNode,l)):p&&(p.d(1),p=null),_[5].description?h?h.p(_,g):(h=Ne(_),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null),_[5].image?m?m.p(_,g):(m=Te(_),m.c(),m.m(n.parentNode,n)):m&&(m.d(1),m=null),_[5].imageAlt?d?d.p(_,g):(d=we(_),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},d(_){u&&u.d(_),_&&b(t),r&&r.d(_),_&&b(i),c&&c.d(_),_&&b(e),p&&p.d(_),_&&b(l),h&&h.d(_),_&&b(o),m&&m.d(_),_&&b(n),d&&d.d(_),_&&b(a)}}}function be(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){s(t,"name","twitter:card"),s(t,"content",i=f[5].cardType)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].cardType)&&s(t,"content",i)},d(e){e&&b(t)}}}function ke(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){s(t,"name","twitter:site"),s(t,"content",i=f[5].site)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].site)&&s(t,"content",i)},d(e){e&&b(t)}}}function ve(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){s(t,"name","twitter:creator"),s(t,"content",i=f[5].handle)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].handle)&&s(t,"content",i)},d(e){e&&b(t)}}}function ge(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){s(t,"name","twitter:title"),s(t,"content",i=f[5].title)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].title)&&s(t,"content",i)},d(e){e&&b(t)}}}function Ne(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){s(t,"name","twitter:description"),s(t,"content",i=f[5].description)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].description)&&s(t,"content",i)},d(e){e&&b(t)}}}function Te(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){s(t,"name","twitter:image"),s(t,"content",i=f[5].image)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].image)&&s(t,"content",i)},d(e){e&&b(t)}}}function we(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{name:!0,content:!0}),this.h()},h(){s(t,"name","twitter:image:alt"),s(t,"content",i=f[5].imageAlt)},m(e,l){k(e,t,l)},p(e,l){l[0]&32&&i!==(i=e[5].imageAlt)&&s(t,"content",i)},d(e){e&&b(t)}}}function Ae(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","fb:app_id"),s(t,"content",i=f[6].appId)},m(e,l){k(e,t,l)},p(e,l){l[0]&64&&i!==(i=e[6].appId)&&s(t,"content",i)},d(e){e&&b(t)}}}function Ee(f){let t,i,e,l,o,n,a,u,r=(f[7].url||f[8])&&Me(f),c=f[7].type&&ye(f),p=(f[7].title||f[12])&&nt(f),h=(f[7].description||f[2])&&ot(f),m=f[7].images&&f[7].images.length&&rt(f),d=f[7].videos&&f[7].videos.length&&mt(f),_=f[7].locale&&vt(f),g=f[7].site_name&&gt(f);return{c(){r&&r.c(),t=y(),c&&c.c(),i=y(),p&&p.c(),e=y(),h&&h.c(),l=y(),m&&m.c(),o=y(),d&&d.c(),n=y(),_&&_.c(),a=y(),g&&g.c(),u=N()},l(v){r&&r.l(v),t=L(v),c&&c.l(v),i=L(v),p&&p.l(v),e=L(v),h&&h.l(v),l=L(v),m&&m.l(v),o=L(v),d&&d.l(v),n=L(v),_&&_.l(v),a=L(v),g&&g.l(v),u=N()},m(v,M){r&&r.m(v,M),k(v,t,M),c&&c.m(v,M),k(v,i,M),p&&p.m(v,M),k(v,e,M),h&&h.m(v,M),k(v,l,M),m&&m.m(v,M),k(v,o,M),d&&d.m(v,M),k(v,n,M),_&&_.m(v,M),k(v,a,M),g&&g.m(v,M),k(v,u,M)},p(v,M){v[7].url||v[8]?r?r.p(v,M):(r=Me(v),r.c(),r.m(t.parentNode,t)):r&&(r.d(1),r=null),v[7].type?c?c.p(v,M):(c=ye(v),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null),v[7].title||v[12]?p?p.p(v,M):(p=nt(v),p.c(),p.m(e.parentNode,e)):p&&(p.d(1),p=null),v[7].description||v[2]?h?h.p(v,M):(h=ot(v),h.c(),h.m(l.parentNode,l)):h&&(h.d(1),h=null),v[7].images&&v[7].images.length?m?m.p(v,M):(m=rt(v),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null),v[7].videos&&v[7].videos.length?d?d.p(v,M):(d=mt(v),d.c(),d.m(n.parentNode,n)):d&&(d.d(1),d=null),v[7].locale?_?_.p(v,M):(_=vt(v),_.c(),_.m(a.parentNode,a)):_&&(_.d(1),_=null),v[7].site_name?g?g.p(v,M):(g=gt(v),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null)},d(v){r&&r.d(v),v&&b(t),c&&c.d(v),v&&b(i),p&&p.d(v),v&&b(e),h&&h.d(v),v&&b(l),m&&m.d(v),v&&b(o),d&&d.d(v),v&&b(n),_&&_.d(v),v&&b(a),g&&g.d(v),v&&b(u)}}}function Me(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","og:url"),s(t,"content",i=f[7].url||f[8])},m(e,l){k(e,t,l)},p(e,l){l[0]&384&&i!==(i=e[7].url||e[8])&&s(t,"content",i)},d(e){e&&b(t)}}}function ye(f){let t,i,e,l,o,n,a,u;function r(h,m){if(m[0]&128&&(l=null),m[0]&128&&(o=null),m[0]&128&&(n=null),m[0]&128&&(a=null),l==null&&(l=!!(h[7].type.toLowerCase()==="profile"&&h[7].profile)),l)return Ot;if(o==null&&(o=!!(h[7].type.toLowerCase()==="book"&&h[7].book)),o)return Ht;if(n==null&&(n=!!(h[7].type.toLowerCase()==="article"&&h[7].article)),n)return jt;if(a==null&&(a=!!(h[7].type.toLowerCase()==="video.movie"||h[7].type.toLowerCase()==="video.episode"||h[7].type.toLowerCase()==="video.tv_show"||h[7].type.toLowerCase()==="video.other"&&h[7].video)),a)return Bt}let c=r(f,[-1,-1]),p=c&&c(f);return{c(){t=T("meta"),e=y(),p&&p.c(),u=N(),this.h()},l(h){t=w(h,"META",{property:!0,content:!0}),e=L(h),p&&p.l(h),u=N(),this.h()},h(){s(t,"property","og:type"),s(t,"content",i=f[7].type.toLowerCase())},m(h,m){k(h,t,m),k(h,e,m),p&&p.m(h,m),k(h,u,m)},p(h,m){m[0]&128&&i!==(i=h[7].type.toLowerCase())&&s(t,"content",i),c===(c=r(h,m))&&p?p.p(h,m):(p&&p.d(1),p=c&&c(h),p&&(p.c(),p.m(u.parentNode,u)))},d(h){h&&b(t),h&&b(e),p&&p.d(h),h&&b(u)}}}function Bt(f){let t,i,e,l,o,n,a,u=f[7].video.actors&&f[7].video.actors.length&&Le(f),r=f[7].video.directors&&f[7].video.directors.length&&Ce(f),c=f[7].video.writers&&f[7].video.writers.length&&Ge(f),p=f[7].video.duration&&Ve(f),h=f[7].video.releaseDate&&qe(f),m=f[7].video.tags&&f[7].video.tags.length&&Ue(f),d=f[7].video.series&&Be(f);return{c(){u&&u.c(),t=y(),r&&r.c(),i=y(),c&&c.c(),e=y(),p&&p.c(),l=y(),h&&h.c(),o=y(),m&&m.c(),n=y(),d&&d.c(),a=N()},l(_){u&&u.l(_),t=L(_),r&&r.l(_),i=L(_),c&&c.l(_),e=L(_),p&&p.l(_),l=L(_),h&&h.l(_),o=L(_),m&&m.l(_),n=L(_),d&&d.l(_),a=N()},m(_,g){u&&u.m(_,g),k(_,t,g),r&&r.m(_,g),k(_,i,g),c&&c.m(_,g),k(_,e,g),p&&p.m(_,g),k(_,l,g),h&&h.m(_,g),k(_,o,g),m&&m.m(_,g),k(_,n,g),d&&d.m(_,g),k(_,a,g)},p(_,g){_[7].video.actors&&_[7].video.actors.length?u?u.p(_,g):(u=Le(_),u.c(),u.m(t.parentNode,t)):u&&(u.d(1),u=null),_[7].video.directors&&_[7].video.directors.length?r?r.p(_,g):(r=Ce(_),r.c(),r.m(i.parentNode,i)):r&&(r.d(1),r=null),_[7].video.writers&&_[7].video.writers.length?c?c.p(_,g):(c=Ge(_),c.c(),c.m(e.parentNode,e)):c&&(c.d(1),c=null),_[7].video.duration?p?p.p(_,g):(p=Ve(_),p.c(),p.m(l.parentNode,l)):p&&(p.d(1),p=null),_[7].video.releaseDate?h?h.p(_,g):(h=qe(_),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null),_[7].video.tags&&_[7].video.tags.length?m?m.p(_,g):(m=Ue(_),m.c(),m.m(n.parentNode,n)):m&&(m.d(1),m=null),_[7].video.series?d?d.p(_,g):(d=Be(_),d.c(),d.m(a.parentNode,a)):d&&(d.d(1),d=null)},d(_){u&&u.d(_),_&&b(t),r&&r.d(_),_&&b(i),c&&c.d(_),_&&b(e),p&&p.d(_),_&&b(l),h&&h.d(_),_&&b(o),m&&m.d(_),_&&b(n),d&&d.d(_),_&&b(a)}}}function jt(f){let t,i,e,l,o,n,a=f[7].article.publishedTime&&je(f),u=f[7].article.modifiedTime&&He(f),r=f[7].article.expirationTime&&Oe(f),c=f[7].article.authors&&f[7].article.authors.length&&Je(f),p=f[7].article.section&&Ye(f),h=f[7].article.tags&&f[7].article.tags.length&&Fe(f);return{c(){a&&a.c(),t=y(),u&&u.c(),i=y(),r&&r.c(),e=y(),c&&c.c(),l=y(),p&&p.c(),o=y(),h&&h.c(),n=N()},l(m){a&&a.l(m),t=L(m),u&&u.l(m),i=L(m),r&&r.l(m),e=L(m),c&&c.l(m),l=L(m),p&&p.l(m),o=L(m),h&&h.l(m),n=N()},m(m,d){a&&a.m(m,d),k(m,t,d),u&&u.m(m,d),k(m,i,d),r&&r.m(m,d),k(m,e,d),c&&c.m(m,d),k(m,l,d),p&&p.m(m,d),k(m,o,d),h&&h.m(m,d),k(m,n,d)},p(m,d){m[7].article.publishedTime?a?a.p(m,d):(a=je(m),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null),m[7].article.modifiedTime?u?u.p(m,d):(u=He(m),u.c(),u.m(i.parentNode,i)):u&&(u.d(1),u=null),m[7].article.expirationTime?r?r.p(m,d):(r=Oe(m),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),m[7].article.authors&&m[7].article.authors.length?c?c.p(m,d):(c=Je(m),c.c(),c.m(l.parentNode,l)):c&&(c.d(1),c=null),m[7].article.section?p?p.p(m,d):(p=Ye(m),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null),m[7].article.tags&&m[7].article.tags.length?h?h.p(m,d):(h=Fe(m),h.c(),h.m(n.parentNode,n)):h&&(h.d(1),h=null)},d(m){a&&a.d(m),m&&b(t),u&&u.d(m),m&&b(i),r&&r.d(m),m&&b(e),c&&c.d(m),m&&b(l),p&&p.d(m),m&&b(o),h&&h.d(m),m&&b(n)}}}function Ht(f){let t,i,e,l,o=f[7].book.authors&&f[7].book.authors.length&&We(f),n=f[7].book.isbn&&Ze(f),a=f[7].book.releaseDate&&$e(f),u=f[7].book.tags&&f[7].book.tags.length&&xe(f);return{c(){o&&o.c(),t=y(),n&&n.c(),i=y(),a&&a.c(),e=y(),u&&u.c(),l=N()},l(r){o&&o.l(r),t=L(r),n&&n.l(r),i=L(r),a&&a.l(r),e=L(r),u&&u.l(r),l=N()},m(r,c){o&&o.m(r,c),k(r,t,c),n&&n.m(r,c),k(r,i,c),a&&a.m(r,c),k(r,e,c),u&&u.m(r,c),k(r,l,c)},p(r,c){r[7].book.authors&&r[7].book.authors.length?o?o.p(r,c):(o=We(r),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),r[7].book.isbn?n?n.p(r,c):(n=Ze(r),n.c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null),r[7].book.releaseDate?a?a.p(r,c):(a=$e(r),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),r[7].book.tags&&r[7].book.tags.length?u?u.p(r,c):(u=xe(r),u.c(),u.m(l.parentNode,l)):u&&(u.d(1),u=null)},d(r){o&&o.d(r),r&&b(t),n&&n.d(r),r&&b(i),a&&a.d(r),r&&b(e),u&&u.d(r),r&&b(l)}}}function Ot(f){let t,i,e,l,o=f[7].profile.firstName&&tt(f),n=f[7].profile.lastName&&lt(f),a=f[7].profile.username&&it(f),u=f[7].profile.gender&&ft(f);return{c(){o&&o.c(),t=y(),n&&n.c(),i=y(),a&&a.c(),e=y(),u&&u.c(),l=N()},l(r){o&&o.l(r),t=L(r),n&&n.l(r),i=L(r),a&&a.l(r),e=L(r),u&&u.l(r),l=N()},m(r,c){o&&o.m(r,c),k(r,t,c),n&&n.m(r,c),k(r,i,c),a&&a.m(r,c),k(r,e,c),u&&u.m(r,c),k(r,l,c)},p(r,c){r[7].profile.firstName?o?o.p(r,c):(o=tt(r),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),r[7].profile.lastName?n?n.p(r,c):(n=lt(r),n.c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null),r[7].profile.username?a?a.p(r,c):(a=it(r),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null),r[7].profile.gender?u?u.p(r,c):(u=ft(r),u.c(),u.m(l.parentNode,l)):u&&(u.d(1),u=null)},d(r){o&&o.d(r),r&&b(t),n&&n.d(r),r&&b(i),a&&a.d(r),r&&b(e),u&&u.d(r),r&&b(l)}}}function Le(f){let t,i=f[7].video.actors,e=[];for(let l=0;l<i.length;l+=1)e[l]=Ie(ne(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=N()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.actors;let n;for(n=0;n<i.length;n+=1){const a=ne(l,i,n);e[n]?e[n].p(a,o):(e[n]=Ie(a),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){K(e,l),l&&b(t)}}}function Se(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","video:actor"),s(t,"content",i=f[44].profile)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[44].profile)&&s(t,"content",i)},d(e){e&&b(t)}}}function De(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","video:actor:role"),s(t,"content",i=f[44].role)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[44].role)&&s(t,"content",i)},d(e){e&&b(t)}}}function Ie(f){let t,i,e=f[44].profile&&Se(f),l=f[44].role&&De(f);return{c(){e&&e.c(),t=y(),l&&l.c(),i=N()},l(o){e&&e.l(o),t=L(o),l&&l.l(o),i=N()},m(o,n){e&&e.m(o,n),k(o,t,n),l&&l.m(o,n),k(o,i,n)},p(o,n){o[44].profile?e?e.p(o,n):(e=Se(o),e.c(),e.m(t.parentNode,t)):e&&(e.d(1),e=null),o[44].role?l?l.p(o,n):(l=De(o),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null)},d(o){e&&e.d(o),o&&b(t),l&&l.d(o),o&&b(i)}}}function Ce(f){let t,i=f[7].video.directors,e=[];for(let l=0;l<i.length;l+=1)e[l]=Pe(fe(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=N()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.directors;let n;for(n=0;n<i.length;n+=1){const a=fe(l,i,n);e[n]?e[n].p(a,o):(e[n]=Pe(a),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){K(e,l),l&&b(t)}}}function Pe(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","video:director"),s(t,"content",i=f[41])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[41])&&s(t,"content",i)},d(e){e&&b(t)}}}function Ge(f){let t,i=f[7].video.writers,e=[];for(let l=0;l<i.length;l+=1)e[l]=Ke(ie(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=N()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.writers;let n;for(n=0;n<i.length;n+=1){const a=ie(l,i,n);e[n]?e[n].p(a,o):(e[n]=Ke(a),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){K(e,l),l&&b(t)}}}function Ke(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","video:writer"),s(t,"content",i=f[38])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[38])&&s(t,"content",i)},d(e){e&&b(t)}}}function Ve(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","video:duration"),s(t,"content",i=f[7].video.duration.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].video.duration.toString())&&s(t,"content",i)},d(e){e&&b(t)}}}function qe(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","video:release_date"),s(t,"content",i=f[7].video.releaseDate)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].video.releaseDate)&&s(t,"content",i)},d(e){e&&b(t)}}}function Ue(f){let t,i=f[7].video.tags,e=[];for(let l=0;l<i.length;l+=1)e[l]=ze(le(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=N()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].video.tags;let n;for(n=0;n<i.length;n+=1){const a=le(l,i,n);e[n]?e[n].p(a,o):(e[n]=ze(a),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){K(e,l),l&&b(t)}}}function ze(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","video:tag"),s(t,"content",i=f[16])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[16])&&s(t,"content",i)},d(e){e&&b(t)}}}function Be(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","video:series"),s(t,"content",i=f[7].video.series)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].video.series)&&s(t,"content",i)},d(e){e&&b(t)}}}function je(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","article:published_time"),s(t,"content",i=f[7].article.publishedTime)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.publishedTime)&&s(t,"content",i)},d(e){e&&b(t)}}}function He(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","article:modified_time"),s(t,"content",i=f[7].article.modifiedTime)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.modifiedTime)&&s(t,"content",i)},d(e){e&&b(t)}}}function Oe(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","article:expiration_time"),s(t,"content",i=f[7].article.expirationTime)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.expirationTime)&&s(t,"content",i)},d(e){e&&b(t)}}}function Je(f){let t,i=f[7].article.authors,e=[];for(let l=0;l<i.length;l+=1)e[l]=Re(re(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=N()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].article.authors;let n;for(n=0;n<i.length;n+=1){const a=re(l,i,n);e[n]?e[n].p(a,o):(e[n]=Re(a),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){K(e,l),l&&b(t)}}}function Re(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","article:author"),s(t,"content",i=f[29])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[29])&&s(t,"content",i)},d(e){e&&b(t)}}}function Ye(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","article:section"),s(t,"content",i=f[7].article.section)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].article.section)&&s(t,"content",i)},d(e){e&&b(t)}}}function Fe(f){let t,i=f[7].article.tags,e=[];for(let l=0;l<i.length;l+=1)e[l]=Qe(oe(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=N()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].article.tags;let n;for(n=0;n<i.length;n+=1){const a=oe(l,i,n);e[n]?e[n].p(a,o):(e[n]=Qe(a),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){K(e,l),l&&b(t)}}}function Qe(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","article:tag"),s(t,"content",i=f[16])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[16])&&s(t,"content",i)},d(e){e&&b(t)}}}function We(f){let t,i=f[7].book.authors,e=[];for(let l=0;l<i.length;l+=1)e[l]=Xe(ae(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=N()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].book.authors;let n;for(n=0;n<i.length;n+=1){const a=ae(l,i,n);e[n]?e[n].p(a,o):(e[n]=Xe(a),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){K(e,l),l&&b(t)}}}function Xe(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","book:author"),s(t,"content",i=f[29])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[29])&&s(t,"content",i)},d(e){e&&b(t)}}}function Ze(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","book:isbn"),s(t,"content",i=f[7].book.isbn)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].book.isbn)&&s(t,"content",i)},d(e){e&&b(t)}}}function $e(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","book:release_date"),s(t,"content",i=f[7].book.releaseDate)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].book.releaseDate)&&s(t,"content",i)},d(e){e&&b(t)}}}function xe(f){let t,i=f[7].book.tags,e=[];for(let l=0;l<i.length;l+=1)e[l]=et(_e(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=N()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].book.tags;let n;for(n=0;n<i.length;n+=1){const a=_e(l,i,n);e[n]?e[n].p(a,o):(e[n]=et(a),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){K(e,l),l&&b(t)}}}function et(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","book:tag"),s(t,"content",i=f[16])},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[16])&&s(t,"content",i)},d(e){e&&b(t)}}}function tt(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","profile:first_name"),s(t,"content",i=f[7].profile.firstName)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.firstName)&&s(t,"content",i)},d(e){e&&b(t)}}}function lt(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","profile:last_name"),s(t,"content",i=f[7].profile.lastName)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.lastName)&&s(t,"content",i)},d(e){e&&b(t)}}}function it(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","profile:username"),s(t,"content",i=f[7].profile.username)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.username)&&s(t,"content",i)},d(e){e&&b(t)}}}function ft(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","profile:gender"),s(t,"content",i=f[7].profile.gender)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].profile.gender)&&s(t,"content",i)},d(e){e&&b(t)}}}function nt(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","og:title"),s(t,"content",i=f[7].title||f[12])},m(e,l){k(e,t,l)},p(e,l){l[0]&4224&&i!==(i=e[7].title||e[12])&&s(t,"content",i)},d(e){e&&b(t)}}}function ot(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","og:description"),s(t,"content",i=f[7].description||f[2])},m(e,l){k(e,t,l)},p(e,l){l[0]&132&&i!==(i=e[7].description||e[2])&&s(t,"content",i)},d(e){e&&b(t)}}}function rt(f){let t,i=f[7].images,e=[];for(let l=0;l<i.length;l+=1)e[l]=ut(te(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=N()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].images;let n;for(n=0;n<i.length;n+=1){const a=te(l,i,n);e[n]?e[n].p(a,o):(e[n]=ut(a),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){K(e,l),l&&b(t)}}}function _t(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","og:image:alt"),s(t,"content",i=f[24].alt)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[24].alt)&&s(t,"content",i)},d(e){e&&b(t)}}}function at(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","og:image:width"),s(t,"content",i=f[24].width.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[24].width.toString())&&s(t,"content",i)},d(e){e&&b(t)}}}function ct(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","og:image:height"),s(t,"content",i=f[24].height.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[24].height.toString())&&s(t,"content",i)},d(e){e&&b(t)}}}function ut(f){let t,i,e,l,o,n,a=f[24].alt&&_t(f),u=f[24].width&&at(f),r=f[24].height&&ct(f);return{c(){t=T("meta"),e=y(),a&&a.c(),l=y(),u&&u.c(),o=y(),r&&r.c(),n=N(),this.h()},l(c){t=w(c,"META",{property:!0,content:!0}),e=L(c),a&&a.l(c),l=L(c),u&&u.l(c),o=L(c),r&&r.l(c),n=N(),this.h()},h(){s(t,"property","og:image"),s(t,"content",i=f[24].url)},m(c,p){k(c,t,p),k(c,e,p),a&&a.m(c,p),k(c,l,p),u&&u.m(c,p),k(c,o,p),r&&r.m(c,p),k(c,n,p)},p(c,p){p[0]&128&&i!==(i=c[24].url)&&s(t,"content",i),c[24].alt?a?a.p(c,p):(a=_t(c),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null),c[24].width?u?u.p(c,p):(u=at(c),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null),c[24].height?r?r.p(c,p):(r=ct(c),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d(c){c&&b(t),c&&b(e),a&&a.d(c),c&&b(l),u&&u.d(c),c&&b(o),r&&r.d(c),c&&b(n)}}}function mt(f){let t,i=f[7].videos,e=[];for(let l=0;l<i.length;l+=1)e[l]=kt(ee(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=N()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&128){i=l[7].videos;let n;for(n=0;n<i.length;n+=1){const a=ee(l,i,n);e[n]?e[n].p(a,o):(e[n]=kt(a),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){K(e,l),l&&b(t)}}}function st(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","og:video:alt"),s(t,"content",i=f[21].alt)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].alt)&&s(t,"content",i)},d(e){e&&b(t)}}}function pt(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","og:video:width"),s(t,"content",i=f[21].width.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].width.toString())&&s(t,"content",i)},d(e){e&&b(t)}}}function ht(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","og:video:height"),s(t,"content",i=f[21].height.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].height.toString())&&s(t,"content",i)},d(e){e&&b(t)}}}function dt(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","og:video:secure_url"),s(t,"content",i=f[21].secureUrl.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].secureUrl.toString())&&s(t,"content",i)},d(e){e&&b(t)}}}function bt(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","og:video:type"),s(t,"content",i=f[21].type.toString())},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[21].type.toString())&&s(t,"content",i)},d(e){e&&b(t)}}}function kt(f){let t,i,e,l,o,n,a,u,r=f[21].alt&&st(f),c=f[21].width&&pt(f),p=f[21].height&&ht(f),h=f[21].secureUrl&&dt(f),m=f[21].type&&bt(f);return{c(){t=T("meta"),e=y(),r&&r.c(),l=y(),c&&c.c(),o=y(),p&&p.c(),n=y(),h&&h.c(),a=y(),m&&m.c(),u=N(),this.h()},l(d){t=w(d,"META",{property:!0,content:!0}),e=L(d),r&&r.l(d),l=L(d),c&&c.l(d),o=L(d),p&&p.l(d),n=L(d),h&&h.l(d),a=L(d),m&&m.l(d),u=N(),this.h()},h(){s(t,"property","og:video"),s(t,"content",i=f[21].url)},m(d,_){k(d,t,_),k(d,e,_),r&&r.m(d,_),k(d,l,_),c&&c.m(d,_),k(d,o,_),p&&p.m(d,_),k(d,n,_),h&&h.m(d,_),k(d,a,_),m&&m.m(d,_),k(d,u,_)},p(d,_){_[0]&128&&i!==(i=d[21].url)&&s(t,"content",i),d[21].alt?r?r.p(d,_):(r=st(d),r.c(),r.m(l.parentNode,l)):r&&(r.d(1),r=null),d[21].width?c?c.p(d,_):(c=pt(d),c.c(),c.m(o.parentNode,o)):c&&(c.d(1),c=null),d[21].height?p?p.p(d,_):(p=ht(d),p.c(),p.m(n.parentNode,n)):p&&(p.d(1),p=null),d[21].secureUrl?h?h.p(d,_):(h=dt(d),h.c(),h.m(a.parentNode,a)):h&&(h.d(1),h=null),d[21].type?m?m.p(d,_):(m=bt(d),m.c(),m.m(u.parentNode,u)):m&&(m.d(1),m=null)},d(d){d&&b(t),d&&b(e),r&&r.d(d),d&&b(l),c&&c.d(d),d&&b(o),p&&p.d(d),d&&b(n),h&&h.d(d),d&&b(a),m&&m.d(d),d&&b(u)}}}function vt(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","og:locale"),s(t,"content",i=f[7].locale)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].locale)&&s(t,"content",i)},d(e){e&&b(t)}}}function gt(f){let t,i;return{c(){t=T("meta"),this.h()},l(e){t=w(e,"META",{property:!0,content:!0}),this.h()},h(){s(t,"property","og:site_name"),s(t,"content",i=f[7].site_name)},m(e,l){k(e,t,l)},p(e,l){l[0]&128&&i!==(i=e[7].site_name)&&s(t,"content",i)},d(e){e&&b(t)}}}function Nt(f){let t,i=f[9],e=[];for(let l=0;l<i.length;l+=1)e[l]=Tt(x(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=N()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&512){i=l[9];let n;for(n=0;n<i.length;n+=1){const a=x(l,i,n);e[n]?e[n].p(a,o):(e[n]=Tt(a),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){K(e,l),l&&b(t)}}}function Tt(f){let t,i=[f[16]],e={};for(let l=0;l<i.length;l+=1)e=Y(e,i[l]);return{c(){t=T("meta"),this.h()},l(l){t=w(l,"META",{}),this.h()},h(){z(t,e)},m(l,o){k(l,t,o)},p(l,o){z(t,e=R(i,[o[0]&512&&l[16]]))},d(l){l&&b(t)}}}function wt(f){let t,i=f[10],e=[];for(let l=0;l<i.length;l+=1)e[l]=At($(f,i,l));return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=N()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=N()},m(l,o){for(let n=0;n<e.length;n+=1)e[n].m(l,o);k(l,t,o)},p(l,o){if(o[0]&1024){i=l[10];let n;for(n=0;n<i.length;n+=1){const a=$(l,i,n);e[n]?e[n].p(a,o):(e[n]=At(a),e[n].c(),e[n].m(t.parentNode,t))}for(;n<e.length;n+=1)e[n].d(1);e.length=i.length}},d(l){K(e,l),l&&b(t)}}}function At(f){let t,i=[f[16]],e={};for(let l=0;l<i.length;l+=1)e=Y(e,i[l]);return{c(){t=T("link"),this.h()},l(l){t=w(l,"LINK",{}),this.h()},h(){z(t,e)},m(l,o){k(l,t,o)},p(l,o){z(t,e=R(i,[o[0]&1024&&l[16]]))},d(l){l&&b(t)}}}function Jt(f){var U;let t,i,e,l,o,n,a,u,r,c,p,h,m,d;document.title=t=f[12];let _=f[2]&&ue(f),g=f[8]&&me(f),v=f[3]&&se(f),M=f[4]&&f[4].length>0&&pe(f),E=f[5]&&de(f),D=f[6]&&Ae(f),I=f[7]&&Ee(f),C=f[9]&&f[9].length>0&&Nt(f),P=((U=f[10])==null?void 0:U.length)&&wt(f);return{c(){i=T("meta"),l=T("meta"),_&&_.c(),n=N(),g&&g.c(),a=N(),v&&v.c(),u=N(),M&&M.c(),r=N(),E&&E.c(),c=N(),D&&D.c(),p=N(),I&&I.c(),h=N(),C&&C.c(),m=N(),P&&P.c(),d=N(),this.h()},l(A){const S=Ct('[data-svelte="svelte-1v2a5gq"]',document.head);i=w(S,"META",{name:!0,content:!0}),l=w(S,"META",{name:!0,content:!0}),_&&_.l(S),n=N(),g&&g.l(S),a=N(),v&&v.l(S),u=N(),M&&M.l(S),r=N(),E&&E.l(S),c=N(),D&&D.l(S),p=N(),I&&I.l(S),h=N(),C&&C.l(S),m=N(),P&&P.l(S),d=N(),S.forEach(b),this.h()},h(){s(i,"name","robots"),s(i,"content",e=`${f[0]?"noindex":"index"},${f[1]?"nofollow":"follow"}${f[11]}`),s(l,"name","googlebot"),s(l,"content",o=`${f[0]?"noindex":"index"},${f[1]?"nofollow":"follow"}${f[11]}`)},m(A,S){G(document.head,i),G(document.head,l),_&&_.m(document.head,null),G(document.head,n),g&&g.m(document.head,null),G(document.head,a),v&&v.m(document.head,null),G(document.head,u),M&&M.m(document.head,null),G(document.head,r),E&&E.m(document.head,null),G(document.head,c),D&&D.m(document.head,null),G(document.head,p),I&&I.m(document.head,null),G(document.head,h),C&&C.m(document.head,null),G(document.head,m),P&&P.m(document.head,null),G(document.head,d)},p(A,S){var W;S[0]&4096&&t!==(t=A[12])&&(document.title=t),S[0]&2051&&e!==(e=`${A[0]?"noindex":"index"},${A[1]?"nofollow":"follow"}${A[11]}`)&&s(i,"content",e),S[0]&2051&&o!==(o=`${A[0]?"noindex":"index"},${A[1]?"nofollow":"follow"}${A[11]}`)&&s(l,"content",o),A[2]?_?_.p(A,S):(_=ue(A),_.c(),_.m(n.parentNode,n)):_&&(_.d(1),_=null),A[8]?g?g.p(A,S):(g=me(A),g.c(),g.m(a.parentNode,a)):g&&(g.d(1),g=null),A[3]?v?v.p(A,S):(v=se(A),v.c(),v.m(u.parentNode,u)):v&&(v.d(1),v=null),A[4]&&A[4].length>0?M?M.p(A,S):(M=pe(A),M.c(),M.m(r.parentNode,r)):M&&(M.d(1),M=null),A[5]?E?E.p(A,S):(E=de(A),E.c(),E.m(c.parentNode,c)):E&&(E.d(1),E=null),A[6]?D?D.p(A,S):(D=Ae(A),D.c(),D.m(p.parentNode,p)):D&&(D.d(1),D=null),A[7]?I?I.p(A,S):(I=Ee(A),I.c(),I.m(h.parentNode,h)):I&&(I.d(1),I=null),A[9]&&A[9].length>0?C?C.p(A,S):(C=Nt(A),C.c(),C.m(m.parentNode,m)):C&&(C.d(1),C=null),(W=A[10])!=null&&W.length?P?P.p(A,S):(P=wt(A),P.c(),P.m(d.parentNode,d)):P&&(P.d(1),P=null)},i:X,o:X,d(A){b(i),b(l),_&&_.d(A),b(n),g&&g.d(A),b(a),v&&v.d(A),b(u),M&&M.d(A),b(r),E&&E.d(A),b(c),D&&D.d(A),b(p),I&&I.d(A),b(h),C&&C.d(A),b(m),P&&P.d(A),b(d)}}}function Rt(f,t,i){let e,{title:l=""}=t,{titleTemplate:o=""}=t,{noindex:n=!1}=t,{nofollow:a=!1}=t,{robotsProps:u=void 0}=t,{description:r=void 0}=t,{mobileAlternate:c=void 0}=t,{languageAlternates:p=void 0}=t,{twitter:h=void 0}=t,{facebook:m=void 0}=t,{openGraph:d=void 0}=t,{canonical:_=void 0}=t,{additionalMetaTags:g=void 0}=t,{additionalLinkTags:v=void 0}=t,M="";if(u){const{nosnippet:E,maxSnippet:D,maxImagePreview:I,maxVideoPreview:C,noarchive:P,noimageindex:U,notranslate:A,unavailableAfter:S}=u;M=`${E?",nosnippet":""}${D?`,max-snippet:${D}`:""}${I?`,max-image-preview:${I}`:""}${P?",noarchive":""}${S?`,unavailable_after:${S}`:""}${U?",noimageindex":""}${C?`,max-video-preview:${C}`:""}${A?",notranslate":""}`}return f.$$set=E=>{"title"in E&&i(13,l=E.title),"titleTemplate"in E&&i(14,o=E.titleTemplate),"noindex"in E&&i(0,n=E.noindex),"nofollow"in E&&i(1,a=E.nofollow),"robotsProps"in E&&i(15,u=E.robotsProps),"description"in E&&i(2,r=E.description),"mobileAlternate"in E&&i(3,c=E.mobileAlternate),"languageAlternates"in E&&i(4,p=E.languageAlternates),"twitter"in E&&i(5,h=E.twitter),"facebook"in E&&i(6,m=E.facebook),"openGraph"in E&&i(7,d=E.openGraph),"canonical"in E&&i(8,_=E.canonical),"additionalMetaTags"in E&&i(9,g=E.additionalMetaTags),"additionalLinkTags"in E&&i(10,v=E.additionalLinkTags)},f.$$.update=()=>{f.$$.dirty[0]&24576&&i(12,e=o?o.replace(/%s/g,l):l)},[n,a,r,c,p,h,m,d,_,g,v,M,e,l,o,u]}class Yt extends Lt{constructor(t){super();St(this,t,Rt,Jt,Dt,{title:13,titleTemplate:14,noindex:0,nofollow:1,robotsProps:15,description:2,mobileAlternate:3,languageAlternates:4,twitter:5,facebook:6,openGraph:7,canonical:8,additionalMetaTags:9,additionalLinkTags:10},null,[-1,-1])}}/**
 * @license BSD-3-Clause
 * Copyright (c) 2022, ッツ Reader Authors
 * All rights reserved.
 */const j={}.VITE_BASE_PATH||"https://reader.ttsu.app";function Et(f,t,i){const e=f.slice();return e[5]=t[i],e}function Mt(f){let t,i,e,l,o,n,a,u=f[1],r=[];for(let p=0;p<u.length;p+=1)r[p]=yt(Et(f,u,p));const c=p=>q(r[p],1,1,()=>{r[p]=null});return{c(){t=T("div"),i=T("div"),e=y(),l=T("div");for(let p=0;p<r.length;p+=1)r[p].c();this.h()},l(p){t=w(p,"DIV",{class:!0});var h=B(t);i=w(h,"DIV",{class:!0}),B(i).forEach(b),e=L(h),l=w(h,"DIV",{class:!0});var m=B(l);for(let d=0;d<r.length;d+=1)r[d].l(m);m.forEach(b),h.forEach(b),this.h()},h(){s(i,"class","tap-highlight-transparent absolute inset-0 bg-black/[.32]"),s(l,"class","relative top-1/2 left-1/2 inline-block max-w-[80vw] -translate-x-1/2 -translate-y-1/2"),s(t,"class","writing-horizontal-tb fixed inset-0 z-50 h-full w-full")},m(p,h){k(p,t,h),G(t,i),G(t,e),G(t,l);for(let m=0;m<r.length;m+=1)r[m].m(l,null);o=!0,n||(a=Gt(i,"click",f[2]),n=!0)},p(p,h){if(h&6){u=p[1];let m;for(m=0;m<u.length;m+=1){const d=Et(p,u,m);r[m]?(r[m].p(d,h),V(r[m],1)):(r[m]=yt(d),r[m].c(),V(r[m],1),r[m].m(l,null))}for(Q(),m=u.length;m<r.length;m+=1)c(m);F()}},i(p){if(!o){for(let h=0;h<u.length;h+=1)V(r[h]);o=!0}},o(p){r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)q(r[h]);o=!1},d(p){p&&b(t),K(r,p),n=!1,a()}}}function yt(f){let t,i,e;const l=[f[5].props];var o=f[5].component;function n(a){let u={};for(let r=0;r<l.length;r+=1)u=Y(u,l[r]);return{props:u}}return o&&(t=new o(n()),t.$on("close",f[2])),{c(){t&&H(t.$$.fragment),i=N()},l(a){t&&It(t.$$.fragment,a),i=N()},m(a,u){t&&O(t,a,u),k(a,i,u),e=!0},p(a,u){const r=u&2?R(l,[Kt(a[5].props)]):{};if(o!==(o=a[5].component)){if(t){Q();const c=t;q(c.$$.fragment,1,0,()=>{J(c,1)}),F()}o?(t=new o(n()),t.$on("close",a[2]),H(t.$$.fragment),V(t.$$.fragment,1),O(t,i.parentNode,i)):t=null}else o&&t.$set(r)},i(a){e||(t&&V(t.$$.fragment,a),e=!0)},o(a){t&&q(t.$$.fragment,a),e=!1},d(a){a&&b(i),t&&J(t,a)}}}function Ft(f){let t,i,e,l,o;t=new Yt({props:{title:"\u30C3\u30C4 Ebook Reader",description:"Online e-book reader that supports Yomichan",canonical:""+(j+(f[0]!=="/"?f[0]:"")),openGraph:{type:"website",images:[{url:`${j}/icons/regular-icon@512x512.png`,width:512,height:512}]}}});const n=f[4].default,a=Pt(n,f,f[3],null);let u=f[1].length>0&&Mt(f);return{c(){H(t.$$.fragment),i=y(),a&&a.c(),e=y(),u&&u.c(),l=N()},l(r){It(t.$$.fragment,r),i=L(r),a&&a.l(r),e=L(r),u&&u.l(r),l=N()},m(r,c){O(t,r,c),k(r,i,c),a&&a.m(r,c),k(r,e,c),u&&u.m(r,c),k(r,l,c),o=!0},p(r,[c]){const p={};c&1&&(p.canonical=""+(j+(r[0]!=="/"?r[0]:""))),t.$set(p),a&&a.p&&(!o||c&8)&&Vt(a,n,r,r[3],o?Ut(n,r[3],c,null):qt(r[3]),null),r[1].length>0?u?(u.p(r,c),c&2&&V(u,1)):(u=Mt(r),u.c(),V(u,1),u.m(l.parentNode,l)):u&&(Q(),q(u,1,1,()=>{u=null}),F())},i(r){o||(V(t.$$.fragment,r),V(a,r),V(u),o=!0)},o(r){q(t.$$.fragment,r),q(a,r),q(u),o=!1},d(r){J(t,r),r&&b(i),a&&a.d(r),r&&b(e),u&&u.d(r),r&&b(l)}}}function Qt(f,t,i){let{$$slots:e={},$$scope:l}=t,o="";zt.subscribe(u=>i(0,o=u.url.pathname));let n=[];Z.dialogs$.subscribe(u=>i(1,n=u));function a(){Z.dialogs$.next([])}return f.$$set=u=>{"$$scope"in u&&i(3,l=u.$$scope)},[o,n,a,l,e]}class xt extends Lt{constructor(t){super();St(this,t,Qt,Ft,Dt,{})}}export{xt as default};