(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50579],{10375:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-password/classes/PasswordStorageService",function(){return r(91510)}])},91510:function(e,s,r){"use strict";r.r(s),r.d(s,{__toc:function(){return c}});var d=r(85893),n=r(92673),t=r(82643);let c=[{depth:2,value:"Implements",id:"implements"},{depth:2,value:"Constructors",id:"constructors"},{depth:3,value:"new PasswordStorageService()",id:"new-passwordstorageservice"},{depth:4,value:"Returns",id:"returns"},{depth:2,value:"Methods",id:"methods"},{depth:3,value:"generateSalt()",id:"generatesalt"},{depth:4,value:"Returns",id:"returns-1"},{depth:4,value:"Implementation of",id:"implementation-of"},{depth:4,value:"Defined in",id:"defined-in"},{depth:3,value:"hash()",id:"hash"},{depth:4,value:"Parameters",id:"parameters"},{depth:4,value:"Returns",id:"returns-2"},{depth:4,value:"Implementation of",id:"implementation-of-1"},{depth:4,value:"Defined in",id:"defined-in-1"},{depth:3,value:"hashObject()",id:"hashobject"},{depth:4,value:"Param",id:"param"},{depth:4,value:"Param",id:"param-1"},{depth:4,value:"hashObject(object, options)",id:"hashobjectobject-options"},{depth:5,value:"Type Parameters",id:"type-parameters"},{depth:5,value:"Parameters",id:"parameters-1"},{depth:5,value:"Returns",id:"returns-3"},{depth:5,value:"Implementation of",id:"implementation-of-2"},{depth:5,value:"Defined in",id:"defined-in-2"},{depth:4,value:"hashObject(object, options)",id:"hashobjectobject-options-1"},{depth:5,value:"Type Parameters",id:"type-parameters-1"},{depth:5,value:"Parameters",id:"parameters-2"},{depth:5,value:"Returns",id:"returns-4"},{depth:5,value:"Implementation of",id:"implementation-of-3"},{depth:5,value:"Defined in",id:"defined-in-3"}];function i(e){let s=Object.assign({h1:"h1",p:"p",h2:"h2",ul:"ul",li:"li",a:"a",code:"code",h3:"h3",blockquote:"blockquote",strong:"strong",h4:"h4",hr:"hr",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h5:"h5",em:"em"},(0,t.a)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.h1,{children:"Class: PasswordStorageService"}),"\n",(0,d.jsx)(s.p,{children:"Service with functions related to password security"}),"\n",(0,d.jsx)(s.h2,{id:"implements",children:"Implements"}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:(0,d.jsx)(s.a,{href:"../interfaces/PasswordStorageServiceInterface",children:(0,d.jsx)(s.code,{children:"PasswordStorageServiceInterface"})})}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"constructors",children:"Constructors"}),"\n",(0,d.jsx)(s.h3,{id:"new-passwordstorageservice",children:"new PasswordStorageService()"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"new PasswordStorageService"}),"(): ",(0,d.jsx)(s.a,{href:"PasswordStorageService",children:(0,d.jsx)(s.code,{children:"PasswordStorageService"})})]}),"\n"]}),"\n",(0,d.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"PasswordStorageService",children:(0,d.jsx)(s.code,{children:"PasswordStorageService"})})}),"\n",(0,d.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,d.jsx)(s.h3,{id:"generatesalt",children:"generateSalt()"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"generateSalt"}),"(): ",(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"string"}),">"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"Generate Salts to safeguard passwords in storage."}),"\n",(0,d.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"string"}),">"]}),"\n",(0,d.jsx)(s.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"../interfaces/PasswordStorageServiceInterface",children:(0,d.jsx)(s.code,{children:"PasswordStorageServiceInterface"})}),".",(0,d.jsx)(s.a,{href:"../interfaces/PasswordStorageServiceInterface#generatesalt",children:(0,d.jsx)(s.code,{children:"generateSalt"})})]}),"\n",(0,d.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/b1badb636a1ebad03d31d9d4e69eaab8759758df/packages/nestjs-password/src/services/password-storage.service.ts#L17",children:"packages/nestjs-password/src/services/password-storage.service.ts:17"})}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"hash",children:"hash()"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"hash"}),"(",(0,d.jsx)(s.code,{children:"password"}),", ",(0,d.jsx)(s.code,{children:"options"}),"?): ",(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.a,{href:"../interfaces/PasswordStorageInterface",children:(0,d.jsx)(s.code,{children:"PasswordStorageInterface"})}),">"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"Hash a password using a salt, if no\nwas passed, then one will be generated."}),"\n",(0,d.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameter"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"password"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"string"})}),(0,d.jsx)(s.td,{children:"Password to be hashed"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"options"}),"?"]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"PasswordHashOptionsInterface"})}),(0,d.jsx)(s.td,{children:"Hash options"})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.a,{href:"../interfaces/PasswordStorageInterface",children:(0,d.jsx)(s.code,{children:"PasswordStorageInterface"})}),">"]}),"\n",(0,d.jsx)(s.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"../interfaces/PasswordStorageServiceInterface",children:(0,d.jsx)(s.code,{children:"PasswordStorageServiceInterface"})}),".",(0,d.jsx)(s.a,{href:"../interfaces/PasswordStorageServiceInterface#hash",children:(0,d.jsx)(s.code,{children:"hash"})})]}),"\n",(0,d.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/b1badb636a1ebad03d31d9d4e69eaab8759758df/packages/nestjs-password/src/services/password-storage.service.ts#L28",children:"packages/nestjs-password/src/services/password-storage.service.ts:28"})}),"\n",(0,d.jsx)(s.hr,{}),"\n",(0,d.jsx)(s.h3,{id:"hashobject",children:"hashObject()"}),"\n",(0,d.jsx)(s.p,{children:"Hash password for an object."}),"\n",(0,d.jsx)(s.h4,{id:"param",children:"Param"}),"\n",(0,d.jsx)(s.p,{children:"An object containing the new password to hash."}),"\n",(0,d.jsx)(s.h4,{id:"param-1",children:"Param"}),"\n",(0,d.jsx)(s.p,{children:"Hash object options"}),"\n",(0,d.jsx)(s.h4,{id:"hashobjectobject-options",children:"hashObject(object, options)"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"hashObject"}),"<",(0,d.jsx)(s.code,{children:"T"}),">(",(0,d.jsx)(s.code,{children:"object"}),", ",(0,d.jsx)(s.code,{children:"options"}),"?): ",(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"Omit"}),"<",(0,d.jsx)(s.code,{children:"T"}),", ",(0,d.jsx)(s.code,{children:'"password"'}),"> & ",(0,d.jsx)(s.a,{href:"../interfaces/PasswordStorageInterface",children:(0,d.jsx)(s.code,{children:"PasswordStorageInterface"})}),">"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"Hash password for an object."}),"\n",(0,d.jsx)(s.h5,{id:"type-parameters",children:"Type Parameters"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsx)(s.tr,{children:(0,d.jsx)(s.th,{children:"Type Parameter"})})}),(0,d.jsx)(s.tbody,{children:(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"T"})," ",(0,d.jsx)(s.em,{children:"extends"})," ",(0,d.jsx)(s.a,{href:"../../ts-common/interfaces/PasswordPlainInterface",children:(0,d.jsx)(s.code,{children:"PasswordPlainInterface"})})]})})})]}),"\n",(0,d.jsx)(s.h5,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameter"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object"})}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"T"})}),(0,d.jsx)(s.td,{children:"An object containing the new password to hash."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"options"}),"?"]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"PasswordHashObjectOptionsInterface"})}),(0,d.jsx)(s.td,{children:"Hash object options"})]})]})]}),"\n",(0,d.jsx)(s.h5,{id:"returns-3",children:"Returns"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"Omit"}),"<",(0,d.jsx)(s.code,{children:"T"}),", ",(0,d.jsx)(s.code,{children:'"password"'}),"> & ",(0,d.jsx)(s.a,{href:"../interfaces/PasswordStorageInterface",children:(0,d.jsx)(s.code,{children:"PasswordStorageInterface"})}),">"]}),"\n",(0,d.jsx)(s.p,{children:"A new object with the password hashed, with salt added."}),"\n",(0,d.jsx)(s.h5,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"../interfaces/PasswordStorageServiceInterface",children:(0,d.jsx)(s.code,{children:"PasswordStorageServiceInterface"})}),".",(0,d.jsx)(s.a,{href:"../interfaces/PasswordStorageServiceInterface#hashobject",children:(0,d.jsx)(s.code,{children:"hashObject"})})]}),"\n",(0,d.jsx)(s.h5,{id:"defined-in-2",children:"Defined in"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/b1badb636a1ebad03d31d9d4e69eaab8759758df/packages/nestjs-password/src/services/password-storage.service.ts#L48",children:"packages/nestjs-password/src/services/password-storage.service.ts:48"})}),"\n",(0,d.jsx)(s.h4,{id:"hashobjectobject-options-1",children:"hashObject(object, options)"}),"\n",(0,d.jsxs)(s.blockquote,{children:["\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"hashObject"}),"<",(0,d.jsx)(s.code,{children:"T"}),">(",(0,d.jsx)(s.code,{children:"object"}),", ",(0,d.jsx)(s.code,{children:"options"}),"?): ",(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"Omit"}),"<",(0,d.jsx)(s.code,{children:"T"}),", ",(0,d.jsx)(s.code,{children:'"password"'}),"> | ",(0,d.jsx)(s.code,{children:"Omit"}),"<",(0,d.jsx)(s.code,{children:"T"}),", ",(0,d.jsx)(s.code,{children:'"password"'}),"> & ",(0,d.jsx)(s.a,{href:"../interfaces/PasswordStorageInterface",children:(0,d.jsx)(s.code,{children:"PasswordStorageInterface"})}),">"]}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:"Hash password for an object if the password property exists."}),"\n",(0,d.jsx)(s.h5,{id:"type-parameters-1",children:"Type Parameters"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsx)(s.tr,{children:(0,d.jsx)(s.th,{children:"Type Parameter"})})}),(0,d.jsx)(s.tbody,{children:(0,d.jsx)(s.tr,{children:(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"T"})," ",(0,d.jsx)(s.em,{children:"extends"})," ",(0,d.jsx)(s.a,{href:"../../ts-common/interfaces/PasswordPlainInterface",children:(0,d.jsx)(s.code,{children:"PasswordPlainInterface"})})]})})})]}),"\n",(0,d.jsx)(s.h5,{id:"parameters-2",children:"Parameters"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameter"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"object"})}),(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"Partial"}),"<",(0,d.jsx)(s.code,{children:"T"}),">"]}),(0,d.jsx)(s.td,{children:"An object containing the new password to hash."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsxs)(s.td,{children:[(0,d.jsx)(s.code,{children:"options"}),"?"]}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"PasswordHashObjectOptionsInterface"})}),(0,d.jsx)(s.td,{children:"Hash object options"})]})]})]}),"\n",(0,d.jsx)(s.h5,{id:"returns-4",children:"Returns"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"Promise"}),"<",(0,d.jsx)(s.code,{children:"Omit"}),"<",(0,d.jsx)(s.code,{children:"T"}),", ",(0,d.jsx)(s.code,{children:'"password"'}),"> | ",(0,d.jsx)(s.code,{children:"Omit"}),"<",(0,d.jsx)(s.code,{children:"T"}),", ",(0,d.jsx)(s.code,{children:'"password"'}),"> & ",(0,d.jsx)(s.a,{href:"../interfaces/PasswordStorageInterface",children:(0,d.jsx)(s.code,{children:"PasswordStorageInterface"})}),">"]}),"\n",(0,d.jsx)(s.p,{children:"A new object with the password hashed, with salt added."}),"\n",(0,d.jsx)(s.h5,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"PasswordStorageServiceInterface.hashObject"})}),"\n",(0,d.jsx)(s.h5,{id:"defined-in-3",children:"Defined in"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"https://github.com/conceptadev/rockets/blob/b1badb636a1ebad03d31d9d4e69eaab8759758df/packages/nestjs-password/src/services/password-storage.service.ts#L60",children:"packages/nestjs-password/src/services/password-storage.service.ts:60"})})]})}s.default=(0,n.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,t.a)(),e.components);return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(i,{...e})}):i(e)},pageOpts:{filePath:"pages/reference/rockets/nestjs-password/classes/PasswordStorageService.mdx",route:"/reference/rockets/nestjs-password/classes/PasswordStorageService",title:"Class: PasswordStorageService",headings:c},pageNextRoute:"/reference/rockets/nestjs-password/classes/PasswordStorageService"})}},function(e){e.O(0,[92673,92888,49774,40179],function(){return e(e.s=10375)}),_N_E=e.O()}]);