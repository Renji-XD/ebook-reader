/**
 * @license BSD-3-Clause
 * Copyright (c) 2022, ッツ Reader Authors
 * All rights reserved.
 */function r(n,c){const t=e=>{!e.defaultPrevented&&!n.contains(e.target)&&c(e)};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}export{r as c};
