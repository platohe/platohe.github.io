import{N as e,Ot as t}from"./clipboard-RCGfH8g4.js";var n=new t(`antFadeIn`,{"0%":{opacity:0},"100%":{opacity:1}}),r=new t(`antFadeOut`,{"0%":{opacity:1},"100%":{opacity:0}}),i=function(t){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,{antCls:a}=t,o=`${a}-fade`,s=i?`&`:``;return[e(o,n,r,t.motionDurationMid,i),{[`
        ${s}${o}-enter,
        ${s}${o}-appear
      `]:{opacity:0,animationTimingFunction:`linear`},[`${s}${o}-leave`]:{animationTimingFunction:`linear`}}]};export{i as t};