import{r as e,R as t,B as o,C as r,S as a,a as i,b as n,e as l,w as d,m as s,i as c,c as p,d as u,f as m,g as h}from"./vendor.630a5f1f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const g={},f=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`https://cdn.jsdelivr.net/gh/Xhofe/alist-web@cdn/v2/44d5c39/${e}`)in g)return;g[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},y=e.exports.lazy((()=>f((()=>import("./index.7505b6e9.js").then((function(e){return e.i}))),["assets/index.7505b6e9.js","assets/index.556c97ca.css","assets/vendor.630a5f1f.js","assets/index.e5c5835c.js"]))),w=e.exports.lazy((()=>f((()=>import("./index.16f4c4b5.js")),["assets/index.16f4c4b5.js","assets/index.e5c5835c.js","assets/vendor.630a5f1f.js","assets/index.esm.f5e158f5.js","assets/useTitle.6c86829a.js"])));function b(){return t.createElement("div",{className:"App"},t.createElement(o,null,t.createElement(e.exports.Suspense,{fallback:t.createElement(r,{h:"100vh"},t.createElement(a,{color:"teal.300",size:"xl"}))},t.createElement(i,null,t.createElement(n,{path:"/@manage/"},t.createElement(w,null)),t.createElement(n,{path:"*"},t.createElement(y,null))))))}const k=l({config:{initialColorMode:"dark",useSystemColorMode:!0},styles:{global:e=>({".chakra-ui-light":{bgColor:"#F4F4F4"},"html,body,#root,.App":{margin:0,padding:0},".test":{bg:s("white","gray.800")(e)},".md":{bg:"transparent !important"},".react-jinke-music-player-main svg":{display:"unset"},".react-jinke-music-player-main.dark-theme .react-jinke-music-player-mobile":{bg:"gray.800"},".react-jinke-music-player-main.dark-theme .music-player-panel":{bg:"transparent"},".react-viewer img":{maxWidth:"unset"},".md-previewOnly img":{display:"unset"},".md .default-theme img":{border:"none"},".md .github-theme img":{bgColor:"transparent"}})}},d({colorScheme:"green"}));var v=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{"Welcome to React":"Welcome to React.","Go to page":"Go to {{page}}","Change language":"Change language","Switch to color mode":"Switch to {{color}} mode",dark:"dark",light:"light",home:"home","Powered by project":"Powered by {{project}}",name:"Name",size:"Size",updated_at:"Modified","switch to layout view":"Switch to {{layout}} view"},config:{code:"en",text:"English"}});var _=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{"Welcome to React":"Reactへようこそ。","Go to page":"{{page}}に移動します","Powered by project":"{{project}}によって駆動","Change language":"言語を変えてください","Switch to color mode":"{{color}}モードに切り替えます",dark:"暗色",light:"明色",home:"表紙",Manage:"管理",Settings:"設定",Accounts:"アカウント",Meta:"メタ情報",login:"ログイン",password:"パスワード",success:"成功",exit:"終了する",save:"保存する",title:"タイトル",version:"バージョン",public:"オープン",private:"プライベート",readonly:"読むだけ",add:"追加",refresh:"リフレッシュ",name:"名前",type:"タイプ",username:"ユーザー名",refresh_token:"リフレッシュトークン",access_token:"トークンにアクセスする",root_folder:"ルートフォルダ",limit:"制限",order_by:"順序付け",order_direction:"順序付けの方向",proxy:"エージェント",status:"状態",edit:"編集者",delete:"削除する",cancle:"キャンセル",select:"選択する",Native:"ネイティブ",AliDrive:"阿里雲盤","input password":"パスワードを入力してください",ok:"OK",copied:"コピーされた",Size:"サイズ",size:"サイズ",Modified:"時間を修正する",updated_at:"修正時間",created_at:"作成時間",ASC:"昇順",DESC:"降順",Name:"ファイル名",Download:"ダウンロード",Home:"表紙",fold:"折りたたむ",unfold:"展開する","Already the first page":"もう1ページ目だ","Already the last page":"もう最后のページだ","Back Home":"返回首页","Input is illegal":"入力は違法","Enjoy the music":"音楽を楽しむ",unknown:"未知",Path:"パス",Password:"パスワード","Hide Files(split by ,)":"隠しファイル/フォルダ(読点で区切られている)",operation:"オペレーション",path:"パス",hide:"隠す","refresh token":"刷新トークン","root folder file_id":"ルートディレクトリfile_id","root folder path":"ルートディレクトリパス",zone:"ゾーン","onedrive type":"Onedriveタイプ","client id":"クライアントID","client secret":"クライアントキー","redirect uri":"リダイレクトURI","site url":"sharepointサイトURL","site id":"sharepointサイトID",index:"インデックス","for sort":"ソートに使う","icon color":"アイコンの色","text types":"テキストタイプ","hide readme file":"readmeファイルを隠す","music cover":"音楽カバー","site beian":"サイト登録",ERROR:"エラー","Alist Manage":"Alist管理",list:"リスト",grid:"グリッド","switch to layout view":"{{layout}}レイアウトに切り替えます","Copy direct link":"直接リンクをコピー","wrong password":"パスワードが間違っています","clear buffer":"バッファをクリア",logout:"ログアウト","markdown theme":"Markdownテーマ","path not found":"パスが見つかりません","customize head":"ヘッダーをカスタマイズ","customize body":"カスタムbody","Customize head, placed at the beginning of the head":"ヘッダーをカスタマイズします。ヘッダーの先頭に配置されます","Customize script, placed at the end of the body":"bodyをカスタマイズし、bodyの終わりに置く","autoplay video":"ビデオを自動再生","autoplay audio":"オーディオを自動再生","check parent folder":"親フォルダを確認",animation:"アニメーション","when there are a lot of files, the animation will freeze when opening":"ファイルが多い場合、開く時にアニメーションが凍結します",Deprecated:"時代遅れ","Multiple select":"複数選択",Operations:"操作する","Can't copy folder direact link":"フォルダのダイレクトリンクをコピーできません","Copy link":"リンクをコピー","Sort by":"選別","No file selected":"ファイルが選択されていません","Not support no-cors package download":"CORSをサポートしていないパッケージのダウンロードはサポートされていません",Downloading:"ダウンロード中","Fetching directory structure":"ディレクトリ構造を取得中","Downloading files, don't close or refresh the page":"ファイルをダウンロード中、ページを閉じるかリフレッシュしないでください","Success to download":"ダウンロードに成功しました","Failed to download":"ダウンロードに失敗しました","Leaving the page will interrupt the download":"ページを離れるとダウンロードが中断されます",Frontend:"フロントエンド",Backend:"バックエンド","Download {{number}} files":"{{number}}ファイルをダウンロード","Copy links of {{number}} files":"{{number}}ファイルのリンクをコピー","Upload file":"ファイルをアップロード",Uploading:"アップロード中",upload:"アップロード","Allow visitors to upload":"訪問者がファイルをアップロードできるようにする"},config:{code:"jp",text:"日本語"}});var S=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:{"Welcome to React":"欢迎使用React。","Go to page":"前往{{page}}","Powered by project":"由{{project}}驱动","Change language":"更改语言","Switch to color mode":"切换到{{color}}模式",dark:"深色",light:"浅色",home:"首页",Manage:"管理",Settings:"设置",Accounts:"账号",Meta:"元信息",login:"登录",password:"密码",success:"成功",exit:"退出",save:"保存",title:"标题",version:"版本",public:"公开",private:"私有",readonly:"只读",add:"添加",refresh:"刷新",name:"名称",type:"类型",username:"用户名",refresh_token:"刷新令牌",access_token:"访问令牌",root_folder:"根文件夹",limit:"限制",order_by:"排序",order_direction:"排序方向",proxy:"代理",status:"状态",edit:"编辑",delete:"删除",cancle:"取消",select:"选择",Native:"本地",AliDrive:"阿里云盘","input password":"请输入密码",ok:"确定",copied:"已复制",Size:"大小",size:"大小",Modified:"修改时间",updated_at:"修改时间",created_at:"创建时间",ASC:"升序",DESC:"降序",Name:"文件名",Download:"下载",Home:"首页",fold:"折叠",unfold:"展开","Already the first page":"已经是第一页了","Already the last page":"已经是最后一页了","Back Home":"返回首页","Input is illegal":"输入不合法","Enjoy the music":"享受音乐",unknown:"未知",Path:"路径",Password:"密码","Hide Files(split by ,)":"隐藏文件/文件夹(以逗号分隔)",operation:"操作",path:"路径",hide:"隐藏","refresh token":"刷新令牌","root folder file_id":"根目录file_id","root folder path":"根目录路径",zone:"区域","onedrive type":"Onedrive类型","client id":"客户端ID","client secret":"客户端密钥","redirect uri":"重定向URI","site url":"sharepoint站点URL","site id":"sharepoint站点ID",index:"索引","for sort":"用于排序","icon color":"图标颜色","text types":"文本类型","hide readme file":"隐藏readme文件","music cover":"音乐封面","site beian":"站点备案",ERROR:"错误","Alist Manage":"Alist管理",list:"列表",grid:"网格","switch to layout view":"切换为{{layout}}布局","Copy direct link":"复制直链","wrong password":"密码错误","clear buffer":"清除缓存",logout:"注销","markdown theme":"Markdown主题","path not found":"路径不存在","customize head":"自定义头部","customize body":"自定义body","Customize head, placed at the beginning of the head":"自定义头部，放置在head开始处","Customize script, placed at the end of the body":"自定义body，放置在body结束处","autoplay video":"自动播放视频","autoplay audio":"自动播放音频","check parent folder":"检查父文件夹密码",animation:"动画","when there are a lot of files, the animation will freeze when opening":"当文件数量较多时，打开文件时动画会卡顿",Deprecated:"已过时","Multiple select":"多选",Operations:"操作","Can't copy folder direact link":"不能复制文件夹直链","Copy link":"复制直链","Sort by":"排序","No file selected":"未选择文件","Not support no-cors package download":"不支持不允许跨域的文件打包下载",Downloading:"正在下载","Fetching directory structure":"正在获取目录结构","Downloading files, don't close or refresh the page":"正在下载文件，请勿关闭或刷新页面","Success to download":"下载成功","Failed to download":"下载失败","Leaving the page will interrupt the download":"离开页面会中断下载",Frontend:"前端",Backend:"后端","Download {{number}} files":"下载{{number}}个文件","Copy links of {{number}} files":"复制{{number}}个文件的直链","Upload file":"上传文件",Uploading:"正在上传",upload:"上传","Allow visitors to upload":"允许访客上传"},config:{code:"zh",text:"简体中文"}});const E={"./locales/en.ts":v,"./locales/jp.ts":_,"./locales/zh.ts":S},C={};Object.values(E).forEach((e=>{C[e.config.code]={translation:e.default}}));let z=navigator.language.split(/[-_]/)[0];C[z]||(z="en"),c.use(p).init({resources:C,lng:z,interpolation:{escapeValue:!1}}),u.render(t.createElement(t.StrictMode,null,t.createElement(m,{initialColorMode:k.config.initialColorMode}),t.createElement(h,{theme:k},t.createElement(b,null))),document.getElementById("root"));export{f as _,v as a,_ as b,S as c};
