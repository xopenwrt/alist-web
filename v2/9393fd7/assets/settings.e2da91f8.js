var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,l=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r,i=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&l(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&l(e,a,t[a]);return e},n=(e,r)=>t(e,a(r));import{j as p,h as u,r as c,R as m,s as d,af as f,F as y,v as b}from"./vendor.5e71f75c.js";import{a as v}from"./index.9592c9c8.js";import{F as j}from"./form-item.5dd0ac9f.js";import"./index.08f9318e.js";import"./index.3060ab66.js";import"./index.esm.f99205a0.js";import"./useTitle.0fa272da.js";const g=()=>{const e=p(),{t:t}=u(),[a,r]=c.exports.useState([]);return c.exports.useEffect((()=>{v.get("settings").then((a=>{const s=a.data;200!==s.code?e({title:t(s.message),status:"error",duration:3e3,isClosable:!0}):r(s.data)}))}),[]),m.createElement(d,{w:"full"},m.createElement(f,{minChildWidth:"400px",spacing:"2"},a.map((e=>{var s;return m.createElement(j,{key:e.key,type:e.type,label:e.key,value:"bool"===e.type?"true"===e.value:e.value,readOnly:2===e.group,values:null==(s=e.values)?void 0:s.split(","),description:`${t(e.description)}(${t(0===e.group?"public":1===e.group?"private":"readonly")})`,onChange:t=>{r(a.map((a=>a.key===e.key?"bool"!==e.type?n(i({},a),{value:t}):n(i({},a),{value:"true"===e.value?"false":"true"}):a)))}})}))),m.createElement(y,{mt:"2",justify:"end"},m.createElement(b,{onClick:()=>{v.post("settings",a).then((a=>{const r=a.data;200!==r.code?e({title:t(r.message),status:"error",duration:3e3,isClosable:!0}):e({title:t(r.message),status:"success",duration:3e3,isClosable:!0})}))}},t("save"))))};export{g as default};
