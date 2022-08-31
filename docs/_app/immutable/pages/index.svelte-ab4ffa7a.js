import{S as m,i as f,n as p,s as _,k as b,G as v,f as i,c as h,l as $,m as g,a as c,_ as y,E as u}from"../chunks/index-df0cdd8f.js";import{K as d,L as k,k as x,u as E,Q as q}from"../chunks/format-page-title-69f738c5.js";import"../chunks/singletons-a14e46a6.js";import"../chunks/dialog-manager-cce8b3b0.js";/**
 * @license BSD-3-Clause
 * Copyright (c) 2022, ッツ Reader Authors
 * All rights reserved.
 */function H(n,e){const t=e.subscribe();return{destroy:()=>t.unsubscribe()}}function I(n){let e,t,s,r,l;return document.title=e=d("Home"),{c(){t=_(),s=b("div")},l(a){v('[data-svelte="svelte-1o30anf"]',document.head).forEach(i),t=h(a),s=$(a,"DIV",{}),g(s).forEach(i)},m(a,o){c(a,t,o),c(a,s,o),r||(l=y(H.call(null,s,n[0])),r=!0)},p(a,[o]){o&0&&e!==(e=d("Home"))&&(document.title=e)},i:u,o:u,d(a){a&&i(t),a&&i(s),r=!1,l()}}}function N(n){return[k.lastItem$.pipe(x(t=>t?`/ebook-reader/b/${t.dataId}`:"manage"),E(q))]}class K extends m{constructor(e){super(),f(this,e,N,I,p,{})}}export{K as default};
