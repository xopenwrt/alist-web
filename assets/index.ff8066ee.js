import{r as F,R as e,T as p,B as m,C as f,a as h,S as g,b as A,e as _,w as y,m as w,i as b,c as k,d as v,f as S,g as R}from"./vendor.0592b31b.js";function Q(){import("data:text/javascript,")}const M=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const o of u)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(u){const o={};return u.integrity&&(o.integrity=u.integrity),u.referrerpolicy&&(o.referrerPolicy=u.referrerpolicy),u.crossorigin==="use-credentials"?o.credentials="include":u.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(u){if(u.ep)return;u.ep=!0;const o=i(u);fetch(u.href,o)}};M();const I="modulepreload",C={},z="",s=function(a,i){return!i||i.length===0?a():Promise.all(i.map(r=>{if(r=`${z}${r}`,r in C)return;C[r]=!0;const u=r.endsWith(".css"),o=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${o}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":I,u||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),u)return new Promise((D,c)=>{n.addEventListener("load",D),n.addEventListener("error",c)})})).then(()=>a())},P=F.exports.lazy(()=>s(()=>import(""+(window.__dynamicImportHandler__||function(t){return t})("./index.1be53e31.js")+"").then(function(t){return t.t}),(window.__dynamicImportPreload__ || function(importer) { return importer; })(["assets/index.1be53e31.js","assets/index.c96b7d55.css","assets/vendor.0592b31b.js","assets/index.esm.c15eacc2.js","assets/index.esm.5483c5f7.css","assets/copy-clip.08e8f9de.js"]))),x=F.exports.lazy(()=>s(()=>import(""+(window.__dynamicImportHandler__||function(t){return t})("./index.58a2a2ed.js")+""),(window.__dynamicImportPreload__ || function(importer) { return importer; })(["assets/index.58a2a2ed.js","assets/index.esm.c15eacc2.js","assets/index.esm.5483c5f7.css","assets/vendor.0592b31b.js","assets/useTitle.5db49527.js"])));function O(){return e.createElement("div",{className:"App"},e.createElement("div",null,e.createElement(p,null)),e.createElement(m,null,e.createElement(F.exports.Suspense,{fallback:e.createElement(f,{h:"100vh"},e.createElement(h.ClimbingBoxLoader,{color:"#1890ff",loading:!0,size:20}))},e.createElement(g,null,e.createElement(A,{path:"/@manage/"},e.createElement(x,null)),e.createElement(A,{path:"*"},e.createElement(P,null))))))}const L={initialColorMode:"dark",useSystemColorMode:!0},N={global:t=>({".chakra-ui-light":{bgColor:"#FAF9F8"},"html,body,#root,.App":{margin:0,padding:0},".test":{bg:w("white","gray.800")(t)},".react-jinke-music-player-main svg":{display:"unset"},".react-jinke-music-player-main.dark-theme .react-jinke-music-player-mobile":{bg:"gray.800"},".react-jinke-music-player-main.dark-theme .music-player-panel":{bg:"transparent"},".react-viewer img":{maxWidth:"unset"},".markdown-body img":{display:"unset"}})},j={config:L,styles:N},d=_(j,y({colorScheme:"twitter"})),H={"Welcome to React":"Welcome to React.","Go to page":"Go to {{page}}","Change language":"Change language","Switch to color mode":"Switch to {{color}} mode",dark:"dark",light:"light",home:"home",name:"Name",size:"Size",updated_at:"Modified","switch to layout view":"Switch to {{layout}} view"},T={code:"en",text:"English"};var U=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:H,config:T});const $={"Welcome to React":"React\u3078\u3088\u3046\u3053\u305D\u3002","Go to page":"{{page}}\u306B\u79FB\u52D5\u3057\u307E\u3059","Change language":"\u8A00\u8A9E\u3092\u5909\u3048\u3066\u304F\u3060\u3055\u3044","Switch to color mode":"{{color}}\u30E2\u30FC\u30C9\u306B\u5207\u308A\u66FF\u3048\u307E\u3059",dark:"\u6697\u8272",light:"\u660E\u8272",home:"\u8868\u7D19",Manage:"\u7BA1\u7406",Settings:"\u8A2D\u5B9A",Accounts:"\u30A2\u30AB\u30A6\u30F3\u30C8",Meta:"\u30E1\u30BF\u60C5\u5831",login:"\u30ED\u30B0\u30A4\u30F3",password:"\u30D1\u30B9\u30EF\u30FC\u30C9",success:"\u6210\u529F",exit:"\u7D42\u4E86\u3059\u308B",Save:"\u4FDD\u5B58\u3059\u308B",title:"\u30BF\u30A4\u30C8\u30EB",version:"\u30D0\u30FC\u30B8\u30E7\u30F3",public:"\u30AA\u30FC\u30D7\u30F3",private:"\u30D7\u30E9\u30A4\u30D9\u30FC\u30C8",readonly:"\u8AAD\u3080\u3060\u3051",Add:"\u8FFD\u52A0",Refresh:"\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5",name:"\u540D\u524D",type:"\u30BF\u30A4\u30D7",username:"\u30E6\u30FC\u30B6\u30FC\u540D",refresh_token:"\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u30C8\u30FC\u30AF\u30F3",access_token:"\u30C8\u30FC\u30AF\u30F3\u306B\u30A2\u30AF\u30BB\u30B9\u3059\u308B",root_folder:"\u30EB\u30FC\u30C8\u30D5\u30A9\u30EB\u30C0",limit:"\u5236\u9650",order_by:"\u9806\u5E8F\u4ED8\u3051",order_direction:"\u9806\u5E8F\u4ED8\u3051\u306E\u65B9\u5411",proxy:"\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8",status:"\u72B6\u614B",Edit:"\u7DE8\u96C6\u8005",Delete:"\u524A\u9664\u3059\u308B",Cancel:"\u30AD\u30E3\u30F3\u30BB\u30EB",select:"\u9078\u629E\u3059\u308B",Native:"\u30CD\u30A4\u30C6\u30A3\u30D6",AliDrive:"\u963F\u91CC\u96F2\u76E4","Input password":"\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",Ok:"OK",Copied:"\u30B3\u30D4\u30FC\u3055\u308C\u305F",Size:"\u30B5\u30A4\u30BA",size:"\u30B5\u30A4\u30BA",Modified:"\u6642\u9593\u3092\u4FEE\u6B63\u3059\u308B",updated_at:"\u4FEE\u6B63\u6642\u9593",created_at:"\u4F5C\u6210\u6642\u9593",ASC:"\u6607\u9806",DESC:"\u964D\u9806",Name:"\u30D5\u30A1\u30A4\u30EB\u540D",Download:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9",Home:"\u30DB\u30FC\u30E0",fold:"\u6298\u308A\u305F\u305F\u3080",unfold:"\u5C55\u958B\u3059\u308B","Already the first page":"\u3082\u30461\u30DA\u30FC\u30B8\u76EE\u3060","Already the last page":"\u3082\u3046\u6700\u540E\u306E\u30DA\u30FC\u30B8\u3060","Back Home":"\u8FD4\u56DE\u9996\u9875","Input is illegal":"\u5165\u529B\u306F\u9055\u6CD5","Enjoy the music":"\u97F3\u697D\u3092\u697D\u3057\u3080",unknown:"\u672A\u77E5",Path:"\u30D1\u30B9",Password:"\u30D1\u30B9\u30EF\u30FC\u30C9","Hide Files(split by ,)":"\u96A0\u3057\u30D5\u30A1\u30A4\u30EB/\u30D5\u30A9\u30EB\u30C0(\u8AAD\u70B9\u3067\u533A\u5207\u3089\u308C\u3066\u3044\u308B)",operation:"\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3",path:"\u30D1\u30B9",hide:"\u96A0\u3059","refresh token":"\u5237\u65B0\u30C8\u30FC\u30AF\u30F3","root folder file_id":"\u30EB\u30FC\u30C8\u30C7\u30A3\u30EC\u30AF\u30C8\u30EAfile_id","root folder path":"\u30EB\u30FC\u30C8\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u30D1\u30B9",zone:"\u30BE\u30FC\u30F3","onedrive type":"Onedrive\u30BF\u30A4\u30D7","client id":"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8ID","client secret":"\u30AF\u30E9\u30A4\u30A2\u30F3\u30C8\u30AD\u30FC","redirect uri":"\u30EA\u30C0\u30A4\u30EC\u30AF\u30C8URI","site url":"sharepoint\u30B5\u30A4\u30C8URL","site id":"sharepoint\u30B5\u30A4\u30C8ID",index:"\u30A4\u30F3\u30C7\u30C3\u30AF\u30B9","for sort":"\u30BD\u30FC\u30C8\u306B\u4F7F\u3046","icon color":"\u30A2\u30A4\u30B3\u30F3\u306E\u8272","text types":"\u30C6\u30AD\u30B9\u30C8\u30BF\u30A4\u30D7","hide file":"\u30D5\u30A1\u30A4\u30EB\u3092\u96A0\u3059","music cover":"\u97F3\u697D\u30AB\u30D0\u30FC","site beian":"\u30B5\u30A4\u30C8\u767B\u9332",ERROR:"\u30A8\u30E9\u30FC","Alist Manage":"Alist\u7BA1\u7406",list:"\u30EA\u30B9\u30C8",grid:"\u30B0\u30EA\u30C3\u30C9","switch to layout view":"{{layout}}\u30EC\u30A4\u30A2\u30A6\u30C8\u306B\u5207\u308A\u66FF\u3048\u307E\u3059","Copy direct link":"\u76F4\u63A5\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC","wrong password":"\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u9593\u9055\u3063\u3066\u3044\u307E\u3059","clear buffer":"\u30D0\u30C3\u30D5\u30A1\u3092\u30AF\u30EA\u30A2",logout:"\u30ED\u30B0\u30A2\u30A6\u30C8","markdown theme":"Markdown\u30C6\u30FC\u30DE","path not found":"\u30D1\u30B9\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093","customize head":"\u30D8\u30C3\u30C0\u30FC\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA","customize body":"\u30AB\u30B9\u30BF\u30E0body","Customize head, placed at the beginning of the head":"\u30D8\u30C3\u30C0\u30FC\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3057\u307E\u3059\u3002\u30D8\u30C3\u30C0\u30FC\u306E\u5148\u982D\u306B\u914D\u7F6E\u3055\u308C\u307E\u3059","Customize script, placed at the end of the body":"body\u3092\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA\u3057\u3001body\u306E\u7D42\u308F\u308A\u306B\u7F6E\u304F","autoplay video":"\u30D3\u30C7\u30AA\u3092\u81EA\u52D5\u518D\u751F","autoplay audio":"\u30AA\u30FC\u30C7\u30A3\u30AA\u3092\u81EA\u52D5\u518D\u751F","check parent folder":"\u89AA\u30D5\u30A9\u30EB\u30C0\u3092\u78BA\u8A8D",animation:"\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3","when there are a lot of files, the animation will freeze when opening":"\u30D5\u30A1\u30A4\u30EB\u304C\u591A\u3044\u5834\u5408\u3001\u958B\u304F\u6642\u306B\u30A2\u30CB\u30E1\u30FC\u30B7\u30E7\u30F3\u304C\u51CD\u7D50\u3057\u307E\u3059",Deprecated:"\u6642\u4EE3\u9045\u308C","Multiple select":"\u8907\u6570\u9078\u629E",Operations:"\u64CD\u4F5C\u3059\u308B","Can't copy folder direact link":"\u30D5\u30A9\u30EB\u30C0\u306E\u30C0\u30A4\u30EC\u30AF\u30C8\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC\u3067\u304D\u307E\u305B\u3093","Copy link":"\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC","Sort by":"\u9078\u5225","No file selected":"\u30D5\u30A1\u30A4\u30EB\u304C\u9078\u629E\u3055\u308C\u3066\u3044\u307E\u305B\u3093","Not support no-cors package download":"CORS\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u3066\u3044\u306A\u3044\u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306F\u30B5\u30DD\u30FC\u30C8\u3055\u308C\u3066\u3044\u307E\u305B\u3093",Downloading:"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u4E2D","Fetching directory structure":"\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u69CB\u9020\u3092\u53D6\u5F97\u4E2D","Downloading files, don't close or refresh the page":"\u30D5\u30A1\u30A4\u30EB\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u4E2D\u3001\u30DA\u30FC\u30B8\u3092\u9589\u3058\u308B\u304B\u30EA\u30D5\u30EC\u30C3\u30B7\u30E5\u3057\u306A\u3044\u3067\u304F\u3060\u3055\u3044","Success to download":"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306B\u6210\u529F\u3057\u307E\u3057\u305F","Failed to download":"\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u306B\u5931\u6557\u3057\u307E\u3057\u305F","Leaving the page will interrupt the download":"\u30DA\u30FC\u30B8\u3092\u96E2\u308C\u308B\u3068\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u304C\u4E2D\u65AD\u3055\u308C\u307E\u3059",Frontend:"\u30D5\u30ED\u30F3\u30C8\u30A8\u30F3\u30C9",Backend:"\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9","Package download {{number}} files":"\u30D1\u30C3\u30B1\u30FC\u30B8\u306E{{number}}\u30D5\u30A1\u30A4\u30EB\u3092\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9","Copy links of {{number}} files":"{{number}}\u30D5\u30A1\u30A4\u30EB\u306E\u30EA\u30F3\u30AF\u3092\u30B3\u30D4\u30FC","Upload file":"\u30D5\u30A1\u30A4\u30EB\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9",Uploading:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u4E2D",upload:"\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9","Allow visitors to upload":"\u8A2A\u554F\u8005\u304C\u30D5\u30A1\u30A4\u30EB\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3067\u304D\u308B\u3088\u3046\u306B\u3059\u308B","Back-end processing":"\u30D0\u30C3\u30AF\u30A8\u30F3\u30C9\u51E6\u7406","Confirmation!":"\u78BA\u8A8D\uFF01",'Are you sure you want to delete "{{name}}" ?':"\u300C{{name}}\u300D\u3092\u524A\u9664\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F",Confirm:"\u78BA\u8A8D","Delete {{number}} files":"{{number}}\u30D5\u30A1\u30A4\u30EB\u3092\u524A\u9664",Copy:"\u30B3\u30D4\u30FC",Paste:"\u30DA\u30FC\u30B9\u30C8","New folder":"\u65B0\u3057\u3044\u30D5\u30A9\u30EB\u30C0","Folder name":"\u30D5\u30A9\u30EB\u30C0\u540D",Rename:"\u540D\u524D\u3092\u5909\u66F4","New name":"\u65B0\u3057\u3044\u540D\u524D",Move:"\u79FB\u52D5","Select folder":"\u30D5\u30A9\u30EB\u30C0\u3092\u9078\u629E","Move {{number}} files":"{{number}}\u30D5\u30A1\u30A4\u30EB\u3092\u79FB\u52D5","Please select a folder":"\u30D5\u30A9\u30EB\u30C0\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044","Copy {{number}} files":"{{number}}\u30D5\u30A1\u30A4\u30EB\u3092\u30B3\u30D4\u30FC","hide files, support RegExp, one per line":"\u30D5\u30A1\u30A4\u30EB\u3092\u96A0\u3059\u3001\u6B63\u898F\u8868\u73FE\u3092\u30B5\u30DD\u30FC\u30C8\u3057\u30011\u884C\u306B1\u3064",Install:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB",Installing:"\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u4E2D","Backup & Restore":"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7\u3068\u5FA9\u5143",Backup:"\u30D0\u30C3\u30AF\u30A2\u30C3\u30D7",Restore:"\u5FA9\u5143","Virtual path":"\u4EEE\u60F3\u30D1\u30B9"},K={code:"jp",text:"\u65E5\u672C\u8A9E"};var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$,config:K});const V={"Welcome to React":"\u6B22\u8FCE\u4F7F\u7528React\u3002","Go to page":"\u524D\u5F80{{page}}","Change language":"\u66F4\u6539\u8BED\u8A00","Switch to color mode":"\u5207\u6362\u5230{{color}}\u6A21\u5F0F",dark:"\u6DF1\u8272",light:"\u6D45\u8272",home:"\u9996\u9875",Manage:"\u7BA1\u7406",Settings:"\u8BBE\u7F6E",Accounts:"\u8D26\u53F7",Meta:"\u5143\u4FE1\u606F",login:"\u767B\u5F55",password:"\u5BC6\u7801",success:"\u6210\u529F",exit:"\u9000\u51FA",Save:"\u4FDD\u5B58",title:"\u6807\u9898",version:"\u7248\u672C",public:"\u516C\u5F00",private:"\u79C1\u6709",readonly:"\u53EA\u8BFB",Add:"\u6DFB\u52A0",Refresh:"\u5237\u65B0",name:"\u540D\u79F0",type:"\u7C7B\u578B",username:"\u7528\u6237\u540D",refresh_token:"\u5237\u65B0\u4EE4\u724C",access_token:"\u8BBF\u95EE\u4EE4\u724C",root_folder:"\u6839\u6587\u4EF6\u5939",limit:"\u9650\u5236",order_by:"\u6392\u5E8F",order_direction:"\u6392\u5E8F\u65B9\u5411",proxy:"\u4EE3\u7406",status:"\u72B6\u6001",Edit:"\u7F16\u8F91",Delete:"\u5220\u9664",Cancel:"\u53D6\u6D88",select:"\u9009\u62E9",Native:"\u672C\u5730",AliDrive:"\u963F\u91CC\u4E91\u76D8","Input password":"\u8BF7\u8F93\u5165\u5BC6\u7801",Ok:"\u786E\u5B9A",Copied:"\u5DF2\u590D\u5236",Size:"\u5927\u5C0F",size:"\u5927\u5C0F",Modified:"\u4FEE\u6539\u65F6\u95F4",updated_at:"\u4FEE\u6539\u65F6\u95F4",created_at:"\u521B\u5EFA\u65F6\u95F4",ASC:"\u5347\u5E8F",DESC:"\u964D\u5E8F",Name:"\u6587\u4EF6\u540D",Download:"\u4E0B\u8F7D",Home:"\u9996\u9875",fold:"\u6298\u53E0",unfold:"\u5C55\u5F00","Already the first page":"\u5DF2\u7ECF\u662F\u7B2C\u4E00\u9875\u4E86","Already the last page":"\u5DF2\u7ECF\u662F\u6700\u540E\u4E00\u9875\u4E86","Back Home":"\u8FD4\u56DE\u9996\u9875","Input is illegal":"\u8F93\u5165\u4E0D\u5408\u6CD5","Enjoy the music":"\u4EAB\u53D7\u97F3\u4E50",unknown:"\u672A\u77E5",Path:"\u8DEF\u5F84",Password:"\u5BC6\u7801","Hide Files(split by ,)":"\u9690\u85CF\u6587\u4EF6/\u6587\u4EF6\u5939(\u4EE5\u9017\u53F7\u5206\u9694)",operation:"\u64CD\u4F5C",path:"\u8DEF\u5F84",hide:"\u9690\u85CF","refresh token":"\u5237\u65B0\u4EE4\u724C","root folder file_id":"\u6839\u76EE\u5F55file_id","root folder path":"\u6839\u76EE\u5F55\u8DEF\u5F84",zone:"\u533A\u57DF","onedrive type":"Onedrive\u7C7B\u578B","client id":"\u5BA2\u6237\u7AEFID","client secret":"\u5BA2\u6237\u7AEF\u5BC6\u94A5","redirect uri":"\u91CD\u5B9A\u5411URI","site url":"sharepoint\u7AD9\u70B9URL","site id":"sharepoint\u7AD9\u70B9ID",index:"\u7D22\u5F15","for sort":"\u7528\u4E8E\u6392\u5E8F","icon color":"\u56FE\u6807\u989C\u8272","text types":"\u6587\u672C\u7C7B\u578B","hide files":"\u9690\u85CF\u6587\u4EF6","music cover":"\u97F3\u4E50\u5C01\u9762","site beian":"\u7AD9\u70B9\u5907\u6848",ERROR:"\u9519\u8BEF","Alist Manage":"Alist\u7BA1\u7406",list:"\u5217\u8868",grid:"\u7F51\u683C","switch to layout view":"\u5207\u6362\u4E3A{{layout}}\u5E03\u5C40","Copy direct link":"\u590D\u5236\u76F4\u94FE","wrong password":"\u5BC6\u7801\u9519\u8BEF","clear buffer":"\u6E05\u9664\u7F13\u5B58",logout:"\u6CE8\u9500","markdown theme":"Markdown\u4E3B\u9898","path not found":"\u8DEF\u5F84\u4E0D\u5B58\u5728","customize head":"\u81EA\u5B9A\u4E49\u5934\u90E8","customize body":"\u81EA\u5B9A\u4E49body","Customize head, placed at the beginning of the head":"\u81EA\u5B9A\u4E49\u5934\u90E8\uFF0C\u653E\u7F6E\u5728head\u5F00\u59CB\u5904","Customize script, placed at the end of the body":"\u81EA\u5B9A\u4E49body\uFF0C\u653E\u7F6E\u5728body\u7ED3\u675F\u5904","autoplay video":"\u81EA\u52A8\u64AD\u653E\u89C6\u9891","autoplay audio":"\u81EA\u52A8\u64AD\u653E\u97F3\u9891","check parent folder":"\u68C0\u67E5\u7236\u6587\u4EF6\u5939\u5BC6\u7801",animation:"\u52A8\u753B","when there are a lot of files, the animation will freeze when opening":"\u5F53\u6587\u4EF6\u6570\u91CF\u8F83\u591A\u65F6\uFF0C\u6253\u5F00\u6587\u4EF6\u65F6\u52A8\u753B\u4F1A\u5361\u987F",Deprecated:"\u5DF2\u8FC7\u65F6","Multiple select":"\u591A\u9009",Operations:"\u64CD\u4F5C","Can't copy folder direact link":"\u4E0D\u80FD\u590D\u5236\u6587\u4EF6\u5939\u76F4\u94FE","Copy link":"\u590D\u5236\u76F4\u94FE","Sort by":"\u6392\u5E8F","No file selected":"\u672A\u9009\u62E9\u6587\u4EF6","Not support no-cors package download":"\u4E0D\u652F\u6301\u4E0D\u5141\u8BB8\u8DE8\u57DF\u7684\u6587\u4EF6\u6253\u5305\u4E0B\u8F7D",Downloading:"\u6B63\u5728\u4E0B\u8F7D","Fetching directory structure":"\u6B63\u5728\u83B7\u53D6\u76EE\u5F55\u7ED3\u6784","Downloading files, don't close or refresh the page":"\u6B63\u5728\u4E0B\u8F7D\u6587\u4EF6\uFF0C\u8BF7\u52FF\u5173\u95ED\u6216\u5237\u65B0\u9875\u9762","Success to download":"\u4E0B\u8F7D\u6210\u529F","Failed to download":"\u4E0B\u8F7D\u5931\u8D25","Leaving the page will interrupt the download":"\u79BB\u5F00\u9875\u9762\u4F1A\u4E2D\u65AD\u4E0B\u8F7D",Frontend:"\u524D\u7AEF",Backend:"\u540E\u7AEF","Package download {{number}} files":"\u6253\u5305\u4E0B\u8F7D {{number}} \u4E2A\u6587\u4EF6","Copy links of {{number}} files":"\u590D\u5236 {{number}} \u4E2A\u6587\u4EF6\u7684\u76F4\u94FE","Upload file":"\u4E0A\u4F20\u6587\u4EF6",Uploading:"\u6B63\u5728\u4E0A\u4F20",upload:"\u4E0A\u4F20","Allow visitors to upload":"\u5141\u8BB8\u8BBF\u5BA2\u4E0A\u4F20","Back-end processing":"\u540E\u7AEF\u5904\u7406\u4E2D","Confirmation!":"\u786E\u8BA4\uFF01",'Are you sure you want to delete "{{name}}" ?':"\u786E\u5B9A\u8981\u5220\u9664\u201C{{name}}\u201D\u5417\uFF1F",Confirm:"\u786E\u8BA4","Delete {{number}} files":"\u5220\u9664 {{number}} \u4E2A\u6587\u4EF6",Copy:"\u590D\u5236",Paste:"\u7C98\u8D34","New folder":"\u65B0\u5EFA\u6587\u4EF6\u5939","Folder name":"\u6587\u4EF6\u5939\u540D\u79F0",Rename:"\u91CD\u547D\u540D","New name":"\u65B0\u540D\u79F0",Move:"\u79FB\u52A8","Select folder":"\u9009\u62E9\u6587\u4EF6\u5939","Move {{number}} files":"\u79FB\u52A8 {{number}} \u4E2A\u6587\u4EF6","Please select a folder":"\u8BF7\u9009\u62E9\u4E00\u4E2A\u6587\u4EF6\u5939","Copy {{number}} files":"\u590D\u5236 {{number}} \u4E2A\u6587\u4EF6","hide files, support RegExp, one per line":"\u9690\u85CF\u6587\u4EF6\uFF0C\u652F\u6301\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u6BCF\u884C\u4E00\u4E2A",Install:"\u5B89\u88C5",Installing:"\u5B89\u88C5\u4E2D","Backup & Restore":"\u5907\u4EFD\u4E0E\u8FD8\u539F",Backup:"\u5907\u4EFD",Restore:"\u8FD8\u539F","Virtual path":"\u865A\u62DF\u8DEF\u5F84","Send to Aria2":"\u53D1\u9001\u5230Aria2","Send {{number}} links to Aria2":"\u53D1\u9001 {{number}} \u4E2A\u94FE\u63A5\u5230Aria2","Can't download folder with Aria2":"Aria2\u4E0D\u80FD\u4E0B\u8F7D\u6587\u4EF6\u5939",Sent:"\u5DF2\u53D1\u9001"},G={code:"zh",text:"\u7B80\u4F53\u4E2D\u6587"};var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:V,config:G});const J={"./locales/en.ts":U,"./locales/jp.ts":W,"./locales/zh.ts":q},E={};Object.values(J).forEach(t=>{E[t.config.code]={translation:t.default}});let l=navigator.language.split(/[-_]/)[0];E[l]||(l="en");b.use(k).init({resources:E,lng:l,interpolation:{escapeValue:!1}});const B=window.ALIST.cdn;window.__dynamicImportHandler__=function(t){return B+"assets/"+t};window.__dynamicImportPreload__=function(t){return t.map(a=>B+a)};v.render(e.createElement(e.StrictMode,null,e.createElement(S,{initialColorMode:d.config.initialColorMode}),e.createElement(R,{theme:d},e.createElement(O,null))),document.getElementById("root"));export{s as _,Q as __vite_legacy_guard,U as a,W as b,q as c};
