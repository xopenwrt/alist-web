;(function(){function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable;})),keys.push.apply(keys,symbols);}return keys;}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach(function(key){_defineProperty(target,key,source[key]);}):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key));});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||_iterableToArrayLimit(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest();}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o,minLen){if(!o)return;if(typeof o==="string")return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==="Object"&&o.constructor)n=o.constructor.name;if(n==="Map"||n==="Set")return Array.from(o);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);}function _arrayLikeToArray(arr,len){if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++){arr2[i]=arr[i];}return arr2;}function _iterableToArrayLimit(arr,i){var _i=arr==null?null:typeof Symbol!=="undefined"&&arr[Symbol.iterator]||arr["@@iterator"];if(_i==null)return;var _arr=[];var _n=true;var _d=false;var _s,_e;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"]!=null)_i["return"]();}finally{if(_d)throw _e;}}return _arr;}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr;}System.register(['./vendor-legacy.75b6488b.js','./index.esm-legacy.fe6c3c2e.js','./form-item-legacy.deb60478.js','./index-legacy.5c7fb3bb.js'],function(exports){'use strict';var useToast,useTranslation,React,useDisclosure,react,Box,HStack,Button,Table,Thead,Tr,Th,Tbody,Td,Popover,PopoverTrigger,PopoverContent,PopoverArrow,PopoverCloseButton,PopoverHeader,PopoverBody,Text,Modal,ModalOverlay,ModalContent,ModalHeader,ModalCloseButton,ModalBody,VStack,ModalFooter,admin,FormItem;return{setters:[function(module){useToast=module.h;useTranslation=module.j;React=module.R;useDisclosure=module.k;react=module.r;Box=module.n;HStack=module.p;Button=module.G;Table=module.aC;Thead=module.aD;Tr=module.aE;Th=module.aF;Tbody=module.aG;Td=module.aH;Popover=module.aI;PopoverTrigger=module.aJ;PopoverContent=module.aK;PopoverArrow=module.aL;PopoverCloseButton=module.aM;PopoverHeader=module.aN;PopoverBody=module.aO;Text=module.E;Modal=module.W;ModalOverlay=module.X;ModalContent=module.Y;ModalHeader=module.Z;ModalCloseButton=module._;ModalBody=module.$;VStack=module.V;ModalFooter=module.a0;},function(module){admin=module.b;},function(module){FormItem=module.F;},function(){}],execute:function execute(){var EmptyMeta={id:0,path:"",password:"",hide:"",upload:false,only_shows:"",readme:""};var Metas=exports('default',function(){var toast=useToast();var _useTranslation=useTranslation(),t=_useTranslation.t;var _React$useState=React.useState([]),_React$useState2=_slicedToArray(_React$useState,2),metas=_React$useState2[0],setMetas=_React$useState2[1];var _React$useState3=React.useState(EmptyMeta),_React$useState4=_slicedToArray(_React$useState3,2),currentMeta=_React$useState4[0],setCurrentMeta=_React$useState4[1];var _React$useState5=React.useState(false),_React$useState6=_slicedToArray(_React$useState5,2),isEdit=_React$useState6[0],setIsEdit=_React$useState6[1];var _React$useState7=React.useState(false),_React$useState8=_slicedToArray(_React$useState7,2),loading=_React$useState8[0],setLoading=_React$useState8[1];var editDisclosure=useDisclosure();var refreshMetas=function refreshMetas(){setLoading(true);admin.get("metas").then(function(resp){setLoading(false);var res=resp.data;if(res.code!==200){toast({title:t(res.message),status:"error",duration:3e3,isClosable:true});}else{setMetas(res.data);}});};react.exports.useEffect(function(){refreshMetas();},[]);return/* @__PURE__ */React.createElement(Box,{w:"full"},/* @__PURE__ */React.createElement(HStack,null,/* @__PURE__ */React.createElement(Button,{onClick:function onClick(){setCurrentMeta(EmptyMeta);setIsEdit(false);editDisclosure.onOpen();}},t("Add")),/* @__PURE__ */React.createElement(Button,{colorScheme:"orange",isLoading:loading,onClick:function onClick(){refreshMetas();}},t("Refresh"))),/* @__PURE__ */React.createElement(Box,{overflowX:"auto"},/* @__PURE__ */React.createElement(Table,{w:"full"},/* @__PURE__ */React.createElement(Thead,null,/* @__PURE__ */React.createElement(Tr,null,/* @__PURE__ */React.createElement(Th,null,t("path")),/* @__PURE__ */React.createElement(Th,null,t("password")),/* @__PURE__ */React.createElement(Th,null,t("hide")),/* @__PURE__ */React.createElement(Th,null,t("upload")),/* @__PURE__ */React.createElement(Th,null,t("operation")))),/* @__PURE__ */React.createElement(Tbody,null,metas.map(function(meta){return/* @__PURE__ */React.createElement(Tr,{key:meta.path},/* @__PURE__ */React.createElement(Td,null,meta.path),/* @__PURE__ */React.createElement(Td,null,meta.password),/* @__PURE__ */React.createElement(Td,null,meta.hide),/* @__PURE__ */React.createElement(Td,null,meta.upload?"true":"false"),/* @__PURE__ */React.createElement(Td,{whiteSpace:"nowrap"},/* @__PURE__ */React.createElement(Button,{onClick:function onClick(){setCurrentMeta(meta);setIsEdit(true);editDisclosure.onOpen();}},t("Edit")),/* @__PURE__ */React.createElement(Popover,null,/* @__PURE__ */React.createElement(PopoverTrigger,null,/* @__PURE__ */React.createElement(Button,{ml:"1",colorScheme:"red"},t("Delete"))),/* @__PURE__ */React.createElement(PopoverContent,{whiteSpace:"normal"},/* @__PURE__ */React.createElement(PopoverArrow,null),/* @__PURE__ */React.createElement(PopoverCloseButton,null),/* @__PURE__ */React.createElement(PopoverHeader,null,t("Confirmation!")),/* @__PURE__ */React.createElement(PopoverBody,null,/* @__PURE__ */React.createElement(Text,{mb:"1"},t('Are you sure you want to delete "{{name}}" ?',{name:meta.path})),/* @__PURE__ */React.createElement(Button,{colorScheme:"red",ml:"1",onClick:function onClick(){admin.delete("meta",{params:{id:meta.id}}).then(function(resp){var res=resp.data;if(res.code!==200){toast({title:t(res.message),status:"error",duration:3e3,isClosable:true});}else{toast({title:t(res.message),status:"success",duration:3e3,isClosable:true});refreshMetas();}});}},t("Confirm")))))));})))),/* @__PURE__ */React.createElement(Modal,{isOpen:editDisclosure.isOpen,onClose:editDisclosure.onClose,size:"6xl"},/* @__PURE__ */React.createElement(ModalOverlay,null),/* @__PURE__ */React.createElement(ModalContent,null,/* @__PURE__ */React.createElement(ModalHeader,null,isEdit?t("Save"):t("Add")),/* @__PURE__ */React.createElement(ModalCloseButton,null),/* @__PURE__ */React.createElement(ModalBody,{pb:6},/* @__PURE__ */React.createElement(VStack,{spacing:"2"},[{name:"path",description:"Path",type:"string"},{name:"password",description:"Password",type:"string"},{name:"hide",description:"Hide Files(split by ,)",type:"string"},{name:"only_shows",description:"Only show files(split by ,)",type:"string"},{name:"upload",description:"Allow visitors to upload",type:"bool"},{name:"readme",description:"Readme url",type:"string"}].map(function(item){return/* @__PURE__ */React.createElement(FormItem,{key:item.name,label:item.name,type:item.type,description:item.description,value:currentMeta[item.name],required:item.name==="path",onChange:function onChange(value){if(item.type!=="bool"){setCurrentMeta(_objectSpread(_objectSpread({},currentMeta),{},_defineProperty({},item.name,value)));}else{setCurrentMeta(_objectSpread(_objectSpread({},currentMeta),{},_defineProperty({},item.name,!currentMeta[item.name])));}}});}))),/* @__PURE__ */React.createElement(ModalFooter,null,/* @__PURE__ */React.createElement(Button,{mr:3,colorScheme:"gray",onClick:editDisclosure.onClose},t("Cancel")),/* @__PURE__ */React.createElement(Button,{onClick:function onClick(){admin.post("meta/".concat(isEdit?"save":"create"),currentMeta).then(function(resp){var res=resp.data;if(res.code!==200){toast({title:t(res.message),status:"error",duration:3e3,isClosable:true});if(!isEdit){refreshMetas();editDisclosure.onClose();}}else{toast({title:t(res.message),status:"success",duration:3e3,isClosable:true});refreshMetas();editDisclosure.onClose();}});}},t("Save"))))));});}};});})();
