!function(){"use strict";var e,t={87:function(e,t,n){var o={};n.r(o),n.d(o,{name:function(){return s},settings:function(){return f}});var r=window.wp.blocks,l=window.wp.element,i=window.wp.primitives,c=(0,l.createElement)(i.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(i.Path,{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM5 4.5h14c.3 0 .5.2.5.5v8.4l-3-2.9c-.3-.3-.8-.3-1 0L11.9 14 9 12c-.3-.2-.6-.2-.8 0l-3.6 2.6V5c-.1-.3.1-.5.4-.5zm14 15H5c-.3 0-.5-.2-.5-.5v-2.4l4.1-3 3 1.9c.3.2.7.2.9-.1L16 12l3.5 3.4V19c0 .3-.2.5-.5.5z"})),a=window.wp.i18n,u=window.wp.blockEditor,d=window.wp.components;const s="bal-model-viewer/model-viewer",f={apiVersion:2,title:(0,a.__)("Model Viewer","bal-model-viewer"),attributes:{model:{type:"object"}},icon:c,edit:function(e){let{attributes:t,setAttributes:n}=e;const{model:o}=t,r=(0,u.useBlockProps)();return(0,l.createElement)("div",r,(0,l.createElement)(u.MediaUploadCheck,null,(0,l.createElement)(u.MediaUpload,{allowedTypes:[],multiple:!1,value:o?o.id:"",onSelect:e=>n({model:e}),render:e=>{let{open:t}=e;return o?(0,l.createElement)("div",null,(0,l.createElement)("div",null,o.url),(0,l.createElement)(d.Button,{onClick:()=>n({model:""}),className:"button is-small"},(0,a.__)("Model entfernen","bal-model-viewer"))):(0,l.createElement)(d.Button,{onClick:t,className:"button"},(0,a.__)("Model hochladen","bal-model-viewer"))}})))},save:()=>null};[o].forEach((function(e){if(!e)return void console.log(`block with name ${t} not found.`);const{name:t,settings:n}=e;(0,r.registerBlockType)(t,n),console.log(`registered block with name: ${t}.`)}))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={exports:{}};return t[e](l,l.exports,o),l.exports}o.m=t,e=[],o.O=function(t,n,r,l){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],r=e[d][1],l=e[d][2];for(var c=!0,a=0;a<n.length;a++)(!1&l||i>=l)&&Object.keys(o.O).every((function(e){return o.O[e](n[a])}))?n.splice(a--,1):(c=!1,l<i&&(i=l));if(c){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,r,l]},o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={826:0,46:0};o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,l,i=n[0],c=n[1],a=n[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)o.o(c,r)&&(o.m[r]=c[r]);if(a)var d=a(o)}for(t&&t(n);u<i.length;u++)l=i[u],o.o(e,l)&&e[l]&&e[l][0](),e[i[u]]=0;return o.O(d)},n=self.webpackChunkbal_model_viewer=self.webpackChunkbal_model_viewer||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var r=o.O(void 0,[46],(function(){return o(87)}));r=o.O(r)}();