(()=>{"use strict";var e,t={709:(e,t,r)=>{var o=r(311);const n=r.p+"7d05b6b2cd5114081911.png",i=r.p+"f5f2a671b06d07b2a593.png",a=r.p+"625229f0df9b7dede941.png",d=r.p+"421eddd6f39048c17368.png";var l=new o.MxU({width:window.innerWidth,height:window.innerHeight,backgroundColor:1087931,resolution:window.devicePixelRatio||1});document.body.appendChild(l.view),l.loader.add(n,n).add(i,i).add(a,a).add(d,d).load((function(){for(var e=[o.xEZ.from(n),o.xEZ.from(i),o.xEZ.from(a),o.xEZ.from(d)],t=(new o.pn8({fontFamily:"Arial",fontSize:360,fontWeight:"bold",fill:["#000000"],align:"center"}),[]),r=new o.W20,p=0;p<5;p++){var f=new o.W20;f.x=240*p,r.addChild(f);var u={container:f,symbols:[],position:0,previousPosition:0,blur:new o.u8d.BlurFilter};u.blur.blurX=0,u.blur.blurY=0,f.filters=[u.blur];for(var c=0;c<4;c++){var w=new o.jyi(e[Math.floor(Math.random()*e.length)]);w.scale.x=w.scale.y=Math.min(h/w.width,h/w.height),w.x=Math.round((h-w.width)/2),u.symbols.push(w),f.addChild(w)}t.push(u)}l.stage.addChild(r);var g=(l.screen.height-720)/2;r.y=g,r.x=Math.round(l.screen.width/2)-r.width/2;var v=new o.TCu;v.beginFill(0,1),v.drawRect(0,0,l.screen.width,g);var b=new o.TCu;b.beginFill(0,1),b.drawRect(0,720+g,l.screen.width,g);var y=new o.pn8({fontFamily:"Arial",fontSize:36,fontStyle:"italic",fontWeight:"bold",fill:["#ffffff","#00ff99"],stroke:"#4a1850",strokeThickness:5,dropShadow:!0,dropShadowColor:"#000000",dropShadowBlur:4,dropShadowAngle:Math.PI/6,dropShadowDistance:6,wordWrap:!0,wordWrapWidth:440}),m=new o.xvT("Spin the wheels!",y);m.x=Math.round((b.width-m.width)/2),m.y=l.screen.height-g+Math.round((g-m.height)/2),b.addChild(m);var x=new o.xvT("PIXI FRUITS SLOTS!",y);x.x=Math.round((v.width-x.width)/2),x.y=Math.round((g-x.height)/2),v.addChild(x),l.stage.addChild(v),l.stage.addChild(b),b.interactive=!0,b.buttonMode=!0,b.addListener("pointerdown",(function(){!function(){if(!M){M=!0,console.log(t,"reels");for(var e=0;e<t.length;e++){var r=t[e],o=Math.floor(3*Math.random());n=r,i="position",a=r.position+10+10*(e+1)+o,d=2500+600*e+100*o,l=function(e){return e},h=null,p=e===t.length-1?C:null,f=void 0,f={object:n,property:i,propertyBeginValue:n[i],target:a,easing:l,time:d,change:h,complete:p,start:Date.now()},s.push(f)}var n,i,a,d,l,h,p,f}}()}));var M=!1;function C(){M=!1}l.ticker.add((function(r){for(var o=0;o<t.length;o++){var n=t[o];n.blur.blurY=8*(n.position-n.previousPosition),n.previousPosition=n.position;for(var i=0;i<n.symbols.length;i++){var a=n.symbols[i],d=a.y;a.y=(n.position+i)%n.symbols.length*h-h,a.y<0&&d>h&&(a.texture=e[Math.floor(Math.random()*e.length)],a.scale.x=a.scale.y=Math.min(h/a.texture.width,h/a.texture.height),a.x=Math.round((h-a.width)/2))}}}))}));var h=240,s=[];function p(e,t,r){return e*(1-r)+t*r}l.ticker.add((function(e){for(var t=Date.now(),r=[],o=0;o<s.length;o++){var n=s[o],i=Math.min(1,(t-n.start)/n.time);n.object[n.property]=p(n.propertyBeginValue,n.target,n.easing(i)),n.change&&n.change(n),1===i&&(n.object[n.property]=n.target,n.complete&&n.complete(n),r.push(n))}for(var a=0;a<r.length;a++)s.splice(s.indexOf(r[a]),1)}))}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=t,e=[],o.O=(t,r,n,i)=>{if(!r){var a=1/0;for(s=0;s<e.length;s++){for(var[r,n,i]=e[s],d=!0,l=0;l<r.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](r[l])))?r.splice(l--,1):(d=!1,i<a&&(a=i));if(d){e.splice(s--,1);var h=n();void 0!==h&&(t=h)}}return t}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,n,i]},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="",(()=>{var e={179:0};o.O.j=t=>0===e[t];var t=(t,r)=>{var n,i,[a,d,l]=r,h=0;if(a.some((t=>0!==e[t]))){for(n in d)o.o(d,n)&&(o.m[n]=d[n]);if(l)var s=l(o)}for(t&&t(r);h<a.length;h++)i=a[h],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(s)},r=self.webpackChunkweb_app=self.webpackChunkweb_app||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=o.O(void 0,[311],(()=>o(709)));n=o.O(n)})();