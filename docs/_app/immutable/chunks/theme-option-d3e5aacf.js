import{s as i}from"./dialog-manager-cce8b3b0.js";import{k as u,l as C}from"./format-page-title-5527ed5f.js";/**
 * @license BSD-3-Clause
 * Copyright (c) 2022, ッツ Reader Authors
 * All rights reserved.
 */function F(){return i(u(()=>""),C((o,r)=>!r))}/**
 * @license BSD-3-Clause
 * Copyright (c) 2022, ッツ Reader Authors
 * All rights reserved.
 */function l(o){return{...o,hintFuriganaFontColor:{...o.fontColor,a:o.fontColor.a?o.fontColor.a*.38:.38}}}const n=l({fontColor:{r:0,g:0,b:0,a:.87},backgroundColor:{r:255,g:255,b:255},selectionFontColor:{r:245,g:245,b:245},selectionBackgroundColor:{r:151,g:151,b:151},hintFuriganaFontColor:{r:0,g:0,b:0},hintFuriganaShadowColor:{r:34,g:34,b:49,a:.3},tooltipTextFontColor:{r:0,g:0,b:0,a:.6}}),e=l({fontColor:{r:255,g:255,b:255,a:.87},backgroundColor:{r:35,g:39,b:42},selectionFontColor:{r:85,g:90,b:92,a:.6},selectionBackgroundColor:{r:212,g:217,b:220,a:.8},hintFuriganaFontColor:{r:0,g:0,b:0},hintFuriganaShadowColor:{r:240,g:240,b:241,a:.3},tooltipTextFontColor:{r:255,g:255,b:255,a:.6}});function c(o){return Object.entries(o).reduce((r,[g,b])=>{var t;const a=b;return r[g]=`rgba(${a.r}, ${a.g}, ${a.b}, ${(t=a.a)!=null?t:1})`,r},{})}const s={lightTheme:n,ecruTheme:{...n,backgroundColor:{r:247,g:246,b:235}},waterTheme:{...n,backgroundColor:{r:223,g:236,b:244}},grayTheme:e,darkTheme:{...e,fontColor:{r:255,g:255,b:255,a:.6},backgroundColor:{r:18,g:18,b:18}},blackTheme:{...e,backgroundColor:{r:0,g:0,b:0}}};function m(o){return o.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}const T=new Map(Object.entries(s).map(([o,r])=>[m(o),c(r)]));export{T as a,F as r};
