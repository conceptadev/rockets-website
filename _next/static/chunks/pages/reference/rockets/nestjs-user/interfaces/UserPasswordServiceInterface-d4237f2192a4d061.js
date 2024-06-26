(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4375],{78800:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/reference/rockets/nestjs-user/interfaces/UserPasswordServiceInterface",function(){return s(6174)}])},6174:function(e,r,s){"use strict";s.r(r),s.d(r,{__toc:function(){return t}});var n=s(85893),c=s(92673),d=s(82643);let t=[{depth:2,value:"Properties",id:"properties"},{depth:3,value:"getUserById()",id:"getuserbyid"},{depth:4,value:"Parameters",id:"parameters"},{depth:4,value:"Returns",id:"returns"},{depth:4,value:"Source",id:"source"},{depth:3,value:"setPassword()",id:"setpassword"},{depth:4,value:"Parameters",id:"parameters-1"},{depth:4,value:"Returns",id:"returns-1"},{depth:4,value:"Source",id:"source-1"}];function a(e){let r=Object.assign({p:"p",a:"a",strong:"strong",hr:"hr",h1:"h1",h2:"h2",h3:"h3",blockquote:"blockquote",code:"code",h4:"h4"},(0,d.a)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"../READMEmdx",children:(0,n.jsx)(r.strong,{children:"@concepta/nestjs-user"})})," • ",(0,n.jsx)(r.strong,{children:"Docs"})]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"../../packages",children:"Packages Example"})," / ",(0,n.jsx)(r.a,{href:"../READMEmdx",children:"@concepta/nestjs-user"})," / UserPasswordServiceInterface"]}),"\n",(0,n.jsx)(r.h1,{children:"Interface: UserPasswordServiceInterface"}),"\n",(0,n.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsx)(r.h3,{id:"getuserbyid",children:"getUserById()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"getUserById"}),": (",(0,n.jsx)(r.code,{children:"userId"}),") => ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.a,{href:"../../ts-core/interfaces/ReferenceIdInterface",children:(0,n.jsx)(r.code,{children:"ReferenceIdInterface"})}),"<",(0,n.jsx)(r.code,{children:"string"}),"> & ",(0,n.jsx)(r.a,{href:"../../nestjs-password/interfaces/PasswordStorageInterface",children:(0,n.jsx)(r.code,{children:"PasswordStorageInterface"})}),">"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Get the user being updated by id."}),"\n",(0,n.jsx)(r.p,{children:"Object must have reference id and password storage interface."}),"\n",(0,n.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["• ",(0,n.jsx)(r.strong,{children:"userId"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n",(0,n.jsx)(r.p,{children:"The id of the user that is being updated"}),"\n",(0,n.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.a,{href:"../../ts-core/interfaces/ReferenceIdInterface",children:(0,n.jsx)(r.code,{children:"ReferenceIdInterface"})}),"<",(0,n.jsx)(r.code,{children:"string"}),"> & ",(0,n.jsx)(r.a,{href:"../../nestjs-password/interfaces/PasswordStorageInterface",children:(0,n.jsx)(r.code,{children:"PasswordStorageInterface"})}),">"]}),"\n",(0,n.jsx)(r.h4,{id:"source",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-user/src/interfaces/user-password-service.interface.ts#L21",children:".tmp/repos/rockets/packages/nestjs-user/src/interfaces/user-password-service.interface.ts:21"})}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"setpassword",children:"setPassword()"}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"setPassword"}),": (",(0,n.jsx)(r.code,{children:"passwordDto"}),", ",(0,n.jsx)(r.code,{children:"userToUpdateId"}),"?, ",(0,n.jsx)(r.code,{children:"authorizedUser"}),"?) => ",(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.code,{children:"Omit"}),"<",(0,n.jsx)(r.code,{children:"Partial"}),"<",(0,n.jsx)(r.a,{href:"../../ts-common/interfaces/PasswordPlainInterface",children:(0,n.jsx)(r.code,{children:"PasswordPlainInterface"})}),">, ",(0,n.jsx)(r.code,{children:'"password"'}),"> | ",(0,n.jsx)(r.code,{children:"Omit"}),"<",(0,n.jsx)(r.code,{children:"Partial"}),"<",(0,n.jsx)(r.a,{href:"../../ts-common/interfaces/PasswordPlainInterface",children:(0,n.jsx)(r.code,{children:"PasswordPlainInterface"})}),">, ",(0,n.jsx)(r.code,{children:'"password"'}),"> & ",(0,n.jsx)(r.code,{children:"Partial"}),"<",(0,n.jsx)(r.a,{href:"../../nestjs-password/interfaces/PasswordStorageInterface",children:(0,n.jsx)(r.code,{children:"PasswordStorageInterface"})}),">>"]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Set the password (hash) on the user object."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:["• ",(0,n.jsx)(r.strong,{children:"passwordDto"}),": ",(0,n.jsx)(r.code,{children:"Partial"}),"<",(0,n.jsx)(r.a,{href:"../../ts-common/interfaces/PasswordPlainInterface",children:(0,n.jsx)(r.code,{children:"PasswordPlainInterface"})})," & ",(0,n.jsx)(r.a,{href:"../../ts-common/interfaces/PasswordPlainCurrentInterface",children:(0,n.jsx)(r.code,{children:"PasswordPlainCurrentInterface"})}),">"]}),"\n",(0,n.jsx)(r.p,{children:"The object containing the password, and optionally the current password."}),"\n",(0,n.jsxs)(r.p,{children:["• ",(0,n.jsx)(r.strong,{children:"userToUpdateId?"}),": ",(0,n.jsx)(r.code,{children:"string"})]}),"\n",(0,n.jsx)(r.p,{children:"The id of the user being updated."}),"\n",(0,n.jsxs)(r.p,{children:["• ",(0,n.jsx)(r.strong,{children:"authorizedUser?"}),": ",(0,n.jsx)(r.a,{href:"../../ts-common/interfaces/AuthenticatedUserInterface",children:(0,n.jsx)(r.code,{children:"AuthenticatedUserInterface"})})]}),"\n",(0,n.jsx)(r.p,{children:"The authorized user"}),"\n",(0,n.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Promise"}),"<",(0,n.jsx)(r.code,{children:"Omit"}),"<",(0,n.jsx)(r.code,{children:"Partial"}),"<",(0,n.jsx)(r.a,{href:"../../ts-common/interfaces/PasswordPlainInterface",children:(0,n.jsx)(r.code,{children:"PasswordPlainInterface"})}),">, ",(0,n.jsx)(r.code,{children:'"password"'}),"> | ",(0,n.jsx)(r.code,{children:"Omit"}),"<",(0,n.jsx)(r.code,{children:"Partial"}),"<",(0,n.jsx)(r.a,{href:"../../ts-common/interfaces/PasswordPlainInterface",children:(0,n.jsx)(r.code,{children:"PasswordPlainInterface"})}),">, ",(0,n.jsx)(r.code,{children:'"password"'}),"> & ",(0,n.jsx)(r.code,{children:"Partial"}),"<",(0,n.jsx)(r.a,{href:"../../nestjs-password/interfaces/PasswordStorageInterface",children:(0,n.jsx)(r.code,{children:"PasswordStorageInterface"})}),">>"]}),"\n",(0,n.jsx)(r.h4,{id:"source-1",children:"Source"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"https://github.com/conceptadev/rockets/blob/12bf1fb43ef2920555f448c79e6856ac157656e1/packages/nestjs-user/src/interfaces/user-password-service.interface.ts#L33",children:".tmp/repos/rockets/packages/nestjs-user/src/interfaces/user-password-service.interface.ts:33"})})]})}r.default=(0,c.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:r}=Object.assign({},(0,d.a)(),e.components);return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)},pageOpts:{filePath:"pages/reference/rockets/nestjs-user/interfaces/UserPasswordServiceInterface.mdx",route:"/reference/rockets/nestjs-user/interfaces/UserPasswordServiceInterface",title:"Interface: UserPasswordServiceInterface",headings:t},pageNextRoute:"/reference/rockets/nestjs-user/interfaces/UserPasswordServiceInterface"})}},function(e){e.O(0,[2673,2888,9774,179],function(){return e(e.s=78800)}),_N_E=e.O()}]);