import{S as o,i as r,a}from"../../chunks/index-2fb0f594.js";/**
 * @license BSD-3-Clause
 * Copyright (c) 2022, ッツ Reader Authors
 * All rights reserved.
 */function s(e){return Object.entries(e).map(([t,n])=>`${encodeURIComponent(t)}=${encodeURIComponent(n)}`).join("&")}const c=({params:e})=>({status:302,redirect:`/ebook-reader/b?${s(e)}`});class u extends o{constructor(t){super();r(this,t,null,null,a,{})}}export{u as default,c as load};
