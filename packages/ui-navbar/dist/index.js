function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var t=require("@chakra-ui/core"),n=e(require("next/link")),l=e(require("react"));module.exports=function(){var e=t.useColorMode().colorMode;return l.createElement(t.Box,{bg:{light:"white",dark:"gray.800"}[e]},l.createElement(t.Box,{p:4,color:{light:"gray.800",dark:"gray.100"}[e],shadow:"lg",pos:"relative"},l.createElement(t.Box,{maxW:"xl",mx:"auto",w:"full"},l.createElement(t.Stack,{isInline:!0,spacing:4,align:"center",justifyContent:"space-between",w:"full"},l.createElement(t.Box,null,l.createElement(t.Stack,{isInline:!0,spacing:4,align:"center",fontWeight:"semibold"},[{id:"home",label:"Home",href:"/"}].map(function(e){return l.createElement(t.Box,{key:e.id},l.createElement(n,{href:e.href},l.createElement(t.Link,null,e.label)))}),[{id:"feeds",label:"Feeds",href:"/feeds"},{id:"myAccount",label:"My Account",href:"/my-account"}].map(function(e){return l.createElement(t.Box,{key:e.id},l.createElement(n,{href:e.href},l.createElement(t.Link,null,e.label)))}))),l.createElement(t.Box,null,l.createElement(t.Stack,{isInline:!0,spacing:4,align:"center"},l.createElement(t.Box,null,l.createElement(n,{href:"/api/auth/signin"},l.createElement(t.Button,{onClick:function(e){e.preventDefault()}},"Sign In"))),l.createElement(t.Box,null,l.createElement(n,{href:"/api/auth/signout"},l.createElement(t.Button,{onClick:function(e){e.preventDefault()}},"Sign Out")))))))))};
//# sourceMappingURL=index.js.map
