import{S as o,i as r,n as s}from"../../chunks/index-32c3e254.js";/**
 * @license BSD-3-Clause
 * Copyright (c) 2022, ッツ Reader Authors
 * All rights reserved.
 */function a(e){return Object.entries(e).map(([t,n])=>`${encodeURIComponent(t)}=${encodeURIComponent(n)}`).join("&")}const c=({params:e})=>({status:302,redirect:`/ebook-reader/b?${a(e)}`});class u extends o{constructor(t){super();r(this,t,null,null,s,{})}}export{u as default,c as load};
